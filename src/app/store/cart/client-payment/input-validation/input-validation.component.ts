import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})
export class InputValidationComponent implements OnInit {
  @Input() value: any;
  @Input() type: string = '';
  isValid: boolean = false;
  count: number = 0;


  constructor() { }

  ngOnInit(): void {
    console.log(this.value,this.type);
    this.validate(this.value, this.type);
  }
  validate(value: any, type: string) {
    if (type === 'Full Name' && this.value.length > 2 && this.value != null) {
      this.isValid = true;
      this.count = 2;
    }
    else if (type === 'Address' && this.value.length >= 6 && this.value != null) {
      this.isValid = true;
      this.count = 5;
    }
    else if (type === 'Credit Card' && this.value.length === 14 && this.value != null) {
      this.isValid = true;
      this.count = 14;
    }
  }

}
