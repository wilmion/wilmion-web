import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[textResponsive]',
})
export class TextResponsiveDirective implements OnInit {
  @Input() textResponsive: string[] | undefined;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setSize();
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.setSize();
  }

  private setSize(): void {
    if (!this.textResponsive) return;

    const width = window.innerWidth;
    const element: HTMLElement = this.el.nativeElement;

    if (width >= 736) {
      element.classList.add(this.textResponsive[1]);
    } else {
      element.classList.add(this.textResponsive[0]);
    }
  }
}
