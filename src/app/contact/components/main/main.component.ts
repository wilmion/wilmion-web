import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { StaticPage } from '@models/static-page.model';
import { SocialMedia } from '@models/socialMedia.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  staticPage$: Observable<StaticPage[]>;
  staticPage: StaticPage | undefined;

  socialMedia: SocialMedia[] = [];

  constructor(
    private store: Store<{
      staticPages: StaticPage[];
      socialMedia: SocialMedia[];
    }>
  ) {
    this.staticPage$ = store.select('staticPages');
  }

  ngOnInit(): void {
    this.subscribeToStore();
  }

  private subscribeToStore() {
    this.staticPage$.subscribe((data) => {
      const dataFiltered = data.find((d) => d.contact_email !== undefined);

      if (!dataFiltered) return;

      this.staticPage = dataFiltered;
    });
    this.store
      .select('socialMedia')
      .subscribe((socialMedia) => (this.socialMedia = socialMedia));
  }

  getUrlOfSocialMedia(name: string) {
    const socialMedia = this.socialMedia.find((s) => s.name === name);

    if (!socialMedia) return;

    return socialMedia.redirect_url;
  }
}
