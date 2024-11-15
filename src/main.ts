import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BusinessErrorFilter } from './infrastructure/filters/business-error.filter';
import { ResponseInterceptor } from './infrastructure/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new BusinessErrorFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(3000);
}
bootstrap();
