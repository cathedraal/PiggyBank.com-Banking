import { Injectable, signal } from '@angular/core';

export interface transActionSource {
  cardNumber: string;
  cardType: string
}

@Injectable({
  providedIn: 'root',
})
export class ActionLoaderService {
  public loading = signal(false); // loader
  private hiding = signal(false); // loader
  private visible = signal(false); // content which is displayed after loader
  private source: transActionSource = {
    cardNumber: '',
    cardType: ''
  }

  setLoading(value: boolean): void {
    this.loading.set(value);
  }

  setHiding(value: boolean): void {
    this.hiding.set(value);
  }

  setVisible(value: boolean): void {
    this.visible.set(value);
  }

  isLoading(): boolean {
    return this.loading();
  }

  isHiding(): boolean {
    return this.hiding();
  }

  isVisible(): boolean {
    return this.visible();
  }

  setSource(cardNumber: string, cardType: string): void {
    this.source = {cardNumber, cardType}
  }

  getSource(): transActionSource {
    return this.source
  }

  reset(): void {
    this.loading.set(false)
    this.hiding.set(false)
    this.visible.set(false)
  }
}
