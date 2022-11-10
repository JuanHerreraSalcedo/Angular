import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAreaMouse]'
})
export class AreaMouseDirective implements OnInit {

  @Input()
  color = 'red';

  @Input()
  height = '200px';

  constructor(private el: ElementRef<HTMLDivElement>) { }

  ngOnInit(){
    this.setBackground();
    this.setHeight();
  }

  setBackground(){
    this.el.nativeElement.style.backgroundColor = this.color;
  }
  
  setHeight(){
    this.el.nativeElement.style.height = `${this.height}px`;

  }
}
