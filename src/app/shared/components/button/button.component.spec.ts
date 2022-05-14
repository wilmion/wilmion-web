import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('When the user click the button for emit event', () => {
    let element = fixture.nativeElement as HTMLElement;

    element = element.querySelector('button') as HTMLElement;

    const onClick = spyOn(component.clickButton, 'emit');

    element.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  describe('Pre-defined styles', () => {
    it('Button normal', () => {
      component.type = undefined;

      let expected = 'w-5 h-5';

      expect(component.textOfOutline).toBe(expected);

      component.type = 'button-primary';

      expected = 'w-5 h-5';

      expect(component.textOfOutline).toBe(expected);
    });

    it('Button in secondary aspect with outline', () => {
      component.type = 'button-outline-secondary';

      const expected = 'w-5 h-5 text-secondary';

      expect(component.textOfOutline).toBe(expected);
    });
  });

  describe('Custom styles with the hex colors', () => {
    it('When the property color not pass to component', () => {
      expect(component.getStyle()).toEqual({});
    });

    it('Button but not outline', () => {
      const expected = {
        'background-color': '#FFFFFF',
        color: '#FFFFFF',
      };

      component.color = expected['background-color'];
      component.colorText = expected.color;

      expect(component.getStyle()).toEqual(expected);
    });

    it('Button with outline', () => {
      const expected = {
        border: `2px solid #FFFFFF`,
        color: '#FFFFFF',
      };

      component.color = '#FFFFFF';
      component.colorText = expected.color;
      component.customColorOutline = true;

      expect(component.getStyle()).toEqual(expected);
    });
  });
});
