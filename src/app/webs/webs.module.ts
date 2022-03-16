import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModule } from '../admin/admin.module';
import { WebsRoutingModule } from './webs-routing.module';
import { PrincipalLayoutComponent } from './components/principal-layout/principal-layout.component';

import { SharedModule } from '@shared/shared.module';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    PrincipalLayoutComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
  ],
  imports: [CommonModule, WebsRoutingModule, SharedModule, AdminModule],
})
export class WebsModule {}
