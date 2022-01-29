import { Component, OnInit, Input } from '@angular/core';

import { icons, Icons } from './icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() icon: Icons = 'AIOUTLINELINKEDIN';
  @Input() width: string = '24px';
  @Input() height: string = '24px';
  @Input() color: string = 'black';

  svgCode: string = '';

  constructor() {}

  ngOnInit(): void {
    this.getIcon();
  }

  getIcon() {
    const svgTemplate: string = icons[this.icon];

    const svg = svgTemplate.replace(
      'props',
      `width="${this.width}" height="${this.height}" color="${this.color}" `
    );

    this.svgCode = svg;
  }
}
