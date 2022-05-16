import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { ContainerFormComponent } from './container-form.component';

describe('ContainerFormComponent', () => {
  let component: ContainerFormComponent;
  let fixture: ComponentFixture<ContainerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ContainerFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerFormComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    const form = new FormBuilder().group({
      checkbox: [true],
    });

    component.formGroup = form;
    component.checkboxControlName = 'checkbox';

    fixture.detectChanges();

    let element = fixture.nativeElement as HTMLElement;
    element = element.querySelector('.auth-container') as HTMLElement;

    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
  });
});
