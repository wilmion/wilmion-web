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
  @Output() activators = new EventEmitter<{ id: string; activate: boolean }>();

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
    if (!this.job) return;

    const from = this.formatYmd(new Date(this.job.from));

    let to: 'Currently' | string = this.job.to;

    if (to !== 'Currently') {
      to = this.formatYmd(new Date(to));
    }

    this.select.emit({
      ...this.job,
      from,
      to,
    });
  }

  onActivators() {
    if (!this.job) return;

    const id = this.job.id as string;

    this.activators.emit({ id, activate: !this.job.active });
  }

  private formatYmd(date: Date) {
    return date.toISOString().slice(0, 10);
  }
}
