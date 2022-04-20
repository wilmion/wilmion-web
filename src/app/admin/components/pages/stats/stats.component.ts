import { Component, OnInit } from '@angular/core';

import { Stat } from '@models/stat.model';
import { IStat } from '../../atoms/stat/stat.component';

import { ApiService } from '@core/services/api/api.service';
import { separateData } from '@core/utils/date.util';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  stats: Stat[] = [];

  from: Date = new Date('April 13, 2022 00:00:00');
  to: Date = new Date();
  typeDate: 'months' | 'weeks' | 'days' | 'years' = 'days';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllStats({}).subscribe((data) => {
      this.stats = data.payload;
    });
  }

  get graphicStats() {
    const typesStats = ['NU', 'VTTCP', 'VTTPP', 'VTTBP', 'NOCWSTF'];
    const data: { title: string; raw: IStat[] }[] = [];

    typesStats.forEach((type) => {
      const title = this.intercambiateVerbs(type);

      const raw = this.getStat(type);

      data.push({
        title,
        raw,
      });
    });

    return data;
  }

  private getStat(type: string) {
    const statArr: Stat[] = this.stats.filter((stat) => stat.type === type);

    const info = separateData(this.from, this.to, statArr, this.typeDate);

    const value: IStat[] = [];

    info.forEach((i) =>
      value.push({
        text: i.day,
        value: i.items.length,
      })
    );

    return value;
  }

  private intercambiateVerbs(verb: string) {
    switch (verb) {
      case 'NU':
        return 'Click on the page';
      case 'VTTCP':
        return 'Visits to the contact page';
      case 'VTTPP':
        return 'Visits to the Portafolio page';
      case 'VTTBP':
        return 'Visits to the blog post';
      case 'NOCWSTF':
        return 'Number of clicks when submitting the form';
      default:
        return 'Click on the page';
    }
  }
}
