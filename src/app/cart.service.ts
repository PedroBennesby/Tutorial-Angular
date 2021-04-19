import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './IProduct';

@Injectable()
export class CartService {
  items: IProduct[] = [];

  addToCart(product: IProduct) {
    this.items.push(product);
  }

  getItems(): IProduct[] {
    return this.items;
  }

  clearCart(): IProduct[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  constructor(private http: HttpClient) {}
}
