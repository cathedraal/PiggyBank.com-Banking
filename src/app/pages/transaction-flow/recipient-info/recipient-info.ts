import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Recipient } from '../../../models/recipient.model';
import { Router } from '@angular/router';
import { TransactionFlowService } from '../../../services/default/transaction-flow/transaction-flow';
import { RecipientService } from '../../../services/default/recipient/recipient.service';
import { UserService } from '../../../services/default/user/user.service';
import { RecipientInfoForm } from '../../../models/interfaces/reactive-forms/recipientInfo.model';

@Component({
  selector: 'app-recipient-info',
  imports: [ReactiveFormsModule],
  templateUrl: './recipient-info.html',
  styleUrl: './recipient-info.css',
})
export class RecipientInfoComponent {
  // html template
  protected form = new FormGroup<RecipientInfoForm>({
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

  // variables
  optionalText: string = '';
  recipient: Recipient | null = null;

  // DI
  constructor(
    private router: Router,
    private transactionFlowService: TransactionFlowService,
    private recipientService: RecipientService,
    private userService: UserService,
  ) {
    this.recipient = this.recipientService.getRecipient();
    if (this.recipient) {
      this.form.controls.name.setValue(this.recipient.name);
      this.form.controls.surname.setValue(this.recipient.surname);
      this.form.controls.email.setValue(this.recipient.email);
      this.optionalText = this.recipient.optionalText;
    }
  }

  /**
   * Sets the optional text for the recipient
   * @param event Input field event
   */
  onOptionalTextInput(event: Event): void {
    const input = event.target as HTMLTextAreaElement;
    this.optionalText = input.value;
  }

  /**
   * If the form is valid, user will be redirected to the next page
   */
  onContinue(): void {
    if (this.form.valid) {
      const recipient = new Recipient(
        this.form.controls.name.value,
        this.form.controls.surname.value,
        this.form.controls.email.value,
        this.optionalText,
      );
      this.recipientService.setRecipient(recipient);
      this.userService.user()?.addRecipient(recipient);
      this.transactionFlowService.setRecipientInfoPassed(true);
      this.router.navigate(['/transaction-flow/choosing-wallet']);
    }
  }

  /**
   * Redirects to the previous page and deletes the details from the form
   * @param recipientName
   */
  onBack(recipientName: string): void {
    if (this.userService.user()) {
      const found = this.userService
        .user()!
        .recipients.find((recipient) => recipient.name === recipientName);
      if (found) {
        this.recipientService.deleteRecipient(found);
      }
      this.recipientService.setRecipient(null);
      this.router.navigate(['/dashboard']);
    }
  }
}
