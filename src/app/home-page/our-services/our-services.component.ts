import { Component, ElementRef, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',
})

export class OurServicesComponent implements AfterViewInit {
  @ViewChildren('title') title!: QueryList<ElementRef>;
  @ViewChild('mySwiper') mySwiper!: ElementRef;
  @ViewChildren('slide') slide!: QueryList<ElementRef>;
  @ViewChildren('slide1') slide1!: QueryList<ElementRef>;
  @ViewChildren('slide2') slide2!: QueryList<ElementRef>;
  @ViewChildren('slide3') slide3!: QueryList<ElementRef>;
  @ViewChildren('slide4') slide4!: QueryList<ElementRef>;

  private swiperInstance!: Swiper;

  constructor() {}

  ngAfterViewInit() {

    const swiperInstance = this.mySwiper.nativeElement;
    const title = this.title.map((el) => el.nativeElement);
    const slides = this.slide.map((el) => el.nativeElement);
    const slide1 = this.slide1.find((el, index) => index === 0)?.nativeElement;
    const slide3 = this.slide3.find((el, index) => index === 0)?.nativeElement;
    const slide4 = this.slide4.find((el, index) => index === 0)?.nativeElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: swiperInstance,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl.from(
      title, { 
        opacity: 0, 
        x: -200,
        duration: 1, 
        stagger: 0.25 
    });

    tl.add(() => {
      this.initializeSwiper();
    });

    tl.from(
      [slide3, slide1, slide4], { 
        opacity: 0,
        scale: 0.5,
        x: 100,
        duration: 1,
        stagger: 0.25
    });

    tl.from(
      slides, { 
        opacity: 0,
        scale: 0.5,
        x: 100,
        duration: 1,
        stagger: 0.25
    }, '-=0.5');
  }

  initializeSwiper(): void {
    this.swiperInstance = new Swiper(this.mySwiper.nativeElement, {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
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