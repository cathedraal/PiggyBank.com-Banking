import { Component } from '@angular/core';
import { transactionSettingItem } from '../../../../models/interfaces/transactionSettings.model';
import { TRANSACTION_SETTINGS } from '../../../../constants/constants';

@Component({
  selector: 'app-transaction-limits-fees',
  imports: [],
  templateUrl: './transaction-limits-fees.html',
  styleUrl: './transaction-limits-fees.css',
})
export class TransactionLimitsFeesComponent {
  transactionSettings: transactionSettingItem[] = TRANSACTION_SETTINGS
}
