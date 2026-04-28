import { Component, Input } from '@angular/core';
import { TransactionFlowService } from '../../services/transaction-flow/transaction-flow';

@Component({
  selector: 'app-transaction-label',
  imports: [],
  templateUrl: './transaction-label.html',
  styleUrl: './transaction-label.css',
})
export class TransactionLabelComponent {
  @Input() isRecipientInfoPassed: boolean = false
  @Input() isChoosingWalletPassed: boolean = false

  constructor(protected transactionFlowService: TransactionFlowService) {}
}
