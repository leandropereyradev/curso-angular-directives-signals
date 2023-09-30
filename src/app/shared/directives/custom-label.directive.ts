import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    console.log('Directiva: Constructor');
    console.log({ 'Directiva constructor:': el });

    this.htmlElement = el;

    this.htmlElement.nativeElement.innerHTML = 'Hola desde customLabel';
  }

  ngOnInit(): void {
    console.log('Directiva: ngOnInit');
  }
}
