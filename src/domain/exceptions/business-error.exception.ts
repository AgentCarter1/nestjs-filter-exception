import { ExceptionTypeEnum } from 'src/domain/enums/exception-type.enum';

export class BusinessErrorException extends Error {
  public readonly statusCode: number;
  public readonly customCode: number;

  constructor(errorMessage: any) {
    const { message, statusCode, errorCode } = errorMessage;
    super(message);
    this.name = ExceptionTypeEnum.BUSINESS;
    this.statusCode = statusCode;
    this.customCode = errorCode;
  }
}
