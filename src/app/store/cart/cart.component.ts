import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemModel } from '../item-list/item/item.model';
import ItemData from 'src/assets/data.json';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList: any;
  totalCart: number = 0;
  fullName: string = '';

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getItems();
    this.calculateTotal();
  }
  calculateTotal() {
    this.totalCart = 0;
    this.cartList.forEach((x: any) => {
      this.totalCart += x.total;
    });
  }
  deleteItem(index: number) {
    this.cartService.deleteItem(index);
    this.calculateTotal();
    window.alert("You have Removed Item From Your Cart ")
  }

  onSubmit() {
    this.router.navigate(['/paymentsuccess', this.totalCart, this.fullName]);
    this.cartService.clearCart();
    this.totalCart=0;
  }
  
}
