import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
