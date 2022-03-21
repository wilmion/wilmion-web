import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appInnerHtml]',
})
export class InnerHtmlDirective implements OnInit, OnChanges {
  @Input() appInnerHtml: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.writeHtml();
  }

  private writeHtml() {
    const element = this.el.nativeElement as HTMLElement;

    element.innerHTML = this.appInnerHtml;
  }
}
