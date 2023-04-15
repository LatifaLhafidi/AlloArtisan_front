import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from 'src/app/core/services/authentification-service.service';

@Component({
  selector: 'app-connexion-form',
  templateUrl: './connexion-form.component.html',
  styleUrls: ['./connexion-form.component.css']
})
export class ConnexionFormComponent implements OnInit{
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
  this.router.navigateByUrl('connexion/user');
 // this.authService.login(this.FormConnexion.value);


 }

}
