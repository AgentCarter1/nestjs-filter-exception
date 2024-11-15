import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessErrorException } from './domain/exceptions/business-error.exception';
import { CustomErrorMessageService } from '@dumanargeyazilim/i18n-library';
import { IdDto } from './a.dto';
import { ValidationErrorException } from './domain/exceptions/validation-error.exception';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly i18nErrorService: CustomErrorMessageService,
  ) {}

  @Get()
  aaa() {
    throw new ValidationErrorException({
      message: ["The field 'id' must be a valid email address"],
    });
  }

  @Post()
  getHello(@Body() data: IdDto) {
    console.log(data);

    return this.i18nErrorService.getCodeTimeoutMessage();
  }

  @Get('custom')
  throwCustom() {
    throw new BusinessErrorException(
      this.i18nErrorService.getInvitedEmailDoesNotMatchMessage(),
    );
  }
}
