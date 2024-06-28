import { Component } from '@angular/core';

import { CarouselComponent } from './carousel/carousel.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { ProductsComponent } from './products/products.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ClientsChartComponent } from './clients-chart/clients-chart.component';
import { ClientsLoopComponent } from './clients-loop/clients-loop.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CarouselComponent, 
    OurVisionComponent, 
    OurMissionComponent, 
    ProductsComponent, 
    OurServicesComponent, 
    ClientsChartComponent, 
    ClientsLoopComponent, 
    CounterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent {

}
