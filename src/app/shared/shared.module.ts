import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { CheckboxToogleComponent } from './components/checkbox-toogle/checkbox-toogle.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { ImageComponent } from './components/image/image.component';
import { IconComponent } from './components/icon/icon.component';
import { InnerHtmlDirective } from './directives/innerHtml/inner-html.directive';
import { JobCardComponent } from './components/job-card/job-card.component';
import { SkillComponent } from './components/skill/skill.component';

@NgModule({
  declarations: [
    CheckboxToogleComponent,
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    ImageComponent,
    IconComponent,
    InnerHtmlDirective,
    JobCardComponent,
    SkillComponent,
  ],
  exports: [
    CheckboxToogleComponent,
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    ImageComponent,
    IconComponent,
    InnerHtmlDirective,
    JobCardComponent,
    SkillComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
