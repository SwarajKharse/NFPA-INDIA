import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cartService/cart.services'; // Correct path to the service

@Component({
  selector: 'app-fire-door',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fire-door.component.html',
  styleUrl: '../fire-styles.css'
})
export class FireDoorComponent {
  products = [
    {
      id: 1,
      name: 'Fire Doors',
      image: 'Fire-Door.webp',
      description: 'Fire doors are critical safety components in buildings, designed to prevent the spread of fire and smoke between different sections of a structure. These doors are constructed from fire-resistant materials and are engineered to remain closed during a fire, creating barriers that help contain the fire and protect escape routes. Fire doors are typically rated based on the duration they can withstand fire exposure, contributing significantly to building safety and occupant protection.',
      showFeatures: false,
      features: [
        'Constructed from fire-resistant materials',
        'Designed to prevent the spread of fire and smoke',
        'Typically rated for specific fire resistance durations (e.g., 30, 60, 90 minutes)',
        'Equipped with self-closing mechanisms',
        'Essential for maintaining safe escape routes and compartmentalizing fire'
      ]
    }
  ];

  toggleAdditionalFeatures(product: any) {
    product.showFeatures = !product.showFeatures;
  }

  constructor(private cartService: CartService) {}

  addProductToCart(productName: string) {
    this.cartService.addProduct(productName);
    console.log('Products in cart:', this.cartService.getProducts());
  }
}
