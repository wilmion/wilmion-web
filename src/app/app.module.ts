import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { staticPageReducer } from '@reducers/static-page.reducer';
import { skillReducer } from '@reducers/skills.reducer';
import { jobReducer } from '@reducers/jobs.reducer';
import { projectsReducer } from '@reducers/projects.reducer';
import { socialMediasReducer } from '@reducers/socialMedias.reducers';
import { darkModeReducer } from '@reducers/darkMode.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        staticPages: staticPageReducer,
        skills: skillReducer,
        jobs: jobReducer,
        projects: projectsReducer,
        socialMedia: socialMediasReducer,
        darkMode: darkModeReducer,
      },
      {}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
