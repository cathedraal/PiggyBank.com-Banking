import { Component, OnInit } from '@angular/core';
import { CurrencyApiService } from '../../../services/currency-api/currency-api';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-currency',
  imports: [DecimalPipe],
  templateUrl: `./currency.html`,
  styleUrl: './currency.css',
})
export class CurrencyComponent implements OnInit {
  // api
  constructor(protected currencyApiService: CurrencyApiService) {
    console.log(this.currencyApiService.usd())
    console.log(this.currencyApiService.gbp())
  }

  ngOnInit(): void {
    this.currencyApiService.loadRates()
  }
}
