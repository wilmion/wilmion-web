import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Stat } from '@models/stat.model';
import { IStat } from '../../atoms/stat/stat.component';

import { ApiService } from '@core/services/api/api.service';

import { elegibleDate, separateData } from '@core/utils/date.util';
import { getValue } from '@core/utils/forms.util';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  form: FormGroup | undefined;

  stats: Stat[] = [];

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.formBuild();
  }

  ngOnInit(): void {
    this.apiService.getAllStats({ limit: '9999' }).subscribe((data) => {
      this.stats = data.payload;
    });
  }

  get from() {
    return getValue(this.form, 'from').value;
  }

  get to() {
    return getValue(this.form, 'to').value;
  }

  get graphics() {
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

    const info = separateData(this.from, this.to, statArr);

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
  private formBuild() {
    this.form = this.formBuilder.group({
      from: [''],
      to: [''],
      current: [false],
    });
  }
}
