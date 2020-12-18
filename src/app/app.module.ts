import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './pages/home/home.module';
import { ShopModule } from './pages/shop/shop.module';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './main-components/nav-menu/nav-menu.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    CoreModule,
    SharedModule,

    HomeModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
