import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalLayoutComponent } from './components/principal-layout/principal-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../about-me/about-me.module').then((m) => m.AboutMeModule),
      },
      {
        path: 'portfolio',
        loadChildren: () =>
          import('../portfolio/portfolio.module').then(
            (m) => m.PortfolioModule
          ),
      },
      {
        path: 'contact-me',
        loadChildren: () =>
          import('../contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: '**',
        loadChildren: () =>
          import('../not-found/not-found.module').then((m) => m.NotFoundModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsRoutingModule {}
