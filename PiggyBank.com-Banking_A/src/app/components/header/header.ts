import { Component } from '@angular/core';
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
  isLandingPage: boolean = false
  isPopupOpen = false;
  user: User | null = null;
  popupText: string;
  popupContext: string = 'support';
  userQuestion!: string;

  constructor(
    protected userService: UserService,
    protected settingsService: SettingsService,
    private questionService: QuestionService,
    private router: Router
  ) {
    this.user = this.userService.getUser();
    if (this.user) {
      this.popupText = `${this.user.name}, describe your problem.`;
    } else {
      this.popupText = `Guest, describe your problem.`;
    }
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

  onRoute() {
    if (this.user) {
      this.router.navigate(['./profile'])
      if (this.user.cards?.length === 0) {
        this.isPopupOpen = true
      }
    } else {
      this.router.navigate(['/registration-flow/login'])
    }
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
  }
}
