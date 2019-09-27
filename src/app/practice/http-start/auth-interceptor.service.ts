import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const modified_request = request.clone({
            headers: request.headers.append('Auth', 'xyz')
        });
        return next.handle(modified_request);
    }

}
