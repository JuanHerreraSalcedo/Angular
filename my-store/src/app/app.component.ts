import { Component } from '@angular/core';

import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Juan';
  age = 22;
  img = 'https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt1b6543cefd5b666e/6339051ee3c2a2741688cbab/DVA_MICROMISSILES.jpg';
  btnDisabled = true;

  Person = {
    name: 'Juan',
  age : 22,
  avatar : 'https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt1b6543cefd5b666e/6339051ee3c2a2741688cbab/DVA_MICROMISSILES.jpg',
  }

  names : string[] = ['Juan', 'Camilo', 'Pablo']
  newName = '';

  products : Product[] = [
    {
      name: 'Polo Totto Verde',
      price: 565,
      image: './assets/images/ropa1.webp', 
    },
    {
      name: 'Polo Totto Gris',
      price: 565,
      image: './assets/images/ropa2.webp', 
    },
    {
      name: 'Polo Totto Negra',
      price: 565,
      image: './assets/images/ropa3.webp', 
    },
    {
      name: 'Polo Totto Blanca',
      price: 565,
      image: './assets/images/ropa4.webp', 
    },
    {
      name: 'Polo Totto Roja',
      price: 565,
      image: './assets/images/ropa5.webp', 
    },
    {
      name: 'Polo Totto Vinotinto',
      price: 565,
      image: './assets/images/ropa6.webp', 
    },
  ]
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  edad(){
    this.Person.age +=1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.Person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  remove(index: number) {
    this.names.splice(index, 1);
  }
}
