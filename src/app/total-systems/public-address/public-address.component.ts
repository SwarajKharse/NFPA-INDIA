import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cartService/cart.services'; // Correct path to the service

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  showFeatures: boolean;
  features: string[];
  addedToCart?: boolean;
}

@Component({
  selector: 'app-public-address',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './public-address.component.html',
  styleUrl: '../fire-styles.css'
})
export class PublicAddressComponent {
  products = [
    {
      id: 1,
      name: 'Public Address System',
      image: 'Public-Address.webp',
      description: 'A Public Address (PA) System is an essential safety communication tool designed to deliver clear and immediate emergency messages during a fire incident. These systems enable authorities to broadcast live or pre-recorded messages throughout a building or facility, ensuring occupants are informed and directed safely during an evacuation. The PA System is integrated with fire detection and alarm systems, automatically activating to provide critical instructions when a fire is detected. It is a crucial component in enhancing the overall fire safety and emergency response strategy of any building.',
      showFeatures: false,
      features: [
        'Integrated with fire detection and alarm systems',
        'Delivers clear and immediate emergency messages',
        'Broadcasts live or pre-recorded instructions',
        'Ensures effective communication during evacuations',
        'Enhances overall fire safety and emergency response strategies'
      ],
      addedToCart: false
    }
  ];

  toggleAdditionalFeatures(product: any) {
    product.showFeatures = !product.showFeatures;
  }

  constructor(private cartService: CartService) {}

  addProductToCart(product: Product) {
    if (!product.addedToCart) {
      this.cartService.addProduct(product.name);
      product.addedToCart = true;
      console.log('Products in cart:', this.cartService.getProducts());
    }
  }
}
