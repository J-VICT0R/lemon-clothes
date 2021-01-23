export enum ProductCategory {
  T_SHIRT = 'T-shirt',
  SNEAKERS = 'Sneakers'
}

export namespace ProductCategory {
  export function getLabel(e: ProductCategory) {
    switch (e) {
      case ProductCategory.T_SHIRT:
        return 'T-Shirt'
      case ProductCategory.SNEAKERS:
        return 'Sneakers'
      default:
        return 'Unknown'
    }
  }
}
