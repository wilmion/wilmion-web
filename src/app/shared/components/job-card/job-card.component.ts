import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent implements OnInit {
  @Input() job: string = '';
  @Input() time: (Date | 'Currenty')[] | undefined;
  @Input() description: string = '';
  @Input() listsFunction: string[] = [];
  @Input() linkedInUrl: string = '';

  constructor() {}

  ngOnInit(): void {}

  getLastDate() {
    if (!this.time) return;

    const lastDate = this.time[1] === 'Currenty' ? 'Actualidad' : this.time[1];

    return lastDate;
  }

  onNavigateUrl() {
    const anchor = document.createElement('a');
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.href = this.linkedInUrl;

    anchor.click();
  }
}
