import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { MainComponent } from './components/main/main.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';

@NgModule({
  declarations: [MainComponent, ProjectModalComponent],
  imports: [CommonModule, PortfolioRoutingModule, SharedModule],
})
export class PortfolioModule {}
