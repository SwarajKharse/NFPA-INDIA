import { Component, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ViewChildren, QueryList, OnDestroy, NgZone } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent implements AfterViewInit {

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  private carouselInstance!: Swiper;

  constructor() {}

  ngAfterViewInit(): void {
    const tl = gsap.timeline({
      // delay: 2.7,
      scrollTrigger: {
        trigger: this.swiperContainer.nativeElement,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl.add(() => {
      this.initializeSwiper();
    });

    tl.fromTo(this.swiperContainer.nativeElement, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.5
    });

  }

  initializeSwiper(): void {
    this.carouselInstance = new Swiper(this.swiperContainer.nativeElement, {
      modules: [Autoplay, EffectCoverflow],
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      speed: 1000,
      effect: 'coverflow',
    });
  }
}