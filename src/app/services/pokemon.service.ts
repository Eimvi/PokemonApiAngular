import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { PokemonsApi } from '../interfaces/pokemons.interface';
import { PokemonApi } from '../interfaces/pokemon.interface';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokemonsApi>{
    return this.http.get<PokemonsApi>(`${this.url}pokemons/`);
  }

  getPokemon(pokemon: string): Observable<PokemonApi>{
    return this.http.get<PokemonApi>(`${this.url}pokemon/${pokemon}`);
  }

  getPokemonByName(pokemon: string): Observable<PokemonsApi>{
    return this.http.get<PokemonsApi>(`${this.url}pokemonByName/${pokemon}`);
  }

  getPokemonsPag(offset: number, limit:number = 40){
    return this.http.get<PokemonsApi>(`https://pokeapi.co/api/v2/pokemon?offset=${offset * 40}&limit=${limit}`);
  }
}
