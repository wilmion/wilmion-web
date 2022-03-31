import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalLayoutComponent } from './components/principal-layout/principal-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';

import { AuthGuard } from '@core/guards/auth/auth.guard';
import { AuthorizationGuard } from '@core/guards/authorization/authorization.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard, AuthorizationGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },
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
        path: 'blog',
        loadChildren: () =>
          import('../blog/blog.module').then((m) => m.BlogModule),
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
