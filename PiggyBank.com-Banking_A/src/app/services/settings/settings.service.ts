import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private userQuestion: string = '';
  private registrationFlow: boolean = true;

  setUserQuestion(value: string): void {
    this.userQuestion = value;
  }

  getUserQuestion(): string {
    return this.userQuestion;
  }

  setRegistrationFlow(value: boolean): void {
    this.registrationFlow = value;
  }

  isRegistrationFlow(): boolean {
    return this.registrationFlow;
  }
}
