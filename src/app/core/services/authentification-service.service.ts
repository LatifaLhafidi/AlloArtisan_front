import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Post } from '../modeles/post';
import { User } from '../modeles/user';
import { Data, Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Itoken } from '../modeles/itoken';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationServiceService {
  urlApi = "http://localhost:8090";

  headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
  currentUser = {};

  constructor(private http: HttpClient) { }

  login(user:User):Observable<Itoken>{
    return this.http.post<Itoken>(`${this.urlApi}/authenticate`,user);
        
  }
 
  
  ajouterUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.urlApi}/register`, user);
  }
  getUserProfil(userId: number): Observable<User> {
    return this.http.get<User>(`${this.urlApi}/profil/${userId}`);


  }
  getUserByEmail(userEmail: string): Observable<User> {
    return this.http.get<User>(`http://localhost:8090/users/${userEmail}`);


  }
   handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}