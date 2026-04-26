import { Component } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction';
import { WhoWeAreComponent } from './who-we-are/who-we-are';
import { DataWeCollectComponent } from './data-we-collect/data-we-collect';
import { HowWeUseDataComponent } from './how-we-use-data/how-we-use-data';
import { DataRetentionComponent } from './data-retention/data-retention';
import { SharingDataComponent } from './sharing-data/sharing-data';
import { InternationalDataTransfersComponent } from './international-data-transfers/international-data-transfers';
import { DataSecurityComponent } from './data-security/data-security';
import { YourRightsComponent } from './your-rights/your-rights';
import { ChildrensPrivacyComponent } from './childrens-privacy/childrens-privacy';
import { AutomatedDecisionMakingComponent } from './automated-decision-making/automated-decision-making';
import { ThirdPartyLinksComponent } from './third-party-links/third-party-links';
import { ChangesComponent } from './changes/changes';
import { ContactUsComponent } from './contact-us/contact-us';

@Component({
  selector: 'app-privacy-policy',
  imports: [
    IntroductionComponent,
    WhoWeAreComponent,
    DataWeCollectComponent,
    HowWeUseDataComponent,
    DataRetentionComponent,
    SharingDataComponent,
    InternationalDataTransfersComponent,
    DataSecurityComponent,
    YourRightsComponent,
    ChildrensPrivacyComponent,
    AutomatedDecisionMakingComponent,
    ThirdPartyLinksComponent,
    ChangesComponent,
    ContactUsComponent
  ],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css',
})
export class PrivacyPolicyComponent {}
