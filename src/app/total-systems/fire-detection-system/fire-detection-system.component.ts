import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CartService } from '../cartService/cart.services';

// For swiper
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

// For Animation
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-fire-detection-system',
  standalone: true,
  imports: [],
  templateUrl: './fire-detection-system.component.html',
  styleUrl: './fire-detection-system.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FireDetectionSystemComponent implements AfterViewInit {
  constructor(private cartService: CartService) {}

  addProductToCart(productName: string) {
    this.cartService.addProduct(productName);
    console.log('Products in cart:', this.cartService.getProducts());
  }
  @ViewChild('mainSwiper') mainSwiper!: ElementRef;
  @ViewChild('thumbsSwiper') thumbsSwiper!: ElementRef;
  private swiperInstance!: Swiper;
  private thumbsInstance!: Swiper;

  @ViewChild('mainSwiper2') mainSwiper2!: ElementRef;
  @ViewChild('thumbsSwiper2') thumbsSwiper2!: ElementRef;
  private swiperInstance2!: Swiper;
  private thumbsInstance2!: Swiper;

  @ViewChild('mainSwiper3') mainSwiper3!: ElementRef;
  @ViewChild('thumbsSwiper3') thumbsSwiper3!: ElementRef;
  private swiperInstance3!: Swiper;
  private thumbsInstance3!: Swiper;

  @ViewChild('mainSwiper4') mainSwiper4!: ElementRef;
  @ViewChild('thumbsSwiper4') thumbsSwiper4!: ElementRef;
  private swiperInstance4!: Swiper;
  private thumbsInstance4!: Swiper;

  @ViewChild('mainSwiper5') mainSwiper5!: ElementRef;
  @ViewChild('thumbsSwiper5') thumbsSwiper5!: ElementRef;
  private swiperInstance5!: Swiper;
  private thumbsInstance5!: Swiper;

  // For animation
  @ViewChild('mainHeadingTrigger') mainHeadingTrigger!: ElementRef;
  @ViewChild('mainHeading') mainHeading!: ElementRef;
  @ViewChild('bgImage') bgImage!: ElementRef;
  @ViewChild('bodyContainerTrigger') bodyContainerTrigger!: ElementRef;
  @ViewChildren('pattern') pattern!: QueryList<ElementRef>;
  @ViewChildren('mainSubTitle') mainSubTitle!: QueryList<ElementRef>;

  @ViewChild('titleContainer1') titleContainer1!: ElementRef;
  @ViewChildren('title01') title01!: QueryList<ElementRef>;
  @ViewChild('marquee1') marquee1!: ElementRef;
  @ViewChild('swiperContainer1') swiperContainer1!: ElementRef;
  @ViewChild('mainSlide1') mainSlide1!: ElementRef;
  @ViewChildren('thumbsSlide1') thumbsSlide1!: QueryList<ElementRef>;

  @ViewChild('descriptionContainer') descriptionContainer!: ElementRef;

  @ViewChild('titleContainer2') titleContainer2!: ElementRef;
  @ViewChildren('title02') title02!: QueryList<ElementRef>;
  @ViewChild('marquee2') marquee2!: ElementRef;
  @ViewChild('swiperContainer2') swiperContainer2!: ElementRef;
  @ViewChild('mainSlide2') mainSlide2!: ElementRef;
  @ViewChildren('thumbsSlide2') thumbsSlide2!: QueryList<ElementRef>;

  @ViewChild('descriptionContainer2') descriptionContainer2!: ElementRef;

  @ViewChild('titleContainer3') titleContainer3!: ElementRef;
  @ViewChildren('title03') title03!: QueryList<ElementRef>;
  @ViewChild('marquee3') marquee3!: ElementRef;
  @ViewChild('swiperContainer3') swiperContainer3!: ElementRef;
  @ViewChild('mainSlide3') mainSlide3!: ElementRef;
  @ViewChildren('thumbsSlide3') thumbsSlide3!: QueryList<ElementRef>;

  @ViewChild('descriptionContainer3') descriptionContainer3!: ElementRef;

  @ViewChild('titleContainer4') titleContainer4!: ElementRef;
  @ViewChildren('title04') title04!: QueryList<ElementRef>;
  @ViewChild('marquee4') marquee4!: ElementRef;
  @ViewChild('swiperContainer4') swiperContainer4!: ElementRef;
  @ViewChild('mainSlide4') mainSlide4!: ElementRef;
  @ViewChildren('thumbsSlide4') thumbsSlide4!: QueryList<ElementRef>;

  @ViewChild('descriptionContainer4') descriptionContainer4!: ElementRef;

  @ViewChild('titleContainer5') titleContainer5!: ElementRef;
  @ViewChildren('title05') title05!: QueryList<ElementRef>;
  @ViewChild('marquee5') marquee5!: ElementRef;
  @ViewChild('swiperContainer5') swiperContainer5!: ElementRef;
  @ViewChild('mainSlide5') mainSlide5!: ElementRef;
  @ViewChildren('thumbsSlide5') thumbsSlide5!: QueryList<ElementRef>;

  @ViewChild('descriptionContainer5') descriptionContainer5!: ElementRef;

  ngAfterViewInit(): void {

    // Timeline Animation 1 
    const mainHeadingTrigger = this.mainHeadingTrigger.nativeElement;
    const mainHeading = this.mainHeading.nativeElement;
    const bgImage = this.bgImage.nativeElement;
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainHeadingTrigger,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });
    
    tl.from(bgImage, { opacity: 0, duration: 1 });
    tl.from(mainHeading, { opacity: 0, y: 100, duration: 1 }, '-=0.5');

    // Timeline Animation 2
    const bodyContainerTrigger = this.bodyContainerTrigger.nativeElement;
    const pattern = this.pattern.map((el) => el.nativeElement);
    const mainSubTitle = this.mainSubTitle.map((el) => el.nativeElement);

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: bodyContainerTrigger,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl2.from(pattern, { opacity: 0, duration: 1, stagger: 0.3});
    tl2.from(mainSubTitle, { opacity: 0, y: 100, duration: 1, stagger: 0.3}, '-=0.5');

    // Timeline Animation 3
    const titleContainer1 = this.titleContainer1.nativeElement;
    const marquee1 = this.marquee1.nativeElement;
    const title01 = this.title01.map((el) => el.nativeElement);

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: titleContainer1,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl3.from(marquee1, { opacity: 0, duration: 1 });
    tl3.from(title01, { opacity: 0, y: 100, duration: 1, stagger: 0.3 }, '-=0.5');

    // Timeline Animation 4
    const swiperContainer1 = this.swiperContainer1.nativeElement;
    const mainSlide1 = this.mainSlide1.nativeElement;
    const thumbsSlide1 = this.thumbsSlide1.map((el) => el.nativeElement);

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: swiperContainer1,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl4.from(swiperContainer1, { opacity: 0, duration: 1 });

    tl4.add(() => {
      this.initializeSwiper();
      this.initializeSwiper2();
      this.initializeSwiper3();
      this.initializeSwiper4();
      this.initializeSwiper5();
    });

    tl4.from(mainSlide1, { opacity: 0, y: 100, duration: 1 }, '-=0.5');
    tl4.from(thumbsSlide1, { opacity: 0, y: 100, duration: 1, stagger: 0.3 }, '-=0.5');

    // Timeline Animation 5
    const descriptionContainer = this.descriptionContainer.nativeElement;
    
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: descriptionContainer,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl5.from(descriptionContainer, { opacity: 0, duration: 1 });

    // Timeline Animation 3
    const titleContainer2 = this.titleContainer2.nativeElement;
    const marquee2 = this.marquee2.nativeElement;
    const title02 = this.title02.map((el) => el.nativeElement);

    const tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: titleContainer2,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl6.from(marquee2, { opacity: 0, duration: 1 });
    tl6.from(title02, { opacity: 0, y: 100, duration: 1, stagger: 0.3 }, '-=0.5');

    // Timeline Animation 4
    const swiperContainer2 = this.swiperContainer2.nativeElement;
    const mainSlide2 = this.mainSlide2.nativeElement;
    const thumbsSlide2 = this.thumbsSlide2.map((el) => el.nativeElement);

    const tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: swiperContainer2,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl7.from(swiperContainer2, { opacity: 0, duration: 1 });

    tl7.add(() => {
      this.initializeSwiper2();
    });

    tl7.from(mainSlide2, { opacity: 0, y: 100, duration: 1 }, '-=0.5');
    tl7.from(thumbsSlide2, { opacity: 0, y: 100, duration: 1, stagger: 0.3 }, '-=0.5');

    // Timeline Animation 5
    const descriptionContainer2 = this.descriptionContainer2.nativeElement;
    
    const tl8 = gsap.timeline({
      scrollTrigger: {
        trigger: descriptionContainer2,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl8.from(descriptionContainer2, { opacity: 0, duration: 1 });

    // Timeline Animation 3
    const titleContainer3 = this.titleContainer3.nativeElement;
    const marquee3 = this.marquee3.nativeElement;
    const title03 = this.title03.map((el) => el.nativeElement);

    const tl9 = gsap.timeline({
      scrollTrigger: {
        trigger: titleContainer3,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl9.from(marquee3, { opacity: 0, duration: 1 });
    tl9.from(title03, { opacity: 0, y: 100, duration: 1, stagger: 0.3 }, '-=0.5');

    // Timeline Animation 4
    const swiperContainer3 = this.swiperContainer3.nativeElement;
    const mainSlide3 = this.mainSlide3.nativeElement;
    const thumbsSlide3 = this.thumbsSlide3.map((el) => el.nativeElement);

    const tl10 = gsap.timeline({
      scrollTrigger: {
        trigger: swiperContainer3,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl10.from(swiperContainer3, { opacity: 0, duration: 1 });

    tl10.add(() => {
      this.initializeSwiper3();
    });

    tl10.from(mainSlide3, { opacity: 0, y: 100, duration: 1 }, '-=0.5');
    tl10.from(thumbsSlide3, { opacity: 0, y: 100, duration: 1, stagger: 0.3 }, '-=0.5');

    // Timeline Animation 5
    const descriptionContainer3 = this.descriptionContainer3.nativeElement;
    
    const tl11 = gsap.timeline({
      scrollTrigger: {
        trigger: descriptionContainer3,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl11.from(descriptionContainer3, { opacity: 0, duration: 1 });

    // Timeline Animation 3
    const titleContainer4 = this.titleContainer4.nativeElement;
    const marquee4 = this.marquee4.nativeElement;
    const title04 = this.title04.map((el) => el.nativeElement);

    const tl12 = gsap.timeline({
      scrollTrigger: {
        trigger: titleContainer4,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl12.from(marquee4, { opacity: 0, duration: 1 });
    tl12.from(title04, { opacity: 0, y: 100, duration: 1, stagger: 0.3 }, '-=0.5');

    // Timeline Animation 4
    const swiperContainer4 = this.swiperContainer4.nativeElement;
    const mainSlide4 = this.mainSlide4.nativeElement;
    const thumbsSlide4 = this.thumbsSlide4.map((el) => el.nativeElement);

    const tl13 = gsap.timeline({
      scrollTrigger: {
        trigger: swiperContainer4,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl13.from(swiperContainer4, { opacity: 0, duration: 1 });

    tl13.add(() => {
      this.initializeSwiper4();
    });

    tl13.from(mainSlide4, { opacity: 0, y: 100, duration: 1 }, '-=0.5');
    tl13.from(thumbsSlide4, { opacity: 0, y: 100, duration: 1, stagger: 0.3 }, '-=0.5');

    // Timeline Animation 5
    const descriptionContainer4 = this.descriptionContainer4.nativeElement;
    
    const tl14 = gsap.timeline({
      scrollTrigger: {
        trigger: descriptionContainer4,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl11.from(descriptionContainer4, { opacity: 0, duration: 1 });

    // Timeline Animation 3
    const titleContainer5 = this.titleContainer5.nativeElement;
    const marquee5 = this.marquee5.nativeElement;
    const title05 = this.title05.map((el) => el.nativeElement);

    const tl15 = gsap.timeline({
      scrollTrigger: {
        trigger: titleContainer5,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl15.from(marquee5, { opacity: 0, duration: 1 });
    tl15.from(title05, { opacity: 0, y: 100, duration: 1, stagger: 0.3 }, '-=0.5');

    // Timeline Animation 4
    const swiperContainer5 = this.swiperContainer5.nativeElement;
    const mainSlide5 = this.mainSlide5.nativeElement;
    const thumbsSlide5 = this.thumbsSlide5.map((el) => el.nativeElement);

    const tl16 = gsap.timeline({
      scrollTrigger: {
        trigger: swiperContainer5,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl16.from(swiperContainer5, { opacity: 0, duration: 1 });

    tl16.add(() => {
      this.initializeSwiper5();
    });

    tl16.from(mainSlide5, { opacity: 0, y: 100, duration: 1 }, '-=0.5');
    tl16.from(thumbsSlide5, { opacity: 0, y: 100, duration: 1, stagger: 0.3 }, '-=0.5');

    // Timeline Animation 5
    const descriptionContainer5 = this.descriptionContainer5.nativeElement;
    
    const tl17 = gsap.timeline({
      scrollTrigger: {
        trigger: descriptionContainer5,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl17.from(descriptionContainer5, { opacity: 0, duration: 1 });
  }

  initializeSwiper(): void {
    this.thumbsInstance = new Swiper(this.thumbsSwiper.nativeElement, {
      loop: true,
      speed: 1000,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        577: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4,
          direction: 'horizontal',
        },
        460: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4,
          direction: 'horizontal',
        },
        410: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4, 
          direction: 'horizontal',
        },
        350: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4, 
          direction: 'horizontal',
        },
        300: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4, 
          direction: 'horizontal',
        },
        0: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4,
          direction: 'horizontal',
        },
      }
    });

    this.swiperInstance = new Swiper(this.mainSwiper.nativeElement, {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      spaceBetween: 10,
      effect: 'fade',
      thumbs: {
        swiper: this.thumbsInstance,
      },
    });
  }

  initializeSwiper2(): void {
    this.thumbsInstance2 = new Swiper(this.thumbsSwiper2.nativeElement, {
      loop: true,
      speed: 1000,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        577: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4,
          direction: 'horizontal',
        },
        460: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4,
          direction: 'horizontal',
        },
        410: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4, 
          direction: 'horizontal',
        },
        0: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4,
          direction: 'horizontal',
        },
      }
    });

    this.swiperInstance2 = new Swiper(this.mainSwiper2.nativeElement, {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      spaceBetween: 10,
      effect: 'fade',
      thumbs: {
        swiper: this.thumbsInstance2,
      },
    });
  }

  initializeSwiper3(): void {
    this.thumbsInstance3 = new Swiper(this.thumbsSwiper3.nativeElement, {
      loop: true,
      speed: 1000,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        577: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4,
          direction: 'horizontal',
        },
        460: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4,
          direction: 'horizontal',
        },
        410: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4, 
          direction: 'horizontal',
        },
        0: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4,
          direction: 'horizontal',
        },
      }
    });

    this.swiperInstance3 = new Swiper(this.mainSwiper3.nativeElement, {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      spaceBetween: 10,
      effect: 'fade',
      thumbs: {
        swiper: this.thumbsInstance3,
      },
    });
  }

  initializeSwiper4(): void {
    this.thumbsInstance4 = new Swiper(this.thumbsSwiper4.nativeElement, {
      loop: true,
      speed: 1000,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        577: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4,
          direction: 'horizontal',
        },
        460: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4,
          direction: 'horizontal',
        },
        410: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4, 
          direction: 'horizontal',
        },
        0: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4,
          direction: 'horizontal',
        },
      }
    });

    this.swiperInstance4 = new Swiper(this.mainSwiper4.nativeElement, {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      spaceBetween: 10,
      effect: 'fade',
      thumbs: {
        swiper: this.thumbsInstance4,
      },
    });
  }

  initializeSwiper5(): void {
    this.thumbsInstance5 = new Swiper(this.thumbsSwiper5.nativeElement, {
      loop: true,
      speed: 1000,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        577: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4,
          direction: 'horizontal',
        },
        460: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4,
          direction: 'horizontal',
        },
        410: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4, 
          direction: 'horizontal',
        },
        0: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4,
          direction: 'horizontal',
        },
      }
    });

    this.swiperInstance5 = new Swiper(this.mainSwiper5.nativeElement, {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      spaceBetween: 10,
      effect: 'fade',
      thumbs: {
        swiper: this.thumbsInstance5,
      },
    });
  }
}
