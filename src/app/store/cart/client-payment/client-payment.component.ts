import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-payment',
  templateUrl: './client-payment.component.html',
  styleUrls: ['./client-payment.component.css']
})
export class ClientPaymentComponent implements OnInit {
  fullNameInput: string = '';
  address: string = '';
  creditCard: number = 0;
  @Output() fullName: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  setFullName() {
    this.fullName.emit(this.fullNameInput);
  }
  validateInputs() { }
}