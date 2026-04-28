import { Component, ElementRef, Signal, ViewChild } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user/user.service';
import { maskCardNumber } from '../../../utils/utils';
import { DecimalPipe } from '@angular/common';
import { Card } from '../../../models/card.model';
import { Router, RouterLink } from '@angular/router';
import { TransactionFlowService } from '../../../services/transaction-flow/transaction-flow';
import { RecipientService } from '../../../services/recipient/recipient.service';
import { Recipient } from '../../../models/recipient.model';
import { NotificationService } from '../../../services/notification/notification.service';
import { DAILY_TRANSACTION_LIMIT, TRANSACTION_FEES } from '../../../constants/constants';
import { PopupComponent } from '../../../components/popup/popup';

@Component({
  selector: 'app-choosing-wallet',
  imports: [DecimalPipe],
  providers: [DecimalPipe],
  templateUrl: './choosing-wallet.html',
  styleUrl: './choosing-wallet.css',
})
export class ChoosingWalletComponent {
  // html template
  protected user: Signal<User | null>;
  formatNumber = maskCardNumber;
  cardScrollWidth: number = 0;
  isScrolledTillEnd: boolean = false;
  placeholder: string = '0.00';
  isPopupOpen: boolean = false;
  popupContext: string = '';

  // variables
  @ViewChild('card') card!: ElementRef<HTMLElement>;
  @ViewChild('cards') cards!: ElementRef<HTMLElement>;
  selectedCard: Card | null = null;
  chosenAmountOfMoney: number = 0;
  private recipient: Recipient | null = null;
  dailyLimit: number = DAILY_TRANSACTION_LIMIT;

  constructor(
    private userService: UserService,
    private decimalPipe: DecimalPipe,
    private transactionFlowService: TransactionFlowService,
    private router: Router,
    private recipientService: RecipientService,
    private notificationService: NotificationService,
  ) {
    this.user = this.userService.user;
    if (this.user()) {
      for (let i = 0; i < this.user()!.cards.length; i++) {
        this.user()!.cards[i].active = false;
      }
    }
    this.selectedCard = this.user()!.cards[0];
    this.user()!.cards[0].active = true;
    this.recipient = this.recipientService.getRecipient();
    this.placeholder = `${this.selectedCard.cardCurrency.value}00.00`;
  }

  onScroll(): void {
    const el = this.cards.nativeElement;
    const isAtEnd = el.scrollTop + el.clientHeight >= el.scrollHeight;

    if (isAtEnd) {
      el.scrollTo({ top: 0, behavior: 'smooth' });
      this.isScrolledTillEnd = true;
    } else {
      el.scrollBy({ top: this.card.nativeElement.scrollHeight, behavior: 'smooth' });
      this.isScrolledTillEnd = false;
    }
  }

  onSelectingWallet(card: Card) {
    this.selectedCard = card;
    for (let i = 0; i < this.user()!.cards.length; i++) {
      this.user()!.cards[i].active = false;
    }
    this.selectedCard.active = !this.selectedCard.active;
  }

  onChoosingAmount(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    let formatted = parseFloat(value) / 100;

    if (this.transactionFlowService.getTransactionFlowContext() === 'addMoney') {
      this.chosenAmountOfMoney = formatted - formatted * TRANSACTION_FEES;
    } else {
      this.chosenAmountOfMoney = formatted + formatted * TRANSACTION_FEES;
    }
    input.value = `${this.selectedCard?.cardCurrency.value}${this.decimalPipe.transform(formatted, '1.2-2') ?? '0.00'}`;
  }

  onRoute(): void {
    if (this.transactionFlowService.isRecipientInfoPassed()) {
      this.router.navigate(['/transaction-flow/recipient-info']);
    } else {
      this.selectedCard = null;
      this.router.navigate(['/dashboard']);
    }
  }

  onContinue() {
    if (this.chosenAmountOfMoney === 0) {
      this.notificationService.triggerNotification(true, false, 'please enter a digit');
      this.transactionFlowService.setChoosingWalletPassed(false);
    } else if (this.chosenAmountOfMoney > this.dailyLimit) {
      this.isPopupOpen = true;
      this.popupContext = 'daily limit';
      this.transactionFlowService.setChoosingWalletPassed(false);
    } else {
      if (this.transactionFlowService.getTransactionFlowContext() === 'addMoney') {
        this.transactionFlowService.setChoosingWalletPassed(true);
        this.recipientService.setRecipient(null);
        this.router.navigate(['/transaction-flow/overview']);
      } else if (this.transactionFlowService.getTransactionFlowContext() === 'withdrawMoney') {
        if (this.chosenAmountOfMoney <= this.selectedCard!.cardBalance!) {
          this.transactionFlowService.setChoosingWalletPassed(true);
          this.router.navigate(['/transaction-flow/overview']);
        } else {
          this.notificationService.triggerNotification(true, false, 'insufficient funds');
        }
        this.recipientService.setRecipient(null);
      } else {
        if (
          this.transactionFlowService.isRecipientInfoPassed() &&
          this.chosenAmountOfMoney <= this.selectedCard!.cardBalance!
        ) {
          this.transactionFlowService.setChoosingWalletPassed(true);
          this.recipient!.gets(this.chosenAmountOfMoney);
          this.router.navigate(['/transaction-flow/overview']);
        } else {
          this.notificationService.triggerNotification(true, false, 'insufficient funds');
        }
      }
      this.user()?.addSelectedCard(this.selectedCard!);
      this.user()?.addTransactionAmount(Math.round(this.chosenAmountOfMoney * 100) / 100);
    }
  }
}
