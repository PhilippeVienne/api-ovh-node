import {Schema} from '../../src/schema';

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "path": "/email/mxplan",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "List available services"
        }
      ],
      "description": "Operations about the MXPLAN service"
    },
    {
      "path": "/email/mxplan/{service}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            }
          ],
          "responseType": "email.mxplan.Service",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "email.mxplan.Service",
              "paramType": "body",
              "fullType": "email.mxplan.Service",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "MXPlan service"
    },
    {
      "path": "/email/mxplan/{service}/account",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of id property (like)"
            },
            {
              "name": "primaryEmailAddress",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of primaryEmailAddress property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Accounts associated to this mxplan service"
        }
      ],
      "description": "List the email.mxplan.Account objects"
    },
    {
      "path": "/email/mxplan/{service}/account/{email}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "Delete existing mailbox in mxplan server"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.mxplan.Account",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "email.mxplan.Account",
              "paramType": "body",
              "fullType": "email.mxplan.Account",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Mailbox"
    },
    {
      "path": "/email/mxplan/{service}/account/{email}/alias",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Aliases associated to this mailbox"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "alias",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Alias"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "Create new alias"
        }
      ],
      "description": "List the email.mxplan.AccountAlias objects"
    },
    {
      "path": "/email/mxplan/{service}/account/{email}/alias/{alias}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            },
            {
              "name": "alias",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Alias"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "Delete existing alias"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            },
            {
              "name": "alias",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Alias"
            }
          ],
          "responseType": "email.mxplan.AccountAlias",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Aliases on this mailbox"
    },
    {
      "path": "/email/mxplan/{service}/account/{email}/capabilities",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.mxplan.accountCapabilities",
          "noAuthentication": false,
          "description": "Get available capabilities for this account"
        }
      ],
      "description": "capabilities operations"
    },
    {
      "path": "/email/mxplan/{service}/account/{email}/changePassword",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "new password"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "Change mailbox password"
        }
      ],
      "description": "changePassword operations"
    },
    {
      "path": "/email/mxplan/{service}/account/{email}/diagnostic",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.mxplan.AccountDiagnosis",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "password",
              "dataType": "password",
              "paramType": "body",
              "fullType": "password",
              "required": true,
              "description": "Account password"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "Create new diagnosis request"
        }
      ],
      "description": "Account Diagnosis"
    },
    {
      "path": "/email/mxplan/{service}/account/{email}/fullAccess",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Full access granted users for this mailbox"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "User to give full access"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "Allow full access to a user"
        }
      ],
      "description": "List the email.mxplan.AccountFullAccess objects"
    },
    {
      "path": "/email/mxplan/{service}/account/{email}/fullAccess/{allowedAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "Revoke full access"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.mxplan.AccountFullAccess",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Users having full access on this mailbox"
    },
    {
      "path": "/email/mxplan/{service}/account/{email}/sendAs",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Send as granted users for this mailbox"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "allowAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Account id to allow to send mails from this mailbox"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "Allow another user to send mails from this mailbox"
        }
      ],
      "description": "List the email.mxplan.AccountSendAs objects"
    },
    {
      "path": "/email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "Delete allowed user for sendAs"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            }
          ],
          "responseType": "email.mxplan.AccountSendAs",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Users authorized to send mails from this mailbox"
    },
    {
      "path": "/email/mxplan/{service}/account/{email}/sendOnBehalfTo",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "SendOnBehalfTo granted users for this mailbox"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "allowAccountId",
              "dataType": "long",
              "paramType": "body",
              "fullType": "long",
              "required": true,
              "description": "Account id to allow to send On Behalf To mails from this mailbox"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "Allow another user to Send On Behalf To mails from this mailbox"
        }
      ],
      "description": "List the email.mxplan.AccountSendOnBehalfTo objects"
    },
    {
      "path": "/email/mxplan/{service}/account/{email}/sendOnBehalfTo/{allowedAccountId}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "Delete allowed user for SendOnBehalfTo"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            },
            {
              "name": "allowedAccountId",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Allowed account ID"
            }
          ],
          "responseType": "email.mxplan.AccountSendOnBehalfTo",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Get users authorized to Send On Behalf To mails from this mailbox"
    },
    {
      "path": "/email/mxplan/{service}/account/{email}/task",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Pending task for this mailbox"
        }
      ],
      "description": "List the email.pro.Task objects"
    },
    {
      "path": "/email/mxplan/{service}/account/{email}/task/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "email",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Email"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Organization task details"
    },
    {
      "path": "/email/mxplan/{service}/domain",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "state",
              "dataType": "email.pro.ObjectStateEnum",
              "paramType": "query",
              "fullType": "email.pro.ObjectStateEnum",
              "required": false,
              "description": "Filter the value of state property (=)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "Domains associated to this service"
        }
      ],
      "description": "List the email.mxplan.Domain objects"
    },
    {
      "path": "/email/mxplan/{service}/domain/{domainName}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "domainName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            }
          ],
          "responseType": "email.mxplan.Domain",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "email.mxplan.Domain",
              "paramType": "body",
              "fullType": "email.mxplan.Domain",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "domainName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "Domain"
    },
    {
      "path": "/email/mxplan/{service}/domain/{domainName}/disclaimer",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "domainName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "Delete existing organization disclaimer"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "domainName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            }
          ],
          "responseType": "email.pro.disclaimer",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "outsideOnly",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Activate the disclaimer only for external emails"
            },
            {
              "name": "content",
              "dataType": "text",
              "paramType": "body",
              "fullType": "text",
              "required": true,
              "description": "Signature, added at the bottom of your organization emails"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "domainName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "Create organization disclaimer of each email"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "email.pro.disclaimer",
              "paramType": "body",
              "fullType": "email.pro.disclaimer",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "domainName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "disclaimer"
    },
    {
      "path": "/email/mxplan/{service}/domain/{domainName}/disclaimerAttribute",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "domainName",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Domain name"
            }
          ],
          "responseType": "email.pro.DisclaimerAttributeEnum[]",
          "noAuthentication": false,
          "description": "Get diclaimer attributes to substitute with Active Directory properties"
        }
      ],
      "description": "disclaimerAttribute operations"
    },
    {
      "path": "/email/mxplan/{service}/externalContact",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "firstName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of firstName property (like)"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "query",
              "fullType": "long",
              "required": false,
              "description": "Filter the value of id property (like)"
            },
            {
              "name": "externalEmailAddress",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of externalEmailAddress property (like)"
            },
            {
              "name": "lastName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of lastName property (like)"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "query",
              "fullType": "string",
              "required": false,
              "description": "Filter the value of displayName property (like)"
            }
          ],
          "responseType": "string[]",
          "noAuthentication": false,
          "description": "External contacts for this service"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "externalEmailAddress",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": true,
              "description": "Contact email address"
            },
            {
              "name": "lastName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact last name"
            },
            {
              "name": "hiddenFromGAL",
              "dataType": "boolean",
              "paramType": "body",
              "fullType": "boolean",
              "required": false,
              "description": "Hide the contact in Global Address List"
            },
            {
              "name": "displayName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact display name"
            },
            {
              "name": "initials",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact initials"
            },
            {
              "name": "firstName",
              "dataType": "string",
              "paramType": "body",
              "fullType": "string",
              "required": false,
              "description": "Contact first name"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "create new external contact"
        }
      ],
      "description": "List the email.mxplan.ExternalContact objects"
    },
    {
      "path": "/email/mxplan/{service}/externalContact/{externalEmailAddress}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "DELETE",
          "parameters": [
            {
              "name": "externalEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "External email address"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "delete external contact"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "externalEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "External email address"
            }
          ],
          "responseType": "email.mxplan.ExternalContact",
          "noAuthentication": false,
          "description": "Get this object properties"
        },
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "PUT",
          "parameters": [
            {
              "dataType": "email.mxplan.ExternalContact",
              "paramType": "body",
              "fullType": "email.mxplan.ExternalContact",
              "required": true,
              "description": "Request Body"
            },
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "externalEmailAddress",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "External email address"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Alter this object properties"
        }
      ],
      "description": "External contact for this mxplan service"
    },
    {
      "path": "/email/mxplan/{service}/server",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            }
          ],
          "responseType": "email.mxplan.Server",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Server"
    },
    {
      "path": "/email/mxplan/{service}/task",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            }
          ],
          "responseType": "long[]",
          "noAuthentication": false,
          "description": "Pending actions"
        }
      ],
      "description": "List the email.pro.Task objects"
    },
    {
      "path": "/email/mxplan/{service}/task/{id}",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "GET",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            },
            {
              "name": "id",
              "dataType": "long",
              "paramType": "path",
              "fullType": "long",
              "required": true,
              "description": "Id"
            }
          ],
          "responseType": "email.pro.Task",
          "noAuthentication": false,
          "description": "Get this object properties"
        }
      ],
      "description": "Organization task details"
    },
    {
      "path": "/email/mxplan/{service}/updateFlagsOnAllAccounts",
      "operations": [
        {
          "apiStatus": {
            "description": "Beta version",
            "value": "BETA"
          },
          "httpMethod": "POST",
          "parameters": [
            {
              "name": "service",
              "dataType": "string",
              "paramType": "path",
              "fullType": "string",
              "required": true,
              "description": "Service"
            }
          ],
          "responseType": "void",
          "noAuthentication": false,
          "description": "Update spam and virus flags on all active accounts"
        }
      ],
      "description": "updateFlagsOnAllAccounts operations"
    }
  ],
  "resourcePath": "/email/mxplan",
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "email.mxplan.Account": {
      "id": "Account",
      "namespace": "email.mxplan",
      "description": "Mailbox",
      "properties": {
        "SAMAccountName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "SAM account name",
          "required": false
        },
        "configured": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicates if the account is configured",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Creation date",
          "required": false
        },
        "currentUsage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Mailbox usage",
          "required": false
        },
        "deleteAtExpiration": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": true,
          "readOnly": false,
          "description": "delete at expiration",
          "required": false
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Account display name",
          "required": false
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Email domain",
          "required": true
        },
        "expirationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "expiration date",
          "required": false
        },
        "expirationOutlookDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "expiration date",
          "required": false
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Account first name",
          "required": false
        },
        "hiddenFromGAL": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hide account in Global Address List",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id",
          "required": true
        },
        "initial": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Account initials",
          "required": false
        },
        "lastLogoffDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last logoff",
          "required": false
        },
        "lastLogonDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last logon",
          "required": false
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Account last name",
          "required": false
        },
        "lastUpdateDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Last update",
          "required": false
        },
        "login": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Account login",
          "required": true
        },
        "mailingFilter": {
          "type": "email.pro.MailingFilterEnum[]",
          "fullType": "email.pro.MailingFilterEnum[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "Enable or disable anti-virus and anti-spam",
          "required": false
        },
        "passwordLastUpdate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Time of account's password last update",
          "required": false
        },
        "primaryEmailAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Default email for this mailbox",
          "required": true
        },
        "quota": {
          "type": "double",
          "fullType": "double",
          "canBeNull": false,
          "readOnly": false,
          "description": "Account maximum size",
          "required": true
        },
        "renewPeriod": {
          "type": "email.pro.renewPeriodEnum",
          "fullType": "email.pro.renewPeriodEnum",
          "canBeNull": true,
          "readOnly": false,
          "description": "change the renew period",
          "required": false
        },
        "spamAndVirusConfiguration": {
          "type": "email.pro.spamAndVirusConfiguration",
          "fullType": "email.pro.spamAndVirusConfiguration",
          "canBeNull": false,
          "readOnly": false,
          "description": "Spam and Antivirus configuration",
          "required": true
        },
        "spamDetected": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account was sending spam",
          "required": true
        },
        "spamTicketNumber": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Ticket number of spam detection",
          "required": false
        },
        "state": {
          "type": "email.pro.ObjectStateEnum",
          "fullType": "email.pro.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Pending tasks for this account",
          "required": false
        }
      }
    },
    "email.mxplan.AccountAlias": {
      "id": "AccountAlias",
      "namespace": "email.mxplan",
      "description": "Aliases on this mailbox",
      "properties": {
        "alias": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Alias",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.mxplan.AccountDiagnosis": {
      "id": "AccountDiagnosis",
      "namespace": "email.mxplan",
      "description": "Account Diagnosis",
      "properties": {
        "canReceiveEmail": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Determines if ingoing message has been received",
          "required": true
        },
        "canSendEmail": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Determines if outgoing message has been delivered",
          "required": true
        },
        "connectiveWebmail": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Determines if possible to authenticate with credentials",
          "required": true
        },
        "isLocked": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Determines if account is locked",
          "required": true
        },
        "isMxValid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Determines if MX record for account's domain is properly set",
          "required": true
        },
        "isSpammer": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Determines if account is flagged as spammer",
          "required": true
        },
        "isSrvValid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Determines if SRV (autodiscovery) record for account's domain is properly set",
          "required": true
        },
        "isSuspended": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Determines if account is suspended",
          "required": true
        },
        "lastCheck": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Last performed diagnostics date",
          "required": true
        }
      }
    },
    "email.mxplan.AccountFullAccess": {
      "id": "AccountFullAccess",
      "namespace": "email.mxplan",
      "description": "Users having full access on this mailbox",
      "properties": {
        "allowedAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id to give full access",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.mxplan.AccountSendAs": {
      "id": "AccountSendAs",
      "namespace": "email.mxplan",
      "description": "Users authorized to send mails from this mailbox",
      "properties": {
        "allowedAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id to give send as",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.mxplan.AccountSendOnBehalfTo": {
      "id": "AccountSendOnBehalfTo",
      "namespace": "email.mxplan",
      "description": "Get users authorized to Send On Behalf To mails from this mailbox",
      "properties": {
        "allowedAccountId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Account id to give send on behalf to",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending task id",
          "required": true
        }
      }
    },
    "email.mxplan.Domain": {
      "id": "Domain",
      "namespace": "email.mxplan",
      "description": "Domain",
      "properties": {
        "cnameToCheck": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Cname that will be checked to prove the domain ownership",
          "required": false
        },
        "domainAliases": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "List of aliases for this domain",
          "required": true
        },
        "domainValidated": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain validation status",
          "required": true
        },
        "isAliasDomain": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "Indicate if this domain is an alias for another domain",
          "required": true
        },
        "mxIsValid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true your dns mx configuration is valid",
          "required": true
        },
        "mxRecord": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain MX record configured in DNS",
          "required": true
        },
        "mxRelay": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "If specified, emails to not existing address will be redirected to that domain",
          "required": false
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain name",
          "required": true
        },
        "srvIsValid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true your dns srv record is valid",
          "required": true
        },
        "srvRecord": {
          "type": "string[]",
          "fullType": "string[]",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain SRV record configured in DNS",
          "required": true
        },
        "state": {
          "type": "email.pro.ObjectStateEnum",
          "fullType": "email.pro.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Pending taks id",
          "required": true
        },
        "type": {
          "type": "email.pro.DomainTypeEnum",
          "fullType": "email.pro.DomainTypeEnum",
          "canBeNull": false,
          "readOnly": false,
          "description": "Domain type",
          "required": true
        }
      }
    },
    "email.mxplan.ExternalContact": {
      "id": "ExternalContact",
      "namespace": "email.mxplan",
      "description": "External contact for this mxplan service",
      "properties": {
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact display name",
          "required": true
        },
        "externalEmailAddress": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": false,
          "description": "Contact email",
          "required": true
        },
        "firstName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Contact first name",
          "required": false
        },
        "hiddenFromGAL": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Hide the contact in Global Address List",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Contact id",
          "required": true
        },
        "initials": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Contact initals",
          "required": false
        },
        "lastName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "Contact last name",
          "required": false
        },
        "state": {
          "type": "email.pro.ObjectStateEnum",
          "fullType": "email.pro.ObjectStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Contact state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task pending id",
          "required": true
        }
      }
    },
    "email.mxplan.Server": {
      "id": "Server",
      "namespace": "email.mxplan",
      "description": "Server",
      "properties": {
        "currentDiskUsage": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Current disk usage in MB",
          "required": false
        },
        "diskSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Total disk size in MB",
          "required": false
        },
        "ip": {
          "type": "ipv4",
          "fullType": "ipv4",
          "canBeNull": false,
          "readOnly": true,
          "description": "ipV4",
          "required": true
        },
        "ipV6": {
          "type": "ipv6",
          "fullType": "ipv6",
          "canBeNull": true,
          "readOnly": true,
          "description": "ipV6",
          "required": false
        },
        "isAValid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true your dns A record is valid",
          "required": true
        },
        "isAaaaValid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true your dns AAAA record is valid",
          "required": true
        },
        "isPtrV6Valid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true your dns ptrV6 record is valid",
          "required": true
        },
        "isPtrValid": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": true,
          "description": "If true your dns ptr record is valid",
          "required": true
        },
        "state": {
          "type": "email.pro.ServerStateEnum",
          "fullType": "email.pro.ServerStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Server state",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task pending id",
          "required": true
        },
        "version": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": true,
          "description": "Server version",
          "required": false
        }
      }
    },
    "email.mxplan.Service": {
      "id": "Service",
      "namespace": "email.mxplan",
      "description": "MXPlan service",
      "properties": {
        "complexityEnabled": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "enable policy for strong and secure passwords",
          "required": true
        },
        "displayName": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": false,
          "description": "service displayName",
          "required": false
        },
        "domain": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Domain name of your service",
          "required": true
        },
        "hostname": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "Hostname of your service",
          "required": false
        },
        "lastUpdateDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Update date",
          "required": false
        },
        "lockoutDuration": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "number of minutes account will remain locked if it occurs",
          "required": true
        },
        "lockoutObservationWindow": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "number of minutes that must elapse after a failed logon to reset lockout trigger",
          "required": true
        },
        "lockoutThreshold": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "number of attempts before account to be locked",
          "required": false
        },
        "maxPasswordAge": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "maximum number of days that account's password is valid before expiration",
          "required": false
        },
        "maxReceiveSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum message size that You can receive in MB",
          "required": true
        },
        "maxSendSize": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": false,
          "description": "Maximum message size that You can send in MB",
          "required": true
        },
        "minPasswordAge": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "minimum number of days before able to change account's password",
          "required": false
        },
        "minPasswordLength": {
          "type": "long",
          "fullType": "long",
          "canBeNull": true,
          "readOnly": false,
          "description": "minimum number of characters password must contain",
          "required": false
        },
        "offer": {
          "type": "email.mxplan.ServiceOfferEnum",
          "fullType": "email.mxplan.ServiceOfferEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Type of your offer",
          "required": true
        },
        "spamAndVirusConfiguration": {
          "type": "email.pro.spamAndVirusConfiguration",
          "fullType": "email.pro.spamAndVirusConfiguration",
          "canBeNull": false,
          "readOnly": false,
          "description": "Spam and Antivirus configuration",
          "required": true
        },
        "state": {
          "type": "email.pro.ServiceStateEnum",
          "fullType": "email.pro.ServiceStateEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "State of your service",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task pending id",
          "required": true
        },
        "webUrl": {
          "type": "string",
          "fullType": "string",
          "canBeNull": true,
          "readOnly": true,
          "description": "URL for web interface",
          "required": false
        }
      }
    },
    "email.mxplan.ServiceOfferEnum": {
      "id": "ServiceOfferEnum",
      "namespace": "email.mxplan",
      "description": "Service Offer name",
      "enum": [
        "MXPLAN"
      ],
      "enumType": "string"
    },
    "email.mxplan.accountCapabilities": {
      "id": "accountCapabilities",
      "namespace": "email.mxplan",
      "description": "Account capabilities",
      "properties": {
        "quotas": {
          "type": "double[]",
          "fullType": "double[]",
          "canBeNull": true,
          "readOnly": false,
          "description": "List of allowed quotas (no constraint if null)",
          "required": false
        }
      }
    },
    "email.pro.DisclaimerAttributeEnum": {
      "id": "DisclaimerAttributeEnum",
      "namespace": "email.pro",
      "description": "Disclaimer attributes list",
      "enum": [
        "City",
        "Company",
        "Country",
        "Department",
        "DisplayName",
        "Email",
        "FaxNumber",
        "FirstName",
        "HomePhoneNumber",
        "Initials",
        "LastName",
        "Manager",
        "MobileNumber",
        "Notes",
        "Office",
        "OtherFaxNumber",
        "OtherHomePhoneNumber",
        "OtherPhoneNumber",
        "PagerNumber",
        "PhoneNumber",
        "State",
        "Street",
        "Title",
        "UserLogonName",
        "ZipCode"
      ],
      "enumType": "string"
    },
    "email.pro.DomainTypeEnum": {
      "id": "DomainTypeEnum",
      "namespace": "email.pro",
      "description": "Domain type",
      "enum": [
        "authoritative",
        "nonAuthoritative"
      ],
      "enumType": "string"
    },
    "email.pro.MailingFilterEnum": {
      "id": "MailingFilterEnum",
      "namespace": "email.pro",
      "description": "Mailing filter options availlable",
      "enum": [
        "vaderetro"
      ],
      "enumType": "string"
    },
    "email.pro.ObjectStateEnum": {
      "id": "ObjectStateEnum",
      "namespace": "email.pro",
      "description": "Current object state",
      "enum": [
        "creating",
        "deleting",
        "ok",
        "reopening",
        "suspended",
        "suspending",
        "unknown"
      ],
      "enumType": "string"
    },
    "email.pro.ServerStateEnum": {
      "id": "ServerStateEnum",
      "namespace": "email.pro",
      "description": "Server State",
      "enum": [
        "configurationPending",
        "notConfigured",
        "ok"
      ],
      "enumType": "string"
    },
    "email.pro.ServiceStateEnum": {
      "id": "ServiceStateEnum",
      "namespace": "email.pro",
      "description": "Service State",
      "enum": [
        "creating",
        "deleting",
        "inMaintenance",
        "ok",
        "reopening",
        "suspended",
        "suspending"
      ],
      "enumType": "string"
    },
    "email.pro.Task": {
      "id": "Task",
      "namespace": "email.pro",
      "description": "Organization task details",
      "properties": {
        "finishDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": true,
          "readOnly": true,
          "description": "Completion date",
          "required": false
        },
        "function": {
          "type": "email.pro.TaskFunctionEnum",
          "fullType": "email.pro.TaskFunctionEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Function name",
          "required": true
        },
        "id": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task id",
          "required": true
        },
        "status": {
          "type": "email.pro.TaskStatusEnum",
          "fullType": "email.pro.TaskStatusEnum",
          "canBeNull": false,
          "readOnly": true,
          "description": "Task status",
          "required": true
        },
        "todoDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        }
      }
    },
    "email.pro.TaskFunctionEnum": {
      "id": "TaskFunctionEnum",
      "namespace": "email.pro",
      "description": "function enumeration for task",
      "enum": [
        "addAccount",
        "addAlias",
        "addDomain",
        "addDomainDisclaimer",
        "addExternalContact",
        "addFullAccess",
        "addSendAs",
        "addSendOnBehalfTo",
        "addServiceAuthorizedIp",
        "changeHostname",
        "changePassword",
        "configureCustomer",
        "deleteAccount",
        "deleteAlias",
        "deleteDomain",
        "deleteDomainDisclaimer",
        "deleteExternalContact",
        "deleteFullAccess",
        "deleteSendAs",
        "deleteSendOnBehalfTo",
        "deleteService",
        "deleteServiceAuthorizedIp",
        "diagnoseAccount",
        "expandDrive",
        "installServer",
        "maintenance",
        "migrateAccountViaOMM",
        "migrationAccount",
        "migrationDisclaimer",
        "migrationExternalContact",
        "migrationHistory",
        "migrationService",
        "reOpenAccount",
        "setAccount",
        "setAlias",
        "setDns",
        "setDomain",
        "setDomainDisclaimer",
        "setExternalContact",
        "setService",
        "suspendAccount",
        "suspendService",
        "unknown",
        "unsuspendAccount",
        "unsuspendService"
      ],
      "enumType": "string"
    },
    "email.pro.TaskStatusEnum": {
      "id": "TaskStatusEnum",
      "namespace": "email.pro",
      "description": "Task status",
      "enum": [
        "cancelled",
        "doing",
        "done",
        "error",
        "todo"
      ],
      "enumType": "string"
    },
    "email.pro.disclaimer": {
      "id": "disclaimer",
      "namespace": "email.pro",
      "description": "disclaimer",
      "properties": {
        "content": {
          "type": "text",
          "fullType": "text",
          "canBeNull": false,
          "readOnly": false,
          "description": "Signature, added at the bottom of your organization emails",
          "required": true
        },
        "creationDate": {
          "type": "datetime",
          "fullType": "datetime",
          "canBeNull": false,
          "readOnly": true,
          "description": "Creation date",
          "required": true
        },
        "name": {
          "type": "string",
          "fullType": "string",
          "canBeNull": false,
          "readOnly": true,
          "description": "Disclaimer name",
          "required": true
        },
        "outsideOnly": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Activate the disclaimer only for external emails",
          "required": true
        },
        "taskPendingId": {
          "type": "long",
          "fullType": "long",
          "canBeNull": false,
          "readOnly": true,
          "description": "task pending id",
          "required": true
        }
      }
    },
    "email.pro.renewPeriodEnum": {
      "id": "renewPeriodEnum",
      "namespace": "email.pro",
      "description": "Renew period",
      "enum": [
        "monthly",
        "yearly"
      ],
      "enumType": "string"
    },
    "email.pro.spamAndVirusConfiguration": {
      "id": "spamAndVirusConfiguration",
      "namespace": "email.pro",
      "description": "Spam and Antyvirus configuration",
      "properties": {
        "checkDKIM": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Check DKIM of message",
          "required": true
        },
        "checkSPF": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "Check SPF of message",
          "required": true
        },
        "deleteSpam": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If message is a spam delete it",
          "required": true
        },
        "deleteVirus": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If message is a virus delete it",
          "required": true
        },
        "putInJunk": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If message is a spam or virus put in junk. Overridden by deleteSpam or deleteVirus",
          "required": true
        },
        "tagSpam": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If message is a spam change its subject",
          "required": true
        },
        "tagVirus": {
          "type": "boolean",
          "fullType": "boolean",
          "canBeNull": false,
          "readOnly": false,
          "description": "If message is a virus change its subject",
          "required": true
        }
      }
    }
  }
}