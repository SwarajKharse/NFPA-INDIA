import { Component, ElementRef, AfterViewInit, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-ceo',
  standalone: true,
  imports: [],
  templateUrl: './ceo.component.html',
  styleUrl: './ceo.component.css'
})
export class CeoComponent implements AfterViewInit{

  @ViewChild('mainContainer') mainContainer!: ElementRef;
  @ViewChild('h3tag') h3tag!: ElementRef;
  @ViewChild('pic') pic!: ElementRef;
  @ViewChildren('desc') desc!: QueryList<ElementRef>;
  @ViewChildren('regards') regards!: QueryList<ElementRef>;

  ngAfterViewInit() {

    const mainContainer = this.mainContainer.nativeElement;
    const h4Element = this.h3tag.nativeElement;
    const picElement = this.pic.nativeElement;
    const desc = this.desc.map((el) => el.nativeElement);
    const regards = this.regards.map((el) => el.nativeElement);

    if (picElement && h4Element && desc && regards) {

      const tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: mainContainer,
          start: 'top 80%',
          end: 'bottom 0%',
          toggleActions: 'play none none none',
          markers: false
        }
      });

      tl.fromTo(h4Element, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.inOut"
        }
      )
      .fromTo(picElement,
        { opacity: 0 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.inOut"
        },
        "-=1.5"
      )
      .fromTo(desc,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power2.inOut"
        },
        "-=0.75"
      )
      .fromTo(regards,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power2.inOut"
        },
        "-=0.75"
      );
    }
  }
}