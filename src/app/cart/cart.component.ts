import { Component, OnInit } from '@angular/core';
// El servicio de Angular FormBuilder proporciona los métodos para crear los controladores para el pago.
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items;
  // propiedad checkoutForm para almacenar el modelo del formulario.
  checkoutForm;

  constructor(
    private cartService: CartService,
    // módulo ReactiveFormsModule proporciona el servicio FormBuilder, ya ha importado AppModule
    private formBuilder: FormBuilder
  ) {
    // capturar el nombre y la dirección del usuario, configura la propiedad checkoutForm usando el método group() de FormBuilder a un formulario que contenga los campos name y addess.
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  // método onSubmit() para procesar el formulario

  onSubmit(customerData) {
    // Process checkout data here
    // método clearCart() de CartService para eliminar los elementos del carrito y restaurar el formulario después de enviarlo.
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
