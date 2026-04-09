import { Component } from '@angular/core';
import { HeroBenefitsComponent } from './hero-benefits/hero-benefits';
import { HeroCtaComponent } from './hero-cta/hero-cta';
import { AboutUsComponent } from './about-us/about-us';
import { StepsComponent } from './steps/steps';
import { SecureComponent } from './secure/secure';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us';
import { FaqsComponent } from './faqs/faqs';
import { CtaComponent } from './cta/cta';
import { HeroComponent } from './hero/hero';
import { LandingBenefitsComponent } from './landing-benefits/landing-benefits';

@Component({
  selector: 'app-landing',
  imports: [
    HeroBenefitsComponent,
    HeroCtaComponent,
    AboutUsComponent,
    StepsComponent,
    SecureComponent,
    WhyChooseUsComponent,
    FaqsComponent,
    CtaComponent,
    HeroComponent,
    LandingBenefitsComponent,
  ],
  templateUrl: `./landing.html`,
  styleUrl: './landing.css',
})
export class LandingComponent {}
