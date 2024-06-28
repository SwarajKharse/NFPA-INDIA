import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';


@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class OurTeamComponent implements AfterViewInit{
  @ViewChildren('container') container!: QueryList<ElementRef>;
  @ViewChild('swiper') swiper!: ElementRef;
  @ViewChild('thumbs') thumbs!: ElementRef;
  @ViewChildren('title') title!: QueryList<ElementRef>;
  @ViewChildren('slide1') slide1!: QueryList<ElementRef>;
  @ViewChildren('slide2') slide2!: QueryList<ElementRef>;

  private thumbsSwiper!: Swiper;
  private mainSwiper!: Swiper;

  team1: string | null = null;
  team2: string | null = null;
  team3: string | null = null;
  team4: string | null = null;
  team5: string | null = null;
  team6: string | null = null;

  constructor(private storage: Storage) {}

  async ngOnInit() {
    const imageRef = ref(this.storage, "gs://nfpa-website.appspot.com/images/aboutUs/team/team1.svg");
    this.team1 = await getDownloadURL(imageRef);

    const imageRef1 = ref(this.storage, "gs://nfpa-website.appspot.com/images/aboutUs/team/team2.svg");
    this.team2 = await getDownloadURL(imageRef1);

    const imageRef2 = ref(this.storage, "gs://nfpa-website.appspot.com/images/aboutUs/team/team3.svg");
    this.team3 = await getDownloadURL(imageRef2);

    const imageRef3 = ref(this.storage, "gs://nfpa-website.appspot.com/images/aboutUs/team/team4.svg");
    this.team4 = await getDownloadURL(imageRef3);

    const imageRef4 = ref(this.storage, "gs://nfpa-website.appspot.com/images/aboutUs/team/team5.svg");
    this.team5 = await getDownloadURL(imageRef4);

    const imageRef5 = ref(this.storage, "gs://nfpa-website.appspot.com/images/aboutUs/team/team6.svg");
    this.team6 = await getDownloadURL(imageRef5);

  }


  ngAfterViewInit(): void {
      
    const container = this.container.find((el, index) => index === 0)?.nativeElement;
    const swiper = this.swiper.nativeElement;
    const title = this.title.map((el) => el.nativeElement);
    const slide1 = this.slide1.map((el) => el.nativeElement);
    const slide2 = this.slide2.map((el) => el.nativeElement);

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
        stagger: 0.2 
    }, "-=0.5");

    tl.from(
      slide2, { 
        opacity: 0,
        scale: 0.5,
        x: 100,
        duration: 0.5, 
        stagger: 0.2 
    }, "-=0.5");
  }

  initializeSwiper(): void {
    this.thumbsSwiper = new Swiper(this.thumbs.nativeElement, {
      loop: true,
      freeMode: true,
      watchSlidesProgress: true,
      direction: 'vertical',
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1000,

    });

    this.mainSwiper = new Swiper(this.swiper.nativeElement, {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      thumbs: {
        swiper: this.thumbsSwiper
      },
      effect: 'fade',
    });
  }

}
