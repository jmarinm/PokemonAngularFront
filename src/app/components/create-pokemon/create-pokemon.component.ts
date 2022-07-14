import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit {


  form = new FormGroup({
    name: new FormControl('', Validators.required),
    generation: new FormControl('',Validators.required),
    personality: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
  })
  constructor(private pokemonService: PokemonService) { }


  ngOnInit(): void {
  }

  createPokemon(){
    this.pokemonService.createPokemon(this.form.value).subscribe(response=>{
      this.resetForm();
    })
  }

  resetForm(){
    this.form.reset();
  }
}
