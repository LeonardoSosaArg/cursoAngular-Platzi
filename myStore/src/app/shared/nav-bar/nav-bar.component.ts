import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  activeMenu = false;
  contador = 0;

  constructor(private storeService: StoreService) {
    
  }
  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.contador = products.length;
    })
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

}
