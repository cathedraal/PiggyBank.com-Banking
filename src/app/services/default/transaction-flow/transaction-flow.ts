import { Injectable, signal } from '@angular/core';
import { transactionFlowItem } from '../../../models/interfaces/default/transactionFlow.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionFlowService {
  private transactionFlow = false;
  private recipientInfoPassed = signal(false);
  private choosingWalletPassed = signal(false);
  private transactionFlowContext: keyof transactionFlowItem = 'addMoney';

  // sending money - first step
  setRecipientInfoPassed(value: boolean): void {
    this.recipientInfoPassed.set(value);
  }

  isRecipientInfoPassed(): boolean {
    return this.recipientInfoPassed();
  }

  // first or second step (depends on context of transaction flow)
  setChoosingWalletPassed(value: boolean): void {
    this.choosingWalletPassed.set(value);
  }

  isChoosingWalletPassed(): boolean {
    return this.choosingWalletPassed();
  }

  // sets transaction flow context
  setTransactionFlowContext(value: keyof transactionFlowItem): void {
    this.transactionFlowContext = value;
  }

  getTransactionFlowContext(): keyof transactionFlowItem {
    return this.transactionFlowContext;
  }

  // sets transaction flow
  setTransactionFlow(value: boolean) {
    this.transactionFlow = value;
  }

  isTransactionFlow(): boolean {
    return this.transactionFlow;
  }
}
