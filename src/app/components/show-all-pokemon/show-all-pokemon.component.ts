import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'show-all-pokemon',
  templateUrl: './show-all-pokemon.component.html',
  styleUrls: ['./show-all-pokemon.component.css']
})
export class ShowAllPokemonComponent implements OnInit {

  pokemons: any = {};

  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  buscarPokemons(){
    this.pokemonService.getAllPokemon().subscribe( result => {
      this.pokemons = result.search;
    })
  }
}
