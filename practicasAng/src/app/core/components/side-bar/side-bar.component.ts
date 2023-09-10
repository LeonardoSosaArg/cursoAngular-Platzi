import { Component } from '@angular/core';
import { navBarData } from './nav-data';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  collapsed = false;
  navData = navBarData;

}
