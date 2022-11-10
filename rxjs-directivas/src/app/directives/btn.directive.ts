import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective implements OnInit {

  @Input()

  bgColor = "White"

  @Input()

  textColor = "Black"

  @Input()

  width = "5"

  constructor(private el: ElementRef<HTMLButtonElement>) { }

  ngOnInit(): void {
    this.setColor()
    this.setWith()
  }

  setColor(){
    this.el.nativeElement.style.backgroundColor = this.bgColor
    this.el.nativeElement.style.color = this.textColor
    this.el.nativeElement.style.border = 'none'
  }

  setWith(){
    this.el.nativeElement.style.width = `${this.width}rem`;

  }

}
