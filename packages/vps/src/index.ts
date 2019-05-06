import { ApiCommon } from '@ovh-api/common';
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  /**
   */
  unit?: string;
  /**
   */
  value?: T;
}
/**
 * A value set tagged with its unit
 */
export interface ComplexTypeUnitAndValues<T> {
  /**
   */
  unit?: string;
  /**
   */
  values?: T[];
}
/**
 * ISO country codes
 */
export type CoreTypesCountryEnum = 'ac' | 'ad' | 'ae' | 'af' | 'ag' | 'ai' | 'al' | 'am' | 'an' | 'ao' | 'aq' | 'ar' | 'as' | 'at' | 'au' | 'aw' | 'ax' | 'az' | 'ba' | 'bb' | 'bd' | 'be' | 'bf' | 'bg' | 'bh' | 'bi' | 'bj' | 'bl' | 'bm' | 'bn' | 'bo' | 'bq' | 'br' | 'bs' | 'bt' | 'bv' | 'bw' | 'by' | 'bz' | 'ca' | 'cc' | 'cd' | 'cf' | 'cg' | 'ch' | 'ci' | 'ck' | 'cl' | 'cm' | 'cn' | 'co' | 'cr' | 'cs' | 'cu' | 'cv' | 'cw' | 'cx' | 'cy' | 'cz' | 'de' | 'dj' | 'dk' | 'dm' | 'do' | 'dz' | 'ec' | 'ee' | 'eg' | 'eh' | 'er' | 'es' | 'et' | 'fc' | 'fd' | 'fi' | 'fj' | 'fk' | 'fm' | 'fo' | 'fr' | 'fx' | 'ga' | 'gb' | 'gd' | 'ge' | 'gf' | 'gg' | 'gh' | 'gi' | 'gl' | 'gm' | 'gn' | 'gp' | 'gq' | 'gr' | 'gs' | 'gt' | 'gu' | 'gw' | 'gy' | 'hk' | 'hm' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'ie' | 'il' | 'im' | 'in' | 'io' | 'iq' | 'ir' | 'is' | 'it' | 'je' | 'jm' | 'jo' | 'jp' | 'ke' | 'kg' | 'kh' | 'ki' | 'km' | 'kn' | 'kp' | 'kr' | 'kw' | 'ky' | 'kz' | 'la' | 'lb' | 'lc' | 'li' | 'lk' | 'lr' | 'ls' | 'lt' | 'lu' | 'lv' | 'ly' | 'ma' | 'mc' | 'md' | 'me' | 'mf' | 'mg' | 'mh' | 'mk' | 'ml' | 'mm' | 'mn' | 'mo' | 'mp' | 'mq' | 'mr' | 'ms' | 'mt' | 'mu' | 'mv' | 'mw' | 'mx' | 'my' | 'mz' | 'na' | 'nc' | 'ne' | 'nf' | 'ng' | 'ni' | 'nl' | 'no' | 'np' | 'nr' | 'nu' | 'nz' | 'om' | 'pa' | 'pe' | 'pf' | 'pg' | 'ph' | 'pk' | 'pl' | 'pm' | 'pn' | 'pr' | 'ps' | 'pt' | 'pw' | 'py' | 'qa' | 'qc' | 're' | 'ro' | 'rs' | 'ru' | 'rw' | 'sa' | 'sb' | 'sc' | 'sd' | 'se' | 'sg' | 'sh' | 'si' | 'sj' | 'sk' | 'sl' | 'sm' | 'sn' | 'so' | 'sr' | 'ss' | 'st' | 'sv' | 'sx' | 'sy' | 'sz' | 'tc' | 'td' | 'tf' | 'tg' | 'th' | 'tj' | 'tk' | 'tl' | 'tm' | 'tn' | 'to' | 'tp' | 'tr' | 'tt' | 'tv' | 'tw' | 'tz' | 'ua' | 'ug' | 'uk' | 'um' | 'us' | 'uy' | 'uz' | 'va' | 'vc' | 've' | 'vg' | 'vi' | 'vn' | 'vu' | 'we' | 'wf' | 'ws' | 'ye' | 'yt' | 'yu' | 'za' | 'zm' | 'zw';
/**
 * Ip versions
 */
export type CoreTypesIpVersionEnum = 'v4' | 'v6';
/**
 * different task operation
 */
export type DedicatedTaskFunctionEnum = 'addVirtualMac' | 'addWindowSplaFromExistingSerial' | 'applyBackupFtpAcls' | 'applyBackupFtpQuota' | 'bypassAntiDDosGame' | 'changePasswordBackupFTP' | 'changeRipeOrg' | 'checkAndReleaseIp' | 'createBackupFTP' | 'createOrUpdateRipeOrg' | 'createPrivateNetwork' | 'disableFirewall' | 'enableFirewall' | 'genericMoveFloatingIp' | 'hardReboot' | 'migrateBackupFTP' | 'moveFloatingIp' | 'moveVirtualMac' | 'rebootPower8To' | 'reinstallServer' | 'releaseIp' | 'removeBackupFTP' | 'removeVirtualMac' | 'requestAccessIPMI' | 'resetIPMI' | 'resetIPMISession' | 'testIPMIhttp' | 'testIPMIpassword' | 'testIPMIping' | 'virtualMacAdd' | 'virtualMacDelete';
/**
 * different task status
 */
