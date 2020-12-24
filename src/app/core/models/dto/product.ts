import { ProductCategory } from '../enum/product-category.enum'
import { Color } from '../dto/color'
import { Genre } from '../enum/genre.enum'

export interface Product {
  id: number
  name: string
  price: number
  colors: Color[]
  genre: Genre
  category: ProductCategory
}
