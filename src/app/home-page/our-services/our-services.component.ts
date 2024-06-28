import { Component, ElementRef, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [],
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

  service: string | null = null;
  amc: string | null = null;
  repair: string | null = null;
  audit: string | null = null;
  refilling: string | null = null;
  pressure: string | null = null;
  training: string | null = null;
  license: string | null = null;

  constructor(private storage: Storage) {}

  async ngOnInit() {

    const reference = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/service.svg');
    this.service = await getDownloadURL(reference);

    const imageRef1 = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/home/amc.svg');
    this.amc = await getDownloadURL(imageRef1);

    const imageRef2 = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/home/repair.svg');
    this.repair = await getDownloadURL(imageRef2);

    const imageRef3 = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/home/services.svg');
    this.pressure = await getDownloadURL(imageRef3);

    const imageRef4 = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/home/audit.svg');
    this.audit = await getDownloadURL(imageRef4);

    const imageRef5 = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/home/refill.svg');
    this.refilling = await getDownloadURL(imageRef5);

    const imageRef6 = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/home/training.svg');
    this.training = await getDownloadURL(imageRef6);

    const imageRef7 = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/home/licensing.svg');
    this.license = await getDownloadURL(imageRef7);

  }

  ngAfterViewInit() {

    const swiperInstance = this.mySwiper.nativeElement;
    const title = this.title.map((el) => el.nativeElement);
    const slide = this.slide.map((el) => el.nativeElement);
    const slide1 = this.slide1.find((el, index) => index === 0)?.nativeElement;
    const slide2 = this.slide2.find((el, index) => index === 0)?.nativeElement;
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
      [slide3, slide1, slide2, slide4], { 
        opacity: 0,
        scale: 0.5,
        x: 100,
        duration: 1,
        stagger: 0.25
    });

  }

  initializeSwiper(): void {
    this.swiperInstance = new Swiper(this.mySwiper.nativeElement, {
      loop: true,
      autoplay: {
        delay: 3000,
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
          // spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          // spaceBetween: 30,
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
