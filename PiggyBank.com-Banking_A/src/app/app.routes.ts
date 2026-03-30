import { Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero';
import { LoginComponent } from './pages/login/login';

export const routes: Routes = [
    { path: '', redirectTo: 'hero', pathMatch: 'full' },
    { path: 'hero', component: HeroComponent },
    { path: 'login', component: LoginComponent}
];
