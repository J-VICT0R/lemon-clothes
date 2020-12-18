import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { BsCarouselComponent } from './components/bs-carousel/bs-carousel.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';

@NgModule({
  declarations: [
    HomeComponent,
    BsCarouselComponent,
    MainSliderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbCarouselModule
  ]
})
export class HomeModule { }
