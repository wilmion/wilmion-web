import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxToogleComponent } from './checkbox-toogle.component';

describe('CheckboxToogleComponent', () => {
  let component: CheckboxToogleComponent;
  let fixture: ComponentFixture<CheckboxToogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxToogleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxToogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Change state in 2 clicks', () => {
    let element = fixture.nativeElement as HTMLElement;
    element = element.querySelector('div') as HTMLElement;
    const changeState = spyOn(component.changedState, 'emit');

    element.click();

    expect(component.active).toBe(true);

    element.click();

    expect(component.active).toBe(false);
    expect(changeState).toHaveBeenCalledTimes(2);
  });
});
