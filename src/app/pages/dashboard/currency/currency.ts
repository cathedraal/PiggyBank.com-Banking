import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CurrencyApiService } from '../../../services/api/currency-api/currency-api';
import { DecimalPipe } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { NotificationService } from '../../../services/default/notification/notification.service';

@Component({
  selector: 'app-currency',
  imports: [DecimalPipe],
  templateUrl: `./currency.html`,
  styleUrl: './currency.css',
})
export class CurrencyComponent implements OnInit, OnDestroy {
  // variables
  private unsubscribe = new Subject<void>();
  protected usd = signal<number>(0);
  protected gbp = signal<number>(0);

  // DI
  constructor(
    protected currencyApiService: CurrencyApiService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    console.log(this.unsubscribe)
    this.currencyApiService
      .getRates()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (data) => {
          this.usd.set(data.find((item) => item.quote === 'USD').rate);
          this.gbp.set(data.find((item) => item.quote === 'GBP').rate);
          console.log(data);
        },
        error: (err) => {
          this.notificationService.triggerNotification(true, false, `couldn't fetch rates`);
          console.log(err);
        },
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log(this.unsubscribe)
  }
}
