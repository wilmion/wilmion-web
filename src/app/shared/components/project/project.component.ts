import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() urlImage: string = '';
  @Input() nameOfProject: string = '';
  @Output() OpenModal = new EventEmitter();

  url: string = '';
  hovering: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.getUrl('0px');
  }

  onHover(e: Event) {
    this.hovering = !this.hovering;

    const element = e.target as HTMLElement;

    if (this.hovering) this.getUrl(`${element.clientWidth / 2}px`);
    else this.getUrl('0%');
  }

  onClickViewDetails() {
    this.OpenModal.emit();
  }

  private getUrl(customLeft: string) {
    const opacity = this.hovering ? '0.4' : '0';

    const heigth = this.calculateHeightOfTheBgImage();

    this.url = `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity})), url("${this.urlImage}") ${customLeft} 0px / 100% ${heigth} no-repeat`;
  }

  private calculateHeightOfTheBgImage() {
    let heigth = 'auto';

    const width = window.innerWidth;

    if (width < 360 || (width > 765 && width < 1700)) {
      heigth = '100%';
    }

    return heigth;
  }
}
