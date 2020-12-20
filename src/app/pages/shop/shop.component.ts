import { Component, OnInit } from '@angular/core';
import { ProductFilterType } from '../../core/models/enum/product-filter-type.enum'
import { ProductCategory } from '../../core/models/enum/product-category.enum'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {

  constructor() { }

  products: []

  filters = [
    {
      description: ProductFilterType.CATEGORY,
      items: Object.values(ProductCategory).map(pc => {
        return {
          value: pc
        }
      })
    },
    {
      description: ProductFilterType.COLOR,
      items: [
      {
        label: 'Red',
        value: '#ff0000'
      },
      {
        label: 'Green',
        value: '#00ff00'
      },
      {
        label: 'Blue',
        value: '#0000ff'
      },
      {
        label: 'Yellow',
        value: '#ffff00'
      },
      {
        label: 'Purple',
        value: '#ff00ff'
      },
    ]
    },
    {
      description: ProductFilterType.PRICE,
      items: [{
        value: 1000  // get the highest priced product
      }]
    }
  ]

  ngOnInit(): void {
    console.log('SHOP')
  }

}
