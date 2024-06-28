import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-ceo',
  standalone: true,
  imports: [],
  templateUrl: './ceo.component.html',
  styleUrl: './ceo.component.css'
})
export class CeoComponent implements AfterViewInit{

  @ViewChildren('h3tag') h3tag!: QueryList<ElementRef>;
  @ViewChildren('pic') pic!: QueryList<ElementRef>;

  ceo: string | null = null;

  constructor(private storage: Storage) {}

  async ngOnInit() {
    const imageRef = ref(this.storage, "gs://nfpa-website.appspot.com/images/aboutUs/ceo.svg");
    this.ceo = await getDownloadURL(imageRef);
  }

  ngAfterViewInit() {

    const h4Element = this.h3tag.find((el, index) => index === 0)?.nativeElement;
    const pElement = this.h3tag.find((el, index) => index === 1)?.nativeElement;
    const h2Element = this.h3tag.find((el, index) => index === 2)?.nativeElement;
    const h3Element = this.h3tag.find((el, index) => index === 3)?.nativeElement;
    const picElement = this.pic.find((el, index) => index === 0)?.nativeElement;

    if (h3Element && h2Element && pElement && picElement && h4Element) {

      const tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: h4Element,
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
          stagger: 0.05,
          ease: "power2.inOut"
        }
      )
      .fromTo(pElement, 
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power2.inOut"
        },
        "-=0.7"
      )
      .fromTo(picElement,
        { opacity: 0 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.inOut"
        },
        "-=1.5" // Start this animation 1.5 seconds before the previous one ends
      )
      .fromTo(h2Element,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.inOut"
        },
        "-=0.5" // Start this animation 0.5 seconds before the previous one ends
      )
      .fromTo(h3Element,
        { opacity: 0, x: 100 },
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

