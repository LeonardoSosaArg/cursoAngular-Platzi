import { Component } from '@angular/core';
import { Product } from './models/product';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  // https://picsum.photos/200
  // imgParent = 'https://www.w3schools.com/howto/img_avatar.png';
  products: Product[] = [];

  constructor(private productService: ProductsService) {
    this.products = productService.getProducts();
  }

  onLoaded(img: string){
    console.log('log padre', img);
  }


}
