import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { User } from '@models/user.model';

import { StorageService } from '@core/services/storage/storage.service';

import { AuthorizationGuard } from './authorization.guard';

const user: User = {
  username: 'wilmion',
  name: 'wilmion',
  job: 'Front End',
  email: 'wilmion92@gmail.com',
  image: {
    imageUrl: '',
    md5: '',
    size: '',
    resolution: '',
  },
};

describe('AuthorizationGuard', () => {
  let guard: AuthorizationGuard;
  let storageService: StorageService;
  let routeMock: any = { snapshot: {} };
  let routeStateMock: any = { snapshot: {}, url: '/cookies' };
  let router = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [StorageService, { provide: Router, useValue: router }],
    }).compileComponents();
  });

  beforeEach(() => {
    guard = TestBed.inject(AuthorizationGuard);
    storageService = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('When not exist user in storage', () => {
    expect(guard.canActivate(routeMock, routeStateMock)).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
  });

  it("When exist user but his not have email 'wilmion92@gmail.com' ", () => {
    spyOn(storageService, 'findOnLocalOrSession').and.returnValue({
      token: 'ABCDECFA',
      user: { ...user, email: 'juancho@gmail.com' },
    });

    expect(guard.canActivate(routeMock, routeStateMock)).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  it("When exist user and his have the email 'wilmion92@gmail.com' ", () => {
    spyOn(storageService, 'findOnLocalOrSession').and.returnValue({
      token: 'ABCDECFA',
      user,
    });

    expect(guard.canActivate(routeMock, routeStateMock)).toBe(true);
  });
});
