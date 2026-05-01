import { Component } from '@angular/core';
import { cookieItem } from '../../../../models/interfaces/default/cookies.model';
import { COOKIES } from '../../../../constants/legal';

@Component({
  selector: 'app-cookie-table',
  imports: [],
  templateUrl: './cookie-table.html',
  styleUrl: './cookie-table.css',
})
export class CookieTableComponent {
  cookies: cookieItem[] = COOKIES
}
