import { Component, OnInit, Input } from '@angular/core';

import { Skill } from '@core/models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  @Input() skill: Skill | undefined;

  constructor() {}

  ngOnInit(): void {}
}
