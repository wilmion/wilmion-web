import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IStat, StatComponent } from './stat.component';

const graphic: IStat[] = [
  {
    text: 'NU',
    value: 2,
  },
  {
    text: 'AVVP',
    value: 10,
  },
  {
    text: 'AVVPS',
    value: 5,
  },
];

describe('StatComponent', () => {
  let component: StatComponent;
  let fixture: ComponentFixture<StatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it("getHeigth: Should be '300px' when the value pass those pixels", () => {
    spyOnProperty(component, 'partialHeigth').and.returnValue(30);

    const expected = '300px';
    const result = component.getHeigth(10);

    expect(result).toBe(expected);
  });

  it("getHeigth: Should be '25px' when the value not pass those pixels", () => {
    spyOnProperty(component, 'partialHeigth').and.returnValue(1);

    const expected = '25px';
    const result = component.getHeigth(20);

    expect(result).toBe(expected);
  });

  describe('Getters', () => {
    it('max: Should be 10 the maximum value', () => {
      const expected = 10;

      component.Obj = graphic;

      const result = component.max;

      expect(result).toBe(expected);
    });

    it('totalHeigth: Should be clientHeigth', () => {
      component.Obj = graphic;

      fixture.detectChanges();

      let el = fixture.nativeElement as HTMLElement;
      el = el.querySelector('#line-graphicNU') as HTMLElement;

      const expected = el.clientHeight;

      const result = component.totalHeigth;

      expect(result).toBe(expected);
    });

    it('partialHeigth: Should be 30 the partialHeigth', () => {
      component.Obj = graphic;

      spyOnProperty(component, 'totalHeigth').and.returnValue(300);

      const expected = 30;

      const result = component.partialHeigth;

      expect(result).toBe(expected);
    });
  });
});
