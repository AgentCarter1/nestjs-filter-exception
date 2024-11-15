import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IResponseBody } from 'src/interface/response-body.interface';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const path = context.switchToHttp().getRequest().route.path;
    return next.handle().pipe(
      map((data) => {
        const responseBody: IResponseBody = {
          customCode: HttpStatus.ACCEPTED,
          message: 'OK',
          path,
          payload: data,
        };
        return responseBody;
      }),
    );
  }
}
