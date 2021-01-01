import { Component, OnInit } from '@angular/core';
import { ProductFilterType } from '../../core/models/enum/product-filter-type.enum'
import { ProductService } from '../../core/services/product.service'
import { ProductImage } from 'src/app/core/models/dto/product-image';
import { FormControl } from '@angular/forms';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators'
import { ProductFilters } from 'src/app/core/models/filter/product-filters.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {

  constructor(private productService: ProductService) { }

  readonly initialProductsImage: ProductImage[] = this.productService.getProducts().map(p => <ProductImage> {
      ...p,
      imageSrc: `../../../assets/img/clothes/${p.genre.toLocaleLowerCase()}/${p.id}.jpg`
    })

  filteredProducts: ProductImage[] = this.initialProductsImage

  filteredOptions: Observable<string[]>;
  myControl = new FormControl();

  selectedProductFilters: ProductFilters = {
    names: [],
    categories: [],
    colors: [],
    maxPrice: 0
  }

  filterFunctions = {
    [ProductFilterType.NAME] : (product: ProductImage) => this.selectedProductFilters.names.length === 0 ? true : this.selectedProductFilters.names.some(n => product.name === n),
    [ProductFilterType.CATEGORY] : (product: ProductImage) => this.selectedProductFilters.categories.every(scv => product.category.includes(scv)),
    [ProductFilterType.COLOR] : (product: ProductImage) => this.selectedProductFilters.colors.every(sc => product.colors.map(c => c.value).includes(sc)),
    [ProductFilterType.PRICE] : (product: ProductImage) => product.price <= this.selectedProductFilters.maxPrice
  }

  filterReceiver(filter: ProductFilters) {
    Object.keys(filter).forEach(k => {
      this.selectedProductFilters[k] = filter[k]
    })
    this.filterProducts()
  }

  filterProducts() {
    this.filteredProducts = this.initialProductsImage
      .filter(this.filterFunctions[ProductFilterType.NAME])
      .filter(this.filterFunctions[ProductFilterType.CATEGORY])
      .filter(this.filterFunctions[ProductFilterType.COLOR])
      .filter(this.filterFunctions[ProductFilterType.PRICE])
  }

  autoCompleteValueChange(value: string): string[] {
    const filterValue = value.toLowerCase();
    const autoCompleteOpts = this.initialProductsImage.map(p => p.name).filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    this.filterReceiver({
      names: autoCompleteOpts
    })
    return autoCompleteOpts
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      map(value => this.autoCompleteValueChange(value))
    )
  }
}
