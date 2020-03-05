import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /vps Models
 * Source: https://eu.api.soyoustart.com/1.0/vps.json
 */
export namespace complexType {
    /**
     * A numeric value tagged with its unit
     * interface fullName: complexType.UnitAndValue.UnitAndValue
     */
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
    /**
     * A value set tagged with its unit
     * interface fullName: complexType.UnitAndValues.UnitAndValues
     */
    export interface UnitAndValues<T> {
        unit: string;
        values: T[];
    }
}
export namespace coreTypes {
    /**
     * ISO country codes
     * type fullname: coreTypes.CountryEnum
     */
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
    /**
     * Ip versions
     * type fullname: coreTypes.IpVersionEnum
     */
    export type IpVersionEnum = "v4" | "v6"
}
export namespace dedicated {
    /**
     * different task operation
     * type fullname: dedicated.TaskFunctionEnum
     */
    export type TaskFunctionEnum = "INFRA_002_VirtualNetworkInterface" | "addVirtualMac" | "addWindowSplaFromExistingSerial" | "applyBackupFtpAcls" | "applyBackupFtpQuota" | "bypassAntiDDosGame" | "changePasswordBackupFTP" | "changeRipeOrg" | "checkAndReleaseIp" | "createBackupFTP" | "createOrUpdateRipeOrg" | "createPrivateNetwork" | "disableFirewall" | "enableFirewall" | "genericMoveFloatingIp" | "hardReboot" | "ipmi/configureSGX" | "migrateBackupFTP" | "moveFloatingIp" | "moveVirtualMac" | "rebootPower8To" | "reinstallServer" | "releaseIp" | "removeBackupFTP" | "removeVirtualMac" | "requestAccessIPMI" | "resetIPMI" | "resetIPMISession" | "testIPMIhttp" | "testIPMIpassword" | "testIPMIping" | "virtualMacAdd" | "virtualMacDelete"
    /**
     * different task status
     * type fullname: dedicated.TaskStatusEnum
     */
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    export namespace server {
        /**
         * Backup Ftp ACL for this server and Backup Ftp
         * interface fullName: dedicated.server.BackupFtpAcl.BackupFtpAcl
         */
        export interface BackupFtpAcl {
            cifs: boolean;
            ftp: boolean;
            ipBlock: string;
            isApplied: boolean;
            lastUpdate: string;
            nfs: boolean;
        }
        /**
         * Server tasks
         * interface fullName: dedicated.server.Task.Task
         */
        export interface Task {
            comment?: string;
            doneDate?: string;
            function: dedicated.TaskFunctionEnum;
            lastUpdate?: string;
            startDate: string;
            status: dedicated.TaskStatusEnum;
            taskId: number;
        }
    }
}
export namespace nichandle {
    /**
     * Countries a nichandle can choose
     * type fullname: nichandle.CountryEnum
     */
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
}
export namespace secondaryDns {
    /**
     * Secondary dns infos
     * interface fullName: secondaryDns.SecondaryDNS.SecondaryDNS
     */
    export interface SecondaryDNS {
        creationDate: string;
        dns: string;
        domain: string;
        ipMaster: string;
    }
    /**
     * A structure describing informations about available nameserver for secondary dns 
     * interface fullName: secondaryDns.SecondaryDNSNameServer.SecondaryDNSNameServer
     */
    export interface SecondaryDNSNameServer {
        hostname: string;
        ip: string;
        ipv6?: string;
    }
}
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
    /**
     * All future uses you can provide for a service termination
     * type fullname: service.TerminationFutureUseEnum
     */
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    /**
     * All reasons you can provide for a service termination
     * type fullname: service.TerminationReasonEnum
     */
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
export namespace vps {
    /**
     * Backup your VPS
     * interface fullName: vps.AutomatedBackup.AutomatedBackup
     */
    export interface AutomatedBackup {
        schedule?: string;
        state: vps.BackupStateEnum;
    }
    /**
     * Backup Ftp assigned to this VPS
     * interface fullName: vps.BackupFtp.BackupFtp
     */
    export interface BackupFtp {
        ftpBackupName: string;
        quota?: complexType.UnitAndValue<number>;
        readOnlyDate?: string;
        type: string;
        usage?: complexType.UnitAndValue<number>;
    }
    /**
     * Available AutomatedBackup states
     * type fullname: vps.BackupStateEnum
     */
    export type BackupStateEnum = "disabled" | "enabled"
    /**
     * Information about a datacenter of a VPS Virtual Machine
     * interface fullName: vps.Datacenter.Datacenter
     */
    export interface Datacenter {
        country: coreTypes.CountryEnum;
        longName: string;
        name: string;
    }
    /**
     * Information about a disk of a VPS Virtual Machine
     * interface fullName: vps.Disk.Disk
     */
    export interface Disk {
        bandwidthLimit: number;
        id: number;
        lowFreeSpaceThreshold?: number;
        monitoring?: boolean;
        size: number;
        state: vps.disk.StateEnum;
        type: vps.disk.TypeEnum;
    }
    /**
     * Installation image for a VPS
     * interface fullName: vps.Image.Image
     */
    export interface Image {
        id: string;
        name: string;
    }
    /**
     * Information about an IP address for a VPS Virtual Machine
     * interface fullName: vps.Ip.Ip
     */
    export interface Ip {
        gateway?: string;
        geolocation: vps.ip.GeolocationEnum;
        ipAddress: string;
        macAddress?: string;
        reverse?: string;
        type: vps.ip.TypeEnum;
        version: coreTypes.IpVersionEnum;
    }
    /**
     * A structure describing characteristics of a VPS model
     * interface fullName: vps.Model.Model
     */
    export interface Model {
        availableOptions: vps.VpsOptionEnum[];
        datacenter: string[];
        disk: number;
        maximumAdditionnalIp: number;
        memory: number;
        name: string;
        offer: string;
        vcore: number;
        version: vps.VpsVersionEnum;
    }
    /**
     * Information about the options of a VPS Virtual Machine
     * interface fullName: vps.Option.Option
     */
    export interface Option {
        option: vps.VpsOptionEnum;
        state: vps.VpsOptionStateEnum;
    }
    /**
     * Available restore state
     * type fullname: vps.RestoreStateEnum
     */
    export type RestoreStateEnum = "available" | "restored" | "restoring"
    /**
     * Available restore types
     * type fullname: vps.RestoreTypeEnum
     */
    export type RestoreTypeEnum = "file" | "full"
    /**
     * Information about the snapshot of a VPS Virtual Machine
     * interface fullName: vps.Snapshot.Snapshot
     */
    export interface Snapshot {
        creationDate: string;
        description: string;
    }
    /**
     * Available softwares on a Template
     * interface fullName: vps.Software.Software
     */
    export interface Software {
        id: number;
        name: string;
        status: vps.SoftwareStatusEnum;
        type: vps.SoftwareTypeEnum;
    }
    /**
     * Available Status for a vps Software
     * type fullname: vps.SoftwareStatusEnum
     */
    export type SoftwareStatusEnum = "deprecated" | "stable" | "testing"
    /**
     * Available Type for a vps Software
     * type fullname: vps.SoftwareTypeEnum
     */
    export type SoftwareTypeEnum = "database" | "environment" | "webserver"
    /**
     * Operation on a VPS Virtual Machine
     * interface fullName: vps.Task.Task
     */
    export interface Task {
        id: number;
        progress: number;
        state: vps.TaskStateEnum;
        type: vps.TaskTypeEnum;
    }
    /**
     * All states a VPS task can be in
     * type fullname: vps.TaskStateEnum
     */
    export type TaskStateEnum = "blocked" | "cancelled" | "doing" | "done" | "error" | "paused" | "todo" | "waitingAck"
    /**
     * All type a VPS task can be
     * type fullname: vps.TaskTypeEnum
     */
    export type TaskTypeEnum = "addVeeamBackupJob" | "changeRootPassword" | "createSnapshot" | "deleteSnapshot" | "deliverVm" | "getConsoleUrl" | "internalTask" | "openConsoleAccess" | "provisioningAdditionalIp" | "reOpenVm" | "rebootVm" | "reinstallVm" | "removeVeeamBackup" | "restoreFullVeeamBackup" | "restoreVeeamBackup" | "restoreVm" | "revertSnapshot" | "setMonitoring" | "setNetboot" | "startVm" | "stopVm" | "upgradeVm"
    /**
     * Installation template for a VPS Virtual Machine
     * interface fullName: vps.Template.Template
     */
    export interface Template {
        availableLanguage: string[];
        bitFormat: vps.TemplateBitFormatEnum;
        distribution: string;
        id: number;
        locale: string;
        name: string;
    }
    /**
     * Bitness of a VPS template
     * type fullname: vps.TemplateBitFormatEnum
     */
    export type TemplateBitFormatEnum = 32 | 64
    /**
     * VPS Virtual Machine
     * interface fullName: vps.VPS.VPS
     */
    export interface VPS {
        cluster: string;
        displayName?: string;
        keymap?: vps.VpsKeymapEnum;
        memoryLimit: number;
        model: vps.Model;
        monitoringIpBlocks: string[];
        name: string;
        netbootMode: vps.VpsNetbootEnum;
        offerType: vps.VpsOfferEnum;
        slaMonitoring?: boolean;
        state: vps.VpsStateEnum;
        vcore: number;
        zone: string;
    }
    /**
     * Informations about a VPS Veeam backups
     * interface fullName: vps.Veeam.Veeam
     */
    export interface Veeam {
        backup: boolean;
    }
    /**
     * A VNC connection informations
     * interface fullName: vps.Vnc.Vnc
     */
    export interface Vnc {
        host: string;
        password: string;
        port: number;
    }
    /**
     * All supported VNC protocols by VPS
     * type fullname: vps.VncProtocolEnum
     */
    export type VncProtocolEnum = "VNC" | "VNCOverWebSocket"
    /**
     * VPS billing version
     * interface fullName: vps.VpsBillingVersion.VpsBillingVersion
     */
    export interface VpsBillingVersion {
        version: number;
    }
    /**
     * All values keymap can be in
     * type fullname: vps.VpsKeymapEnum
     */
    export type VpsKeymapEnum = "fr" | "us"
    /**
     * Available periods for the VPS monitoring
     * type fullname: vps.VpsMonitoringPeriodEnum
     */
    export type VpsMonitoringPeriodEnum = "lastday" | "lastmonth" | "lastweek" | "lastyear" | "today"
    /**
     * All values a VPS netboot mode can be in
     * type fullname: vps.VpsNetbootEnum
     */
    export type VpsNetbootEnum = "local" | "rescue"
    /**
     * All offers a VPS can have
     * type fullname: vps.VpsOfferEnum
     */
    export type VpsOfferEnum = "beta-classic" | "classic" | "cloud" | "cloudram" | "game-classic" | "lowlat" | "ssd"
    /**
     * All options a VPS can have
     * type fullname: vps.VpsOptionEnum
     */
    export type VpsOptionEnum = "additionalDisk" | "automatedBackup" | "cpanel" | "ftpbackup" | "plesk" | "snapshot" | "veeam" | "windows"
    /**
     * All states a VPS Option can be in
     * type fullname: vps.VpsOptionStateEnum
     */
    export type VpsOptionStateEnum = "released" | "subscribed"
    /**
     * All states a VPS can be in
     * type fullname: vps.VpsStateEnum
     */
    export type VpsStateEnum = "installing" | "maintenance" | "rebooting" | "running" | "stopped" | "stopping" | "upgrading"
    /**
     * Available types for the VPS monitoring and use
     * type fullname: vps.VpsStatisticTypeEnum
     */
    export type VpsStatisticTypeEnum = "cpu:iowait" | "cpu:max" | "cpu:nice" | "cpu:sys" | "cpu:used" | "cpu:user" | "mem:max" | "mem:used" | "net:rx" | "net:tx"
    /**
     * A timestamp associated to a value
     * interface fullName: vps.VpsTimestampValue.VpsTimestampValue
     */
    export interface VpsTimestampValue {
        timestamp: number;
        value?: number;
    }
    /**
     * All versions that VPS can have
     * type fullname: vps.VpsVersionEnum
     */
    export type VpsVersionEnum = "2013v1" | "2014v1" | "2015v1" | "2017v1" | "2017v2" | "2017v3" | "2018v1" | "2018v2" | "2019v1"
    export namespace automatedBackup {
        /**
         * A backup attached to your VPS
         * interface fullName: vps.automatedBackup.Attached.Attached
         */
        export interface Attached {
            access: vps.automatedBackup.attached.Infos;
            restorePoint: string;
        }
        export namespace attached {
            /**
             * A structure describing a backup's access informations
             * interface fullName: vps.automatedBackup.attached.Infos.Infos
             */
            export interface Infos {
                additionalDisk?: string;
                nfs?: string;
                smb?: string;
            }
        }
    }
    export namespace disk {
        /**
         * Possible states the disk can be in
         * type fullname: vps.disk.StateEnum
         */
        export type StateEnum = "connected" | "disconnected" | "pending"
        /**
         * Available types for the Disk monitoring and use
         * type fullname: vps.disk.StatisticTypeEnum
         */
        export type StatisticTypeEnum = "max" | "used"
        /**
         * Possible type a disk can be in
         * type fullname: vps.disk.TypeEnum
         */
        export type TypeEnum = "additional" | "primary"
    }
    export namespace ip {
        /**
         * Geolocation of the IP Address
         * type fullname: vps.ip.GeolocationEnum
         */
        export type GeolocationEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
        /**
         * Service states for an Ip
         * interface fullName: vps.ip.ServiceStatus.ServiceStatus
         */
        export interface ServiceStatus {
            dns: vps.ip.ServiceStatusService;
            http: vps.ip.ServiceStatusService;
            https: vps.ip.ServiceStatusService;
            ping: vps.ip.ServiceStatusStateEnum;
            smtp: vps.ip.ServiceStatusService;
            ssh: vps.ip.ServiceStatusService;
            tools?: vps.ip.ServiceStatusStateEnum;
        }
        /**
         * Port and state of a service on an IP
         * interface fullName: vps.ip.ServiceStatusService.ServiceStatusService
         */
        export interface ServiceStatusService {
            port: number;
            state: vps.ip.ServiceStatusStateEnum;
        }
        /**
         * Possible states of a service (ping, port)
         * type fullname: vps.ip.ServiceStatusStateEnum
         */
        export type ServiceStatusStateEnum = "down" | "up"
        /**
         * Ip types on a VPS
         * type fullname: vps.ip.TypeEnum
         */
        export type TypeEnum = "additional" | "primary"
    }
    export namespace migration {
        /**
         * Description not available
         * interface fullName: vps.migration.Migration.Migration
         */
        export interface Migration {
            date: string;
            id: string;
        }
    }
    export namespace veeam {
        /**
         * A structure describing a Veeam backup's export options
         * type fullname: vps.veeam.ExportTypeEnum
         */
        export type ExportTypeEnum = "nfs" | "smb"
        /**
         * A structure describing a Veeam backup's access informations
         * interface fullName: vps.veeam.Infos.Infos
         */
        export interface Infos {
            nfs: string;
            smb: string;
        }
        /**
         * Informations about a VPS Veeam restore points
         * interface fullName: vps.veeam.RestorePoint.RestorePoint
         */
        export interface RestorePoint {
            creationTime: string;
            id: number;
        }
        /**
         * Currently restored backup
         * interface fullName: vps.veeam.RestoredBackup.RestoredBackup
         */
        export interface RestoredBackup {
            accessInfos: vps.veeam.Infos;
            restorePointId: number;
            state: vps.veeam.StateEnum;
        }
        /**
         * A structure describing a Veeam restored backup's state
         * type fullname: vps.veeam.StateEnum
         */
        export type StateEnum = "mounted" | "restoring" | "unmounted" | "unmounting"
    }
}

