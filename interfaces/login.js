/**
 * @overview Log in page. User can decide whether he writes down his own data or
 * continues as guest, which saves some time
 * @author Roman Mallindine
 */

import { wrapper, user, setUserValue } from '../logics/globals.js';
import { validateInput, getRandomInt } from '../logics/logic.js';
import { renderFooter, renderTextLabel } from '../logics/rendering.js';
import { addCard } from './addCard.js';
import { User } from '../logics/classes.js';

// The first function which is called in HTML
login();

const surnames = ['Mueller', 'Schmidt', 'Clinton', 'Smith'];
const emails = [
  'workemail@gmail.com',
  'example@gmail.com',
  'contact@gmail.com',
  'business@gmail.com',
];

/**
 * Renders page on which user logs in
 */
export function login() {
  wrapper.innerHTML = '';

  // variables
  let username = '';
  let usersurname = '';
  let useremail = '';
  // create date
  const date = new Date();
  // format date
  const dateTime = date.toLocaleString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  renderTextLabel(wrapper, 'Step 1/2 — logging in');

  // login container
  const loginContainer = document.createElement('div');
  loginContainer.classList.add('login-container');
  wrapper.append(loginContainer);

  const loginLogoText = document.createElement('h1');
  loginLogoText.classList.add('login-logoText');
  loginLogoText.textContent = 'PiggyBank.com';
  loginContainer.append(loginLogoText);

  const loginLogo = document.createElement('img');
  loginLogo.classList.add('login-logo');
  loginLogo.src = 'images/logo.png';
  loginLogo.alt = 'logo';
  loginContainer.append(loginLogo);

  // inputs
  const loginInputsContainer = document.createElement('div');
  loginInputsContainer.classList.add('login-inputsContainer');
  loginContainer.append(loginInputsContainer);

  // name
  const loginNameDiv = document.createElement('div');
  loginNameDiv.classList.add('login-nameDiv');
  loginInputsContainer.append(loginNameDiv);

  const loginNameInput = document.createElement('input');
  loginNameInput.classList.add('login-nameInput');
  loginNameInput.placeholder = 'your name';
  loginNameInput.type = 'text';
  loginNameDiv.append(loginNameInput);
  validateInput(
    loginNameInput,
    loginNameDiv,
    'name',
    (value) => (username = value)
  );

  // surname
  const loginSurnameDiv = document.createElement('div');
  loginSurnameDiv.classList.add('login-surnameDiv');
  loginInputsContainer.append(loginSurnameDiv);

  const loginSurnameInput = document.createElement('input');
  loginSurnameInput.classList.add('login-surnameInput');
  loginSurnameInput.placeholder = 'your surname';
  loginSurnameInput.type = 'text';
  loginSurnameDiv.append(loginSurnameInput);
  validateInput(
    loginSurnameInput,
    loginSurnameDiv,
    'surname',
    (value) => (usersurname = value)
  );

  // email
  const loginEmailDiv = document.createElement('div');
  loginEmailDiv.classList.add('login-emailDiv');
  loginInputsContainer.append(loginEmailDiv);

  const loginEmailInput = document.createElement('input');
  loginEmailInput.classList.add('login-emailInput');
  loginEmailInput.placeholder = 'your e-mail';
  loginEmailInput.type = 'text';
  loginEmailDiv.append(loginEmailInput);
  validateInput(
    loginEmailInput,
    loginEmailDiv,
    'email',
    (value) => (useremail = value)
  );

  // button
  const loginSubmitButton = document.createElement('button');
  loginSubmitButton.classList.add('login-submitButton');
  loginSubmitButton.textContent = 'log in';
  loginSubmitButton.addEventListener('click', () => {
    let valid = true;

    // validation
    if (username === '') {
      valid = false;
      loginNameInput.style.borderColor = '#ff7171ff';
    }
    if (usersurname === '') {
      valid = false;
      loginSurnameInput.style.borderColor = '#ff7171ff';
    }
    if (useremail === '') {
      valid = false;
      loginEmailInput.style.borderColor = '#ff7171ff';
    }
    if (valid) {
      console.log('adding card launched');
      setUserValue(new User(username, usersurname, useremail, dateTime));
      console.log(user.getInfo());
      addCard();
    }
  });

  loginContainer.append(loginSubmitButton);

  const dividerDiv = document.createElement('div');
  dividerDiv.classList.add('continueAsGuest-dividerDiv');
  loginContainer.append(dividerDiv);

  const divider = document.createElement('div');
  divider.classList.add('continueAsGuest-divider');
  dividerDiv.append(divider);

  const dividerSpan = document.createElement('span');
  dividerSpan.classList.add('continueAsGuest-dividerSpan');
  dividerSpan.textContent = 'Or';
  divider.append(dividerSpan);

  const continueAsGuestBtn = document.createElement('button');
  continueAsGuestBtn.classList.add('continueAsGuest-button');
  continueAsGuestBtn.textContent = 'continue as guest';
  continueAsGuestBtn.addEventListener('click', () => {
    username = 'Guest';
    usersurname = surnames[getRandomInt(0, surnames.length - 1)];
    useremail = emails[getRandomInt(0, emails.length - 1)];
    setUserValue(new User(username, usersurname, useremail, dateTime));
    console.log(user.getInfo());
    addCard();
  });
  dividerDiv.append(continueAsGuestBtn);

  // draw footer
  renderFooter(wrapper);

  // scroll up when rendered
  wrapper.scrollTo({ top: 0, behavior: 'smooth' });
}
