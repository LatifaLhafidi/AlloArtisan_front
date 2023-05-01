import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/modeles/user';
import { AuthentificationServiceService } from 'src/app/core/services/authentification-service.service';

@Component({
  selector: 'app-menu-profil',
  templateUrl: './menu-profil.component.html',
  styleUrls: ['./menu-profil.component.css']
})
export class MenuProfilComponent implements OnInit{
  profil!:User;
  constructor( private service:AuthentificationServiceService){

  }

  ngOnInit(): void {
  }
  getUserById(){
  //  this.service.getUserById(){

    }

  }

