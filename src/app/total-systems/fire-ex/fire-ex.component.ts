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
  selector: 'app-fire-ex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fire-ex.component.html',
  styleUrl: '../fire-styles.css'
})
export class FireExComponent {
  products = [
    {
      id: 1,
      name: 'Dry Powder Fire Extinguisher',
      image: 'Dry-FE.webp',
      description: 'Dry powder fire extinguishers are versatile and effective fire suppression tools suitable for fighting Class A (ordinary combustibles), Class B (flammable liquids), and Class C (electrical equipment) fires. They use a fine powder, typically Mono Ammonium Phosphate (MAP), to smother the flames and interrupt the chemical reaction of the fire. These extinguishers are known for their multipurpose capabilities and are widely used in various environments, from homes and offices to industrial settings.',
      showFeatures: false,
      features: [
        'Contains MAP (Mono Ammonium Phosphate) powder',
        'Suitable to fight all three classes of fire (A, B, & C), hence known as a multipurpose fire extinguisher',
        'Also available in stainless steel',
        '<b>Ideal uses:</b> homes, offices, shops, warehouses, farms, and woodworking areas'
      ],
      addedToCart: false
    },
    {
      id: 2,
      name: 'CO2 Fire Extinguisher',
      image: 'CO2-FE.webp',
      description: 'CO2 fire extinguishers use pressurized carbon dioxide to extinguish fires by displacing oxygen and cooling the burning material. They are particularly effective against Class B (flammable liquids) and Class C (electrical) fires. CO2 extinguishers leave no residue, making them ideal for areas with sensitive equipment.',
      showFeatures: false,
      features: [
        'Contain pressurized liquid carbon dioxide, which turns to gas when expelled',
        'Does not leave residue after use',
        'Discharged as a white cloud of "snow" which smothers a fire by eliminating oxygen',
        'Effective for Class B and C flammable liquids and is electrically non-conductive',
        'Carbon Dioxide is a clean, non-contaminating, odorless gas',
        '<b>Ideal uses:</b> Chemical and manufacturing plants, oil rigs, rail yards, warehouses, construction sites, parking garages, airport ramps, boat docks, and large laboratories.'
      ],
      addedToCart: false
    },
    {
      id: 3,
      name: 'Water Fire Extinguisher',
      image: 'Water-FE.webp',
      description: 'Water fire extinguishers are designed to combat Class A fires involving ordinary combustibles such as wood, paper, and textiles. They work by cooling the burning material, which helps to extinguish the fire and prevent re-ignition. These extinguishers are simple to use and environmentally friendly, making them suitable for use in schools, offices, and public buildings where Class A fire risks are prevalent.',
      showFeatures: false,
      features: [
        'Filled with water and super pressurized with nitrogen',
        'Suitable for Class A fires',
        'Environmentally friendly and leaves no chemical residue',
        '<b>Ideal uses:</b> Schools, Theatres, Department & retail stores'
      ],
      addedToCart: false
    },
    {
      id: 4,
      name: 'Foam Fire Extinguisher',
      image: 'Foam-FE.webp',
      description: 'Foam fire extinguishers are effective against Class A (ordinary combustibles) and Class B (flammable liquids) fires. They work by forming a blanket of foam over the burning material, which cools the fire and cuts off the oxygen supply, thereby smothering the flames. Foam extinguishers are widely used in environments where flammable liquids are present, such as garages, workshops, and fuel storage areas.',
      showFeatures: false,
      features: [
        'Contains Aqueous Film Forming Foam concentrate (AFFF)',
        'Suitable for Class A and Class B fires',
        'Forms a blanket over the fire to smother flames and cool the burning material',
        '<b>Ideal uses:</b> Oil & fuel warehouses, Fuel Pumps, Factories etc.'
      ],
      addedToCart: false
    },
    {
      id: 5,
      name: 'Wet Chemical Fire Extinguisher',
      image: 'Wet-Chemical-FE.webp',
      description: 'Wet chemical fire extinguishers are specifically designed to tackle Class K fires involving cooking oils and fats. The extinguisher uses a special liquid agent that reacts with the burning oil to form a soapy layer, effectively smothering the fire and preventing re-ignition. Wet chemical extinguishers are essential for commercial kitchens and food service establishments where grease fires are a common risk.',
      showFeatures: false,
      features: [
        'Contains a special wet chemical agent',
        'Highly effective on Class K (cooking oil and fat) fires',
        'Forms a soapy layer to smother and cool the fire',
        'Essential for commercial kitchens and food service areas',
        'Also suitable for Class A fires involving solid combustibles'
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
