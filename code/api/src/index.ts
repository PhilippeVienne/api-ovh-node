/**
 * Copyright (c) 2019 - Uriel Chemouni
 * Copyright (c) 2013 - 2016 OVH SAS
 * Copyright (c) 2012 - 2013 Vincent Giersch
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Except as contained in this notice, the name of OVH and or its trademarks
 * shall not be used in advertising or otherwise to promote the sale, use or
 * other dealings in this Software without prior written authorization from OVH.
 */
import { IncomingMessage } from 'http';
import * as https from 'https';
import * as querystring from 'querystring';
import { createHash } from 'crypto';
import { Schema } from './schema';
import { RequestOptions } from 'http';
import { endpoints } from './endpoints';
import { OvhParamType, OvhRequestable } from '@ovh-api/common';
import open from 'open';
import { writeFile, readFileSync } from 'fs';

type DebugFnc = (...args: any[]) => any;

export interface OvhError {
    errorCode: 'INVALID_CREDENTIAL' | 'NOT_CREDENTIAL' | 'QUERY_TIME_OUT' | 'NOT_GRANTED_CALL';
    httpCode: string;
    message: string;
}

export interface OvhParams {
    appKey?: string;
    appSecret?: string;
    consumerKey?: string;
    timeout?: number;
    /**
     * time offset from remote server
     */
    apiTimeDiff?: number;
    /**
     * entrypoint of ovg default entrypoint
     */
    endpoint?: string;
    host?: string;
    port?: string;
    apis?: string[];
    debug?: boolean | DebugFnc,
    accessRules?: string[] | string;
    /**
     * certCache store ans use generated certificate in a file
     */
    certCache?: string;
}

interface AccessRule {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    path: string;
}
/**
 * simple wait promise generator
 * @param duration wime to wait in ms
 */
const wait = (duration: number) => (args?: any) => new Promise(resolve => setTimeout(() => (resolve(args)), duration));

export default class OvhApi implements OvhRequestable {
    appKey: string;
    appSecret: string;
    consumerKey: string | null;
    timeout?: number;
    apiTimeDiff: number | null;
    host: string;
    port: number;
    basePath: string; // '/1.0'
    debug?: DebugFnc;
    warn: DebugFnc;
    accessRules: string[];
    certCache: string;

    constructor(params: OvhParams) {
        this.appKey = params.appKey || 'qCLhWaDgfbAkbuzN';
        this.appSecret = params.appSecret || '8moT8ezpp5kaK2mBSEyazP1oQfEvMPu0';
        this.consumerKey = params.consumerKey || null;
        this.timeout = params.timeout;
        this.apiTimeDiff = params.apiTimeDiff || null;
        this.warn = console.log;
        this.certCache = params.certCache || '';

        if (params.accessRules) {
            if (typeof (params.accessRules) === 'string')
                this.accessRules = params.accessRules.split(/\s*[,;]\s*/);
            else
                this.accessRules = params.accessRules;
        } else {
            this.accessRules = ['GET /*', 'POST /*', 'PUT /*', 'DELETE /*'];
        }

        if (this.certCache) {
            let cached = '';
            try {
                cached = readFileSync(this.certCache, { encoding: 'utf-8' })
                let data = JSON.parse(cached);
                let { appKey, appSecret, consumerKey } = data;
                this.appKey = appKey;
                this.appSecret = appSecret;
                this.consumerKey = consumerKey;
            } catch { }
        }
        if (!params.appKey && !params.appSecret) {
            if (!this.consumerKey && !params.accessRules) {
                this.warn(`Initializing Api OVH without appKey / appSecret: using Default Certificat
provide an accessRules to choose the authorisation you need
by default I will ask for all rights`);
            }
        }

        // Custom configuration of the API endpoint
        let { host, port, endpoint, debug } = params;
        if (host) {
            this.host = host;
            this.port = Number(port) || 443;
        } else {
            endpoint = endpoint || 'ovh-eu';
            let selected = endpoints[endpoint]
            if (!selected)
                throw new Error('[OVH] Unknown API ' + endpoint);
            this.host = selected.host;
            this.port = Number(selected.port) || 443;
        }
        // params.basePath || 
        this.basePath = '/1.0';

        if (typeof (debug) === 'function')
            this.debug = debug;
        if (debug)
            this.debug = console.log;
        else
            this.debug = undefined;
        // Declared used API, will be used to check the associated schema
        if (typeof (this.appKey) !== 'string' ||
            typeof (this.appSecret) !== 'string') {
            throw new Error('[OVH] You should precise an application key / secret');
        }
    }
    /**
     * conver 'GET PATH1', 'POST PATH2', ... to AccessRules
     * 
     * @param rules 
     */
    toAccessRules(...rules: string[]): AccessRule[] {
        return <AccessRule[]>rules
            .map(s => s.split(/\s+/))
            .map(([method, path]) => ({ method, path }));
    }
    /**
     * Fetch an API schema
     *
     * @param {Object} options: HTTP request options
     * @param {Function} callback
     */
    loadSchemasRequest(options: https.RequestOptions): Promise<Schema> {
        return new Promise((resolve, reject) => {
            https.get(options, (res) => {
                let body: string = '';
                res.on('data', (chunk: string) => body += chunk)
                    .on('end', () => {
                        if (res.statusCode !== 200) {
                            return reject(
                                Error(`[OVH] Unable to load schema ${options.path}, HTTP response code: ${res.statusCode}`));
                        }
                        try {
                            return resolve(<Schema>JSON.parse(body));
                        } catch (e) {
                            return reject(
                                Error(`[OVH] Unable to parse the schema: ${options.path}`));
                        }
                    });
            })
                .on('error', (err) => reject(`[OVH] Unable to fetch the schemas: ${err}`));
        })
    }

