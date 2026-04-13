import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private userQuestion: string = '';
  private registrationFlow = signal(false);
  private landingPage = signal(false)
  private loginPassed = signal(false)

  setUserQuestion(value: string): void {
    this.userQuestion = value;
  }
  getUserQuestion(): string {
    return this.userQuestion;
  }

  setRegistrationFlow(value: boolean): void {
    this.registrationFlow.set(value);
  }
  isRegistrationFlow(): boolean {
    return this.registrationFlow();
  }

  setLandingPage(value: boolean): void {
    this.landingPage.set(value)
  }
  isLandingPage(): boolean {
    return this.landingPage()
  }

  setLoginPassed(value: boolean): void {
    this.loginPassed.set(value)
  }
  isLoginPassed(): boolean {
    return this.loginPassed()
  }
}
