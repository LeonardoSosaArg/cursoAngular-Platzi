import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductCreateDto } from 'src/app/models/productCreateDto';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products: Product[] = [];
  myShoppingCart: Product[] = [];
  total = 0;
  today = new Date();
  fechaUltimaCompra : Date = new Date('03/12/2023');
  showProductDetail = false;
  productSeleccionado: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: { id: 0, name: '', typeImg: '' },
    images: []
  };
  
  constructor(private productService: ProductsService, private storeService: StoreService) {
  }
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    })
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string){
    this.productService.getProduct(id)
    .subscribe(data =>{
      this.toggleProductDetail();
      this.productSeleccionado = data;
    })
  }

  createNewProduct(){
    const product : ProductCreateDto = {
       title: 'new Product',
       description: 'descripcion descripcion descripcion',
       images: [''],
       price: 1000,
       categoryId: 1
    }
    this.productService.createProduct(product).subscribe(data => {
      console.log(data);
    });
  }

}
