import { Component } from '@angular/core';
import { CartService } from '../cartService/cart.services';

@Component({
  selector: 'app-consulting',
  standalone: true,
  imports: [],
  templateUrl: './consulting.component.html',
  styleUrl: './consulting.component.css'
})
export class ConsultingComponent {
  constructor(private cartService: CartService) {}

  addProductToCart(productName: string) {
    this.cartService.addProduct(productName);
    console.log('Products in cart:', this.cartService.getProducts());
  }
}
