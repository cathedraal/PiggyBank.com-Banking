import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registration-label',
  imports: [NgOptimizedImage],
  templateUrl: `./registration-label.html`,
  styleUrl: './registration-label.css',
})
export class RegistrationLabelComponent {
  @Input() isLoginPassed: boolean = true
}
