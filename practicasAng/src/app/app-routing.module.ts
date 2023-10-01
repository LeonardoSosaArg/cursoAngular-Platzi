import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { ProductsComponent } from './core/components/products/products.component';
import { MediaComponent } from './core/components/media/media.component';
import { PagesComponent } from './core/components/pages/pages.component';
import { CoupensComponent } from './core/components/coupens/coupens.component';
import { StadisticsComponent } from './core/components/stadistics/stadistics.component';
import { SettingsComponent } from './core/components/settings/settings.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/user/user.module').then(m => m.UserModule),
  },
  {
    path: 'main',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
  },
  {path: '', redirectTo: 'auth', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
