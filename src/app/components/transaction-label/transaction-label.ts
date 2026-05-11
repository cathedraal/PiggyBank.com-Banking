import { Component, Input } from '@angular/core';
import { TransactionFlowService } from '../../services/default/transaction-flow/transaction-flow';

@Component({
  selector: 'app-transaction-label',
  imports: [],
  templateUrl: './transaction-label.html',
  styleUrl: './transaction-label.css',
})
export class TransactionLabelComponent {
  // inputs
  @Input() isRecipientInfoPassed: boolean = false;
  @Input() isChoosingWalletPassed: boolean = false;

  // DI
  constructor(protected transactionFlowService: TransactionFlowService) {}
}
