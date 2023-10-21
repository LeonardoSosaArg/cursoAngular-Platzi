import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Credential } from '../models/credential.model';
import { TokenService } from 'src/app/core/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private router = inject(Router);
  private tokenService = inject(TokenService);

  private apiUrl = environment.authUrl;
  private apiKey = environment.apiKey;


  login(credentials: Credential): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.apiUrl}/accounts:signInWithPassword?key=${this.apiKey}`, credentials)
        .subscribe(
          (data: any) => {
            this.tokenService.saveToken(data.idToken)
            resolve(data); // Resuelve la promesa con los datos recibidos
          },
          error => {
            reject(error); // Rechaza la promesa en caso de error
          }
        );
    });
  }

  register(credentials: Credential) : Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.apiUrl}/accounts:signUp?key=${this.apiKey}`, credentials)
        .subscribe(
          data => {
            resolve(data); // Resuelve la promesa con los datos recibidos
          },
          error => {
            reject(error); // Rechaza la promesa en caso de error
          }
        );
    });
  }

}
