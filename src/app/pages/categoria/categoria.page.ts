import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CATEGORIA } from 'src/app/core/interfaces/constants/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
  
  categoria:Categoria | undefined;

  constructor(
    private activatedRoute : ActivatedRoute
  ) { 
    activatedRoute.params.subscribe(params => {
      this.categoria = CATEGORIA.find(categoria => categoria.nombre === params['nombre'])
    })
  }

  ngOnInit() {
  }

}
