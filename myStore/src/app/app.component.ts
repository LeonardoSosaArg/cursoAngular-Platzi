import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  // https://picsum.photos/200
  // imgParent = 'https://www.w3schools.com/howto/img_avatar.png';


  constructor() {

  }


  onLoaded(img: string){
    console.log(img);
  }


}
