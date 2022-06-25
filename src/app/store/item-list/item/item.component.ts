import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemModel } from './item.model';
import ItemData from 'src/assets/data.json';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  itemFromList: ItemModel = new ItemModel();
  id: any;
  total: any;
  itemValue: any = 1;
  itemPrice: any;
  ItemList: ItemModel[] = [];
  values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.ItemList = ItemData;
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id != null) {
        this.itemFromList = this.ItemList[this.id];
        console.log(params);
      }
    });
    this.itemPrice = this.itemFromList.price;
  }
  setValue(itemValue: any, itemPrice: any) {
    this.itemValue = itemValue.target.value;
    this.itemPrice = itemPrice;
  }
  addToCart() {
    this.total = this.itemValue * this.itemPrice;
    window.alert('Added To Cart!');
    let item = {
      name: this.itemFromList.name,
      price: this.itemFromList.price,
      url: this.itemFromList.url,
      total: this.total,
      count: this.itemValue,
    };
    this.cartService.addToCart(item);
  }
}
