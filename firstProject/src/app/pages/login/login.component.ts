import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  register = {
    name : '',
    email: '',
    password: ''
  }

  onRegister(){
    console.log(this.register);
  }

}
