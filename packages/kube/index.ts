import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /kube Models
 */
export namespace kube {
    //kube.Cluster
    // fullName: kube.Cluster.Cluster
    export interface Cluster {
        controlPlaneIsUpToDate: boolean;
        createdAt: string;
        id: string;
        isUpToDate: boolean;
        name: string;
        nodesUrl: string;
        status: kube.ClusterStatus;
        updatePolicy: string;
        updatedAt: string;
        url: string;
        version: string;
    }
    //kube.ClusterStatus
    export type ClusterStatus = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "READY"
    //kube.Kubeconfig
    // fullName: kube.Kubeconfig.Kubeconfig
    export interface Kubeconfig {
        content: string;
    }
    //kube.Node
    // fullName: kube.Node.Node
    export interface Node {
        createdAt: string;
        flavor: string;
        id: string;
        instanceId?: string;
        isUpToDate: boolean;
        name?: string;
        projectId: string;
        status: kube.NodeStatus;
        updatedAt: string;
        version: string;
    }
    //kube.NodeStatus
    export type NodeStatus = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "USER_NODE_NOT_FOUND_ERROR" | "USER_NODE_SUSPENDED_SERVICE" | "READY"
    //kube.PublicCloudProject
    // fullName: kube.PublicCloudProject.PublicCloudProject
    export interface PublicCloudProject {
        projectId: string;
        region: string;
    }
    //kube.ResetWorkerNodesPolicy
    export type ResetWorkerNodesPolicy = "reinstall" | "delete"
    //kube.UpdatePolicy
    export type UpdatePolicy = "ALWAYS_UPDATE" | "MINIMAL_DOWNTIME" | "NEVER_UPDATE"
    //kube.Version
    export type Version = "1.11" | "1.12" | "1.13" | "1.14"
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

/**
 * END API /kube Models
 */
export function proxyKube(ovhEngine: OvhRequestable): Kube {
    return buildOvhProxy(ovhEngine, '/kube');
}
export default proxyKube;
/**
 * Api Proxy model
 */// Apis harmony
// path /kube
export interface Kube{
    // GET /kube
    $get(): Promise<string[]>;
    $(serviceName: string): {
        // GET /kube/{serviceName}
        $get(): Promise<kube.Cluster>;
        // PUT /kube/{serviceName}
        $put(body?: {name: string}): Promise<void>;
        changeContact: {
            // POST /kube/{serviceName}/changeContact
            $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
        }
        confirmTermination: {
            // POST /kube/{serviceName}/confirmTermination
            $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
        }
        kubeconfig: {
            // GET /kube/{serviceName}/kubeconfig
            $get(): Promise<kube.Kubeconfig>;
        }
        publiccloud: {
            node: {
                // GET /kube/{serviceName}/publiccloud/node
                $get(): Promise<kube.Node[]>;
                // POST /kube/{serviceName}/publiccloud/node
                $post(body?: {flavorName: string, name?: string}): Promise<kube.Node>;
                $(nodeId: string): {
                    // DELETE /kube/{serviceName}/publiccloud/node/{nodeId}
                    $delete(): Promise<void>;
                    // GET /kube/{serviceName}/publiccloud/node/{nodeId}
                    $get(): Promise<kube.Node>;
                };
            }
            project: {
                // GET /kube/{serviceName}/publiccloud/project
                $get(): Promise<kube.PublicCloudProject>;
            }
        }
        reset: {
            // POST /kube/{serviceName}/reset
            $post(body?: {version?: kube.Version, workerNodesPolicy?: kube.ResetWorkerNodesPolicy}): Promise<void>;
        }
        serviceInfos: {
            // GET /kube/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /kube/{serviceName}/serviceInfos
            $put(body?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
        terminate: {
            // POST /kube/{serviceName}/terminate
            $post(): Promise<string>;
        }
        update: {
            // POST /kube/{serviceName}/update
            $post(): Promise<void>;
        }
        updatePolicy: {
            // PUT /kube/{serviceName}/updatePolicy
            $put(body?: {updatePolicy: kube.UpdatePolicy}): Promise<void>;
        }
    };
// Api
  /**
   * Operations about the KUBERNETES service
   * List available services
   */
  get(path: '/kube'): () => Promise<string[]>;
  /**
   * Manage your cluster
   * Get information about your managed Kubernetes cluster
   */
  get(path: '/kube/{serviceName}'): (params: {serviceName: string}) => Promise<kube.Cluster>;
  /**
   * Get your cluster configuration
   * Get kubeconfig file
   */
  get(path: '/kube/{serviceName}/kubeconfig'): (params: {serviceName: string}) => Promise<kube.Kubeconfig>;
  /**
   * Manage your Public Cloud cluster nodes
   * List your nodes on Public Cloud
   */
  get(path: '/kube/{serviceName}/publiccloud/node'): (params: {serviceName: string}) => Promise<kube.Node[]>;
  /**
   * Manage a single node on your cluster
   * Get information on a specific node on your cluster
   */
  get(path: '/kube/{serviceName}/publiccloud/node/{nodeId}'): (params: {nodeId: string, serviceName: string}) => Promise<kube.Node>;
  /**
   * Manage your Public Cloud projects linked to your cluster
   * Get your Public Cloud project linked to your cluster
   */
  get(path: '/kube/{serviceName}/publiccloud/project'): (params: {serviceName: string}) => Promise<kube.PublicCloudProject>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/kube/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * Manage your cluster
   * Update information about your managed Kubernetes cluster
   */
  put(path: '/kube/{serviceName}'): (params: {serviceName: string, name: string}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/kube/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Manage the update policy of your cluster
   * Change the update policy of your cluster
   */
  put(path: '/kube/{serviceName}/updatePolicy'): (params: {serviceName: string, updatePolicy: kube.UpdatePolicy}) => Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/kube/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/kube/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * Manage your Public Cloud cluster nodes
   * Deploy a node for your cluster on Public Cloud
   */
  post(path: '/kube/{serviceName}/publiccloud/node'): (params: {serviceName: string, flavorName: string, name?: string}) => Promise<kube.Node>;
  /**
   * Reset your cluster
   * Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled
   */
  post(path: '/kube/{serviceName}/reset'): (params: {serviceName: string, version?: kube.Version, workerNodesPolicy?: kube.ResetWorkerNodesPolicy}) => Promise<void>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/kube/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
  /**
   * Update cluster
   * Update cluster to the latest patch version
   */
  post(path: '/kube/{serviceName}/update'): (params: {serviceName: string}) => Promise<void>;
  /**
   * Manage a single node on your cluster
   * Delete a node on your cluster
   */
  delete(path: '/kube/{serviceName}/publiccloud/node/{nodeId}'): (params: {nodeId: string, serviceName: string}) => Promise<void>;
}
/**
 * classic Model
 */