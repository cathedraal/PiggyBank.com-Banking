import { Routes } from '@angular/router';
import { LoginComponent } from './pages/registration-flow/login/login';
import { AddCardComponent } from './pages/registration-flow/add-card/add-card';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { LandingComponent } from './pages/landing/landing';
import { RegistrationFlowComponent } from './pages/registration-flow/registration-flow';
import { ProfileComponent } from './pages/profile/profile';
import { ErrorPageComponent } from './pages/error-page/error-page';
import { CookiePolicyComponent } from './pages/legal-docs/cookie-policy/cookie-policy';
import { PrivacyPolicyComponent } from './pages/legal-docs/privacy-policy/privacy-policy';
import { TermsConditionsComponent } from './pages/legal-docs/terms-conditions/terms-conditions';
import { TransactionFlowComponent } from './pages/transaction-flow/transaction-flow';
import { RecipientInfoComponent } from './pages/transaction-flow/recipient-info/recipient-info';
import { ChoosingWalletComponent } from './pages/transaction-flow/choosing-wallet/choosing-wallet';
import { OverviewComponent } from './pages/transaction-flow/overview/overview';
import { ValidationComponent } from './pages/transaction-flow/validation/validation';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  {
    path: 'registration-flow',
    component: RegistrationFlowComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'add-card', component: AddCardComponent },
    ],
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'error-page', component: ErrorPageComponent },
  { path: 'cookie-policy', component: CookiePolicyComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TermsConditionsComponent },
  {
    path: 'transaction-flow',
    component: TransactionFlowComponent,
    children: [
      { path: 'recipient-info', component: RecipientInfoComponent },
      { path: 'choosing-wallet', component: ChoosingWalletComponent },
      { path: 'overview', component: OverviewComponent },
      { path: 'validation', component: ValidationComponent }
    ],
  },
];
