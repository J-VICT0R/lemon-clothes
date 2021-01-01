export enum ProductFilterType {
  COLOR,
  CATEGORY,
  PRICE,
  NAME
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
      case ProductFilterType.NAME:
        return 'Name'
      default:
        return 'Unknown'
    }
  }
}
