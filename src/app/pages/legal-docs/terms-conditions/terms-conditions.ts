import { Component } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction';
import { EligibilityComponent } from './eligibility/eligibility';
import { OurServicesComponent } from './our-services/our-services';
import { TransactionAccuracyComponent } from './transaction-accuracy/transaction-accuracy';
import { TransactionLimitsFeesComponent } from './transaction-limits-fees/transaction-limits-fees';
import { AcceptableUseComponent } from './acceptable-use/acceptable-use';
import { UserResponsibilitiesComponent } from './user-responsibilities/user-responsibilities';
import { PlatformAvailabilityComponent } from './platform-availability/platform-availability';
import { IntellectualPropertyComponent } from './intellectual-property/intellectual-property';
import { LimitationOfLiabilityComponent } from './limitation-of-liability/limitation-of-liability';
import { TerminationComponent } from './termination/termination';
import { GoverningLawComponent } from './governing-law/governing-law';
import { ChangesComponent } from './changes/changes';
import { ContactUsComponent } from './contact-us/contact-us';

@Component({
  selector: 'app-terms-conditions',
  imports: [
    IntroductionComponent,
    EligibilityComponent,
    OurServicesComponent,
    TransactionAccuracyComponent,
    TransactionLimitsFeesComponent,
    AcceptableUseComponent,
    UserResponsibilitiesComponent,
    PlatformAvailabilityComponent,
    IntellectualPropertyComponent,
    LimitationOfLiabilityComponent,
    TerminationComponent,
    GoverningLawComponent,
    ChangesComponent,
    ContactUsComponent
  ],
  templateUrl: './terms-conditions.html',
  styleUrl: './terms-conditions.css',
})
export class TermsConditionsComponent {}
