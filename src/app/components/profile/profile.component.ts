import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/modeles/user';
import { AuthentificationServiceService } from 'src/app/core/services/authentification-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!:User;
  constructor( private route: ActivatedRoute,private service:AuthentificationServiceService){}
  ngOnInit(): void {
    this.getUser();
   
  }
  getUser(){
    const emailUser =this.route.snapshot.params['email'];
    this.service.getUserByEmail(emailUser).subscribe(
    
    data=>{
      this.profile=data;
    })
  }
}
