import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomException } from './exceptions/custom.exception';
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
    throw new CustomException(
      this.i18nErrorService.getInvitedEmailDoesNotMatchMessage(),
    );
  }
}
