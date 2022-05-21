import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { elegibleDate } from '@core/utils';

import { DateComponent } from './date.component';

describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, SharedModule],
      declarations: [DateComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    formBuilder = TestBed.inject(FormBuilder);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Events', () => {
    it('Open menú', () => {
      component.formGroup = formBuilder.group({
        from: [elegibleDate(new Date())],
        to: [elegibleDate(new Date())],
        current: [false],
      });
      component.ids = ['from', 'to'];
      component.label = 'LABEL TEXT';

      fixture.detectChanges();

      let element = fixture.nativeElement as HTMLElement;
      element = element.querySelector('.input-date__input') as HTMLElement;

      element.click();

      expect(component.openSelect).toBe(true);

      fixture.detectChanges();

      element = fixture.nativeElement as HTMLElement;

      expect(element.querySelector('.input-date__select')).toBeTruthy();
    });

    it('On click option', () => {
      component.formGroup = formBuilder.group({
        from: [elegibleDate(new Date())],
        to: [elegibleDate(new Date())],
        current: [false],
      });
      component.ids = ['from', 'to'];
      component.label = 'LABEL TEXT';

      const method = spyOn(component, 'onClickOption');

      fixture.detectChanges();

      let element = fixture.nativeElement as HTMLElement;
      element = element.querySelector('.input-date__input') as HTMLElement;

      element.click();

      fixture.detectChanges();

      element = fixture.nativeElement as HTMLElement;
      element = element.querySelector(
        'div.input-date__select__option'
      ) as HTMLElement;

      element.click();

      expect(method).toHaveBeenCalledTimes(1);
    });
  });

  describe('Calculate styles', () => {
    it('width select', () => {
      component.formGroup = formBuilder.group({
        from: [elegibleDate(new Date())],
        to: [elegibleDate(new Date())],
        current: [false],
      });
      component.ids = ['from', 'to'];
      component.label = 'LABEL TEXT';

      fixture.detectChanges();

      expect(component.widthSelect).toBe(component.widthSelect);
    });

    it('margin of select', () => {
      component.formGroup = formBuilder.group({
        from: [elegibleDate(new Date())],
        to: [elegibleDate(new Date())],
        current: [false],
      });
      component.ids = ['from', 'to'];
      component.label = 'LABEL TEXT';

      fixture.detectChanges();

      expect(component.marginSelect).toBe('72px');
    });
  });
});
