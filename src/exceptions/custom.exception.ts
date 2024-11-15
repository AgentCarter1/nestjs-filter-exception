import { ExceptionTypeEnum } from 'src/util/enum/exception-type.enum';

export class CustomException extends Error {
  public readonly statusCode: number;
  public readonly customCode: number;

  constructor(errorMessage: any) {
    const { message, statusCode, errorCode } = errorMessage;
    super(message);
    this.name = ExceptionTypeEnum.CUSTOM_EXCEPTION;
    this.statusCode = statusCode;
    this.customCode = errorCode;
  }
}
