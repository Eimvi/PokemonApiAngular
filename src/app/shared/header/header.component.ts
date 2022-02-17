import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public pokemon:string = '';
  constructor(private search: SearchService) { }

  ngOnInit(): void {
  }

  values(){
    this.search.searchPokemon(this.pokemon);
  }
}
