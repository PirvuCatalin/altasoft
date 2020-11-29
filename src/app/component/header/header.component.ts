import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeHeader: String = "home";

  constructor(private router: Router) {
    this.subscribeToRouterChange();
  }

  subscribeToRouterChange() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url === "/" || val.url === "/home") {
          this.activeHeader = "home";
        } else if (val.url === "/about-us") {
          this.activeHeader = "about-us";
        } else {
          this.activeHeader = "contact";
        }
      }
    });
  }
}
