import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { editStaticPage } from '@actions/static-page.actions';

import { ApiService } from '@core/services/api/api.service';

import { StaticPage } from '@models/static-page.model';
import { IAPI } from '@models/api.model';
import { HttpErrorResponse } from '@angular/common/http';

import { getValue } from '@core/utils';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form: FormGroup | undefined;

  id: string = '';

  loading: boolean = false;
  error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ staticPages: StaticPage[] }>,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  get introduction() {
    return getValue(this.form, 'introduction').value;
  }

  get email() {
    return getValue(this.form, 'email').value;
  }

  submit() {
    this.loading = true;

    const payload: Partial<StaticPage> = {
      introduction: this.introduction,
      contactEmail: this.email,
    };

    this.apiService.updateStaticContent(this.id, payload).subscribe({
      next: (data) => this.onSuccess(data.payload),
      error: (error: HttpErrorResponse) => this.onError(error),
    });
  }

  fetchData() {
    this.loading = true;

    this.store.select('staticPages').subscribe((data) => {
      this.loading = false;

      const dataFiltered = data.find((d) => d.contactEmail !== undefined);

      if (!dataFiltered) return;

      this.id = dataFiltered.id as any as string;
      this.builder(dataFiltered);
    });
  }

  private builder(contact: StaticPage) {
    this.form = this.formBuilder.group({
      introduction: [
        contact.introduction,
        [Validators.required, Validators.minLength(20)],
      ],
      whyWorkWithMe: [
        contact.responseQuestion,
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(800),
        ],
      ],
      email: [contact.contactEmail, [Validators.required, Validators.email]],
    });
  }

  private onSuccess(page: StaticPage) {
    this.store.dispatch(
      editStaticPage({
        id: this.id,
        changes: page,
      })
    );

    this.error = '';
    this.loading = false;
  }

  private onError(error: HttpErrorResponse) {
    const res = error.error as IAPI<null>;

    this.error = res.message;
    this.loading = false;
  }
}
