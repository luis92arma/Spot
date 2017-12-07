import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes';

//services
import { SpotifyService } from './service/spotify.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { GenresPipe } from './pipes/genres.pipe';
import { ArtistComponent } from './components/artist/artist.component';
import { SinaudioPipe } from './pipes/sinaudio.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    GenresPipe,
    ArtistComponent,
    SinaudioPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
