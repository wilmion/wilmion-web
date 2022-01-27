import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsRoutingModule } from './webs-routing.module';
import { PrincipalLayoutComponent } from './components/principal-layout/principal-layout.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [PrincipalLayoutComponent],
  imports: [CommonModule, WebsRoutingModule, SharedModule],
})
export class WebsModule {}
