import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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
import { ProjectComponent } from './components/project/project.component';
import { ModalComponent } from './components/modal/modal.component';
import { InputComponent } from './components/inputs/input/input.component';
import { TextAreaComponent } from './components/inputs/text-area/text-area.component';
import { NavigationMobileComponent } from './components/navigation-mobile/navigation-mobile.component';
import { ChangeScreenDirective } from './directives/change-screen/change-screen.directive';
import { CheckboxComponent } from './components/inputs/checkbox/checkbox.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FileComponent } from './components/inputs/file/file.component';

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
    ProjectComponent,
    ModalComponent,
    InputComponent,
    TextAreaComponent,
    NavigationMobileComponent,
    ChangeScreenDirective,
    CheckboxComponent,
    LoadingComponent,
    FileComponent,
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
    ProjectComponent,
    ModalComponent,
    InputComponent,
    TextAreaComponent,
    ChangeScreenDirective,
    CheckboxComponent,
    LoadingComponent,
    FileComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
