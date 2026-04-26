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

export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'registration-flow', component: RegistrationFlowComponent,
        children: [
            { path: 'login', component: LoginComponent},
            { path: 'add-card', component: AddCardComponent }
        ]
     },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'error-page', component: ErrorPageComponent },
    { path: 'cookie-policy', component: CookiePolicyComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent }
];
