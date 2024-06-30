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

  constructor(private storage: Storage) {}
  imageUrl: string | null = null;

  async ngOnInit() {
    const imageRef = ref(this.storage, "gs://nfpa-website.appspot.com/images/home/carousel1.webp");
    this.imageUrl = await getDownloadURL(imageRef);
  }

  ngAfterViewInit(): void {

  }

}
