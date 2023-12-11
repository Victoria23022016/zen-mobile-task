import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'main',
        component: MainPageComponent,
        children: [
          {
            path: 'home',
            loadChildren: () =>
              import('./modules/home/home.module').then(
                (mod) => mod.HomeModule
              ),
          },
          {
            path: 'inventory',
            loadChildren: () =>
              import('./modules/inventory/inventory.module').then(
                (mod) => mod.InventoryModule
              ),
          },
          {
            path: 'reports',
            loadChildren: () =>
              import('./modules/reports/reports.module').then(
                (mod) => mod.ReportsModule
              ),
          },
          {
            path: 'billing',
            loadChildren: () =>
              import('./modules/billing/billing.module').then(
                (mod) => mod.BillingModule
              ),
          },
          {
            path: 'profile',
            loadChildren: () =>
              import('./modules/profile/profile-module').then(
                (mod) => mod.ProfileModule
              ),
          },
        ],
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('../auth/auth.module').then((mod) => mod.AuthModule),
      },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: 'auth' },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
