import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { AdminModule } from 'src/app/admin/admin.module';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiService } from '@core/services/api/api.service';

import { SettingsPasswordComponent } from './settings-password.component';

describe('SettingsPasswordComponent', () => {
  let component: SettingsPasswordComponent;
  let fixture: ComponentFixture<SettingsPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule,
        AdminModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [SettingsPasswordComponent],
      providers: [ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Styles', () => {
    it('Should hidden icon and show icon app-first-step-change-password when the step = 1 and loading = false', () => {
      component.step = 1;

      fixture.detectChanges();

      const element = fixture.nativeElement as HTMLElement;

      const firstStepHtml = element.querySelector(
        'app-first-step-change-password'
      ) as HTMLElement;
      const icon = element.querySelector(
        '.change-password-box__header__icon'
      ) as HTMLElement;

      expect(icon.classList).toContain('invisible');
      expect(firstStepHtml).toBeTruthy();
    });

    it('Should hidden icon and show icon app-verify-step-change-password when the step = 1 and loading = true', () => {
      component.step = 1;
      component.loading = true;

      fixture.detectChanges();

      const element = fixture.nativeElement as HTMLElement;

      const firstStepHtml = element.querySelector(
        'app-first-step-change-password'
      ) as HTMLElement;

      const firstStepHtmlLoading = element.querySelector(
        'app-verify-step-change-password'
      ) as HTMLElement;

      expect(firstStepHtml).toBeFalsy();
      expect(firstStepHtmlLoading).toBeTruthy();
    });

    it('Should Show icon and icon app-second-step-change-password when the step = 2', () => {
      component.step = 2;

      fixture.detectChanges();

      const element = fixture.nativeElement as HTMLElement;

      const secondStepHtml = element.querySelector(
        'app-second-step-change-password'
      ) as HTMLElement;
      const icon = element.querySelector(
        '.change-password-box__header__icon'
      ) as HTMLElement;

      expect(icon.className).toEqual('change-password-box__header__icon');
      expect(secondStepHtml).toBeTruthy();
    });

    it('Should Show icon and icon app-success-step-change-password when the step = 2', () => {
      component.step = 3;

      fixture.detectChanges();

      const element = fixture.nativeElement as HTMLElement;

      const successStepHtml = element.querySelector(
        'app-success-step-change-password'
      ) as HTMLElement;
      const icon = element.querySelector(
        '.change-password-box__header__icon'
      ) as HTMLElement;

      expect(icon.classList).toContain('invisible');
      expect(successStepHtml).toBeTruthy();
    });
  });
});
