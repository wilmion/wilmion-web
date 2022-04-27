import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ApiService } from '@core/services/api/api.service';

import { Job } from '@models/job.model';
import { IStat } from '../../atoms/stat/stat.component';
import { Stat } from '@models/stat.model';

import { getStats, elegibleDate } from '@core/utils/date.util';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  $jobs: Observable<Job[]>;

  stats: Stat[] = [];

  from = this.last7days();
  to = elegibleDate(new Date());

  constructor(
    private apiService: ApiService,
    private store: Store<{ jobs: Job[] }>
  ) {
    this.$jobs = this.store.select('jobs');
  }

  ngOnInit(): void {
    this.apiService
      .getAllStats({
        limit: '999999',
      })
      .subscribe((data) => {
        this.stats = data.payload;
      });
  }

  get graphics() {
    const typesStats: ('VTTBP' | 'NU')[] = ['NU', 'VTTBP'];
    const data: { title: string; raw: IStat[] }[] = [];

    typesStats.forEach((type) => {
      const title = this.intercambiateVerbs(type);

      const raw = getStats(type, this.stats, this.from, this.to);

      data.push({
        title,
        raw,
      });
    });

    return data;
  }

  private intercambiateVerbs(verb: 'NU' | 'VTTBP') {
    if (verb === 'NU') return 'New Users [last 7 days]';
    else return 'Visits to the blog post[last 7 days]';
  }

  private last7days() {
    const date = new Date();
    date.setDate(date.getUTCDate() - 6);

    return elegibleDate(date);
  }
}
