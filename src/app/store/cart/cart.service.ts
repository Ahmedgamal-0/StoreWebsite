import { Injectable } from '@angular/core';

export interface Item {
  id: number,
  name: string,
  price: number,
  url: string,
  total: number,
  count: number,
}
@Injectable({ providedIn: 'root' })
export class CartService {
  constructor() { }

  items: Item[] = [];
  isFound = false;
  id: number = 0;

  addToCart(item: Item) {
    this.items.forEach((element: any) => {
      if (element.id == item.id) {
        this.id = element.id;
        this.isFound = true
      }
    });
    if (this.isFound) {
      console.log(this.items);
      this.items[this.id].count = Number(this.items[this.id].count) + Number(item.count);
    }
    else {
      this.items.push(item);
    }
  }
  deleteItem(id: number) {
    this.items.splice(id, 1);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
  }
}
