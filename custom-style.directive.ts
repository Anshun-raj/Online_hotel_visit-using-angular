import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {
  
  constructor(private el:ElementRef ) { 
    this.el.nativeElement.style.backgroundColor="yellow";
  }

}
