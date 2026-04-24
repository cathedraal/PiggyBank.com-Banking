import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { PopupComponent } from '../../../components/popup/popup';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-buttons',
  imports: [RouterLink, PopupComponent],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class ButtonsComponent {
  isPopupOpen: boolean = false
  popupText: string = 'You sure you want to log out?'
  popupContext: string = 'log out'

  constructor(private userService: UserService, private router: Router) {}

  openPopup(): void {
    this.isPopupOpen = true
  }

  onConfirm(): void {
    this.userService.deleteUser()
    this.isPopupOpen = false
    this.router.navigate(['/landing'])
  }

  onDecline(): void {
    this.isPopupOpen = false
  }
}
