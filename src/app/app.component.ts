import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { StaticPage } from '@models/static-page.model';

// Services
import { ApiService } from '@core/services/api/api.service';
import { StorageService } from '@core/services/storage/storage.service';

import { User } from '@models/user.model';

//Dispatchs
import { setStaticPages } from '@actions/static-page.actions';
import { setProjects } from '@actions/projects.actions';
import { setJobs } from '@actions/jobs.actions';
import { setSkills } from '@actions/skills.actions';
import { setSocialMedias } from '@actions/socialMedias.actions';
import { setUser } from '@actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private storageService: StorageService,
    private store: Store<{
      staticPages: StaticPage[];
      darkMode: boolean;
      user: User;
    }>,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.store.select('darkMode').subscribe((value) => {
      localStorage['theme'] = value ? 'dark' : 'light';
      this.verifyDarkMode();
    });
    this.fetchData();
    this.getUserLogin();
  }

  private verifyDarkMode() {
    if (
      localStorage['theme'] === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  private fetchData() {
    this.apiService.getAllStaticContents().subscribe((res) => {
      this.store.dispatch(
        setStaticPages({
          staticPages: res.payload,
        })
      );
    });

    this.apiService.getAllJobs().subscribe((res) => {
      this.store.dispatch(
        setJobs({
          jobs: res.payload as any,
        })
      );
    });

    this.apiService.getAllProjects().subscribe((res) => {
      this.store.dispatch(
        setProjects({
          projects: res.payload,
        })
      );
    });

    this.apiService.getAllSkills().subscribe((res) => {
      this.store.dispatch(
        setSkills({
          skills: res.payload,
        })
      );
    });

    this.apiService.getAllSocialMedia().subscribe((res) => {
      this.store.dispatch(
        setSocialMedias({
          socialMedias: res.payload,
        })
      );
    });
  }

  private getUserLogin() {
    const user = this.storageService.getLocalStorage<{
      token: string;
      user: User;
    }>('auth');

    this.store.dispatch(setUser(user.user));
  }
}
