# OVHCloud API client for **email-domain** region Europe

This module contains all typing needed to use OvhCloud **email-domain** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-kimsufi/email-domain.svg?style=flat)](https://www.npmjs.org/package/@ovh-kimsufi/email-domain)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-kimsufi/me
npm install --save @ovh-kimsufi/email-domain
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-kimsufi/me';
import apiEmailDomain from '@ovh-kimsufi/email-domain';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /email/domain, GET /email/domain/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    emailDomain: apiEmailDomain(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.emailDomain.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```