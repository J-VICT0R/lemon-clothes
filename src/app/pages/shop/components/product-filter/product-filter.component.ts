import { Component, Input, OnInit } from '@angular/core';
import { ProductFilterType } from '../../../../core/models/enum/product-filter-type.enum'
import { ProductCategory } from '../../../../core/models/enum/product-category.enum'

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.sass']
})
export class ProductFilterComponent implements OnInit {

  @Input()
  filter: {
    description: string;
    items: {
        label: string;
        value: unknown;
    }[];
  }

  ProductFilterType = ProductFilterType
  panelOpenState = false

  selectedColors: string[] = []
  selectedCategories: ProductCategory[] = []
  maxPriceSelected: number = 0

  constructor() { }

  selectCategory(category: ProductCategory): void {
    let categoryIdx = this.selectedCategories.findIndex(c => c == category)
    if (categoryIdx > -1) this.selectedCategories.splice(categoryIdx, 1)
    else this.selectedCategories.push(category)
  }

  selectColor(color: string): void {
    let colorIdx = this.selectedColors.findIndex(c => c == color)
    if (colorIdx > -1) this.selectedColors.splice(colorIdx, 1)
    else this.selectedColors.push(color)
  }

  ngOnInit(): void { }

}