export type DedicatedTaskStatusEnum = 'cancelled' | 'customerError' | 'doing' | 'done' | 'init' | 'ovhError' | 'todo';
/**
 * Backup Ftp ACL for this server and Backup Ftp
 */
export interface DedicatedServerBackupFtpAcl {
  /**
   * Wether to allow the CIFS (SMB) protocol for this ACL
   *
   */
  cifs?: boolean;
  /**
   * Wether to allow the FTP protocol for this ACL
   *
   */
  ftp?: boolean;
  /**
   * The IP Block specific to this ACL
   *
   */
  ipBlock?: string;
  /**
   * Whether the rule has been applied on the Backup Ftp
   *
   */
  isApplied?: boolean;
  /**
   * Date of the last object modification
   *
   */
  lastUpdate?: string;
  /**
   * Wether to allow the NFS protocol for this ACL
   *
   */
  nfs?: boolean;
}
/**
 * Server tasks
 */
export interface DedicatedServerTask {
  /**
   * Details of this task
   *
   */
  comment?: string;
  /**
   * Completion date
   *
   */
  doneDate?: string;
  /**
   * Function name
   *
   */
  function?: DedicatedTaskFunctionEnum;
  /**
   * last update
   *
   */
  lastUpdate?: string;
  /**
   * Task Creation date
   *
   */
  startDate?: string;
  /**
   * Task status
   *
   */
  status?: DedicatedTaskStatusEnum;
  /**
   * the id of the task
   *
   */
  taskId?: Number;
}
/**
 * Countries a nichandle can choose
 */
export type NichandleCountryEnum = 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AO' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' | 'BO' | 'BQ' | 'BR' | 'BS' | 'BT' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CW' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DG' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EA' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FM' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GW' | 'GY' | 'HK' | 'HN' | 'HR' | 'HT' | 'HU' | 'IC' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PN' | 'PR' | 'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' | 'SV' | 'SX' | 'SY' | 'SZ' | 'TA' | 'TC' | 'TD' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'UM' | 'UNKNOWN' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'XK' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW';
/**
 * Secondary dns infos
 */
export interface SecondaryDnsSecondaryDNS {
  /**
   */
  creationDate?: string;
  /**
   * secondary dns server
   *
   */
  dns?: string;
  /**
   * domain on slave server
   *
   */
  domain?: string;
  /**
   * master ip
   *
   */
  ipMaster?: string;
}
/**
 * A structure describing informations about available nameserver for secondary dns 
 */
