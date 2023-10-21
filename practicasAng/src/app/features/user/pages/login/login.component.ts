import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { Credential } from '../../models/credential.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  fb = inject(FormBuilder);
  router = inject(Router);
  userService = inject(UserService);
  _snackBar = inject(MatSnackBar);
  form: FormGroup;
  credentials: Credential;

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^(?!\s$)\s*\S/), Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get passwordInvalid() {
    const passwordControl = this.form.get('password');

    if (passwordControl?.touched && passwordControl.hasError('required')) {
      return 'Campo requerido';
    }

    return '';
  }

  get emailInvalid() {
    const emailControl = this.form.get('email');

    if (emailControl?.touched && emailControl.hasError('required')) {
      return 'Campo requerido';
    }

    if (emailControl?.touched && emailControl.hasError('email')) {
      return 'Debe ingresar un email válido';
    }

    if (emailControl?.errors?.['pattern']) {
      return 'No puede ingresar espacios al comienzo';
    }

    return '';
  }

  onLogin() {
    if (this.form.valid) {
      this.credentials = this.form.value;
      this.userService.login(this.credentials).then(data => {
        this.router.navigateByUrl('main/dashboard');
      }).catch( error => {
        this.showSnackBar(error.error.error.message, 'Aceptar');
        console.error(error.error.error.message);
      })
    }
  }

  showSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
