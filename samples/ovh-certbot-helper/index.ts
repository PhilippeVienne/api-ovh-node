import OvhEngine from '@ovh-api/api';
import apiAuth from '@ovh-api/auth';
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import os from 'os';

const accessRules = `GET /domain/zone/*, PUT /domain/zone/*, POST /domain/zone/*, DELETE /domain/zone/*`;

async function getConfigIni(): Promise<string> {
  const ovhEngine = new OvhEngine({ accessRules });
  const auth = apiAuth(ovhEngine);
  const current = await auth.currentCredential.$get();
  const config = `# OVH API credentials used by Certbot
# created Date: ${current.creation}
# expire Date: ${current.expiration}
dns_ovh_endpoint = ovh-eu
dns_ovh_application_key = ${ovhEngine.appKey}
dns_ovh_application_secret = ${ovhEngine.appSecret}
dns_ovh_consumer_key = ${ovhEngine.consumerKey}`;
  return config;
}
interface Answer {
  distro: 'docker' | 'snap'
};
async function displayGui() {
  const resp = await inquirer.prompt<Answer>([{ type: 'list', name: 'distro', message: 'which certbot distro do you use ?', choices: ['snap', 'docker'] }])
  if (resp.distro === 'snap') {
    console.log('');
    console.log('sudo snap install certbot-dns-ovh')
    console.log('sudo certbot certonly --dns-ovh --dns-ovh-credentials ~/.secrets/certbot/ovh.ini --dns-ovh-propagation-seconds 60 -d "*.example.com"')
  } else if (resp.distro === 'docker') {
    console.log('');
    console.log('# add this alias in your .profile and activate it');
    console.log('alias certbot="docker run -it --rm -v /etc/letsencrypt:/etc/letsencrypt -v ${HOME}/.secrets/certbot/ovh.ini:/ovh.ini certbot/dns-ovh;')
    console.log('');
    console.log('sudo mkdir /etc/letsencrypt; sudo chown ${USER}: /etc/letsencrypt;');
    console.log('certbot certonly --dns-ovh --dns-ovh-credentials /ovh.ini --dns-ovh-propagation-seconds 60 -d "*.example.com"');
    console.log('');
    console.log('# renew cert within crontab:');
    console.log('0 11 * * * . .profile && certbot renew');
    console.log('');
    console.log('# You may add an other crontab entry to reload your nginx/apache config to reload your certificate');
  }
}

async function createovhIni(dest: string) {
  const home = os.homedir();
  let destShort = home;
  if (dest.startsWith(home)) {
    destShort = '~' + dest.substring(home.length);
  }
  const AUTO = `Let this script create the file ${destShort}.`;
  const SHELL = 'Print a bash conmmands to create the file.';
  const MANUAL = 'Just print the configuration file.';

  const resp = await inquirer.prompt<{ write: string }>([{
    type: 'list', name: 'write', message: 'How to process the certificat ?',
    choices: [AUTO, SHELL, MANUAL]
  }])

  const config = await getConfigIni();

  if (resp.write === AUTO) {
    const dir = path.dirname(dest);
    try {
      fs.promises.mkdir(dir, { recursive: true });
    } catch (e) {
      // ignore
    }
    await fs.promises.writeFile(dest, config, {encoding: 'utf8', flag: 'w', mode: 0o600});
    console.log(`cert generated in ${dest}`);
  }
  else if (resp.write === SHELL) {
    let EOF = 'EOF';
    if (destShort.includes(EOF)) {
      EOF = '___EOF___'
    }
    console.log('create a new ovh.ini file');
    console.log(`mkdir -p ${destShort}`);
    console.log(`cat << ${EOF} > ${destShort}`);
    console.log(config);
    console.log(EOF);
    console.log(`chmod 600 ${destShort}`)
    console.log('');
  }
  else if (resp.write === MANUAL) {
    console.log('');
    console.log(config);
    console.log('');
  }
}

async function main() {
  const dest = path.resolve(os.homedir(), '.secrets', 'certbot', 'ovh.ini');
  try {
    await fs.promises.stat(dest)
    console.log(`${dest} exists on this system, skip generation`);
  } catch (e) {
    await createovhIni(dest);
  }
  console.log('');
  displayGui()
  console.log('');
}

main();
