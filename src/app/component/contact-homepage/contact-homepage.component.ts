import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-homepage',
  templateUrl: './contact-homepage.component.html',
  styleUrls: ['./contact-homepage.component.css']
})
export class ContactHomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  contactUsButtonClicked() {
    this.router.navigate(["/contact-us"]);
  }
}
