import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @ViewChild('filterDiv') filterHtml!: ElementRef;

  private filter: boolean = false;

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
  }

  filterClass(){
    this.filter = !this.filter;

    const asFilter: HTMLElement = this.filterHtml.nativeElement;

    if(this.filter){
      this.removeClass(asFilter, ['hidden', 'bg-fade-out', 'modal-scale-out']);
      this.addClass(asFilter, ['bg-fade-in', 'modal-scale-in']);
    }
    else{
      this.removeClass(asFilter, ['bg-fade-in', 'modal-scale-in']);
      this.addClass(asFilter, ['bg-fade-out', 'modal-scale-out']);
      setTimeout(() => {
        this.renderer2.addClass(asFilter, 'hidden');
      }, 500);
    }
  }

  addClass(element: HTMLElement, className: string[]){
    className.forEach((className: string) => {
      this.renderer2.addClass(element, className);
    });
  }

  removeClass(element: HTMLElement, className: string[]){
    className.forEach((className: string) => {
      this.renderer2.removeClass(element, className);
    });
  }
}
