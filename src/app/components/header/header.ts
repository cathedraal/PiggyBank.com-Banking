import { Component, Signal } from '@angular/core';
import { PopupComponent } from '../popup/popup';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';
import { SettingsService } from '../../services/settings/settings.service';
import { QuestionService } from '../../services/question/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PopupComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  isPopupOpen = false;
  user: Signal<User | null>;
  get popupText(): string {
    return this.user() ? `${this.user()!.name}, describe your problem.` : `Guest, describe your problem.`
  }
  popupContext: string = 'support';
  userQuestion!: string;

  constructor(
    protected userService: UserService,
    protected settingsService: SettingsService,
    private questionService: QuestionService,
    private router: Router,
  ) {
    this.user = this.userService.user;
  }

  openPopup(): void {
    console.log('popup opened');
    this.isPopupOpen = true;
  }

  onConfirm(question: string): void {
    this.isPopupOpen = false;
    this.userQuestion = question;
    this.questionService.sendQuestion(this.userQuestion, this.user())
  }

  onDecline(): void {
    this.isPopupOpen = false;
  }

  onRoute(): void {
    if (this.user()) {
      this.router.navigate(['./profile'])
      if (this.user()!.cards?.length === 0) {
        this.isPopupOpen = true
      }
    } else {
      this.router.navigate(['/registration-flow/login'])
    }
  }

  onLogoRoute(): void {
    if (this.userService.user()) {
      this.router.navigate(['/dashboard'])
    } else {
      this.router.navigate(['/landing'])
    }
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
  }
}
