import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: string[] = [];

  constructor() {
    // Clear the products array on reload
    window.addEventListener('beforeunload', () => {
      this.products = [];
    });
  }

  addProduct(productName: string) {
    if (!this.products.includes(productName)) {
      this.products.push(productName);
    }
  }

  getProducts() {
    return this.products;
  }
}
