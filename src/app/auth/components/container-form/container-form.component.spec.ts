import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';

import { provideMockStore } from '@ngrx/store/testing';
import { initialStateTest } from '@tests/mocks/initialState';

import { ContainerFormComponent } from './container-form.component';

describe('ContainerFormComponent', () => {
  let component: ContainerFormComponent;
  let fixture: ComponentFixture<ContainerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ContainerFormComponent],
      providers: [provideMockStore({ initialState: initialStateTest })],
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
