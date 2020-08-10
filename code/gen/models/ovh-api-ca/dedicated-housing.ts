import {Schema} from '../../src/schema';

// imported from https://ca.api.ovh.com:443/1.0/dedicated/housing.json

export const schema: Schema = {
  "apiVersion": "1",
  "apis": [
    {
      "description": "Operations about the HOUSING service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List available services",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/housing"
    },
    {
      "description": "Housing bay",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.housing.Housing"
        }
      ],
      "path": "/dedicated/housing/{serviceName}"
    },
    {
      "description": "Backup Ftp assigned to this server",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.server.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.server.BackupFtp"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new Backup FTP space",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/housing/{serviceName}/features/backupFTP"
    },
    {
      "description": "List the dedicated.server.BackupFtpAcl objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipBlock[]"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Create a new Backup FTP ACL",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "boolean",
              "description": "Wether to allow the FTP protocol for this ACL",
              "fullType": "boolean",
              "name": "ftp",
              "paramType": "body",
              "required": false
            },
            {
              "dataType": "ipBlock",
              "description": "The IP Block specific to this ACL. It musts belong to your server.",
              "fullType": "ipBlock",
              "name": "ipBlock",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Wether to allow the NFS protocol for this ACL",
              "fullType": "boolean",
              "name": "nfs",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "boolean",
              "description": "Wether to allow the CIFS (SMB) protocol for this ACL",
              "fullType": "boolean",
              "name": "cifs",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/housing/{serviceName}/features/backupFTP/access"
    },
    {
      "description": "Backup Ftp ACL for this server and Backup Ftp",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Revoke this ACL",
          "httpMethod": "DELETE",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "ipBlock",
              "description": "Ip block",
              "fullType": "ipBlock",
              "name": "ipBlock",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.server.Task"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "Ip block",
              "fullType": "ipBlock",
              "name": "ipBlock",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.server.BackupFtpAcl"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "dedicated.server.BackupFtpAcl",
              "description": "Request Body",
              "fullType": "dedicated.server.BackupFtpAcl",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "ipBlock",
              "description": "Ip block",
              "fullType": "ipBlock",
              "name": "ipBlock",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}"
    },
    {
      "description": "authorizableBlocks operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get all IP blocks that can be used in the ACL",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "ipBlock[]"
        }
      ],
      "path": "/dedicated/housing/{serviceName}/features/backupFTP/authorizableBlocks"
    },
    {
      "description": "password operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Change your Backup FTP password",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.server.Task"
        }
      ],
      "path": "/dedicated/housing/{serviceName}/features/backupFTP/password"
    },
    {
      "description": "APC operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Is an APC orderable for this housing bay",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.housing.ApcOrderable"
        }
      ],
      "path": "/dedicated/housing/{serviceName}/orderable/APC"
    },
    {
      "description": "Details about a Service",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "services.Service"
        },
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Alter this object properties",
          "httpMethod": "PUT",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "services.Service",
              "description": "Request Body",
              "fullType": "services.Service",
              "paramType": "body",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/dedicated/housing/{serviceName}/serviceInfos"
    },
    {
      "description": "List the dedicated.housing.Task objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "View task list",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "dedicated.housing.TaskFunctionEnum",
              "description": "Filter the value of function property (=)",
              "fullType": "dedicated.housing.TaskFunctionEnum",
              "name": "function",
              "paramType": "query",
              "required": false
            },
            {
              "dataType": "dedicated.TaskStatusEnum",
              "description": "Filter the value of status property (=)",
              "fullType": "dedicated.TaskStatusEnum",
              "name": "status",
              "paramType": "query",
              "required": false
            }
          ],
          "responseType": "long[]"
        }
      ],
      "path": "/dedicated/housing/{serviceName}/task"
    },
    {
      "description": "Housing tasks",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "long",
              "description": "Task ID",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.housing.Task"
        }
      ],
      "path": "/dedicated/housing/{serviceName}/task/{taskId}"
    },
    {
      "description": "cancel operations",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "this action stop the task progression if it's possible",
          "httpMethod": "POST",
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "long",
              "description": "Task ID",
              "fullType": "long",
              "name": "taskId",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "Service name",
              "fullType": "string",
              "name": "serviceName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "void"
        }
      ],
      "path": "/dedicated/housing/{serviceName}/task/{taskId}/cancel"
    }
  ],
  "basePath": "https://ca.api.ovh.com/1.0",
  "models": {
    "complexType.UnitAndValue<T>": {
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "id": "UnitAndValue",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "fullType": "T",
          "readOnly": false,
          "required": true,
          "type": "T"
        }
      }
    },
    "dedicated.TaskFunctionEnum": {
      "description": "different task operation",
      "enum": [
        "INFRA_002_VirtualNetworkInterface",
        "INFRA_002_VirtualNetworkInterface_group",
        "INFRA_002_VirtualNetworkInterface_ungroup",
        "addVirtualMac",
        "addWindowSplaFromExistingSerial",
        "applyBackupFtpAcls",
        "applyBackupFtpQuota",
        "bypassAntiDDosGame",
        "changePasswordBackupFTP",
        "changeRipeOrg",
        "checkAndReleaseIp",
        "createBackupFTP",
        "createOrUpdateRipeOrg",
        "createPrivateNetwork",
        "disableFirewall",
        "enableFirewall",
        "genericMoveFloatingIp",
        "hardReboot",
        "ipmi/configureSGX",
        "migrateBackupFTP",
        "moveFloatingIp",
        "moveVirtualMac",
        "rebootPower8To",
        "reinstallServer",
        "releaseIp",
        "removeBackupFTP",
        "removeVirtualMac",
        "requestAccessIPMI",
        "resetIPMI",
        "resetIPMISession",
        "testIPMIhttp",
        "testIPMIpassword",
        "testIPMIping",
        "virtualMacAdd",
        "virtualMacDelete"
      ],
      "enumType": "string",
      "id": "TaskFunctionEnum",
      "namespace": "dedicated"
    },
    "dedicated.TaskStatusEnum": {
      "description": "different task status",
      "enum": [
        "cancelled",
        "customerError",
        "doing",
        "done",
        "init",
        "ovhError",
        "todo"
      ],
      "enumType": "string",
      "id": "TaskStatusEnum",
      "namespace": "dedicated"
    },
    "dedicated.housing.ApcOrderable": {
      "description": "A structure describing informations for APC orderable for this housing bay",
      "id": "ApcOrderable",
      "namespace": "dedicated.housing",
      "properties": {
        "free": {
          "canBeNull": false,
          "description": "Is this APC free",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "orderable": {
          "canBeNull": false,
          "description": "Is an APC is orderable for this housing bay",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        }
      }
    },
    "dedicated.housing.DatacenterEnum": {
      "description": "Housing bay datacenters",
      "enum": [
        "gsw",
        "pdc1"
      ],
      "enumType": "string",
      "id": "DatacenterEnum",
      "namespace": "dedicated.housing"
    },
    "dedicated.housing.Housing": {
      "description": "Housing bay",
      "id": "Housing",
      "namespace": "dedicated.housing",
      "properties": {
        "datacenter": {
          "canBeNull": true,
          "description": "Housing bay datacenter",
          "fullType": "dedicated.housing.DatacenterEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.housing.DatacenterEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "The name you give to the bay",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "network": {
          "canBeNull": false,
          "description": "Housing bay network",
          "fullType": "dedicated.housing.NetworkInfo[]",
          "readOnly": true,
          "required": true,
          "type": "dedicated.housing.NetworkInfo[]"
        },
        "options": {
          "canBeNull": false,
          "description": "Housing bay options",
          "fullType": "dedicated.housing.Options",
          "readOnly": true,
          "required": true,
          "type": "dedicated.housing.Options"
        },
        "rack": {
          "canBeNull": false,
          "description": "The bay's description",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "securityCode": {
          "canBeNull": false,
          "description": "Bay Security code",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        }
      }
    },
    "dedicated.housing.IpInfo": {
      "description": "A structure describing the Bay's network configuration",
      "id": "IpInfo",
      "namespace": "dedicated.housing",
      "properties": {
        "gateway": {
          "canBeNull": true,
          "description": "Network gateway of the bay",
          "fullType": "ip",
          "readOnly": false,
          "required": false,
          "type": "ip"
        },
        "network": {
          "canBeNull": false,
          "description": "Network address of the bay",
          "fullType": "ipBlock",
          "readOnly": false,
          "required": true,
          "type": "ipBlock"
        },
        "reservedAddresses": {
          "canBeNull": true,
          "description": "Reserved addresses. You should not use them in your network",
          "fullType": "ip[]",
          "readOnly": false,
          "required": false,
          "type": "ip[]"
        }
      }
    },
    "dedicated.housing.LinkInfo": {
      "description": "A structure describing the Bay`s link information",
      "id": "LinkInfo",
      "namespace": "dedicated.housing",
      "properties": {
        "port": {
          "canBeNull": false,
          "description": "Router port number",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        },
        "router": {
          "canBeNull": false,
          "description": "Router in charge of your network",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dedicated.housing.NetworkInfo": {
      "description": "A structure describing the Bay`s network configuration",
      "id": "NetworkInfo",
      "namespace": "dedicated.housing",
      "properties": {
        "ipv4": {
          "canBeNull": true,
          "description": "IPv4 network information",
          "fullType": "dedicated.housing.IpInfo",
          "readOnly": false,
          "required": false,
          "type": "dedicated.housing.IpInfo"
        },
        "ipv6": {
          "canBeNull": true,
          "description": "IPv6 network information",
          "fullType": "dedicated.housing.IpInfo",
          "readOnly": false,
          "required": false,
          "type": "dedicated.housing.IpInfo"
        },
        "link": {
          "canBeNull": true,
          "description": "Router related information",
          "fullType": "dedicated.housing.LinkInfo",
          "readOnly": false,
          "required": false,
          "type": "dedicated.housing.LinkInfo"
        }
      }
    },
    "dedicated.housing.Options": {
      "description": "A structure describing current housing options",
      "id": "Options",
      "namespace": "dedicated.housing",
      "properties": {
        "apcCount": {
          "canBeNull": false,
          "description": "Number of APC connected to this housing bay",
          "fullType": "long",
          "readOnly": false,
          "required": true,
          "type": "long"
        },
        "handsneyes": {
          "canBeNull": false,
          "description": "Is this housing bay have handsneyes service",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "highAvailabilityRouting": {
          "canBeNull": false,
          "description": "High Availability routing service offer",
          "fullType": "string",
          "readOnly": false,
          "required": true,
          "type": "string"
        }
      }
    },
    "dedicated.housing.Task": {
      "description": "Housing tasks",
      "id": "Task",
      "namespace": "dedicated.housing",
      "properties": {
        "comment": {
          "canBeNull": true,
          "description": "Details of this task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "Completion date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function name",
          "fullType": "dedicated.housing.TaskFunctionEnum",
          "readOnly": true,
          "required": true,
          "type": "dedicated.housing.TaskFunctionEnum"
        },
        "lastUpdate": {
          "canBeNull": true,
          "description": "last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Task Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "dedicated.TaskStatusEnum",
          "readOnly": true,
          "required": true,
          "type": "dedicated.TaskStatusEnum"
        },
        "taskId": {
          "canBeNull": false,
          "description": "the id of the task",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        }
      }
    },
    "dedicated.housing.TaskFunctionEnum": {
      "description": "Distincts task",
      "enum": [
        "applyBackupFtpAcls",
        "applyBackupFtpQuota",
        "changePasswordBackupFTP",
        "createBackupFTP",
        "migrateBackupFTP",
        "removeBackupFTP"
      ],
      "enumType": "string",
      "id": "TaskFunctionEnum",
      "namespace": "dedicated.housing"
    },
    "dedicated.server.BackupFtp": {
      "description": "Backup Ftp assigned to this server",
      "id": "BackupFtp",
      "namespace": "dedicated.server",
      "properties": {
        "ftpBackupName": {
          "canBeNull": false,
          "description": "The backup FTP server name",
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "quota": {
          "canBeNull": true,
          "description": "The disk space available in gigabytes",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "readOnlyDate": {
          "canBeNull": true,
          "description": "If not-null, gives the date since when your account was set in read-only mode because the quota was exceeded",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "type": {
          "canBeNull": false,
          "description": "The backup FTP type",
          "fullType": "dedicated.server.BackupStorageTypeEnum",
          "readOnly": true,
          "required": true,
          "type": "dedicated.server.BackupStorageTypeEnum"
        },
        "usage": {
          "canBeNull": true,
          "description": "The disk space currently used on your backup FTP in percent",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": true,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        }
      }
    },
    "dedicated.server.BackupFtpAcl": {
      "description": "Backup Ftp ACL for this server and Backup Ftp",
      "id": "BackupFtpAcl",
      "namespace": "dedicated.server",
      "properties": {
        "cifs": {
          "canBeNull": false,
          "description": "Wether to allow the CIFS (SMB) protocol for this ACL",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "ftp": {
          "canBeNull": false,
          "description": "Wether to allow the FTP protocol for this ACL",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "ipBlock": {
          "canBeNull": false,
          "description": "The IP Block specific to this ACL",
          "fullType": "ipBlock",
          "readOnly": true,
          "required": true,
          "type": "ipBlock"
        },
        "isApplied": {
          "canBeNull": false,
          "description": "Whether the rule has been applied on the Backup Ftp",
          "fullType": "boolean",
          "readOnly": true,
          "required": true,
          "type": "boolean"
        },
        "lastUpdate": {
          "canBeNull": false,
          "description": "Date of the last object modification",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "nfs": {
          "canBeNull": false,
          "description": "Wether to allow the NFS protocol for this ACL",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        }
      }
    },
    "dedicated.server.BackupStorageTypeEnum": {
      "description": "Different backup storage type",
      "enum": [
        "included",
        "storage"
      ],
      "enumType": "string",
      "id": "BackupStorageTypeEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.Task": {
      "description": "Server tasks",
      "id": "Task",
      "namespace": "dedicated.server",
      "properties": {
        "comment": {
          "canBeNull": true,
          "description": "Details of this task",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "doneDate": {
          "canBeNull": true,
          "description": "Completion date",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "function": {
          "canBeNull": false,
          "description": "Function name",
          "fullType": "dedicated.TaskFunctionEnum",
          "readOnly": true,
          "required": true,
          "type": "dedicated.TaskFunctionEnum"
        },
        "lastUpdate": {
          "canBeNull": true,
          "description": "last update",
          "fullType": "datetime",
          "readOnly": true,
          "required": false,
          "type": "datetime"
        },
        "startDate": {
          "canBeNull": false,
          "description": "Task Creation date",
          "fullType": "datetime",
          "readOnly": true,
          "required": true,
          "type": "datetime"
        },
        "status": {
          "canBeNull": false,
          "description": "Task status",
          "fullType": "dedicated.TaskStatusEnum",
          "readOnly": true,
          "required": true,
          "type": "dedicated.TaskStatusEnum"
        },
        "taskId": {
          "canBeNull": false,
          "description": "the id of the task",
          "fullType": "long",
          "readOnly": true,
          "required": true,
          "type": "long"
        }
      }
    },
    "service.RenewType": {
      "description": "Map a possible renew for a specific service",
      "id": "RenewType",
      "namespace": "service",
      "properties": {
        "automatic": {
          "canBeNull": false,
          "description": "The service is automatically renewed",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "deleteAtExpiration": {
          "canBeNull": false,
          "description": "The service will be deleted at expiration",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "forced": {
          "canBeNull": false,
          "description": "The service forced to be renewed",
          "fullType": "boolean",
          "readOnly": false,
          "required": true,
          "type": "boolean"
        },
        "manualPayment": {
          "canBeNull": true,
          "description": "The service needs to be manually renewed and paid",
          "fullType": "boolean",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "period": {
          "canBeNull": true,
          "description": "period of renew in month",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "service.RenewalTypeEnum": {
      "description": "Detailed renewal type of a service",
      "enum": [
        "automaticForcedProduct",
        "automaticV2012",
        "automaticV2014",
        "automaticV2016",
        "manual",
        "oneShot",
        "option"
      ],
      "enumType": "string",
      "id": "RenewalTypeEnum",
      "namespace": "service"
    },
    "service.StateEnum": {
      "enum": [
        "expired",
        "inCreation",
        "ok",
        "pendingDebt",
        "unPaid"
      ],
      "enumType": "string",
      "id": "StateEnum",
      "namespace": "service"
    },
    "services.Service": {
      "description": "Details about a Service",
      "id": "Service",
      "namespace": "services",
      "properties": {
        "canDeleteAtExpiration": {
          "canBeNull": false,
          "description": "Indicates that the service can be set up to be deleted at expiration",
          "fullType": "boolean",
          "readOnly": true,
          "required": true,
          "type": "boolean"
        },
        "contactAdmin": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "contactBilling": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "contactTech": {
          "canBeNull": false,
          "fullType": "coreTypes.AccountId:string",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.AccountId:string"
        },
        "creation": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": true,
          "type": "date"
        },
        "domain": {
          "canBeNull": false,
          "fullType": "string",
          "readOnly": true,
          "required": true,
          "type": "string"
        },
        "engagedUpTo": {
          "canBeNull": true,
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "expiration": {
          "canBeNull": false,
          "fullType": "date",
          "readOnly": true,
          "required": true,
          "type": "date"
        },
        "possibleRenewPeriod": {
          "canBeNull": true,
          "description": "All the possible renew period of your service in month",
          "fullType": "long[]",
          "readOnly": true,
          "required": false,
          "type": "long[]"
        },
        "renew": {
          "canBeNull": true,
          "description": "Way of handling the renew",
          "fullType": "service.RenewType",
          "readOnly": false,
          "required": false,
          "type": "service.RenewType"
        },
        "renewalType": {
          "canBeNull": false,
          "fullType": "service.RenewalTypeEnum",
          "readOnly": true,
          "required": true,
          "type": "service.RenewalTypeEnum"
        },
        "serviceId": {
          "canBeNull": false,
          "fullType": "coreTypes.ServiceId:long",
          "readOnly": true,
          "required": true,
          "type": "coreTypes.ServiceId:long"
        },
        "status": {
          "canBeNull": false,
          "fullType": "service.StateEnum",
          "readOnly": true,
          "required": true,
          "type": "service.StateEnum"
        }
      }
    }
  },
  "resourcePath": "/dedicated/housing"
}