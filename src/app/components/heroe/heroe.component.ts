import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent  {
  
  heroe: any = {};

  constructor( private activateRoute: ActivatedRoute,
               private _heroesServices: HeroesService
    
    ) { 
    this.activateRoute.params.subscribe( params => {
      this.heroe = this._heroesServices.getHeroe( params['id']);
    })
  }

 

}
