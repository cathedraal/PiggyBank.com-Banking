/**
 * @overview Page where user adds his new card. He can decide whether he skips this step, 
 * adds a guest card or adds his own card
 * @author Roman Mallindine
 */

import { wrapper, user, currencyChosen, cardTypes, cardType, changeCardType, changeCurrency, currencies } from "../logics/globals.js"
import { validateInput, getRandomInt } from "../logics/logic.js"
import { renderFooter, renderCurrency, errorMessage, renderCardTypes, renderTextLabel, renderPopup } from "../logics/rendering.js"
import { Card, Action } from "../logics/classes.js"
import { menu } from "./menu.js"


/**
 * Renders page on which user adds his new card
 */
export function addCard() {
    wrapper.innerHTML = ''

    let cardholder = ''
    let cardnumber = ''
    let cardexpdate = ''
    let cardcvc = ''
    // create date
    const date = new Date()
    // format date
    const dateTime = date.toLocaleString('de-DE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    })

    renderTextLabel(wrapper, 'Step 2/2 — adding a card')

    // add card container
    const addCardContainer = document.createElement('section')
    addCardContainer.classList.add('addCard-container')
    wrapper.append(addCardContainer)

    // title
    const addCardTitle = document.createElement('h1')
    addCardTitle.classList.add('addCard-title')
    addCardTitle.innerHTML = `<span style="color: #0c6fff;"> ${user.userName}</span>, let's add your card`

    addCardContainer.append(addCardTitle)

    // div
    const addCardDiv = document.createElement('div')
    addCardDiv.classList.add('addCard-div')
    addCardContainer.append(addCardDiv)

    // inputs
    const addCardInputsContainer = document.createElement('div')
    addCardInputsContainer.classList.add('addCard-inputsContainer')
    addCardDiv.append(addCardInputsContainer)

    // details
    const addCardOtherDetailsContainer = document.createElement('div')
    addCardOtherDetailsContainer.classList.add('addCard-otherDetailDiv')
    addCardDiv.append(addCardOtherDetailsContainer)

    // card holder
    const addCardHolderInputDiv = document.createElement('div')
    addCardHolderInputDiv.classList.add('addCard-holderInputDiv')
    addCardInputsContainer.append(addCardHolderInputDiv)

    const addCardHolderInput = document.createElement('input')
    addCardHolderInput.classList.add('addCard-holderInput')
    addCardHolderInput.placeholder = 'card holder'
    addCardHolderInput.value = `${user.userName} ${user.userSurname}`
    cardholder = addCardHolderInput.value
    addCardHolderInputDiv.append(addCardHolderInput)
    validateInput(addCardHolderInput, addCardHolderInputDiv, 'cardHolder', value => cardholder = value)
    
    // card number
    const addCardNumberInputDiv = document.createElement('div')
    addCardNumberInputDiv.classList.add('addCard-numberInputDiv')
    addCardInputsContainer.append(addCardNumberInputDiv)

    const addCardNumberInput = document.createElement('input')
    addCardNumberInput.classList.add('addCard-numberInput')
    addCardNumberInput.placeholder = 'card no.'
    addCardNumberInput.type = "text";
    addCardNumberInput.inputMode = "numeric"; // will open a bar with numbers on mobile devices
    addCardNumberInput.autocomplete = "cc-number"; // browser will suggest you to auto refill this input
    addCardNumberInput.maxLength = 19; // 16 digits + 3 spaces
    addCardNumberInput.addEventListener('input', (element) => {
        cardnumber = element.target.value
        // remove all except numbers
        cardnumber = cardnumber.replace(/\D/g, "")
        // split 
        cardnumber = cardnumber.replace(/(.{4})/g, "$1 ").trim()
        element.target.value = cardnumber
    })
    addCardNumberInputDiv.append(addCardNumberInput)
    validateInput(addCardNumberInput, addCardNumberInputDiv, 'cardNumber', value => cardnumber = value)

    // card exp date
    const addCardExpdateInputDiv = document.createElement('div')
    addCardExpdateInputDiv.classList.add('addCard-expdateInputDiv')
    addCardInputsContainer.append(addCardExpdateInputDiv)

    const addCardExpdateInput = document.createElement('input')
    addCardExpdateInput.classList.add('addCard-expdateInput')
    addCardExpdateInput.placeholder = 'exp. date'
    addCardExpdateInput.type = 'text'
    addCardExpdateInput.inputMode = 'numeric'
    addCardExpdateInput.maxLength = 5
    addCardExpdateInput.addEventListener('input', (element) => {
        cardexpdate = element.target.value
        // remove all except numbers
        cardexpdate = cardexpdate.replace(/\D/g, "")
        // split 
        if (cardexpdate.length > 2) {
            cardexpdate = cardexpdate.slice(0, 2) + '/' + cardexpdate.slice(2, 4)
        }
        element.target.value = cardexpdate
    })
    addCardExpdateInputDiv.append(addCardExpdateInput)
    validateInput(addCardExpdateInput, addCardExpdateInputDiv, 'cardExpdate', value => cardexpdate = value)
    
    // card cvc
    const addCardCvcInputDiv = document.createElement('div')
    addCardCvcInputDiv.classList.add('addCard-cvcInputDiv')
    addCardInputsContainer.append(addCardCvcInputDiv)

    const addCardCvcInput = document.createElement('input')
    addCardCvcInput.classList.add('addCard-cvcInput')
    addCardCvcInput.placeholder = 'cvc'
    addCardCvcInput.type = 'text'
    addCardCvcInput.inputMode = 'numeric'
    addCardCvcInput.maxLength = 3
    addCardCvcInput.addEventListener('input', (element) => {
        cardcvc = element.target.value
        // remove all except numbers
        cardcvc = cardcvc.replace(/\D/g, "")
        element.target.value = cardcvc
    })
    addCardCvcInputDiv.append(addCardCvcInput)
    validateInput(addCardCvcInput, addCardCvcInputDiv, 'cardCvc', value => cardcvc = value)

    // render currency
    renderCurrency(addCardOtherDetailsContainer, 'Currency', false, '')

    // line
    const line = document.createElement('hr')
    line.classList.add('addCard-line')
    addCardOtherDetailsContainer.append(line)

    // render types
    renderCardTypes(addCardOtherDetailsContainer)

    // buttons
    const addCardButtonsDiv = document.createElement('div')
    addCardButtonsDiv.classList.add('addCard-buttonsDiv')
    addCardContainer.append(addCardButtonsDiv)

    // skip button
    const addCardSkipButton = document.createElement('button')
    addCardSkipButton.classList.add('addCard-skipButton')
    addCardSkipButton.textContent = 'skip'
    addCardSkipButton.addEventListener('click', () => {
        renderPopup(
            document.body, 
            `you didn't add a card. Create a guest card?`, 
            (confirmed) => {
                if (confirmed) {
                    cardnumber = `${getRandomInt(1000, 4700)} ${getRandomInt(1000, 4700)} ${getRandomInt(1000, 4700)} ${getRandomInt(1000, 4700)}`
                    cardexpdate = `${getRandomInt(1, 12)}/${getRandomInt(27, 35)}`
                    cardcvc = getRandomInt(100, 999)
                    changeCurrency(currencies[getRandomInt(0, currencies.length-1)].value)
                    changeCardType(cardTypes[getRandomInt(0, cardTypes.length-1)].value)
                    const userCard = new Card(cardholder, cardnumber, cardexpdate, cardcvc, 0, currencyChosen, cardType)
                    user.addCard(userCard)
                    console.log(user.getInfo())
                    const clean = cardnumber.replace(/\s/g, "")
                    const lastFourDigits = clean.slice(-4)
                    const source = `${cardType}  •• ${lastFourDigits}`
                    const action = new Action('images/actions_addedCard.png', 'New', "", dateTime, "AddedCard", source)
                    user.userActions.push(action)
                    menu()
                } else {
                    menu()
                }
            },
            'continue as guest'
        )
    })
    addCardButtonsDiv.append(addCardSkipButton)

    const addCardSubmitButton = document.createElement('button')
    addCardSubmitButton.classList.add('addCard-submitButton')
    addCardSubmitButton.textContent = 'add card'
    addCardSubmitButton.addEventListener('click', () => {
        // validation
        let valid = true
        const cardNumberTooShort = cardnumber.split("").length < 16
        const cardExpDateTooShort = cardexpdate.split("").length < 4
        const cardCvcTooShort = cardcvc.split("").length < 3
        
        if (cardholder === '') {
            valid = false
            addCardHolderInput.style.borderColor = '#ff7171ff'
        } if (cardnumber === '' || cardNumberTooShort) {
            valid = false
            addCardNumberInput.style.borderColor = '#ff7171ff'
        } if (cardexpdate === '' || cardExpDateTooShort) {
            valid = false
            addCardExpdateInput.style.borderColor = '#ff7171ff'
        } if (cardcvc === '' || cardCvcTooShort) {
            valid = false
            addCardCvcInput.style.borderColor = '#ff7171ff'
        } if (currencyChosen === '') {
            valid = false
            errorMessage(addCardContainer, "please choose your currency.")
        } if (cardType === '') {
            valid = false
            errorMessage(addCardContainer, "please choose a type.")
        } if (valid) {
            console.log(currencyChosen)
            const userCard = new Card(cardholder, cardnumber, cardexpdate, cardcvc, 0, currencyChosen, cardType)
            user.addCard(userCard)
            console.log(user.getInfo())
            const clean = cardnumber.replace(/\s/g, "")
            const lastFourDigits = clean.slice(-4)
            const source = `${cardType}  •• ${lastFourDigits}`
            const action = new Action('images/actions_addedCard.png', 'A new', "", dateTime, "AddedCard", source)
            user.userActions.push(action)
            menu()
        }
    })
    addCardButtonsDiv.append(addCardSubmitButton)

    //render footer
    renderFooter(wrapper)

    // scroll up when rendered
    wrapper.scrollTo({ top: 0, behavior: 'smooth' })
}