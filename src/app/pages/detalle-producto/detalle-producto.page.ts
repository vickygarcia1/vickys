import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIA } from 'src/app/core/interfaces/constants/categoria';
import { Producto } from 'src/app/core/interfaces/poducto';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage {

  constructor(
    private activatedRoute: ActivatedRoute,
    public cartService:CartService
    ) {
    activatedRoute.params.subscribe(params => {
      console.log(params)
      this.buscarProducto(params['nombre']);
    })
  }
cantidad=1;

  producto:Producto = {
    imagen: 'kkkk',
    nombre: 'nombre producto',
    descripcion: 'descripcion',
    precio: 500
  }


  buscarProducto(nombreProductoABuscar: string) {
    for (let i = 0; i < CATEGORIA.length; i++) {
      const categoriaActual = CATEGORIA[i];
      for (let j = 0; j < categoriaActual.producto.length; j++) {
        const productoActual = categoriaActual.producto[j];
        if (productoActual.nombre === nombreProductoABuscar){
          this.producto = productoActual
      }
    }

  }
}

}