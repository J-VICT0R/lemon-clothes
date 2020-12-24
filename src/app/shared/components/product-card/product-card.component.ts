import { Component, Input, OnInit } from '@angular/core';
import { ProductImage } from 'src/app/core/models/dto/product-image';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  @Input() productImage: ProductImage
  constructor() {}

  ngOnInit(): void {
  }

}
