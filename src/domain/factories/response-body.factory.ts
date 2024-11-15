import { IErrorResponseBody } from 'src/domain/interfaces/error-response-body.interface';
import { ISuccessfulResponseBody } from 'src/domain/interfaces/successful-response-body.interface';
import { IBusinessErrorResponseBody } from '../interfaces/business-error-response-body.interface';
import { IValidationErrorResponseBody } from '../interfaces/validation-error-response-body.interface';

export class ResponseBodyFactory {
  static createBusinessErrorResponseBody(
    customCode: number,
    message: string,
    path: string,
  ): IBusinessErrorResponseBody {
    return {
      customCode,
      path,
      timestamp: new Date().toISOString(),
      message,
    };
  }

  static createValidationErrorResponseBody(
    message: string[],
    path: string,
  ): IValidationErrorResponseBody {
    return {
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
