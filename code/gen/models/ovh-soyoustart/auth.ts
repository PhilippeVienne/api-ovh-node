import {Schema} from '../../src/schema';

// imported from https://eu.api.soyoustart.com:443/1.0/auth.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Operations with credentials",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Request a new credential for your application",
          "httpMethod": "POST",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "Where you want to redirect the user after sucessfull authentication",
              "fullType": "string",
              "name": "redirection",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "auth.AccessRule[]",
              "description": "Access required for your application",
              "fullType": "auth.AccessRule[]",
              "name": "accessRules",
              "paramType": "body",
              "required": true
            }
          ],
          "responseType": "auth.Credential"
        }
      ],
      "path": "/auth/credential"
    },
    {
      "description": "Get the current credential details",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the current credential details",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "api.Credential"
        }
      ],
      "path": "/auth/currentCredential"
    },
    {
      "description": "Details about the current authentication",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Details about the current authentication",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "auth.Details"
        }
      ],
      "path": "/auth/details"
    },
    {
      "description": "Expire current credential",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Expire current credential",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "void"
        }
      ],
      "path": "/auth/logout"
    },
    {
      "description": "Get the time of OVH servers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get the current time of the OVH servers, since UNIX epoch",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [],
          "responseType": "long"
        }
      ],
      "path": "/auth/time"
    }
  ],
  "basePath": "https://eu.api.soyoustart.com/1.0",
  "models": {
    "api.Credential": {
      "description": "API Credential",
      "id": "Credential",
      "namespace": "api",
      "properties": {
        "allowedIPs": {
          "canBeNull": true,
          "description": "If defined, list of ip blocks which are allowed to call API with this credential",
          "fullType": "ipBlock[]",
          "readOnly": false,
          "required": false,
          "type": "ipBlock[]"
        },
        "applicationId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "creation": {
          "canBeNull": false,
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "credentialId": {
          "canBeNull": false,
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        },
        "expiration": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "lastUse": {
          "canBeNull": true,
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "ovhSupport": {
          "canBeNull": false,
          "description": "States whether this credential has been created by yourself or by the OVH support team",
          "fullType": "boolean",
          "readOnly": true,
          "required": true,
          "type": "boolean"
        },
        "rules": {
          "canBeNull": false,
          "fullType": "auth.AccessRule[]",
          "readOnly": true,
          "required": true,
          "type": "auth.AccessRule[]"
        },
        "status": {
          "canBeNull": false,
          "fullType": "auth.CredentialStateEnum",
          "readOnly": true,
          "required": true,
          "type": "auth.CredentialStateEnum"
        }
      }
    },
    "auth.AccessRule": {
      "description": "Access rule required for the application",
      "id": "AccessRule",
      "namespace": "auth",
      "properties": {
        "method": {
          "canBeNull": false,
          "fullType": "http.MethodEnum",
          "readOnly": false,
          "required": true,
          "type": "http.MethodEnum"
        },
        "path": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "auth.Credential": {
      "description": "Credential request to get access to the API",
      "id": "Credential",
      "namespace": "auth",
      "properties": {
        "consumerKey": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "state": {
          "canBeNull": false,
          "fullType": "auth.CredentialStateEnum",
          "readOnly": false,
          "required": true,
          "type": "auth.CredentialStateEnum"
        },
        "validationUrl": {
          "canBeNull": true,
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "auth.CredentialStateEnum": {
      "description": "All states a Credential can be in",
      "enum": [
        "expired",
        "pendingValidation",
        "refused",
        "validated"
      ],
      "enumType": "string",
      "id": "CredentialStateEnum",
      "namespace": "auth"
    },
    "auth.Details": {
      "description": "Details about the authentication used",
      "id": "Details",
      "namespace": "auth",
      "properties": {
        "description": {
          "canBeNull": true,
          "description": "Description",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "method": {
          "canBeNull": false,
          "description": "Authentication method",
          "fullType": "auth.MethodEnum",
          "readOnly": false,
          "required": true,
          "type": "auth.MethodEnum"
        },
        "roles": {
          "canBeNull": true,
          "description": "Roles",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "user": {
          "canBeNull": true,
          "description": "Username",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "auth.MethodEnum": {
      "description": "All Authentication methods available",
      "enum": [
        "account",
        "provider",
        "user"
      ],
      "enumType": "string",
      "id": "MethodEnum",
      "namespace": "auth"
    },
    "http.MethodEnum": {
      "description": "All HTTP methods available",
      "enum": [
        "DELETE",
        "GET",
        "POST",
        "PUT"
      ],
      "enumType": "string",
      "id": "MethodEnum",
      "namespace": "http"
    }
  },
  "resourcePath": "/auth"
}