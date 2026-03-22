import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipientService {
  private recipientName: string = '';
  private recipientEmail: string = '';
  private recipientText: string = '';

  setRecipientName(value: string): void {
    this.recipientName = value;
  }
  setRecipientEmail(value: string): void {
    this.recipientEmail = value;
  }
  setRecipientText(value: string): void {
    this.recipientText = value;
  }

  getRecipientName(): string {
    return this.recipientName;
  }
  getRecipientEmail(): string {
    return this.recipientEmail;
  }
  getRecipientText(): string {
    return this.recipientText;
  }
}
