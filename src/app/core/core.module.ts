import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componant/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

  ],
  exports: [
    HeaderComponent,

  ]
  
})
export class CoreModule { }
