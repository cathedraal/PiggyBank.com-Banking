import { Component } from '@angular/core';
import { stepsItem } from '../../../models/interfaces/steps.model';
import { STEPS_SECTION } from '../../../constants/constants';

@Component({
  selector: 'app-steps',
  imports: [],
  templateUrl: `./steps.html`,
  styleUrl: './steps.css',
})
export class StepsComponent {
  steps: stepsItem[] = STEPS_SECTION;
}
