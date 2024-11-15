import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { CustomException } from 'src/exceptions/custom.exception';
import { IResponseBody } from 'src/interface/response-body.interface';

@Catch(CustomException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: CustomException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const path = ctx.getRequest().route.path;

    const responseBody: IResponseBody = {
      customCode: exception.customCode,
      message: exception.message,
      path,
      payload: {},
    };

    response.status(exception.statusCode).json(responseBody);
  }
}
