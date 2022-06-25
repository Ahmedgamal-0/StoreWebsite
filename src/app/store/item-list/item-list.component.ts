import { Component, OnInit } from '@angular/core';
import { ItemModel } from './item/item.model';
import ItemData from 'src/assets/data.json';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: ItemModel[] = [];
  values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  id: any;
  total: any;
  itemValue: any = 1;
  itemPrice: any;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = ItemData;
  }
  setValue(itemValue: any) {
    this.itemValue = itemValue.target.value;
  }
  addToCart(index:any) {
    this.id = index;
    this.itemPrice = this.items[this.id].price;
    this.total = this.itemValue * this.itemPrice;
    window.alert('Added To Cart!');
    let item = {
      name: this.items[this.id].name,
      price: this.items[this.id].price,
      url: this.items[this.id].url,
      total: this.total,
      count: this.itemValue,
    };
    this.cartService.addToCart(item);
  }
}
