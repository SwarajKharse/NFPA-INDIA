import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

  private footerTriggerId = 'footerTrigger';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // ScrollTrigger.refresh();  // If this doesnt work then in setupFooterAnimation uncomment the first lines
        this.setupFooterAnimation();
      }
    });
  }

  ngAfterViewInit() {
    this.setupFooterAnimation();
  }

  setupFooterAnimation() {
    // Ensure previous ScrollTriggers are killed to avoid duplicates
    ScrollTrigger.getById(this.footerTriggerId)?.kill();

    const footer = this.footer.find((el, index) => index === 0)?.nativeElement;
    const logo = this.logo.map((el) => el.nativeElement);
    const aboutText = this.aboutText.map((el) => el.nativeElement);
    const socialLogos = this.socialLogos.map((el) => el.nativeElement);
    const headings = this.headings.map((el) => el.nativeElement);
    const pgStructureItems = this.pgStructureItems.map((el) => el.nativeElement);
    const address = this.address.map((el) => el.nativeElement);
    const mail = this.mail.find((el, index) => index === 0)?.nativeElement;
    const developer = this.developer.find((el, index) => index === 0)?.nativeElement;

    // Set initial styles
    gsap.set([logo, aboutText, socialLogos, headings, pgStructureItems, address, mail, developer], { opacity: 0 });
    gsap.set(logo, { x: -100 });
    gsap.set(aboutText, { y: 100 });
    gsap.set(socialLogos, { x: -100 });
    gsap.set(headings, { y: -50 });
    gsap.set(pgStructureItems, { x: -100 });
    gsap.set(address, { x: -100 });
    gsap.set(mail, { x: -100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        id: this.footerTriggerId,  // Assign the unique id here
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
