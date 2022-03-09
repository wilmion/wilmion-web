import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Job } from '@core/models/job.model';

import { createArrayToElement } from '@core/utils/extendArray.util';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent implements OnInit, OnChanges {
  @Input() job: Job | undefined;

  time: (Date | 'Currently')[] | undefined;
  listsFunction: string[] = [];

  linkedInUrl: string = 'https://www.linkedin.com/in/wilmion/';

  constructor() {}

  ngOnInit(): void {
    this.updateDating();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateDating();
  }

  private updateDating() {
    if (!this.job) return;

    const funct1 = this.job.function_1;
    const funct2 = this.job.function_2;
    const funct3 = this.job.function_3;
    const funct4 = this.job.function_4;

    this.listsFunction = [funct1, funct2, funct3, funct4];

    this.time = [this.job.from, this.job.to];
  }

  getLastDate() {
    if (!this.time) return;

    const lastDate = this.time[1] === 'Currently' ? 'Actualidad' : this.time[1];

    return lastDate;
  }

  getListFunction(list: any[]) {
    return createArrayToElement(list);
  }

  onNavigateUrl() {
    const anchor = document.createElement('a');
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.href = this.linkedInUrl;

    anchor.click();
  }
}
