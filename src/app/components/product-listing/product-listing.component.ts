import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/mock-data/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getProducs()
      .subscribe((products) => (this.products = products));
  }
}
