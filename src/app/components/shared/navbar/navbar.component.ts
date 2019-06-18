import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  heroes: any = {};

  constructor( 
               private _heroesServices: HeroesService,
               private router:Router
    ) { 

  }
  ngOnInit() {

  }

  buscarHeroe( termino:string ){
    this.router.navigate(['/search', termino])
    console.log(termino)
  }

}
