import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UsersService } from './users.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(UsersService).getToken();

  const authreq = req.clone({
    setHeaders: {
      Authorization: `Token ${token}`
    }
  })
  return next(authreq);
};
