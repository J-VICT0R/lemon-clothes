import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MainSliderComponent } from './components/main-slider/main-slider.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainSliderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
