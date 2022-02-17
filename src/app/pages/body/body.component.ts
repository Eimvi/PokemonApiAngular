import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import { Body } from '../../interfaces/pokemons.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  private subscription: Subscription = new Subscription();

  loading: boolean = true;
  pokemons!: Body;

  ruta!: number;


  constructor(private pokemonService: PokemonService, private search: SearchService) { }

  ngOnInit(): void {
    /*this.ruta = parseInt(this.activeRoute.snapshot.params.pag);

    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.ruta = parseInt(params.pag);
      }
    );*/

    this.search.options
      .subscribe(value => {
        this.getPokemonByName(value);
      });

      this.getAllPokemons();
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }

  pagination(numPag: number){

    /*if(this.ruta > 0)
      numPag = 10

    this.router.navigate([`home/${numPag}`])*/
    //this.pokemons.pokemons = []
  }

  getAllPokemons(){
    this.subscription.add(
      this.pokemonService.getPokemons()
      .subscribe((pokemonApi) => {
        this.pokemons = pokemonApi.body;
        this.loading = false;
      })
    )
  }

  getPokemonByName(name: string){
    this.subscription.add(
      this.pokemonService.getPokemonByName(name)
        .subscribe((pokemonApi) => {
          this.pokemons = pokemonApi.body;
        })
    )
  }

}
