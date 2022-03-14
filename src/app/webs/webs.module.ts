import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsRoutingModule } from './webs-routing.module';
import { PrincipalLayoutComponent } from './components/principal-layout/principal-layout.component';

import { SharedModule } from '@shared/shared.module';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';

@NgModule({
  declarations: [PrincipalLayoutComponent, AuthLayoutComponent],
  imports: [CommonModule, WebsRoutingModule, SharedModule],
})
export class WebsModule {}
