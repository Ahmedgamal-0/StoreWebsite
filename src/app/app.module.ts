import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './store/cart/cart.component';
import { CartService } from './store/cart/cart.service';
import { ItemListComponent } from './store/item-list/item-list.component';
import { ItemComponent } from './store/item-list/item/item.component';
import { NavbarComponent } from './store/navbar/navbar.component';
import { PaymentAlertComponent } from './store/payment-alert/payment-alert.component';
import { ClientPaymentComponent } from './store/cart/client-payment/client-payment.component';
import { InputValidationComponent } from './store/cart/client-payment/input-validation/input-validation.component';

@NgModule({
  declarations: [AppComponent, ItemListComponent, ItemComponent, CartComponent, NavbarComponent, PaymentAlertComponent, ClientPaymentComponent, InputValidationComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule { }
