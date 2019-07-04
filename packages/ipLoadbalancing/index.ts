import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace ipLoadbalancing {
    //ipLoadbalancing.BackendCustomerServerStatusEnum
    export type BackendCustomerServerStatusEnum = "active" | "inactive"
    //ipLoadbalancing.BackendProbe
    // fullName: ipLoadbalancing.BackendProbe.BackendProbe
    export interface BackendProbe {
        forceSsl?: boolean;
        interval?: number;
        match?: OVH.ipLoadbalancing.ProbeExpectMatchEnum;
        method?: OVH.ipLoadbalancing.ProbeMethodEnum;
        negate?: boolean;
        pattern?: string;
        port?: number;
        type?: OVH.ipLoadbalancing.ProbeTypeEnum;
        url?: string;
    }
    //ipLoadbalancing.BalanceHTTPEnum
    export type BalanceHTTPEnum = "first" | "leastconn" | "roundrobin" | "source" | "uri"
    //ipLoadbalancing.BalanceTCPEnum
    export type BalanceTCPEnum = "first" | "leastconn" | "roundrobin" | "source"
    //ipLoadbalancing.DefinedFarm
    // fullName: ipLoadbalancing.DefinedFarm.DefinedFarm
    export interface DefinedFarm {
        id?: number;
        type?: string;
    }
    //ipLoadbalancing.DefinedFrontend
    // fullName: ipLoadbalancing.DefinedFrontend.DefinedFrontend
    export interface DefinedFrontend {
        id?: number;
        type?: string;
    }
    //ipLoadbalancing.DefinedRoute
    // fullName: ipLoadbalancing.DefinedRoute.DefinedRoute
    export interface DefinedRoute {
        displayName?: string;
        routeId?: number;
        type?: string;
    }
    //ipLoadbalancing.FarmAvailableProbe
    // fullName: ipLoadbalancing.FarmAvailableProbe.FarmAvailableProbe
    export interface FarmAvailableProbe {
        matches?: string[];
        method?: string[];
        negatableMatches?: string[];
        port?: boolean;
        type?: string;
        url?: boolean;
    }
    //ipLoadbalancing.InstancesState
    // fullName: ipLoadbalancing.InstancesState.InstancesState
    export interface InstancesState {
        internalId?: number;
        lastUpdateDate?: string;
        state?: string;
        zone?: string;
    }
    //ipLoadbalancing.Ip
    // fullName: ipLoadbalancing.Ip.Ip
    export interface Ip {
        displayName?: string;
        ipLoadbalancing?: string;
        ipv4?: string;
        ipv6?: string;
        metricsToken?: string;
        offer?: string;
        orderableZone?: OVH.ipLoadbalancing.OrderableZone[];
        serviceName?: string;
        sslConfiguration?: OVH.ipLoadbalancing.SslConfigurationEnum;
        state?: OVH.ipLoadbalancing.IpStateEnum;
        vrackEligibility?: boolean;
        vrackName?: string;
        zone?: string[];
    }
    //ipLoadbalancing.IpStateEnum
    export type IpStateEnum = "blacklisted" | "deleted" | "free" | "ok" | "quarantined" | "suspended"
    //ipLoadbalancing.NatIps
    // fullName: ipLoadbalancing.NatIps.NatIps
    export interface NatIps {
        ip?: string[];
        zone?: string;
    }
    //ipLoadbalancing.OrderableZone
    // fullName: ipLoadbalancing.OrderableZone.OrderableZone
    export interface OrderableZone {
        name?: string;
        planCode?: string;
    }
    //ipLoadbalancing.PendingChanges
    // fullName: ipLoadbalancing.PendingChanges.PendingChanges
    export interface PendingChanges {
        number?: number;
        zone?: string;
    }
    //ipLoadbalancing.ProbeExpectMatchEnum
    export type ProbeExpectMatchEnum = "contains" | "default" | "internal" | "matches" | "status"
    //ipLoadbalancing.ProbeMethodEnum
    export type ProbeMethodEnum = "GET" | "HEAD" | "OPTIONS" | "internal"
    //ipLoadbalancing.ProbeTypeEnum
    export type ProbeTypeEnum = "http" | "internal" | "mysql" | "oco" | "pgsql" | "smtp" | "tcp"
    //ipLoadbalancing.ProxyProtocolVersionEnum
    export type ProxyProtocolVersionEnum = "v1" | "v2" | "v2-ssl" | "v2-ssl-cn"
    export namespace Quota {
        //ipLoadbalancing.Quota.Quota
        // fullName: ipLoadbalancing.Quota.Quota.Quota
        export interface Quota {
            alert?: number;
            included?: number;
            lastUpdateDate?: string;
            resetDate?: string;
            total?: number;
            zone?: string;
        }
    }
    export namespace QuotaHistory {
        //ipLoadbalancing.QuotaHistory.QuotaHistory
        // fullName: ipLoadbalancing.QuotaHistory.QuotaHistory.QuotaHistory
        export interface QuotaHistory {
            historizedDate?: string;
            id?: number;
            lastUpdateDate?: string;
            resetDate?: string;
            total?: number;
            zone?: string;
        }
    }
    //ipLoadbalancing.RouteAvailableAction
    // fullName: ipLoadbalancing.RouteAvailableAction.RouteAvailableAction
    export interface RouteAvailableAction {
        destination?: string;
        name?: string;
        status?: number[];
        type?: string;
    }
    //ipLoadbalancing.RouteAvailableRule
    // fullName: ipLoadbalancing.RouteAvailableRule.RouteAvailableRule
    export interface RouteAvailableRule {
        enum?: string[];
        hasSubField?: boolean;
        matches?: string[];
        name?: string;
        pattern?: string;
        type?: string;
    }
    export namespace RouteHttp {
        //ipLoadbalancing.RouteHttp.RouteHttp
        // fullName: ipLoadbalancing.RouteHttp.RouteHttp.RouteHttp
        export interface RouteHttp {
            action?: OVH.ipLoadbalancing.RouteHttpAction;
            displayName?: string;
            frontendId?: number;
            routeId?: number;
            rules?: OVH.ipLoadbalancing.RouteRule[];
            status?: OVH.ipLoadbalancing.RouteStatusEnum;
            weight?: number;
        }
    }
    //ipLoadbalancing.RouteHttpAction
    // fullName: ipLoadbalancing.RouteHttpAction.RouteHttpAction
    export interface RouteHttpAction {
        status?: number;
        target?: string;
        type?: string;
    }
    //ipLoadbalancing.RouteRule
    // fullName: ipLoadbalancing.RouteRule.RouteRule
    export interface RouteRule {
        field?: string;
        match?: OVH.ipLoadbalancing.RouteRuleMatchesEnum;
        negate?: boolean;
        pattern?: string;
        ruleId?: number;
        subField?: string;
    }
    export namespace RouteRule {
        //ipLoadbalancing.RouteRule.RouteRule
        // fullName: ipLoadbalancing.RouteRule.RouteRule.RouteRule
        export interface RouteRule {
            displayName?: string;
            field?: string;
            match?: OVH.ipLoadbalancing.RouteRuleMatchesEnum;
            negate?: boolean;
            pattern?: string;
            ruleId?: number;
            subField?: string;
        }
    }
    //ipLoadbalancing.RouteRuleMatchesEnum
    export type RouteRuleMatchesEnum = "contains" | "endswith" | "exists" | "in" | "internal" | "is" | "matches" | "startswith"
    //ipLoadbalancing.RouteStatusEnum
    export type RouteStatusEnum = "creating" | "deleting" | "internal" | "ok" | "updating"
    export namespace RouteTcp {
        //ipLoadbalancing.RouteTcp.RouteTcp
        // fullName: ipLoadbalancing.RouteTcp.RouteTcp.RouteTcp
        export interface RouteTcp {
            action?: OVH.ipLoadbalancing.RouteTcpAction;
            displayName?: string;
            frontendId?: number;
            routeId?: number;
            rules?: OVH.ipLoadbalancing.RouteRule[];
            status?: OVH.ipLoadbalancing.RouteStatusEnum;
            weight?: number;
        }
    }
    //ipLoadbalancing.RouteTcpAction
    // fullName: ipLoadbalancing.RouteTcpAction.RouteTcpAction
    export interface RouteTcpAction {
        target?: string;
        type?: string;
    }
    //ipLoadbalancing.ServerState
    // fullName: ipLoadbalancing.ServerState.ServerState
    export interface ServerState {
        checkCode?: string;
        checkStatus?: string;
        checkTime?: string;
        instanceId?: number;
        lastCheckContent?: string;
        status?: string;
    }
    export namespace Ssl {
        //ipLoadbalancing.Ssl.Ssl
        // fullName: ipLoadbalancing.Ssl.Ssl.Ssl
        export interface Ssl {
            displayName?: string;
            expireDate?: string;
            fingerprint?: string;
            id?: number;
            san?: string[];
            serial?: string;
            subject?: string;
            type?: OVH.ipLoadbalancing.SslTypeEnum;
        }
    }
    //ipLoadbalancing.SslConfigurationEnum
    export type SslConfigurationEnum = "intermediate" | "modern"
    //ipLoadbalancing.SslTypeEnum
    export type SslTypeEnum = "built" | "built_not_routed" | "custom"
    //ipLoadbalancing.Status
    // fullName: ipLoadbalancing.Status.Status
    export interface Status {
        farms?: OVH.ipLoadbalancing.status.Component;
        frontends?: OVH.ipLoadbalancing.status.Component;
        servers?: OVH.ipLoadbalancing.status.Component;
        service?: OVH.ipLoadbalancing.status.Service;
    }
    //ipLoadbalancing.StickinessHTTPEnum
    export type StickinessHTTPEnum = "cookie" | "sourceIp"
    //ipLoadbalancing.StickinessTCPEnum
    export type StickinessTCPEnum = "sourceIp"
    export namespace Task {
        //ipLoadbalancing.Task.Task
        // fullName: ipLoadbalancing.Task.Task.Task
        export interface Task {
            action?: OVH.ipLoadbalancing.TaskActionEnum;
            creationDate?: string;
            doneDate?: string;
            id?: number;
            progress?: number;
            status?: OVH.ipLoadbalancing.TaskStatusEnum;
            zones?: string[];
        }
    }
    //ipLoadbalancing.TaskActionEnum
    export type TaskActionEnum = "deleteIplb" | "deployIplb" | "install" | "installIplb" | "installZone" | "orderFreeCertificate" | "orderPaidCertificate" | "orderSsl" | "refreshIplb" | "releaseIplb" | "releaseIplbZone" | "reopenIplb" | "suspendIplb" | "suspendZone" | "switchToIplbNextGenerationApi" | "vrackAttach" | "vrackDetach"
    //ipLoadbalancing.TaskStatusEnum
    export type TaskStatusEnum = "blocked" | "cancelled" | "doing" | "done" | "error" | "todo"
    //ipLoadbalancing.VrackInformation
    // fullName: ipLoadbalancing.VrackInformation.VrackInformation
    export interface VrackInformation {
        state?: OVH.ipLoadbalancing.VrackStateEnum;
        task?: number[];
        vrackName?: string;
    }
    export namespace VrackNetwork {
        //ipLoadbalancing.VrackNetwork.VrackNetwork
        // fullName: ipLoadbalancing.VrackNetwork.VrackNetwork.VrackNetwork
        export interface VrackNetwork {
            displayName?: string;
            farmId?: OVH.ipLoadbalancing.DefinedFarm[];
            natIp?: string;
            subnet?: string;
            vlan?: number;
            vrackNetworkId?: number;
        }
    }
    //ipLoadbalancing.VrackNetworkCreationRules
    // fullName: ipLoadbalancing.VrackNetworkCreationRules.VrackNetworkCreationRules
    export interface VrackNetworkCreationRules {
        minNatIps?: number;
        remainingNetworks?: number;
        vrackName?: string;
    }
    //ipLoadbalancing.VrackStateEnum
    export type VrackStateEnum = "activating" | "active" | "deactivating" | "inactive"
    //ipLoadbalancing.VrackTransparentGateways
    // fullName: ipLoadbalancing.VrackTransparentGateways.VrackTransparentGateways
    export interface VrackTransparentGateways {
        address?: string;
        gateway?: string;
        vlan?: number;
    }
    export namespace VrackTransparentIp {
        //ipLoadbalancing.VrackTransparentIp.VrackTransparentIp
        // fullName: ipLoadbalancing.VrackTransparentIp.VrackTransparentIp.VrackTransparentIp
        export interface VrackTransparentIp {
            address?: string;
            farmId?: number;
            id?: number;
            serverId?: number;
            slotId?: number;
        }
    }
    export namespace Zone {
        //ipLoadbalancing.Zone.Zone
        // fullName: ipLoadbalancing.Zone.Zone.Zone
        export interface Zone {
            name?: string;
            state?: string;
        }
    }
    export namespace backendHttp {
        //ipLoadbalancing.backendHttp.BackendHttp
        // fullName: ipLoadbalancing.backendHttp.BackendHttp.BackendHttp
        export interface BackendHttp {
            balance?: OVH.ipLoadbalancing.BalanceHTTPEnum;
            displayName?: string;
            farmId?: number;
            port?: number;
            probe?: OVH.ipLoadbalancing.BackendProbe;
            stickiness?: OVH.ipLoadbalancing.StickinessHTTPEnum;
            vrackNetworkId?: number;
            zone?: string;
        }
    }
    export namespace backendHttpCustomerServer {
        //ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer
        // fullName: ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer.BackendHTTPServer
        export interface BackendHTTPServer {
            address?: string;
            backendId?: number;
            backup?: boolean;
            chain?: string;
            cookie?: string;
            displayName?: string;
            port?: number;
            probe?: boolean;
            proxyProtocolVersion?: OVH.ipLoadbalancing.ProxyProtocolVersionEnum;
            serverId?: number;
            serverState?: OVH.ipLoadbalancing.ServerState[];
            ssl?: boolean;
            status?: OVH.ipLoadbalancing.BackendCustomerServerStatusEnum;
            weight?: number;
        }
    }
    export namespace backendTcp {
        //ipLoadbalancing.backendTcp.BackendTcp
        // fullName: ipLoadbalancing.backendTcp.BackendTcp.BackendTcp
        export interface BackendTcp {
            balance?: OVH.ipLoadbalancing.BalanceTCPEnum;
            displayName?: string;
            farmId?: number;
            port?: number;
            probe?: OVH.ipLoadbalancing.BackendProbe;
            stickiness?: OVH.ipLoadbalancing.StickinessTCPEnum;
            vrackNetworkId?: number;
            zone?: string;
        }
    }
    export namespace backendTcpCustomerServer {
        //ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer
        // fullName: ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer.BackendTCPServer
        export interface BackendTCPServer {
            address?: string;
            backendId?: number;
            backup?: boolean;
            chain?: string;
            displayName?: string;
            port?: number;
            probe?: boolean;
            proxyProtocolVersion?: OVH.ipLoadbalancing.ProxyProtocolVersionEnum;
            serverId?: number;
            serverState?: OVH.ipLoadbalancing.ServerState[];
            ssl?: boolean;
            status?: OVH.ipLoadbalancing.BackendCustomerServerStatusEnum;
            weight?: number;
        }
    }
    export namespace backendUdp {
        //ipLoadbalancing.backendUdp.BackendUdp
        // fullName: ipLoadbalancing.backendUdp.BackendUdp.BackendUdp
        export interface BackendUdp {
            displayName?: string;
            farmId?: number;
            port?: number;
            vrackNetworkId?: number;
            zone?: string;
        }
    }
    export namespace backendUdpCustomerServer {
        //ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer
        // fullName: ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer.BackendUDPServer
        export interface BackendUDPServer {
            address?: string;
            backendId?: number;
            displayName?: string;
            port?: number;
            serverId?: number;
            status?: OVH.ipLoadbalancing.BackendCustomerServerStatusEnum;
        }
    }
    export namespace frontendHttp {
        //ipLoadbalancing.frontendHttp.FrontendHttp
        // fullName: ipLoadbalancing.frontendHttp.FrontendHttp.FrontendHttp
        export interface FrontendHttp {
            allowedSource?: string[];
            dedicatedIpfo?: string[];
            defaultFarmId?: number;
            defaultSslId?: number;
            disabled?: boolean;
            displayName?: string;
            frontendId?: number;
            hsts?: boolean;
            httpHeader?: string[];
            port?: string;
            redirectLocation?: string;
            ssl?: boolean;
            zone?: string;
        }
    }
    export namespace frontendTcp {
        //ipLoadbalancing.frontendTcp.FrontendTcp
        // fullName: ipLoadbalancing.frontendTcp.FrontendTcp.FrontendTcp
        export interface FrontendTcp {
            allowedSource?: string[];
            dedicatedIpfo?: string[];
            defaultFarmId?: number;
            defaultSslId?: number;
            disabled?: boolean;
            displayName?: string;
            frontendId?: number;
            port?: string;
            ssl?: boolean;
            zone?: string;
        }
    }
    export namespace frontendUdp {
        //ipLoadbalancing.frontendUdp.FrontendUdp
        // fullName: ipLoadbalancing.frontendUdp.FrontendUdp.FrontendUdp
        export interface FrontendUdp {
            dedicatedIpfo?: string[];
            defaultFarmId?: number;
            disabled?: boolean;
            displayName?: string;
            frontendId?: number;
            port?: string;
            zone?: string;
        }
    }
    export namespace status {
        //ipLoadbalancing.status.Component
        // fullName: ipLoadbalancing.status.Component.Component
        export interface Component {
            status?: OVH.ipLoadbalancing.status.ComponentStatus;
            total?: number;
        }
        //ipLoadbalancing.status.ComponentStatus
        // fullName: ipLoadbalancing.status.ComponentStatus.ComponentStatus
        export interface ComponentStatus {
            error?: number;
            ok?: number;
            unknown?: number;
            warn?: number;
        }
        //ipLoadbalancing.status.Enum
        export type Enum = "error" | "ok" | "unknown" | "warn"
        //ipLoadbalancing.status.Service
        // fullName: ipLoadbalancing.status.Service.Service
        export interface Service {
            status?: OVH.ipLoadbalancing.status.Enum;
        }
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
    //service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    //service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
// Apis harmony
// path /ipLoadbalancing
export interface IpLoadbalancing {
    // GET /ipLoadbalancing
    GET(): Promise<string[]>;
    [keys: string]: {
        // GET /ipLoadbalancing/{serviceName}
        GET(): Promise<ipLoadbalancing.Ip>;
        // PUT /ipLoadbalancing/{serviceName}
        PUT(body?: {body: ipLoadbalancing.Ip}): Promise<void>;
        refresh:  {
            // POST /ipLoadbalancing/{serviceName}/refresh
            POST(body?: {zone?: string}): Promise<ipLoadbalancing.Task.Task>;
        }
        terminate:  {
            // POST /ipLoadbalancing/{serviceName}/terminate
            POST(): Promise<string>;
        }
        serviceInfos:  {
            // GET /ipLoadbalancing/{serviceName}/serviceInfos
            GET(): Promise<services.Service>;
            // PUT /ipLoadbalancing/{serviceName}/serviceInfos
            PUT(body?: {body: services.Service}): Promise<void>;
        }
        availableRouteActions:  {
            // GET /ipLoadbalancing/{serviceName}/availableRouteActions
            GET(): Promise<ipLoadbalancing.RouteAvailableAction[]>;
        }
        tcp:  {
            frontend:  {
                // GET /ipLoadbalancing/{serviceName}/tcp/frontend
                GET(param?: {zone?: string, port?: string, defaultFarmId?: number}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/tcp/frontend
                POST(body?: {displayName?: string, allowedSource?: string[], disabled?: boolean, ssl?: boolean, zone: string, defaultFarmId?: number, port: string, defaultSslId?: number, dedicatedIpfo?: string[]}): Promise<ipLoadbalancing.frontendTcp.FrontendTcp>;
                [keys: string]: {
                    // GET /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
                    GET(): Promise<ipLoadbalancing.frontendTcp.FrontendTcp>;
                    // PUT /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
                    PUT(body?: {body: ipLoadbalancing.frontendTcp.FrontendTcp}): Promise<void>;
                    // DELETE /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
                    DELETE(): Promise<void>;
                } | any
            }
            farm:  {
                // GET /ipLoadbalancing/{serviceName}/tcp/farm
                GET(param?: {zone?: string, vrackNetworkId?: number}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/tcp/farm
                POST(body?: {vrackNetworkId?: number, zone: string, probe?: ipLoadbalancing.BackendProbe, stickiness?: ipLoadbalancing.StickinessTCPEnum, port?: number, displayName?: string, balance?: ipLoadbalancing.BalanceTCPEnum}): Promise<ipLoadbalancing.backendTcp.BackendTcp>;
                [keys: string]: {
                    // GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
                    GET(): Promise<ipLoadbalancing.backendTcp.BackendTcp>;
                    // PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
                    PUT(body?: {body: ipLoadbalancing.backendTcp.BackendTcp}): Promise<void>;
                    // DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
                    DELETE(): Promise<void>;
                    server:  {
                        // GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
                        GET(param?: {address?: string, status?: ipLoadbalancing.BackendCustomerServerStatusEnum}): Promise<number[]>;
                        // POST /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
                        POST(body?: {chain?: string, ssl?: boolean, status: ipLoadbalancing.BackendCustomerServerStatusEnum, displayName?: string, backup?: boolean, proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, weight?: number, address: string, probe?: boolean, port?: number}): Promise<ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer>;
                        [keys: string]: {
                            // GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
                            GET(): Promise<ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer>;
                            // PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
                            PUT(body?: {body: ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer}): Promise<void>;
                            // DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
                            DELETE(): Promise<void>;
                        } | any
                    }
                } | any
            }
            route:  {
                // GET /ipLoadbalancing/{serviceName}/tcp/route
                GET(param?: {frontendId?: number}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/tcp/route
                POST(body?: {displayName?: string, action: ipLoadbalancing.RouteTcpAction, weight?: number, frontendId?: number}): Promise<ipLoadbalancing.RouteTcp.RouteTcp>;
                [keys: string]: {
                    // GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
                    GET(): Promise<ipLoadbalancing.RouteTcp.RouteTcp>;
                    // PUT /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
                    PUT(body?: {body: ipLoadbalancing.RouteTcp.RouteTcp}): Promise<void>;
                    // DELETE /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
                    DELETE(): Promise<void>;
                    rule:  {
                        // GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
                        GET(): Promise<number[]>;
                        // POST /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
                        POST(body?: {displayName?: string, match: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, subField?: string, field: string}): Promise<ipLoadbalancing.RouteRule.RouteRule>;
                        [keys: string]: {
                            // GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
                            GET(): Promise<ipLoadbalancing.RouteRule.RouteRule>;
                            // PUT /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
                            PUT(body?: {body: ipLoadbalancing.RouteRule.RouteRule}): Promise<void>;
                            // DELETE /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
                            DELETE(): Promise<void>;
                        } | any
                    }
                } | any
            }
        }
        definedFrontends:  {
            // GET /ipLoadbalancing/{serviceName}/definedFrontends
            GET(): Promise<ipLoadbalancing.DefinedFrontend[]>;
        }
        quotaHistory:  {
            // GET /ipLoadbalancing/{serviceName}/quotaHistory
            GET(param?: {zone?: string, historizedDate_from?: string, historizedDate_to?: string}): Promise<number[]>;
            [keys: string]: {
                // GET /ipLoadbalancing/{serviceName}/quotaHistory/{id}
                GET(): Promise<ipLoadbalancing.QuotaHistory.QuotaHistory>;
            } | any
        }
        definedRoutes:  {
            // GET /ipLoadbalancing/{serviceName}/definedRoutes
            GET(): Promise<ipLoadbalancing.DefinedRoute[]>;
        }
        failover:  {
            // GET /ipLoadbalancing/{serviceName}/failover
            GET(): Promise<string[]>;
        }
        status:  {
            // GET /ipLoadbalancing/{serviceName}/status
            GET(): Promise<ipLoadbalancing.Status>;
        }
        confirmTermination:  {
            // POST /ipLoadbalancing/{serviceName}/confirmTermination
            POST(body?: {futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, commentary?: string, token: string}): Promise<string>;
        }
        vrack:  {
            network:  {
                // GET /ipLoadbalancing/{serviceName}/vrack/network
                GET(param?: {vlan?: number, subnet?: string}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/vrack/network
                POST(body?: {natIp: string, displayName?: string, farmId?: number[], vlan?: number, subnet: string}): Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
                [keys: string]: {
                    // GET /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
                    GET(): Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
                    // PUT /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
                    PUT(body?: {body: ipLoadbalancing.VrackNetwork.VrackNetwork}): Promise<void>;
                    // DELETE /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
                    DELETE(): Promise<void>;
                    updateFarmId:  {
                        // POST /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId
                        POST(body?: {farmId: number[]}): Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
                    }
                } | any
            }
            networkCreationRules:  {
                // GET /ipLoadbalancing/{serviceName}/vrack/networkCreationRules
                GET(): Promise<ipLoadbalancing.VrackNetworkCreationRules>;
            }
            status:  {
                // GET /ipLoadbalancing/{serviceName}/vrack/status
                GET(): Promise<ipLoadbalancing.VrackInformation>;
            }
        }
        availableFrontendType:  {
            // GET /ipLoadbalancing/{serviceName}/availableFrontendType
            GET(): Promise<string[]>;
        }
        zone:  {
            // GET /ipLoadbalancing/{serviceName}/zone
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /ipLoadbalancing/{serviceName}/zone/{name}
                GET(): Promise<ipLoadbalancing.Zone.Zone>;
                terminate:  {
                    // POST /ipLoadbalancing/{serviceName}/zone/{name}/terminate
                    POST(): Promise<void>;
                }
                cancelTermination:  {
                    // POST /ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination
                    POST(): Promise<void>;
                }
            } | any
        }
        pendingChanges:  {
            // GET /ipLoadbalancing/{serviceName}/pendingChanges
            GET(): Promise<ipLoadbalancing.PendingChanges[]>;
        }
        http:  {
            frontend:  {
                // GET /ipLoadbalancing/{serviceName}/http/frontend
                GET(param?: {zone?: string, defaultFarmId?: number, port?: string}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/http/frontend
                POST(body?: {httpHeader?: string[], redirectLocation?: string, dedicatedIpfo?: string[], defaultSslId?: number, defaultFarmId?: number, port: string, hsts?: boolean, zone: string, disabled?: boolean, ssl?: boolean, displayName?: string, allowedSource?: string[]}): Promise<ipLoadbalancing.frontendHttp.FrontendHttp>;
                [keys: string]: {
                    // GET /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
                    GET(): Promise<ipLoadbalancing.frontendHttp.FrontendHttp>;
                    // PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
                    PUT(body?: {body: ipLoadbalancing.frontendHttp.FrontendHttp}): Promise<void>;
                    // DELETE /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
                    DELETE(): Promise<void>;
                } | any
            }
            farm:  {
                // GET /ipLoadbalancing/{serviceName}/http/farm
                GET(param?: {zone?: string, vrackNetworkId?: number}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/http/farm
                POST(body?: {stickiness?: ipLoadbalancing.StickinessHTTPEnum, displayName?: string, probe?: ipLoadbalancing.BackendProbe, port?: number, balance?: ipLoadbalancing.BalanceHTTPEnum, vrackNetworkId?: number, zone: string}): Promise<ipLoadbalancing.backendHttp.BackendHttp>;
                [keys: string]: {
                    // GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}
                    GET(): Promise<ipLoadbalancing.backendHttp.BackendHttp>;
                    // PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}
                    PUT(body?: {body: ipLoadbalancing.backendHttp.BackendHttp}): Promise<void>;
                    // DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}
                    DELETE(): Promise<void>;
                    server:  {
                        // GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
                        GET(param?: {address?: string, cookie?: string, status?: ipLoadbalancing.BackendCustomerServerStatusEnum}): Promise<number[]>;
                        // POST /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
                        POST(body?: {proxyProtocolVersion?: ipLoadbalancing.ProxyProtocolVersionEnum, backup?: boolean, address: string, weight?: number, probe?: boolean, port?: number, cookie?: string, chain?: string, ssl?: boolean, displayName?: string, status: ipLoadbalancing.BackendCustomerServerStatusEnum}): Promise<ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer>;
                        [keys: string]: {
                            // GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
                            GET(): Promise<ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer>;
                            // PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
                            PUT(body?: {body: ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer}): Promise<void>;
                            // DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
                            DELETE(): Promise<void>;
                        } | any
                    }
                } | any
            }
            route:  {
                // GET /ipLoadbalancing/{serviceName}/http/route
                GET(param?: {frontendId?: number}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/http/route
                POST(body?: {displayName?: string, action: ipLoadbalancing.RouteHttpAction, weight?: number, frontendId?: number}): Promise<ipLoadbalancing.RouteHttp.RouteHttp>;
                [keys: string]: {
                    // GET /ipLoadbalancing/{serviceName}/http/route/{routeId}
                    GET(): Promise<ipLoadbalancing.RouteHttp.RouteHttp>;
                    // PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}
                    PUT(body?: {body: ipLoadbalancing.RouteHttp.RouteHttp}): Promise<void>;
                    // DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}
                    DELETE(): Promise<void>;
                    rule:  {
                        // GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
                        GET(): Promise<number[]>;
                        // POST /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
                        POST(body?: {displayName?: string, match: ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, subField?: string, field: string}): Promise<ipLoadbalancing.RouteRule.RouteRule>;
                        [keys: string]: {
                            // GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
                            GET(): Promise<ipLoadbalancing.RouteRule.RouteRule>;
                            // PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
                            PUT(body?: {body: ipLoadbalancing.RouteRule.RouteRule}): Promise<void>;
                            // DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
                            DELETE(): Promise<void>;
                        } | any
                    }
                } | any
            }
        }
        freeCertificate:  {
            // POST /ipLoadbalancing/{serviceName}/freeCertificate
            POST(body?: {fqdn: string[]}): Promise<ipLoadbalancing.Task.Task>;
        }
        quota:  {
            // GET /ipLoadbalancing/{serviceName}/quota
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /ipLoadbalancing/{serviceName}/quota/{zone}
                GET(): Promise<ipLoadbalancing.Quota.Quota>;
                // PUT /ipLoadbalancing/{serviceName}/quota/{zone}
                PUT(body?: {body: ipLoadbalancing.Quota.Quota}): Promise<void>;
            } | any
        }
        definedFarms:  {
            // GET /ipLoadbalancing/{serviceName}/definedFarms
            GET(param?: {vrackNetworkId?: number}): Promise<ipLoadbalancing.DefinedFarm[]>;
        }
        task:  {
            // GET /ipLoadbalancing/{serviceName}/task
            GET(param?: {doneDate_to?: string, status?: ipLoadbalancing.TaskStatusEnum, action?: ipLoadbalancing.TaskActionEnum, creationDate_to?: string, doneDate_from?: string, creationDate_from?: string}): Promise<number[]>;
            [keys: string]: {
                // GET /ipLoadbalancing/{serviceName}/task/{id}
                GET(): Promise<ipLoadbalancing.Task.Task>;
            } | any
        }
        changeContact:  {
            // POST /ipLoadbalancing/{serviceName}/changeContact
            POST(body?: {contactAdmin?: string, contactTech?: string, contactBilling?: string}): Promise<number[]>;
        }
        availableFarmProbes:  {
            // GET /ipLoadbalancing/{serviceName}/availableFarmProbes
            GET(): Promise<ipLoadbalancing.FarmAvailableProbe[]>;
        }
        natIp:  {
            // GET /ipLoadbalancing/{serviceName}/natIp
            GET(): Promise<ipLoadbalancing.NatIps[]>;
        }
        instancesState:  {
            // GET /ipLoadbalancing/{serviceName}/instancesState
            GET(): Promise<ipLoadbalancing.InstancesState[]>;
        }
        ssl:  {
            // GET /ipLoadbalancing/{serviceName}/ssl
            GET(param?: {type?: ipLoadbalancing.SslTypeEnum, serial?: string, fingerprint?: string}): Promise<number[]>;
            // POST /ipLoadbalancing/{serviceName}/ssl
            POST(body?: {displayName?: string, certificate: string, chain?: string, key: string}): Promise<ipLoadbalancing.Ssl.Ssl>;
            [keys: string]: {
                // GET /ipLoadbalancing/{serviceName}/ssl/{id}
                GET(): Promise<ipLoadbalancing.Ssl.Ssl>;
                // PUT /ipLoadbalancing/{serviceName}/ssl/{id}
                PUT(body?: {body: ipLoadbalancing.Ssl.Ssl}): Promise<void>;
                // DELETE /ipLoadbalancing/{serviceName}/ssl/{id}
                DELETE(): Promise<void>;
            } | any
        }
        availableFarmType:  {
            // GET /ipLoadbalancing/{serviceName}/availableFarmType
            GET(): Promise<string[]>;
        }
        availableRouteRules:  {
            // GET /ipLoadbalancing/{serviceName}/availableRouteRules
            GET(): Promise<ipLoadbalancing.RouteAvailableRule[]>;
        }
        udp:  {
            farm:  {
                // GET /ipLoadbalancing/{serviceName}/udp/farm
                GET(param?: {vrackNetworkId?: number, zone?: string}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/udp/farm
                POST(body?: {displayName?: string, port: number, zone: string, vrackNetworkId?: number}): Promise<ipLoadbalancing.backendUdp.BackendUdp>;
                [keys: string]: {
                    // GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
                    GET(): Promise<ipLoadbalancing.backendUdp.BackendUdp>;
                    // PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
                    PUT(body?: {body: ipLoadbalancing.backendUdp.BackendUdp}): Promise<void>;
                    // DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
                    DELETE(): Promise<void>;
                    server:  {
                        // GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
                        GET(param?: {address?: string, status?: ipLoadbalancing.BackendCustomerServerStatusEnum}): Promise<number[]>;
                        // POST /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
                        POST(body?: {address: string, displayName?: string, port?: number, status: ipLoadbalancing.BackendCustomerServerStatusEnum}): Promise<ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer>;
                        [keys: string]: {
                            // GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
                            GET(): Promise<ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer>;
                            // PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
                            PUT(body?: {body: ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer}): Promise<void>;
                            // DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
                            DELETE(): Promise<void>;
                        } | any
                    }
                } | any
            }
            frontend:  {
                // GET /ipLoadbalancing/{serviceName}/udp/frontend
                GET(param?: {zone?: string, port?: string, defaultFarmId?: number}): Promise<number[]>;
                // POST /ipLoadbalancing/{serviceName}/udp/frontend
                POST(body?: {disabled?: boolean, displayName?: string, defaultFarmId?: number, port: string, zone: string, dedicatedIpfo?: string[]}): Promise<ipLoadbalancing.frontendUdp.FrontendUdp>;
                [keys: string]: {
                    // GET /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
                    GET(): Promise<ipLoadbalancing.frontendUdp.FrontendUdp>;
                    // PUT /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
                    PUT(body?: {body: ipLoadbalancing.frontendUdp.FrontendUdp}): Promise<void>;
                    // DELETE /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
                    DELETE(): Promise<void>;
                } | any
            }
        }
    } | any
    availableZones:  {
        // GET /ipLoadbalancing/availableZones
        GET(): Promise<string[]>;
    }
}
// Api
type PathsIpLoadbalancingGET = '/ipLoadbalancing/{serviceName}/serviceInfos' |
  '/ipLoadbalancing/{serviceName}/availableRouteActions' |
  '/ipLoadbalancing/{serviceName}/tcp/frontend' |
  '/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}' |
  '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}' |
  '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}' |
  '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server' |
  '/ipLoadbalancing/{serviceName}/tcp/farm' |
  '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}' |
  '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule' |
  '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}' |
  '/ipLoadbalancing/{serviceName}/tcp/route' |
  '/ipLoadbalancing/{serviceName}/definedFrontends' |
  '/ipLoadbalancing/{serviceName}/quotaHistory' |
  '/ipLoadbalancing/{serviceName}/quotaHistory/{id}' |
  '/ipLoadbalancing/{serviceName}/definedRoutes' |
  '/ipLoadbalancing/{serviceName}/failover' |
  '/ipLoadbalancing/{serviceName}/status' |
  '/ipLoadbalancing/{serviceName}/vrack/network' |
  '/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}' |
  '/ipLoadbalancing/{serviceName}/vrack/networkCreationRules' |
  '/ipLoadbalancing/{serviceName}/vrack/status' |
  '/ipLoadbalancing/{serviceName}/availableFrontendType' |
  '/ipLoadbalancing/{serviceName}/zone' |
  '/ipLoadbalancing/{serviceName}/zone/{name}' |
  '/ipLoadbalancing/{serviceName}/pendingChanges' |
  '/ipLoadbalancing/{serviceName}' |
  '/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}' |
  '/ipLoadbalancing/{serviceName}/http/frontend' |
  '/ipLoadbalancing/{serviceName}/http/farm' |
  '/ipLoadbalancing/{serviceName}/http/farm/{farmId}' |
  '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}' |
  '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server' |
  '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule' |
  '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}' |
  '/ipLoadbalancing/{serviceName}/http/route/{routeId}' |
  '/ipLoadbalancing/{serviceName}/http/route' |
  '/ipLoadbalancing/{serviceName}/quota' |
  '/ipLoadbalancing/{serviceName}/quota/{zone}' |
  '/ipLoadbalancing/{serviceName}/definedFarms' |
  '/ipLoadbalancing/{serviceName}/task' |
  '/ipLoadbalancing/{serviceName}/task/{id}' |
  '/ipLoadbalancing/{serviceName}/availableFarmProbes' |
  '/ipLoadbalancing/{serviceName}/natIp' |
  '/ipLoadbalancing/{serviceName}/instancesState' |
  '/ipLoadbalancing/{serviceName}/ssl/{id}' |
  '/ipLoadbalancing/{serviceName}/ssl' |
  '/ipLoadbalancing/{serviceName}/availableFarmType' |
  '/ipLoadbalancing/{serviceName}/availableRouteRules' |
  '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}' |
  '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server' |
  '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}' |
  '/ipLoadbalancing/{serviceName}/udp/farm' |
  '/ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}' |
  '/ipLoadbalancing/{serviceName}/udp/frontend' |
  '/ipLoadbalancing/availableZones' |
  '/ipLoadbalancing';

type PathsIpLoadbalancingPUT = '/ipLoadbalancing/{serviceName}/serviceInfos' |
  '/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}' |
  '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}' |
  '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}' |
  '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}' |
  '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}' |
  '/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}' |
  '/ipLoadbalancing/{serviceName}' |
  '/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}' |
  '/ipLoadbalancing/{serviceName}/http/farm/{farmId}' |
  '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}' |
  '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}' |
  '/ipLoadbalancing/{serviceName}/http/route/{routeId}' |
  '/ipLoadbalancing/{serviceName}/quota/{zone}' |
  '/ipLoadbalancing/{serviceName}/ssl/{id}' |
  '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}' |
  '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}' |
  '/ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}';

type PathsIpLoadbalancingPOST = '/ipLoadbalancing/{serviceName}/refresh' |
  '/ipLoadbalancing/{serviceName}/terminate' |
  '/ipLoadbalancing/{serviceName}/tcp/frontend' |
  '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server' |
  '/ipLoadbalancing/{serviceName}/tcp/farm' |
  '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule' |
  '/ipLoadbalancing/{serviceName}/tcp/route' |
  '/ipLoadbalancing/{serviceName}/confirmTermination' |
  '/ipLoadbalancing/{serviceName}/vrack/network' |
  '/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId' |
  '/ipLoadbalancing/{serviceName}/zone/{name}/terminate' |
  '/ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination' |
  '/ipLoadbalancing/{serviceName}/http/frontend' |
  '/ipLoadbalancing/{serviceName}/http/farm' |
  '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server' |
  '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule' |
  '/ipLoadbalancing/{serviceName}/http/route' |
  '/ipLoadbalancing/{serviceName}/freeCertificate' |
  '/ipLoadbalancing/{serviceName}/changeContact' |
  '/ipLoadbalancing/{serviceName}/ssl' |
  '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server' |
  '/ipLoadbalancing/{serviceName}/udp/farm' |
  '/ipLoadbalancing/{serviceName}/udp/frontend';

type PathsIpLoadbalancingDELETE = '/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}' |
  '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}' |
  '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}' |
  '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}' |
  '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}' |
  '/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}' |
  '/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}' |
  '/ipLoadbalancing/{serviceName}/http/farm/{farmId}' |
  '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}' |
  '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}' |
  '/ipLoadbalancing/{serviceName}/http/route/{routeId}' |
  '/ipLoadbalancing/{serviceName}/ssl/{id}' |
  '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}' |
  '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}' |
  '/ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}';

export class ApiIpLoadbalancing extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the IPLB service
   * List available services
   */
  public get(path: '/ipLoadbalancing'): Promise<string[]>;
  /**
   * Your IP load balancing
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}', params: {serviceName: string}): Promise<ipLoadbalancing.Ip>;
  /**
   * availableFarmProbes operations
   * Available farm probes for health checks
   */
  public get(path: '/ipLoadbalancing/{serviceName}/availableFarmProbes', params: {serviceName: string}): Promise<ipLoadbalancing.FarmAvailableProbe[]>;
  /**
   * availableFarmType operations
   * Available farm types
   */
  public get(path: '/ipLoadbalancing/{serviceName}/availableFarmType', params: {serviceName: string}): Promise<string[]>;
  /**
   * availableFrontendType operations
   * Available frontend type
   */
  public get(path: '/ipLoadbalancing/{serviceName}/availableFrontendType', params: {serviceName: string}): Promise<string[]>;
  /**
   * availableRouteActions operations
   * Available route actions
   */
  public get(path: '/ipLoadbalancing/{serviceName}/availableRouteActions', params: {serviceName: string}): Promise<ipLoadbalancing.RouteAvailableAction[]>;
  /**
   * availableRouteRules operations
   * Available route match rules
   */
  public get(path: '/ipLoadbalancing/{serviceName}/availableRouteRules', params: {serviceName: string}): Promise<ipLoadbalancing.RouteAvailableRule[]>;
  /**
   * definedFarms operations
   * List of defined farms, and whether they are HTTP, TCP or UDP
   */
  public get(path: '/ipLoadbalancing/{serviceName}/definedFarms', params: {serviceName: string, vrackNetworkId?: number}): Promise<ipLoadbalancing.DefinedFarm[]>;
  /**
   * definedFrontends operations
   * List of defined frontends, and whether they are HTTP, TCP or UDP
   */
  public get(path: '/ipLoadbalancing/{serviceName}/definedFrontends', params: {serviceName: string}): Promise<ipLoadbalancing.DefinedFrontend[]>;
  /**
   * definedRoutes operations
   * List of defined routes, and whether they are HTTP or TCP
   */
  public get(path: '/ipLoadbalancing/{serviceName}/definedRoutes', params: {serviceName: string}): Promise<ipLoadbalancing.DefinedRoute[]>;
  /**
   * failover operations
   * List all failover ip routed to this IPLB
   */
  public get(path: '/ipLoadbalancing/{serviceName}/failover', params: {serviceName: string}): Promise<string[]>;
  /**
   * List the ipLoadbalancing.backendHttp.BackendHttp objects
   * HTTP Farm for this iplb
   */
  public get(path: '/ipLoadbalancing/{serviceName}/http/farm', params: {serviceName: string, vrackNetworkId?: number, zone?: string}): Promise<number[]>;
  /**
   * HTTP Farm
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}', params: {serviceName: string, farmId: string}): Promise<ipLoadbalancing.backendHttp.BackendHttp>;
  /**
   * List the ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer objects
   * HTTP Farm's Servers
   */
  public get(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server', params: {serviceName: string, farmId: string, address?: string, cookie?: string, status?: OVH.ipLoadbalancing.BackendCustomerServerStatusEnum}): Promise<number[]>;
  /**
   * HTTP Farm's Server
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}', params: {serviceName: string, farmId: string, serverId: string}): Promise<ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer>;
  /**
   * List the ipLoadbalancing.frontendHttp.FrontendHttp objects
   * HTTP frontends for this iplb
   */
  public get(path: '/ipLoadbalancing/{serviceName}/http/frontend', params: {serviceName: string, defaultFarmId?: number, port?: string, zone?: string}): Promise<number[]>;
  /**
   * Frontend HTTP
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}', params: {serviceName: string, frontendId: string}): Promise<ipLoadbalancing.frontendHttp.FrontendHttp>;
  /**
   * List the ipLoadbalancing.RouteHttp.RouteHttp objects
   * HTTP routes for this iplb
   */
  public get(path: '/ipLoadbalancing/{serviceName}/http/route', params: {serviceName: string, frontendId?: number}): Promise<number[]>;
  /**
   * HTTP Route
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}', params: {serviceName: string, routeId: string}): Promise<ipLoadbalancing.RouteHttp.RouteHttp>;
  /**
   * List the ipLoadbalancing.RouteRule.RouteRule objects
   * HTTP routes for this iplb
   */
  public get(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule', params: {serviceName: string, routeId: string}): Promise<number[]>;
  /**
   * Rule of a route
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}', params: {serviceName: string, routeId: string, ruleId: string}): Promise<ipLoadbalancing.RouteRule.RouteRule>;
  /**
   * instancesState operations
   * Get the effective state of your IPLB instances on IPLB servers
   */
  public get(path: '/ipLoadbalancing/{serviceName}/instancesState', params: {serviceName: string}): Promise<ipLoadbalancing.InstancesState[]>;
  /**
   * natIp operations
   * Ip subnet used by OVH to nat requests on your IPLB to your backends. You must ensure that your backends are not part of a network that overlap with this one
   */
  public get(path: '/ipLoadbalancing/{serviceName}/natIp', params: {serviceName: string}): Promise<ipLoadbalancing.NatIps[]>;
  /**
   * pendingChanges operations
   * List the pending changes on your Load Balancer configuration, per zone
   */
  public get(path: '/ipLoadbalancing/{serviceName}/pendingChanges', params: {serviceName: string}): Promise<ipLoadbalancing.PendingChanges[]>;
  /**
   * List the ipLoadbalancing.Quota.Quota objects
   * Available quota informations for current billing period per zone
   */
  public get(path: '/ipLoadbalancing/{serviceName}/quota', params: {serviceName: string}): Promise<string[]>;
  /**
   * Quota informations for current billing period for this zone
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/quota/{zone}', params: {serviceName: string, zone: string}): Promise<ipLoadbalancing.Quota.Quota>;
  /**
   * List the ipLoadbalancing.QuotaHistory.QuotaHistory objects
   * Quota history informations, per month
   */
  public get(path: '/ipLoadbalancing/{serviceName}/quotaHistory', params: {serviceName: string, historizedDate_from?: string, historizedDate_to?: string, zone?: string}): Promise<number[]>;
  /**
   * QuotaHistory
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/quotaHistory/{id}', params: {serviceName: string, id: string}): Promise<ipLoadbalancing.QuotaHistory.QuotaHistory>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * List the ipLoadbalancing.Ssl.Ssl objects
   * Ssl for this iplb
   */
  public get(path: '/ipLoadbalancing/{serviceName}/ssl', params: {serviceName: string, fingerprint?: string, serial?: string, type?: OVH.ipLoadbalancing.SslTypeEnum}): Promise<number[]>;
  /**
   * Ssl
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/ssl/{id}', params: {serviceName: string, id: string}): Promise<ipLoadbalancing.Ssl.Ssl>;
  /**
   * status operations
   * Get the global status of your IPLB
   */
  public get(path: '/ipLoadbalancing/{serviceName}/status', params: {serviceName: string}): Promise<ipLoadbalancing.Status>;
  /**
   * List the ipLoadbalancing.Task.Task objects
   * Task for this iplb
   */
  public get(path: '/ipLoadbalancing/{serviceName}/task', params: {serviceName: string, action?: OVH.ipLoadbalancing.TaskActionEnum, creationDate_from?: string, creationDate_to?: string, doneDate_from?: string, doneDate_to?: string, status?: OVH.ipLoadbalancing.TaskStatusEnum}): Promise<number[]>;
  /**
   * IP Load Balancing Operations
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/task/{id}', params: {serviceName: string, id: string}): Promise<ipLoadbalancing.Task.Task>;
  /**
   * List the ipLoadbalancing.backendTcp.BackendTcp objects
   * TCP Farm for this iplb
   */
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/farm', params: {serviceName: string, vrackNetworkId?: number, zone?: string}): Promise<number[]>;
  /**
   * TCP Farm
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}', params: {serviceName: string, farmId: string}): Promise<ipLoadbalancing.backendTcp.BackendTcp>;
  /**
   * List the ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer objects
   * TCP Farm's Servers
   */
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server', params: {serviceName: string, farmId: string, address?: string, status?: OVH.ipLoadbalancing.BackendCustomerServerStatusEnum}): Promise<number[]>;
  /**
   * TCP Farm's Server
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}', params: {serviceName: string, farmId: string, serverId: string}): Promise<ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer>;
  /**
   * List the ipLoadbalancing.frontendTcp.FrontendTcp objects
   * TCP frontends for this iplb
   */
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/frontend', params: {serviceName: string, defaultFarmId?: number, port?: string, zone?: string}): Promise<number[]>;
  /**
   * Frontend TCP
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}', params: {serviceName: string, frontendId: string}): Promise<ipLoadbalancing.frontendTcp.FrontendTcp>;
  /**
   * List the ipLoadbalancing.RouteTcp.RouteTcp objects
   * TCP routes for this iplb
   */
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/route', params: {serviceName: string, frontendId?: number}): Promise<number[]>;
  /**
   * TCP Route
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}', params: {serviceName: string, routeId: string}): Promise<ipLoadbalancing.RouteTcp.RouteTcp>;
  /**
   * List the ipLoadbalancing.RouteRule.RouteRule objects
   * HTTP routes for this iplb
   */
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule', params: {serviceName: string, routeId: string}): Promise<number[]>;
  /**
   * Rule of a route
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}', params: {serviceName: string, routeId: string, ruleId: string}): Promise<ipLoadbalancing.RouteRule.RouteRule>;
  /**
   * List the ipLoadbalancing.backendUdp.BackendUdp objects
   * UDP Farm for this iplb
   */
  public get(path: '/ipLoadbalancing/{serviceName}/udp/farm', params: {serviceName: string, vrackNetworkId?: number, zone?: string}): Promise<number[]>;
  /**
   * UDP Farm
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}', params: {serviceName: string, farmId: string}): Promise<ipLoadbalancing.backendUdp.BackendUdp>;
  /**
   * List the ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer objects
   * UDP Farm's Servers
   */
  public get(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server', params: {serviceName: string, farmId: string, address?: string, status?: OVH.ipLoadbalancing.BackendCustomerServerStatusEnum}): Promise<number[]>;
  /**
   * UDP Farm's Server
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}', params: {serviceName: string, farmId: string, serverId: string}): Promise<ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer>;
  /**
   * List the ipLoadbalancing.frontendUdp.FrontendUdp objects
   * UDP frontends for this iplb
   */
  public get(path: '/ipLoadbalancing/{serviceName}/udp/frontend', params: {serviceName: string, defaultFarmId?: number, port?: string, zone?: string}): Promise<number[]>;
  /**
   * Frontend UDP
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}', params: {serviceName: string, frontendId: string}): Promise<ipLoadbalancing.frontendUdp.FrontendUdp>;
  /**
   * List the ipLoadbalancing.VrackNetwork.VrackNetwork objects
   * Descriptions of private networks in the vRack attached to this Load Balancer
   */
  public get(path: '/ipLoadbalancing/{serviceName}/vrack/network', params: {serviceName: string, subnet?: string, vlan?: number}): Promise<number[]>;
  /**
   * Represents a private network in the vRack
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}', params: {serviceName: string, vrackNetworkId: string}): Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
  /**
   * networkCreationRules operations
   * Rules to create a network attached to a vrack
   */
  public get(path: '/ipLoadbalancing/{serviceName}/vrack/networkCreationRules', params: {serviceName: string}): Promise<ipLoadbalancing.VrackNetworkCreationRules>;
  /**
   * status operations
   * Information about vRack for your Load Balancer
   */
  public get(path: '/ipLoadbalancing/{serviceName}/vrack/status', params: {serviceName: string}): Promise<ipLoadbalancing.VrackInformation>;
  /**
   * List the ipLoadbalancing.Zone.Zone objects
   * Zone for this iplb
   */
  public get(path: '/ipLoadbalancing/{serviceName}/zone', params: {serviceName: string}): Promise<string[]>;
  /**
   * IP Load Balancing Zone
   * Get this object properties
   */
  public get(path: '/ipLoadbalancing/{serviceName}/zone/{name}', params: {serviceName: string, name: string}): Promise<ipLoadbalancing.Zone.Zone>;
  /**
   * List of zone available for an IP load balancing
   * List of zone available for an IP load balancing
   */
  public get(path: '/ipLoadbalancing/availableZones'): Promise<string[]>;
  public get(path: PathsIpLoadbalancingGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Your IP load balancing
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}', params: {serviceName: string, displayName?: string, ipLoadbalancing?: string, ipv4?: string, ipv6?: string, metricsToken?: string, offer?: string, orderableZone?: OVH.ipLoadbalancing.OrderableZone[], sslConfiguration?: OVH.ipLoadbalancing.SslConfigurationEnum, state?: OVH.ipLoadbalancing.IpStateEnum, vrackEligibility?: boolean, vrackName?: string, zone?: string[]}): Promise<void>;
  /**
   * HTTP Farm
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}', params: {serviceName: string, farmId: string, balance?: OVH.ipLoadbalancing.BalanceHTTPEnum, displayName?: string, port?: number, probe?: OVH.ipLoadbalancing.BackendProbe, stickiness?: OVH.ipLoadbalancing.StickinessHTTPEnum, vrackNetworkId?: number, zone?: string}): Promise<void>;
  /**
   * HTTP Farm's Server
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}', params: {serviceName: string, farmId: string, serverId: string, address?: string, backendId?: number, backup?: boolean, chain?: string, cookie?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: OVH.ipLoadbalancing.ProxyProtocolVersionEnum, serverState?: OVH.ipLoadbalancing.ServerState[], ssl?: boolean, status?: OVH.ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number}): Promise<void>;
  /**
   * Frontend HTTP
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}', params: {serviceName: string, frontendId: string, allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, hsts?: boolean, httpHeader?: string[], port?: string, redirectLocation?: string, ssl?: boolean, zone?: string}): Promise<void>;
  /**
   * HTTP Route
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}', params: {serviceName: string, routeId: string, action?: OVH.ipLoadbalancing.RouteHttpAction, displayName?: string, frontendId?: number, rules?: OVH.ipLoadbalancing.RouteRule[], status?: OVH.ipLoadbalancing.RouteStatusEnum, weight?: number}): Promise<void>;
  /**
   * Rule of a route
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}', params: {serviceName: string, routeId: string, ruleId: string, displayName?: string, field?: string, match?: OVH.ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, subField?: string}): Promise<void>;
  /**
   * Quota informations for current billing period for this zone
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/quota/{zone}', params: {serviceName: string, zone: string, alert?: number, included?: number, lastUpdateDate?: string, resetDate?: string, total?: number}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Ssl
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/ssl/{id}', params: {serviceName: string, id: string, displayName?: string, expireDate?: string, fingerprint?: string, san?: string[], serial?: string, subject?: string, type?: OVH.ipLoadbalancing.SslTypeEnum}): Promise<void>;
  /**
   * TCP Farm
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}', params: {serviceName: string, farmId: string, balance?: OVH.ipLoadbalancing.BalanceTCPEnum, displayName?: string, port?: number, probe?: OVH.ipLoadbalancing.BackendProbe, stickiness?: OVH.ipLoadbalancing.StickinessTCPEnum, vrackNetworkId?: number, zone?: string}): Promise<void>;
  /**
   * TCP Farm's Server
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}', params: {serviceName: string, farmId: string, serverId: string, address?: string, backendId?: number, backup?: boolean, chain?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: OVH.ipLoadbalancing.ProxyProtocolVersionEnum, serverState?: OVH.ipLoadbalancing.ServerState[], ssl?: boolean, status?: OVH.ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number}): Promise<void>;
  /**
   * Frontend TCP
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}', params: {serviceName: string, frontendId: string, allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, port?: string, ssl?: boolean, zone?: string}): Promise<void>;
  /**
   * TCP Route
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}', params: {serviceName: string, routeId: string, action?: OVH.ipLoadbalancing.RouteTcpAction, displayName?: string, frontendId?: number, rules?: OVH.ipLoadbalancing.RouteRule[], status?: OVH.ipLoadbalancing.RouteStatusEnum, weight?: number}): Promise<void>;
  /**
   * Rule of a route
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}', params: {serviceName: string, routeId: string, ruleId: string, displayName?: string, field?: string, match?: OVH.ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, subField?: string}): Promise<void>;
  /**
   * UDP Farm
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}', params: {serviceName: string, farmId: string, displayName?: string, port?: number, vrackNetworkId?: number, zone?: string}): Promise<void>;
  /**
   * UDP Farm's Server
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}', params: {serviceName: string, farmId: string, serverId: string, address?: string, backendId?: number, displayName?: string, port?: number, status?: OVH.ipLoadbalancing.BackendCustomerServerStatusEnum}): Promise<void>;
  /**
   * Frontend UDP
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}', params: {serviceName: string, frontendId: string, dedicatedIpfo?: string[], defaultFarmId?: number, disabled?: boolean, displayName?: string, port?: string, zone?: string}): Promise<void>;
  /**
   * Represents a private network in the vRack
   * Alter this object properties
   */
  public put(path: '/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}', params: {serviceName: string, vrackNetworkId: string, displayName?: string, farmId?: OVH.ipLoadbalancing.DefinedFarm[], natIp?: string, subnet?: string, vlan?: number}): Promise<void>;
  public put(path: PathsIpLoadbalancingPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/ipLoadbalancing/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/ipLoadbalancing/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * freeCertificate operations
   * Order a free certificate. We order and deliver it for you
   */
  public post(path: '/ipLoadbalancing/{serviceName}/freeCertificate', params: {serviceName: string, fqdn: string[]}): Promise<ipLoadbalancing.Task.Task>;
  /**
   * List the ipLoadbalancing.backendHttp.BackendHttp objects
   * Add a new HTTP Farm on your IP Load Balancing
   */
  public post(path: '/ipLoadbalancing/{serviceName}/http/farm', params: {serviceName: string, balance?: OVH.ipLoadbalancing.BalanceHTTPEnum, displayName?: string, port?: number, probe?: OVH.ipLoadbalancing.BackendProbe, stickiness?: OVH.ipLoadbalancing.StickinessHTTPEnum, vrackNetworkId?: number, zone: string}): Promise<ipLoadbalancing.backendHttp.BackendHttp>;
  /**
   * List the ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer objects
   * Add a server to an HTTP Farm
   */
  public post(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server', params: {serviceName: string, farmId: string, address: string, backup?: boolean, chain?: string, cookie?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: OVH.ipLoadbalancing.ProxyProtocolVersionEnum, ssl?: boolean, status: OVH.ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number}): Promise<ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer>;
  /**
   * List the ipLoadbalancing.frontendHttp.FrontendHttp objects
   * Add a new http frontend on your IP Load Balancing
   */
  public post(path: '/ipLoadbalancing/{serviceName}/http/frontend', params: {serviceName: string, allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, hsts?: boolean, httpHeader?: string[], port: string, redirectLocation?: string, ssl?: boolean, zone: string}): Promise<ipLoadbalancing.frontendHttp.FrontendHttp>;
  /**
   * List the ipLoadbalancing.RouteHttp.RouteHttp objects
   * Add a new HTTP route to your frontend
   */
  public post(path: '/ipLoadbalancing/{serviceName}/http/route', params: {serviceName: string, action: OVH.ipLoadbalancing.RouteHttpAction, displayName?: string, frontendId?: number, weight?: number}): Promise<ipLoadbalancing.RouteHttp.RouteHttp>;
  /**
   * List the ipLoadbalancing.RouteRule.RouteRule objects
   * Add a new rule to your route
   */
  public post(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule', params: {serviceName: string, routeId: string, displayName?: string, field: string, match: OVH.ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, subField?: string}): Promise<ipLoadbalancing.RouteRule.RouteRule>;
  /**
   * refresh operations
   * Apply the configuration to your iplb
   */
  public post(path: '/ipLoadbalancing/{serviceName}/refresh', params: {serviceName: string, zone?: string}): Promise<ipLoadbalancing.Task.Task>;
  /**
   * List the ipLoadbalancing.Ssl.Ssl objects
   * Add a new custom SSL certificate on your IP Load Balancing
   */
  public post(path: '/ipLoadbalancing/{serviceName}/ssl', params: {serviceName: string, certificate: string, chain?: string, displayName?: string, key: string}): Promise<ipLoadbalancing.Ssl.Ssl>;
  /**
   * List the ipLoadbalancing.backendTcp.BackendTcp objects
   * Add a new TCP Farm on your IP Load Balancing
   */
  public post(path: '/ipLoadbalancing/{serviceName}/tcp/farm', params: {serviceName: string, balance?: OVH.ipLoadbalancing.BalanceTCPEnum, displayName?: string, port?: number, probe?: OVH.ipLoadbalancing.BackendProbe, stickiness?: OVH.ipLoadbalancing.StickinessTCPEnum, vrackNetworkId?: number, zone: string}): Promise<ipLoadbalancing.backendTcp.BackendTcp>;
  /**
   * List the ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer objects
   * Add a server to a TCP Farm
   */
  public post(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server', params: {serviceName: string, farmId: string, address: string, backup?: boolean, chain?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: OVH.ipLoadbalancing.ProxyProtocolVersionEnum, ssl?: boolean, status: OVH.ipLoadbalancing.BackendCustomerServerStatusEnum, weight?: number}): Promise<ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer>;
  /**
   * List the ipLoadbalancing.frontendTcp.FrontendTcp objects
   * Add a new TCP frontend on your IP Load Balancing
   */
  public post(path: '/ipLoadbalancing/{serviceName}/tcp/frontend', params: {serviceName: string, allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, port: string, ssl?: boolean, zone: string}): Promise<ipLoadbalancing.frontendTcp.FrontendTcp>;
  /**
   * List the ipLoadbalancing.RouteTcp.RouteTcp objects
   * Add a new TCP route to your frontend
   */
  public post(path: '/ipLoadbalancing/{serviceName}/tcp/route', params: {serviceName: string, action: OVH.ipLoadbalancing.RouteTcpAction, displayName?: string, frontendId?: number, weight?: number}): Promise<ipLoadbalancing.RouteTcp.RouteTcp>;
  /**
   * List the ipLoadbalancing.RouteRule.RouteRule objects
   * Add a new rule to your route
   */
  public post(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule', params: {serviceName: string, routeId: string, displayName?: string, field: string, match: OVH.ipLoadbalancing.RouteRuleMatchesEnum, negate?: boolean, pattern?: string, subField?: string}): Promise<ipLoadbalancing.RouteRule.RouteRule>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/ipLoadbalancing/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  /**
   * List the ipLoadbalancing.backendUdp.BackendUdp objects
   * Add a new UDP Farm on your IP Load Balancing
   */
  public post(path: '/ipLoadbalancing/{serviceName}/udp/farm', params: {serviceName: string, displayName?: string, port: number, vrackNetworkId?: number, zone: string}): Promise<ipLoadbalancing.backendUdp.BackendUdp>;
  /**
   * List the ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer objects
   * Add a server to an UDP Farm
   */
  public post(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server', params: {serviceName: string, farmId: string, address: string, displayName?: string, port?: number, status: OVH.ipLoadbalancing.BackendCustomerServerStatusEnum}): Promise<ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer>;
  /**
   * List the ipLoadbalancing.frontendUdp.FrontendUdp objects
   * Add a new UDP frontend on your IP Load Balancing
   */
  public post(path: '/ipLoadbalancing/{serviceName}/udp/frontend', params: {serviceName: string, dedicatedIpfo?: string[], defaultFarmId?: number, disabled?: boolean, displayName?: string, port: string, zone: string}): Promise<ipLoadbalancing.frontendUdp.FrontendUdp>;
  /**
   * List the ipLoadbalancing.VrackNetwork.VrackNetwork objects
   * Add a description of a private network in the attached vRack
   */
  public post(path: '/ipLoadbalancing/{serviceName}/vrack/network', params: {serviceName: string, displayName?: string, farmId?: number[], natIp: string, subnet: string, vlan?: number}): Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
  /**
   * updateFarmId operations
   * Update farm attached to that vrack network id
   */
  public post(path: '/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId', params: {serviceName: string, vrackNetworkId: string, farmId: number[]}): Promise<ipLoadbalancing.VrackNetwork.VrackNetwork>;
  /**
   * cancelTermination operations
   * Cancel the termination request of your service zone option
   */
  public post(path: '/ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination', params: {serviceName: string, name: string}): Promise<void>;
  /**
   * terminate operations
   * Terminate your service zone option
   */
  public post(path: '/ipLoadbalancing/{serviceName}/zone/{name}/terminate', params: {serviceName: string, name: string}): Promise<void>;
  public post(path: PathsIpLoadbalancingPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * HTTP Farm
   * Delete an HTTP Farm
   */
  public delete(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}', params: {serviceName: string, farmId: string}): Promise<void>;
  /**
   * HTTP Farm's Server
   * Delete a server from an HTTP Farm
   */
  public delete(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}', params: {serviceName: string, farmId: string, serverId: string}): Promise<void>;
  /**
   * Frontend HTTP
   * Delete an HTTP frontend
   */
  public delete(path: '/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}', params: {serviceName: string, frontendId: string}): Promise<void>;
  /**
   * HTTP Route
   * Delete this HTTP route
   */
  public delete(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}', params: {serviceName: string, routeId: string}): Promise<void>;
  /**
   * Rule of a route
   * Delete this rule from the route
   */
  public delete(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}', params: {serviceName: string, routeId: string, ruleId: string}): Promise<void>;
  /**
   * Ssl
   * Delete a custom SSL certificate
   */
  public delete(path: '/ipLoadbalancing/{serviceName}/ssl/{id}', params: {serviceName: string, id: string}): Promise<void>;
  /**
   * TCP Farm
   * Delete a TCP Farm
   */
  public delete(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}', params: {serviceName: string, farmId: string}): Promise<void>;
  /**
   * TCP Farm's Server
   * Delete a server from a TCP Farm
   */
  public delete(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}', params: {serviceName: string, farmId: string, serverId: string}): Promise<void>;
  /**
   * Frontend TCP
   * Delete an TCP frontend
   */
  public delete(path: '/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}', params: {serviceName: string, frontendId: string}): Promise<void>;
  /**
   * TCP Route
   * Delete this TCP route
   */
  public delete(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}', params: {serviceName: string, routeId: string}): Promise<void>;
  /**
   * Rule of a route
   * Delete this rule from the route
   */
  public delete(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}', params: {serviceName: string, routeId: string, ruleId: string}): Promise<void>;
  /**
   * UDP Farm
   * Delete an UDP Farm
   */
  public delete(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}', params: {serviceName: string, farmId: string}): Promise<void>;
  /**
   * UDP Farm's Server
   * Delete a server from an UDP Farm
   */
  public delete(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}', params: {serviceName: string, farmId: string, serverId: string}): Promise<void>;
  /**
   * Frontend UDP
   * Delete an UDP frontend
   */
  public delete(path: '/ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}', params: {serviceName: string, frontendId: string}): Promise<void>;
  /**
   * Represents a private network in the vRack
   * Delete this description of a private network in the vRack. It must not be used by any farm server
   */
  public delete(path: '/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}', params: {serviceName: string, vrackNetworkId: string}): Promise<void>;
  public delete(path: PathsIpLoadbalancingDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}