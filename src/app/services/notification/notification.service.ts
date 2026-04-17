import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notified = signal(false)
  private successful = signal(false)
  private notificationMessage: string = ''

  isNotified(): boolean {
    return this.notified()
  }

  isSucceed(): boolean {
    return this.successful()
  }

  getNotificationMessage(): string {
    return this.notificationMessage
  }

  /**
   * Sets notification
   * @param isTriggered Trigger notification
   * @param isNegative Is this notification negative or positive?
   * @param message Message of the notification
   */
  triggerNotification(isTriggered: boolean, isNegative: boolean, message: string) {
    this.notified.set(isTriggered)
    this.successful.set(isNegative)
    this.notificationMessage = message
  }
}
