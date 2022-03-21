import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './components/pages/principal/principal.component';

// Manage
import { ManageSocialMediaComponent } from './components/pages/manage-social-media/manage-social-media.component';
import { ManageSkillsComponent } from './components/pages/manage-skills/manage-skills.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
