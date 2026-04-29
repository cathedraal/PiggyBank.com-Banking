import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import emailjs from '@emailjs/browser';
import { NotificationService } from '../notification/notification.service';
import { User } from '../../models/user.model';
import { getRandomInt } from '../../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private notificationService: NotificationService) {}

  /**
   * Sends question using EmailJS API
   * @param question Question user wrote
   * @param user User
   */
  sendQuestion(question: string, user: User | null = null): void {
    let name: string = '';
    let surname: string = '';
    let email: string = '';

    if (user) {
      name = user.name;
      surname = user.surname;
      email = user.email;
    } else {
      name = '<Unregistered>';
      surname = `id${getRandomInt(0, 1000000)}`;
      email = 'unregistered@email.com';
    }

    const params = {
      userName: name,
      userSurname: surname,
      userEmail: email,
      userQuestion: question,
    };

    if (question.trim() !== '') {
      emailjs
        .send('service_o3go1c5', 'template_0x3nzou', params, {
          publicKey: 'pOZWidCJ7_WUh0fjm',
        })
        .then(() => {
          this.notificationService.triggerNotification(true, true, 'question sent');
        })
        .catch((error) => {
          console.error('EmailJS error:', error);
          this.notificationService.triggerNotification(true, false, 'failed to send question');
        });
    } else if (question.trim() === '') {
      this.notificationService.triggerNotification(true, false, 'please include letters');
    }
  }
}
