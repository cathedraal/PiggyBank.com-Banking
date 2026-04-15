import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private userQuestion: string = '';
  private registrationFlow = signal(false);
  private landingPage = signal(false)
  private loginPassed = signal(false)

  // question
  setUserQuestion(value: string): void {
    this.userQuestion = value;
  }
  getUserQuestion(): string {
    return this.userQuestion;
  }

  // registration-flow
  setRegistrationFlow(value: boolean): void {
    this.registrationFlow.set(value);
  }
  isRegistrationFlow(): boolean {
    return this.registrationFlow();
  }

  // landing-page
  setLandingPage(value: boolean): void {
    this.landingPage.set(value)
  }
  isLandingPage(): boolean {
    return this.landingPage()
  }

  // login
  setLoginPassed(value: boolean): void {
    this.loginPassed.set(value)
  }
  isLoginPassed(): boolean {
    return this.loginPassed()
  }
}
