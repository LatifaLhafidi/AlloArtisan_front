import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from 'src/app/core/services/authentification-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  FormConnexion !:FormGroup;

  constructor( private router: Router ,private formBuilder: FormBuilder , private authService: AuthentificationServiceService,
    ){}
 
 ngOnInit() : void {
  this.FormConnexion=this.formBuilder.group({
    login: [null , Validators.required],
    password: [null, Validators.required],


  })
 }

 onAuthentifier(){
  this.router.navigateByUrl('login/user');
 // this.authService.login(this.FormConnexion.value);


 }

}



