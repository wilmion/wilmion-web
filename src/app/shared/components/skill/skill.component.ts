import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  @Input() colorItems: string = '#FFFEFC';
  @Input() colorBackground: string = '#1EABFA';
  @Input() icon: string = '';
  @Input() text: string = '';

  hovering: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onHover() {
    this.hovering = !this.hovering;
  }
}
