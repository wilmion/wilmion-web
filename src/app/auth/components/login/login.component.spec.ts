import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '@core/models/user.model';
import { ApiService } from '@core/services/api/api.service';
import { StorageService } from '@core/services/storage/storage.service';

import { provideMockStore } from '@ngrx/store/testing';

import { LoginComponent } from './login.component';

const user: User | null = {
  username: 'wilmion',
  name: 'Wilbert Aldair',
  job: 'Front',
  email: 'wilmion97@gmail.com',
  image: {
    resolution: '',
    imageUrl: 'https://platzi.com',
    size: '',
    md5: '',
  },
};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let storageService: StorageService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      declarations: [LoginComponent],
      providers: [
        FormBuilder,
        ApiService,
        StorageService,
        provideMockStore({ initialState: { user } }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    storageService = TestBed.inject(StorageService);
    router = TestBed.inject(Router);
  });

  it('Should create', () => {
    let element = fixture.nativeElement as HTMLElement;
    element = element.querySelector('.login') as HTMLElement;

    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
  });

  describe('Events', () => {
    it('Login', () => {
      const method = spyOn(component, 'login');

      component.form?.get('email')?.setValue('wilmion97@gmail.com');
      component.form?.get('password')?.setValue('123546789');

      component.login(new Event('Form'));

      expect(method).toHaveBeenCalledTimes(1);
    });

    it('When the login is successfull and keep the account', () => {
      const data = {
        status: 200,
        payload: user,
      };

      const navigateSpy = spyOn(router, 'navigate');
      const setLocalStorageSpy = spyOn(storageService, 'setLocalStorage');

      component.successfullLogin(data, true);

      expect(navigateSpy).toHaveBeenCalledWith(['/admin']);
      expect(setLocalStorageSpy).toHaveBeenCalledTimes(2);
    });

    it('When the login is successfull and not keep the account', () => {
      const data = {
        status: 200,
        payload: user,
      };

      const navigateSpy = spyOn(router, 'navigate');
      const setLocalStorageSpy = spyOn(storageService, 'setLocalStorage');
      const setSessionStorageSpy = spyOn(storageService, 'setSessionStorage');

      component.successfullLogin(data, false);

      expect(navigateSpy).toHaveBeenCalledWith(['/admin']);
      expect(setLocalStorageSpy).toHaveBeenCalledTimes(1);
      expect(setSessionStorageSpy).toHaveBeenCalledTimes(1);
    });
  });
});
