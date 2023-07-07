import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  sideMenuToggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  

  sideMenu(){
    this.sideMenuToggle = !this.sideMenuToggle;
  }

}
