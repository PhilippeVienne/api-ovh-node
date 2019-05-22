import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * Anycast IP of a CDN customer
 */
export interface CdnanycastAnycast {
  /**
   */
  anycast: string;
  /**
   */
  backendLimit: number;
  /**
   */
  backendUse: number;
  /**
   */
  cacheRuleLimitPerDomain: number;
  /**
   */
  lastQuotaOrder?: string;
  /**
   * URL for downloading daily log of your CDN
   *
   */
  logUrl: string;
  /**
   */
  offer?: string;
  /**
   */
  quota: number;
  /**
   * The internal name of your CDN offer
   *
   */
  service: string;
}
/**
 * Backend for a domain
 */
export interface CdnanycastBackend {
  /**
   */
  ip: string;
}
/**
 * CacheRules for a domain
 */
export interface CdnanycastCacheRule {
  /**
   * Id for this cache rule
   *
   */
  cacheRuleId: number;
  /**
   */
  cacheType: CdnanycastCacheRuleCacheTypeEnum;
  /**
   */
  domain: string;
  /**
   */
  fileMatch: string;
  /**
   */
  fileType: CdnanycastCacheRuleFileTypeEnum;
  /**
   */
  status: CdnanycastCacheRuleStatusEnum;
  /**
   */
  ttl: number;
}
/**
 * All type a cache can be in
 */
export type CdnanycastCacheRuleCacheTypeEnum = 'forceCache' | 'noCache';
/**
 * All states an anycast pool can be in
 */
export type CdnanycastCacheRuleFileTypeEnum = 'extension' | 'file' | 'folder';
/**
 * All states a status can be in
 */
export type CdnanycastCacheRuleStatusEnum = 'creating' | 'deleting' | 'error' | 'off' | 'on' | 'updating';
/**
 * Domain on CDN
 */
export interface CdnanycastDomain {
  /**
   */
  cacheRuleUse: number;
  /**
   */
  cname: string;
  /**
   * Domain of this object
   *
   */
  domain: string;
  /**
   */
  status: CdnanycastDomainStatusEnum;
  /**
   */
  type: CdnanycastDomainTypeEnum;
}
/**
 * All states a status can be in
 */
export type CdnanycastDomainStatusEnum = 'error' | 'off' | 'on' | 'removing';
/**
 * All type of Domain
 */
export type CdnanycastDomainTypeEnum = 'plain' | 'ssl';
/**
 * URL to real time logs
 */
export interface CdnanycastLogsURL {
  /**
   * URL expiration date
   *
   */
  expirationDate: string;
  /**
   * URL to logs
   *
   */
  url: string;
}
/**
 * CDN Pop
 */
export interface CdnanycastPop {
  /**
   */
  city: string;
  /**
   */
  comment: string;
  /**
   * Name of the pop
   *
   */
  name: string;
  /**
   */
  status: CdnanycastPopStatusEnum;
}
/**
 * All Pop status
 */
export type CdnanycastPopStatusEnum = 'down' | 'ok' | 'rerouted' | 'unknown';
/**
 * CDN Ssl
 */
export interface CdnanycastSsl {
  /**
   * Provider of the certificate installed on CDN
   *
   */
  certificateProvider: string;
  /**
   */
  certificateValidFrom?: string;
  /**
   */
  certificateValidTo?: string;
  /**
   */
  cn?: string;
  /**
   */
  name: string;
  /**
   */
  status: CdnanycastSslStateEnum;
}
/**
 * All states a CDN SSL can be in
 */
export type CdnanycastSslStateEnum = 'checking' | 'creating' | 'error' | 'off' | 'on' | 'removing' | 'updating' | 'uploading';
/**
 * A structure describing type of a stats hash
 */
export interface CdnanycastStatsDataType {
  /**
   */
  date: string;
  /**
   */
  value?: number;
}
/**
 * Period of the statistics
 */
export type CdnanycastStatsPeriodEnum = 'day' | 'month' | 'week';
/**
 * Type of statistics related to cache
 */
export type CdnanycastStatsTypeEnum = 'backend' | 'cdn' | 'threat';
/**
 * Value bandwidth or request
 */
export type CdnanycastStatsValueEnum = 'bandwidth' | 'request';
/**
 * Task on a CDN
 */
export interface CdnanycastTask {
  /**
   */
  comment?: string;
  /**
   */
  function: CdnanycastTaskFunctionEnum;
  /**
   */
  status: CdnanycastTaskStateEnum;
  /**
   */
  taskId: number;
}
/**
 * All function CDN task can be
 */
