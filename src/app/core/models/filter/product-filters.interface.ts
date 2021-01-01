import { ProductCategory } from "../enum/product-category.enum";

export interface ProductFilters {
  names?: string[],
  categories?: ProductCategory[],
  colors?: string[],
  maxPrice?: number
}
