import { Component } from '@angular/core';
import { benefitItem } from '../../../models/interfaces/benefits.model';
import { BENEFITS_SECTION } from '../../../constants/constants';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-benefits',
  imports: [NgOptimizedImage],
  templateUrl: `./benefits.html`,
  styleUrl: './benefits.css',
})
export class BenefitsComponent {
  benefits: benefitItem[] = BENEFITS_SECTION

  deleteBenefit(benefit: benefitItem) {
    this.benefits = this.benefits.filter(item => item !== benefit)
  }

}
