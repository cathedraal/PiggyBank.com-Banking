import { Component } from '@angular/core';
import { benefitItem } from '../../../models/interfaces/default/benefits.model';
import { BENEFITS_SECTION } from '../../../constants/constants';

@Component({
  selector: 'app-benefits',
  imports: [],
  templateUrl: `./benefits.html`,
  styleUrl: './benefits.css',
})
export class BenefitsComponent {
  // html template
  benefits: benefitItem[] = BENEFITS_SECTION

  deleteBenefit(benefit: benefitItem) {
    this.benefits = this.benefits.filter(item => item !== benefit)
  }
}
