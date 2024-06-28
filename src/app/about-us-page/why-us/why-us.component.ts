import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})

export class WhyUsComponent implements AfterViewInit{

  whyUs: string | null = null;

  @ViewChildren('h3tag') h3tag!: QueryList<ElementRef>;
  @ViewChildren('pic') pic!: QueryList<ElementRef>;

  constructor(private storage: Storage) {}

  async ngOnInit() {
    const imageRef = ref(this.storage, "gs://nfpa-website.appspot.com/images/aboutUs/whyUS.svg");
    this.whyUs = await getDownloadURL(imageRef);
  }
  ngAfterViewInit() {

    const h3Element = this.h3tag.find((el, index) => index === 0)?.nativeElement;
    const h2Element = this.h3tag.find((el, index) => index === 1)?.nativeElement;
    const pElement = this.h3tag.find((el, index) => index === 2)?.nativeElement;
    const picElement = this.pic.find((el, index) => index === 0)?.nativeElement;

    if (h3Element && h2Element && pElement) {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: h3Element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
          markers: false
        }
      });

      tl.fromTo(h3Element, 
        { opacity: 0, x: -200 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power2.inOut"
        }
      )
      .fromTo(picElement,
        { opacity: 0 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.inOut"
        },
        "-=0.7" // Start this animation 1.5 seconds before the previous one ends
      )
      .fromTo(h2Element,
        { opacity: 0, x: -200 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.inOut"
        },
        "-=0.8" // Start this animation 0.5 seconds before the previous one ends
      )
      .fromTo(pElement,
        { opacity: 0, x: -200 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.inOut"
        },
        "-=0.5" // Start this animation 0.5 seconds before the previous one ends
      );
    }
  }
}