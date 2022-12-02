import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
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
      img: './assets/images/ropa2.webp',
      price: 45000
    },
    {
      id: '3',
      name: 'Polo Totto Verde',
      img: './assets/images/ropa3.webp',
      price: 45000
    },
    {
      id: '4',
      name: 'Polo Totto Verde',
      img: './assets/images/ropa4.webp',
      price: 45000
    },
    {
      id: '5',
      name: 'Polo Totto Verde',
      img: './assets/images/ropa5.webp',
      price: 45000
    },
    {
      id: '6',
      name: 'Polo Totto Verde',
      img: './assets/images/ropa6.webp',
      price: 45000
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product: Product){
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
      console.log(product);
  }
}
