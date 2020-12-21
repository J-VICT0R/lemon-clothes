import { ProductCategory } from '../enum/product-category.enum'
import { Color } from '../dto/color'

export interface Product {
  id: number
  name: string
  price: number
  color: Color
  category: ProductCategory
}
