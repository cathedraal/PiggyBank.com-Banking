import { Component } from '@angular/core';
import { PopupComponent } from '../../../components/popup/popup';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../models/user.model';
import { SettingsService } from '../../../services/settings/settings.service';
import { QuestionService } from '../../../services/question/question.service';

@Component({
  selector: 'app-support',
  imports: [PopupComponent],
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
    this.questionService.sendQuestion(question, this.user);
  }

  onDecline(): void {
    this.isPopupOpen = false;
  }
}
