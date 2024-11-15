import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { BusinessErrorException } from 'src/domain/exceptions/business-error.exception';
import { ValidationErrorException } from 'src/domain/exceptions/validation-error.exception';
import { ResponseBodyFactory } from 'src/domain/factories/response-body.factory';

const MESSAGE_SPLIT_CHAR = ',';

@Catch(ValidationErrorException)
export class ValidationErrorFilter implements ExceptionFilter {
  catch(exception: BusinessErrorException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const path = ctx.getRequest().route.path;

    const validationMessages: string[] =
      exception.message.split(MESSAGE_SPLIT_CHAR);

    response
      .status(HttpStatus.BAD_REQUEST)
      .json(
        ResponseBodyFactory.createValidationErrorResponseBody(
          validationMessages,
          path,
        ),
      );
  }
}