export interface SecondaryDnsSecondaryDNSNameServer {
  /**
   * the name server
   *
   */
  hostname?: string;
  /**
   */
  ip?: string;
  /**
   */
  ipv6?: string;
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced?: boolean;
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
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
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  contactAdmin?: string;
  /**
   */
  contactBilling?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  creation?: string;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  serviceId?: Number;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * Backup your VPS
 */
export interface VpsAutomatedBackup {
  /**
   * Scheduled time of your daily backup
   *
   */
  schedule?: string;
  /**
   * Backup state
   *
   */
  state?: VpsBackupStateEnum;
}
/**
 * Backup Ftp assigned to this VPS
 */
export interface VpsBackupFtp {
  /**
   * The backup FTP server name
   *
   */
  ftpBackupName?: string;
  /**
   * The disk space available on your backup FTP
   *
   */
  quota?: ComplexTypeUnitAndValue<Number>;
  /**
   * If not-null, gives the date since when your account was set in read-only mode because the quota was exceeded
   *
   */
  readOnlyDate?: string;
  /**
   * The backup FTP type
   *
   */
  type?: string;
  /**
   * The disk space currently used on your backup FTP
   *
   */
  usage?: ComplexTypeUnitAndValue<Number>;
}
/**
 * Available AutomatedBackup states
 */
export type VpsBackupStateEnum = 'disabled' | 'enabled';
/**
 * Information about a datacenter of a VPS Virtual Machine
 */
export interface VpsDatacenter {
  /**
   */
  longName?: string;
  /**
   */
  name?: string;
}
/**
 * Information about a disk of a VPS Virtual Machine
 */
export interface VpsDisk {
  /**
   */
  bandwidthLimit?: Number;
  /**
   */
  id?: Number;
  /**
   * The low disk free space threshold in MiB
   *
   */
  lowFreeSpaceThreshold?: Number;
  /**
   * The monitoring state of this disk
   *
   */
  monitoring?: boolean;
  /**
   */
  size?: Number;
  /**
   */
  state?: VpsDiskStateEnum;
  /**
   */
  type?: VpsDiskTypeEnum;
}
/**
 * Installation image for a VPS
 */
export interface VpsImage {
  /**
   */
  id?: string;
  /**
   */
  name?: string;
}
/**
 * Information about an IP address for a VPS Virtual Machine
 */
export interface VpsIp {
  /**
   */
  gateway?: string;
  /**
   */
  geolocation?: VpsIpGeolocationEnum;
  /**
   * The effective ip address of the Ip object
   *
   */
  ipAddress?: string;
  /**
   */
  macAddress?: string;
  /**
   */
  reverse?: string;
  /**
   */
  type?: VpsIpTypeEnum;
  /**
   */
  version?: CoreTypesIpVersionEnum;
}
/**
 * A structure describing characteristics of a VPS model
 */
export interface VpsModel {
  /**
   */
  availableOptions?: VpsVpsOptionEnum[];
  /**
   */
  datacenter?: string[];
  /**
   */
  disk?: Number;
  /**
   */
  maximumAdditionnalIp?: Number;
  /**
   */
  memory?: Number;
  /**
   */
  name?: string;
  /**
   */
  offer?: string;
  /**
   */
  vcore?: Number;
  /**
   */
  version?: VpsVpsVersionEnum;
}
/**
 * Information about the options of a VPS Virtual Machine
 */
export interface VpsOption {
  /**
   * The option name
   *
   */
  option?: VpsVpsOptionEnum;
  /**
   * The state of the option
   *
   */
  state?: VpsVpsOptionStateEnum;
}
/**
 * Available restore state
 */
export type VpsRestoreStateEnum = 'available' | 'restored' | 'restoring';
/**
 * Available restore types
 */
export type VpsRestoreTypeEnum = 'file' | 'full';
/**
 * Information about the snapshot of a VPS Virtual Machine
 */
export interface VpsSnapshot {
  /**
   */
  creationDate?: string;
  /**
   */
  description?: string;
}
/**
 * Available softwares on a Template
 */
export interface VpsSoftware {
  /**
   */
  id?: Number;
  /**
   */
  name?: string;
  /**
   */
  status?: VpsSoftwareStatusEnum;
  /**
   */
  type?: VpsSoftwareTypeEnum;
}
/**
 * Available Status for a vps Software
 */
export type VpsSoftwareStatusEnum = 'deprecated' | 'stable' | 'testing';
/**
 * Available Type for a vps Software
 */
export type VpsSoftwareTypeEnum = 'database' | 'environment' | 'webserver';
/**
 * Operation on a VPS Virtual Machine
 */
export interface VpsTask {
  /**
   */
  id?: Number;
  /**
   */
  progress?: Number;
  /**
   */
  state?: VpsTaskStateEnum;
  /**
   */
  type?: VpsTaskTypeEnum;
}
/**
 * All states a VPS task can be in
 */
export type VpsTaskStateEnum = 'blocked' | 'cancelled' | 'doing' | 'done' | 'error' | 'paused' | 'todo' | 'waitingAck';
/**
 * All type a VPS task can be
 */
export type VpsTaskTypeEnum = 'addVeeamBackupJob' | 'changeRootPassword' | 'createSnapshot' | 'deleteSnapshot' | 'deliverVm' | 'getConsoleUrl' | 'internalTask' | 'openConsoleAccess' | 'provisioningAdditionalIp' | 'reOpenVm' | 'rebootVm' | 'reinstallVm' | 'removeVeeamBackup' | 'restoreFullVeeamBackup' | 'restoreVeeamBackup' | 'restoreVm' | 'revertSnapshot' | 'setMonitoring' | 'setNetboot' | 'startVm' | 'stopVm' | 'upgradeVm';
/**
 * Installation template for a VPS Virtual Machine
 */
export interface VpsTemplate {
  /**
   */
  availableLanguage?: string[];
  /**
   */
  bitFormat?: VpsTemplateBitFormatEnum;
  /**
   */
  distribution?: string;
  /**
   */
  id?: Number;
  /**
   */
  locale?: string;
  /**
   */
  name?: string;
}
/**
 * Bitness of a VPS template
 */
export type VpsTemplateBitFormatEnum = 32 | 64;
/**
 * VPS Virtual Machine
 */
export interface VpsVPS {
  /**
   */
  cluster?: string;
  /**
   * Set the name displayed in ManagerV6 for your VPS (max 50 chars)
   *
   */
  displayName?: string;
  /**
   * Set KVM keyboard layout on VPS Cloud. Reboot your VPS after change
   *
   */
  keymap?: VpsVpsKeymapEnum;
  /**
   */
  memoryLimit?: Number;
  /**
   */
  model?: VpsModel;
  /**
   * Ip blocks for OVH monitoring servers
   *
   */
  monitoringIpBlocks?: string[];
  /**
   */
  name?: string;
  /**
   * Reboot your VPS 'Cloud' after change, VPS 'Classic/LowLat' will reboot automatically. Credentials for rescue mode will be sent by mail
   *
   */
  netbootMode?: VpsVpsNetbootEnum;
  /**
   */
  offerType?: VpsVpsOfferEnum;
  /**
   */
  slaMonitoring?: boolean;
  /**
   */
  state?: VpsVpsStateEnum;
  /**
   */
  vcore?: Number;
  /**
   */
  zone?: string;
}
/**
 * Informations about a VPS Veeam backups
 */
export interface VpsVeeam {
  /**
   * Backup state
   *
   */
  backup?: boolean;
}
/**
 * A VNC connection informations
 */
export interface VpsVnc {
  /**
   */
  host?: string;
  /**
   */
  password?: string;
  /**
   */
  port?: Number;
}
/**
 * All supported VNC protocols by VPS
 */
export type VpsVncProtocolEnum = 'VNC' | 'VNCOverWebSocket';
/**
 * VPS billing version
 */
export interface VpsVpsBillingVersion {
  /**
   */
  version?: Number;
}
/**
 * All values keymap can be in
 */
export type VpsVpsKeymapEnum = 'fr' | 'us';
/**
 * Available periods for the VPS monitoring
 */
export type VpsVpsMonitoringPeriodEnum = 'lastday' | 'lastmonth' | 'lastweek' | 'lastyear' | 'today';
/**
 * All values a VPS netboot mode can be in
 */
export type VpsVpsNetbootEnum = 'local' | 'rescue';
/**
 * All offers a VPS can have
 */
export type VpsVpsOfferEnum = 'beta-classic' | 'classic' | 'cloud' | 'cloudram' | 'game-classic' | 'lowlat' | 'ssd';
/**
 * All options a VPS can have
 */
export type VpsVpsOptionEnum = 'additionalDisk' | 'automatedBackup' | 'cpanel' | 'ftpbackup' | 'plesk' | 'snapshot' | 'veeam' | 'windows';
/**
 * All states a VPS Option can be in
 */
export type VpsVpsOptionStateEnum = 'released' | 'subscribed';
/**
 * All states a VPS can be in
 */
export type VpsVpsStateEnum = 'installing' | 'maintenance' | 'rebooting' | 'running' | 'stopped' | 'stopping' | 'upgrading';
/**
 * Available types for the VPS monitoring and use
 */
export type VpsVpsStatisticTypeEnum = 'cpu:iowait' | 'cpu:max' | 'cpu:nice' | 'cpu:sys' | 'cpu:used' | 'cpu:user' | 'mem:max' | 'mem:used' | 'net:rx' | 'net:tx';
/**
 * A timestamp associated to a value
 */
export interface VpsVpsTimestampValue {
  /**
   */
  timestamp?: Number;
  /**
   */
  value?: Number;
}
/**
 * All versions that VPS can have
 */
export type VpsVpsVersionEnum = '2013v1' | '2014v1' | '2015v1' | '2017v1' | '2017v2' | '2017v3' | '2018v1' | '2018v2' | '2019v1';
/**
 * A backup attached to your VPS
 */
export interface VpsAutomatedBackupAttached {
  /**
   */
  access?: VpsAutomatedBackupAttachedInfos;
  /**
   */
  restorePoint?: string;
}
/**
 * A structure describing a backup's access informations
 */
export interface VpsAutomatedBackupAttachedInfos {
  /**
   * Additional Disk details
   *
   */
  additionalDisk?: string;
  /**
   * NFS URL of the backup
   *
   */
  nfs?: string;
  /**
   * SMB URL of the backup
   *
   */
  smb?: string;
}
/**
 * Possible states the disk can be in
 */
export type VpsDiskStateEnum = 'connected' | 'disconnected' | 'pending';
/**
 * Available types for the Disk monitoring and use
 */
export type VpsDiskStatisticTypeEnum = 'max' | 'used';
/**
 * Possible type a disk can be in
 */
export type VpsDiskTypeEnum = 'additional' | 'primary';
/**
 * Geolocation of the IP Address
 */
export type VpsIpGeolocationEnum = 'au' | 'be' | 'ca' | 'cz' | 'de' | 'es' | 'fi' | 'fr' | 'ie' | 'it' | 'lt' | 'nl' | 'pl' | 'pt' | 'sg' | 'uk' | 'us';
/**
 * Service states for an Ip
 */
export interface VpsIpServiceStatus {
  /**
   */
  dns?: VpsIpServiceStatusService;
  /**
   */
  http?: VpsIpServiceStatusService;
  /**
   */
  https?: VpsIpServiceStatusService;
  /**
   */
  ping?: VpsIpServiceStatusStateEnum;
  /**
   */
  smtp?: VpsIpServiceStatusService;
  /**
   */
  ssh?: VpsIpServiceStatusService;
  /**
   */
  tools?: VpsIpServiceStatusStateEnum;
}
/**
 * Port and state of a service on an IP
 */
export interface VpsIpServiceStatusService {
  /**
   */
  port?: Number;
  /**
   */
  state?: VpsIpServiceStatusStateEnum;
}
/**
 * Possible states of a service (ping, port)
 */
export type VpsIpServiceStatusStateEnum = 'down' | 'up';
/**
 * Ip types on a VPS
 */
export type VpsIpTypeEnum = 'additional' | 'primary';
/**
 * Description not available
 */
export interface VpsMigrationMigration {
  /**
   * The planned date of the migration
   *
   */
  date?: string;
  /**
   * Migration Id
   *
   */
  id?: string;
}
/**
 * A structure describing a Veeam backup's export options
 */
export type VpsVeeamExportTypeEnum = 'nfs' | 'smb';
/**
 * A structure describing a Veeam backup's access informations
 */
export interface VpsVeeamInfos {
  /**
   * NFS URL of the backup
   *
   */
  nfs?: string;
  /**
   * SMB URL of the backup
   *
   */
  smb?: string;
}
/**
 * Informations about a VPS Veeam restore points
 */
export interface VpsVeeamRestorePoint {
  /**
   * The restore point's creation time
   *
   */
  creationTime?: string;
  /**
   * The restore point's id
   *
   */
  id?: Number;
}
/**
 * Currently restored backup
 */
export interface VpsVeeamRestoredBackup {
  /**
   * Backup access informations
   *
   */
  accessInfos?: VpsVeeamInfos;
  /**
   * The restore point id
   *
   */
  restorePointId?: Number;
  /**
   * The restored backup state
   *
   */
  state?: VpsVeeamStateEnum;
}
/**
 * A structure describing a Veeam restored backup's state
 */
export type VpsVeeamStateEnum = 'mounted' | 'restoring' | 'unmounted' | 'unmounting';
type PathsVpsGET = '/vps' | 
'/vps/{serviceName}/automatedBackup/restorePoints' | 
'/vps/{serviceName}/automatedBackup' | 
'/vps/{serviceName}/automatedBackup/attachedBackup' | 
'/vps/{serviceName}/snapshot' | 
'/vps/{serviceName}/status' | 
'/vps/{serviceName}/secondaryDnsNameServerAvailable' | 
'/vps/{serviceName}/models' | 
'/vps/{serviceName}/availableUpgrade' | 
'/vps/{serviceName}/veeam' | 
'/vps/{serviceName}/veeam/restorePoints/{id}' | 
'/vps/{serviceName}/veeam/restorePoints' | 
'/vps/{serviceName}/veeam/restoredBackup' | 
'/vps/{serviceName}/monitoring' | 
'/vps/{serviceName}/templates/{id}' | 
'/vps/{serviceName}/templates/{id}/software/{softwareId}' | 
'/vps/{serviceName}/templates/{id}/software' | 
'/vps/{serviceName}/templates' | 
'/vps/{serviceName}/secondaryDnsDomains' | 
'/vps/{serviceName}/secondaryDnsDomains/{domain}' | 
'/vps/{serviceName}/secondaryDnsDomains/{domain}/dnsServer' | 
'/vps/{serviceName}/ips' | 
'/vps/{serviceName}/ips/{ipAddress}' | 
'/vps/{serviceName}/option' | 
'/vps/{serviceName}/option/{option}' | 
'/vps/{serviceName}/backupftp/access/{ipBlock}' | 
'/vps/{serviceName}/backupftp/access' | 
'/vps/{serviceName}/backupftp' | 
'/vps/{serviceName}/backupftp/authorizableBlocks' | 
'/vps/{serviceName}/activeOptions' | 
'/vps/{serviceName}/disks' | 
'/vps/{serviceName}/disks/{id}/monitoring' | 
'/vps/{serviceName}/disks/{id}' | 
'/vps/{serviceName}/disks/{id}/use' | 
'/vps/{serviceName}/tasks/{id}' | 
'/vps/{serviceName}/tasks' | 
'/vps/{serviceName}/ipCountryAvailable' | 
'/vps/{serviceName}/datacenter' | 
'/vps/{serviceName}/distribution' | 
'/vps/{serviceName}/distribution/software' | 
'/vps/{serviceName}/distribution/software/{softwareId}' | 
'/vps/{serviceName}/serviceInfos' | 
'/vps/{serviceName}' | 
'/vps/{serviceName}/use' | 
'/vps/datacenter';

type PathsVpsPUT = '/vps/{serviceName}/snapshot' | 
'/vps/{serviceName}/secondaryDnsDomains/{domain}' | 
'/vps/{serviceName}/ips/{ipAddress}' | 
'/vps/{serviceName}/backupftp/access/{ipBlock}' | 
'/vps/{serviceName}/disks/{id}' | 
'/vps/{serviceName}/serviceInfos' | 
'/vps/{serviceName}';

type PathsVpsPOST = '/vps/{serviceName}/automatedBackup/detachBackup' | 
'/vps/{serviceName}/automatedBackup/restore' | 
'/vps/{serviceName}/snapshot/revert' | 
'/vps/{serviceName}/openConsoleAccess' | 
'/vps/{serviceName}/stop' | 
'/vps/{serviceName}/terminate' | 
'/vps/{serviceName}/start' | 
'/vps/{serviceName}/createSnapshot' | 
'/vps/{serviceName}/changeContact' | 
'/vps/{serviceName}/veeam/restorePoints/{id}/restore' | 
'/vps/{serviceName}/getConsoleUrl' | 
'/vps/{serviceName}/secondaryDnsDomains' | 
'/vps/{serviceName}/confirmTermination' | 
'/vps/{serviceName}/backupftp/password' | 
'/vps/{serviceName}/backupftp/access' | 
'/vps/{serviceName}/reboot' | 
'/vps/{serviceName}/reinstall' | 
'/vps/{serviceName}/setPassword';

type PathsVpsDELETE = '/vps/{serviceName}/snapshot' | 
'/vps/{serviceName}/veeam/restoredBackup' | 
'/vps/{serviceName}/secondaryDnsDomains/{domain}' | 
'/vps/{serviceName}/ips/{ipAddress}' | 
'/vps/{serviceName}/option/{option}' | 
'/vps/{serviceName}/backupftp/access/{ipBlock}';

export class ApiVps extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the VPS service
  List available services
  **/
  public get(path: '/vps'): Promise<string[]>;
  /**
  restorePoints operations
  Get available Restore Points
  **/
  public get(path: '/vps/{serviceName}/automatedBackup/restorePoints', pathParams: {serviceName: string}, queryParams: {state?: VpsRestoreStateEnum}): Promise<string[]>;
  /**
  Backup your VPS
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/automatedBackup', pathParams: {serviceName: string}): Promise<VpsAutomatedBackup>;
  /**
  attachedBackup operations
  Backup attached to your VPS
  **/
  public get(path: '/vps/{serviceName}/automatedBackup/attachedBackup', pathParams: {serviceName: string}): Promise<VpsAutomatedBackupAttached[]>;
  /**
  Information about the snapshot of a VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/snapshot', pathParams: {serviceName: string}): Promise<VpsSnapshot>;
  /**
  status operations
  Give the status of the services of the main IP
  **/
  public get(path: '/vps/{serviceName}/status', pathParams: {serviceName: string}): Promise<VpsIpServiceStatus>;
  /**
  secondaryDnsNameServerAvailable operations
  Secondary nameServer available for your Server
  **/
  public get(path: '/vps/{serviceName}/secondaryDnsNameServerAvailable', pathParams: {serviceName: string}): Promise<SecondaryDnsSecondaryDNSNameServer>;
  /**
  models operations
  Return all models for the range of the virtual server
  **/
  public get(path: '/vps/{serviceName}/models', pathParams: {serviceName: string}): Promise<VpsModel[]>;
  /**
  availableUpgrade operations
  Return all models the virtual server can be upgraded to
  **/
  public get(path: '/vps/{serviceName}/availableUpgrade', pathParams: {serviceName: string}): Promise<VpsModel[]>;
  /**
  Informations about a VPS Veeam backups
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/veeam', pathParams: {serviceName: string}): Promise<VpsVeeam>;
  /**
  Informations about a VPS Veeam restore points
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/veeam/restorePoints/{id}', pathParams: {serviceName: string, id: Number}): Promise<VpsVeeamRestorePoint>;
  /**
  List the vps.veeam.RestorePoint objects
  Veeam restore points for the VPS
  **/
  public get(path: '/vps/{serviceName}/veeam/restorePoints', pathParams: {serviceName: string}, queryParams: {creationTime?: string}): Promise<Number[]>;
  /**
  Currently restored backup
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/veeam/restoredBackup', pathParams: {serviceName: string}): Promise<VpsVeeamRestoredBackup>;
  /**
  monitoring operations
  Return many statistics about the virtual machine for a given period
  **/
  public get(path: '/vps/{serviceName}/monitoring', pathParams: {serviceName: string}, queryParams: {period?: VpsVpsMonitoringPeriodEnum, type?: VpsVpsStatisticTypeEnum}): Promise<ComplexTypeUnitAndValues<VpsVpsTimestampValue>>;
  /**
  Installation template for a VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/templates/{id}', pathParams: {serviceName: string, id: Number}): Promise<VpsTemplate>;
  /**
  Available softwares on a Template
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/templates/{id}/software/{softwareId}', pathParams: {serviceName: string, id: Number, softwareId: Number}): Promise<VpsSoftware>;
  /**
  List the vps.Software objects
  List available softwares for this template Id
  **/
  public get(path: '/vps/{serviceName}/templates/{id}/software', pathParams: {serviceName: string, id: Number}): Promise<Number[]>;
  /**
  List the vps.Template objects
  Templates available for this virtual server
  **/
  public get(path: '/vps/{serviceName}/templates', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  List the secondaryDns.SecondaryDNS objects
  List of secondary dns domain name
  **/
  public get(path: '/vps/{serviceName}/secondaryDnsDomains', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Secondary dns infos
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/secondaryDnsDomains/{domain}', pathParams: {serviceName: string, domain: string}): Promise<SecondaryDnsSecondaryDNS>;
  /**
  dnsServer operations
  domain name server informations
  **/
  public get(path: '/vps/{serviceName}/secondaryDnsDomains/{domain}/dnsServer', pathParams: {serviceName: string, domain: string}): Promise<SecondaryDnsSecondaryDNSNameServer>;
  /**
  List the vps.Ip objects
  Ips associated to this virtual server
  **/
  public get(path: '/vps/{serviceName}/ips', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Information about an IP address for a VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/ips/{ipAddress}', pathParams: {serviceName: string, ipAddress: string}): Promise<VpsIp>;
  /**
  List the vps.Option objects
  List of VPS options
  **/
  public get(path: '/vps/{serviceName}/option', pathParams: {serviceName: string}): Promise<VpsVpsOptionEnum[]>;
  /**
  Information about the options of a VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/option/{option}', pathParams: {serviceName: string, option: VpsVpsOptionEnum}): Promise<VpsOption>;
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/backupftp/access/{ipBlock}', pathParams: {serviceName: string, ipBlock: string}): Promise<DedicatedServerBackupFtpAcl>;
  /**
  List the dedicated.server.BackupFtpAcl objects
  List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
  **/
  public get(path: '/vps/{serviceName}/backupftp/access', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Backup Ftp assigned to this VPS
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/backupftp', pathParams: {serviceName: string}): Promise<VpsBackupFtp>;
  /**
  authorizableBlocks operations
  Get all IP blocks that can be used in the ACL
  **/
  public get(path: '/vps/{serviceName}/backupftp/authorizableBlocks', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  activeOptions operations
  Return all active options for the virtual server
  **/
  public get(path: '/vps/{serviceName}/activeOptions', pathParams: {serviceName: string}): Promise<VpsVpsOptionEnum[]>;
  /**
  List the vps.Disk objects
  Disks associated to this virtual server
  **/
  public get(path: '/vps/{serviceName}/disks', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  monitoring operations
  Return many statistics about the disk for a given period
  **/
  public get(path: '/vps/{serviceName}/disks/{id}/monitoring', pathParams: {serviceName: string, id: Number}, queryParams: {period?: VpsVpsMonitoringPeriodEnum, type?: VpsDiskStatisticTypeEnum}): Promise<ComplexTypeUnitAndValues<VpsVpsTimestampValue>>;
  /**
  Information about a disk of a VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/disks/{id}', pathParams: {serviceName: string, id: Number}): Promise<VpsDisk>;
  /**
  use operations
  Return many statistics about the disk at that time
  **/
  public get(path: '/vps/{serviceName}/disks/{id}/use', pathParams: {serviceName: string, id: Number}, queryParams: {type?: VpsDiskStatisticTypeEnum}): Promise<ComplexTypeUnitAndValue<Number>>;
  /**
  Operation on a VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/tasks/{id}', pathParams: {serviceName: string, id: Number}): Promise<VpsTask>;
  /**
  List the vps.Task objects
  Tasks associated to this virtual server
  **/
  public get(path: '/vps/{serviceName}/tasks', pathParams: {serviceName: string}, queryParams: {state?: VpsTaskStateEnum, type?: VpsTaskTypeEnum}): Promise<Number[]>;
  /**
  ipCountryAvailable operations
  Get the countries you can select for your IPs geolocation
  **/
  public get(path: '/vps/{serviceName}/ipCountryAvailable', pathParams: {serviceName: string}): Promise<VpsIpGeolocationEnum[]>;
  /**
  Information about a datacenter of a VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/datacenter', pathParams: {serviceName: string}): Promise<VpsDatacenter>;
  /**
  Installation template for a VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/distribution', pathParams: {serviceName: string}): Promise<VpsTemplate>;
  /**
  List the vps.Software objects
  List available softwares for this template Id
  **/
  public get(path: '/vps/{serviceName}/distribution/software', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Available softwares on a Template
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/distribution/software/{softwareId}', pathParams: {serviceName: string, softwareId: Number}): Promise<VpsSoftware>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  VPS Virtual Machine
  Get this object properties
  **/
  public get(path: '/vps/{serviceName}', pathParams: {serviceName: string}): Promise<VpsVPS>;
  /**
  use operations
  Return many statistics about the virtual machine at that time
  **/
  public get(path: '/vps/{serviceName}/use', pathParams: {serviceName: string}, queryParams: {type?: VpsVpsStatisticTypeEnum}): Promise<ComplexTypeUnitAndValue<Number>>;
  /**
  Missing description
  List all the datacenters for a specific country
  **/
  public get(path: '/vps/datacenter', pathParams: undefined, queryParams: {country?: NichandleCountryEnum}): Promise<string[]>;
  public get(path: PathsVpsGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Information about the snapshot of a VPS Virtual Machine
  Alter this object properties
  **/
  public put(path: '/vps/{serviceName}/snapshot', pathParams: {serviceName: string}): Promise<void>;
  /**
  Secondary dns infos
  Alter this object properties
  **/
  public put(path: '/vps/{serviceName}/secondaryDnsDomains/{domain}', pathParams: {serviceName: string, domain: string}): Promise<void>;
  /**
  Information about an IP address for a VPS Virtual Machine
  Alter this object properties
  **/
  public put(path: '/vps/{serviceName}/ips/{ipAddress}', pathParams: {serviceName: string, ipAddress: string}): Promise<void>;
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Alter this object properties
  **/
  public put(path: '/vps/{serviceName}/backupftp/access/{ipBlock}', pathParams: {serviceName: string, ipBlock: string}): Promise<void>;
  /**
  Information about a disk of a VPS Virtual Machine
  Alter this object properties
  **/
  public put(path: '/vps/{serviceName}/disks/{id}', pathParams: {serviceName: string, id: Number}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/vps/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  VPS Virtual Machine
  Alter this object properties
  **/
  public put(path: '/vps/{serviceName}', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsVpsPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  detachBackup operations
  Create a VPS.Task that will umount a restored backup on your VPS
  **/
  public post(path: '/vps/{serviceName}/automatedBackup/detachBackup', pathParams: {serviceName: string}): Promise<VpsTask>;
  /**
  restore operations
  Creates a VPS.Task that will restore the given restorePoint
  **/
  public post(path: '/vps/{serviceName}/automatedBackup/restore', pathParams: {serviceName: string}): Promise<VpsTask>;
  /**
  revert operations
  Revert the Virtual Server to this snapshot
  **/
  public post(path: '/vps/{serviceName}/snapshot/revert', pathParams: {serviceName: string}): Promise<VpsTask>;
  /**
  openConsoleAccess operations
  Return the necessary informations to open a VNC connection to your VPS
  **/
  public post(path: '/vps/{serviceName}/openConsoleAccess', pathParams: {serviceName: string}): Promise<VpsVnc>;
  /**
  stop operations
  Request the machine to stop
  **/
  public post(path: '/vps/{serviceName}/stop', pathParams: {serviceName: string}): Promise<VpsTask>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/vps/{serviceName}/terminate', pathParams: {serviceName: string}): Promise<string>;
  /**
  start operations
  Request the machine to start
  **/
  public post(path: '/vps/{serviceName}/start', pathParams: {serviceName: string}): Promise<VpsTask>;
  /**
  createSnapshot operations
  Create a snapshot of the Virtual Server if the snapshot option is enabled and if there is no existing snapshot
  **/
  public post(path: '/vps/{serviceName}/createSnapshot', pathParams: {serviceName: string}): Promise<VpsTask>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/vps/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  restore operations
  Creates a VPS.Task that will restore the given restorePoint
  **/
  public post(path: '/vps/{serviceName}/veeam/restorePoints/{id}/restore', pathParams: {serviceName: string, id: Number}): Promise<VpsTask>;
  /**
  getConsoleUrl operations
  Return the VPS console URL
  **/
  public post(path: '/vps/{serviceName}/getConsoleUrl', pathParams: {serviceName: string}): Promise<string>;
  /**
  List the secondaryDns.SecondaryDNS objects
  add a domain on secondary dns
  **/
  public post(path: '/vps/{serviceName}/secondaryDnsDomains', pathParams: {serviceName: string}): Promise<void>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/vps/{serviceName}/confirmTermination', pathParams: {serviceName: string}): Promise<string>;
  /**
  password operations
  Change your Backup FTP password
  **/
  public post(path: '/vps/{serviceName}/backupftp/password', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  List the dedicated.server.BackupFtpAcl objects
  Create a new Backup FTP ACL
  **/
  public post(path: '/vps/{serviceName}/backupftp/access', pathParams: {serviceName: string}): Promise<DedicatedServerTask>;
  /**
  reboot operations
  Request a reboot of the machine
  **/
  public post(path: '/vps/{serviceName}/reboot', pathParams: {serviceName: string}): Promise<VpsTask>;
  /**
  reinstall operations
  Reinstall the virtual server
  **/
  public post(path: '/vps/{serviceName}/reinstall', pathParams: {serviceName: string}): Promise<VpsTask>;
  /**
  setPassword operations
  Start the process in order to set the root password of the virtual machine. Be careful, in case of Cloud model, a reboot is mandatory.
  **/
  public post(path: '/vps/{serviceName}/setPassword', pathParams: {serviceName: string}): Promise<VpsTask>;
  public post(path: PathsVpsPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Information about the snapshot of a VPS Virtual Machine
  Creates a vps.Task that will delete the Snapshot
  **/
  public delete(path: '/vps/{serviceName}/snapshot', pathParams: {serviceName: string}): Promise<VpsTask>;
  /**
  Currently restored backup
  Creates a VPS.Task that will unmount the backup
  **/
  public delete(path: '/vps/{serviceName}/veeam/restoredBackup', pathParams: {serviceName: string}): Promise<VpsTask>;
  /**
  Secondary dns infos
  remove this domain
  **/
  public delete(path: '/vps/{serviceName}/secondaryDnsDomains/{domain}', pathParams: {serviceName: string, domain: string}): Promise<void>;
  /**
  Information about an IP address for a VPS Virtual Machine
  Release a given Ip (Additional Ip)
  **/
  public delete(path: '/vps/{serviceName}/ips/{ipAddress}', pathParams: {serviceName: string, ipAddress: string}): Promise<void>;
  /**
  Information about the options of a VPS Virtual Machine
  Release a given option
  **/
  public delete(path: '/vps/{serviceName}/option/{option}', pathParams: {serviceName: string, option: VpsVpsOptionEnum}): Promise<void>;
  /**
  Backup Ftp ACL for this server and Backup Ftp
  Revoke this ACL
  **/
  public delete(path: '/vps/{serviceName}/backupftp/access/{ipBlock}', pathParams: {serviceName: string, ipBlock: string}): Promise<DedicatedServerTask>;
  public delete(path: PathsVpsDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
