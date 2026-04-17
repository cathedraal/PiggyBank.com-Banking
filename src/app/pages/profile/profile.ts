import { Component } from '@angular/core';
import { ButtonsComponent } from './buttons/buttons';
import { HeaderComponent } from './header/header';
import { BannerComponent } from './banner/banner';
import { AccountInfoComponent } from './account-info/account-info';
import { CardsComponent } from './cards/cards';

@Component({
  selector: 'app-profile',
  imports: [
    ButtonsComponent,
    HeaderComponent,
    BannerComponent,
    AccountInfoComponent,
    CardsComponent,
  ],
  templateUrl: `./profile.html`,
  styleUrl: './profile.css',
})
export class ProfileComponent {}
