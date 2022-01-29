import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './components/main/main.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BiographyResumeComponent } from './components/biography-resume/biography-resume.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [MainComponent, WelcomeComponent, BiographyResumeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
