import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { SocialMedia } from '@models/socialMedia.model';

import { ApiService } from '@core/services/api/api.service';

import { Observable } from 'rxjs';

import { editSocialMedia } from '@actions/socialMedias.actions';

@Component({
  selector: 'app-manage-social-media',
  templateUrl: './manage-social-media.component.html',
  styleUrls: ['./manage-social-media.component.scss'],
})
export class ManageSocialMediaComponent implements OnInit {
  $socialMedia: Observable<SocialMedia[]>;
  currentSocialMedia: SocialMedia | null = null;
  modal: boolean = false;
  loading: boolean = false;
  error: boolean = false;
  form: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ socialMedia: SocialMedia[] }>,
    private apiService: ApiService
  ) {
    this.$socialMedia = this.store.select('socialMedia');
    this.createForm();
  }

  ngOnInit(): void {}

  get link() {
    if (!this.form) throw new Error('Not exist');

    const link = this.form.get('link');

    return link;
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.loading = true;

    const link = this.link?.value as string;

    const id = this.currentSocialMedia?.id as string;

    const payload: Partial<SocialMedia> = {
      redirectUrl: link,
    };

    this.apiService.updateSocialMedia(id, payload).subscribe({
      next: () => this.onSuccessUpdateSocialMedia(id, payload),
      error: () => {
        this.loading = false;
        this.error = true;
      },
    });
  }

  openModal(socialMedia: SocialMedia) {
    this.currentSocialMedia = socialMedia;
    this.modal = true;
    const link = this.link;
    link?.setValue(socialMedia.redirectUrl);
  }

  closeModal() {
    this.modal = false;
  }

  private createForm() {
    this.form = this.formBuilder.group({
      link: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  private onSuccessUpdateSocialMedia(
    id: string,
    payload: Partial<SocialMedia>
  ) {
    this.store.dispatch(
      editSocialMedia({
        id,
        changes: payload,
      })
    );
    this.loading = false;
    this.error = false;
  }
}
