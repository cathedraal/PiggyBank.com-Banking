import { Component } from '@angular/core';
import { transactionFlowItem } from '../../models/interfaces/default/transactionFlow.model';
import { TRANSACTION_FLOW } from '../../constants/constants';
import { TransactionFlowService } from '../../services/transaction-flow/transaction-flow';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-transaction-flow-header',
  imports: [RouterLink],
  templateUrl: './transaction-flow-header.html',
  styleUrl: './transaction-flow-header.css',
})
export class TransactionFlowHeaderComponent {
  // html template
  transactionFlowContext: keyof transactionFlowItem = 'addMoney'
  transactionFlowWordsArr: transactionFlowItem = TRANSACTION_FLOW

  // DI
  constructor(private transactionFlowService: TransactionFlowService) {
    this.transactionFlowContext = this.transactionFlowService.getTransactionFlowContext()
  }
}
