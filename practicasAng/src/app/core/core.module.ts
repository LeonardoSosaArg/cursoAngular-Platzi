import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/body/body.component';
import { CoupensComponent } from './components/coupens/coupens.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MediaComponent } from './components/media/media.component';
import { PagesComponent } from './components/pages/pages.component';
import { ProductsComponent } from './components/products/products.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { StadisticsComponent } from './components/stadistics/stadistics.component';
import { CoreRoutingModule } from './core.routing.module';
import { CoreComponent } from './core.component';



@NgModule({
  declarations: [
    SideBarComponent,
    BodyComponent,
    DashboardComponent,
    ProductsComponent,
    StadisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    CoreComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    BodyComponent,
    SideBarComponent
  ]
})
export class CoreModule { }
