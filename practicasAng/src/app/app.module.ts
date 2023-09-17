import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './core/components/body/body.component';
import { CoupensComponent } from './core/components/coupens/coupens.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { MediaComponent } from './core/components/media/media.component';
import { PagesComponent } from './core/components/pages/pages.component';
import { ProductsComponent } from './core/components/products/products.component';
import { SettingsComponent } from './core/components/settings/settings.component';
import { SideBarComponent } from './core/components/side-bar/side-bar.component';
import { StadisticsComponent } from './core/components/stadistics/stadistics.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    BodyComponent,
    DashboardComponent,
    ProductsComponent,
    StadisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
