 import { NgModule } from '@angular/core';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtisanListComponent } from './components/artisan-list/artisan-list.component';
import { ArtisanComponent } from './components/artisan/artisan.component';
import { InscriptionFormComponent } from './components/inscription-form/inscription-form.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './components/login/login.component';
import { ListServiceComponent } from './components/list-service/list-service.component';
import { ListBesoinsComponent } from './components/list-besoins/list-besoins.component';
import { OffreComponent } from './components/offre/offre.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtisanListComponent,
    ArtisanComponent,
    InscriptionFormComponent,
    ContactComponent,
    LoginComponent,
    ListServiceComponent,
    ListBesoinsComponent,
    OffreComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
