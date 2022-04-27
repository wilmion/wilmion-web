import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { GraphicStat } from '@models/stat.model';

import { ApiService } from '@core/services/api/api.service';

import { getValue } from '@core/utils/forms.util';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  form: FormGroup | undefined;

  $graphics: Observable<GraphicStat[]> | undefined;

  loading: boolean = false;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.formBuild();
  }

  ngOnInit(): void {
    setTimeout(() => this.setGraphic(), 100);
  }

  get from() {
    return getValue(this.form, 'from').value;
  }

  get to() {
    return getValue(this.form, 'to').value;
  }

  setGraphic() {
    this.fetchData();
  }

  intercambiateVerbs(verb: string) {
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

  private fetchData() {
    this.loading = true;

    const types = ['NU', 'VTTCP', 'VTTPP', 'VTTBP', 'NOCWSTF'];

    this.$graphics = this.apiService
      .getAllStats({
        from: this.from,
        to: this.to,
        type: types.join(','),
      })
      .pipe(
        map((res) => {
          this.loading = false;
          return res.payload;
        })
      );
  }

  private formBuild() {
    this.form = this.formBuilder.group({
      from: [''],
      to: [''],
      current: [false],
    });
  }
}
