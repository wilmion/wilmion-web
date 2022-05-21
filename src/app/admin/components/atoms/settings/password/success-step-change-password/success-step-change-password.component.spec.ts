import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';

import { SuccessStepChangePasswordComponent } from './success-step-change-password.component';

describe('SuccessStepChangePasswordComponent', () => {
  let component: SuccessStepChangePasswordComponent;
  let fixture: ComponentFixture<SuccessStepChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [SuccessStepChangePasswordComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessStepChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
