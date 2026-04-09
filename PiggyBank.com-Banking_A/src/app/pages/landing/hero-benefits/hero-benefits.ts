import { Component } from '@angular/core';
import { HERO_BENEFITS_SECTION } from '../../../constants/constants';

@Component({
  selector: 'app-hero-benefits',
  imports: [],
  templateUrl: `./hero-benefits.html`,
  styleUrl: './hero-benefits.css',
})
export class HeroBenefitsComponent {
  benefits: string[] = HERO_BENEFITS_SECTION
}
