import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-residential-buildings',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './residential-buildings.component.html',
  styleUrl: '../sol-style.css'
})

export class ResidentialBuildingsComponent {
  solutions = [
    {
      id: 1,
      name: 'Fire Extinguishers',
      description: 'Fire extinguishers and cabinets are essential fire safety equipment, ready to combat small fires before they escalate. They provide a quick and accessible way to extinguish flames, especially crucial in the initial moments of a fire.',
      image: 'FE1.webp',
      link: '/total-systems/Extinguishers'
    },
    {
      id: 2,
      name: 'Fire Sprinkler Systems',
      description: 'Fire sprinkler systems act as an automatic fire suppression system, providing a critical layer of protection in buildings. A network of pipes filled with water reaches throughout the structure, with sprinkler heads strategically placed at intervals.',
      image: 'Sprinkler.webp',
      link: '/total-systems/Sprinkler-System'
    },
    {
      id: 3,
      name: 'Fire Hydrant System',
      description: 'Fire Hydrant System are the muscle behind water-based fire protection systems in buildings, especially high-rises and facilities with complex fire suppression needs. They act as pressure boosters, taking water from a municipal supply, reservoir, or tank and significantly increasing its pressure.',
      image: 'Fire Pump.webp',
      link: '/total-systems/Hydrant-System'
    }
  ];

  services = [
    {
      id: 1,
      name: 'Annual Maintenance Contracts(AMCs)',
      description: 'An Annual Maintenance Contract (AMC) for fire safety systems...',
      image: 'AMC.webp',
      link: '/total-systems/AMC'
    },
    {
      id: 2,
      name: 'Fire Fighting Audits',
      description: 'Fire audits are thorough evaluations of a building\'s fire safety measures...',
      image: 'Fire-Audit.webp',
      link: '/total-systems/Audit'
    },
    {
      id: 3,
      name: 'Basic Fire Fighting Training',
      description: 'Basic Fire Fighting Training is an essential program designed...',
      image: 'FTraining.webp',
      link: '/total-systems/Training'
    },
    {
      id: 4,
      name: 'Fire Extinguisher Refilling',
      description: 'Fire Extinguisher Refilling is a crucial maintenance service...',
      image: 'FERefill.webp',
      link: '/total-systems/Refill'
    },
    {
      id: 5,
      name: 'Fire Fighting Licensing (NOC)',
      description: 'Fire Fighting Licensing (NOC) is a critical regulatory process...',
      image: 'NOC.webp',
      link: '/total-systems/Licensing'
    }
  ];
}


