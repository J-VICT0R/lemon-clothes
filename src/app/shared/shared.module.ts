import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardComponent } from './components/product-card/product-card.component';

const angularMaterial = [
  MatButtonModule,
  MatIconModule
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
