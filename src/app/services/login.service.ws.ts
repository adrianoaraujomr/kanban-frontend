import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../shared/models/login-response';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class LoginWS {
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  login(request: any): Observable<LoginResponse> {
    return this.httpClient
      .post<LoginResponse>('http://localhost:5000/usuario/login', request)
      .pipe(
        tap((result) => {
          if (result && result.token) {
            this.localStorageService.set('token', result.token);
          }
        })
      );
  }
}
