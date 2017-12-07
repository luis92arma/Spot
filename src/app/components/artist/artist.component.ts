import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../service/spotify.service';
//import { SinfotoPipe } from '../../pipes/sinfoto.pipe';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artista:any = {};
  top:any = [];

  constructor(
    private activateRoute: ActivatedRoute,
    public _spoty: SpotifyService
  ) { }

  ngOnInit() {
    this.activateRoute.params
    .map(params => params.id)
    .subscribe(
      id =>{
        //console.log(id);
        this._spoty.getArtista(id).subscribe(
          artista =>{
            this.artista = artista;
            console.log(this.artista);
          }
        )
        this._spoty.getTop(id).map((res:any) => res.tracks)
        .subscribe(
          top =>{
            this.top = top;
            console.log(this.top)
          }
        )
      }
    )
  }

}
