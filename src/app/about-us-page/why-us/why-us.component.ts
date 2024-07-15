import { Component, ElementRef, AfterViewInit, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})

export class WhyUsComponent implements AfterViewInit{

  @ViewChild('mainContainer') mainContainer!: ElementRef;
  @ViewChildren('h3tag') h3tag!: QueryList<ElementRef>;
  @ViewChildren('pic') pic!: QueryList<ElementRef>;
  @ViewChildren('desc') desc!: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit() {

    const mainContainer = this.mainContainer.nativeElement;
    const h2Element = this.h3tag.map((el) => el.nativeElement);
    const picElement = this.pic.map((el) => el.nativeElement);
    const desc = this.desc.map((el) => el.nativeElement);

    if (mainContainer && h2Element && desc && picElement) {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainer,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
          markers: false
        }
      });

      tl.fromTo(h2Element, 
        { opacity: 0, x: -200 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.25,
          ease: "power2.inOut"
        }
      )
      .fromTo(picElement,
        { opacity: 0 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.25,
          ease: "power2.inOut"
        },
        "-=0.7" // Start this animation 1.5 seconds before the previous one ends
      )
      .fromTo(desc,
        { opacity: 0, x: -200 },
        {
          opacity: 1,
          x: 0,
          duration: 1.25,
          stagger: 0.2,
          ease: "power2.inOut"
        },
        "-=0.8" // Start this animation 0.5 seconds before the previous one ends
      );
    }
  }
}