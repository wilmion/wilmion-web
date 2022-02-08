import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { initialState } from '@core/ngrx/initialStateProvitional';

import { StaticPage } from '@models/static-page.model';

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
    private store: Store<{ staticPages: StaticPage[]; darkMode: boolean }>
  ) {}

  ngOnInit(): void {
    this.setDates();
    this.store.select('darkMode').subscribe((value) => {
      localStorage['theme'] = value ? 'dark' : 'light';
      this.verifyDarkMode();
    });
  }

  private setDates() {
    this.store.dispatch(
      setStaticPages({
        staticPages: initialState.staticPages,
      })
    );

    this.store.dispatch(
      setProjects({
        projects: initialState.projects,
      })
    );

    this.store.dispatch(
      setSkills({
        skills: initialState.skills,
      })
    );

    this.store.dispatch(
      setSocialMedias({
        socialMedias: initialState.socialMedia,
      })
    );

    this.store.dispatch(
      setJobs({
        jobs: initialState.jobs as any,
      })
    );
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
}
