import { Component } from '@angular/core';

import { Product } from './models/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  products: Product[] = [
    {
      id: '1',
      name: 'Polo Totto Verde',
      img: './assets/images/ropa1.webp',
      price: 45000
    },
    {
      id: '2',
      name: 'Polo Totto Verde',
      img: './assets/images/ropa1.webp',
      price: 45.000
    },
    {
      id: '3',
      name: 'Polo Totto Verde',
      img: './assets/images/ropa1.webp',
      price: 45.000
    },
    {
      id: '4',
      name: 'Polo Totto Verde',
      img: './assets/images/ropa1.webp',
      price: 45.000
    },
    {
      id: '5',
      name: 'Polo Totto Verde',
      img: './assets/images/ropa1.webp',
      price: 45.000
    },
    {
      id: '6',
      name: 'Polo Totto Verde',
      img: './assets/images/ropa1.webp',
      price: 45.000
    },
  ];

  onLoaded(img: string){
    console.log('log padre', img)
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }
}
