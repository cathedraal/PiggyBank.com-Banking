import { Component } from '@angular/core';
import { TRANSACTION_BENEFITS } from '../../../constants/landing';

@Component({
  selector: 'app-transaction-benefits',
  imports: [],
  templateUrl: `./transaction-benefits.html`,
  styleUrl: './transaction-benefits.css',
})
export class TransactionBenefitsComponent {
  // html template
  transactionBenefits: string[] = TRANSACTION_BENEFITS;
}
