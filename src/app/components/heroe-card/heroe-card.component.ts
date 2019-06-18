import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
})
export class HeroeCardComponent  {
  @Input() heroe:any = {};
  @Input() index: number;
  
  @Output() heroeSelect: EventEmitter<number>;

  constructor( private router:Router) { 
    this.heroeSelect = new EventEmitter();
  }

   verHeroe() {
   this.router.navigate(['/heroe', this.index])
   }
}
