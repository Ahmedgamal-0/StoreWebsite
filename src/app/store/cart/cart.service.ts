import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor() {}

  items: any = [];

  addToCart(product: any) {
    this.items.push(product);
  }
  deleteItem(id: number) {
    this.items.splice(id,1);
  }
  getItems() {
    return this.items;
  }
  clearCart(){
    this.items=[];
  }
}
