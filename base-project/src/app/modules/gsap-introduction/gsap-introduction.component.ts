import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-gsap-introduction',
  templateUrl: './gsap-introduction.component.html',
  styleUrls: ['./gsap-introduction.component.scss'],
})
export class GsapIntroductionComponent implements OnInit {
  public title = 'gsap introduction';
  @Input() panelEase: 'back.out(1.7)' | 'Circ.easeOut' | 'elastic.out(1, 0.3)' =
    'Circ.easeOut';
  @Input() cookieEase:
    | 'back.out(1.7)'
    | 'Circ.easeOut'
    | 'elastic.out(1, 0.3)' = 'back.out(1.7)';
  @Input() section3Ease:
    | 'back.out(1.7)'
    | 'Circ.easeOut'
    | 'elastic.out(1, 0.3)' = 'Circ.easeOut';
  @Input() boxEase: 'back.out(1.7)' | 'Circ.easeOut' | 'elastic.out(1, 0.3)' =
    'elastic.out(1, 0.3)';
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    console.log('ScrollTrigger', ScrollTrigger);
    this.animationOnScroll();
  }
  public clickButton2(event: any) {
    gsap.fromTo(
      '#ctaAnimation',
      { y: 60 },
      { y: 0, duration: 3, ease: this.section3Ease }
    );
  }

  public clickButton(event: any) {
    gsap.to('.panel', {
      duration: 1.5,
      scaleY: 1,
      height: '100vh',
      ease: this.panelEase,
    });
    gsap.to('#cookie', {
      duration: 1,
      opacity: 1,
      y: 0,
      delay: 1,
      ease: this.cookieEase,
    });
    gsap.to('.firstP', {
      duration: 1,
      opacity: 1,
      y: 20,
      delay: 1.4,
    });
    gsap.to('.box', { duration: 4, scale: 1, opacity: 1, ease: this.boxEase });
  }

  animationOnScroll() {
    gsap.to('.section2', {
      scrollTrigger: {
        trigger: '.section2',
        scrub: true,
        pin: true,
        start: 'top top',
        end: '+=500',
        toggleClass: 'active',
      },
      duration: 1,
      opacity: 1,
      ease: 'power2',
    });
    gsap.to('.image1', {
      scrollTrigger: {
        trigger: '.section2',
        scrub: true,
        start: 'top bottom',
        end: 'bottom -300',
      },
      duration: 1,
      ease: this.panelEase,
    });
  }
}