    /**
     * Execute a request on the API
     *
     * @param {String} httpMethod: The HTTP method
     * @param {String} path: The request path
     * @param {Object} params: The request parameters (passed as query string or
     *                         body params)
     * @param {Function} callback
     * @param {Object} refer: The parent proxied object
     */
    async request(httpMethod: string, path: string, params?: any): Promise<any> {
        const ovhEngine = this;
        // Time drift
        if (ovhEngine.apiTimeDiff === null && path !== '/auth/time') {
            try {
                const time: number = await ovhEngine.request('GET', '/auth/time', {})
                ovhEngine.apiTimeDiff = time - Math.round(Date.now() / 1000);
            } catch (err) {
                throw '[OVH] Unable to fetch OVH API time' + err.message
            }
        }
        let path0 = path;
        let m: RegExpMatchArray | null = null;
        while (m = path.match(/{([^}]+)}/)) {
            let val = params[m[1]];
            if (val === undefined)
                return <Promise<any>>Promise.reject(`${m[1]} param must be provide to ${path0}`);
            delete params[m[1]];
            path = path.replace(m[0], String(val));
        }
        let options: RequestOptions = {
            host: ovhEngine.host,
            port: ovhEngine.port,
            method: httpMethod,
            path: ovhEngine.basePath + path
        };

        // Headers
        options.headers = {
            'Content-Type': 'application/json',
            'X-Ovh-Application': ovhEngine.appKey,
        };

        // Remove undefined values
        for (let k in params) {
            if (params.hasOwnProperty(k) && params[k] == null) {
                delete params[k];
            }
        }

        let reqBody: string = '';
        if (typeof (params) === 'object' && Object.keys(params).length > 0) {
            if (httpMethod === 'PUT' || httpMethod === 'POST') {
                // Escape unicode
                reqBody = JSON
                    .stringify(params)
                    .replace(/[\u0080-\uFFFF]/g, (m) => '\\u' + ('0000' + m.charCodeAt(0).toString(16)).slice(-4));
                options.headers['Content-Length'] = reqBody.length;
            } else {
                options.path += `?${querystring.stringify(params)}`;
            }
        }
        // signe operation if /auth service
        if (path !== '/auth/credential' && path !== '/auth/time') {
            const XOvhTimestamp: number = Math.round(Date.now() / 1000) + Number(ovhEngine.apiTimeDiff);
            options.headers['X-Ovh-Timestamp'] = XOvhTimestamp;

            // Sign request
            if (typeof (ovhEngine.consumerKey) === 'string') {
                options.headers['X-Ovh-Consumer'] = ovhEngine.consumerKey;
                options.headers['X-Ovh-Signature'] = ovhEngine.signRequest(
                    httpMethod, `https://${options.host}${options.path}`,
                    reqBody, XOvhTimestamp
                );
            }
        }

