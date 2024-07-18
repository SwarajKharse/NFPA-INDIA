import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-commercial-buildings',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './commercial-buildings.component.html',
  styleUrl: '../sol-style.css'
})
export class CommercialBuildingsComponent {
  solutions = [
    {
      id: 1,
      name: 'Fire Extinguishers ',
      description: 'Fire extinguishers and cabinets are essential fire safety equipment, ready to combat small fires before they escalate. They provide a quick and accessible way to extinguish flames, especially crucial in the initial moments of a fire.',
      image: 'FE1.webp',
      link: '/total-systems/Extinguishers'
    },
    {
      id: 2,
      name: 'Fire Detection Systems',
      description: 'Fire detection systems are the backbone of any fire safety plan, serving as the first line of defense in alerting occupants of potential danger. They play a critical role in ensuring timely evacuation and minimizing risks during a fire emergency.',
      image: 'Alarm-system.webp',
      link: '/total-systems/Detection-System'
    },
    {
      id: 3,
      name: 'Fire Sprinkler Systems',
      description: 'Fire sprinkler systems act as an automatic fire suppression system, providing a critical layer of protection in buildings. A network of pipes filled with water reaches throughout the structure, with sprinkler heads strategically placed at intervals.',
      image: 'Sprinkler.webp',
      link: '/total-systems/Sprinkler-System'
    },
    {
      id: 4,
      name: 'Fire Hydrant System',
      description: 'Fire Hydrant System are the muscle behind water-based fire protection systems in buildings, especially high-rises and facilities with complex fire suppression needs. They act as pressure boosters, taking water from a municipal supply, reservoir, or tank and significantly increasing its pressure.',
      image: 'Fire Pump.webp',
      link: '/total-systems/Hydrant-System'
    },
    {
      id:5,
      name: 'Clean Agent Fire Suppression Systems',
      description: 'Clean Agent Fire Suppression Systems are advanced fire protection solutions designed for areas where water-based systems could cause significant damage. They use environmentally friendly gases to quickly suppress fires without leaving residue, making them ideal for protecting sensitive equipment and valuable assets in data centers, museums, and electrical rooms.',
      image: 'Suppression.webp',
      link: '/total-systems/Suppression-System'
    },
    {
      id:6,
      name: 'Gas Leak Detection Systems',
      description: 'Gas Leak Detection Systems are crucial safety components in industrial and residential settings where flammable or toxic gases are present. These systems continuously monitor the air for dangerous gas concentrations, providing early warnings to prevent explosions, fires, or health hazards in environments such as chemical plants, oil refineries, and homes with natural gas appliances.',
      image: 'GasSensor.webp',
      link: '/total-systems/Hydrant-System'
    },
    {
      id: 7,
      name: 'Electrical Panel Suppression System',
      description: 'Fire suppression systems form a crucial line of defense in buildings, employing various technologies to extinguish flames and protect lives. Fire alarms with smoke and heat detectors trigger early warnings, while automatic sprinkler systems douse flames with water.',
      image: 'electric-carousel-1.webp',
      link: '/total-systems/Suppression-System'
    }
  ];

  services = [
    {
      id: 1,
      name: 'Annual Maintenance Contracts(AMCs)',
      description: 'An Annual Maintenance Contract (AMC) for fire safety systems is a comprehensive service agreement designed to ensure the continued reliability and effectiveness of a building\'s fire protection systems.',
      image: 'AMC.webp',
      link: '/total-systems/AMC'
    },
    {
      id: 2,
      name: 'Fire Fighting Audits',
      description: 'Fire fighting audits are thorough evaluations of a building\'s fire safety measures, conducted to ensure compliance with fire safety regulations and to identify potential risks. These audits involve a detailed inspection of all fire protection systems, such as fire alarms, sprinkler systems, fire extinguishers, and emergency exits.',
      image: 'Fire-Audit.webp',
      link: '/total-systems/Audit'
    },
    {
      id: 3,
      name: 'Basic and Advanced Fire Fighting & First Aid Training',
      description: 'Basic and Advanced Fire Fighting & First Aid Training is an essential program designed to equip individuals with fundamental skills and knowledge to respond effectively to fire emergencies. This training covers critical aspects of fire safety, including fire prevention, proper use of fire extinguishers, and evacuation procedures.',
      image: 'FTraining.webp',
      link: '/total-systems/Training'
    },
    {
      id: 4,
      name: 'Fire Extinguisher Refilling',
      description: 'Fire Extinguisher Refilling is a crucial maintenance service that ensures fire extinguishers remain fully operational and ready for use in case of emergencies. This service involves recharging depleted extinguishers with the appropriate extinguishing agent to restore their firefighting capabilities.',
      image: 'FERefill.webp',
      link: '/total-systems/Refill'
    },
    {
      id: 5,
      name: 'Fire Fighting Licensing (NOC)',
      description: 'Fire Fighting Licensing (NOC) is a critical regulatory process that involves obtaining a No Objection Certificate (NOC) from the local fire department or relevant authority for fire safety compliance. This licensing ensures that buildings, businesses, or events meet the required fire safety standards and regulations.',
      image: 'NOC.webp',
      link: '/total-systems/Licensing'
    },
    {
      id: 6,
      name: 'One-Time Repairs',
      description: 'One-Time Repairs is a flexible service designed to address specific, non-recurring issues in fire safety systems or equipment. This service caters to clients who need immediate fixes for malfunctioning fire safety components without committing to long-term maintenance contracts.',
      image: 'One-TimeRepair.webp',
      link: '/total-systems/Repair'
    }
  ];
}
