import { Component, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';
import { NgFor } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

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

  image1: string | null = null;
  image2: string | null = null;
  image3: string | null = null;
  image4: string | null = null;
  image5: string | null = null;
  image6: string | null = null;
  image7: string | null = null;
  image8: string | null = null;
  image9: string | null = null;
  image10: string | null = null;
  image11: string | null = null;
  image12: string | null = null;
  image13: string | null = null;
  image14: string | null = null;
  image15: string | null = null;
  image16: string | null = null;
  image17: string | null = null;
  image18: string | null = null;
  image19: string | null = null;
  image20: string | null = null;
  image21: string | null = null;

  constructor(private storage: Storage) {}

  async ngOnInit() {
    const imageRef1 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l1.svg');
    this.image1 = await getDownloadURL(imageRef1);

    const imageRef2 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l2.svg');
    this.image2 = await getDownloadURL(imageRef2);

    const imageRef3 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l3.svg');
    this.image3 = await getDownloadURL(imageRef3);

    const imageRef4 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l4.svg');
    this.image4 = await getDownloadURL(imageRef4);

    const imageRef5 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l5.svg');
    this.image5 = await getDownloadURL(imageRef5);

    const imageRef6 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l6.svg');
    this.image6 = await getDownloadURL(imageRef6);

    const imageRef7 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l7.svg');
    this.image7 = await getDownloadURL(imageRef7);

    const imageRef8 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l8.svg');
    this.image8 = await getDownloadURL(imageRef8);

    const imageRef9 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l9.svg');
    this.image9 = await getDownloadURL(imageRef9);

    const imageRef10 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l10.svg');
    this.image10 = await getDownloadURL(imageRef10);

    const imageRef11 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l11.svg');
    this.image11 = await getDownloadURL(imageRef11);

    const imageRef12 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l12.svg');
    this.image12 = await getDownloadURL(imageRef12);

    const imageRef13 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l13.svg');
    this.image13 = await getDownloadURL(imageRef13);

    const imageRef14 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l14.svg');
    this.image14 = await getDownloadURL(imageRef14);

    const imageRef15 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l15.svg');
    this.image15 = await getDownloadURL(imageRef15);

    const imageRef16 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l16.svg');
    this.image16 = await getDownloadURL(imageRef16);

    const imageRef17 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l17.svg');
    this.image17 = await getDownloadURL(imageRef17);

    const imageRef18 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l18.svg');
    this.image18 = await getDownloadURL(imageRef18);

    const imageRef19 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l19.svg');
    this.image19 = await getDownloadURL(imageRef19);

    const imageRef20 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l20.svg');
    this.image20 = await getDownloadURL(imageRef20);

    const imageRef21 = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/clientLogos/l21.svg');
    this.image21 = await getDownloadURL(imageRef21);
  }

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
