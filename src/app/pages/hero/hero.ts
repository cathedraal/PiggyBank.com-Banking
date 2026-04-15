import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../services/settings/settings.service';
import { UserService } from '../../services/user/user.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: `./hero.html`,
  styleUrl: './hero.css',
})
export class HeroComponent {
  constructor(
    private settingsService: SettingsService,
    private userService: UserService,
  ) {
    this.settingsService.setRegistrationFlow(true);
  }

  onRouter(): void {
    console.log(this.userService.getUser());
  }
}
