import { Component } from '@angular/core';
import { UserService } from '../../../services/default/user/user.service';

@Component({
  selector: 'app-account-info',
  imports: [],
  templateUrl: './account-info.html',
  styleUrl: './account-info.css',
})
export class AccountInfoComponent {
  constructor(protected userService: UserService) {}
}
