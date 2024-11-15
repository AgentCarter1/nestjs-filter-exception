import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ThrottleExceptionFilter } from './exception-filter/custom-throttler.exception.filter';
import { CustomExceptionFilter } from './exception-filter/custom.exception.filter';
import { ResponseInterceptor } from './interceptor/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(
    new CustomExceptionFilter(),
    new ThrottleExceptionFilter(),
  );
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(3000);
}
bootstrap();
