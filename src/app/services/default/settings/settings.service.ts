import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private registrationFlow = signal(false);
  private landingPage = signal(false)
  private loginPassed = signal(false)

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
