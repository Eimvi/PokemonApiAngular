import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private option: Subject<string> = new Subject<string>();
  constructor() { }

  public options: Observable<string> = this.option.asObservable();

  searchPokemon(option: string){
    this.option.next(option);
  }
}
