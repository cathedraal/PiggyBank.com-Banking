import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { SettingsService } from '../settings/settings.service'
import emailjs from '@emailjs/browser'

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(
    private userService: UserService,
    private settingsService: SettingsService
  ) {}

  sendQuestion(): void {
    const user = this.userService.getUser()
    const question = this.settingsService.getUserQuestion()

    const params = {
      userName: user?.name,
      userQuestion: question
    }

    emailjs.send('service_807c8ah', 'template_lkb0bhl', params);

    alert(`Question successfully sent. You asked: ${question}`)
  }
}
