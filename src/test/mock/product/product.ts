import { Product } from "../../../app/core/models/dto/product";
import { ProductCategory } from "../../../app/core/models/enum/product-category.enum";

export let mockedProducts: Product[] = [
  {
    id: 0,
    name: 'Camisa',
    category: ProductCategory.T_SHIRT,
    color: {
      name: 'Yellow',
      value: '#ffff00'
    },
    price: 200
  },
  {
    id: 1,
    name: 'Supreme T-Shirt',
    category: ProductCategory.T_SHIRT,
    color: {
      name: 'Purple',
      value: '#ff00ff'
    },
    price: 100
  },
  {
    id: 2,
    name: 'Nike Air 99.0',
    category: ProductCategory.SNEAKERS,
    color: {
      name: 'Blue',
      value: '#0000ff'
    },
    price: 99.50
  },
  {
    id: 3,
    name: 'BR Camisa',
    category: ProductCategory.T_SHIRT,
    color: {
      name: 'Red',
      value: '#ff0000'
    },
    price: 700
  },
  {
    id: 4,
    name: 'NA Camisa',
    category: ProductCategory.T_SHIRT,
    color: {
      name: 'Red',
      value: '#ff0000'
    },
    price: 100
  },
  {
    id: 5,
    name: 'X0 Camisa',
    category: ProductCategory.T_SHIRT,
    color: {
      name: 'Red',
      value: '#ff0000'
    },
    price: 100
  },
  {
    id: 5,
    name: 'YE Camisa',
    category: ProductCategory.T_SHIRT,
    color: {
      name: 'Yellow',
      value: '#ffff00'
    },
    price: 100
  }
]
