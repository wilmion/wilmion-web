import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { SocialMedia } from '@models/socialMedia.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  socialMedia: SocialMedia[] = [];

  constructor(private store: Store<{ socialMedia: SocialMedia[] }>) {}

  ngOnInit(): void {
    this.store
      .select('socialMedia')
      .subscribe((socialMedias) => (this.socialMedia = socialMedias));
  }

  getUrlOfSocialMedia(name: string) {
    const socialMedia = this.socialMedia.find((s) => s.name === name);

    if (!socialMedia) return;

    return socialMedia.redirect_url;
  }
}
