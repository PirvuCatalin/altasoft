import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-home-page',
  templateUrl: './first-home-page.component.html',
  styleUrls: ['./first-home-page.component.css']
})
export class FirstHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickScrollArrow() {
    const scrollTarget = document.getElementById("expertiseElement");
    let headerHeight = document.getElementsByClassName("custom-header")[0].scrollHeight;

    if (scrollTarget) {
      window.scrollTo({
        top: scrollTarget.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  }
}
