import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty-cards',
  imports: [RouterLink],
  templateUrl: `./empty-cards.html`,
  styleUrl: './empty-cards.css',
})
export class EmptyCardsComponent {}
