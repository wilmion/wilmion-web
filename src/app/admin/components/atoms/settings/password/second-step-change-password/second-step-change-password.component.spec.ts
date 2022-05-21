import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { SecondStepChangePasswordComponent } from './second-step-change-password.component';

describe('SecondStepChangePasswordComponent', () => {
  let component: SecondStepChangePasswordComponent;
  let fixture: ComponentFixture<SecondStepChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, SharedModule],
      declarations: [SecondStepChangePasswordComponent],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondStepChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Events', () => {
    it('submit: Should call the output.emit function', () => {
      const method = spyOn(component.onSubmit, 'emit');

      component.submit();

      expect(method).toHaveBeenCalledTimes(1);
    });
  });
});
