import { Component, EventEmitter, Output } from '@angular/core';
import { navBarData } from './navData';
import { Router } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

interface NavItem {
  routerLink: string;
  icon: string;
  label: string;
}
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  navData: NavItem[] = navBarData;
  collapsed = false;
  screenWidth = 0;

  constructor(private router: Router) {
    console.log(this.navData);
  }

  toogleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  closeSideNav() {
    this.collapsed = true;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  navigateTo(param: any) {
    if (param != '') {
      const isTactile = window.screen.width < 900;
      if (isTactile) {
      }
      this.router.navigateByUrl(param);
    }
  }
}
