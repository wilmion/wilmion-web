import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { BlogRoutingModule } from './blog-routing.module';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, BlogRoutingModule, SharedModule],
})
export class BlogModule {}
