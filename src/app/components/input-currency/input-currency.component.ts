import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormItem } from '../../models/FormItem';

@Component({
  selector: 'app-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputCurrencyComponent implements OnChanges {

  @Input() formItem: FormItem;

  currencyCode = '€';
  numberStep = 1;

  constructor() { }

  roundValueToPrecision() {
    this.formItem.value =
          Math.round( this.formItem.value * Math.pow(10, this.formItem.precision))
                                  / Math.pow(10, this.formItem.precision);
  }


  ngOnChanges() {
    if (!this.formItem.precision) {
      this.formItem.precision = 0;
    }

    if (this.formItem.precision) {
      this.numberStep = Math.pow(10, -this.formItem.precision);
    } else {
      this.numberStep = 1;
    }

    if ( !this.formItem.symbol) {
      this.currencyCode = '';
    } else {
      if ( this.formItem.symbol === 'EUR' ) {
        this.currencyCode = '€';
      } else if ( this.formItem.symbol === 'USD' ) {
        this.currencyCode = '$';
      } else {
        this.currencyCode = this.formItem.symbol;
      }
    }
  }

}
