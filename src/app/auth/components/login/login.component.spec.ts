import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Login', () => {
    const native = fixture.nativeElement as HTMLElement;

    const email = native.querySelector('#email') as HTMLInputElement;
    const password = native.querySelector('#password') as HTMLInputElement;

    email.value = 'wilmion92@gmail.com';
    password.value = '123456879';

    const button = native.querySelector(
      "button[type='submit']"
    ) as HTMLButtonElement;
    button.click();

    expect(component.login).toHaveBeenCalledTimes(1);
  });
});
