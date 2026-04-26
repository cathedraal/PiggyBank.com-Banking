import { Component } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction';
import { WhatAreCookiesComponent } from './what-are-cookies/what-are-cookies';
import { WhyWeUseCookiesComponent } from './why-we-use-cookies/why-we-use-cookies';
import { TypesOfCookiesComponent } from './types-of-cookies/types-of-cookies';
import { CookieTableComponent } from './cookie-table/cookie-table';
import { CookieDurationComponent } from './cookie-duration/cookie-duration';
import { ThirdPartyCookiesComponent } from './third-party-cookies/third-party-cookies';
import { ManagingCookiesComponent } from './managing-cookies/managing-cookies';
import { RegulationsComponent } from './regulations/regulations';
import { DataTransfersComponent } from './data-transfers/data-transfers';
import { ChangesComponent } from './changes/changes';
import { ContactUsComponent } from './contact-us/contact-us';
import { ChildrensPrivacyComponent } from './childrens-privacy/childrens-privacy';
import { ButtonsComponent } from './buttons/buttons';

@Component({
  selector: 'app-cookie-policy',
  imports: [
    IntroductionComponent,
    WhatAreCookiesComponent,
    WhyWeUseCookiesComponent,
    TypesOfCookiesComponent,
    CookieTableComponent,
    CookieDurationComponent,
    ThirdPartyCookiesComponent,
    ManagingCookiesComponent,
    RegulationsComponent,
    DataTransfersComponent,
    ChildrensPrivacyComponent,
    ChangesComponent,
    ContactUsComponent,
    ButtonsComponent
  ],
  templateUrl: './cookie-policy.html',
  styleUrl: './cookie-policy.css',
})
export class CookiePolicyComponent {}
