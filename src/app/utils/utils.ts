/**
 * @overview Contains utility functions for
 * random number generation, card number masking.
 * @author Roman Mallindine
 */

/**
 * Creates a date
 * @returns {string}
 */
export function createDate(): string {
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

  return dateTime;
}

/**
 * A function which returns random number from a to b
 * @param {number} numberA - from this number
 * @param {number} numberB - to this number
 * @returns {number} random number
 */
export function getRandomInt(numberA: number, numberB: number): number {
  return Math.floor(Math.random() * (numberB - numberA + 1)) + numberA;
}

/**
 * Masks a card number leaving last four digits visible
 */
export function maskCardNumber(cardNumber: string): string {
  // remove spaces
  const clean = cardNumber.replace(/\s/g, '');
  // leave only last 4 digits
  const lastFourDigits = clean.slice(-4);

  return '•••• ' + lastFourDigits;
}

/**
 * Formats a card number into the action format
 * @param cardType type of the card
 * @param cardNumber number of the card
 * @returns source with card type and number 
 */
export function formatToSource(cardType: string, cardNumber: string): string {
  const clean = cardNumber.replace(/\s/g, '')
  const lastFourDigits = clean.slice(-4)
  return `${cardType}  •• ${lastFourDigits}`
}