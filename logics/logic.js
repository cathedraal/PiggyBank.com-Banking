import { validationContexts } from "./globals.js";

// validates an input and throws an error
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

// random numbers
export function getRandomInt(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

// masks a card number
export function maskCardNumber(cardNumber) {
    // remove spaces
    const clean = cardNumber.replace(/\s/g, "");

    // leave only last 4 digits
    const lastFourDigits = clean.slice(-4);

    return "•••• " + lastFourDigits;
}