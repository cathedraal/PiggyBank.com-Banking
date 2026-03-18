/**
 * @overview Contains pages rendered after a money operation is completed —
 * either a success or a failure screen.
 * @author Roman Mallindine
 */

import { renderHeader, renderFooter } from '../logics/rendering.js';
import { menu } from './menu.js';
import { withdrawMoney } from './withdrawMoney.js';
import { transferMoney } from './transferMoney.js';

/**
 * Renders success page after successful action
 */
export function renderSuccessPage(context, param1, param2, card) {
  wrapper.innerHTML = '';

  // header
  renderHeader(wrapper, context);

  // main section
  const successMainContainer = document.createElement('section');
  successMainContainer.classList.add('success-mainContainer');
  wrapper.append(successMainContainer);

  // icon
  const successIcon = document.createElement('img');
  successIcon.classList.add('success-Icon');
  successIcon.src = 'images/successful.png';
  successMainContainer.append(successIcon);

  // text
  const successText = document.createElement('h1');
  successText.classList.add('success-text');

  const successSubtitle = document.createElement('p');
  successSubtitle.classList.add('success-subtitle');

  if (context === 'Add money') {
    successText.textContent = `${param1} succesfully added!`;
    successSubtitle.textContent = `You used a ${card} for that`;
  }
  if (context === 'Transfer money') {
    successText.textContent = `${param1} sent to ${param2} successfully!`;
    successSubtitle.textContent = `You used a ${card} for that`;
  }
  if (context === 'Withdraw money') {
    successText.textContent = `${param1} withdrawn succesfully!`;
    successSubtitle.textContent = `You used a ${card} for that`;
  }
  successMainContainer.append(successText);
  successMainContainer.append(successSubtitle);

  // button
  const successButton = document.createElement('button');
  successButton.classList.add('success-button');
  successButton.textContent = 'Back to menu';
  successButton.addEventListener('click', () => {
    menu();
  });
  successMainContainer.append(successButton);

  // footer
  renderFooter(wrapper);

  // scroll up when rendered
  wrapper.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Renders fail page after failed action
 */
export function renderFailPage(context, param1, card) {
  wrapper.innerHTML = '';

  // header
  renderHeader(wrapper, context);

  // main section
  const failMainContainer = document.createElement('section');
  failMainContainer.classList.add('fail-mainContainer');
  wrapper.append(failMainContainer);

  // icon
  const failIcon = document.createElement('img');
  failIcon.classList.add('fail-Icon');
  failIcon.src = 'images/fail.png';
  failMainContainer.append(failIcon);

  // text
  const failText = document.createElement('h1');
  failText.classList.add('fail-text');
  failText.innerHTML = `Failed to ${param1} money.<br>You don't have enough money.`;
  failMainContainer.append(failText);

  const failSubtitle = document.createElement('p');
  failSubtitle.classList.add('fail-subtitle');
  failSubtitle.textContent = `You used a ${card} for that`;
  failMainContainer.append(failSubtitle);

  // button
  const failButton = document.createElement('button');
  failButton.classList.add('fail-button');
  failButton.textContent = 'Back';
  failButton.addEventListener('click', () => {
    if (context === 'Withdraw money') {
      withdrawMoney();
    }
    if (context === 'Transfer money') {
      transferMoney();
    }
  });
  failMainContainer.append(failButton);

  // footer
  renderFooter(wrapper);

  // scroll up when rendered
  wrapper.scrollTo({ top: 0, behavior: 'smooth' });
}
