import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Job } from '@core/models/job.model';

import { createArrayToElement } from '@core/utils/extendArray.util';
import { createList, getLastDate } from '@core/utils/job.util';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent implements OnInit {
  @Input() job: Job | undefined;
  @Input() admin: boolean = false;

  linkedInUrl: string = 'https://www.linkedin.com/in/wilmion/';

  constructor() {}

  ngOnInit(): void {}

  get activate() {
    if (!this.admin) {
      return this.job?.active;
    }

    return this.admin;
  }

  get listsFunction() {
    const { listsFunction: value } = createList(this.job);

    return value;
  }

  get time() {
    const { time: value } = createList(this.job);

    return value;
  }

  get lastDate() {
    return getLastDate(this.job);
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
