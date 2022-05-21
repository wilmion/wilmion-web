import { Component, OnInit } from '@angular/core';

import { ApiService } from '@core/services/api/api.service';

import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-biography-resume',
  templateUrl: './biography-resume.component.html',
  styleUrls: ['./biography-resume.component.scss'],
})
export class BiographyResumeComponent implements OnInit {
  imageUrl: Observable<string>;

  constructor(apiService: ApiService) {
    this.imageUrl = apiService
      .getAuthorImage()
      .pipe(map((response) => response.payload));
  }

  ngOnInit(): void {}
}
