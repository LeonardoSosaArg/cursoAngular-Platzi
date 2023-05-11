import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductCreateDto } from '../models/productCreateDto';
import { ProductUpdateDto } from '../models/productUpdateDto';

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

  createProduct(productDto: ProductCreateDto){
    return this.http.post<Product>(this.urlBase + 'products' , productDto);
  }

  //LA DIFERENCIA ENTRE PUT Y PATCH
  //PUT ENVIA TODO EL OBJETO, AUN SI MODIFICAMOS UN SOLO CAMPO
  //PATCH ENVIA SOLO EL CAMPO QUE MODIFICADMOS
  updateProudct(id : number ,updateDto: ProductUpdateDto){
    return this.http.put<Product>(`${this.urlBase}products/${id}` , updateDto);
  }

}