export type CdnanycastTaskFunctionEnum = 'flush' | 'flushAll' | 'generateSsl' | 'installSsl' | 'reinstallSsl' | 'removeDomain' | 'uninstallSsl' | 'updateCacheRule';
/**
 * All states a CDN task can be in
 */
export type CdnanycastTaskStateEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service is automatically renewed
   *
   */
  automatic: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced: boolean;
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: number;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration: boolean;
  /**
   */
  contactAdmin: string;
  /**
   */
  contactBilling: string;
  /**
   */
  contactTech: string;
  /**
   */
  creation: string;
  /**
   */
  domain: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: number[];
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  renewalType: ServiceRenewalTypeEnum;
  /**
   */
  serviceId: number;
  /**
   */
  status: ServiceStateEnum;
}
type PathsCdnDedicatedGET = '/cdn/dedicated' | 
'/cdn/dedicated/pops' | 
'/cdn/dedicated/pops/{name}' | 
'/cdn/dedicated/{serviceName}' | 
'/cdn/dedicated/{serviceName}/domains' | 
'/cdn/dedicated/{serviceName}/domains/{domain}' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/backends' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks/{taskId}' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/statistics' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/tasks' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/tasks/{taskId}' | 
'/cdn/dedicated/{serviceName}/quota' | 
'/cdn/dedicated/{serviceName}/serviceInfos' | 
'/cdn/dedicated/{serviceName}/ssl' | 
'/cdn/dedicated/{serviceName}/ssl/tasks' | 
'/cdn/dedicated/{serviceName}/ssl/tasks/{taskId}';

type PathsCdnDedicatedPUT = '/cdn/dedicated/{serviceName}/domains/{domain}' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}' | 
'/cdn/dedicated/{serviceName}/serviceInfos';

type PathsCdnDedicatedPOST = '/cdn/dedicated/{serviceName}/changeContact' | 
'/cdn/dedicated/{serviceName}/domains' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/backends' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/flush' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/flush' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/logs' | 
'/cdn/dedicated/{serviceName}/logs' | 
'/cdn/dedicated/{serviceName}/ssl' | 
'/cdn/dedicated/{serviceName}/ssl/update';

type PathsCdnDedicatedDELETE = '/cdn/dedicated/{serviceName}/domains/{domain}' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}' | 
'/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}' | 
'/cdn/dedicated/{serviceName}/ssl';

