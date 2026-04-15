import { Component } from '@angular/core';
import { PopupComponent } from '../../../components/popup/popup';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../models/user.model';
import { SettingsService } from '../../../services/settings/settings.service';
import { QuestionService } from '../../../services/question/question.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-support',
  imports: [PopupComponent, NgOptimizedImage],
  templateUrl: `./support.html`,
  styleUrl: './support.css',
})
export class SupportComponent {
  isPopupOpen: boolean = false;
  popupContext: string = 'support';
  popupText: string = '';
  user: User | null = null;
  userQuestion: string = '';

  constructor(
    private userService: UserService,
    private settingsService: SettingsService,
    private questionService: QuestionService,
  ) {
    this.user = this.userService.getUser();
    if (this.user) {
      this.popupText = `${this.user.name}, describe your problem.`;
    }
  }

  openPopup(): void {
    this.isPopupOpen = true;
  }

  onConfirm(question: string): void {
    this.isPopupOpen = false;

    if (question === '') {
      alert('Please write something or cancel.');
    } else {
      this.userQuestion = question;
      this.settingsService.setUserQuestion(this.userQuestion);
      this.questionService.sendQuestion();
    }
  }

  onDecline(): void {
    this.isPopupOpen = false;
  }
}
