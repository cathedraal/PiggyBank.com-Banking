import { Component } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class BannerComponent {
  constructor(protected userService: UserService) {}
}
