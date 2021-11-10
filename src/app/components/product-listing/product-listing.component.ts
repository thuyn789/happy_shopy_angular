import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/mock-data/product';
import { PRODUCTS } from './../../mock-data/product-mock';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent implements OnInit {
  products: Product[] = PRODUCTS;

  constructor() {}

  ngOnInit(): void {}
}
