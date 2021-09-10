import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {
  @Input() appHightLight = 'red';
  
  constructor(private el: ElementRef) {
   }

   ngOnInit(): void {
     this.el.nativeElement.style.color = this.appHightLight;
  }
}
