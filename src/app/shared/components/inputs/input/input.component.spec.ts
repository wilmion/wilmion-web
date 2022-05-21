import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, SharedModule],
      declarations: [InputComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    formBuilder = TestBed.inject(FormBuilder);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Styles of input password', () => {
    it('Nothing', () => {
      component.idInput = 'input';
      component.type = 'text';

      component.formGroup = formBuilder.group({
        input: [''],
      });

      fixture.detectChanges();

      component.onIcon(true);

      expect(component.colorIcon).toEqual('#171208');
    });

    it('When it is password', () => {
      component.idInput = 'input';
      component.type = 'password';

      component.formGroup = formBuilder.group({
        input: [''],
      });

      fixture.detectChanges();

      component.onIcon(true);

      expect(component.colorIcon).toEqual('#734CFC');
      expect(component.typeOfInput).toEqual('text');

      component.onIcon(false);

      expect(component.colorIcon).toEqual('#171208');
      expect(component.typeOfInput).toEqual('password');
    });
  });

  it('When the label is hidden', () => {
    component.idInput = 'input';
    component.type = 'text';
    component.label = '';

    component.formGroup = formBuilder.group({
      input: [''],
    });

    fixture.detectChanges();

    let element = fixture.nativeElement as HTMLElement;
    element = element.querySelector('label') as HTMLElement;

    expect(element.classList).toContain('invisible');
  });
});
