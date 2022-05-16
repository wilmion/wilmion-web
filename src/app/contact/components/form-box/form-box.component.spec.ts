import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule } from '@angular/forms';

import { ApiService } from '@core/services/api/api.service';

import { FormBoxComponent } from './form-box.component';

describe('FormBoxComponent', () => {
  let component: FormBoxComponent;
  let fixture: ComponentFixture<FormBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [FormBoxComponent],
      providers: [ApiService, FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Call on submit', () => {
    const method = spyOn(component, 'onSubmit');

    component.onSubmit();

    expect(method).toHaveBeenCalledTimes(1);
  });
});
