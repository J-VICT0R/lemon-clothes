import { Injectable } from '@angular/core';
import { mockedProducts } from '../../../test/mock/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return mockedProducts
  }
}
