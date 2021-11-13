import { FirebaseDBService } from './../database/firebase-db.service';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/mock-data/product';
import { PRODUCTS } from './../../mock-data/product-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private fireDB: FirebaseDBService) {}

  getProducs(): Observable<Product[]> {
    const products = of(PRODUCTS);
    return products;
  }

  getProducss(): Observable<Product[]> {
    const products = of(PRODUCTS);
    const productss = this.fireDB.getProducts();
    return products;
  }
}
