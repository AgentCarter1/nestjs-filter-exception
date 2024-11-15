import { IErrorResponseBody } from 'src/interface/error-response-body.interface';
import { ISuccessfulResponseBody } from 'src/interface/successful-response-body.interface';

export class ResponseBodyFactory {
  static createErrorResponseBody(
    customCode: number,
    message: string,
    path: string,
  ): IErrorResponseBody {
    return {
      customCode,
      path,
      timestamp: new Date().toISOString(),
      message,
    };
  }

  static createSuccessfulResponseBody(
    path: string,
    payload: any = {},
  ): ISuccessfulResponseBody {
    return {
      path,
      timestamp: new Date().toISOString(),
      payload,
    };
  }
}
