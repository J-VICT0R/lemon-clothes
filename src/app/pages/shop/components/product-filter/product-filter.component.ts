import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductFilterType } from '../../../../core/models/enum/product-filter-type.enum'
import { ProductCategory } from '../../../../core/models/enum/product-category.enum'
import { ProductImage } from 'src/app/core/models/dto/product-image';
import { removeDuplicatesFromSimpleObjects } from 'src/app/core/util/array-util';
import { Color } from 'src/app/core/models/dto/color';
import { ProductFilters } from 'src/app/core/models/filter/product-filters.interface';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.sass']
})
export class ProductFilterComponent implements OnInit {
  // Don't need it be a ProductImage
  @Input()
  products: ProductImage[]

  @Output()
  filterEmitter = new EventEmitter<ProductFilters>()

  ProductFilterType = ProductFilterType
  panelOpenState = false

  initialColors: Color[]
  initialCategories: ProductCategory[]
  initialMaxPrice: number


  selectedColors: string[] = []
  selectedCategories: ProductCategory[] = []
  maxPriceSelected: number = 0

  filters: ProductFilterType[] = [ProductFilterType.CATEGORY, ProductFilterType.COLOR, ProductFilterType.PRICE]

  public productFilterTypeEnum = ProductFilterType

  constructor() { }

  emitFilter() {
    this.filterEmitter.emit(
      {
        categories: this.selectedCategories,
        colors: this.selectedColors,
        maxPrice: this.maxPriceSelected
      }
    )
  }

  selectMaxPrice(_event: any): void {
    this.emitFilter()
  }

  selectCategory(category: ProductCategory): void {
    let categoryIdx = this.selectedCategories.findIndex(c => c == category)
    if (categoryIdx > -1) this.selectedCategories.splice(categoryIdx, 1)
    else this.selectedCategories.push(category)
    this.emitFilter()
  }

  selectColor(color: string): void {
    let colorIdx = this.selectedColors.findIndex(c => c == color)
    if (colorIdx > -1) this.selectedColors.splice(colorIdx, 1)
    else this.selectedColors.push(color)
    this.emitFilter()
  }

  ngOnInit(): void {
    this.initialColors = removeDuplicatesFromSimpleObjects(this.products.flatMap(p => p.colors), ["name", "value"])
    this.initialCategories = Object.values(ProductCategory).filter(v => !(typeof v === 'function')) as ProductCategory[]
    this.initialMaxPrice = this.products.map(p => p.price).reduce((pp: number, cp: number) => Math.max(pp, cp))

    this.maxPriceSelected = this.initialMaxPrice
  }

}