export class ApiCdnDedicated extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Operations about the CDNANYCAST service
  List available services
  **/
  public get(path: '/cdn/dedicated'): Promise<string[]>;
  /**
  List the cdnanycast.Pop objects
  List of CDN Pops
  **/
  public get(path: '/cdn/dedicated/pops'): Promise<string[]>;
  /**
  CDN Pop
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/pops/{name}', params: {name: string}): Promise<CdnanycastPop>;
  /**
  Anycast IP of a CDN customer
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}', params: {serviceName: string}): Promise<CdnanycastAnycast>;
  /**
  List the cdnanycast.Domain objects
  Domains associated to this anycast
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains', params: {serviceName: string}): Promise<string[]>;
  /**
  Domain on CDN
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}', params: {serviceName: string, domain: string}): Promise<CdnanycastDomain>;
  /**
  List the cdnanycast.Backend objects
  Backend associated to the domain
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/backends', params: {serviceName: string, domain: string}): Promise<string[]>;
  /**
  Backend for a domain
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}', params: {serviceName: string, domain: string, ip: string}): Promise<CdnanycastBackend>;
  /**
  List the cdnanycast.CacheRule objects
  Cache rules associated to the domain
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules', params: {serviceName: string, domain: string, fileMatch?: string}): Promise<number[]>;
  /**
  CacheRules for a domain
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}', params: {serviceName: string, domain: string, cacheRuleId: number}): Promise<CdnanycastCacheRule>;
  /**
  List the cdnanycast.Task objects
  Task associated to the cache rule
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks', params: {serviceName: string, domain: string, cacheRuleId: number}): Promise<number[]>;
  /**
  Task on a CDN
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks/{taskId}', params: {serviceName: string, domain: string, cacheRuleId: number, taskId: number}): Promise<CdnanycastTask>;
  /**
  statistics operations
  Return stats about a domain
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/statistics', params: {serviceName: string, domain: string, period: CdnanycastStatsPeriodEnum, type: CdnanycastStatsTypeEnum, value: CdnanycastStatsValueEnum}): Promise<CdnanycastStatsDataType[]>;
  /**
  List the cdnanycast.Task objects
  Task associated to the domain
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/tasks', params: {serviceName: string, domain: string}): Promise<number[]>;
  /**
  Task on a CDN
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}/domains/{domain}/tasks/{taskId}', params: {serviceName: string, domain: string, taskId: number}): Promise<CdnanycastTask>;
  /**
  quota operations
  Return quota history
  **/
  public get(path: '/cdn/dedicated/{serviceName}/quota', params: {serviceName: string, period: CdnanycastStatsPeriodEnum}): Promise<CdnanycastStatsDataType[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<ServicesService>;
  /**
  CDN Ssl
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}/ssl', params: {serviceName: string}): Promise<CdnanycastSsl>;
  /**
  List the cdnanycast.Task objects
  Task associated to the ssl
  **/
  public get(path: '/cdn/dedicated/{serviceName}/ssl/tasks', params: {serviceName: string, function?: CdnanycastTaskFunctionEnum, status?: CdnanycastTaskStateEnum}): Promise<number[]>;
  /**
  Task on a CDN
  Get this object properties
  **/
  public get(path: '/cdn/dedicated/{serviceName}/ssl/tasks/{taskId}', params: {serviceName: string, taskId: number}): Promise<CdnanycastTask>;
  public get(path: PathsCdnDedicatedGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Domain on CDN
  Alter this object properties
  **/
  public put(path: '/cdn/dedicated/{serviceName}/domains/{domain}', params: {serviceName: string, domain: string}): Promise<void>;
  /**
  CacheRules for a domain
  Alter this object properties
  **/
  public put(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}', params: {serviceName: string, domain: string, cacheRuleId: number}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/cdn/dedicated/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<void>;
  public put(path: PathsCdnDedicatedPUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/cdn/dedicated/{serviceName}/changeContact', params: {serviceName: string}): Promise<number[]>;
  /**
  List the cdnanycast.Domain objects
  Add a domain on CDN
  **/
  public post(path: '/cdn/dedicated/{serviceName}/domains', params: {serviceName: string}): Promise<CdnanycastDomain>;
  /**
  List the cdnanycast.Backend objects
  Add a backend IP
  **/
  public post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/backends', params: {serviceName: string, domain: string}): Promise<CdnanycastBackend>;
  /**
  List the cdnanycast.CacheRule objects
  Add a cache rule to a domain
  **/
  public post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules', params: {serviceName: string, domain: string}): Promise<CdnanycastCacheRule>;
  /**
  flush operations
  Flush the cache
  **/
  public post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/flush', params: {serviceName: string, domain: string, cacheRuleId: number}): Promise<CdnanycastTask>;
  /**
  flush operations
  Flush all cache
  **/
  public post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/flush', params: {serviceName: string, domain: string}): Promise<CdnanycastTask>;
  /**
  logs operations
  Generate URL to real time logs
  **/
  public post(path: '/cdn/dedicated/{serviceName}/domains/{domain}/logs', params: {serviceName: string, domain: string}): Promise<CdnanycastLogsURL>;
  /**
  logs operations
  Generate URL to real time logs
  **/
  public post(path: '/cdn/dedicated/{serviceName}/logs', params: {serviceName: string}): Promise<CdnanycastLogsURL>;
  /**
  CDN Ssl
  Add a SSL on CDN or Generate a Lets Encrypt certificate
  **/
  public post(path: '/cdn/dedicated/{serviceName}/ssl', params: {serviceName: string}): Promise<CdnanycastSsl>;
  /**
  update operations
  Update an existing SSL with a custom certificate
  **/
  public post(path: '/cdn/dedicated/{serviceName}/ssl/update', params: {serviceName: string}): Promise<CdnanycastTask>;
  public post(path: PathsCdnDedicatedPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  Domain on CDN
  Remove a domain from the CDN
  **/
  public delete(path: '/cdn/dedicated/{serviceName}/domains/{domain}', params: {serviceName: string, domain: string}): Promise<CdnanycastTask>;
  /**
  Backend for a domain
  Remove a backend IP
  **/
  public delete(path: '/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}', params: {serviceName: string, domain: string, ip: string}): Promise<string>;
  /**
  CacheRules for a domain
  Remove cache rule
  **/
  public delete(path: '/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}', params: {serviceName: string, domain: string, cacheRuleId: number}): Promise<CdnanycastTask>;
  /**
  CDN Ssl
  Remove SSL of the CDN
  **/
  public delete(path: '/cdn/dedicated/{serviceName}/ssl', params: {serviceName: string}): Promise<CdnanycastTask>;
  public delete(path: PathsCdnDedicatedDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}
