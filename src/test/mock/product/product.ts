import { Genre } from "src/app/core/models/enum/genre.enum";
import { Product } from "../../../app/core/models/dto/product";
import { ProductCategory } from "../../../app/core/models/enum/product-category.enum";

export let mockedProducts: Product[] = [
  {
    id: 0,
    name: 'Camisa',
    category: ProductCategory.T_SHIRT,
    colors: [{
      name: 'Yellow',
      value: '#ffff00'
    }],
    genre: Genre.MALE,
    price: 200
  },
  {
    id: 1,
    name: 'Supreme T-Shirt',
    category: ProductCategory.T_SHIRT,
    colors: [{
      name: 'Purple',
      value: '#ff00ff'
    }],
    genre: Genre.MALE,
    price: 100
  },
  {
    id: 2,
    name: 'Nike Air 99.0',
    category: ProductCategory.SNEAKERS,
    colors: [{
      name: 'Blue',
      value: '#0000ff'
    }],
    genre: Genre.MALE,
    price: 99.50
  },
  {
    id: 3,
    name: 'BR Camisa',
    category: ProductCategory.T_SHIRT,
    colors: [{
      name: 'Red',
      value: '#ff0000'
    }],
    genre: Genre.MALE,
    price: 700
  },
  {
    id: 4,
    name: 'NA Camisa',
    category: ProductCategory.T_SHIRT,
    colors: [{
      name: 'Yellow',
      value: '#ffff00'
    },
    {
      name: 'Green',
      value: '#00ff00'
    }
  ],
    genre: Genre.MALE,
    price: 100
  },
  {
    id: 5,
    name: 'X0 Camisa',
    category: ProductCategory.T_SHIRT,
    colors: [{
      name: 'Red',
      value: '#ff0000'
    }],
    genre: Genre.MALE,
    price: 100
  },
  {
    id: 6,
    name: 'YE Camisa',
    category: ProductCategory.T_SHIRT,
    colors: [{
      name: 'Yellow',
      value: '#ffff00'
    }],
    genre: Genre.MALE,
    price: 100
  }
]
