import { Injectable } from '@angular/core';
import { RecipientService } from '../recipient/recipient.service';
import { UserService } from '../user/user.service';
import { BankService } from '../bank/bank.service'
import emailjs from '@emailjs/browser';
import { COMPANY_NAME } from '../../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  constructor(
    private recipientService: RecipientService,
    private userService: UserService,
    private bankService: BankService,
  ) {}

  sendEmail(): void {
    const user = this.userService.getUser();

    const params = {
      amount: this.bankService.getAmount(),
      recipientName: this.recipientService.getRecipientName(),
      recipientEmail: this.recipientService.getRecipientEmail(),
      recipientText: this.recipientService.getRecipientText(),
      userName: user?.name,
      userEmail: user?.email,
      companyName: COMPANY_NAME,
    };

    emailjs.send('service_807c8ah', 'template_lkb0bhl', params);
  }
}
