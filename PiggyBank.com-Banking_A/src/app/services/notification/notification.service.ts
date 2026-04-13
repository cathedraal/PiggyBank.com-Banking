import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notified = signal(false)
  private successful = signal(false)
  private notificationMessage: string = ''

  // popup notification
  setNotification(value: boolean): void {
    this.notified.set(value)
  }

  isNotified(): boolean {
    return this.notified()
  }

  // notification is whether false or true
  setBooleanNotification(value: boolean): void {
    this.successful.set(value)
  }

  isSucceed(): boolean {
    return this.successful()
  }

  // sets message
  setNotificationMessage(value: string): void {
    this.notificationMessage = value
  }

  getNotificationMessage(): string {
    return this.notificationMessage
  }
}
