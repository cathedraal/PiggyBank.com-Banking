import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SettingsService } from '../../../services/settings/settings.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { COUNTRY_CODES, GUEST_PROFILE } from '../../../constants/constants';
import { User } from '../../../models/user.model';
import { getRandomInt } from '../../../utils/utils';
import { parsePhoneNumberWithError, type CountryCode } from 'libphonenumber-js';
import { countryCodeItem } from '../../../models/interfaces/default/ccodes.model';
import { LoginForm } from '../../../models/interfaces/reactive-forms/login.model';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  // html template
  isRegistrationFlow = false;
  guest = GUEST_PROFILE;
  ccodes: countryCodeItem[] = COUNTRY_CODES;
  selectedCountryCode: countryCodeItem = this.ccodes[0];
  formattedPhoneNumber: string = '';
  isChoosingCountryCode: boolean = false;

  // date
  date = new Date();
  dateTime = this.date.toLocaleString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  // variables
  isValidPhone: boolean = false;
  user: User | null = null;
  userId: string = `${getRandomInt(100000000000, 1900000000000)}`;

  // reactive forms
  protected form = new FormGroup<LoginForm>({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    surname: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    phone: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(7)],
    }),
  });

  // DI
  constructor(
    private settingsService: SettingsService,
    protected userService: UserService,
    private router: Router,
  ) {
    this.settingsService.setLoginPassed(false);
    this.user = this.userService.getUser();
    this.isRegistrationFlow = this.settingsService.isRegistrationFlow();
    this.settingsService.setLandingPage(false);

    if (this.user) {
      this.form.controls.name.setValue(this.user.name);
      this.form.controls.surname.setValue(this.user.surname);
      this.form.controls.email.setValue(this.user.email);
      this.form.controls.phone.setValue(this.user.phone.number);
    }
  }

  /**
   * Redirects to add card flow after logging in and creates new user
   */
  onSubmit(): void {
    if (
      this.form.valid &&
      (this.form.value.name !== '' ||
        this.form.value.surname !== '' ||
        this.form.value.email !== '')
    ) {
      this.userService.setUser(
        new User(
          this.form.value.name!,
          this.form.value.surname!,
          this.form.value.email!,
          { code: this.selectedCountryCode.value, number: this.formattedPhoneNumber },
          this.dateTime,
          this.userId,
        ),
      );
      this.router.navigate(['/registration-flow/add-card']);
    }
  }

  /**
   * Formats phone number with libphonenumber library and validates it
   * @param event Event
   */
  onPhoneNumberInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const raw = input.value;

    try {
      const phoneNumber = parsePhoneNumberWithError(raw, 'DE' as CountryCode);
      if (phoneNumber.isValid()) {
        this.isValidPhone = true;

        const formatted = phoneNumber.formatNational();
        this.formattedPhoneNumber = formatted;
        input.value = formatted.trim();
        this.form.controls.phone.setValue(formatted, { emitEvent: false });
      } else {
        this.isValidPhone = false;
      }
    } catch {
      this.isValidPhone = false;
    }
  }

  /**
   * Sets the selected country code
   * @param event Event
   */
  onCountryCodeChange(event: Event): void {
    this.isChoosingCountryCode = true;

    const select = event.target as HTMLSelectElement;

    const found = this.ccodes.find((el) => el.value === select.value);
    if (found) {
      this.selectedCountryCode = found;
    }

    console.log(this.selectedCountryCode);
  }

  /**
   * Creates a guest profile if user wants to skip the login flow
   */
  onSubmitAsGuest(): void {
    this.userService.setUser(
      new User(
        this.guest.name,
        this.guest.surname[getRandomInt(0, this.guest.surname.length - 1)],
        this.guest.email[getRandomInt(0, this.guest.email.length - 1)],
        {
          code: this.ccodes[getRandomInt(0, this.ccodes.length - 1)].code,
          number: this.guest.phone[getRandomInt(0, this.guest.phone.length - 1)],
        },
        this.dateTime,
        this.userId,
      ),
    );
  }

  /**
   * Redirects to previous page and deletes user
   */
  onBack(): void {
    this.userService.deleteUser();
  }
}
