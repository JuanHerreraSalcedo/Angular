import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [
    // {
    //   id: '1',
    //   name: 'Polo Totto Verde',
    //   img: './assets/images/ropa1.webp',
    //   price: 45000
    // },
    // {
    //   id: '2',
    //   name: 'Polo Totto Verde',
    //   img: './assets/images/ropa2.webp',
    //   price: 45000
    // },
    // {
    //   id: '3',
    //   name: 'Polo Totto Verde',
    //   img: './assets/images/ropa3.webp',
    //   price: 45000
    // },
    // {
    //   id: '4',
    //   name: 'Polo Totto Verde',
    //   img: './assets/images/ropa4.webp',
    //   price: 45000
    // },
    // {
    //   id: '5',
    //   name: 'Polo Totto Verde',
    //   img: './assets/images/ropa5.webp',
    //   price: 45000
    // },
    // {
    //   id: '6',
    //   name: 'Polo Totto Verde',
    //   img: './assets/images/ropa6.webp',
    //   price: 45000
    // }, los productos se encuentran quemados

  ];

  constructor( 
    private storeService: StoreService,
    private productService: ProductsService,
   ) { 
     this.myShoppingCart = this.storeService.getShoppingCart(); //No es buena practica acceder al producto
    }

  ngOnInit(): void {
    //para manejar objetos async 
    this.productService.getAllProducts()
    .subscribe(data =>{
      this.products = data;
      console.log(data)
    })
  }

  onAddToShoppingCart(product: Product){
    // this.myShoppingCart.push(product);
    this.storeService.addProduct(product);
    // this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    this.total = this.storeService.getTotal();
      console.log(product);
  }
}
