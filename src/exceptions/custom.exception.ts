import { HttpStatus } from '@nestjs/common';

export class CustomException extends Error {
  public readonly statusCode: number;
  public readonly customCode: number;

  constructor(
    message: string,
    statusCode: number = HttpStatus.BAD_GATEWAY,
    customCode: number = HttpStatus.BAD_REQUEST,
  ) {
    super(message);
    this.name = 'CustomException';
    this.statusCode = statusCode;
    this.customCode = customCode;
  }
}
