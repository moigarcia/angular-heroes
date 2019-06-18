import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  @Input() heroe:any = {};
  @Input() index: number;
  
  heroes: any[] = [];
  termino: string;

  constructor( private activateRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router,           
    ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.searchHeroe(params['termino']);
    })
  }
  verHeroe() {
    this.router.navigate( ['/heroe', this.index])
    console.log(this.index)
   }
}
