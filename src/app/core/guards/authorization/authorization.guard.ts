import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { User } from '@core/models/user.model';

import { StorageService } from '@core/services/storage/storage.service';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  constructor(private storageService: StorageService, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.verifyPermision();
  }

  private verifyPermision() {
    const payload = this.storageService.findOnLocalOrSession<{
      token: string;
      user: User;
    }>('auth');

    if (!payload) {
      this.route.navigate(['/auth/login']);

      return false;
    }

    if (payload.user.email === 'wilmion92@gmail.com') {
      return true;
    } else {
      this.route.navigate(['/']);
      return false;
    }
  }
}
