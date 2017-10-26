import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  AUT:string = 'Bearer BQB-Z4A8n45hkkrK36FaeANtafLiitnhszv0ZF-EZYmMJtcSP0YUFYnjiayH4SRwg6pG7vY5Pm5Vj2AB2H3B8Q';
  artsitas:any[]=[];
  urlSearch:string = 'https://api.spotify.com/v1/search';

  constructor(private http:Http) { }

  getAristas(termino:string){
    let headers = new Headers();
    headers.append('authorization', this.AUT);
    let query = `?q=${termino}&type=artist`;
    let url = this.urlSearch+query;
    console.log(url);
    return this.http.get(url, {headers}).map(
      res=>{
        //console.log(res.json().artists.items);
        this.artsitas = res.json().artists.items;
        console.log(this.artsitas);
        //return this.artsitas;
      }
    )
  }

}
