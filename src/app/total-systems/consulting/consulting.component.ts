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

  addProductToCart(event: Event, productName: string) {
    const buttonElement = (event.target as HTMLElement).closest('button');

    // Check if the product is already in the cart
    if (buttonElement && buttonElement.innerText.trim() === 'Add To Cart For Enquiry') {
      this.cartService.addProduct(productName);
      buttonElement.innerText = 'Added';
      console.log('Products in cart:', this.cartService.getProducts());
    }
  }
}
