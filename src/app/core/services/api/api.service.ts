import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IAPI } from '@models/api.model';
import { StaticPage } from '@models/static-page.model';
import { Job } from '@models/job.model';
import { Project } from '@models/project.model';
import { Skill } from '@models/skill.model';
import { SocialMedia } from '@models/socialMedia.model';
import { User, Login } from '@models/user.model';
import { Image } from '@models/image.model';
import { StatDto, Stat, StatQueries, GraphicStat } from '@models/stat.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public API: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  // Images
  createImage(files: File[], size: string) {
    const file = files[0];
    const urlRequest = `${this.API}/api/images`;

    const fd = new FormData();

    fd.append('image', file);
    fd.append('size', size);

    return this.http.post<IAPI<Image>>(urlRequest, fd);
  }

  // Stats

  getAllStats({ from, to, type }: StatQueries) {
    let urlRequest = `${this.API}/api/stats?from=${from}&to=${to}&type=${type}`;

    return this.http.get<IAPI<GraphicStat[]>>(urlRequest);
  }

  getStat(id: string) {
    const urlRequest = `${this.API}/api/stats/${id}`;

    return this.http.get<IAPI<Stat>>(urlRequest);
  }

  createStat(statPayload: StatDto) {
    const urlRequest = `${this.API}/api/stats`;

    return this.http.post<IAPI<Stat>>(urlRequest, statPayload);
  }

  // Users

  login(payload: Login) {
    const urlRequest = `${this.API}/api/users/login`;

    return this.http.post<IAPI<{ user: User; token: string }>>(
      urlRequest,
      payload
    );
  }

  getMyProfile() {
    const urlRequest = `${this.API}/api/users/get-my-account`;

    return this.http.get<IAPI<User>>(urlRequest);
  }

  updateUser(payload: Partial<User>) {
    const urlRequest = `${this.API}/api/users`;

    return this.http.patch<IAPI<User>>(urlRequest, payload);
  }

  changePassword(payload: { oldPassword: string; newPassword: string }) {
    const urlRequest = `${this.API}/api/users/change-password`;

    return this.http.post<IAPI<any>>(urlRequest, payload);
  }

  getAuthorImage() {
    const urlRequest = `${this.API}/api/users/author-image`;

    return this.http.get<IAPI<string>>(urlRequest);
  }

  // Static-Contents

  getAllStaticContents(limit?: string, offset?: string) {
    let query = this.createQuery(limit, offset);

    const urlRequest = `${this.API}/api/static-contents${query}`;

    const request = this.http.get<IAPI<StaticPage[]>>(urlRequest);

    return request;
  }

  updateStaticContent(id: string, payload: Partial<StaticPage>) {
    const urlRequest = `${this.API}/api/static-contents/${id}`;

    return this.http.patch<IAPI<StaticPage>>(urlRequest, payload);
  }

  // Jobs

  getAllJobs() {
    const url = `${this.API}/api/jobs`;

    return this.http.get<IAPI<Job[]>>(url);
  }

  updateJob(id: string, payload: Partial<Job>) {
    const url = `${this.API}/api/jobs/${id}`;

    return this.http.patch<IAPI<Job>>(url, payload);
  }

  activateJob(id: string) {
    const url = `${this.API}/api/jobs/activate/${id}`;

    return this.http.post<IAPI<Job>>(url, {});
  }

  deactivateJob(id: string) {
    const url = `${this.API}/api/jobs/${id}`;

    return this.http.delete<IAPI<Job>>(url, {});
  }

  // Projects

  getAllProjects() {
    const url = `${this.API}/api/projects`;

    return this.http.get<IAPI<Project[]>>(url);
  }

  editProject(id: string, payload: Partial<Project>) {
    const url = `${this.API}/api/projects/${id}`;

    return this.http.patch<IAPI<Project>>(url, payload);
  }

  activateProject(id: string) {
    const url = `${this.API}/api/projects/activate/${id}`;

    return this.http.post<IAPI<Project>>(url, {});
  }

  deactivateProject(id: string) {
    const url = `${this.API}/api/projects/${id}`;

    return this.http.delete<IAPI<Project>>(url);
  }

  // Skills

  getAllSkills(limit?: string, offset?: string) {
    let query = this.createQuery(limit, offset);

    const url = `${this.API}/api/skills${query}`;

    return this.http.get<IAPI<Skill[]>>(url);
  }

  createSkill(payload: Skill) {
    const url = `${this.API}/api/skills`;

    return this.http.post<IAPI<Skill>>(url, payload);
  }

  editSkill(id: string, payload: Partial<Skill>) {
    const url = `${this.API}/api/skills/${id}`;

    return this.http.patch<IAPI<Skill>>(url, payload);
  }

  deleteSkill(id: string) {
    const url = `${this.API}/api/skills/${id}`;

    return this.http.delete<IAPI<{}>>(url);
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

  public createQuery(limit?: string, offset?: string) {
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
