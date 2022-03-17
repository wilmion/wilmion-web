import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IAPI } from '@models/api.model';
import { StaticPage } from '@models/static-page.model';
import { Job } from '@models/job.model';
import { Project } from '@models/project.model';
import { Skill } from '@models/skill.model';
import { SocialMedia } from '@models/socialMedia.model';
import { User, Login } from '@models/user.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  // Users

  login(payload: Login) {
    const urlRequest = `${this.API}/api/users/login`;

    return this.http.post<IAPI<{ user: User; token: string }>>(
      urlRequest,
      payload
    );
  }

  // Static-Contents

  getAllStaticContents(limit?: string, offset?: string) {
    let query = this.createQuery(limit, offset);

    const urlRequest = `${this.API}/api/static-contents${query}`;

    const request = this.http.get<IAPI<StaticPage[]>>(urlRequest);

    return request;
  }

  // Jobs

  getAllJobs() {
    const url = `${this.API}/api/jobs`;

    return this.http.get<IAPI<Job>>(url);
  }

  // Projects

  getAllProjects() {
    const url = `${this.API}/api/projects`;

    return this.http.get<IAPI<Project[]>>(url);
  }

  // Skills

  getAllSkills(limit?: string, offset?: string) {
    let query = this.createQuery(limit, offset);

    const url = `${this.API}/api/skills${query}`;

    return this.http.get<IAPI<Skill[]>>(url);
  }

  // Social-media

  getAllSocialMedia(limit?: string, offset?: string) {
    let query = this.createQuery(limit, offset);

    const url = `${this.API}/api/social-media${query}`;

    return this.http.get<IAPI<SocialMedia[]>>(url);
  }

  updateSocialMedia(id: string, payload: Partial<SocialMedia>) {
    const url = `${this.API}/api/social-media/${id}`;

    return this.http.patch<IAPI<any>>(url, payload);
  }

  // Utils for this file

  private createQuery(limit?: string, offset?: string) {
    let query = '';

    if (limit) {
      query += `?limit=${limit}`;
    }

    if (offset) {
      query += `?offset=${offset}`;
    }

    if (limit && offset) {
      query = `?limit=${limit}&offset=${offset}`;
    }

    return query;
  }
}
