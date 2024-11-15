import { IBaseResponseBody } from './base-response-body.interface';

export interface IErrorResponseBody extends IBaseResponseBody {
  customCode: number;
  message: string;
}
