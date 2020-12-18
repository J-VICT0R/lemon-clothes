import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'lemon-clothes';
  darkModeActivated: boolean = false;

  @HostBinding('class')
  get themeMode() {
    return this.darkModeActivated ? 'dark-theme' : 'light-theme';
  }

  toggleLightMode(_event) {
    this.darkModeActivated = !this.darkModeActivated
  }
}
