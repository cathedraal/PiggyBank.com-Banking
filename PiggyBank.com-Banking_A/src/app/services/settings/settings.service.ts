import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private userQuestion: string = '';
  private registrationFlow: boolean = true;
  private landingPage = signal(false)

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

  setLandingPage(value: boolean): void {
    this.landingPage.set(value)
  }

  isLandingPage(): boolean {
    return this.landingPage()
  }
}
