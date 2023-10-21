import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fb = inject(FormBuilder);
  router = inject(Router);
  userService = inject(UserService);
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^(?!\s$)\s*\S/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(8)]]
    }, { validator: this.passwordMatchValidator });
  }

  get passwordInvalid() {
    const passwordControl = this.form.get('password');

    if (passwordControl?.touched && passwordControl.hasError('required')) {
      return 'Campo requerido';
    }

    if (passwordControl?.touched && passwordControl.hasError('minLength')) {
      return 'La contraseña debe contener al menos 8 caracteres';
    }

    return '';
  }

  get emailInvalid() {
    const emailControl = this.form.get('email');

    if (emailControl?.touched && emailControl.hasError('required')) {
      return 'Campo requerido';
    }

    if (emailControl?.errors?.['pattern']) {
      return 'No puede ingresar espacios al comienzo';
    }

    return '';
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const repeatPassword = formGroup.get('repeatPassword')?.value;

    if (password !== repeatPassword) {
      formGroup.get('repeatPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('repeatPassword')?.setErrors(null);
    }
  }

  get errorRepeatPassword() {
    const repeatPassword = this.form.get('repeatPassword');

    if (repeatPassword?.touched && repeatPassword.hasError('required')) {
      return 'Campo requerido';
    }

    if (repeatPassword?.touched && repeatPassword?.errors?.['passwordMismatch']) {
      return 'Las contraseñas no coinciden';
    }

    return '';
  }

  onRegister(){

  }
}
