import { Component, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';
import { NgFor } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-clients-loop',
  standalone: true,
  imports: [NgFor],
  templateUrl: './clients-loop.component.html',
  styleUrl: './clients-loop.component.css'
})

export class ClientsLoopComponent implements AfterViewInit {
  @ViewChildren('scrollers') scrollers!: QueryList<ElementRef>;
  @ViewChildren('container') container!: QueryList<ElementRef>;
  @ViewChildren('title') title!: QueryList<ElementRef>;
  @ViewChildren('logo1') logo1!: QueryList<ElementRef>;
  @ViewChildren('logo2') logo2!: QueryList<ElementRef>;

  constructor() {}

  addAnimation(): void {
    const scrollersArray = this.scrollers.toArray();
    scrollersArray.forEach((scroller, index) => {
      const scrollerElement = scroller.nativeElement;
      scrollerElement.dataset.animated = 'true';

      const scrollerInner = scrollerElement.querySelector('.scroller__inner');
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach(item => {
        const duplicatedItem = (item as HTMLElement).cloneNode(true);
        (duplicatedItem as HTMLElement).setAttribute('aria-hidden', 'true');
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  ngAfterViewInit() {

    const container = this.container.find((el, index) => index === 0)?.nativeElement;
    const title = this.title.map((el) => el.nativeElement);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    this.addAnimation();

    tl.from(
      title, {
        opacity: 0,
        x: -200,
        duration: 1,
        stagger: 0.25
    });
  }
}