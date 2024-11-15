import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { BusinessErrorException } from 'src/domain/exceptions/business-error.exception';
import { ResponseBodyFactory } from 'src/domain/factories/response-body.factory';

@Catch(BusinessErrorException)
export class BusinessErrorFilter implements ExceptionFilter {
  catch(exception: BusinessErrorException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const path = ctx.getRequest().route.path;

    response
      .status(exception.statusCode)
      .json(
        ResponseBodyFactory.createBusinessErrorResponseBody(
          exception.customCode,
          exception.message,
          path,
        ),
      );
  }
}
