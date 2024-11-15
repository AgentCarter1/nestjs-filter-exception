import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { CustomException } from 'src/exceptions/custom.exception';
import { ResponseBodyFactory } from 'src/util/factory/response-body.factory';

@Catch(CustomException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: CustomException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const path = ctx.getRequest().route.path;

    response
      .status(exception.statusCode)
      .json(
        ResponseBodyFactory.createErrorResponseBody(
          exception.customCode,
          exception.message,
          path,
        ),
      );
  }
}
