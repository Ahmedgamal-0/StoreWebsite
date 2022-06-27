import { Component, OnInit } from '@angular/core';
import { ItemModel } from './item/item.model';
import ItemData from 'src/assets/data.json';
import { CartService } from '../cart/cart.service';
import { ItemService } from './item/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: ItemModel[] = [];
  values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  id: any;
  total: number = 0;
  itemValue: number = 1;
  itemPrice: number = 0;
  constructor(private cartService: CartService,
    private itemService: ItemService) {

  }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() {
    this.itemService.getAllItems().subscribe((response) => {
      this.items = response;
    });
  }

  setValue(itemValue: any) {
    this.itemValue = itemValue.target.value;
  }
  addToCart(index: any) {
    this.id = index;
    this.itemPrice = this.items[this.id].price;
    this.total = this.itemValue * this.itemPrice;
    window.alert('Added To Cart!');
    let item = {
      id: this.id,
      name: this.items[this.id].name,
      price: this.items[this.id].price,
      url: this.items[this.id].url,
      total: this.total,
      count: this.itemValue,
    };
    this.cartService.addToCart(item);
  }
}
