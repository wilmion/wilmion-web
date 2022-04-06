import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { setUser } from '@core/ngrx/actions/user.actions';

import { User } from '@models/user.model';

import { StorageService } from '@core/services/storage/storage.service';
import { ApiService } from '@core/services/api/api.service';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private storageService: StorageService,
    private apiService: ApiService,
    private route: Router,
    private store: Store<{ user: User | null }>
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkLocalStorage();
  }

  private checkLocalStorage() {
    const user = this.storageService.findOnLocalOrSession<{
      token: string;
      user: User;
    }>('auth');

    if (user) {
      this.apiService.getMyProfile().subscribe({
        next: (data) => this.store.dispatch(setUser(data.payload)),
        error: () => this.store.dispatch(setUser(user.user)),
      });

      return true;
    }

    this.route.navigate(['/auth/login']);
    return false;
  }
}
