import { Component, effect, OnDestroy, OnInit } from '@angular/core';
import { TransactionFlowService } from '../../services/transaction-flow/transaction-flow';
import { TransactionLabelComponent } from '../../components/transaction-label/transaction-label';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { ErrorPageComponent } from '../error-page/error-page';
import { TransactionFlowHeaderComponent } from '../../components/transaction-flow-header/transaction-flow-header';
import { ActionLoaderService } from '../../services/action-loader/action-loader';
import { ActionLoaderComponent } from '../../components/action-loader/action-loader';

@Component({
  selector: 'app-transaction-flow',
  imports: [
    TransactionLabelComponent,
    RouterOutlet,
    ErrorPageComponent,
    TransactionFlowHeaderComponent,
    ActionLoaderComponent,
  ],
  templateUrl: './transaction-flow.html',
  styleUrl: './transaction-flow.css',
})
export class TransactionFlowComponent implements OnDestroy {
  // variable
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  // DI
  constructor(
    protected transactionFlowService: TransactionFlowService,
    protected userService: UserService,
    protected actionLoaderService: ActionLoaderService,
    private router: Router,
  ) {
    // reacts to the signals and starts timers
    effect(() => {
      if (this.actionLoaderService.loading()) {
        if (this.timeoutId) return
        this.timeoutId = setTimeout(() => {
          this.actionLoaderService.setHiding(true); // starting fade out
          setTimeout(() => {
            this.router.navigate(['/transaction-flow/validation']); // navigate while loader is still visible
            setTimeout(() => {
              // show the content after loader
              this.actionLoaderService.setLoading(false); // remove the loader from DOM
              this.actionLoaderService.setHiding(false); // reset the state before using again
              this.timeoutId = null
              setTimeout(() => {
                this.actionLoaderService.setVisible(true);
              }, 50)
            }, 100);
          }, 300); // waiting until fade out ends
        }, 2000);
      }
    });
  }

  // clear the timer
  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
