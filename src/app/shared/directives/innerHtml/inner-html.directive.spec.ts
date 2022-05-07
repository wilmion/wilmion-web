import { ElementRef } from '@angular/core';

import { InnerHtmlDirective } from './inner-html.directive';

xdescribe('InnerHtmlDirective', () => {
  const div = new ElementRef({ nativeElement: new HTMLElement() });

  it('should create an instance', () => {
    const directive = new InnerHtmlDirective(div);

    expect(directive).toBeTruthy();
  });
});
