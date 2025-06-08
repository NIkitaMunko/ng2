import {Directive, ElementRef, Host, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective implements OnInit {

  @HostBinding('style.backgroundColor') background!: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseEnter(): void {
    this.background = 'green';
  }

  @HostListener('mouseleave') mouseLeave(): void {
    this.background = 'transparent';
  }
}
