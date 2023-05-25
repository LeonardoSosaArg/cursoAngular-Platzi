import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'list-products', component: ListProductsComponent},
  {path: 'create-user', component: CreateUserComponent},
  {
    path: '**',
    redirectTo: 'list-products'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
