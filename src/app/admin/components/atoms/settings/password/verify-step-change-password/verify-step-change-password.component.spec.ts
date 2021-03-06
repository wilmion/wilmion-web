import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';

import { VerifyStepChangePasswordComponent } from './verify-step-change-password.component';

describe('VerifyStepChangePasswordComponent', () => {
  let component: VerifyStepChangePasswordComponent;
  let fixture: ComponentFixture<VerifyStepChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [VerifyStepChangePasswordComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyStepChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
