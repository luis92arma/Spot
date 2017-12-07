import { Injectable } from '@angular/core';
//import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/';
  token:string = 'BQDE2yL4WknQnASP5Zqn6W6e55zbzxvJjk7jXneaWPNRY75whqb8_Zf7llYNCLvfZ_fBYqsGITKlZsQOn1PztcsrhvK3gCvNaCFfqO06zj3vfkXQoad5M90E1nxDjLOvaOuYVt8LBoi5VU_SxjfSR4q21WJVHrCIKPI_tNNJPM5RTb5aFbOw5G-_5Hy868PRpPoOL0sM-I5HonZrRLZjSL7YTShmckTYpsTClplQ_kdVQbng9NROUC7sl1W73AwFCoKKyeQG'

  constructor(public http: HttpClient){

  }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'authorization': 'Bearer '+ this.token
    });

    return headers;
  }

  getAristas(termino:string){
    let url:string = `${this.urlSpotify}search?query=${ termino }&type=artist`;

    let headers = this.getHeaders();

    this.http.get(url, {headers})

    return this.http.get(url, {headers}).map(
      (resp:any) =>{
        this.artistas = resp.artists.items;
        return this.artistas;
      }
    );
  }

  getArtista(id:string){
    let url:string = `${this.urlSpotify}artists/${id}`;

    let headers = this.getHeaders();

    this.http.get(url, {headers})

    return this.http.get(url, {headers});
    // .map(
    //   (resp:any) =>{
    //     this.artistas = resp.artists.items;
    //     return this.artistas;
    //   }
    // );

  }

  getTop(id:string){
    let url:string = `${this.urlSpotify}artists/${id}/top-tracks?country=es`;
    let headers = this.getHeaders();
    return this.http.get(url, {headers});
  }

  // AUT:string = 'Bearer BQBYJM2oGctqZJd2-rUmZXMfc1ST6NPWp6MDKwm1wJzZEVrbNpe1vU11pV_pgBpFW4QWQp33OSmfbWO8W3KGGMzTD9LIx7kxpdh9y2MGjhzLZq9s35NWKiKoMz-OYV2MGEOQN3i5ZDgVue5AlkEJKPACDCCq9i9CX59xp7DIza-T2_EV3f-bOKGzC_A2yeppQ6nwsaEpJagwhTM7j5UunSnbI8UA5JjbnZu9N7fKG9g7UzCDs4xyd0dqtMJlFhja5GOmFmWf';
  // artsitas:any[]=[];
  // urlSearch:string = 'https://api.spotify.com/v1/search';
  //
  // constructor(private http:Http) { }
  //
  // getAristas(termino:string){
  //   let headers = new Headers();
  //   headers.append('authorization', this.AUT);
  //   let query = `?q=${termino}&type=artist`;
  //   let url = this.urlSearch+query;
  //   console.log(url);
  //   return this.http.get(url, {headers}).map(
  //     res=>{
  //       //console.log(res.json().artists.items);
  //       this.artsitas = res.json().artists.items;
  //       console.log(this.artsitas);
  //       //return this.artsitas;
  //     }
  //   )
  // }

}
