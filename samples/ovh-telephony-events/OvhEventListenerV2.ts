import { EventEmitter } from "events";
import { IOvhEventListener, gToken, gTokenGroup, EventSession, VoipEventV2 } from "./model";
import { IHandyRedis } from "handy-redis";

const headers = { 'Content-Type': 'application/json', 'Accept': 'text/plain' };

export class OvhEventListenerV2 extends EventEmitter implements IOvhEventListener {
    private redis: IHandyRedis | null;
    private tokens: gToken[];
    private channel: string;
    constructor(tokens: gToken[]) {
        super();
        this.redis = null
        this.tokens = tokens;
        this.channel = '';
    }

    public setRedis(redis: IHandyRedis, channel: string): OvhEventListenerV2 {
        this.redis = redis;
        this.channel = channel;
        return this;
    }

    public async listen() {
        let groups2: gTokenGroup[] = [];
        groups2.push({ groups: [], session: '' });
        for (let i = 0; i < this.tokens.length; i++) {
            let last = groups2[groups2.length - 1];
            if (last.groups.length >= 5) {
                last = { groups: [], session: '' };
                groups2.push(last);
            }
            last.groups.push(this.tokens[i]);
        }
        console.log(`${this.tokens.length} billingGroups grouped as ${groups2.length} groups`)
        for (const group of groups2) {
            const method = 'POST';
            let response = await fetch('https://events.voip.ovh.net/v2/session', { method, headers })
            let session: EventSession = await response.json();
            group.session = session.id;
            for (const g2 of group.groups) {
                const url = `https://events.voip.ovh.net/v2/session/${group.session}/subscribe/${g2.token}`;
                let response = await fetch(url, { method, headers })
                let resp = await response.text();
                // console.log(resp); // Successfully subscribed on token xxxxxx-xxx-xxxxx-xxxx-xxxxxxxxxxxx
            }
        }
        console.log(`Registred Ok on event Api V2`)
        const listen = groups2.map(async (group: gTokenGroup) => {
            const url = `https://events.voip.ovh.net/v2/session/${group.session}/events/poll`;
            while (true) {
                try {
                    let response = await fetch(url, { method: 'GET', headers })
                    let events: VoipEventV2[] = await response.json();
                    if (events && events.length) {
                        if (this.listenerCount("message") > 0) {
                            for (const m of events) {
                                delete m['token']; // hide token
                                this.emit("message", m);
                            }
                        }
                        if (this.redis) {
                            console.log(`${(new Date()).toISOString()} Send ${events.length} event to ${this.channel}`);
                            for (const m of events) {
                                delete m['token']; // hide token
                                await this.redis.publish(this.channel, JSON.stringify(m));
                            }
                        }
                    }
                } catch { }
            }
        })
        await Promise.all(listen);
    }
}