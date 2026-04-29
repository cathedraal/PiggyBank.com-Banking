import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-error-page',
  imports: [RouterLink],
  templateUrl: './error-page.html',
  styleUrl: './error-page.css',
})
export class ErrorPageComponent {
  // DI
  constructor(private settingsService: SettingsService) {}

  /**
   * Sets registration flow to true, registration flow will have a registration flow label above
   */
  onRoute(): void {
    this.settingsService.setRegistrationFlow(true);
  }
}
