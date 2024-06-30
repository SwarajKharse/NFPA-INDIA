import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-our-mission',
  standalone: true,
  imports: [],
  templateUrl: './our-mission.component.html',
  styleUrl: './our-mission.component.css'
})

export class OurMissionComponent implements AfterViewInit {

  @ViewChildren('h3tag') h3tag!: QueryList<ElementRef>;
  @ViewChildren('container') container!: QueryList<ElementRef>;

  ngAfterViewInit() {

    const picElement = this.h3tag.find((el, index) => index === 0)?.nativeElement;
    const h3Element = this.h3tag.find((el, index) => index === 1)?.nativeElement;
    const h2Element = this.h3tag.find((el, index) => index === 2)?.nativeElement;
    const pElement = this.h3tag.find((el, index) => index === 3)?.nativeElement;
    const container = this.container.find((el, index) => index === 0)?.nativeElement;

    if (h3Element && h2Element && pElement) {
      const h3Chars = h3Element.querySelectorAll('span');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
          markers: false
        }
      });

      tl.fromTo(picElement,
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }
      );

      tl.fromTo(h3Chars, 
        { opacity: 0, y: 50, x: 100 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1.1,
          stagger: 0.05,
          ease: "power2.out"
        }, '-=0.7' // Start this animation 0.5 seconds before the previous one ends
      )
      .fromTo(h2Element,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out"
        },
        "-=0.9" // Start this animation 0.5 seconds before the previous one ends
      )
      .fromTo(pElement,
        { opacity: 0, x: 500 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out"
        },
        "-=0.9" // Start this animation 0.5 seconds before the previous one ends
      );
    }
  }

}
