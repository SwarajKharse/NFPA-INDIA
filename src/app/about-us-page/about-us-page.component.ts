import { Component } from '@angular/core';
import { TopCompComponent } from './top-comp/top-comp.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { CeoComponent } from './ceo/ceo.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { VideoBtsComponent } from './video-bts/video-bts.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ProgressChartComponent } from './progress-chart/progress-chart.component';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [TopCompComponent, 
    CeoComponent, 
    TimelineComponent, 
    WhyUsComponent, 
    OurTeamComponent, 
    TestimonialsComponent, 
    VideoBtsComponent,
    ProgressChartComponent
  ],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.css'
})

export class AboutUsPageComponent {

}
