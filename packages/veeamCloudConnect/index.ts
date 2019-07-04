import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace complexType {
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit?: string;
        value?: T;
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
    export interface Service {
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
export namespace veeamCloudConnect {
    //veeamCloudConnect.Account
    // fullName: veeamCloudConnect.Account.Account
    export interface Account {
        location?: OVH.veeamCloudConnect.Location;
        productOffer?: OVH.veeamCloudConnect.Offer;
        serviceName?: string;
        vmCount?: number;
    }
    //veeamCloudConnect.BackupRepository
    // fullName: veeamCloudConnect.BackupRepository.BackupRepository
    export interface BackupRepository {
        inventoryName?: string;
        quota?: OVH.complexType.UnitAndValue<number>;
        quotaUsed?: OVH.complexType.UnitAndValue<number>;
        replicationZone?: OVH.veeamCloudConnect.Location;
        state?: OVH.veeamCloudConnect.BackupRepositoryStateEnum;
        usage?: number;
    }
    //veeamCloudConnect.BackupRepositoryStateEnum
    export type BackupRepositoryStateEnum = "configuring" | "delivered" | "disabled" | "disabling" | "error" | "migrating" | "removing"
    //veeamCloudConnect.Location
    export type Location = "bhs1" | "rbx2" | "sbg1"
    //veeamCloudConnect.Offer
    export type Offer = "advanced" | "demo" | "starter"
    //veeamCloudConnect.Task
    // fullName: veeamCloudConnect.Task.Task
    export interface Task {
        endDate?: string;
        name?: string;
        progress?: number;
        startDate?: string;
        state?: OVH.veeamCloudConnect.TaskStateEnum;
        taskId?: number;
    }
    //veeamCloudConnect.TaskStateEnum
    export type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "problem" | "toCreate" | "todo" | "unknown" | "waitingTodo"
    //veeamCloudConnect.offerCapabilities
    // fullName: veeamCloudConnect.offerCapabilities.offerCapabilities
    export interface offerCapabilities {
        defaultQuota?: number;
        maxQuota?: number;
        maxStoragesCount?: number;
        minimumUsage?: number;
        multiStorages?: boolean;
        replication?: boolean;
        vmCapacity?: number;
        wanAccelerator?: boolean;
    }
}
// Apis harmony
// path /veeamCloudConnect
export interface VeeamCloudConnect {
    // GET /veeamCloudConnect
    GET(): Promise<string[]>;
    [keys: string]: {
        // GET /veeamCloudConnect/{serviceName}
        GET(): Promise<veeamCloudConnect.Account>;
        orderableUpgrade:  {
            // GET /veeamCloudConnect/{serviceName}/orderableUpgrade
            GET(): Promise<veeamCloudConnect.Offer[]>;
        }
        resetPassword:  {
            // POST /veeamCloudConnect/{serviceName}/resetPassword
            POST(): Promise<veeamCloudConnect.Task>;
        }
        serviceInfos:  {
            // GET /veeamCloudConnect/{serviceName}/serviceInfos
            GET(): Promise<services.Service>;
            // PUT /veeamCloudConnect/{serviceName}/serviceInfos
            PUT(body?: {body: services.Service}): Promise<void>;
        }
        backupRepository:  {
            // GET /veeamCloudConnect/{serviceName}/backupRepository
            GET(): Promise<string[]>;
            // POST /veeamCloudConnect/{serviceName}/backupRepository
            POST(): Promise<veeamCloudConnect.Task[]>;
            [keys: string]: {
                // GET /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}
                GET(): Promise<veeamCloudConnect.BackupRepository>;
                // DELETE /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}
                DELETE(): Promise<veeamCloudConnect.Task[]>;
                upgradeQuota:  {
                    // POST /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota
                    POST(body?: {newQuota: number}): Promise<veeamCloudConnect.Task[]>;
                }
            } | any
        }
        capabilities:  {
            // GET /veeamCloudConnect/{serviceName}/capabilities
            GET(): Promise<veeamCloudConnect.offerCapabilities>;
        }
        task:  {
            // GET /veeamCloudConnect/{serviceName}/task
            GET(param?: {state?: veeamCloudConnect.TaskStateEnum, name?: string}): Promise<number[]>;
            [keys: string]: {
                // GET /veeamCloudConnect/{serviceName}/task/{taskId}
                GET(): Promise<veeamCloudConnect.Task>;
            } | any
        }
    } | any
}
// Api
type PathsVeeamCloudConnectGET = '/veeamCloudConnect/{serviceName}/orderableUpgrade' |
  '/veeamCloudConnect/{serviceName}/serviceInfos' |
  '/veeamCloudConnect/{serviceName}' |
  '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}' |
  '/veeamCloudConnect/{serviceName}/backupRepository' |
  '/veeamCloudConnect/{serviceName}/capabilities' |
  '/veeamCloudConnect/{serviceName}/task' |
  '/veeamCloudConnect/{serviceName}/task/{taskId}' |
  '/veeamCloudConnect';

type PathsVeeamCloudConnectPUT = '/veeamCloudConnect/{serviceName}/serviceInfos';

type PathsVeeamCloudConnectPOST = '/veeamCloudConnect/{serviceName}/resetPassword' |
  '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota' |
  '/veeamCloudConnect/{serviceName}/backupRepository';

type PathsVeeamCloudConnectDELETE = '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}';

export class ApiVeeamCloudConnect extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the VEEAMCC service
   * List available services
   */
  public get(path: '/veeamCloudConnect'): Promise<string[]>;
  /**
   * Veeam Cloud Connect account
   * Get this object properties
   */
  public get(path: '/veeamCloudConnect/{serviceName}', params: {serviceName: string}): Promise<veeamCloudConnect.Account>;
  /**
   * List the veeamCloudConnect.BackupRepository objects
   * Veeam Backup Repository linked to this Veeam Cloud Connect account
   */
  public get(path: '/veeamCloudConnect/{serviceName}/backupRepository', params: {serviceName: string}): Promise<string[]>;
  /**
   * Veeam Backup Repository
   * Get this object properties
   */
  public get(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}', params: {serviceName: string, inventoryName: string}): Promise<veeamCloudConnect.BackupRepository>;
  /**
   * capabilities operations
   * Show capabilities of your current offer
   */
  public get(path: '/veeamCloudConnect/{serviceName}/capabilities', params: {serviceName: string}): Promise<veeamCloudConnect.offerCapabilities>;
  /**
   * orderableUpgrade operations
   * List the possible upgrades on your Veeam Cloud Connect account
   */
  public get(path: '/veeamCloudConnect/{serviceName}/orderableUpgrade', params: {serviceName: string}): Promise<veeamCloudConnect.Offer[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/veeamCloudConnect/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the veeamCloudConnect.Task objects
   * Tasks associated with Cloud Tenant
   */
  public get(path: '/veeamCloudConnect/{serviceName}/task', params: {serviceName: string, name?: string, state?: OVH.veeamCloudConnect.TaskStateEnum}): Promise<number[]>;
  /**
   * Operation with the Cloud Tenant Account
   * Get this object properties
   */
  public get(path: '/veeamCloudConnect/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: string}): Promise<veeamCloudConnect.Task>;
  public get(path: PathsVeeamCloudConnectGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/veeamCloudConnect/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsVeeamCloudConnectPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * List the veeamCloudConnect.BackupRepository objects
   * Add a new Backup Repository to your professional account
   */
  public post(path: '/veeamCloudConnect/{serviceName}/backupRepository', params: {serviceName: string}): Promise<veeamCloudConnect.Task[]>;
  /**
   * upgradeQuota operations
   * Change your quota
   */
  public post(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota', params: {serviceName: string, inventoryName: string, newQuota: number}): Promise<veeamCloudConnect.Task[]>;
  /**
   * resetPassword operations
   * Reset your Cloud Tenant Password
   */
  public post(path: '/veeamCloudConnect/{serviceName}/resetPassword', params: {serviceName: string}): Promise<veeamCloudConnect.Task>;
  public post(path: PathsVeeamCloudConnectPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Veeam Backup Repository
   * Delete this backup Repository. 
   */
  public delete(path: '/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}', params: {serviceName: string, inventoryName: string}): Promise<veeamCloudConnect.Task[]>;
  public delete(path: PathsVeeamCloudConnectDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}