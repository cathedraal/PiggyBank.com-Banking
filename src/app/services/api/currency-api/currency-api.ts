import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyApiService {
  private readonly baseUrl: string = 'https://api.frankfurter.dev/v2';
  public usd = signal<number>(0);
  public gbp = signal<number>(0);
  private unsubscribe = new Subject<void>();

  // DI
  constructor(private http: HttpClient) {}

  /**
   * Fetch API, no rxjs, loads rates -------> not in use
   */
  loadRatesFetch(): void {
    fetch(this.baseUrl)
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data: Array<any>) => {
        this.usd.set(data.find((item) => item.quote === 'USD').rate);
        this.gbp.set(data.find((item) => item.quote === 'GBP').rate);
      })
      .catch((err) => console.log(err));
  }

  /**
   * API with RxJS, loads rates -------> not in use
   */
  loadRatesRxjs(): void {
    this.http
      .get<Array<any>>(this.baseUrl)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (data) => {
          this.usd.set(data.find((item) => item.quote === 'USD').rate);
          this.gbp.set(data.find((item) => item.quote === 'GBP').rate);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  /**
   * Gets rates from the URL
   * @returns Array of rates
   */
  getRates(symbols: string[]): Observable<Array<any>> {
    const url = new URL(`${this.baseUrl}/rates`);
    url.searchParams.set('quotes', symbols.join(','));
    return this.http.get<Array<any>>(url.toString());
  }
}
