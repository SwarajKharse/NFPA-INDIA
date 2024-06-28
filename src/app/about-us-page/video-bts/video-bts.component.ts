import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-video-bts',
  standalone: true,
  imports: [],
  templateUrl: './video-bts.component.html',
  styleUrl: './video-bts.component.css'
})
export class VideoBtsComponent implements AfterViewInit{

  @ViewChildren('container') container!: QueryList<ElementRef>;
  @ViewChildren('title') title!: QueryList<ElementRef>;
  @ViewChildren('video') video!: QueryList<ElementRef>;

  ngAfterViewInit(): void {

    const container = this.container.find((el, index) => index === 0)?.nativeElement;
    const title = this.title.map((el) => el.nativeElement);
    const video = this.video.map((el) => el.nativeElement);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl.from(
      title, { 
        opacity: 0, 
        x: -250,
        duration: 1, 
        stagger: 0.25 
    });

    tl.from(
      video, { 
        opacity: 0,
        scale: 0.5,
        x: 100,
        duration: 0.5, 
        stagger: -0.2 
    });
      
  }
}
