# OVHCloud API client for **dedicated-ceph** region Europe

This module contains all typing needed to use OvhCloud **dedicated-ceph** APIs, with hi-level IntelliSense / Code Completion

[![NPM Version](https://img.shields.io/npm/v/@ovh-soyoustart/dedicated-ceph.svg?style=flat)](https://www.npmjs.org/package/@ovh-soyoustart/dedicated-ceph)

## Setup

With npm:

```bash
npm install --save @ovh-api/api
npm install --save @ovh-soyoustart/me
npm install --save @ovh-soyoustart/dedicated-ceph
... Add all APIs you needs
```

## Usage

```typescript
import OvhEngine from '@ovh-api/api';
import apiMe from '@ovh-soyoustart/me';
import apiDedicatedCeph from '@ovh-soyoustart/dedicated-ceph';

const ovhEngine = new OvhEngine({ 
    certCache: './cert-cache.json', // optional cache certificat on disk.
    accessRules: 'GET /dedicated/ceph, GET /dedicated/ceph/*, GET /me', // optional limit the requested privileges.
});

const api = {
    me: apiMe(ovhEngine),
    dedicatedCeph: apiDedicatedCeph(ovhEngine),
}

const test = async () => {
    const { nichandle } = await api.me.$get();
    const data = await api.dedicatedCeph.$get();
    console.log(`${nichandle} have the following services:`);
    console.log(data);
}
```