import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentCopyrightYear : number = 2020; //fallback value
   
  constructor() { }

  ngOnInit(): void {
    this.currentCopyrightYear = new Date().getFullYear();
  }

}
