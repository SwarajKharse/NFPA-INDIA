import { Component, ElementRef, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ProductsComponent implements AfterViewInit{

  constructor() {}

  @ViewChild('mySwiper') mySwiper!: ElementRef;
  @ViewChildren('title') title!: QueryList<ElementRef>;
  @ViewChildren('prods') prods!: QueryList<ElementRef>;
  @ViewChildren('buttons') buttons!: QueryList<ElementRef>;
  @ViewChildren('link') link!: QueryList<ElementRef>;

  private swiperInstance!: Swiper;

  ngAfterViewInit(): void {

    const swiperInstance = this.mySwiper.nativeElement;
    const title = this.title.map((el) => el.nativeElement);
    const prods = this.prods.map((el) => el.nativeElement);
    const buttons = this.buttons.map((el) => el.nativeElement);
    const link = this.link.find((el, index) => index === 0)?.nativeElement;

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
        x: 100,
        duration: 1, 
        stagger: 0.25 
    });

    tl.add(() => {
      this.initializeSwiper();
    });

    tl.from(
      prods, { 
        opacity: 0,
        scale: 0.5,
        x: -200,
        duration: 1.2,
        stagger: 0.3
    });

    tl.from(
      buttons, { 
        opacity: 0,
        scale: 0.5,
        x: -200,
        duration: 0.7,
        stagger: 0.3
    }, '-=0.5');

    tl.from(
      link, { 
        opacity: 0,
        y: 100,
        duration: 0.8
    }, '-=0.6');
      
  }

  initializeSwiper(): void {
    this.swiperInstance = new Swiper(this.mySwiper.nativeElement, {
      modules: [Navigation],
      loop: true,
      autoplay: {
        delay: 2000,
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
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
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