/**
 * END API /vps Models
 */
export function proxyVps(ovhEngine: OvhRequestable): Vps {
    return buildOvhProxy(ovhEngine, '/vps');
}
export default proxyVps;
/**
 * Api model for /vps
 */
export interface Vps {
    /**
     * List available services
     * GET /vps
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    datacenter: {
        /**
         * List all the datacenters for a specific country
         * GET /vps/datacenter
         */
        $get(params: { country: nichandle.CountryEnum }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /vps/{serviceName}
         */
        $get(): Promise<vps.VPS>;
        /**
         * Alter this object properties
         * PUT /vps/{serviceName}
         */
        $put(params?: { cluster?: string, displayName?: string, keymap?: vps.VpsKeymapEnum, memoryLimit?: number, model?: vps.Model, monitoringIpBlocks?: string[], name?: string, netbootMode?: vps.VpsNetbootEnum, offerType?: vps.VpsOfferEnum, slaMonitoring?: boolean, state?: vps.VpsStateEnum, vcore?: number, zone?: string }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        activeOptions: {
            /**
             * Return all active options for the virtual server
             * GET /vps/{serviceName}/activeOptions
             */
            $get(): Promise<vps.VpsOptionEnum[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        automatedBackup: {
            /**
             * Get this object properties
             * GET /vps/{serviceName}/automatedBackup
             */
            $get(): Promise<vps.AutomatedBackup>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            attachedBackup: {
                /**
                 * Backup attached to your VPS
                 * GET /vps/{serviceName}/automatedBackup/attachedBackup
                 */
                $get(): Promise<vps.automatedBackup.Attached[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            detachBackup: {
                /**
                 * Create a VPS.Task that will umount a restored backup on your VPS
                 * POST /vps/{serviceName}/automatedBackup/detachBackup
                 */
                $post(params: { restorePoint: string }): Promise<vps.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            restore: {
                /**
                 * Creates a VPS.Task that will restore the given restorePoint
                 * POST /vps/{serviceName}/automatedBackup/restore
                 */
                $post(params: { changePassword?: boolean, restorePoint: string, type: vps.RestoreTypeEnum }): Promise<vps.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            restorePoints: {
                /**
                 * Get available Restore Points
                 * GET /vps/{serviceName}/automatedBackup/restorePoints
                 */
                $get(params: { state: vps.RestoreStateEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        availableUpgrade: {
            /**
             * Return all models the virtual server can be upgraded to
             * GET /vps/{serviceName}/availableUpgrade
             */
            $get(): Promise<vps.Model[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        backupftp: {
            /**
             * Get this object properties
             * GET /vps/{serviceName}/backupftp
             */
            $get(): Promise<vps.BackupFtp>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            access: {
                /**
                 * List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
                 * GET /vps/{serviceName}/backupftp/access
                 */
                $get(): Promise<string[]>;
                /**
                 * Create a new Backup FTP ACL
                 * POST /vps/{serviceName}/backupftp/access
                 */
                $post(params: { cifs: boolean, ftp?: boolean, ipBlock: string, nfs: boolean }): Promise<dedicated.server.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(ipBlock: string): {
                    /**
                     * Revoke this ACL
                     * DELETE /vps/{serviceName}/backupftp/access/{ipBlock}
                     */
                    $delete(): Promise<dedicated.server.Task>;
                    /**
                     * Get this object properties
                     * GET /vps/{serviceName}/backupftp/access/{ipBlock}
                     */
                    $get(): Promise<dedicated.server.BackupFtpAcl>;
                    /**
                     * Alter this object properties
                     * PUT /vps/{serviceName}/backupftp/access/{ipBlock}
                     */
                    $put(params?: { cifs?: boolean, ftp?: boolean, ipBlock?: string, isApplied?: boolean, lastUpdate?: string, nfs?: boolean }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            authorizableBlocks: {
                /**
                 * Get all IP blocks that can be used in the ACL
                 * GET /vps/{serviceName}/backupftp/authorizableBlocks
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            password: {
                /**
                 * Change your Backup FTP password
                 * POST /vps/{serviceName}/backupftp/password
                 */
                $post(): Promise<dedicated.server.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        changeContact: {
            /**
             * Launch a contact change procedure
             * POST /vps/{serviceName}/changeContact
             */
            $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        confirmTermination: {
            /**
             * Confirm termination of your service
             * POST /vps/{serviceName}/confirmTermination
             */
            $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        createSnapshot: {
            /**
             * Create a snapshot of the Virtual Server if the snapshot option is enabled and if there is no existing snapshot
             * POST /vps/{serviceName}/createSnapshot
             */
            $post(params?: { description?: string }): Promise<vps.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        datacenter: {
            /**
             * Get this object properties
             * GET /vps/{serviceName}/datacenter
             */
            $get(): Promise<vps.Datacenter>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        disks: {
            /**
             * Disks associated to this virtual server
             * GET /vps/{serviceName}/disks
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /vps/{serviceName}/disks/{id}
                 */
                $get(): Promise<vps.Disk>;
                /**
                 * Alter this object properties
                 * PUT /vps/{serviceName}/disks/{id}
                 */
                $put(params?: { bandwidthLimit?: number, id?: number, lowFreeSpaceThreshold?: number, monitoring?: boolean, size?: number, state?: vps.disk.StateEnum, type?: vps.disk.TypeEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                monitoring: {
                    /**
                     * Return many statistics about the disk for a given period
                     * GET /vps/{serviceName}/disks/{id}/monitoring
                     */
                    $get(params: { period: vps.VpsMonitoringPeriodEnum, type: vps.disk.StatisticTypeEnum }): Promise<complexType.UnitAndValues<vps.VpsTimestampValue>>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                use: {
                    /**
                     * Return many statistics about the disk at that time
                     * GET /vps/{serviceName}/disks/{id}/use
                     */
                    $get(params: { type: vps.disk.StatisticTypeEnum }): Promise<complexType.UnitAndValue<number>>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        distribution: {
            /**
             * Get this object properties
             * GET /vps/{serviceName}/distribution
             */
            $get(): Promise<vps.Template>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            software: {
                /**
                 * List available softwares for this template Id
                 * GET /vps/{serviceName}/distribution/software
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(softwareId: number): {
                    /**
                     * Get this object properties
                     * GET /vps/{serviceName}/distribution/software/{softwareId}
                     */
                    $get(): Promise<vps.Software>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
        getConsoleUrl: {
            /**
             * Return the VPS console URL
             * POST /vps/{serviceName}/getConsoleUrl
             */
            $post(): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        ipCountryAvailable: {
            /**
             * Get the countries you can select for your IPs geolocation
             * GET /vps/{serviceName}/ipCountryAvailable
             */
            $get(): Promise<vps.ip.GeolocationEnum[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        ips: {
            /**
             * Ips associated to this virtual server
             * GET /vps/{serviceName}/ips
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(ipAddress: string): {
                /**
                 * Release a given Ip (Additional Ip)
                 * DELETE /vps/{serviceName}/ips/{ipAddress}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /vps/{serviceName}/ips/{ipAddress}
                 */
                $get(): Promise<vps.Ip>;
                /**
                 * Alter this object properties
                 * PUT /vps/{serviceName}/ips/{ipAddress}
                 */
                $put(params?: { gateway?: string, geolocation?: vps.ip.GeolocationEnum, ipAddress?: string, macAddress?: string, reverse?: string, type?: vps.ip.TypeEnum, version?: coreTypes.IpVersionEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        models: {
            /**
             * Return all models for the range of the virtual server
             * GET /vps/{serviceName}/models
             */
            $get(): Promise<vps.Model[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        monitoring: {
            /**
             * Return many statistics about the virtual machine for a given period
             * GET /vps/{serviceName}/monitoring
             */
            $get(params: { period: vps.VpsMonitoringPeriodEnum, type: vps.VpsStatisticTypeEnum }): Promise<complexType.UnitAndValues<vps.VpsTimestampValue>>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        openConsoleAccess: {
            /**
             * Return the necessary informations to open a VNC connection to your VPS
             * POST /vps/{serviceName}/openConsoleAccess
             */
            $post(params?: { protocol?: vps.VncProtocolEnum }): Promise<vps.Vnc>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        option: {
            /**
             * List of VPS options
             * GET /vps/{serviceName}/option
             */
            $get(): Promise<vps.VpsOptionEnum[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(option: vps.VpsOptionEnum): {
                /**
                 * Release a given option
                 * DELETE /vps/{serviceName}/option/{option}
                 */
                $delete(params?: { deleteNow?: boolean }): Promise<void>;
                /**
                 * Get this object properties
                 * GET /vps/{serviceName}/option/{option}
                 */
                $get(): Promise<vps.Option>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        reboot: {
            /**
             * Request a reboot of the machine
             * POST /vps/{serviceName}/reboot
             */
            $post(): Promise<vps.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        reinstall: {
            /**
             * Reinstall the virtual server
             * POST /vps/{serviceName}/reinstall
             */
            $post(params: { doNotSendPassword?: boolean, language?: string, softwareId?: number[], sshKey?: string[], templateId: number }): Promise<vps.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        secondaryDnsDomains: {
            /**
             * List of secondary dns domain name
             * GET /vps/{serviceName}/secondaryDnsDomains
             */
            $get(): Promise<string[]>;
            /**
             * add a domain on secondary dns
             * POST /vps/{serviceName}/secondaryDnsDomains
             */
            $post(params: { domain: string, ip?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(domain: string): {
                /**
                 * remove this domain
                 * DELETE /vps/{serviceName}/secondaryDnsDomains/{domain}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /vps/{serviceName}/secondaryDnsDomains/{domain}
                 */
                $get(): Promise<secondaryDns.SecondaryDNS>;
                /**
                 * Alter this object properties
                 * PUT /vps/{serviceName}/secondaryDnsDomains/{domain}
                 */
                $put(params?: { creationDate?: string, dns?: string, domain?: string, ipMaster?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                dnsServer: {
                    /**
                     * domain name server informations
                     * GET /vps/{serviceName}/secondaryDnsDomains/{domain}/dnsServer
                     */
                    $get(): Promise<secondaryDns.SecondaryDNSNameServer>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        secondaryDnsNameServerAvailable: {
            /**
             * Secondary nameServer available for your Server
             * GET /vps/{serviceName}/secondaryDnsNameServerAvailable
             */
            $get(): Promise<secondaryDns.SecondaryDNSNameServer>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /vps/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /vps/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        setPassword: {
            /**
             * Start the process in order to set the root password of the virtual machine. Be careful, in case of Cloud model, a reboot is mandatory.
             * POST /vps/{serviceName}/setPassword
             */
            $post(): Promise<vps.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        snapshot: {
            /**
             * Creates a vps.Task that will delete the Snapshot
             * DELETE /vps/{serviceName}/snapshot
             */
            $delete(): Promise<vps.Task>;
            /**
             * Get this object properties
             * GET /vps/{serviceName}/snapshot
             */
            $get(): Promise<vps.Snapshot>;
            /**
             * Alter this object properties
             * PUT /vps/{serviceName}/snapshot
             */
            $put(params?: { creationDate?: string, description?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            revert: {
                /**
                 * Revert the Virtual Server to this snapshot
                 * POST /vps/{serviceName}/snapshot/revert
                 */
                $post(): Promise<vps.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        start: {
            /**
             * Request the machine to start
             * POST /vps/{serviceName}/start
             */
            $post(): Promise<vps.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        status: {
            /**
             * Give the status of the services of the main IP
             * GET /vps/{serviceName}/status
             */
            $get(): Promise<vps.ip.ServiceStatus>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        stop: {
            /**
             * Request the machine to stop
             * POST /vps/{serviceName}/stop
             */
            $post(): Promise<vps.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        tasks: {
            /**
             * Tasks associated to this virtual server
             * GET /vps/{serviceName}/tasks
             */
            $get(params?: { state?: vps.TaskStateEnum, type?: vps.TaskTypeEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /vps/{serviceName}/tasks/{id}
                 */
                $get(): Promise<vps.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        templates: {
            /**
             * Templates available for this virtual server
             * GET /vps/{serviceName}/templates
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /vps/{serviceName}/templates/{id}
                 */
                $get(): Promise<vps.Template>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                software: {
                    /**
                     * List available softwares for this template Id
                     * GET /vps/{serviceName}/templates/{id}/software
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(softwareId: number): {
                        /**
                         * Get this object properties
                         * GET /vps/{serviceName}/templates/{id}/software/{softwareId}
                         */
                        $get(): Promise<vps.Software>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            };
        }
        terminate: {
            /**
             * Terminate your service
             * POST /vps/{serviceName}/terminate
             */
            $post(): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        use: {
            /**
             * Return many statistics about the virtual machine at that time
             * GET /vps/{serviceName}/use
             */
            $get(params: { type: vps.VpsStatisticTypeEnum }): Promise<complexType.UnitAndValue<number>>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        veeam: {
            /**
             * Get this object properties
             * GET /vps/{serviceName}/veeam
             */
            $get(): Promise<vps.Veeam>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            restorePoints: {
                /**
                 * Veeam restore points for the VPS
                 * GET /vps/{serviceName}/veeam/restorePoints
                 */
                $get(params?: { creationTime?: string }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /vps/{serviceName}/veeam/restorePoints/{id}
                     */
                    $get(): Promise<vps.veeam.RestorePoint>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    restore: {
                        /**
                         * Creates a VPS.Task that will restore the given restorePoint
                         * POST /vps/{serviceName}/veeam/restorePoints/{id}/restore
                         */
                        $post(params: { changePassword?: boolean, export?: vps.veeam.ExportTypeEnum, full: boolean }): Promise<vps.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            restoredBackup: {
                /**
                 * Creates a VPS.Task that will unmount the backup
                 * DELETE /vps/{serviceName}/veeam/restoredBackup
                 */
                $delete(): Promise<vps.Task>;
                /**
                 * Get this object properties
                 * GET /vps/{serviceName}/veeam/restoredBackup
                 */
                $get(): Promise<vps.veeam.RestoredBackup>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
    };
}
