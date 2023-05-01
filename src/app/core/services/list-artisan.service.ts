import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../modeles/post';
import { User } from '../modeles/user';

@Injectable({
  providedIn: 'root'
})
export class ListArtisanService {

  urlApi="http://localhost:8090"
  
  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})

  constructor ( private http :HttpClient){}

   getAllArtisan():Observable<User[]>{
    return this.http.get<User[]>
    ('http://localhost:8090/users');
   }
   
   lancerPost(post:Post): Observable<Post> {
  return this.http.post <Post>(`${this.urlApi}/offre`,post);
}
  getAllService():Observable<Post[]>{
    return this.http.get<Post[]>(`${this.urlApi}/posts/service`);
   
  }
  getAllBesoin():Observable<Post[]>{
    return this.http.get<Post[]>(`${this.urlApi}/posts/besoin`);
   
  }
 
 




}
