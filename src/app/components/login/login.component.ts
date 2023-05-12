import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationServiceService } from 'src/app/core/services/authentification-service.service';
import { TokenStorageServiceService } from 'src/app/core/services/token-storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})


  FormConnexion !:FormGroup;
 // urlApi="http://localhost:8090/authenticate";
  errorMessage: string | null;
  authentifie: boolean;

  constructor( private router: Router ,private formBuilder: FormBuilder ,
     private authService: AuthentificationServiceService, private tokenStorage: TokenStorageServiceService
    ){
      this.errorMessage = null;
      this.authentifie = false;
    }
 
 ngOnInit() : void {
  this.FormConnexion=this.formBuilder.group({
    userName: [null , Validators.required],
    password: [null, Validators.required],
  })
 }

 onAuthentifier() {
  this.errorMessage = null;
  this.authentifie = false;
 
    
  this.authService.login(this.FormConnexion.value) 
  .subscribe(data => {
    console.log(data.token);
    console.log(data);

    this.authentifie = true;
    localStorage.setItem('access_token', data.token);
    this.router.navigate(['login/user']);
  },
  error => {
    console.error(error);
    
    // Gérer l'erreur de la requête
    this.errorMessage= "Nom d'utilisateur ou mot de passe incorrect.";
  }
);
}
}

