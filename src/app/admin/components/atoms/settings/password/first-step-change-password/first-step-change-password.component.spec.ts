import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepChangePasswordComponent } from './first-step-change-password.component';

describe('FirstStepChangePasswordComponent', () => {
  let component: FirstStepChangePasswordComponent;
  let fixture: ComponentFixture<FirstStepChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstStepChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
