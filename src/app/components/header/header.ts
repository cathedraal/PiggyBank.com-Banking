import { Component, signal, Signal } from '@angular/core';
import { PopupComponent } from '../popup/popup';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';
import { SettingsService } from '../../services/settings/settings.service';
import { QuestionService } from '../../services/question/question.service';
import { Router, RouterLink } from '@angular/router';
import { RecipientService } from '../../services/recipient/recipient.service';
import { TransactionFlowService } from '../../services/transaction-flow/transaction-flow';

@Component({
  selector: 'app-header',
  imports: [PopupComponent, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  // html template
  isPopupOpen = false;
  user: Signal<User | null>;
  popupContext: string = 'support';
  userQuestion!: string;
  button1: string = '';
  button2: string = '';
  isMenuOpen = signal(false);

  // DI
  constructor(
    protected userService: UserService,
    protected settingsService: SettingsService,
    private questionService: QuestionService,
    private router: Router,
    private recipientService: RecipientService,
    private transactionFlowService: TransactionFlowService,
  ) {
    this.user = this.userService.user;
  }

  // sets the popup text depending on if user exists or not
  get popupText(): string {
    const user = this.user();

    if (!user) {
      return 'Guest, describe your problem.';
    } else {
      return `${user.name}, describe your problem`;
    }
    // else if (this.transactionFlowService.isTransactionFlow()) {
    //   return 'you sure you want to quit the transaction?'
    // }
  }

  /**
   * Triggers popup
   */
  openPopup(): void {
    console.log('popup opened');
    this.isPopupOpen = true;
  }

  /**
   * Confirm popup button
   * @param question question user wrote
   */
  onConfirm(question: string): void {
    this.isPopupOpen = false;
    this.userQuestion = question;
    this.questionService.sendQuestion(this.userQuestion, this.user());
  }

  /**
   * Closes popup
   */
  onDecline(): void {
    this.isPopupOpen = false;
  }

  /**
   * Validates if user exists before redirecting to profile page
   */
  onRoute(): void {
    if (this.user()) {
      this.router.navigate(['./profile']);
      if (this.user()!.cards?.length === 0) {
        this.isPopupOpen = true;
      }
    } else {
      this.router.navigate(['/registration-flow/login']);
    }
  }

  /**
   * Validates if user exists before redirecting to dashboard
   */
  onLogoRoute(): void {
    if (this.userService.user()) {
      // this.popupContext = 'transaction distraction'
      this.recipientService.setRecipient(null);
      this.user()!.transacts = 0;
      this.user()!.selectedCard = null;
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/landing']);
    }
  }

  /**
   * Scrolls to the given id of a section on landing page
   * @param id id of a landing section
   */
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
