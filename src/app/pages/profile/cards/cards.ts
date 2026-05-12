import { AfterViewInit, Component, computed, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Card } from '../../../models/card.model';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/default/user/user.service';
import { formatToSource, maskCardNumber } from '../../../utils/utils';
import { PopupComponent } from '../../../components/popup/popup';
import { EmptyCardsProfileComponent } from '../empty-cards-profile/empty-cards-profile';
import { Router } from '@angular/router';
import { CARDS_AMOUNT_ALLOWED } from '../../../constants/businessLogic';
import { Action } from '../../../models/action.model';
import { NotificationService } from '../../../services/default/notification/notification.service';

@Component({
  selector: 'app-cards',
  imports: [CommonModule, PopupComponent, EmptyCardsProfileComponent],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class CardsComponent implements AfterViewInit, OnInit {
  // html template
  cards = computed(() => this.userService.user()?.cards ?? null);
  formatNumber = maskCardNumber;
  isPopupOpen: boolean = false;
  popupText: string = '';
  popupContext: string = '';
  isScrolledTillEnd: boolean = false;

  // variables
  private selectedCard: Card | null = null;
  @ViewChild('profileCard') activeCard!: ElementRef<HTMLElement>;
  @ViewChild('profileCards') activeCards!: ElementRef<HTMLElement>;
  cardScrollWidth: number = 0;
  flipCard: boolean = false;

  // date
  date = new Date();
  dateTime = this.date.toLocaleString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  // DI
  constructor(
    private userService: UserService,
    private router: Router,
    private notificationService: NotificationService,
  ) {}

  // Gives a width of a card displayed on DOM
  ngAfterViewInit(): void {
    this.cardScrollWidth = this.activeCard.nativeElement.scrollWidth;
  }

  // Sets all cards as inactive, so that they all are not flipped by default
  ngOnInit(): void {
    for (let i = 0; i < this.userService.user()!.cards.length; i++) {
      this.userService.user()!.cards[i].active = false;
    }
  }

  /**
   * Opens popup
   * @param card Chosen card
   */
  openPopup(card: Card): void {
    this.popupText = 'you sure you want to delete this card?';
    this.popupContext = 'delete card';
    this.selectedCard = card;
    this.isPopupOpen = true;
    console.log(this.userService.user()?.cards);
  }

  /**
   * Closes popup
   */
  onDecline(): void {
    this.isPopupOpen = false;
  }

  /**
   * Deletes the chosen card
   */
  onConfirm(): void {
    if (this.selectedCard) {
      this.userService.deleteCard(this.selectedCard);
      const action = new Action(
        'icons/delete.svg',
        this.dateTime,
        formatToSource(this.selectedCard.cardType.type, this.selectedCard.cardNumber),
        { verb: 'Deleted', noun: '', preposition1: '', preposition2: '' },
      );
      this.userService.user()?.addAction(action);
      this.notificationService.triggerNotification(true, true, 'card deleted');
    }
    this.isPopupOpen = false;
    this.selectedCard = null;
    console.log(this.userService.user()?.cards);
  }

  /**
   * Scrolls the cards
   */
  onScroll(): void {
    const el = this.activeCards.nativeElement;
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth;

    if (isAtEnd) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
      this.isScrolledTillEnd = true;
    } else {
      el.scrollBy({ left: this.cardScrollWidth, behavior: 'smooth' });
      this.isScrolledTillEnd = false;
    }
  }

  /**
   * Validates if user already reached the limit of allowed cards before redirecting to add card flow
   */
  onAddCard(): void {
    if (this.userService.getUser()?.cards.length === CARDS_AMOUNT_ALLOWED) {
      this.isPopupOpen = true;
      this.popupText = `the amount of cards allowed is limited at ${CARDS_AMOUNT_ALLOWED}.`;
      this.popupContext = 'info popup';
    } else {
      this.router.navigate(['/registration-flow/add-card']);
    }
  }

  /**
   * Flippes chosen card
   * @param card Chosen card
   */
  toggle(card: Card): void {
    card.active = !card.active;
    console.log(card.active);
  }
}
