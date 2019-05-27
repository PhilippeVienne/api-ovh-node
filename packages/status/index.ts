import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * Description not available
 */
export type OvhstatusTaskTaskImpactEnum = 'downtime' | 'fullUnavailability' | 'none' | 'partialUnavailability' | 'unknown';
/**
 * Description not available
 */
export type OvhstatusTaskTaskStatusEnum = 'finished' | 'inProgress' | 'planned';
/**
 * Description not available
 */
export type OvhstatusTaskTaskTypeEnum = 'incident' | 'maintenance' | 'upgrade';
/**
 * A reply is useful to know the progress of a task
 */
export interface StatusReply {
  /**
   * The comment of the reply
   *
   */
  comment: string;
  /**
   * The date of the reply
   *
   */
  date: string;
}
/**
 * A task linked to one of your services
 */
export interface StatusTask {
  /**
   * The category of the task
   *
   */
  category: string;
  /**
   * The end date of the task
   *
   */
  endDate?: string;
  /**
   * The impact of the task
   *
   */
  impact: OvhstatusTaskTaskImpactEnum;
  /**
   * Your impacted service linked to the task
   *
   */
  impactedService: string;
  /**
   * The task progression from 0 to 100
   *
   */
  progress: number;
  /**
   * The project of task
   *
   */
  project: string;
  /**
   * The reference of the task
   *
   */
  reference: string;
  /**
   * The replies of the task
   *
   */
  replies: StatusReply[];
  /**
   * The start date of the task
   *
   */
  startDate?: string;
  /**
   * The status of the task
   *
   */
  status: OvhstatusTaskTaskStatusEnum;
  /**
   * The title of the task
   *
   */
  title: string;
  /**
   * The type of the task
   *
   */
  type: OvhstatusTaskTaskTypeEnum;
  /**
   * The task uuid
   *
   */
  uuid: string;
}
type PathsStatusGET = '/status/task';

export class ApiStatus extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  API to get incidents or maintenances linked to nichandle services
  Find all the incidents or maintenances linked to your services
  **/
  public get(path: '/status/task'): Promise<StatusTask[]>;
  public get(path: PathsStatusGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
}
export default ApiStatus;