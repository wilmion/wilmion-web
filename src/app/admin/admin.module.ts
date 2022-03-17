import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageSocialMediaComponent } from './components/pages/manage-social-media/manage-social-media.component';
import { PrincipalComponent } from './components/pages/principal/principal.component';
import { NavigationComponent } from './components/atoms/navigation/navigation.component';
import { HeaderNavigationComponent } from './components/atoms/header-navigation/header-navigation.component';
import { SharedModule } from '@shared/shared.module';
import { HeaderAdminComponent } from './components/atoms/header-admin/header-admin.component';
import { SocialMediaComponent } from './components/atoms/cards/social-media/social-media.component';

@NgModule({
  declarations: [
    ManageSocialMediaComponent,
    PrincipalComponent,
    NavigationComponent,
    HeaderNavigationComponent,
    HeaderAdminComponent,
    SocialMediaComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
  exports: [
    HeaderAdminComponent,
    NavigationComponent,
    HeaderNavigationComponent,
  ],
})
export class AdminModule {}
