import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace license {
    //license.ActionType
    export type ActionType = "addWindowFromExistingSerial" | "changeIp" | "changeOs" | "installLicense" | "optionUpgrade" | "releaseOption" | "versionUpgrade"
    //license.ChangeIpMessageEnum
    export type ChangeIpMessageEnum = "OK" | "destinationNotAllowed" | "licenseAlreadyExists" | "notAllowedToHandleThis" | "notSameType" | "sameIp" | "versionNotAllowed"
    //license.ChangeIpStatus
    // fullName: license.ChangeIpStatus.ChangeIpStatus
    export interface ChangeIpStatus {
        message: license.ChangeIpMessageEnum;
        success: boolean;
    }
    //license.DirectAdminOrderConfiguration
    // fullName: license.DirectAdminOrderConfiguration.DirectAdminOrderConfiguration
    export interface DirectAdminOrderConfiguration {
        orderableVersions: license.OrderableDirectAdminCompatibilityInfos[];
        serviceType: license.LicenseTypeEnum;
    }
    //license.DirectAdminOsEnum
    export type DirectAdminOsEnum = "CentOs_5.0_32" | "CentOs_5.0_64" | "CentOs_6_32" | "CentOs_6_64" | "CentOs_7_64" | "Debian_5.0_32" | "Debian_5.0_64" | "Debian_6.0_32" | "Debian_6.0_64" | "Debian_7.0_32" | "Debian_7.0_64" | "Debian_8.0_64" | "FreeBSD_7.x_32" | "FreeBSD_7.x_64" | "FreeBSD_8.x_64" | "FreeBSD_9.x_64"
    //license.DirectAdminVersionEnum
    export type DirectAdminVersionEnum = "DIRECTADMIN_1" | "directadmin-license"
    //license.LicenseTypeEnum
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    //license.OrderableDirectAdminCompatibilityInfos
    // fullName: license.OrderableDirectAdminCompatibilityInfos.OrderableDirectAdminCompatibilityInfos
    export interface OrderableDirectAdminCompatibilityInfos {
        version: license.OrderableDirectAdminVersionEnum;
    }
    //license.OrderableDirectAdminVersionEnum
    export type OrderableDirectAdminVersionEnum = "DIRECTADMIN_1" | "directadmin-license"
    //license.StateEnum
    export type StateEnum = "ok" | "released" | "terminated" | "toDeliver"
    //license.Task
    // fullName: license.Task.Task
    export interface Task {
        action: license.ActionType;
        doneDate?: string;
        lastUpdate: string;
        name: string;
        status: license.TaskStateEnum;
        taskId: number;
        todoDate: string;
    }
    //license.TaskStateEnum
    export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    export namespace directadmin {
        //license.directadmin.DirectAdmin
        // fullName: license.directadmin.DirectAdmin.DirectAdmin
        export interface DirectAdmin {
            clientId: number;
            creation: string;
            deleteAtExpiration: boolean;
            domain: string;
            ip: string;
            licenseId: string;
            os: license.DirectAdminOsEnum;
            status: license.StateEnum;
            version: license.DirectAdminVersionEnum;
        }
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    //service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    //service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
    export interface Service {
        canDeleteAtExpiration: boolean;
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        engagedUpTo?: string;
        expiration: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType: service.RenewalTypeEnum;
        serviceId: number;
        status: service.StateEnum;
    }
}
// Apis harmony
// path /license
export interface License{
    directadmin: {
        // GET /license/directadmin
        $get(): Promise<string[]>;
        orderableVersions: {
            // GET /license/directadmin/orderableVersions
            $get(param?: {ip: string}): Promise<license.DirectAdminOrderConfiguration[]>;
        }
        [keys: string]:{
            // GET /license/directadmin/{serviceName}
            $get(): Promise<license.directadmin.DirectAdmin>;
            // PUT /license/directadmin/{serviceName}
            $put(body?: {body: license.directadmin.DirectAdmin}): Promise<void>;
            allowedDestinationIp: {
                // GET /license/directadmin/{serviceName}/allowedDestinationIp
                $get(): Promise<string[]>;
            }
            canLicenseBeMovedTo: {
                // GET /license/directadmin/{serviceName}/canLicenseBeMovedTo
                $get(param?: {destinationIp: string}): Promise<license.ChangeIpStatus>;
            }
            changeIp: {
                // POST /license/directadmin/{serviceName}/changeIp
                $post(body?: {destinationIp: string}): Promise<license.Task>;
            }
            changeOs: {
                // POST /license/directadmin/{serviceName}/changeOs
                $post(body?: {os: license.DirectAdminOsEnum}): Promise<license.Task>;
            }
            confirmTermination: {
                // POST /license/directadmin/{serviceName}/confirmTermination
                $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            serviceInfos: {
                // GET /license/directadmin/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /license/directadmin/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            tasks: {
                // GET /license/directadmin/{serviceName}/tasks
                $get(param?: {action?: license.ActionType, status?: license.TaskStateEnum}): Promise<number[]>;
                [keys: string]:{
                    // GET /license/directadmin/{serviceName}/tasks/{taskId}
                    $get(): Promise<license.Task>;
                } | any
            }
            terminate: {
                // POST /license/directadmin/{serviceName}/terminate
                $post(): Promise<string>;
            }
        } | any
    }
}
// Api
type PathsLicenseDirectadminGET = '/license/directadmin' |
  '/license/directadmin/orderableVersions' |
  '/license/directadmin/{serviceName}' |
  '/license/directadmin/{serviceName}/allowedDestinationIp' |
  '/license/directadmin/{serviceName}/canLicenseBeMovedTo' |
  '/license/directadmin/{serviceName}/serviceInfos' |
  '/license/directadmin/{serviceName}/tasks' |
  '/license/directadmin/{serviceName}/tasks/{taskId}';

type PathsLicenseDirectadminPUT = '/license/directadmin/{serviceName}' |
  '/license/directadmin/{serviceName}/serviceInfos';

type PathsLicenseDirectadminPOST = '/license/directadmin/{serviceName}/changeIp' |
  '/license/directadmin/{serviceName}/changeOs' |
  '/license/directadmin/{serviceName}/confirmTermination' |
  '/license/directadmin/{serviceName}/terminate';

export class ApiLicenseDirectadmin extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the LICENSE service
   * List available services
   */
  public get(path: '/license/directadmin'): Promise<string[]>;
  /**
   * Your DirectAdmin license
   * Get this object properties
   */
  public get(path: '/license/directadmin/{serviceName}', params: {serviceName: string}): Promise<license.directadmin.DirectAdmin>;
  /**
   * allowedDestinationIp operations
   * Returns an array of ips where the license can be moved to
   */
  public get(path: '/license/directadmin/{serviceName}/allowedDestinationIp', params: {serviceName: string}): Promise<string[]>;
  /**
   * canLicenseBeMovedTo operations
   * Will tell if the ip can accept the license
   */
  public get(path: '/license/directadmin/{serviceName}/canLicenseBeMovedTo', params: {serviceName: string, destinationIp: string}): Promise<license.ChangeIpStatus>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/license/directadmin/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the license.Task objects
   * tasks linked to this license
   */
  public get(path: '/license/directadmin/{serviceName}/tasks', params: {serviceName: string, action?: license.ActionType, status?: license.TaskStateEnum}): Promise<number[]>;
  /**
   * licenses Todos
   * Get this object properties
   */
  public get(path: '/license/directadmin/{serviceName}/tasks/{taskId}', params: {serviceName: string, taskId: number}): Promise<license.Task>;
  /**
   * Get the orderable DirectAdmin versions
   * Get the orderable DirectAdmin versions
   */
  public get(path: '/license/directadmin/orderableVersions', params: {ip: string}): Promise<license.DirectAdminOrderConfiguration[]>;
  public get(path: PathsLicenseDirectadminGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Your DirectAdmin license
   * Alter this object properties
   */
  public put(path: '/license/directadmin/{serviceName}', params: {serviceName: string, clientId?: number, creation?: string, deleteAtExpiration?: boolean, domain?: string, ip?: string, licenseId?: string, os?: license.DirectAdminOsEnum, status?: license.StateEnum, version?: license.DirectAdminVersionEnum}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/license/directadmin/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
  public put(path: PathsLicenseDirectadminPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * changeIp operations
   * Move this license to another Ip
   */
  public post(path: '/license/directadmin/{serviceName}/changeIp', params: {serviceName: string, destinationIp: string}): Promise<license.Task>;
  /**
   * changeOs operations
   * Change the Operating System for a license
   */
  public post(path: '/license/directadmin/{serviceName}/changeOs', params: {serviceName: string, os: license.DirectAdminOsEnum}): Promise<license.Task>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/license/directadmin/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/license/directadmin/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsLicenseDirectadminPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
export default ApiLicenseDirectadmin;
