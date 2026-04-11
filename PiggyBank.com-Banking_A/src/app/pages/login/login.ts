import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SettingsService } from '../../services/settings/settings.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { COUNTRY_CODES, GUEST_PROFILE } from '../../constants/constants';
import { User } from '../../models/user.model';
import { getRandomInt } from '../../utils/utils';
import { parsePhoneNumberWithError, type CountryCode } from 'libphonenumber-js';
import { countryCodeItem } from '../../models/interfaces/ccodes.model';

interface LoginForm {
  name: FormControl<string>;
  surname: FormControl<string>;
  email: FormControl<string>;
  phone: FormControl<string>;
}

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

  // date
  date = new Date();
  dateTime = this.date.toLocaleString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  // variables
  isValidPhone: boolean = false;

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

  constructor(
    private settingsService: SettingsService,
    private userService: UserService,
    private router: Router,
  ) {
    this.isRegistrationFlow = this.settingsService.isRegistrationFlow();
  }

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
        ),
      );
      this.router.navigate(['/add-card']);
    }
  }

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

  onCountryCodeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;

    const found = this.ccodes.find((el) => el.value === select.value);
    if (found) {
      this.selectedCountryCode = found;
    }

    console.log(this.selectedCountryCode);
  }

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
      ),
    );
  }

  onBack(): void {
    this.userService.deleteUser();
  }
}
