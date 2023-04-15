import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthentificationServiceService } from 'src/app/core/services/authentification-service.service';
import { ListArtisanService } from 'src/app/core/services/list-artisan.service';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.css']
})
export class InscriptionFormComponent implements OnInit {
  artisanForm !: FormGroup;
  constructor(private formBuilder: FormBuilder ,private router: Router,private  liste :AuthentificationServiceService  ) { }

  ngOnInit(): void {
    this.artisanForm = this.formBuilder.group({
      nom: [null],
      prenom: [null],
      email: [null],
      motdepass: [null],

    });

  }
  onSubmitForm() {
   
     this.liste.ajouterUserProfil(this.artisanForm.value).subscribe();
    // this.router.navigateByUrl('/connexion');
  }
 
}
