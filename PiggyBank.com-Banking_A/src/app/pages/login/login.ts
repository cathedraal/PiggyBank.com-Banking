import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../services/settings/settings.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { GUEST_PROFILE } from '../../constants/constants';
import { User } from '../../models/user.model';
import { getRandomInt } from '../../utils/utils';

interface LoginForm {
  name: FormControl<string>;
  surname: FormControl<string>;
  email: FormControl<string>;
}

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  isRegistrationFlow = false;
  guest = GUEST_PROFILE;
  date = new Date();
  dateTime = this.date.toLocaleString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

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
  });

  constructor(
    private settingsService: SettingsService,
    private userService: UserService,
  ) {
    this.isRegistrationFlow = this.settingsService.isRegistrationFlow();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.userService.setUser(
        new User(
          this.form.value.name!,
          this.form.value.surname!,
          this.form.value.email!,
          this.dateTime
        ),
      );
    }
    console.log(this.userService.getUser());
  }

  onSubmitAsGuest(): void {
    this.userService.setUser(
      new User(
        this.guest.name,
        this.guest.surname[getRandomInt(0, this.guest.surname.length - 1)],
        this.guest.email[getRandomInt(0, this.guest.email.length - 1)],
        this.dateTime,
      ),
    );
    console.log(this.userService.getUser())
  }

  onBack(): void {
    this.userService.deleteUser()
  }
}
