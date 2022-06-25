import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './store/cart/cart.component';
import { ItemListComponent } from './store/item-list/item-list.component';
import { ItemComponent } from './store/item-list/item/item.component';
import { PaymentAlertComponent } from './store/payment-alert/payment-alert.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ItemListComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'cart', component: CartComponent },
  { path: 'paymentsuccess/:total/:fullName', component: PaymentAlertComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
