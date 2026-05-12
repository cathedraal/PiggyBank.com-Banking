import { Component } from '@angular/core';
import { UserService } from '../../../../services/default/user/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-buttons',
  imports: [RouterLink],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class ButtonsComponent {
  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  onRoute(): void {
    if (this.userService.user()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/landing']);
    }
  }
}
