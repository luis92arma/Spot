import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  AUT:string = 'BQDLvUQBEBzXz4BPZwv8DPNfOl9eW8uyKpb_0b4vNGqlX48vXeRICcep941ZlSf0PWOxUtjXGP7an57JH66bQFqIzbG6PLCrfKB62xonYKntJMuvj-QMpo7Uq6Uj7XbFuZdEiBFrOttp';
  artsitas:any[]=[];
  urlSearch:string = 'https://api.spotify.com/v1/search';

  constructor(private http:Http) { }

  getAristas(termino:string){
    let acept = ` -H "Accept: application/json" -H "Authorization: ${this.AUT}"`
    let query = `q=${termino}&type=artist`;
    let url = `${this.urlSearch}${query}${acept}`;
    console.log(url);

    return this.http.get(url).map(
      res=>{
        console.log(res);
      }
    )
  }

}
