import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthserviceService } from './service/authservice/authservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private _authguardservice: AuthserviceService,
    private _route: Router
  ) {}

  canActivate(): boolean {
    if (!this._authguardservice.gettoken()) {
      this._route.navigateByUrl('/login');
    }
    return this._authguardservice.gettoken();
  }
}
