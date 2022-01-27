import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxToogleComponent } from './checkbox-toogle.component';

describe('CheckboxToogleComponent', () => {
  let component: CheckboxToogleComponent;
  let fixture: ComponentFixture<CheckboxToogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxToogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxToogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
