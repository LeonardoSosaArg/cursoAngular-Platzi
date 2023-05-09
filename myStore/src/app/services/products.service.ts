import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductCreateDto } from '../models/productCreateDto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private urlBase = 'https://young-sands-07814.herokuapp.com/api/'; 
  

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>(this.urlBase + 'products?limit=12&offset=12');
  }

  getProduct(id: string){
    return this.http.get<Product>(this.urlBase + 'products/' + id);
  }

  createProduct(product: ProductCreateDto){
    return this.http.post<ProductCreateDto>(this.urlBase + 'products' , product);
  }

}
