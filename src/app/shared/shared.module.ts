import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';


import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCardDialogComponent } from './components/product-card-dialog/product-card-dialog.component';

const angular = [
  FormsModule,
  ReactiveFormsModule
]

const angularMaterial = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatSliderModule,
  MatExpansionModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDialogModule
]

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductCardDialogComponent
  ],
  imports: [
    CommonModule,
    ...angular,
    ...angularMaterial
  ],
  providers:[
  ],
  exports: [
    ...angular,
    ...angularMaterial,
    ProductCardComponent
  ]
})

//Components to use in others modules
//Avoid use services in this module
export class SharedModule { }