        if (ovhEngine.debug) {
            ovhEngine.debug(`[OVH] API call: ${options.method} ${options.path} ${reqBody}`);
        }
        // retry the Query thith a new cert
        const waitForCertValidation = async (consumerKey: string, validationUrl: string) => new Promise((done) => {
            // set consumerKey
            ovhEngine.consumerKey = consumerKey;
            console.log(`[OVH] MISSING_CREDENTIAL issue a new one: ${consumerKey}\nValidate this cert with this url to continue:\n${validationUrl}`)
            // try to open a brower, ignorring error
            open(validationUrl).catch(() => { });
            let pass = 0;
            const checkCert = () => ovhEngine.request('GET', '/auth/currentCredential')
                .then(({ status }) => {
                    if (status === 'validated') {
                        console.log('consumerKey Authorized!')
                        if (ovhEngine.certCache) {
                            let { appKey, appSecret, consumerKey } = ovhEngine;
                            writeFile(ovhEngine.certCache, JSON.stringify({ appKey, appSecret, consumerKey }, null, 2), { encoding: 'utf-8', mode: 0o600 }, done);
                        } else
                            done();
                        return false;
                    }
                    setTimeout(checkCert, 2000);
                }, ({ errorCode }) => {
                    // errorCode:"INVALID_CREDENTIAL"
                    // httpCode:"403 Forbidden"
                    // message:"This credential is not valid"
                    setTimeout(checkCert, 2000);
                    if (++pass % 15 == 0) {
                        if (errorCode === 'MISSING_CREDENTIAL')
                            console.log(`waiting for cert validation here: ${validationUrl}`)
                        else
                            console.log(`\n${errorCode}: ${consumerKey} url:\n${validationUrl}`)
                    }
                })
            setTimeout(checkCert, 2000)
        });

        const handleResponse = async (res: IncomingMessage, body: string) => {
            let response;
            if (body.length > 0) {
                try {
                    response = JSON.parse(body);
                } catch (e) {
                    //console.error('Failed to parse', body)
                    throw `[OVH] Unable to parse ${httpMethod} ${path} JSON reponse:${body}`;
                }
            } else {
                response = null;
            }

            if (ovhEngine.debug) {
                ovhEngine.debug(`[OVH] API response to ${httpMethod} ${path}: ${body}`);
            }
            if (res.statusCode === 200) {
                return response;
            }

            const error: OvhError = <OvhError>response;
            if (error.errorCode === 'INVALID_CREDENTIAL' || error.message === 'You must login first') {
                if (ovhEngine.consumerKey === null || ovhEngine.certCache) {
                    const rules = { accessRules: ovhEngine.toAccessRules.apply(this, ovhEngine.accessRules) };
                    let consumerKey, validationUrl;
                    try {
                        const credential = await ovhEngine.request('POST', '/auth/credential', rules);
                        consumerKey = credential['consumerKey'];
                        validationUrl = credential['validationUrl'];
                    } catch (e) {
                        throw `failed to request a credential with rule ${JSON.stringify(ovhEngine.accessRules)} ${e.message || e}`;
                    }
                    await waitForCertValidation(consumerKey, validationUrl);
                    return ovhEngine.request(httpMethod, path, params);
                }
                throw response;
            }
            if (response.errorCode)
                throw response;
            if (!response.message)
                throw 'ErrorCode ' + res.statusCode;
            throw res.statusCode + ': ' + response.message;
        }
        let retryCnt = 0;
        // Promisify https.request
        const makeRequest = () => new Promise((resolve, reject) => {
            let req = https.request(options, (res: IncomingMessage) => {
                let body = '';
                res.on('data', (chunk) => body += chunk)
                    .on('end', () => {
                        retryCnt++;
                        // 504 Gateway Time-out
                        if (res.statusCode == 504 && retryCnt < 5) {
                            console.log(`${retryCnt}/5) ${httpMethod} ${path} failed ${res.statusCode} ${res.statusMessage}`)
                            return wait(400)()
                                // .then(() => console.log('retry'))
                                .then(makeRequest)
                                .then(resolve, reject);
                        }
                        return handleResponse(res, body).then(resolve, reject)
                    })
            }).on('error', (e) => reject(e.message || e));

            // mocked socket has no setTimeout
            if (typeof (ovhEngine.timeout) === 'number') {
                req.on('socket', (socket) => {
                    socket.setTimeout(ovhEngine.timeout);
                    if (socket._events.timeout != null) {
                        socket.on('timeout', () => req.abort());
                    }
                });
            }
            if (reqBody != null) {
                req.write(reqBody);
            }
            req.end();
        });

        return makeRequest();// end return Query promise
    }

    /**
     * Execute a request on the API with promise
     *
     * @param {String} httpMethod: The HTTP method
     * @param {String} path: The request path
     * @param {Object} params: The request parameters (passed as query string or
     *                         body params)
     */
    requestPromised(httpMethod: string, path: string, params?: OvhParamType) {
        return this.request(httpMethod, path, params);
    }

    /**
     * Signs an API request
     *
     * @param {String} httpMethod
     * @param {String} url
     * @param {String} body
     * @param {Number|String} timestamp
     * @return {String} The signature
     */
    signRequest(httpMethod: string, url: string, body: string, timestamp: Number) {
        let s = [
            this.appSecret,
            this.consumerKey,
            httpMethod,
            url,
            body || '',
            String(timestamp)
        ];

        return '$1$' + createHash('sha1').update(s.join('+')).digest('hex');
    }
}
