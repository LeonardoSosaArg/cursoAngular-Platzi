import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string){
    sessionStorage.setItem('token', token);
  }

  getToken() : string{
    if (sessionStorage.getItem('token')) {
      return sessionStorage.getItem('token')!;
    }
    else return '';
  }

  deleteToken(){
    if (sessionStorage.getItem('token')) {
      sessionStorage.removeItem('token');
    }
  }
}
