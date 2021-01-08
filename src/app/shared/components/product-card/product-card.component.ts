import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductImage } from 'src/app/core/models/dto/product-image';
import { ProductCardDialogComponent } from '../product-card-dialog/product-card-dialog.component';

interface DialogData {
  productImage: ProductImage
}

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  @Input() productImage: ProductImage
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  zoomImg(pi: ProductImage) {
    this.dialog.open(ProductCardDialogComponent, {
      data: pi
    });
  }
}
