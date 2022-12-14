import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product, createProductDTO, UpdateProductDTO } from './../models/product.model'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product[]>(this.apiUrl)
  }

  getProduct(id:string){
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  create(dto: createProductDTO) {
    return this.http.post<Product>(this.apiUrl, dto);
  }

  update(id: string, dto:UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
    // put deberia enviar toda la informacion del producto
    // patch para hacer la edicion de un atributo en particular
  }
  
  delete(id: string ){
    return this.http.get<boolean>(`${this.apiUrl}/${id}`)
  }
}
