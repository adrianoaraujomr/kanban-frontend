import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService);
  const token = localStorageService.get('token');
  if (token) {
    const reqClone = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    return next(reqClone);
  } else {
    return next(req);
  }
};
