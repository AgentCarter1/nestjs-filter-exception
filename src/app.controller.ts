import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomThrottleException } from './exceptions/custom-throttle.exception';
import { CustomException } from './exceptions/custom.exception';
import { CustomErrorMessageService } from '@dumanargeyazilim/i18n-library';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly i18nErrorService: CustomErrorMessageService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('throttle')
  throwThrottle() {
    throw new CustomThrottleException();
  }

  @Get('custom')
  throwCustom() {
    throw new CustomException('This is a custom error!', 200, 4041);
  }
}
