import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  image: string = '';
  @Input('image')
  set changeImg(newImg: string) {
    this.image = newImg;
    console.log('change just img =>',  this.image)
    //al tenerlo como un metodo ya puedo aplicar codigo
  } 
  @Output()  loaded = new EventEmitter<string>();
  imageDefault = './assets/images/descarga.png';
  // counter = 0;
  // counterFn: number | undefined;
  
  constructor() {
    //esto se corre antes del render
    //no correr cosas async -- solo se corre una sola vez
    console.log('constructor', 'imgValue =>', this.image);
   }

  ngOnChanges(changes: SimpleChanges) {
    //esto corre antes y durante del render
    //Su objetivo como tal es estar actualizando los cambios en los inputs -- corre muchas veces al actualizar el valor
    console.log('ngOnChanges', 'imgValue =>', this.image);
    console.log('changes',changes);
    // if (changes.){

    // }
  }

  ngOnInit(): void {
    //esto corre antes del render
    //Corre cosas async como fetch, llamadas de api's y corre una sola vez
    //hay un tipico error al usar ngOnInit al manipular inputs ya que normalmente se puede pensar que los inputs deberian estar en el ngOnInit
    // console.log('ngOnInit','imgValue =>' , this.img);
    // this.counterFn = window.setInterval(() => { //no es una buena practica
    //   this.counter += 1;
    //   console.log('run counter')
    // }, 1000);
  }

  ngAfterViewInit(): void {
    //corre despues de que todo se encuentre render
    //maneja los componentes hijos
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(){
    //este se destruye solo cuando vayamos a eliminar el componente
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }
  imgError(){
    this.image = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.image);
  }
}
