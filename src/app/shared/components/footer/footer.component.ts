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
  socialMedia$: Observable<SocialMedia[]>;
  constructor(private store: Store<{ socialMedia: SocialMedia[] }>) {
    this.socialMedia$ = store.select('socialMedia');
  }

  ngOnInit(): void {}
}
