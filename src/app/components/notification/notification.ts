import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-notification',
  imports: [],
  standalone: true,
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class NotificationComponent implements OnInit {
  constructor (protected notificationService: NotificationService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.notificationService.triggerNotification(false, false, '')
    }, 2000)
  }
}
