import { Injectable } from '@angular/core';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { StorageService } from '@core/services/storage/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.storageService.getLocalStorage<{ payload: string }>(
      'token'
    );

    if (!token) {
      return next.handle(req);
    }

    const headers = req.clone({
      headers: req.headers.set(
        'Authorization',
        `Bearer ${token.payload.replace(/['"]+/g, '')}`
      ),
    });

    return next.handle(headers);
  }
}
