import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfil } from '../modeles/userProfil';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationServiceService {
  urlApi="http://localhost:8090"
  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})

  constructor(private http: HttpClient) { }
  // login(email: string, password: string): Observable<any> {
  //   return this.http.post(`${this.apiLogin}/login`, { email, password })
  //     .pipe(
  //       tap((response: { access_token: string; }) => {
  //         localStorage.setItem('token', response.access_token);
  //       })
  //     );
  // }
  ajouterUserProfil(user: UserProfil): Observable<UserProfil> {
    return this.http.post <UserProfil>(`${this.urlApi}/ajouter`,user);
  }
}
  
  