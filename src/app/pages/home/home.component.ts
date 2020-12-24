import { Component, OnInit } from '@angular/core';
import { ProductImage } from 'src/app/core/models/dto/product-image';
import { ProductService } from 'src/app/core/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  productsImage: ProductImage[] = this.productService.getProducts().map(p => <ProductImage>{
    ...p,
    imageSrc: `../../../assets/img/clothes/${p.genre.toLocaleLowerCase()}/${p.id}.jpg`
  }).filter(p => p.id < 6)

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    console.log('HOME')
  }

}
