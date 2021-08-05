import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/Product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  total: number=0;
  constructor() { }

  addToCart(product: Product) {
    if (this.items.findIndex((obj => obj.productID == product.productID)) >= 0) {
      let objIndex = this.items.findIndex((obj => obj.productID == product.productID));
      this.items[objIndex].quantity = this.items[objIndex].quantity + 1;
    }
    else {
      product.quantity = 1;
      this.items.push(product);
    }
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    this.total = 0;
    if (this.items.length > 0) {
      for (let j = 0; j < this.items.length; j++) {
        this.total += (this.items[j].price*this.items[j].quantity);
      }
      return this.total;
    }
    return 0;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

  removeFromCart(id: number) {
    if (this.items.findIndex((obj => obj.productID == id)) >= 0) {
      this.items = this.items.filter(x => x.productID != id);
    }
  }
}
