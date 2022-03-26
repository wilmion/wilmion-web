import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from '@core/models/job.model';

import { createList, getLastDate } from '@core/utils/job.util';

@Component({
  selector: 'app-jobs-card-manage',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsCardManageComponent implements OnInit {
  @Input() job: Job | undefined;

  @Output() select = new EventEmitter<Job>();

  constructor() {}

  ngOnInit(): void {}

  get time() {
    const { time: value } = createList(this.job);

    return value;
  }

  get lastDate() {
    return getLastDate(this.job);
  }

  onSelect() {
    this.select.emit(this.job);
  }
}
