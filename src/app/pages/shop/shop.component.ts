import { Component, OnInit } from '@angular/core';
import { ProductFilterType } from '../../core/models/enum/product-filter-type.enum'
import { ProductCategory } from '../../core/models/enum/product-category.enum'
import { ProductService } from '../../core/services/product.service'
import { removeDuplicatesFromSimpleObjects } from 'src/app/core/util/array-util';
import { ProductImage } from 'src/app/core/models/dto/product-image';
import { FormControl } from '@angular/forms';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {

  constructor(private productService: ProductService) { }

  readonly productsImage: ProductImage[] = this.productService.getProducts().map(p => <ProductImage>{
      ...p,
      imageSrc: `../../../assets/img/clothes/${p.genre.toLocaleLowerCase()}/${p.id}.jpg`
    })

  filteredProducts: ProductImage[] = this.productsImage

  autoCompleteOptions = this.productsImage.map(p => p.name);
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();

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
      items: removeDuplicatesFromSimpleObjects(this.productsImage.flatMap(p => p.colors), ["name", "value"]).map(c => {
        return {
          label: c.name,
          value: c.value
        }
      })
    },
    {
      description: ProductFilterType.PRICE,
      items: [{
        value: this.productsImage.map(p => p.price).reduce((pp: number, cp: number) => Math.max(pp, cp))
      }]
    }
  ]

  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const fopts = this.autoCompleteOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    this.filteredProducts = this.productsImage.filter(p => fopts.includes(p.name))
    return fopts
  }

  ngOnInit(): void {
    console.log(this.productsImage)
    this.filteredOptions = this.myControl.valueChanges.pipe(
      map(value => this.filter(value))
    )
  }

}
