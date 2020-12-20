import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';

@NgModule({
  declarations: [
    ShopComponent,
    ProductFilterComponent
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
