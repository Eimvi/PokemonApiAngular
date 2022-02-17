import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  private subscription: Subscription = new Subscription();
  loading: boolean = true;

  constructor(private rutaActiva: ActivatedRoute, private pokemonService: PokemonService) { }

  namePokemon: string = '';
  pokemonDetails!: Pokemon;
  hp: number = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.namePokemon = this.rutaActiva.snapshot.params.pokemon;
    this.getPokemon(this.namePokemon)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getPokemon(pokemonName: string){
    this.subscription.add(
      this.pokemonService.getPokemon(pokemonName)
      .subscribe((pokemon) => {
        this.pokemonDetails = {
          id: pokemon.body.pokemon.id,
          base_experience: pokemon.body.pokemon.base_experience,
          height: pokemon.body.pokemon.height,
          name: pokemon.body.pokemon.name,
          sprites: pokemon.body.pokemon.sprites,
          stats: pokemon.body.pokemon.stats,
          types: pokemon.body.pokemon.types,
          weight: pokemon.body.pokemon.weight
        };
        this.loading = false;
      })
    )
  }
}
