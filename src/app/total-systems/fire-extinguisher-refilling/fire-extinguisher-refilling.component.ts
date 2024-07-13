import { Component } from '@angular/core';
import { CartService } from '../cartService/cart.services';

@Component({
  selector: 'app-fire-extinguisher-refilling',
  standalone: true,
  imports: [],
  templateUrl: './fire-extinguisher-refilling.component.html',
  styleUrl: './fire-extinguisher-refilling.component.css'
})
export class FireExtinguisherRefillingComponent {
  constructor(private cartService: CartService) {}

  addProductToCart(productName: string) {
    this.cartService.addProduct(productName);
    console.log('Products in cart:', this.cartService.getProducts());
  }

}
