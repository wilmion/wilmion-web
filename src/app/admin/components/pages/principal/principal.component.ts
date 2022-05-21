import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ApiService } from '@core/services/api/api.service';

import { Job } from '@models/job.model';
import { GraphicStat } from '@models/stat.model';

import { elegibleDate } from '@core/utils';

import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  $jobs: Observable<Job[]>;

  $graphics: Observable<GraphicStat[]> | undefined;

  from = this.last7days();
  to = elegibleDate(new Date());

  constructor(
    private apiService: ApiService,
    private store: Store<{ jobs: Job[] }>
  ) {
    this.$jobs = this.store.select('jobs');
  }

  ngOnInit(): void {
    this.fetchData();
  }

  intercambiateVerbs(verb: string) {
    if (verb === 'NU') return 'New Users [last 7 days]';
    else return 'Visits to the blog post[last 7 days]';
  }

  private last7days() {
    const date = new Date();
    date.setDate(date.getUTCDate() - 6);

    return elegibleDate(date);
  }

  private fetchData() {
    const types = ['NU', 'VTTBP'];

    this.$graphics = this.apiService
      .getAllStats({ from: this.from, to: this.to, type: types.join(',') })
      .pipe(map((res) => res.payload));
  }
}
