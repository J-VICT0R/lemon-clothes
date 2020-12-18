import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';

import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ShopComponent,
    ProductFiltersComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class ShopModule { }
