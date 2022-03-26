import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageSocialMediaComponent } from './components/pages/manage-social-media/manage-social-media.component';
import { PrincipalComponent } from './components/pages/principal/principal.component';
import { NavigationComponent } from './components/atoms/navigation/navigation.component';
import { HeaderNavigationComponent } from './components/atoms/header-navigation/header-navigation.component';
import { SharedModule } from '@shared/shared.module';
import { HeaderAdminComponent } from './components/atoms/header-admin/header-admin.component';
import { SocialMediaComponent } from './components/atoms/cards/social-media/social-media.component';
import { ManageSkillsComponent } from './components/pages/manage-skills/manage-skills.component';
import { CardSkillComponent } from './components/atoms/cards/skill/skill.component';
import { ManageProjectsComponent } from './components/pages/manage-projects/manage-projects.component';
import { ProjectsCardManageComponent } from './components/atoms/cards/projects/projects.component';
import { ManageJobsComponent } from './components/pages/manage-jobs/manage-jobs.component';
import { JobsCardManageComponent } from './components/atoms/cards/jobs/jobs.component';

@NgModule({
  declarations: [
    ManageSocialMediaComponent,
    PrincipalComponent,
    NavigationComponent,
    HeaderNavigationComponent,
    HeaderAdminComponent,
    SocialMediaComponent,
    ManageSkillsComponent,
    CardSkillComponent,
    ManageProjectsComponent,
    ProjectsCardManageComponent,
    ManageJobsComponent,
    JobsCardManageComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule, FormsModule],
  exports: [
    HeaderAdminComponent,
    NavigationComponent,
    HeaderNavigationComponent,
  ],
})
export class AdminModule {}
