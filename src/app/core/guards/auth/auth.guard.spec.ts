import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ApiService } from '@core/services/api/api.service';
import { StorageService } from '@core/services/storage/storage.service';

import { User } from '@models/user.model';

import { setMockApiService } from '@tests/mocks/apiServiceResponse.mock';

import { AuthGuard } from './auth.guard';

const user: User = {
  username: 'wilmion',
  name: 'wilmion',
  job: 'Front End',
  email: 'wilmion',
  image: {
    imageUrl: '',
    md5: '',
    size: '',
    resolution: '',
  },
};

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let storageService: StorageService;
  let routeMock: any = { snapshot: {} };
  let routeStateMock: any = { snapshot: {}, url: '/cookies' };
  let router = {
    navigate: jasmine.createSpy('navigate'),
  };

  let apiService: ApiService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ApiService,
        StorageService,
        { provide: Router, useValue: router },
        provideMockStore({ initialState: { user } }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    guard = TestBed.inject(AuthGuard);
    storageService = TestBed.inject(StorageService);

    apiService = TestBed.inject(ApiService);

    setMockApiService(apiService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('No Authenticated [Normal]', () => {
    routeMock = { snapshot: {}, data: { auth: false } };
    expect(guard.canActivate(routeMock, routeStateMock)).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
  });

  it('No Authenticated [Inverted]', () => {
    routeMock = { snapshot: {}, data: { auth: true } };
    expect(guard.canActivate(routeMock, routeStateMock)).toBe(true);
  });

  it('Authenticated [Normal]', () => {
    routeMock = { snapshot: {}, data: { auth: false } };

    spyOn(storageService, 'findOnLocalOrSession').and.returnValue({
      token: 'ABCDEFGAS',
      user,
    });

    expect(guard.canActivate(routeMock, routeStateMock)).toBe(true);
  });

  it('Authenticated [Inverted]', () => {
    routeMock = { snapshot: {}, data: { auth: true } };

    spyOn(storageService, 'findOnLocalOrSession').and.returnValue({
      token: 'ABCDEFGAS',
      user,
    });

    expect(guard.canActivate(routeMock, routeStateMock)).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/admin']);
  });
});
