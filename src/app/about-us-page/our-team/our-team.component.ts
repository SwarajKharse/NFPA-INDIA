import { Component, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Thumbs, Autoplay } from 'swiper/modules';

import SwiperCore from 'swiper';
SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay]);

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css',
  encapsulation: ViewEncapsulation.None
})

export class OurTeamComponent implements AfterViewInit{
  @ViewChildren('container') container!: QueryList<ElementRef>;
  @ViewChild('teamsSwiperSelector') teamsSwiperSelector!: ElementRef;
  @ViewChildren('title') title!: QueryList<ElementRef>;
  @ViewChildren('slide1') slide1!: QueryList<ElementRef>;

  private thumbsSwiper!: Swiper;
  private mainSwiper!: Swiper;

  constructor() {}

  ngAfterViewInit(): void {
      
    const container = this.container.find((el, index) => index === 0)?.nativeElement;
    const title = this.title.map((el) => el.nativeElement);
    const slide1 = this.slide1.map((el) => el.nativeElement);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
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
    }, "-=0.5");
  }

  initializeSwiper(): void {

    // this.thumbsSwiper = new Swiper(this.teamsThumbsSelector.nativeElement, {
    //   // modules: [Thumbs, Navigation],
    //   loop: true,
    //   freeMode: true,
    //   watchSlidesProgress: true,
    //   direction: 'vertical',
    //   slidesPerView: 3,
    //   speed: 1000,
    // });

    this.mainSwiper = new Swiper(this.teamsSwiperSelector.nativeElement, {
      modules: [Navigation],
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 1,
      // thumbs: {
      //   swiper: this.thumbsSwiper
      // },
      effect: 'coverflow',
    });
  }
}
