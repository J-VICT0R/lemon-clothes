import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'lemon-clothes';
  darkModeActivated: boolean = true;

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { }

  toggleLightMode(_event) {
    if (this.darkModeActivated) this.renderer.addClass(this.document.body, 'dark-theme');
    else this.renderer.removeClass(this.document.body, 'dark-theme');
    this.darkModeActivated = !this.darkModeActivated
  }
}
