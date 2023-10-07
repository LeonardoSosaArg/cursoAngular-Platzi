import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './components/coupens/coupens.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MediaComponent } from './components/media/media.component';
import { PagesComponent } from './components/pages/pages.component';
import { ProductsComponent } from './components/products/products.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StadisticsComponent } from './components/stadistics/stadistics.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'stadistics', component: StadisticsComponent},
      {path: 'coupens', component: CoupensComponent},
      {path: 'pages', component: PagesComponent},
      {path: 'media', component: MediaComponent},
      {path: 'settings', component: SettingsComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
