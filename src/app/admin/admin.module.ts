import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageComponent } from './components/pages/manage/manage.component';
import { PrincipalComponent } from './components/pages/principal/principal.component';
import { NavigationComponent } from './components/atoms/navigation/navigation.component';
import { HeaderNavigationComponent } from './components/atoms/header-navigation/header-navigation.component';
import { SharedModule } from '@shared/shared.module';
import { HeaderAdminComponent } from './components/atoms/header-admin/header-admin.component';

@NgModule({
  declarations: [
    ManageComponent,
    PrincipalComponent,
    NavigationComponent,
    HeaderNavigationComponent,
    HeaderAdminComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
  exports: [
    HeaderAdminComponent,
    NavigationComponent,
    HeaderNavigationComponent,
  ],
})
export class AdminModule {}
