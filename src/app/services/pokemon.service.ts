import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  API = 'https://shark.ontrack.global/pokeapi';

  constructor( private http: HttpClient) { }

  public getAllPokemon(): Observable<any> {
    return this.http.get(this.API+'/pokemon');
  }

  public getPokemonByName(name: string): Observable<any> {
    return this.http.get(this.API+'/pokemon/name/'+name);
  }
  
  public createPokemon(pokemon: any): Observable<any>{
    return this.http.post(this.API+'/pokemon',pokemon, {responseType: "text"});
  }
}
