import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  UserProfil } from'../modeles/userProfil';
import { User } from '../modeles/user';

@Injectable({
  providedIn: 'root'
})
export class ListArtisanService {

  urlApi="http://localhost:8090"
  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})

  constructor ( private http :HttpClient){}

   getAllArtisan():Observable<UserProfil[]>{
    return this.http.get<UserProfil[]>
    ('http://localhost:8090/artisans');
   }
   getArtisanById(artisanId:number): Observable<UserProfil>{
    return this.http.get<UserProfil>(`http://localhost:8090/artisans/${artisanId}`);
     
      
 }
 
 




}
