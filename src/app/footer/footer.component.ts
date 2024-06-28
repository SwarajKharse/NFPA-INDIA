import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit{

  @ViewChildren('footer') footer!: QueryList<ElementRef>;
  @ViewChildren('logo') logo!: QueryList<ElementRef>;
  @ViewChildren('aboutText') aboutText!: QueryList<ElementRef>;
  @ViewChildren('socialLogos') socialLogos!: QueryList<ElementRef>;
  @ViewChildren('headings') headings!: QueryList<ElementRef>;
  @ViewChildren('pgStructureItems') pgStructureItems!: QueryList<ElementRef>;
  @ViewChildren('address') address!: QueryList<ElementRef>;
  @ViewChildren('mail') mail!: QueryList<ElementRef>;
  @ViewChildren('developer') developer!: QueryList<ElementRef>;

  logoImage: string | null = null;
  instagram: string | null = null;
  facebook: string | null = null;
  youtube: string | null = null;
  whatsapp: string | null = null;
  twitter: string | null = null;

  constructor(private storage: Storage) {}

  async ngOnInit() {

    const imageReference = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/NavbarFooter/logo.png');
    this.logoImage = await getDownloadURL(imageReference);

    const imageRef1 = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/NavbarFooter/instagram.png');
    this.instagram = await getDownloadURL(imageRef1);

    const imageRef2 = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/NavbarFooter/facebook.png');
    this.facebook = await getDownloadURL(imageRef2);

    const imageRef3 = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/NavbarFooter/youtube.png');
    this.youtube = await getDownloadURL(imageRef3);

    const imageRef4 = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/NavbarFooter/whatsapp.png');
    this.whatsapp = await getDownloadURL(imageRef4);

    const imageRef5 = ref(this.storage, 'gs://nfpa-website.appspot.com/icons/NavbarFooter/twitter.png');
    this.twitter = await getDownloadURL(imageRef5);
  }

  ngAfterViewInit() {

    const footer = this.footer.find((el, index) => index === 0)?.nativeElement;
    const logo = this.logo.map((el) => el.nativeElement);
    const aboutText = this.aboutText.map((el) => el.nativeElement);
    const socialLogos = this.socialLogos.map((el) => el.nativeElement);
    const headings = this.headings.map((el) => el.nativeElement);
    const pgStructureItems = this.pgStructureItems.map((el) => el.nativeElement);
    const address = this.address.map((el) => el.nativeElement);
    const mail = this.mail.find((el, index) => index === 0)?.nativeElement;
    const developer = this.developer.find((el, index) => index === 0)?.nativeElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: 'top 80%',
        end: 'bottom 0%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl.fromTo(
      logo,
      { opacity: 0, x: -100},
      { opacity: 1, x: 0, duration: 1.5, stagger: 0.2, ease: 'power2.out' }
    );

    tl.fromTo(
      aboutText,
      { opacity: 0, y: 100},
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power2.inout' },
      '-=1.2'
    );

    tl.fromTo(
      socialLogos,
      { opacity: 0, x: -100},
      { opacity: 1, x: 0, stagger: 0.2, duration: 1, ease: 'power2.inout' },
      '-=1.2'
    );

    tl.fromTo(
      headings,
      { opacity: 0, y:-50},
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power2.inout' },
      '-=1.2'
    );

    tl.fromTo(
      [pgStructureItems],
      { opacity: 0, x: -100},
      { opacity: 1, x: 0, stagger: 0.2, duration: 0.7, ease: 'power2.inout' },
      '-=1.2'
    );

    tl.fromTo(
      [address, mail],
      { opacity: 0, x: -100},
      { opacity: 1, x: 0, stagger: 0.2, duration: 0.7, ease: 'power2.inout' },
      '-=1.2'
    );

    tl.fromTo(
      developer,
      { opacity: 0},
      { opacity: 1, duration: 0.7, ease: 'power2.inout' },
      '-=1.2'
    );

  }
}
