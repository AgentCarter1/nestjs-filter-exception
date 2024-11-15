import { ExceptionTypeEnum } from 'src/domain/enums/exception-type.enum';

export class ValidationErrorException extends Error {
  constructor(errorMessage: any) {
    const { message } = errorMessage;

    super(message);
    this.name = ExceptionTypeEnum.VALIDATION;
  }
}
