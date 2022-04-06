import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStepChangePasswordComponent } from './second-step-change-password.component';

describe('SecondStepChangePasswordComponent', () => {
  let component: SecondStepChangePasswordComponent;
  let fixture: ComponentFixture<SecondStepChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondStepChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondStepChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
