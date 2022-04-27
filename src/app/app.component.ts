import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { StaticPage } from '@models/static-page.model';

// Services
import { ApiService } from '@core/services/api/api.service';

//Dispatchs
import { setStaticPages } from '@actions/static-page.actions';
import { setProjects } from '@actions/projects.actions';
import { setJobs } from '@actions/jobs.actions';
import { setSkills } from '@actions/skills.actions';
import { setSocialMedias } from '@actions/socialMedias.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<{
      staticPages: StaticPage[];
      darkMode: boolean;
    }>,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.store.select('darkMode').subscribe((value) => {
      localStorage['theme'] = value ? 'dark' : 'light';
      this.verifyDarkMode();
    });

    this.apiService.createStat({ type: 'NU' }).subscribe(() => {});

    this.fetchData();
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
}

// CORRECTIONS:
// Guard Stategie on auths
// 'Cancel'" buttons without functionalities.

// REMAINING:
// Dashboard
// Blog
