import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerHtmlDirective } from './inner-html.directive';

@Component({
  template: `<div [appInnerHtml]="html">Something Yellow</div>`,
})
class TestComponent {
  html: string = '<h2>Hola</h2>';
}

describe('InnerHtmlDirective', () => {
  let directive: InnerHtmlDirective;
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [InnerHtmlDirective, TestComponent],
    }).createComponent(TestComponent);
  });

  beforeEach(() => {
    directive = new InnerHtmlDirective({ nativeElement: {} });

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create an instance and verify component', () => {
    let element = fixture.nativeElement as HTMLElement;
    element = element.querySelector('h2') as HTMLElement;

    expect(directive).toBeTruthy();
    expect(element).toBeTruthy();
    expect(element.textContent).toBe('Hola');
  });

  it("When there's changes", () => {
    component.html = '<h2>Hola con cambios</h2>';

    fixture.detectChanges();

    let element = fixture.nativeElement as HTMLElement;
    element = element.querySelector('h2') as HTMLElement;

    expect(element).toBeTruthy();
    expect(element.textContent).toBe('Hola con cambios');
  });
});
