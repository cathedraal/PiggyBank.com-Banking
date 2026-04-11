import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BankService } from '../../services/bank/bank.service';
import { Card } from '../../models/card.model';
import { PopupComponent } from '../../components/popup/popup';
import { currencyTypesItem } from '../../models/interfaces/currencies.model';
import { CARD_TYPES, CURRENCY_TYPES } from '../../constants/constants';
import { Action } from '../../models/action.model';
import { cardTypesItem } from '../../models/interfaces/cardTypes.model';
import { RegistrationFlowComponent } from '../../components/registration-flow/registration-flow';

interface AddCardForm {
  holder: FormControl<string>;
  number: FormControl<string>;
  expDate: FormControl<string>;
  cvc: FormControl<string>;
}
@Component({
  selector: 'app-add-card',
  imports: [RouterLink, ReactiveFormsModule, PopupComponent, RegistrationFlowComponent],
  templateUrl: `./add-card.html`,
  styleUrl: './add-card.css',
})
export class AddCardComponent implements OnInit {
  // html template
  isRegistrationFlow: boolean = false;
  isPopupOpen: boolean = false;
  popupText: string = `you didn't add a card. Create a guest card?`;
  popupContext: string = 'guestCard';
  currencies: currencyTypesItem[] = CURRENCY_TYPES;
  types: cardTypesItem[] = CARD_TYPES;

  // model
  user: User | null = null;

  // card setters
  cardHolder: string = '';
  cardNumber: string = '';
  cardExpdate: string = '';
  cardCvc: string = '';
  cardType: string = CARD_TYPES[0].value;
  cardCurrency: currencyTypesItem = CURRENCY_TYPES[0];

  // date
  date = new Date();
  dateTime = this.date.toLocaleString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  protected form = new FormGroup<AddCardForm>({
    holder: new FormControl<string>(``, {
      nonNullable: true,
      validators: Validators.required,
    }),
    number: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(19)],
    }),
    expDate: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    cvc: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });

  constructor(
    private settingsService: SettingsService,
    private userService: UserService,
    private bankService: BankService,
    private router: Router,
  ) {
    this.isRegistrationFlow = this.settingsService.isRegistrationFlow();
    this.user = this.userService.getUser();
    this.form.controls.holder.setValue(`${this.user?.name.toUpperCase()} ${this.user?.surname.toUpperCase()}`)
  }

  ngOnInit(): void {
    console.log(this.user)
  }

  /**
   * Formats card holder input
   * @param event - input event from card holder field
   */
  onCardHolderInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    value = value.replace(/\d/g, '');
    input.value = value.toUpperCase();
    this.cardHolder = value;
  }

  /**
   * Formats card number input with spaces every 4 digits
   * @param event - input event from card number field
   * @example
   * 1111222233334444 -> 1111 2222 3333 4444
   */
  onCardNumberInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    value = value.replace(/\D/g, '');
    value = value.replace(/(.{4})/g, '$1 ').trim();

    input.value = value;
    this.cardNumber = value;
  }

  /**
   * Formats card exp. date input with with / after 2 digits
   * @param event - input event from card exp. date field
   * @example
   * 1122 -> 11/22
   */
  onCardExpdateInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    value = value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    input.value = value;
    this.cardExpdate = value;
  }

  /**
   * Formats card cvc leaving only max. 4 digits
   * @param event - input event from card cvc field
   */
  onCardCvcInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    value = value.replace(/\D/g, '');

    input.value = value;
    this.cardCvc = value;
  }

  /**
   * Sets card currency to a selected currency
   * @param event - select event from card currency dropdown
   */
  onCurrencyChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const found = this.currencies.find((c) => c.currency === select.value);
    if (found) {
      this.cardCurrency = found;
    }
    this.bankService.setCurrency(this.cardCurrency.currency);
  }

  /**
   * Sets card type to a selected type
   * @param event - select event from card type dropdown
   */
  onTypeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.cardType = select.value;
    this.bankService.setCardType(this.cardType);
  }

  /**
   * Creates a new card with given parameters from the UI Component using service
   */
  onSubmit(): void {
    const clean = this.cardNumber.replace(/\s/g, '')
    const lastFourDigits = clean.slice(-4)
    const source = `${this.cardType}  •• ${lastFourDigits}`

    if (this.form.valid) {
      const action = new Action(
        'icons/transactions_newCard.svg',
        this.dateTime,
        source,
        'addedCard',
        'Added a new',
      );
      const card = new Card(
        this.cardHolder,
        this.cardNumber,
        this.cardExpdate,
        this.cardCvc,
        null,
        this.cardCurrency.value,
        this.cardType,
      );
      this.bankService.setCurrentCard(card);
      this.user?.addCard(card);
      this.user?.addAction(action);
      this.router.navigate(['/dashboard']);
      this.isPopupOpen = false;
      console.log(card);
      console.log(this.user)
    }
  }

  /**
   * Opens popup when 'skip' button is clicked
   */
  openPopup(): void {
    this.isPopupOpen = true;
  }

  /**
   * Creates a guest card with given random parameters using service
   */
  onGuestCard(): void {
    const guestCard = this.bankService.generateGuestCard(
      this.user!
    );

    const clean = guestCard.cardNumber.replace(/\s/g, '')
    const lastFourDigits = clean.slice(-4)
    const source = `${this.cardType}  •• ${lastFourDigits}`

    const action = new Action(
      'icons/transactions_newCard.svg',
      this.dateTime,
      source,
      'addedCard',
      'Added a new guest',
    );
    this.bankService.setCurrentCard(guestCard);
    this.user?.addCard(guestCard);
    this.user?.addAction(action);
    this.router.navigate(['/dashboard']);
    this.isPopupOpen = false;
    console.log(guestCard);
    console.log(this.user)
  }

  /**
   * Closes popup and creates no cards
   */
  onSkip(): void {
    this.isPopupOpen = false;
    this.router.navigate(['/dashboard']);
  }

  /**
   * Closes popup
   */
  onClose(): void {
    this.isPopupOpen = false
  }
}
