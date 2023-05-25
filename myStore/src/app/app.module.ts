import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { RestaltadorDirective } from './directives/restaltador.directive';
import { SwiperModule } from 'swiper/angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoginComponent } from './components/login/login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ListProductsComponent,
    NavBarComponent,
    ReversePipe,
    TimeAgoPipe,
    RestaltadorDirective,
    LoginComponent,
    CreateUserComponent,
    HomeComponent,
    NotFoundComponent,
    CategoryComponent,
    MyCartComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,
    SweetAlert2Module,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
