/**
 * @overview Contains User, Card and Action classes which handle the main
 * banking logic - card management, transaction history and profile management
 * @author Roman Mallindine
 */

import { changeCurrency, changeCardType } from './globals.js';

/**
 * Class Card - used to create a new card
 */
export class Card {
  constructor(
    cardHolder,
    cardNumber,
    cardExpDate,
    cardCvc,
    cardBalance,
    cardCurrency,
    cardType
  ) {
    this.cardHolder = cardHolder;
    this.cardNumber = cardNumber;
    this.cardExpDate = cardExpDate;
    this.cardCvc = cardCvc;
    this.cardBalance = cardBalance;
    this.cardCurrency = cardCurrency;
    this.cardType = cardType;
  }

  getInfo() {
    return `holder: ${this.cardHolder}, number: ${this.cardNumber}, 
        exp date: ${this.cardExpDate}, cvc: ${this.cardCvc}, balance: ${this.cardBalance}, 
        currency: ${this.cardCurrency}, type: ${this.cardType}`;
  }

  addBalance(amount) {
    this.cardBalance = this.cardBalance + amount;
  }

  transferMoney(
    recipientName,
    recipientEmail,
    text,
    userName,
    amount,
    currency,
    userEmail,
    companyName = 'PiggyBank.com'
  ) {
    // send to email
    const params = {
      moneyamount: `${currency + amount}`,
      recipientname: recipientName,
      recipientemail: recipientEmail,
      comment: text,
      username: userName,
      useremail: userEmail,
      companyname: companyName,
    };

    emailjs.send('service_807c8ah', 'template_lkb0bhl', params);
    this.cardBalance = this.cardBalance - amount;
  }

  withdrawMoney(amount) {
    this.cardBalance = this.cardBalance - amount;
  }
}

/**
 * Class Card - used to create a new user after logging in
 */
export class User {
  constructor(userName, userSurname, userEmail, loginDate) {
    this.userName = userName;
    this.userSurname = userSurname;
    this.userEmail = userEmail;
    this.loginDate = loginDate;
    this.userCards = [];
    this.userActions = [];
  }

  getInfo() {
    return `name: ${this.userName}, surname: ${this.userSurname}, 
        email: ${this.userEmail}, cards: ${this.userCards}`;
  }

  addCard(card) {
    this.userCards.push(card);
  }

  deleteCard(card) {
    this.userCards.splice(card, 1);
  }

  deleteAccount() {
    this.userName = '';
    this.userSurname = '';
    this.userEmail = '';
    this.loginDate = '';
    this.userCards = [];
    this.userActions = [];
    changeCurrency('');
    changeCardType('');
  }

  // available in future
  sendQuestion(username, text) {
    // send to email
    const params = {
      username: username,
      userquestion: text,
    };

    // emailjs.send('service_807c8ah', 'template_lkb0bhl', params)
  }
}

/**
 * This class is used to create user's log after manipulating with one of his cards
 */
export class Action {
  constructor(icon, text, highlight, date, context, source) {
    ((this.icon = icon),
      (this.text = text),
      (this.highlight = highlight),
      (this.date = date));
    ((this.context = context),
      (this.source = source),
      (this.description = this.#generateDescription(context, text)));
  }

  #generateDescription(context, text) {
    const descriptions = {
      Add: 'The money has been successfully added to this card.',
      AddedCard: 'You have successfully added a new card.',
      Transfer: {
        success: 'The money has been successfully sent from this card.',
        error:
          'You tried to transfer money from this card. However, an error occured.',
      },
      Withdraw: {
        success: 'The money has been succesfully withdrawn from this card.',
        error:
          'You tried to withdraw money from this card. However, an error occured.',
      },
      Delete: {
        success: 'You succesfully deleted this card.',
        error: 'None',
      },
    };

    if (context === 'Transfer' || context === 'Withdraw') {
      const isSuccess = text === 'Sent money to' || text === 'Withdrawn money';
      return isSuccess
        ? descriptions[context].success
        : descriptions[context].error;
    }

    return descriptions[context] ?? 'Unknown action.';
  }
}
