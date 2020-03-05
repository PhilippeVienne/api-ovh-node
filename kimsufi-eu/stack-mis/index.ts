import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /stack/mis Models
 * Source: https://eu.api.kimsufi.com/1.0/stack/mis.json
 */
export namespace service {
    /**
     * Map a possible renew for a specific service
     * interface fullName: service.RenewType.RenewType
     */
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    /**
     * Detailed renewal type of a service
     * type fullname: service.RenewalTypeEnum
     */
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    /**
     * type fullname: service.StateEnum
     */
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    /**
     * Details about a Service
     * interface fullName: services.Service.Service
     */
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
export namespace stack {
    /**
     * Stack type
     * type fullname: stack.StackTypeEnum
     */
    export type StackTypeEnum = "MDS" | "MIS" | "MOS"
    export namespace mis {
        /**
         * Stack MIS
         * interface fullName: stack.mis.product.product
         */
        export interface product {
            domain: string;
            type: stack.StackTypeEnum;
        }
    }
}

/**
 * END API /stack/mis Models
 */
export function proxyStackMis(ovhEngine: OvhRequestable): Stack {
    return buildOvhProxy(ovhEngine, '/stack');
}
export default proxyStackMis;
/**
 * Api model for /stack/mis
 */
export interface Stack {
    mis: {
        /**
         * List available services
         * GET /stack/mis
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /stack/mis/{serviceName}
             */
            $get(): Promise<stack.mis.product>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /stack/mis/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /stack/mis/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
}
