import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [], 
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css',],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class TestimonialsComponent implements AfterViewInit{

  @ViewChildren('container') container!: QueryList<ElementRef>;
  @ViewChild('mySwiper') mySwiper!: ElementRef;
  @ViewChildren('title') title!: QueryList<ElementRef>;
  @ViewChildren('slide1') slide1!: QueryList<ElementRef>;
  @ViewChildren('stars') stars!: QueryList<ElementRef>;
  @ViewChildren('quote') quote!: QueryList<ElementRef>;
  @ViewChildren('name') name!: QueryList<ElementRef>;
  @ViewChildren('post') post!: QueryList<ElementRef>;
  @ViewChildren('line') line!: QueryList<ElementRef>;
  @ViewChildren('buttons') buttons!: QueryList<ElementRef>;

  private swiperInstance!: Swiper;

  testimonails: string | null = null;
  constructor(private storage: Storage) {}

  async ngOnInit() {
    const imageRef = ref(this.storage, "gs://nfpa-website.appspot.com/images/aboutUs/testimonial.svg");
    this.testimonails = await getDownloadURL(imageRef);
  }

  ngAfterViewInit(): void {
        
      const container = this.container.find((el, index) => index === 0)?.nativeElement;
      // const myswiper = this.myswiper.find((el, index) => index === 0)?.nativeElement;
      const title = this.title.map((el) => el.nativeElement);
      const slide1 = this.slide1.map((el) => el.nativeElement);
      const stars = this.stars.map((el) => el.nativeElement);
      const quote = this.quote.map((el) => el.nativeElement);
      const name = this.name.map((el) => el.nativeElement);
      const post = this.post.map((el) => el.nativeElement);
      const line = this.line.map((el) => el.nativeElement);
      const buttons = this.buttons.map((el) => el.nativeElement);
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
          markers: false,
        }
      });

      tl.add(() => {
        this.initializeSwiper();
      });
  
      tl.from(
        title, { 
          opacity: 0, 
          x: -200,
          duration: 1, 
          stagger: 0.25 
      });

      tl.from(
        slide1, { 
          opacity: 0,
          scale: 0.5,
          x: 100,
          duration: 0.5, 
          stagger: 0.2 
      });

      tl.from(
        stars, { 
          opacity: 0,
          x: -200,
          duration: 0.4, 
          stagger: 0.1
      }, '-=0.6');

      tl.from(
        quote, { 
          opacity: 0,
          x: 100,
          duration: 0.5, 
          stagger: 0.2 
      }, '-=0.6');

      tl.from(
        line, { 
          opacity: 0,
          duration: 0.5, 
          stagger: 0.2 
      }, '-=0.6');

      tl.from(
        buttons, { 
          opacity: 0,
          scale: 0.5,
          x: -200,
          duration: 1.2,
          stagger: 0.3
      }, '-=0.6');

  }

  initializeSwiper(): void {
    this.swiperInstance = new Swiper(this.mySwiper.nativeElement, {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 1000,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        }
      },
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      }
    });
  }
}