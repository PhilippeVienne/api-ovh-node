// Generated by https://quicktype.io

export interface Schema {
    apis:         API[];
    basePath:     string;
    models:       Models;
    apiVersion:   string;
    resourcePath: string;
}

export interface API {
    path:        string;
    operations:  Operation[];
    description: string;
}

export interface Operation {
    resellerOnly:     boolean;
    parameters:       Parameter[];
    responseType:     string;
    apiStatus:        APIStatus;
    httpMethod:       HTTPMethod;
    noAuthentication: boolean;
    responseFullType: string;
    description:      string;
}

export interface APIStatus {
    description:     Description;
    value:           Value;
    deprecatedDate?: string;
    deletionDate?:   string;
    replacement?:    string;
}

export enum Description {
    BetaVersion = "Beta version",
    DeprecatedWillBeRemoved = "Deprecated, will be removed",
    StableProductionVersion = "Stable production version",
}

export enum Value {
    Beta = "BETA",
    Deprecated = "DEPRECATED",
    Production = "PRODUCTION",
}

export enum HTTPMethod {
    Delete = "DELETE",
    Get = "GET",
    Post = "POST",
    Put = "PUT",
}

export interface Parameter {
    fullType:    string;
    description: null | string;
    name:        null | string;
    paramType:   ParamType;
    dataType:    string;
    required:    boolean;
}

export enum ParamType {
    Body = "body",
    Path = "path",
    Query = "query",
}

export interface ModelsProp {
    id:          string;
    description: string;
    namespace:   string;
    enum?:       string[];
    enumType?:   EnumType;
    generics?:    string[];
    properties?:  {[key:string]: any};
}

export interface Models {
    [key:string]: ModelsProp;
}

export enum EnumType {
    Long = "long",
    String = "string",
}
