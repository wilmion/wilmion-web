import { Component, OnInit } from '@angular/core';
import { IAPI } from '@core/models/api.model';

import { ApiService } from '@core/services/api/api.service';

@Component({
  selector: 'app-settings-password',
  templateUrl: './settings-password.component.html',
  styleUrls: ['./settings-password.component.scss'],
})
export class SettingsPasswordComponent implements OnInit {
  step: number = 1;
  loading: boolean = false;
  error: string = '';

  payload = {
    oldPassword: '',
    newPassword: '',
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  onRecievedData(oldPassword: string, newPassword: string) {
    this.loading = true;

    this.payload = { oldPassword, newPassword };

    this.apiService.changePassword(this.payload).subscribe({
      next: () => this.onSuccess(),
      error: (error) => this.onError(error),
    });
  }

  private onSuccess() {
    this.step += 1;
    this.error = '';
    this.loading = false;
  }

  private onError(error: { error: IAPI<any> }) {
    this.loading = false;
    this.error = error.error.message;
  }
}
