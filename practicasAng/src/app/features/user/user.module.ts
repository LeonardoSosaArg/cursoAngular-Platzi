import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginBaseComponent } from './components/login-base/login-base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { UserRoutingModule } from './user.routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserComponent,
    LoginBaseComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
