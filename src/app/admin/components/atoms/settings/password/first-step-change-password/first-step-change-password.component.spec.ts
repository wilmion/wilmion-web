import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { FirstStepChangePasswordComponent } from './first-step-change-password.component';

describe('FirstStepChangePasswordComponent', () => {
  let component: FirstStepChangePasswordComponent;
  let fixture: ComponentFixture<FirstStepChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, SharedModule],
      declarations: [FirstStepChangePasswordComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Events', () => {
    it('submit: Should execute output.emit(params) function', () => {
      component.oldPassword.setValue('123456789');

      const method = spyOn(component.onSubmit, 'emit');

      component.submit();

      expect(method).toHaveBeenCalledOnceWith({
        oldPassword: '123456789',
        newPassword: '123456789',
      });
    });
  });
});
