import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatePokemonComponent } from './components/create-pokemon/create-pokemon.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { ShowAllPokemonComponent } from './components/show-all-pokemon/show-all-pokemon.component';

const routes: Routes = [
  {
    path: 'show-all',
    component:  ShowAllPokemonComponent
  },
  {
    path: 'show-one',
    component: SearchPokemonComponent
  },
  {
    path: 'create',
    component: CreatePokemonComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
