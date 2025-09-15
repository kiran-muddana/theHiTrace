import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-product-details-modal',
  imports: [CommonModule, MatIcon, MatDialogModule],
  templateUrl: './product-details-modal.html',
  styleUrl: './product-details-modal.css',
})
export class ProductDetailsModal {
  constructor(
    public dialogRef: MatDialogRef<ProductDetailsModal>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
