import { HttpStatus } from '@nestjs/common';

export class CustomThrottleException extends Error {
  public readonly customCode: number;
  constructor(
    message: string = 'Too many requests! Please try again later.',
    customCode: number = HttpStatus.TOO_MANY_REQUESTS,
  ) {
    super(message);
    this.customCode = customCode;
    this.name = 'CustomThrottleException';
  }
}
