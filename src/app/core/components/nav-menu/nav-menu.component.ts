import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.sass']
})
export class NavMenuComponent implements OnInit {

  links = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Shop',
      url: 'shop'
    },
    {
      name: 'About',
      url: ''
    },
    {
      name: 'Blog',
      url: ''
    }
  ]

  constructor() { }

  @Output()
  changeLightModeEmitter = new EventEmitter()

  @Input()
  darkModeActivated: boolean

  changeLightMode() {
    this.changeLightModeEmitter.emit(!this.darkModeActivated)
  }

  ngOnInit(): void { }
}
