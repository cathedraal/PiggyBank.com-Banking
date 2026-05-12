import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notified = signal(false);
  private successful = signal(false);
  private notificationMessage: string = '';

  isNotified(): boolean {
    return this.notified();
  }

  isSucceed(): boolean {
    return this.successful();
  }

  getNotificationMessage(): string {
    return this.notificationMessage;
  }

  /**
   * Sets notification and pops it up
   * @param isTriggered Trigger notification
   * @param isPositive Is this notification negative or positive?
   * @param message Message of the notification
   */
  triggerNotification(isTriggered: boolean, isPositive: boolean, message: string) {
    this.notified.set(isTriggered);
    this.successful.set(isPositive);
    this.notificationMessage = message;
  }
}
