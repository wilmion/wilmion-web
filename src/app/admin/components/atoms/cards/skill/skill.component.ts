import { Component, Input, OnInit } from '@angular/core';

import { Skill } from '@core/models/skill.model';

@Component({
  selector: 'app-card-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class CardSkillComponent implements OnInit {
  @Input() skill: Skill | undefined;

  constructor() {}

  ngOnInit(): void {}
}
