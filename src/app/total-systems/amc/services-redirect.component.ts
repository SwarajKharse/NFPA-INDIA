import { Component } from '@angular/core';
import { CartService } from '../cartService/cart.services';
import { OurTeamComponent } from '../our-team/our-team.component';

@Component({
  selector: 'app-services-redirect',
  standalone: true,
  imports: [OurTeamComponent],
  templateUrl: './services-redirect.component.html',
  styleUrl: './services-redirect.component.css'
})
export class ServicesRedirectComponent {
  constructor(private cartService: CartService) {}

  addProductToCart(productName: string) {
    this.cartService.addProduct(productName);
    console.log('Products in cart:', this.cartService.getProducts());
  }

}
