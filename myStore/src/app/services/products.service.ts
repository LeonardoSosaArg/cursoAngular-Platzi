import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private myShoppingCart: Product[] = [];

  products: Product[] = [
    {
      id:"1",
      name:"Gabinete RGB",
      price: 230,
      image: "./assets/img/gabinete2.jpg"
    },
    {
      id:"2",
      name:"HeadPhone",
      price: 330,
      image: "./assets/img/headphone.jpg"
    },
    {
      id:"3",
      name:"HeadPhone Wireless",
      price: 350,
      image: "./assets/img/headphones-wireless.jpg"
    },
    {
      id:"4",
      name:"Joystick PS4",
      price: 255,
      image: "./assets/img/joystick-ps4.jpg"
    },
    {
      id:"5",
      name:"Joystick Xbox",
      price: 290,
      image: "./assets/img/joystick-xbox.jpg"
    },
    {
      id:"6",
      name:"Monitor Apple",
      price: 680,
      image: "./assets/img/monitor-apple.jpg"
    },
    {
      id:"7",
      name:"Monitor x2",
      price: 730,
      image: "./assets/img/monitor-double.jpg"
    },
    {
      id:"8",
      name:"Mouse RGB",
      price: 190,
      image: "./assets/img/mouse.jpg"
    },
    {
      id:"9",
      name:"Mouse & Teclado",
      price: 510,
      image: "./assets/img/mouse&teclado.jpg"
    },
    {
      id:"10",
      name:"Teclado Mecánico",
      price: 440,
      image: "./assets/img/teclado-mecanico.jpg"
    },
    {
      id:"11",
      name:"Teclado Wireless",
      price: 280,
      image: "./assets/img/teclado-wireless.jpg"
    },    {
      id:"12",
      name:"WebCam Logitech",
      price: 210,
      image: "./assets/img/webcam2.jpg"
    }
  ];

  constructor() { }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getProducts(): Product[]{
    return this.products;
  }

  addProduct(product: Product){
    this.myShoppingCart.push(product);
  }

  getTotal() : number{
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

}
