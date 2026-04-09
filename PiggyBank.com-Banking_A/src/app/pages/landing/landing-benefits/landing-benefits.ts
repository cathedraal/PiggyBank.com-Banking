import { Component } from '@angular/core';
import { LANDING_BENEFITS_SECTION } from '../../../constants/constants';

@Component({
  selector: 'app-landing-benefits',
  imports: [],
  templateUrl: './landing-benefits.html',
  styleUrl: './landing-benefits.css',
})
export class LandingBenefitsComponent {
  benefits: string[] = LANDING_BENEFITS_SECTION
}
