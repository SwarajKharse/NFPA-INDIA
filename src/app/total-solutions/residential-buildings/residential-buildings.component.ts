import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-residential-buildings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './residential-buildings.component.html',
  styleUrl: '../sol-style.css'
})
export class ResidentialBuildingsComponent {
  solutions = [
    {
      id: 1,
      name: 'Fire Extinguishers ',
      description: 'Fire extinguishers and cabinets are essential fire safety equipment, ready to combat small fires before they escalate. They provide a quick and accessible way to extinguish flames, especially crucial in the initial moments of a fire. Benefits: Fire extinguishers offer immediate intervention, allowing you to address a fire before it grows out of control. Most extinguishers are designed for user-friendly operation, even in stressful situations. Cabinets shield extinguishers from dust, damage, and tampering, keeping them readily available in good condition.',
      image: 'FE1.webp',
    },
    {
      id: 2,
      name: 'Fire Sprinkler Systems',
      description: 'Fire sprinkler systems act as an automatic fire suppression system, providing a critical layer of protection in buildings. A network of pipes filled with water reaches throughout the structure, with sprinkler heads strategically placed at intervals. Installation Details: Assessing water pressure and potentially installing a booster pump, strategically placing sprinkler heads throughout the building based on a pre-designed layout, running piping from the water source to designated zones, connecting sprinkler heads to the piping network.',
      image: 'Sprinkler.webp',
    },
    {
      id: 3,
      name: 'Fire Hydrant System',
      description: 'Fire Hydrant System are the muscle behind water-based fire protection systems in buildings, especially high-rises and facilities with complex fire suppression needs. They act as pressure boosters, taking water from a municipal supply, reservoir, or tank and significantly increasing its pressure. Installation Details: First, the location is chosen based on accessibility and proximity to the water source. The pump itself is then mounted on a sturdy base and securely anchored. Next, piping is installed to connect the pump to the water supply and the building\'s fire protection system. Electrical wiring (for electric pumps) or fuel lines (for diesel pumps) are installed to provide power. Pressure gauges and valves are integrated for system monitoring and control.',
      image: 'Fire Pump.webp',
    }
  ];

  services = [
    {
      id: 1,
      name: 'Annual Maintenance Contracts(AMCs)',
      description: 'An Annual Maintenance Contract (AMC) for fire safety systems is a comprehensive service agreement designed to ensure the continued reliability and effectiveness of a building\'s fire protection systems. This contract typically includes regular inspections, testing, servicing, and repairs of fire alarms, sprinkler systems, fire extinguishers, and other fire safety equipment. By engaging in an AMC, building owners and managers can ensure that their fire safety systems are always in optimal working condition, reducing the risk of fire-related incidents and ensuring compliance with local fire safety regulations.',
      image: 'AMC.webp',
    },
    {
      id: 2,
      name: 'Fire Fighting Audits',
      description: 'Fire audits are thorough evaluations of a building\'s fire safety measures, conducted to ensure compliance with fire safety regulations and to identify potential risks. These audits involve a detailed inspection of all fire protection systems, such as fire alarms, sprinkler systems, fire extinguishers, and emergency exits. Audit Process: The fire audit process typically includes an initial consultation to understand the facility\'s specific needs and regulatory requirements. This is followed by a comprehensive on-site inspection, during which fire safety professionals examine all fire protection systems, review maintenance records, and assess the building\'s overall fire safety strategy. The audit also involves interviews with key personnel to evaluate their knowledge of fire safety procedures.',
      image: 'Fire-Audit.webp',
    },
    {
      id: 3,
      name: 'Basic Fire Fighting Training',
      description: 'Basic Fire Fighting Training is an essential program designed to equip individuals with fundamental skills and knowledge to respond effectively to fire emergencies. This training covers critical aspects of fire safety, including fire prevention, proper use of fire extinguishers, and evacuation procedures. Training Process: The course typically begins with theoretical instruction on fire behavior and types of fires. This is followed by hands-on practical sessions where participants learn to identify different classes of fires and select appropriate extinguishing methods. Trainees practice using various fire-fighting equipment under supervised conditions. The program also emphasizes the importance of quick decision-making and teamwork during fire incidents. Upon completion, participants gain confidence in their ability to handle small fires and contribute to overall workplace safety.',
      image: 'FTraining.webp',
    },
    {
      id: 4,
      name: 'Fire Extinguisher Refilling',
      description: 'Fire Extinguisher Refilling is a crucial maintenance service that ensures fire extinguishers remain fully operational and ready for use in case of emergencies. This service involves recharging depleted extinguishers with the appropriate extinguishing agent to restore their firefighting capabilities. Refilling Process: The process begins with a thorough inspection of the extinguisher to check for any damage or wear. Technicians then safely depressurize the unit and remove any remaining agent. The extinguisher is cleaned, and its internal components are examined. It is then refilled with the correct type and amount of extinguishing agent as per manufacturer specifications. Finally, the unit is repressurized, sealed, and undergoes a series of safety checks to confirm proper functionality. Regular refilling, typically annually or after each use, is essential to maintain the effectiveness and reliability of fire extinguishers, ensuring they\'re always ready to protect lives and property in the event of a fire.',
      image: 'FERefill.webp',
    },
    {
      id: 5,
      name: 'Fire Fighting Licensing (NOC)',
      description: 'Fire Fighting Licensing (NOC) is a critical regulatory process that involves obtaining a No Objection Certificate (NOC) from the local fire department or relevant authority for fire safety compliance. This licensing ensures that buildings, businesses, or events meet the required fire safety standards and regulations. Licensing Process: The process typically begins with submitting a detailed application, including architectural plans, fire safety system designs, and emergency evacuation procedures. Fire safety experts then conduct a thorough on-site inspection to verify compliance with local fire codes and safety regulations. This inspection covers various aspects such as fire detection and alarm systems, sprinkler installations, emergency exits, and overall building safety. If any deficiencies are found, recommendations for improvements are provided. Once all requirements are met, the NOC is issued, certifying that the property or event is equipped to prevent and respond to fire emergencies. This license is often mandatory for occupancy permits and must be renewed periodically to ensure ongoing compliance with evolving fire safety standards.',
      image: 'NOC.webp',
    }
  ];
}
