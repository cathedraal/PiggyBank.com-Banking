import { Component, signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { SettingsService } from '../../services/settings/settings.service';
import { RegistrationLabelComponent } from '../../components/registration-label/registration-label';

@Component({
  selector: 'app-registration-flow',
  imports: [RouterOutlet, RegistrationLabelComponent],
  templateUrl: `./registration-flow.html`,
  styleUrl: './registration-flow.css',
})
export class RegistrationFlowComponent {
  isRegistrationFlow = signal(false);

  constructor ( protected settingsService: SettingsService) {
    this.isRegistrationFlow.set(this.settingsService.isRegistrationFlow())
  }
}
