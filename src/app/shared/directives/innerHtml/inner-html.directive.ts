import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appInnerHtml]',
})
export class InnerHtmlDirective implements OnInit {
  @Input() appInnerHtml: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const element = this.el.nativeElement as HTMLElement;

    element.innerHTML = this.appInnerHtml;
  }
}
