import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'buscar', component: SearchComponent},
  {path: 'artist/:id', component: ArtistComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
