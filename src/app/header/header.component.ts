import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShow = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    const bool = this.isShow;
    this.isShow = bool === false ? true : false;
  }

}
