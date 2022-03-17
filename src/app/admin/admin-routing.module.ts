import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './components/pages/principal/principal.component';
import { ManageSocialMediaComponent } from './components/pages/manage-social-media/manage-social-media.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
  },
  {
    path: 'manage/social-media',
    component: ManageSocialMediaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
