import { Component, OnInit, Input } from '@angular/core';

import { icons, Icons } from './icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() icon: Icons = 'AIOUTLINELINKEDIN';
  @Input() width: string | undefined;
  @Input() height: string | undefined;
  @Input() color: string = 'black';
  @Input() insertedSvg: string | undefined;
  @Input() class: string = '';

  svgCode: string = '';

  constructor() {}

  ngOnInit(): void {
    this.getIcon();
  }

  getIcon() {
    let svgTemplate: string = icons[this.icon];

    if (this.insertedSvg) svgTemplate = this.insertedSvg;

    const widthAndHeight =
      this.width && this.height
        ? ` width="${this.width}" height="${this.height}" `
        : '';

    const className = this.class ? `class="${this.class}"` : '';

    const svg = svgTemplate.replace(
      'props',
      `${className}  ${widthAndHeight} color="${this.color}" `
    );

    this.svgCode = svg;
  }
}
