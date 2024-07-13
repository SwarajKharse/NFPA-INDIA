import { Component } from '@angular/core';
import { CartService } from '../cartService/cart.services';
import { OurTeamComponent } from '../our-team/our-team.component';

@Component({
  selector: 'app-licensing',
  standalone: true,
  imports: [OurTeamComponent],
  templateUrl: './licensing.component.html',
  styleUrl: './licensing.component.css'
})
export class LicensingComponent {
  constructor(private cartService: CartService) {}

  addProductToCart(productName: string) {
    this.cartService.addProduct(productName);
    console.log('Products in cart:', this.cartService.getProducts());
  }
}
