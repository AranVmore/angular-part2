import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product;

  // este método: recibe el producto actual, lo agrega al carrito y muestra un mensaje de éxito
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  // Los parámetros de la ruta corresponden a las variables de ruta (path) que se define en la ruta. La URL que coincide con la ruta proporciona el productId. Angular usa el productId para mostrar los detalles de cada producto único.
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.product = products[+params.get('productId')];
    });
  }
}
