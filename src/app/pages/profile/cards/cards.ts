import { AfterViewInit, Component, computed, ElementRef, ViewChild } from '@angular/core';
import { Card } from '../../../models/card.model';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user/user.service';
import { maskCardNumber } from '../../../utils/utils';
import { PopupComponent } from '../../../components/popup/popup';
import { EmptyCardsProfileComponent } from '../empty-cards-profile/empty-cards-profile';
import { Router, RouterLink } from '@angular/router';
import { CARDS_AMOUNT_ALLOWED } from '../../../constants/constants';

@Component({
  selector: 'app-cards',
  imports: [CommonModule, PopupComponent, EmptyCardsProfileComponent],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class CardsComponent implements AfterViewInit {
  // html template
  cards = computed(() => this.userService.user()?.cards ?? null);
  formatNumber = maskCardNumber;
  isPopupOpen: boolean = false;
  popupText: string = 'you sure you want to delete this card?';
  popupContext: string = '';
  isScrolledTillEnd: boolean = false

  // variables
  private selectedCard: Card | null = null;
  @ViewChild('profileCard') activeCard!: ElementRef<HTMLElement>;
  @ViewChild('profileCards') activeCards!: ElementRef<HTMLElement>;
  cardScrollWidth: number = 0;
  flipCard: boolean = false

  // constructor
  constructor(private userService: UserService, private router: Router) {}

  ngAfterViewInit(): void {
    this.cardScrollWidth = this.activeCard.nativeElement.scrollWidth;
  }

  openPopup(card: Card): void {
    this.popupContext = 'delete card';
    this.selectedCard = card;
    this.isPopupOpen = true;
    console.log(this.userService.user()?.cards);
  }

  onConfirm(): void {
    if (this.selectedCard) {
      this.userService.deleteCard(this.selectedCard);
    }

    this.isPopupOpen = false;
    this.selectedCard = null;
    console.log(this.userService.user()?.cards);
  }

  onDecline(): void {
    this.isPopupOpen = false;
  }

  onScroll(): void {
    const el = this.activeCards.nativeElement;
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth;

    if (isAtEnd) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
      this.isScrolledTillEnd = true
    } else {
      el.scrollBy({ left: this.cardScrollWidth, behavior: 'smooth' });
      this.isScrolledTillEnd = false
    }
  }

  onAddCard(): void {
    if (this.userService.getUser()?.cards.length === CARDS_AMOUNT_ALLOWED) {
      this.isPopupOpen = true
      this.popupText = 'the amount of cards allowed is limited at 3.'
      this.popupContext = 'info popup'
    } else {
      this.router.navigate(['/registration-flow/add-card'])
    }
  }

  toggle(card: Card): void {
    card.flipped = !card.flipped
    console.log(card.flipped)
  }
}
