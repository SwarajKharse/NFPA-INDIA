import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-architect-interior',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './architect-interior.component.html',
  styleUrl: '../sol-style.css'
})
export class ArchitectInteriorComponent {
  brochures = [
    {
      id: 1,
      name: 'NFPA Brochure',
      description: 'Download the NFPA Interior-Architect Solutions brochure.',
      imageFront: 'NFPA Hand Bill Front.webp',
      imageBack: 'NFPA Hand Bill Back.webp',
      file: 'NFPA Brochure.pdf'
    }
    // Add more brochures as needed
  ];
}
