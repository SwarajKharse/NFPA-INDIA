import { Component, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent implements AfterViewInit{
  @ViewChildren('container') container!: QueryList<ElementRef>;
  @ViewChildren('num') valueDisplays!: QueryList<ElementRef>;
  @ViewChildren('img') img!: QueryList<ElementRef>;
  @ViewChildren('text') texts!: QueryList<ElementRef>;

  counter: string | null = null;
  systemsInstalled: string | null = null;
  statesServed: string | null = null;
  clients: string | null = null;
  services: string | null = null;

  constructor(private storage: Storage) {}

  async ngOnInit() {

    const reff = ref(this.storage, 'gs://nfpa-website.appspot.com/images/home/counter.svg');
    this.counter = await getDownloadURL(reff);

    const reference = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/home/systems-installed.svg');
    this.systemsInstalled = await getDownloadURL(reference);

    const imageRef1 = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/home/states-served.svg');
    this.statesServed = await getDownloadURL(imageRef1);

    const imageRef2 = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/home/clients.svg');
    this.clients = await getDownloadURL(imageRef2);

    const imageRef3 = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/home/services.svg');
    this.services = await getDownloadURL(imageRef3);

  }

  ngAfterViewInit() {
    
    const imgs = this.img.map((el) => el.nativeElement);
    const texts = this.texts.map((el) => el.nativeElement);
    const num = this.valueDisplays.map((el) => el.nativeElement);
    const container = this.container.find((el, index) => index === 0)?.nativeElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl.from(
      imgs, { 
        opacity: 0, 
        x: -200,
        duration: 0.5, 
        stagger: 0.1
    });

    tl.from(
      num, { 
        opacity: 0, 
        x: -200,
        stagger: 0.1
    }, '-=0.6');

    tl.from(
      texts,
      { 
        opacity: 0, 
        x: 200,
        duration: 0.5, 
        stagger: 0.1
      }, '-=0.6'
    );

    if(container){
      tl.add(this.animateValues());
    }

  }

  animateValues() {
    const tl = gsap.timeline();

    // tl.to(this.valueDisplays.map((el) => el.nativeElement), {
    //   opacity: 1,
    //   duration: 0
    // });
  
    this.valueDisplays.forEach((valueDisplayRef) => {
      const valueDisplay: HTMLElement = valueDisplayRef.nativeElement;
      const endValue = parseInt(valueDisplay.getAttribute("data-val") || '0', 10);
      const duration = 8; // Adjust duration as needed
  
      let startValue = 0;
  
      tl.to(valueDisplay, {
        duration: 10,
        onUpdate: () => {
          startValue += (endValue / (duration * 60)); // increment value per frame
          if (startValue > endValue) {
            startValue = endValue;
          }
          valueDisplay.textContent = Math.round(startValue).toString() + "+";
        },
        ease: "power2.inOut"
      }, "<"); 
    });
  
    return tl;
  }
  
}
