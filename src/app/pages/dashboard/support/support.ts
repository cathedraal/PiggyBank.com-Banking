import { Component } from '@angular/core';
import { PopupComponent } from '../../../components/popup/popup';
import { UserService } from '../../../services/default/user/user.service';
import { User } from '../../../models/user.model';
import { QuestionService } from '../../../services/default/question/question.service';

@Component({
  selector: 'app-support',
  imports: [PopupComponent],
  templateUrl: `./support.html`,
  styleUrl: './support.css',
})
export class SupportComponent {
  // variables
  isPopupOpen: boolean = false;
  popupContext: string = 'support';
  popupText: string = '';
  user: User | null = null;
  userQuestion: string = '';

  // DI
  constructor(
    private userService: UserService,
    private questionService: QuestionService,
  ) {
    this.user = this.userService.getUser();
    if (this.user) {
      this.popupText = `${this.user.name}, describe your problem.`;
    }
  }

  /**
   * Opens popup with support context
   */
  openPopup(): void {
    this.isPopupOpen = true;
  }

  /**
   * Sends question
   * @param question Users question
   */
  onConfirm(question: string): void {
    this.isPopupOpen = false;
    this.questionService.sendQuestion(question, this.user);
  }

  /**
   * Closes popup
   */
  onClose(): void {
    this.isPopupOpen = false;
  }
}
