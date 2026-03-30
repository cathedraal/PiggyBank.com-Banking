import { Component } from '@angular/core';
import { PopupComponent } from '../popup/popup';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';
import { SettingsService } from '../../services/settings/settings.service';
import { QuestionService } from '../../services/question/question.service';

@Component({
  selector: 'app-header',
  imports: [PopupComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  isPopupOpen = false;
  user!: User | null;
  popupText!: string;
  popupContext: string = 'support';
  userQuestion!: string;

  constructor(
    private userService: UserService,
    private settingsService: SettingsService,
    private questionService: QuestionService,
  ) {
    this.user = this.userService.getUser();
    this.popupText = `${this.user?.name}, describe your problem.`;
  }

  openPopup(): void {
    console.log('popup opened');
    this.isPopupOpen = true;
  }

  onConfirm(question: string): void {
    this.isPopupOpen = false;
    this.userQuestion = question;
    if (question === '') {
      alert('Please write something or cancel.');
    } else {
      this.settingsService.setUserQuestion(this.userQuestion);
      this.questionService.sendQuestion();
    }
  }

  onDecline(): void {
    this.isPopupOpen = false;
  }
}
