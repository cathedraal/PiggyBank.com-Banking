import { Component } from '@angular/core';
import { benefitItem } from '../../../models/interfaces/benefits.model';
import { BENEFITS_SECTION } from '../../../constants/constants';

@Component({
  selector: 'app-why-choose-us',
  imports: [],
  templateUrl: `./why-choose-us.html`,
  styleUrl: './why-choose-us.css',
})
export class WhyChooseUsComponent {
  benefits: benefitItem[] = BENEFITS_SECTION;
}
