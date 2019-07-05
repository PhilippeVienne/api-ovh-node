import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace complexType {
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace dedicated {
    //dedicated.NasHAAvailabilities
    // fullName: dedicated.NasHAAvailabilities.NasHAAvailabilities
    export interface NasHAAvailabilities {
        datacenters: dedicated.NasHAAvailabilityDatacenter[];
        offer: dedicated.NasHAOfferEnum;
    }
    //dedicated.NasHAAvailabilityDatacenter
    // fullName: dedicated.NasHAAvailabilityDatacenter.NasHAAvailabilityDatacenter
    export interface NasHAAvailabilityDatacenter {
        availability: dedicated.NasHAAvailabilityEnum;
        datacenter: dedicated.NasHAZoneEnum;
    }
    //dedicated.NasHAAvailabilityEnum
    export type NasHAAvailabilityEnum = "1H" | "240H" | "24H" | "72H" | "unknown"
    //dedicated.NasHAOfferEnum
    export type NasHAOfferEnum = "1200g" | "13200g" | "19200g" | "2400g" | "26400g" | "3600g" | "7200g"
    //dedicated.NasHAZoneEnum
    export type NasHAZoneEnum = "bhs" | "rbx" | "sbg"
    //dedicated.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    export namespace nasTask {
        //dedicated.nasTask.Task
        // fullName: dedicated.nasTask.Task.Task
        export interface Task {
            details?: string;
            doneDate?: string;
            lastUpdate?: string;
            operation: dedicated.storage.TaskFunctionEnum;
            partitionName?: string;
            status: dedicated.TaskStatusEnum;
            storageName?: string;
            taskId: number;
            todoDate?: string;
        }
    }
    export namespace nasha {
        //dedicated.nasha.Access
        // fullName: dedicated.nasha.Access.Access
        export interface Access {
            accessId: number;
            ip: string;
            type: dedicated.storage.AclTypeEnum;
        }
        //dedicated.nasha.Partition
        // fullName: dedicated.nasha.Partition.Partition
        export interface Partition {
            partitionCapacity?: number;
            partitionName: string;
            protocol: dedicated.storage.ProtocolEnum;
            size: number;
            usedBySnapshots?: number;
        }
        //dedicated.nasha.Quota
        // fullName: dedicated.nasha.Quota.Quota
        export interface Quota {
            size: number;
            uid: number;
        }
        //dedicated.nasha.Snapshot
        // fullName: dedicated.nasha.Snapshot.Snapshot
        export interface Snapshot {
            snapshotType: dedicated.storage.SnapshotEnum;
        }
        //dedicated.nasha.Storage
        // fullName: dedicated.nasha.Storage.Storage
        export interface Storage {
            canCreatePartition: boolean;
            customName?: string;
            datacenter?: string;
            ip?: string;
            monitored: boolean;
            serviceName: string;
            zpoolCapacity: number;
            zpoolSize: number;
        }
        //dedicated.nasha.Vrack
        // fullName: dedicated.nasha.Vrack.Vrack
        export interface Vrack {
            id: number;
            serviceIp: string;
            type: string;
            vrackName: string;
        }
        //dedicated.nasha.customSnap
        // fullName: dedicated.nasha.customSnap.customSnap
        export interface customSnap {
            expiration?: string;
            name: string;
        }
        //dedicated.nasha.options
        // fullName: dedicated.nasha.options.options
        export interface options {
            atime: string;
            id: number;
            recordsize: string;
            sync: string;
        }
    }
    export namespace storage {
        //dedicated.storage.AclTypeEnum
        export type AclTypeEnum = "readonly" | "readwrite"
        //dedicated.storage.AtimeEnum
        export type AtimeEnum = "off" | "on"
        //dedicated.storage.NasUsageTypeEnum
        export type NasUsageTypeEnum = "size" | "used" | "usedbysnapshots"
        //dedicated.storage.PartitionUsageTypeEnum
        export type PartitionUsageTypeEnum = "size" | "used" | "usedbysnapshots"
        //dedicated.storage.ProtocolEnum
        export type ProtocolEnum = "CIFS" | "NFS" | "NFS_CIFS"
        //dedicated.storage.RecordSizeEnum
        export type RecordSizeEnum = "131072" | "16384" | "32768" | "4096" | "65536" | "8192"
        //dedicated.storage.SnapshotEnum
        export type SnapshotEnum = "day-1" | "day-2" | "day-3" | "day-7" | "hour-1" | "hour-6"
        //dedicated.storage.SyncEnum
        export type SyncEnum = "always" | "disabled" | "standard"
        //dedicated.storage.TaskFunctionEnum
        export type TaskFunctionEnum = "backupRecursiveDestroy" | "clusterLeclercAclUpdate" | "clusterLeclercChangeServiceIp" | "clusterLeclercCustomSnapCreate" | "clusterLeclercCustomSnapDelete" | "clusterLeclercDeleteSnapshotDirectory" | "clusterLeclercDestroyNasContainer" | "clusterLeclercPartitionAdd" | "clusterLeclercPartitionDelete" | "clusterLeclercPartitionUpdate" | "clusterLeclercQuotaUpdate" | "clusterLeclercSetupNasContainer" | "clusterLeclercSnapshotUpdate" | "clusterLeclercZfsOptions" | "nasAclUpdate" | "nasDeleteSnapshotDirectory" | "nasPartitionAdd" | "nasPartitionDelete" | "nasPartitionUpdate" | "nasQuotaUpdate" | "remoteBackupRecursiveDestroy"
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
// path /dedicated
export interface Dedicated{
    nasha: {
        // GET /dedicated/nasha
        $get(): Promise<string[]>;
        availabilities: {
            // GET /dedicated/nasha/availabilities
            $get(): Promise<dedicated.NasHAAvailabilities[]>;
        }
        [keys: string]:{
            // GET /dedicated/nasha/{serviceName}
            $get(): Promise<dedicated.nasha.Storage>;
            // PUT /dedicated/nasha/{serviceName}
            $put(body?: {body: dedicated.nasha.Storage}): Promise<void>;
            changeContact: {
                // POST /dedicated/nasha/{serviceName}/changeContact
                $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            confirmTermination: {
                // POST /dedicated/nasha/{serviceName}/confirmTermination
                $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            partition: {
                // GET /dedicated/nasha/{serviceName}/partition
                $get(): Promise<string[]>;
                // POST /dedicated/nasha/{serviceName}/partition
                $post(body?: {partitionName: string, protocol: dedicated.storage.ProtocolEnum, size: number}): Promise<dedicated.nasTask.Task>;
                [keys: string]:{
                    // DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}
                    $delete(): Promise<dedicated.nasTask.Task>;
                    // GET /dedicated/nasha/{serviceName}/partition/{partitionName}
                    $get(): Promise<dedicated.nasha.Partition>;
                    // PUT /dedicated/nasha/{serviceName}/partition/{partitionName}
                    $put(body?: {body: dedicated.nasha.Partition}): Promise<void>;
                    access: {
                        // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/access
                        $get(): Promise<string[]>;
                        // POST /dedicated/nasha/{serviceName}/partition/{partitionName}/access
                        $post(body?: {ip: string, type?: dedicated.storage.AclTypeEnum}): Promise<dedicated.nasTask.Task>;
                        [keys: string]:{
                            // DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
                            $delete(): Promise<dedicated.nasTask.Task>;
                            // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
                            $get(): Promise<dedicated.nasha.Access>;
                        } | any
                    }
                    authorizableBlocks: {
                        // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks
                        $get(): Promise<string[]>;
                    }
                    authorizableIps: {
                        // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps
                        $get(): Promise<string[]>;
                    }
                    customSnapshot: {
                        // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
                        $get(): Promise<string[]>;
                        // POST /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
                        $post(body?: {expiration?: string, name: string}): Promise<dedicated.nasTask.Task>;
                        [keys: string]:{
                            // DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}
                            $delete(): Promise<dedicated.nasTask.Task>;
                            // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}
                            $get(): Promise<dedicated.nasha.customSnap>;
                        } | any
                    }
                    options: {
                        // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/options
                        $get(): Promise<dedicated.nasha.options>;
                        // POST /dedicated/nasha/{serviceName}/partition/{partitionName}/options
                        $post(body?: {atime?: dedicated.storage.AtimeEnum, recordsize?: dedicated.storage.RecordSizeEnum, sync?: dedicated.storage.SyncEnum}): Promise<dedicated.nasTask.Task>;
                    }
                    quota: {
                        // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/quota
                        $get(): Promise<number[]>;
                        // POST /dedicated/nasha/{serviceName}/partition/{partitionName}/quota
                        $post(body?: {size: number, uid: number}): Promise<dedicated.nasTask.Task>;
                        [keys: string]:{
                            // DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}
                            $delete(): Promise<dedicated.nasTask.Task>;
                            // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}
                            $get(): Promise<dedicated.nasha.Quota>;
                        } | any
                    }
                    snapshot: {
                        // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
                        $get(): Promise<dedicated.storage.SnapshotEnum[]>;
                        // POST /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
                        $post(body?: {snapshotType: dedicated.storage.SnapshotEnum}): Promise<dedicated.nasTask.Task>;
                        [keys: string]:{
                            // DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}
                            $delete(): Promise<dedicated.nasTask.Task>;
                            // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}
                            $get(): Promise<dedicated.nasha.Snapshot>;
                        } | any
                    }
                    use: {
                        // GET /dedicated/nasha/{serviceName}/partition/{partitionName}/use
                        $get(param?: {type: dedicated.storage.PartitionUsageTypeEnum}): Promise<complexType.UnitAndValue<number>>;
                    }
                } | any
            }
            serviceInfos: {
                // GET /dedicated/nasha/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /dedicated/nasha/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            task: {
                // GET /dedicated/nasha/{serviceName}/task
                $get(param?: {operation?: dedicated.storage.TaskFunctionEnum, status?: dedicated.TaskStatusEnum}): Promise<number[]>;
                [keys: string]:{
                    // GET /dedicated/nasha/{serviceName}/task/{taskId}
                    $get(): Promise<dedicated.nasTask.Task>;
                } | any
            }
            terminate: {
                // POST /dedicated/nasha/{serviceName}/terminate
                $post(): Promise<string>;
            }
            use: {
                // GET /dedicated/nasha/{serviceName}/use
                $get(param?: {type: dedicated.storage.NasUsageTypeEnum}): Promise<complexType.UnitAndValue<number>>;
            }
            vrack: {
                // DELETE /dedicated/nasha/{serviceName}/vrack
                $delete(): Promise<dedicated.nasTask.Task>;
            }
        } | any
    }
}
// Api
type PathsDedicatedNashaGET = '/dedicated/nasha' |
  '/dedicated/nasha/availabilities' |
  '/dedicated/nasha/{serviceName}' |
  '/dedicated/nasha/{serviceName}/partition' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/access' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/options' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/quota' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/use' |
  '/dedicated/nasha/{serviceName}/serviceInfos' |
  '/dedicated/nasha/{serviceName}/task' |
  '/dedicated/nasha/{serviceName}/task/{taskId}' |
  '/dedicated/nasha/{serviceName}/use';

type PathsDedicatedNashaPUT = '/dedicated/nasha/{serviceName}' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}' |
  '/dedicated/nasha/{serviceName}/serviceInfos';

type PathsDedicatedNashaPOST = '/dedicated/nasha/{serviceName}/changeContact' |
  '/dedicated/nasha/{serviceName}/confirmTermination' |
  '/dedicated/nasha/{serviceName}/partition' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/access' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/options' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/quota' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot' |
  '/dedicated/nasha/{serviceName}/terminate';

type PathsDedicatedNashaDELETE = '/dedicated/nasha/{serviceName}/partition/{partitionName}' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}' |
  '/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}' |
  '/dedicated/nasha/{serviceName}/vrack';

export class ApiDedicatedNasha extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the STORAGE service
   * List available services
   */
  public get(path: '/dedicated/nasha'): Promise<string[]>;
  /**
   * Storage nas HA
   * Get this object properties
   */
  public get(path: '/dedicated/nasha/{serviceName}', params: {serviceName: string}): Promise<dedicated.nasha.Storage>;
  /**
   * List the dedicated.nasha.Partition objects
   * Get partition list
   */
  public get(path: '/dedicated/nasha/{serviceName}/partition', params: {serviceName: string}): Promise<string[]>;
  /**
   * Storage zpool partition
   * Get this object properties
   */
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}', params: {partitionName: string, serviceName: string}): Promise<dedicated.nasha.Partition>;
  /**
   * List the dedicated.nasha.Access objects
   * get ACL for this partition
   */
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/access', params: {partitionName: string, serviceName: string}): Promise<string[]>;
  /**
   * Define Acl for partition
   * Get this object properties
   */
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}', params: {ip: string, partitionName: string, serviceName: string}): Promise<dedicated.nasha.Access>;
  /**
   * authorizableBlocks operations
   * Get all RIPE/ARIN blocks that can be used in the ACL
   */
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks', params: {partitionName: string, serviceName: string}): Promise<string[]>;
  /**
   * authorizableIps operations
   * Get all IPs that can be used in the ACL
   */
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps', params: {partitionName: string, serviceName: string}): Promise<string[]>;
  /**
   * List the dedicated.nasha.customSnap objects
   * Get custom snapshots for this partition
   */
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot', params: {partitionName: string, serviceName: string}): Promise<string[]>;
  /**
   * Custom Snapshot
   * Get this object properties
   */
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}', params: {name: string, partitionName: string, serviceName: string}): Promise<dedicated.nasha.customSnap>;
  /**
   * Partition options
   * Get this object properties
   */
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/options', params: {partitionName: string, serviceName: string}): Promise<dedicated.nasha.options>;
  /**
   * List the dedicated.nasha.Quota objects
   * Get quota for this partition
   */
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/quota', params: {partitionName: string, serviceName: string}): Promise<number[]>;
  /**
   * Partition Quota
   * Get this object properties
   */
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}', params: {partitionName: string, serviceName: string, uid: number}): Promise<dedicated.nasha.Quota>;
  /**
   * List the dedicated.nasha.Snapshot objects
   * Get scheduled snapshot types for this partition
   */
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot', params: {partitionName: string, serviceName: string}): Promise<dedicated.storage.SnapshotEnum[]>;
  /**
   * Partition Snapshot
   * Get this object properties
   */
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}', params: {partitionName: string, serviceName: string, snapshotType: dedicated.storage.SnapshotEnum}): Promise<dedicated.nasha.Snapshot>;
  /**
   * use operations
   * Return statistics about the partition
   */
  public get(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/use', params: {partitionName: string, serviceName: string, type: dedicated.storage.PartitionUsageTypeEnum}): Promise<complexType.UnitAndValue<number>>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/dedicated/nasha/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the dedicated.nasTask.Task objects
   * View task list
   */
  public get(path: '/dedicated/nasha/{serviceName}/task', params: {serviceName: string, operation?: dedicated.storage.TaskFunctionEnum, status?: dedicated.TaskStatusEnum}): Promise<number[]>;
  /**
   * Storage task
   * Get this object properties
   */
  public get(path: '/dedicated/nasha/{serviceName}/task/{taskId}', params: {serviceName: string, taskId: number}): Promise<dedicated.nasTask.Task>;
  /**
   * use operations
   * Return statistics about the nas
   */
  public get(path: '/dedicated/nasha/{serviceName}/use', params: {serviceName: string, type: dedicated.storage.NasUsageTypeEnum}): Promise<complexType.UnitAndValue<number>>;
  /**
   * Get availabilities of nasha offer
   * Get availabilities of nasha offer
   */
  public get(path: '/dedicated/nasha/availabilities'): Promise<dedicated.NasHAAvailabilities[]>;
  public get(path: PathsDedicatedNashaGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Storage nas HA
   * Alter this object properties
   */
  public put(path: '/dedicated/nasha/{serviceName}', params: {serviceName: string, canCreatePartition?: boolean, customName?: string, datacenter?: string, ip?: string, monitored?: boolean, zpoolCapacity?: number, zpoolSize?: number}): Promise<void>;
  /**
   * Storage zpool partition
   * Alter this object properties
   */
  public put(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}', params: {partitionName: string, serviceName: string, partitionCapacity?: number, protocol?: dedicated.storage.ProtocolEnum, size?: number, usedBySnapshots?: number}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/dedicated/nasha/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
  public put(path: PathsDedicatedNashaPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/dedicated/nasha/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/dedicated/nasha/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * List the dedicated.nasha.Partition objects
   * Create a new partition
   */
  public post(path: '/dedicated/nasha/{serviceName}/partition', params: {serviceName: string, partitionName: string, protocol: dedicated.storage.ProtocolEnum, size: number}): Promise<dedicated.nasTask.Task>;
  /**
   * List the dedicated.nasha.Access objects
   * Add a new ACL entry
   */
  public post(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/access', params: {partitionName: string, serviceName: string, ip: string, type?: dedicated.storage.AclTypeEnum}): Promise<dedicated.nasTask.Task>;
  /**
   * List the dedicated.nasha.customSnap objects
   * Create a new snapshot
   */
  public post(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot', params: {partitionName: string, serviceName: string, expiration?: string, name: string}): Promise<dedicated.nasTask.Task>;
  /**
   * Partition options
   * Setup options
   */
  public post(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/options', params: {partitionName: string, serviceName: string, atime?: dedicated.storage.AtimeEnum, recordsize?: dedicated.storage.RecordSizeEnum, sync?: dedicated.storage.SyncEnum}): Promise<dedicated.nasTask.Task>;
  /**
   * List the dedicated.nasha.Quota objects
   * Set a new quota
   */
  public post(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/quota', params: {partitionName: string, serviceName: string, size: number, uid: number}): Promise<dedicated.nasTask.Task>;
  /**
   * List the dedicated.nasha.Snapshot objects
   * Schedule a new snapshot type
   */
  public post(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot', params: {partitionName: string, serviceName: string, snapshotType: dedicated.storage.SnapshotEnum}): Promise<dedicated.nasTask.Task>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/dedicated/nasha/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsDedicatedNashaPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Storage zpool partition
   * Delete this partition
   */
  public delete(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}', params: {partitionName: string, serviceName: string}): Promise<dedicated.nasTask.Task>;
  /**
   * Define Acl for partition
   * Delete an ACL entry
   */
  public delete(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}', params: {ip: string, partitionName: string, serviceName: string}): Promise<dedicated.nasTask.Task>;
  /**
   * Custom Snapshot
   * Delete a given snapshot
   */
  public delete(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}', params: {name: string, partitionName: string, serviceName: string}): Promise<dedicated.nasTask.Task>;
  /**
   * Partition Quota
   * Delete a given quota
   */
  public delete(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}', params: {partitionName: string, serviceName: string, uid: number}): Promise<dedicated.nasTask.Task>;
  /**
   * Partition Snapshot
   * Delete a given snapshot
   */
  public delete(path: '/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}', params: {partitionName: string, serviceName: string, snapshotType: dedicated.storage.SnapshotEnum}): Promise<dedicated.nasTask.Task>;
  /**
   * Partition Vrack
   * Delete the vrack container
   */
  public delete(path: '/dedicated/nasha/{serviceName}/vrack', params: {serviceName: string}): Promise<dedicated.nasTask.Task>;
  public delete(path: PathsDedicatedNashaDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
export default ApiDedicatedNasha;
