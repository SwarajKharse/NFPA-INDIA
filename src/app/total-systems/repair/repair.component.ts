import { Component } from '@angular/core';
import { CartService } from '../cartService/cart.services';
import { OurTeamComponent } from '../our-team/our-team.component';

@Component({
  selector: 'app-repair',
  standalone: true,
  imports: [OurTeamComponent],
  templateUrl: './repair.component.html',
  styleUrl: './repair.component.css'
})
export class RepairComponent {
  constructor(private cartService: CartService) {}

  addProductToCart(productName: string) {
    this.cartService.addProduct(productName);
    console.log('Products in cart:', this.cartService.getProducts());
  }

}
