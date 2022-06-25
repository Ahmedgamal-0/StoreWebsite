import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-alert',
  templateUrl: './payment-alert.component.html',
  styleUrls: ['./payment-alert.component.css'],
})
export class PaymentAlertComponent implements OnInit {
  total: any;
  fullName: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.total = params.get('total');
      this.fullName = params.get('fullName');
    });
  }
}
