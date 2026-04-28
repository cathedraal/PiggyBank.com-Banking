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
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  constructor(
    protected transactionFlowService: TransactionFlowService,
    protected userService: UserService,
    protected actionLoaderService: ActionLoaderService,
    private router: Router,
  ) {
    // effect(() => {
    //   if (this.actionLoaderService.loading()) {
    //     this.timeoutId = setTimeout(() => {
    //       this.actionLoaderService.setHiding(true);
    //       setTimeout(() => {
    //         this.actionLoaderService.setLoading(false);
    //         setTimeout(() => {
    //           this.router.navigate(['/transaction-flow/validation']);
    //           setTimeout(() => {
    //             this.actionLoaderService.setVisible(true);
    //           }, 100)
    //         }, 500);
    //       }, 300);
    //     }, 3000);
    //   }
    // });
    effect(() => {
      if (this.actionLoaderService.loading()) {
        if (this.timeoutId) return
        this.timeoutId = setTimeout(() => {
          this.actionLoaderService.setHiding(true); // начинаем fade out
          setTimeout(() => {
            this.router.navigate(['/transaction-flow/validation']); // навигация пока лоадер ещё виден
            setTimeout(() => {
               // показываем контент
              this.actionLoaderService.setLoading(false); // убираем лоадер из DOM
              this.actionLoaderService.setHiding(false); // сбрасываем состояние для следующего раза
              this.timeoutId = null
              setTimeout(() => {
                this.actionLoaderService.setVisible(true);
              }, 50)
            }, 100);
          }, 300); // ждём пока fade out завершится
        }, 2000);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
