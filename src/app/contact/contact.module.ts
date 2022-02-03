import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { ContactRoutingModule } from './contact-routing.module';
import { MainComponent } from './components/main/main.component';
import { FormBoxComponent } from './components/form-box/form-box.component';

@NgModule({
  declarations: [MainComponent, FormBoxComponent],
  imports: [CommonModule, ContactRoutingModule, SharedModule],
})
export class ContactModule {}
