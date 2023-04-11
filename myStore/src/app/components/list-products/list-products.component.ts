import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {

  products: Product[] = [];
  myShoppingCart: Product[] = [];
  total:number = 0;
  
  constructor(private productService: ProductsService) {
    this.products = productService.getProducts();
    this.myShoppingCart = productService.getShoppingCart();
  }

  onAddToShoppingCart(product: Product){
    this.productService.addProduct(product);
    this.total = this.productService.getTotal();
  }

}
