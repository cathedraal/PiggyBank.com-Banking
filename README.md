# PiggyBank.com-Banking

A simple digital bank that lets users send, top up, and withdraw money. It’s designed to be easy to use and beginner-friendly.

## Features

- User registration with real-time form validation
- Add and manage bank cards (debit, credit, virtual, etc.)
- Add money, transfer funds and withdraw balance
- View profile, delete/add cards
- Email notifications for transfers via EmailJS
- Transaction history with timestamps
- Articles
- Multi-currency support (USD, EUR, GBP)
- Responsive design

## Tech Stack

- Vanilla JavaScript (ES6+)
- OOP with 3 classes: User, Card, Action
- CSS3
- EmailJS API
- Modular architecture (ES Modules)

## Project Structure

```
/interfaces
   - login.js
   - articlePage.js
   - menu.js
   - profile.js
   - addCard.js
   - addMoney.js
   - transferMoney.js
   - withdrawMoney.js
   - validationPages.js
   - actions.js
/logics
   - classes.js
   - logic.js
   - rendering.js
   - globals.js
/styles
   - actions.css
   - addCard.css
   - chooseWallet.css
   - footer.css
   - headers.css
   - login.css
   - menu.css
   - newsPage.css
   - profile.css
   - validationPages.css
   - GENERAL.css
```

## Getting Started

Clone the repo and open `index.html` in your browser.
No dependencies, no build tools required.

## Live Demo

https://cathedraal.github.io/PiggyBank.com-Banking/
