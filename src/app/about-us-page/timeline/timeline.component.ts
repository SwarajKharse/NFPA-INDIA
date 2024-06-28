import { Component, ViewChildren, QueryList, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NgFor } from '@angular/common';
import Swiper from 'swiper';
import Navigation from 'swiper';
import Pagination from 'swiper';
import Autoplay, { SwiperOptions } from 'swiper/types';
import Thumbs from 'swiper';

import 'swiper/swiper-bundle.css';

import SwiperCore from 'swiper';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgFor],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TimelineComponent implements AfterViewInit{

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ViewChild('thumbsSwiper') thumbsSwiper!: ElementRef;
  @ViewChildren('swiperSlide') swiperSlides!: QueryList<ElementRef>;

  // For Animations
  @ViewChildren('container') container!: QueryList<ElementRef>;
  @ViewChildren('title') title!: QueryList<ElementRef>;
  @ViewChildren('sliderText') sliderText!: QueryList<ElementRef>;
  @ViewChildren('buttons') buttons!: QueryList<ElementRef>;
  @ViewChildren('wrapperLine') wrapperLine!: QueryList<ElementRef>;
  @ViewChildren('thumbs') thumbs!: QueryList<ElementRef>;

  private hasSlidOnce = false;
  private singleChance = false;
  private thumbsSwiperEl!: Swiper;
  private mainSwiper!: Swiper;

  constructor() { }

  ngAfterViewInit(): void {

    const container = this.container.find((el, index) => index === 0)?.nativeElement;
    const title = this.title.map((el) => el.nativeElement);
    const sliderText = this.sliderText.map((el) => el.nativeElement);
    const buttons = this.buttons.map((el) => el.nativeElement);
    const thumbs = this.thumbs.map((el) => el.nativeElement);
    const wrapperLine = this.wrapperLine.find((el, index) => index === 0)?.nativeElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl.fromTo(title, 
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.inOut"
      }
    )
    .add(() => {
      this.initializeSwipers();
    })
    .fromTo(sliderText,
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.inOut"
      },
      "-=0.7" // Start this animation 1.5 seconds before the previous one ends
    )
    .fromTo(wrapperLine,
      { opacity: 0 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.inOut"
      },
      "-=0.5" // Start this animation 0.5 seconds before the previous one ends
    )
    .fromTo(thumbs,
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.inOut"
      },
      "-=0.5" // Start this animation 0.5 seconds before the previous one ends
    )
    .fromTo(buttons,
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.inOut"
      },
      "-=0.5" // Start this animation 0.5 seconds before the previous one ends
    );

    // Initial check on component load
    this.checkWindowWidth();

    this.mainSwiper.on('slideChange', () => {
      // const activeIndex = mainSwiper.activeIndex;
      setTimeout(() => {
        // thumbsSwiperEl.slideTo(activeIndex);
        this.thumbsSwiperEl.slideNext();
      }, 500);
    });

    // mainSwiper.on('loopFix', () => {
    //   thumbsSwiperEl.slideNext();
    // });

  }

  initializeSwipers() {
    this.thumbsSwiperEl = new Swiper(this.thumbsSwiper.nativeElement, {
      loop: true,
      freeMode: true,
      watchSlidesProgress: true,
      direction: 'vertical',
      breakpoints: {
        576: {
          direction: 'vertical',
          spaceBetween: 50,
          slidesPerView: 6,
        },
        476:{
          direction: 'horizontal',
          spaceBetween: 50,
          slidesPerView: 5,
        },
        0:{
          direction: 'horizontal',
          spaceBetween: 30,
          slidesPerView: 3,
        },
      }
    });

    this.mainSwiper = new Swiper(this.swiperContainer.nativeElement, {
      direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      thumbs: {
        swiper: this.thumbsSwiperEl
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        768: {
          direction: 'vertical',
        },
        0:{
          direction: 'horizontal',
        }
      }
    });

    if(this.singleChance!==true){
      this.thumbsSwiperEl.slidePrev();
      this.singleChance = true;
    }

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowWidth();
  }

  private checkWindowWidth(){
    const windowWidth = window.innerWidth;
    if (windowWidth > 476 && windowWidth < 576 && !this.hasSlidOnce){
      this.hasSlidOnce = true;
      this.thumbsSwiperEl.slideNext();
      this.thumbsSwiperEl.slideNext();
      this.thumbsSwiperEl.slideNext();
    }
  }

}
