import { Component } from '@angular/core';
import { TransactionFlowService } from '../../../services/default/transaction-flow/transaction-flow';
import { transactionFlowItem } from '../../../models/interfaces/default/transactionFlow.model';
import { TRANSACTION_FLOW } from '../../../constants/transaction';
import { RouterLink } from '@angular/router';
import { ActionLoaderService } from '../../../services/default/action-loader/action-loader';

@Component({
  selector: 'app-validation',
  imports: [RouterLink],
  templateUrl: './validation.html',
  styleUrl: './validation.css',
})
export class ValidationComponent {
  // html template
  transactionFlowContext: keyof transactionFlowItem = 'addMoney';
  transactionFlowWordsArr: transactionFlowItem = TRANSACTION_FLOW;

  // DI
  constructor(
    protected transactionFlowService: TransactionFlowService,
    protected actionLoaderService: ActionLoaderService,
  ) {
    this.transactionFlowContext = transactionFlowService.getTransactionFlowContext();
    this.transactionFlowService.setTransactionFlow(false);
  }
}
