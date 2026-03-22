import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private userQuestion: string = ''

  setUserQuestion(value: string): void {
    this.userQuestion = value
  }
  
  getUserQuestion(): string {
    return this.userQuestion
  }
}
