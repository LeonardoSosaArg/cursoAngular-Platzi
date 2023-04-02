import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstProject';
  parrafo = "El property binding, se utiliza para manejar las propiedades de html."
  + "A diferencia de la interpolación que se utiliza para definir contenidos en las etiquetas"

  btnDisabled = true;
  textButton= "Submit";
  name = "Lio Messi";
  age = 31;
  img="https://media.istockphoto.com/id/500755774/es/foto/lightsaber-en-el-espacio-medio-ambiente-listo-para-bocetos-de-sus-personajes.jpg?s=612x612&w=0&k=20&c=nn81aIKxaOScCXmqCnwytgTez4K4vprTKcorIIgOyrA=";

  person = {
    name : "Lio Messi",
    age : 31,
    img : "https://media.istockphoto.com/id/500755774/es/foto/lightsaber-en-el-espacio-medio-ambiente-listo-para-bocetos-de-sus-personajes.jpg?s=612x612&w=0&k=20&c=nn81aIKxaOScCXmqCnwytgTez4K4vprTKcorIIgOyrA="
  }

  players: string[] = ['Lio Messi','Julian Alvarez','Dibu Martinez']
  newPlayer: string;

  products:Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]


  addPlayer(player: string){
    this.players.push(this.newPlayer);
    this.newPlayer = '';
  }

  deletePlayer(index: number){
    this.players.splice(index, 1);
  }

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increment(){
    this.age ++;
  }

  decrement(){
    this.age --;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement
    this.name = element.value
  }

}
