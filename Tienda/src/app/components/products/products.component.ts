import { Component, OnInit } from '@angular/core';
import { Product, createProductDTO, UpdateProductDTO } from 'src/app/models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  slidesPerview = 1;
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

  showProductDetail = false;
  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: '',
  }

  today = new Date();
  date = new Date(2021, 8, 8)

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

  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string){
    // console.log('id')
    this.productService.getProduct(id)
    .subscribe(data => {
      this.toggleProductDetail();
      // console.log('product', data); 
      this.productChosen = data;
    })
  }

  createNewProduct() {
    const product: createProductDTO = {
      title: 'Nuevo producto',
      description: 'bla bla bla',
      images: [ '' ],
      price: 1000,
      categoryId: 2, 
    }
    this.productService.create(product)
    .subscribe(data =>{
      // console.log('created',data);
      this.products.unshift(data);
    })
  }

  updateProduct(){
    const changes: UpdateProductDTO = {
      title: 'nuevo titulo',

    }
    const id = this.productChosen.id;
    this.productService.update(id, changes)
    .subscribe(data =>{
      // console.log('updated', data);
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id)
      this.products[productIndex] = data;
    });
  }

  deleteProduct() {
    const id = this.productChosen.id;
    this.productService.delete(id)
    .subscribe(data => {
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id)
    });
  }
}
