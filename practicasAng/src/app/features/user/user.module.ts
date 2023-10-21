import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginBaseComponent } from './components/login-base/login-base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { UserRoutingModule } from './user.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { CoreModule } from 'src/app/core/core.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

@NgModule({
  declarations: [
    UserComponent,
    LoginBaseComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    MatProgressSpinnerModule
  ]
})
export class UserModule { }
