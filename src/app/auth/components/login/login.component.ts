import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { setUser } from '@actions/user.actions';

import { User, Login } from '@models/user.model';

import { ApiService } from '@core/services/api/api.service';
import { StorageService } from '@core/services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup | undefined;
  error: boolean = false;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private storageService: StorageService,
    private store: Store<{ user: User | null }>
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  login(e: Event) {
    e.preventDefault();
    this.loading = true;

    const payload: Login = {
      email: this.email?.value,
      password: this.password?.value,
    };

    const keep = this.KeepMyAccount?.value as boolean;

    this.form?.reset();

    this.apiService.login(payload).subscribe({
      next: (data) => this.successfullLogin(data, keep),
      error: (error) => {
        this.loading = false;
        this.error = true;
      },
    });
  }

  get email() {
    if (!this.form) return null;

    const email = this.form.get('email');

    return email;
  }

  get password() {
    if (!this.form) return null;

    const password = this.form.get('password');

    return password;
  }

  get KeepMyAccount() {
    if (!this.form) return null;

    const value = this.form.get('keep-my-account');

    return value;
  }

  private successfullLogin(data: any, keep: boolean) {
    if (data.status === 200) {
      const payload = data.payload;
      const key = 'auth';

      if (keep) {
        this.storageService.setLocalStorage(payload, key);
      } else {
        this.storageService.setSessionStorage(payload, key);
      }

      this.store.dispatch(setUser(payload.user));

      this.loading = false;

      this.router.navigate(['/admin/dashboard']);
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      'keep-my-account': [false, [Validators.required]],
    });
  }
}
