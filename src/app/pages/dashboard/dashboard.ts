import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { WalletComponent } from './wallet/wallet';
import { ArticlesComponent } from './articles/articles';
import { TransactionsComponent } from './transactions/transactions';
import { SupportComponent } from './support/support';
import { BenefitsComponent } from './benefits/benefits';
import { CurrencyComponent } from './currency/currency';
import { EmptyCardsComponent } from './empty-cards/empty-cards';
import { User } from '../../models/user.model';
import { TransactionBenefitsComponent } from "./transaction-benefits/transaction-benefits";
import { ErrorPageComponent } from '../error-page/error-page';

@Component({
  selector: 'app-dashboard',
  imports: [
    WalletComponent,
    ArticlesComponent,
    TransactionsComponent,
    SupportComponent,
    BenefitsComponent,
    CurrencyComponent,
    EmptyCardsComponent,
    TransactionBenefitsComponent,
    ErrorPageComponent
],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  // html template
  user: User | null = null
  date = new Date();
  dateTime = this.date.toLocaleString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  subheader: string = `trading on ${this.dateTime}`

  constructor(protected userService: UserService) {
    this.user = this.userService.getUser()
  }
}
