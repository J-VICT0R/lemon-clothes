export enum ProductFilterType {
  COLOR,
  CATEGORY,
  PRICE
}

export namespace ProductFilterType {
  export function getLabel(e: ProductFilterType) {
    switch (e) {
      case ProductFilterType.CATEGORY:
        return 'Category'
      case ProductFilterType.COLOR:
        return 'Color'
      case ProductFilterType.PRICE:
        return 'Price'
      default:
        return 'Unknown'
    }
  }
}
