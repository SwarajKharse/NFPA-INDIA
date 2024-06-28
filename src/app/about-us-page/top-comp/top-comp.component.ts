import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-top-comp',
  standalone: true,
  imports: [],
  templateUrl: './top-comp.component.html',
  styleUrl: './top-comp.component.css'
})
export class TopCompComponent implements AfterViewInit{
  @ViewChildren('h3tag') h3tag!: QueryList<ElementRef>;
  @ViewChildren('container') container!: QueryList<ElementRef>;

  aboutUs: string | null = null;
  constructor(private storage: Storage) {}

  async ngOnInit() {
    const reff = ref(this.storage, 'gs://nfpa-website.appspot.com/images/aboutUs/main.svg');
    this.aboutUs = await getDownloadURL(reff);
  }

  ngAfterViewInit(): void {
    const h3Element = this.h3tag.find((el, index) => index === 0)?.nativeElement;
    const h2Element = this.h3tag.find((el, index) => index === 1)?.nativeElement;
    const pElement = this.h3tag.find((el, index) => index === 2)?.nativeElement;
    const container = this.container.find((el, index) => index === 2)?.nativeElement;

    if (h3Element && h2Element && pElement) {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
          markers: false
        }
      });

      tl.fromTo(h3Element, 
        { opacity: 0, x: 200 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power2.inOut"
        }
      )
      .fromTo(h2Element,
        { opacity: 0, x: 200 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.inOut"
        },
        "-=0.8" // Start this animation 0.5 seconds before the previous one ends
      )
      .fromTo(pElement,
        { opacity: 0, x: 200 },
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
