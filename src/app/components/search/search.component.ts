import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  termino:string = " ";

  constructor(public _spotifyService: SpotifyService) {
  }

  buscarArtista(){
    if(this.termino.length == 0){
      return;
    }
    this._spotifyService.getAristas(this.termino).subscribe(
      data =>{
        console.log(data)
      }
    )
  }

  ngOnInit() {
    //this._spotifyService.getAristas('metallica').subscribe();
  }

  // buscarArtista(){
  //   console.log(this.termino)
  //   this._spotifyService.getAristas(this.termino).subscribe();
  // }

}
