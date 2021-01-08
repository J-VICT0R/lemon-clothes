import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductImage } from 'src/app/core/models/dto/product-image';

@Component({
  selector: 'app-product-card-dialog',
  templateUrl: './product-card-dialog.component.html',
  styleUrls: ['./product-card-dialog.component.sass']
})
export class ProductCardDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductImage) {}

  ngOnInit(): void {
  }

}
