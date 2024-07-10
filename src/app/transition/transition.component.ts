import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css']
})

export class TransitionComponent implements OnInit {
  @ViewChild('transition') transitionElement!: ElementRef;
  @ViewChild('transitionVideo') transitionVideo!: ElementRef<HTMLVideoElement>;

  showTransition = false;
  isFirstLoad = true;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (!this.isFirstLoad) {
          this.showTransition = true;
        }
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => {
          if (!this.isFirstLoad) {
            this.fadeOutTransition();
          }
          this.isFirstLoad = false;
        }, 2700);
      }
    });
  }

  fadeOutTransition(): void {
    const element = this.transitionElement.nativeElement;
    element.classList.add('fade-out');
    setTimeout(() => {
      this.showTransition = false;
      element.classList.remove('fade-out');
      this.renderer.removeClass(document.body, 'no-scroll');
    }, 1000); // Match this duration to the CSS transition duration
  }

  disableScroll() {
    this.renderer.addClass(document.body, 'no-scroll');
  }

  enableScroll() {
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  onTransitionEnd() {
    this.showTransition = false;
  }

  onVideoCanPlay() {
    this.transitionVideo.nativeElement.play();
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'no-scroll'); // Ensure scrolling is re-enabled on component destroy
  }
}