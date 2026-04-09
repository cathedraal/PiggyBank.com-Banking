import { Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero';
import { LoginComponent } from './pages/login/login';
import { AddCardComponent } from './pages/add-card/add-card';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { LandingComponent } from './pages/landing/landing';

export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'add-card', component: AddCardComponent },
    { path: 'dashboard', component: DashboardComponent }
];
