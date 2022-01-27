import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxToogleComponent } from './components/checkbox-toogle/checkbox-toogle.component';
import { BsSunComponent } from './components/Icons/bs-sun/bs-sun.component';
import { MdOutlineDarkModeComponent } from './components/Icons/md-outline-dark-mode/md-outline-dark-mode.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { TextResponsiveDirective } from './directives/text-responsive/text-responsive.directive';
import { RiMenu5LineComponent } from './components/Icons/ri-menu5-line/ri-menu5-line.component';
import { AiOutlineYoutubeComponent } from './components/Icons/ai-outline-youtube/ai-outline-youtube.component';
import { BsInstagramComponent } from './components/Icons/bs-instagram/bs-instagram.component';
import { AiOutlineLinkedinComponent } from './components/Icons/ai-outline-linkedin/ai-outline-linkedin.component';
import { FiTwitterComponent } from './components/Icons/fi-twitter/fi-twitter.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { ImageComponent } from './components/image/image.component';

@NgModule({
  declarations: [
    CheckboxToogleComponent,
    BsSunComponent,
    MdOutlineDarkModeComponent,
    LogoComponent,
    HeaderComponent,
    TextResponsiveDirective,
    RiMenu5LineComponent,
    AiOutlineYoutubeComponent,
    BsInstagramComponent,
    AiOutlineLinkedinComponent,
    FiTwitterComponent,
    FooterComponent,
    ButtonComponent,
    ImageComponent,
  ],
  exports: [
    CheckboxToogleComponent,
    BsSunComponent,
    MdOutlineDarkModeComponent,
    LogoComponent,
    HeaderComponent,
    TextResponsiveDirective,
    RiMenu5LineComponent,
    AiOutlineYoutubeComponent,
    BsInstagramComponent,
    AiOutlineLinkedinComponent,
    FiTwitterComponent,
    FooterComponent,
    ButtonComponent,
    ImageComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
