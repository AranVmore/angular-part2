import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

// el decorador @ nos indica que la clase es un componente
// 'selector' es el nombre que Angular le da, empezando por el prefijo 'app'
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
// definimos propiedad 'product' con un decorador
// @Input() indica que el valor de la propiedad pasa desde el padre del componente de lista productos
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  // creamos una propiedad 'notify' con decorador 'Output' e instancia EventEmitter
  // permite que el comentente product-alert emita el evento al cambiar el valor de 'notify'
  @Output() notify = new EventEmitter();

  constructor() {}
  ngOnInit() {}
}

// Esta carpeta y sus componentes han sido creados directamente presionando btn.drch raton (en carpeta app)
//-> angular generator -> component
