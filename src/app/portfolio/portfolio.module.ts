import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, PortfolioRoutingModule, SharedModule],
})
export class PortfolioModule {}
