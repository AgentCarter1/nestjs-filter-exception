import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './redis/redis.module';
import {
  I18nErrorHandlingModule,
  I18nValidationPipe,
  LanguageMiddleware,
} from '@dumanargeyazilim/i18n-library';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [RedisModule, I18nErrorHandlingModule],
  controllers: [AppController],
  providers: [AppService, { provide: APP_PIPE, useClass: I18nValidationPipe }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LanguageMiddleware).forRoutes('*');
  }
}
