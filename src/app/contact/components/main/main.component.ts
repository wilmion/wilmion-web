import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { StaticPage } from '@models/static-page.model';
import { SocialMedia } from '@models/socialMedia.model';

import { ApiService } from '@core/services/api/api.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  staticPage$: Observable<StaticPage[]>;
  socialMedia$: Observable<SocialMedia[]>;

  staticPage: StaticPage | undefined;

  constructor(
    private store: Store<{
      staticPages: StaticPage[];
      socialMedia: SocialMedia[];
    }>,
    private apiService: ApiService
  ) {
    this.staticPage$ = store.select('staticPages');
    this.socialMedia$ = store.select('socialMedia');
  }

  ngOnInit(): void {
    this.apiService.createStat({ type: 'VTTCP' }).subscribe(() => {});

    this.staticPage$.subscribe(
      (data) => (this.staticPage = this.getContactInfo(data))
    );
  }

  getContactInfo(data: StaticPage[]) {
    const dataFiltered = data.find((d) => d.contactEmail != undefined);

    if (!dataFiltered) return undefined;

    return dataFiltered;
  }
}
