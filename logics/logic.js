/**
 * @overview Contains utility functions for input validation, 
 * random number generation and card number masking.
 * @author Roman Mallindine
 */

import { validationContexts } from "./globals.js";


/**
 * Validates an input and throws an error if the condition is false
 * 
 * @param {HTMLInputElement} input - an input which we want to validate
 * @param {HTMLDivElement} area - area where we want to place the error message
 * @param {string} context - context to understand what error message should be thrown
 * @param {Function} callback - function called after validation 
 * @example
 * validateInput(addCardHolderInput, addCardHolderInputDiv, 'cardHolder', value => cardholder = value)
 */
export function validateInput(input, area, context, callback) {
    let errorMessage = area.querySelector('.error-message');
    if (!errorMessage) {
        errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        area.append(errorMessage);
    }
    errorMessage.style.display = 'none';

    const validate = () => {
        input.style.border = 'none'
        let value = input.value.trim();
        const isEmpty = value === '';
        const emailCorrect = value.includes('@') && value.includes('.') && !value.startsWith('@') && !value.endsWith('@') 

        if (context === 'email') {
            if (emailCorrect && !isEmpty) {
                errorMessage.style.display = 'none'
            } else if (!emailCorrect) {
                errorMessage.textContent = validationContexts[context].text2;
                errorMessage.style.display = 'block'
            } else if (isEmpty) {
                errorMessage.textContent = validationContexts[context].text1;
                errorMessage.style.display = 'block'
            }
        } else {
            if (!isEmpty) {
                errorMessage.style.display = 'none'
            } else { 
                errorMessage.textContent = validationContexts[context].text1;
                errorMessage.style.display = 'block'
            }
        }
        callback(value); // update variable
    }

    input.addEventListener('input', validate);
    input.addEventListener('blur', validate);
}

/**
 * A function which returns random number from a to b
 * @param {number} a - from this number
 * @param {number} b - to this number
 * @returns {number} random number
 */
export function getRandomInt(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

/**
 * Masks a card number leaving last four digits visible
 */
export function maskCardNumber(cardNumber) {
    // remove spaces
    const clean = cardNumber.replace(/\s/g, "");

    // leave only last 4 digits
    const lastFourDigits = clean.slice(-4);

    return "•••• " + lastFourDigits;
}