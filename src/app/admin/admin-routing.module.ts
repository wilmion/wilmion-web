import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './components/pages/principal/principal.component';

import { NotFoundAdminComponent } from './components/pages/not-found-admin/not-found-admin.component';

import { ContactComponent } from './components/pages/contact/contact.component';

import { StatsComponent } from './components/pages/stats/stats.component';

// Settings
import { SettingsComponent } from './components/pages/settings/settings.component';
import { SettingsPasswordComponent } from './components/pages/settings-password/settings-password.component';

// Manage
import { ManageSocialMediaComponent } from './components/pages/manage-social-media/manage-social-media.component';
import { ManageSkillsComponent } from './components/pages/manage-skills/manage-skills.component';
import { ManageProjectsComponent } from './components/pages/manage-projects/manage-projects.component';
import { ManageJobsComponent } from './components/pages/manage-jobs/manage-jobs.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
  },
  {
    path: 'manage/social-media',
    component: ManageSocialMediaComponent,
  },
  {
    path: 'manage/skills',
    component: ManageSkillsComponent,
  },
  {
    path: 'manage/projects',
    component: ManageProjectsComponent,
  },
  {
    path: 'manage/jobs',
    component: ManageJobsComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'settings/change-password',
    component: SettingsPasswordComponent,
  },
  {
    path: 'stats',
    component: StatsComponent,
  },
  {
    path: '**',
    component: NotFoundAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
