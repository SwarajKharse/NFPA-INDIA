import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-first-logo-transition',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './first-logo-transition.component.html',
  styleUrls: ['./first-logo-transition.component.css']
})
export class FirstLogoTransitionComponent implements OnInit {
  @ViewChild('transitionVideo') transitionVideo!: ElementRef<HTMLVideoElement>;

  showTransition = false;
  firstLoadHandled = false;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (!this.firstLoadHandled) {
      this.showTransition = true;
      this.disableScroll();
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (!this.firstLoadHandled) {
          this.showTransition = true;
        }
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => {
          if (!this.firstLoadHandled) {
            this.showTransition = false;
            this.enableScroll();
            this.firstLoadHandled = true;
          }
        }, 2710); // Adjust this to match the duration of your video
      }
    });
  }

  disableScroll() {
    this.renderer.addClass(document.body, 'no-scroll');
  }

  enableScroll() {
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  onVideoCanPlay() {
    if (!this.firstLoadHandled) {
      this.transitionVideo.nativeElement.play();
    }
  }

  onTransitionEnd() {
    this.showTransition = false;
    this.enableScroll();
  }
}
