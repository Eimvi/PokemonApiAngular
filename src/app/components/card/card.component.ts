import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemons.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() pokemonData!: Pokemon;

}
