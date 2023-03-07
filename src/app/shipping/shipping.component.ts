import { Component, OnInit } from '@angular/core';
// Import the cart service.
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  // Define a shippingCosts property.
  shippingCosts;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
