import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { CustomThrottleException } from 'src/exceptions/custom-throttle.exception';
import { IResponseBody } from 'src/interface/response-body.interface';

@Catch(CustomThrottleException)
export class ThrottleExceptionFilter implements ExceptionFilter {
  catch(exception: CustomThrottleException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const path = ctx.getRequest().route.path;

    const responseBody: IResponseBody = {
      customCode: exception.customCode,
      message: exception.message,
      path,
      payload: {},
    };

    response.status(HttpStatus.TOO_MANY_REQUESTS).json(responseBody);
  }
}
