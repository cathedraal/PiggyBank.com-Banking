import { Component } from '@angular/core';
import { PopupComponent } from '../popup/popup';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';
import { SettingsService } from '../../services/settings/settings.service';

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
  userQuestion!: string;

  constructor(
    private userService: UserService,
    private settingsService: SettingsService,
  ) {
    this.user = this.userService.getUser();
    this.popupText = `${this.user?.name}, describe your problem.`;
  }
  
  openPopup(): void {
    console.log('popup opened')
    this.isPopupOpen = true;
  }

  onConfirm(): void {
    this.isPopupOpen = false;
    this.settingsService.setUserQuestion(this.userQuestion);
    console.log('question sent.');
  }

  onDecline(): void {
    this.isPopupOpen = false
  }
}
