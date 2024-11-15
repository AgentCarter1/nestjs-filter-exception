import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BusinessErrorFilter } from './infrastructure/filters/business-error.filter';
import { ResponseInterceptor } from './infrastructure/interceptors/response.interceptor';
import { ValidationErrorFilter } from './infrastructure/filters/validation-error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new BusinessErrorFilter(), new ValidationErrorFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(3000);
}
bootstrap();
