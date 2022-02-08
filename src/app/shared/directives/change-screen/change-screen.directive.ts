import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeScreen]',
})
export class ChangeScreenDirective implements OnInit {
  @Input() appChangeScreen: any = () => {};
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.appChangeScreen();
    }, 60);

    window.onresize = () => {
      this.appChangeScreen();
    };
  }
}
