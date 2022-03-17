import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { AuthInterceptor } from '@core/interceptors/auth-interceptor.interceptor';

import { staticPageReducer } from '@reducers/static-page.reducer';
import { skillReducer } from '@reducers/skills.reducer';
import { jobReducer } from '@reducers/jobs.reducer';
import { projectsReducer } from '@reducers/projects.reducer';
import { socialMediasReducer } from '@reducers/socialMedias.reducers';
import { darkModeReducer } from '@reducers/darkMode.reducer';
import { userReducer } from '@reducers/user.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        staticPages: staticPageReducer,
        skills: skillReducer,
        jobs: jobReducer,
        projects: projectsReducer,
        socialMedia: socialMediasReducer,
        darkMode: darkModeReducer,
        user: userReducer,
      },
      {}
    ),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
