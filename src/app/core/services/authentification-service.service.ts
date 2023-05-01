import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../modeles/post';
import { User } from '../modeles/user';

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
  ajouterUserProfil(user: User): Observable<User> {
    return this.http.post <User>(`${this.urlApi}/ajouter`,user);
  }
  getUserById(userId:number): Observable<User>{
    return this.http.get<User>(`http://localhost:8090/profil/${userId}`);
      
      
 }
 getUserByEmail(userEmail:string): Observable<User>{
  return this.http.get<User>(`http://localhost:8090/users/${userEmail}`);
    

}
  
}