import { Component } from '@angular/core';
import { transactionFlowItem } from '../../models/interfaces/default/transactionFlow.model';
import { TRANSACTION_FLOW } from '../../constants/transaction';
import { TransactionFlowService } from '../../services/transaction-flow/transaction-flow';
import { ActionLoaderService, transActionSource } from '../../services/action-loader/action-loader';
import { maskCardNumber } from '../../utils/utils';

@Component({
  selector: 'app-action-loader',
  imports: [],
  templateUrl: './action-loader.html',
  styleUrl: './action-loader.css',
})
export class ActionLoaderComponent {
  // html template
  transactionFlowContext: keyof transactionFlowItem = 'addMoney';
  transactionFlowWordsArr: transactionFlowItem = TRANSACTION_FLOW;
  source: transActionSource
  formatNumber = maskCardNumber

  // DI
  constructor(
    protected transactionFlowService: TransactionFlowService,
    protected actionLoaderService: ActionLoaderService,
  ) {
    this.transactionFlowContext = this.transactionFlowService.getTransactionFlowContext();
    this.source = this.actionLoaderService.getSource()
  }
}
