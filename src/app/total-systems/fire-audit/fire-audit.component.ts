import { Component } from '@angular/core';
import { CartService } from '../cartService/cart.services';

@Component({
  selector: 'app-fire-audit',
  standalone: true,
  imports: [],
  templateUrl: './fire-audit.component.html',
  styleUrl: './fire-audit.component.css'
})
export class FireAuditComponent {
  constructor(private cartService: CartService) {}

  addProductToCart(productName: string) {
    this.cartService.addProduct(productName);
    console.log('Products in cart:', this.cartService.getProducts());
  }

}
