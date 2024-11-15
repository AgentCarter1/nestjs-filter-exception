import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './redis/redis.module';
import {
  I18nErrorHandlingModule,
  LanguageMiddleware,
} from '@dumanargeyazilim/i18n-library';

@Module({
  imports: [RedisModule, I18nErrorHandlingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LanguageMiddleware).forRoutes('*');
  }
}
