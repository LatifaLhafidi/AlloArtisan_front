import { Component,OnInit } from '@angular/core';
import { UserProfil } from '../../core/modeles/userProfil';
import { ListArtisanService } from '../../core/services/list-artisan.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-artisan-list',
  templateUrl: './artisan-list.component.html',
  styleUrls: ['./artisan-list.component.css']
})
export class ArtisanListComponent implements OnInit {

 artisan$!: Observable<UserProfil[]>;


 constructor(private listArtisanService :ListArtisanService){ }

  ngOnInit() : void {
 // this.artisan$=this.listArtisanService.getAllArtisan();
  this.artisan$=this.listArtisanService.getAllArtisan();
}

}
