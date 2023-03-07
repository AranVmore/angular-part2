import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // definimos propiedad para almacenar los productos en el carrito
  items = [];

  // agrega el producto a la matriz de elementos
  addToCart(product) {
    this.items.push(product);
  }
  // recopila los productos para agregarlos al carrito y devuleve la cantidad asociada a ellos
  getItems() {
    return this.items;
  }
  // devuelve la matriz vacía de elementos
  clearCart() {
    this.items = [];
    return this.items;
  }
  // método getShippingPrices() usa el método HttpClient get() para recuperar los datos de envío.
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  constructor(private http: HttpClient) {}
}
