import { ApiCommon, OvhApi, OvhParamType } from '@ovh-api/common';
/**
 * A secret
 */
export interface SecretSecret {
  /**
   * Expiration time of the secret
   *
   */
  expiration?: string;
  /**
   * The secret
   *
   */
  secret?: string;
}
type PathsSecretPOST = '/secret/retrieve';

export class ApiSecret extends ApiCommon {
  constructor(engine: OvhApi) {
    super(engine);
  }
  /**
  Retrieve a secret sent by email
  Retrieve a secret sent by email
  **/
  public post(path: '/secret/retrieve'): Promise<SecretSecret>;
  public post(path: PathsSecretPOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
}
