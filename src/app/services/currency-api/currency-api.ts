import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyApiService {
  private url: string = 'https://api.frankfurter.dev/v2/rates?quotes=USD,GBP';
  public usd = signal<number>(0);
  public gbp = signal<number>(0);

  loadRates(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((data: Array<any>) => {
        this.usd.set(data.find((item) => item.quote === 'USD').rate);
        this.gbp.set(data.find((item) => item.quote === 'GBP').rate);
      })
      .catch((err) => console.log(err));
  }
}
