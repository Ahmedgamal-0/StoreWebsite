import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './store/cart/cart.component';
import { CartService } from './store/cart/cart.service';
import { ItemListComponent } from './store/item-list/item-list.component';
import { ItemComponent } from './store/item-list/item/item.component';
import { NavbarComponent } from './store/navbar/navbar.component';
import { PaymentAlertComponent } from './store/payment-alert/payment-alert.component';

@NgModule({
  declarations: [AppComponent, ItemListComponent, ItemComponent, CartComponent, NavbarComponent, PaymentAlertComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
