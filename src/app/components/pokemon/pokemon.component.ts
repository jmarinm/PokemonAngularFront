import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.pokemon)
  }

}
