import { Component } from '@angular/core';
import { OnInit,Input } from '@angular/core';
import { UserProfil } from '../../core/modeles/userProfil';
import { Router } from '@angular/router';



@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.component.html',
  styleUrls: ['./artisan.component.css']
})
export class ArtisanComponent implements OnInit {
@Input() artisan!:UserProfil;
 constructor(private router: Router) { }

 ngOnInit(){
 }
 onViewEtudiant(){
     this.router.navigateByUrl(`artisans/${this.artisan.id}`);

 }

}
