import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ContainerFormComponent } from './components/container-form/container-form.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [LoginComponent, ContainerFormComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
