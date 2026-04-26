import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'app-buttons',
  imports: [RouterLink],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class ButtonsComponent {
  constructor(private userService: UserService, private router: Router) {}

  onRoute(): void {
    if (this.userService.user()) {
      this.router.navigate(['/dashboard'])
    } else {
      this.router.navigate(['/landing'])
    }
  }
}
