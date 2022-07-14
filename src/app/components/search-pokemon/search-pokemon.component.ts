import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  pokemon: any;

  constructor( private pokemonService: PokemonService) { }

  form = new FormGroup({
    pokeID: new FormControl(''),
  });

  ngOnInit(): void {
  }

  get getName(): any {
    return this.form.value.pokeID;
  }
  buscarPokemon(){
    this.pokemonService.getPokemonByName(this.getName).subscribe(response=>{
      this.pokemon = response.search
    })
  }

}
