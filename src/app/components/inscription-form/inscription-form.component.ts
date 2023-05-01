import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthentificationServiceService } from 'src/app/core/services/authentification-service.service';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.css']
})
export class InscriptionFormComponent implements OnInit {
  artisanForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private liste: AuthentificationServiceService) { }

  ngOnInit(): void {
    this.artisanForm = this.formBuilder.group({
      nom: [null, Validators.required],
      username: [null, Validators.required],

      prenom: [null, Validators.required],
      email: [null, Validators.required],
      motdepass: [null, Validators.required],
    });

  }
  onSubmitForm() {

    this.liste.ajouterUserProfil(this.artisanForm.value).subscribe();
    
    //this.liste.addRoleToUser

    this.router.navigateByUrl('/login');
  }

}
