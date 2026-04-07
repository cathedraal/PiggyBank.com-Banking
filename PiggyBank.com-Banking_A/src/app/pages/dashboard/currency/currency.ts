import { Component } from '@angular/core';
import { CURRENCY_TYPES } from '../../../constants/constants';
import { currencyTypesItem } from '../../../models/interfaces/currencies.model';
import { BankService } from '../../../services/bank/bank.service';
import { Card } from '../../../models/card.model';

@Component({
  selector: 'app-currency',
  imports: [],
  templateUrl: `./currency.html`,
  styleUrl: './currency.css',
})
export class CurrencyComponent {

}
