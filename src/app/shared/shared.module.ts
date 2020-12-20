import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';


import { ProductCardComponent } from './components/product-card/product-card.component';

const angularMaterial = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatSliderModule,
  MatExpansionModule,
  MatInputModule
]

@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ...angularMaterial
  ],
  providers:[
  ],
  exports: [
    ...angularMaterial,
    ProductCardComponent
  ]
})

//Components to use in others modules
//Avoid use services in this module
export class SharedModule { }
