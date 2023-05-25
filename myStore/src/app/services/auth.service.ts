import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';
import { User } from '../models/user';
import { switchMap, tap } from 'rxjs';
import { TokenService } from './token.service';
import { addTokenHeader } from '../interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlBase = `${enviroment.API_URL}auth`;

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(email: string, password: string){
    return this.http.post<any>(`${this.urlBase}/login`,{email,password})
    .pipe(
      tap(response => this.tokenService.saveToken(response.access_token))
    );
  }

  // getProfile(token: string){
  //   // const headers = new HttpHeaders();
  //   // headers.set('Authorization',`Bearer ${token}`);
  //   console.log(token)
  //   return this.http.get<User>(`${this.urlBase}/profile` , {
  //     headers : {
  //       Authorization: `Bearer ${token}`
  //       //'Content-type' : 'application/json'
  //     }
  //   });
  // }

  getProfile(){
    return this.http.get<User>(`${this.urlBase}/profile` , {context : addTokenHeader()});
  }

  loginAndGet(email : string, password : string){
    return this.login(email,password)
    .pipe(
      switchMap( () => this.getProfile())
    )
  }

}
