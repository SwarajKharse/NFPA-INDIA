import { Component, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ViewChildren, QueryList, OnDestroy, NgZone } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CommonModule, NgFor } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class CarouselComponent implements AfterViewInit {

  @ViewChildren('swiperSlide') swiperSlides!: QueryList<ElementRef>;

  @ViewChildren('content') contents!: QueryList<ElementRef>;
  @ViewChildren('slideTitle') slideTitles!: QueryList<ElementRef>;
  @ViewChildren('slideText') slideTexts!: QueryList<ElementRef>;

  @ViewChild('slide1') slide1!: ElementRef;
  @ViewChild('slideTitle1') slideTitle1!: ElementRef;
  @ViewChild('slideText1') slideText1!: ElementRef;

  @ViewChild('slide2') slide2!: ElementRef;
  @ViewChild('slideTitle2') slideTitle2!: ElementRef;
  @ViewChild('slideText2') slideText2!: ElementRef;

  carousel1: string | null = null;
  carousel2: string | null = null;
  carousel3: string | null = null;
  carousel4: string | null = null;
  carousel5: string | null = null;

  constructor(private storage: Storage) {}

  async ngOnInit() {
    const imageRef = ref(this.storage, "gs://nfpa-website.appspot.com/images/home/c1.svg");
    this.carousel1 = await getDownloadURL(imageRef);

    const imageRef1 = ref(this.storage, "gs://nfpa-website.appspot.com/images/home/c2.svg");
    this.carousel2 = await getDownloadURL(imageRef1);

    const imageRef2 = ref(this.storage, "gs://nfpa-website.appspot.com/images/home/c3.svg");
    this.carousel3 = await getDownloadURL(imageRef2);

    const imageRef3 = ref(this.storage, "gs://nfpa-website.appspot.com/images/home/c4.svg");
    this.carousel4 = await getDownloadURL(imageRef3);

    const imageRef4 = ref(this.storage, "gs://nfpa-website.appspot.com/images/home/c5.svg");
    this.carousel5 = await getDownloadURL(imageRef4);

  }

  ngAfterViewInit(): void {

  }

}
