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
  selector: 'app-fire-sign',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fire-sign.component.html',
  styleUrl: '../fire-styles.css'
})
export class FireSignComponent {
  products = [
    {
      id: 1,
      name: 'Fire Signages',
      image: 'Fire-Signage.webp',
      description: 'Fire signages are essential visual aids designed to guide and inform building occupants about fire safety measures, evacuation routes, and the location of firefighting equipment. These signs are strategically placed throughout buildings to ensure that occupants can quickly and easily locate exits, fire extinguishers, fire hoses, and other critical safety tools during an emergency. Fire signages play a crucial role in enhancing the safety and preparedness of building occupants.',
      showFeatures: false,
      features: [
        'Provides clear guidance on evacuation routes',
        'Indicates the location of firefighting equipment',
        'Strategically placed for maximum visibility',
        'Enhances safety and preparedness during emergencies',
        'Conforms to safety regulations and standards'
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
