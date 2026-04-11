import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registration-flow',
  imports: [],
  templateUrl: `./registration-flow.html`,
  styleUrl: './registration-flow.css',
})
export class RegistrationFlowComponent {
  @Input() isLoginPassed: boolean = false
}
