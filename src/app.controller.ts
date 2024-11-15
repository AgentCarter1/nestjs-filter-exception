import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessErrorException } from './domain/exceptions/business-error.exception';
import { CustomErrorMessageService } from '@dumanargeyazilim/i18n-library';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly i18nErrorService: CustomErrorMessageService,
  ) {}

  @Get()
  getHello() {
    return this.i18nErrorService.getCodeTimeoutMessage();
  }

  @Get('custom')
  throwCustom() {
    throw new BusinessErrorException(
      this.i18nErrorService.getInvitedEmailDoesNotMatchMessage(),
    );
  }
}
