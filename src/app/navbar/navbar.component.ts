import { NgIf, NgStyle, NgClass, CommonModule } from '@angular/common';
import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    RouterOutlet,
    NgIf,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

export class NavbarComponent implements AfterViewInit{
  @ViewChildren('navbar') navbarElement!: QueryList<ElementRef>;
  @ViewChildren('logo') logo!: QueryList<ElementRef>;
  @ViewChildren('logoText') logoText!: QueryList<ElementRef>;
  @ViewChildren('navBarMenuItem') navBarMenuItems!: QueryList<ElementRef>;

  @ViewChildren('logoMob') logoMob!: QueryList<ElementRef>;
  @ViewChildren('logoTextMob') logoTextMob!: QueryList<ElementRef>;
  @ViewChildren('navBarMobileMenuItem') navBarMobileMenuItems!: QueryList<ElementRef>;
  @ViewChildren('dropdown') dropdown!: QueryList<ElementRef>;
  @ViewChildren('dropdownHead') dropdownHead!: QueryList<ElementRef>;
  @ViewChildren('dropdownbody') dropdownbody!: QueryList<ElementRef>;
  
  menuOpen = false;
  private tl2!: gsap.core.Timeline;
  private tl3!: gsap.core.Timeline;

  constructor() {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.tl2.play();
    } else {
      this.tl2.reverse();
    }
  }

  dropdownEnter() {
    this.tl3.play();
  }

  dropdownLeave() {
    this.tl3.reverse();
  }

  ngAfterViewInit() {

    const navbar = this.navbarElement.find((el, index) => index === 0)?.nativeElement;
    const logo = this.logo.find((el, index) => index === 0)?.nativeElement;
    const logoText = this.logoText.find((el, index) => index === 0)?.nativeElement;
    const navBarMenuItems = this.navBarMenuItems.map((el) => el.nativeElement);

    const logoMob = this.logoMob.find((el, index) => index === 0)?.nativeElement;
    const logoTextMob = this.logoTextMob.find((el, index) => index === 0)?.nativeElement;
    const navBarMobileMenuItems = this.navBarMobileMenuItems.map((el) => el.nativeElement);
    const dropdown = this.dropdown.find((el, index) => index === 0)?.nativeElement;
    const dropdownHead = this.dropdownHead.map((el) => el.nativeElement);
    const dropdownbody = this.dropdownbody.map((el) => el.nativeElement);

    const tl = gsap.timeline({
      // delay: 3.25,
      scrollTrigger: {
        trigger: navbar,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        markers: false
      }
    });

    tl.fromTo(
      [logo, logoText],
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
    );

    tl.from(
      navBarMenuItems,
      // { opacity: 0, scale: 0, x: -100, stagger: 0.3, duration: 1, ease: 'power2.out' },
      { opacity: 0, y: -50, stagger: 0.2, duration: 1, ease: 'power2.out' },
      '-=1.5'
    );

    this.tl2 = gsap.timeline({ 
      paused: true
    });

    this.tl2.from(
      navBarMobileMenuItems,
      { opacity: 0, y: -50, stagger: 0.2, duration: 1, ease: 'power2.out' }
    );

    this.tl3 = gsap.timeline({ 
      paused: true,
    });

    // this.tl3.from(
    //   dropdown,
    //   { opacity: 0, y: -500, duration: 0.8, ease: 'power2.inout' }
    // );

    this.tl3.from(
      dropdownHead,
      { opacity: 0, y: 50, stagger: 0.3, duration: 1, ease: 'power2.inout' },
    );

    this.tl3.from(
      dropdownbody,
      { opacity: 0, x: -50, stagger: 0.1, duration: 1, ease: 'power2.inout' },
      '-=0.8'
    );

  }
}
