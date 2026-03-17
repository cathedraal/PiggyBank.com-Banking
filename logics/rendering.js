/**
 * @overview Contains functions responsible for rendering UI components and updating the interface
 * @author Roman Mallindine
 */

import { benefits, cardTypes, news, newsPage, user, question, contexts, recipientname, recipientemail, recipienttext, userQuestion, changeCurrency, changeRecipientValues, changeCardType, cardType, currencyChosen } from "./globals.js";
import { menu } from "../interfaces/menu.js";
import { withdrawMoney } from "../interfaces/withdrawMoney.js";
import { transferMoney } from "../interfaces/transferMoney.js";
import { addMoney } from "../interfaces/addMoney.js";
import { addCard } from "../interfaces/addCard.js";
import { profile } from "../interfaces/profile.js";
import { login } from "../interfaces/login.js";
import{ actions } from "../interfaces/actions.js"
import { maskCardNumber, validateInput } from "./logic.js";
import { Action } from "./classes.js";
import { articlePage } from "../interfaces/articlePage.js";
import { renderSuccessPage, renderFailPage } from "../interfaces/validationPages.js";


// Variables which are used in function "renderRecipientInfo()" which is 
// rendered when wanting to transfer money
let recipientparam1 = ""
let recipientparam2 = ""
let recipientparam3 = ""


/**
 * Renders a confirmation popup with two buttons
 * @param {HTMLElement} section - element to append popup to
 * @param {string} text - popup message
 * @param {Function} callback - called with true if confirmed, false if declined
 * @param {string} context - controls button labels ('deleting card' | 'logging out' | 'continue as guest' | 'adding card' | 'have question')
 */
export function renderPopup(section, text, callback, context) {

    const overlay = document.createElement('div')
    overlay.classList.add('body-overlay')
    section.append(overlay)

    const popup = document.createElement('div')
    popup.classList.add('body-popup')
    overlay.append(popup)

    const popupText = document.createElement('h3')
    popupText.classList.add('body-popupText')
    popupText.textContent = text
    popup.append(popupText)

    const buttons = document.createElement('div')
    buttons.classList.add('popup-buttons')

    const popupButton1 = document.createElement('button')
    popupButton1.addEventListener('click', () => {
        callback(true)
        overlay.remove()
    })

    const popupButton2 = document.createElement('button')
    popupButton2.addEventListener('click', () => {
        callback(false)
        overlay.remove()
    })

    if (context === 'deleting card' || context === 'logging out') {
        popupButton1.textContent = `I'm sure`
        popupButton2.textContent = `I'm not sure`
        popupButton2.classList.add('popup-button1')
        popupButton1.classList.add('popup-button2')
    } else if (context === 'continue as guest') {
        popupButton1.textContent = 'create card'
        popupButton2.textContent = 'skip'
        popupButton2.classList.add('popup-button1')
        popupButton1.classList.add('popup-button2')
    } else if (context === 'adding card') {
        popupButton1.textContent = 'delete cards'
        popupButton2.textContent = 'okay'
        popupButton2.classList.add('popup-button1')
        popupButton1.classList.add('popup-button2')
    } else if (context === 'have question') {
        popupText.textContent = ''
        popupButton2.classList.add('popup-button2')
        popupButton1.classList.add('popup-button1')
        popupText.innerHTML = `<span style="color: #000000;"> ${user.userName}</span>, describe your problem.`
        const questionInputDiv = document.createElement('div')
        questionInputDiv.classList.add('popup-questionInputdiv')
        popup.append(questionInputDiv)
        
        let questionInput = document.createElement('textarea')
        questionInput.classList.add('popup-questionInput')
        questionInput.placeholder = 'I have this issue...'

        questionInputDiv.append(questionInput)
        if (question !== "") {
            questionInput.value = question
        }
        questionInput.addEventListener('input', () => {
            question = questionInput.value
            userQuestion(question)
        })
        popupButton1.textContent = 'send'
        popupButton2.textContent = 'cancel'
    }
    popup.append(buttons)
    buttons.append(popupButton1)
    buttons.append(popupButton2)
}


/**
 * Renders text label above log in steps
 */
export function renderTextLabel(section, text) {
    const textLabel = document.createElement('h3')
    textLabel.classList.add('text-label')
    textLabel.textContent = text
    
    section.append(textLabel)
}


/**
 * Renders currency label
 */
export function renderCurrency(section, text, boolean, existingCurrency) {

    // object 
    const currencies = [
        {   
            currency: "USD",
            value: "$",
        },
        {
            currency: "EUR",
            value: "€",
        },
        {
            currency: "GBP",
            value: "£"
        }
    ]

    // currency
    const menuCurrencyContainer = document.createElement('div')
    menuCurrencyContainer.classList.add('menu-currencyContainer')
    section.append(menuCurrencyContainer)

    // buttons div
    const menuCurrencyButtons = document.createElement('div')
    menuCurrencyButtons.classList.add('menu-currencyButtons')

    // text
    const menuCurrencyText = document.createElement('h3')
    menuCurrencyText.classList.add('menu-currencyText')
    menuCurrencyText.textContent = text
    menuCurrencyContainer.append(menuCurrencyText)

    menuCurrencyContainer.append(menuCurrencyButtons)

    // creating wallets
    for (let i = 0; i < currencies.length; i++) {

        const menuCurrencyButton = document.createElement('button')
        menuCurrencyButton.classList.add('menu-currencyButton')
        menuCurrencyButton.innerHTML = `<span class="menu-currencySpan"> ${currencies[i].value}</span> ${currencies[i].currency}`
        menuCurrencyButton.value = currencies[i].value

        if (currencies[i].value === existingCurrency) {
            menuCurrencyButton.classList.add('menu-currencyButton--active')
        }

        menuCurrencyButtons.append(menuCurrencyButton)

        menuCurrencyButton.addEventListener('click', function () {
            // find all currency buttons in DOM
            const allCurrencyButtons = document.querySelectorAll('.menu-currencyButton')
    
            allCurrencyButtons.forEach(button => {
                button.classList.remove('menu-currencyButton--active')
            })
            this.classList.add('menu-currencyButton--active')

            changeCurrency(this.value)
            console.log(currencyChosen)
        })
        menuCurrencyButton.disabled = boolean
    }
}


/**
 * Renders available card types
 */
export function renderCardTypes(section) {
    const cardTypesContainer = document.createElement("div")
    cardTypesContainer.classList.add('cardTypes-Container')

    section.append(cardTypesContainer)
    
    const cardTypesText = document.createElement("h3")
    cardTypesText.classList.add('cardTypes-text')
    cardTypesText.textContent = "Type"
    cardTypesContainer.append(cardTypesText)

    const cardTypesButtons = document.createElement("div")
    cardTypesButtons.classList.add("cardTypes-buttons")
    cardTypesContainer.append(cardTypesButtons)

    for (let i = 0; i < cardTypes.length; i++) {
        const button = document.createElement('button')
        button.classList.add('cardTypes-button')
        button.textContent = cardTypes[i].text
        button.value = cardTypes[i].value

        button.addEventListener("click", function() {
            // find all wallets in DOM
            const buttons = document.querySelectorAll('.cardTypes-button')
    
            // make all buttons default color
            buttons.forEach(button => {
                button.style.backgroundColor = "#f8f8f8"; 
                button.style.color = '#787878'
            })
            
            // color the clicked one
            this.classList.add('cardTypes-button--active')
            this.style.backgroundColor = "#0c6fff"
            this.style.color = '#ffffff'
            
            changeCardType(this.value)
            console.log(this.value)
            console.log(cardType)
        })
        cardTypesButtons.append(button)
    }
}


/**
 * Draws a back button when called
 */
export function renderBackButton(section) {

    const buttonIcon = document.createElement("img")
    buttonIcon.classList.add("page-backButtonIcon")
    buttonIcon.src = "images/arrow.svg"

    const button = document.createElement("button")
    button.classList.add("page-backButton")
    button.textContent = "back"

    button.append(buttonIcon)
    button.addEventListener("click", () => {
        menu()
    })
    section.append(button)
}


/**
 * Renders log out button when called
 */
export function renderLogoutButton(section, classList) {
    const menuLogoutButton = document.createElement('button')
    menuLogoutButton.classList.add(classList)
    menuLogoutButton.textContent = 'log out'
    menuLogoutButton.addEventListener('click', () => {
        renderPopup(
            document.body, 
            'You sure you want to logout?', 
            (confirmed) => {
                if (confirmed) {
                    user.deleteAccount()
                    login()
                } else {
                    console.log('not deleted')
                }
            },
            'logging out'
        )
    })
    section.append(menuLogoutButton)
}


/**
 * Renders "need help?" button when called
 */
export function renderNeedHelpButton(section) {
    const menuNeedHelpButton = document.createElement('button')
    menuNeedHelpButton.classList.add('menu-needHelpButton')
    menuNeedHelpButton.textContent = 'need help?'
    menuNeedHelpButton.addEventListener('click', () => {
        renderPopup(
            document.body,
            '',
            (confirmed) => {
                if (confirmed) {
                    console.log('question sent')
                    alert('Your question has been sent.')
                } else {
                    console.log('question NOT sent')
                }
            },
            'have question'
        )
    })
    section.append(menuNeedHelpButton)
}


/**
 * Renders section with user's wallet in the menu
 */
export function renderWallet(section) {
    // wallet container
    const menuWalletContainer = document.createElement('section')
    menuWalletContainer.classList.add('menu-walletContainer')
    section.append(menuWalletContainer)

    // wallet balance
    const menuWallet = document.createElement('div')
    menuWallet.classList.add('menu-wallet')
    menuWalletContainer.append(menuWallet)

    const menuWalletTextDiv = document.createElement('div')
    menuWalletTextDiv.classList.add('menu-walletTextDiv')
    menuWallet.append(menuWalletTextDiv)

    const menuWalletText = document.createElement('h3')
    menuWalletText.classList.add('menu-walletText')
    menuWalletText.textContent = 'Your total balance'
    menuWalletTextDiv.append(menuWalletText)

    // card type text
    const cardTypeText = document.createElement('p')
    cardTypeText.classList.add('profile-cardTypeText')
    if (user.userCards[0].cardType === 'CREDIT') {
        cardTypeText.style.backgroundColor = '#50c8785a'
    } if (user.userCards[0].cardType === 'DEBIT') {
        cardTypeText.style.backgroundColor = '#f0a4005e'
    } if (user.userCards[0].cardType === 'VIRTUAL') {
        cardTypeText.style.backgroundColor = '#4a8fd94e'
    } if (user.userCards[0].cardType === 'PREPAID') {
        cardTypeText.style.backgroundColor = '#7c68ee52'
    }
    cardTypeText.textContent = user.userCards[0].cardType
    menuWalletTextDiv.append(cardTypeText)

    const menuWalletBalance = document.createElement('h1')
    menuWalletBalance.classList.add('menu-walletBalance')
    let balance = 0
    for (let i = 0; i < user.userCards.length; i++) {
        balance += user.userCards[i].cardBalance
    }
    menuWalletBalance.innerHTML = `<span style="color: #0c6fff;"> ${user.userCards[0].cardCurrency}</span>${balance.toFixed(2)}`
    menuWallet.append(menuWalletBalance)

    // card number with profile button underneath balance
    const menuWalletCardNumberContainer = document.createElement('div')
    menuWalletCardNumberContainer.classList.add('menu-walletCardNumberContainer')
    menuWallet.append(menuWalletCardNumberContainer)

    const menuWalletCardNumber = document.createElement('h3')
    menuWalletCardNumber.classList.add('menu-walletCardNumber')
    menuWalletCardNumber.textContent = maskCardNumber(user.userCards[0].cardNumber)
    menuWalletCardNumberContainer.append(menuWalletCardNumber)
    if (user.userCards.length > 1) {
        const menuWalletCardsAmount = document.createElement('p')
        menuWalletCardsAmount.classList.add('menu-walletsCardAmount')
        menuWalletCardsAmount.textContent = `+${user.userCards.length - 1}`
        menuWalletCardNumberContainer.append(menuWalletCardsAmount)
    }
    const menuWalletCardProfile = document.createElement('button')
    menuWalletCardProfile.classList.add('menu-walletCardProfile')
    const menuWalletCardProfileIcon = document.createElement('img')
    menuWalletCardProfileIcon.classList.add('menu-walletCardProfileIcon')
    menuWalletCardProfileIcon.src = 'images/profile.png'
    menuWalletCardProfile.append(menuWalletCardProfileIcon)
    menuWalletCardProfile.addEventListener('click', () => {
        profile()
    })
    menuWalletCardNumberContainer.append(menuWalletCardProfile)

    // manage wallet container
    const menuManageWalletContainer = document.createElement('div')
    menuManageWalletContainer.classList.add('menu-manageWalletContainer')
    menuWalletContainer.append(menuManageWalletContainer)

    const menuManageWalletText = document.createElement('h3')
    menuManageWalletText.classList.add('menu-manageWalletText')
    menuManageWalletText.textContent = 'Manage wallet'
    menuManageWalletContainer.append(menuManageWalletText)
    
    const menuManageWalletButtons = document.createElement('div')
    menuManageWalletButtons.classList.add('menu-manageWalletButtons')
    menuManageWalletContainer.append(menuManageWalletButtons)

    // add money
    const menuManageWalletAdd = document.createElement('button')
    menuManageWalletAdd.classList.add('menu-manageWalletAdd')
    menuManageWalletAdd.textContent = 'add money'
    const menuManageWalletAddIconDiv = document.createElement('div')
    menuManageWalletAddIconDiv.classList.add('menu-manageWalletAddIconDiv')
    const menuManageWalletAddIcon = document.createElement('img')
    menuManageWalletAddIcon.classList.add('menu-manageWalletAddIcon')
    menuManageWalletAddIcon.src = 'images/add.png'
    menuManageWalletAddIconDiv.append(menuManageWalletAddIcon)
    menuManageWalletAdd.append(menuManageWalletAddIconDiv)
    menuManageWalletAdd.addEventListener('mouseenter', () => {
        menuManageWalletAdd.style.backgroundColor = '#ffffff'
        menuManageWalletAddIconDiv.style.backgroundColor = '#d8d8d8'
    })
    menuManageWalletAdd.addEventListener('mouseleave', () => {
        menuManageWalletAdd.style.backgroundColor = '#f8f8f8'
        menuManageWalletAddIconDiv.style.backgroundColor = '#0c6fff'
    })
    menuManageWalletAdd.addEventListener('click', () => {
        addMoney()
    })
    menuManageWalletButtons.append(menuManageWalletAdd)

    // transfer money
    const menuManageWalletTransfer = document.createElement('button')
    menuManageWalletTransfer.classList.add('menu-manageWalletTransfer')
    menuManageWalletTransfer.textContent = 'transfer money'
    const menuManageWalletTransferIconDiv = document.createElement('div')
    menuManageWalletTransferIconDiv.classList.add('menu-manageWalletTransferIconDiv')
    const menuManageWalletTransferIcon = document.createElement('img')
    menuManageWalletTransferIcon.classList.add('menu-manageWalletTransferIcon')
    menuManageWalletTransferIcon.src = 'images/send.png'
    menuManageWalletTransferIconDiv.append(menuManageWalletTransferIcon)
    menuManageWalletTransfer.append(menuManageWalletTransferIconDiv)
    menuManageWalletTransfer.addEventListener('mouseenter', () => {
        menuManageWalletTransfer.style.backgroundColor = '#ffffff'
        menuManageWalletTransferIconDiv.style.backgroundColor = '#0c6fff'
    })
    menuManageWalletTransfer.addEventListener('mouseleave', () => {
        menuManageWalletTransfer.style.backgroundColor = '#f8f8f8'
        menuManageWalletTransferIconDiv.style.backgroundColor = '#d8d8d8'
    })
    menuManageWalletTransfer.addEventListener('click', () => {
        transferMoney()
    })
    menuManageWalletButtons.append(menuManageWalletTransfer)

    // withdraw money
    const menuManageWalletWithdraw = document.createElement('button')
    menuManageWalletWithdraw.classList.add('menu-manageWalletWithdraw')
    menuManageWalletWithdraw.textContent = 'withdraw money'
    const menuManageWalletWithdrawIconDiv = document.createElement('div')
    menuManageWalletWithdrawIconDiv.classList.add('menu-manageWalletWithdrawIconDiv')
    const menuManageWalletWithdrawIcon = document.createElement('img')
    menuManageWalletWithdrawIcon.classList.add('menu-manageWalletWithdrawIcon')
    menuManageWalletWithdrawIcon.src = 'images/withdraw.png'
    menuManageWalletWithdrawIconDiv.append(menuManageWalletWithdrawIcon)
    menuManageWalletWithdraw.append(menuManageWalletWithdrawIconDiv)
    menuManageWalletWithdraw.addEventListener('mouseenter', () => {
        menuManageWalletWithdraw.style.backgroundColor = '#ffffff'
        menuManageWalletWithdrawIconDiv.style.backgroundColor = '#0c6fff'
    })
    menuManageWalletWithdraw.addEventListener('mouseleave', () => {
        menuManageWalletWithdraw.style.backgroundColor = '#f8f8f8'
        menuManageWalletWithdrawIconDiv.style.backgroundColor = '#d8d8d8'
    })
    menuManageWalletWithdraw.addEventListener('click', () => {
        withdrawMoney()
    })
    menuManageWalletButtons.append(menuManageWalletWithdraw)
}


/**
 * Renders benefits section in the menu
 */
export function renderBenefits(section) {
    const benefitsContainer = document.createElement('section')
    benefitsContainer.classList.add('menu-benefitsContainer')
    section.append(benefitsContainer)

    for (let i = 0; i < benefits.length; i++) {
        const benefitsDiv = document.createElement('div')
        benefitsDiv.classList.add('menu-benefitsDiv')
        benefitsContainer.append(benefitsDiv)

        const benefitsHeader = document.createElement('h3')
        benefitsHeader.classList.add('menu-benefitsHeader')
        benefitsHeader.textContent = benefits[i].header
        benefitsDiv.append(benefitsHeader)

        const benefitsIcon = document.createElement('img')
        benefitsIcon.classList.add('menu-benefitsIcon')
        benefitsIcon.src = benefits[i].image
        benefitsDiv.append(benefitsIcon)

        const benefitsTitle = document.createElement('h3')
        benefitsTitle.classList.add('menu-benefitsTitle')
        benefitsTitle.textContent = benefits[i].title
        benefitsDiv.append(benefitsTitle)

        const benefitsSubtitle = document.createElement('p')
        benefitsSubtitle.classList.add('menu-benefitsSubtitle')
        benefitsSubtitle.textContent = benefits[i].subtitle
        benefitsDiv.append(benefitsSubtitle)
    }
}


/**
 * Renders actions section in the menu
 */
export function renderActions(section) {
    const menuLatestActionsContainer = document.createElement('section')
    menuLatestActionsContainer.classList.add('menu-latestActionsContainer')
    section.append(menuLatestActionsContainer)

    const menuLatestActionsTextDiv = document.createElement('div')
    menuLatestActionsTextDiv.classList.add('menu-latestActionsTextDiv')
    menuLatestActionsContainer.append(menuLatestActionsTextDiv)

    const menuLatestActionsText = document.createElement('h3')
    menuLatestActionsText.classList.add('menu-latestActionsText')
    menuLatestActionsText.textContent = 'Latest actions'
    menuLatestActionsTextDiv.append(menuLatestActionsText)

    const menuLatestActionsNoActions = document.createElement('div')
    menuLatestActionsNoActions.classList.add('menu-latestActionsNoActions')
    menuLatestActionsNoActions.textContent = 'You have no actions yet.'

    const menuLatestActionsDiv = document.createElement('div')
    menuLatestActionsDiv.classList.add('menu-latestActionsDiv')
    menuLatestActionsContainer.append(menuLatestActionsDiv)

    const userActionsArr = user.userActions.slice(-5).reverse()

    if (user.userActions.length === 0) {
        menuLatestActionsContainer.append(menuLatestActionsNoActions)
    } else {
        for (let i = 0; i < userActionsArr.length; i++) {
            const actionsContainer = document.createElement('div')
            actionsContainer.classList.add('actions-container')
            menuLatestActionsDiv.append(actionsContainer)

            const actionsDiv = document.createElement('div')
            actionsDiv.classList.add('actions-div') 
            actionsContainer.append(actionsDiv)

            const actionsIcon = document.createElement('img')
            actionsIcon.classList.add('actions-icon')
            actionsIcon.src = userActionsArr[i].icon
            actionsDiv.append(actionsIcon)

            const actionsText = document.createElement('p')
            actionsText.classList.add('actions-text')
            if (userActionsArr[i].context === 'AddedCard') {
                actionsText.innerHTML = `${userActionsArr[i].text} <span class='actions-highlight2'"> ${userActionsArr[i].source}</span> added.`
            } else if (userActionsArr[i].context === 'Add') {
                actionsText.innerHTML = `${userActionsArr[i].text} <span class='actions-highlight'"> ${userActionsArr[i].highlight}</span> to <span class='actions-highlight2';"> ${userActionsArr[i].source}</span>`
            } else if (userActionsArr[i].context === 'Delete') {
                actionsText.innerHTML = `${userActionsArr[i].text} <span class='actions-highlight'"> ${userActionsArr[i].highlight}</span><span class='actions-highlight2';"> ${userActionsArr[i].source}</span>`
            } else {
                actionsText.innerHTML = `${userActionsArr[i].text} <span class='actions-highlight'"> ${userActionsArr[i].highlight}</span> from <span class='actions-highlight2';"> ${userActionsArr[i].source}</span>`
            }
            actionsDiv.append(actionsText)

            const actionsDate = document.createElement('p')
            actionsDate.classList.add('actions-date')
            actionsDate.textContent = `On ${userActionsArr[i].date}`
            actionsContainer.append(actionsDate)
        }
        const seeAllActionsButton = document.createElement('button')
        seeAllActionsButton.classList.add('actions-seeAllActionsButton')
        const seeAllActionsButtonIcon = document.createElement('img')
        seeAllActionsButtonIcon.classList.add('actions-seeAllActionsButtonIcon')
        seeAllActionsButtonIcon.src = 'images/arrow_up.png'
        seeAllActionsButton.append(seeAllActionsButtonIcon)
        seeAllActionsButton.addEventListener('click', () => {
            actions()
        })
        menuLatestActionsTextDiv.append(seeAllActionsButton)
    }
}


/**
 * Renders a container with user's actions with his card 
 */
export function renderAllActions(section) {
    const container = document.createElement("section")
    container.classList.add("actionsPage-container")
    
    section.append(container)

    const userActions = user.userActions.reverse()

    for (let i = 0; i < userActions.length; i++) {
        const actionsContainer = document.createElement('div')
        actionsContainer.classList.add('allActions-container')
        container.append(actionsContainer)

        const actionsDiv = document.createElement('div')
        actionsDiv.classList.add('actions-div') 
        actionsContainer.append(actionsDiv)

        const actionsIcon = document.createElement('img')
        actionsIcon.classList.add('actions-icon')
        actionsIcon.src = userActions[i].icon
        actionsDiv.append(actionsIcon)

        const actionsText = document.createElement('p')
        actionsText.classList.add('actions-text')
        if (userActions[i].context === 'AddedCard') {
            actionsText.innerHTML = `${userActions[i].text} <span class='actions-highlight2'"> ${userActions[i].source}</span> added.`
        } else if (userActions[i].context === 'Add') {
            actionsText.innerHTML = `${userActions[i].text} <span class='actions-highlight'"> ${userActions[i].highlight}</span><span class='actions-highlight2';"> ${userActions[i].source}</span>`
        } else if (userActions[i].context === 'Delete') {
            actionsText.innerHTML = `${userActions[i].text} <span class='actions-highlight'"> ${userActions[i].highlight}</span><span class='actions-highlight2';"> ${userActions[i].source}</span>`
        } else {
            actionsText.innerHTML = `${userActions[i].text} <span class='actions-highlight'"> ${userActions[i].highlight}</span> from <span class='actions-highlight2';"> ${userActions[i].source}</span>`
        }
        actionsDiv.append(actionsText)

        const actionsDate = document.createElement('p')
        actionsDate.classList.add('allActions-date')
        actionsDate.textContent = `On ${userActions[i].date}`
        actionsDiv.append(actionsDate)

        const actionsDescription = document.createElement("p")
        actionsDescription.classList.add("actions-description")
        actionsDescription.textContent = userActions[i].description
        actionsContainer.append(actionsDescription)
    }
}


/**
 * Renders news section in the menu
 */
export function renderNews(section) {
    const menuNewsText = document.createElement('h3')
    menuNewsText.classList.add('menu-newsText')
    menuNewsText.textContent = 'Latest articles on PiggyBank.com'

    const menuNewsContainer = document.createElement('div')
    menuNewsContainer.classList.add('menu-newsContainer')

    const menuNewsSection = document.createElement('div')
    menuNewsSection.classList.add('menu-newsSection')
    menuNewsSection.append(menuNewsText)
    menuNewsSection.append(menuNewsContainer)
    section.append(menuNewsSection)

    for (let i = 0; i < news.length; i++) {
        const menuNewsBlog = document.createElement('div')
        menuNewsBlog.classList.add('menu-newsBlog')
        
        const menuNewsBlogImage = document.createElement('img')
        menuNewsBlogImage.classList.add('menu-newsBlogImage')
        menuNewsBlogImage.src = news[i].image
        menuNewsBlog.append(menuNewsBlogImage)

        const menuNewsBlogDate = document.createElement('p')
        menuNewsBlogDate.classList.add('menu-newsBlogDate')
        menuNewsBlogDate.textContent = news[i].date
        menuNewsBlog.append(menuNewsBlogDate)

        const menuNewsBlogTitle = document.createElement('h2')
        menuNewsBlogTitle.classList.add('menu-newsBlogTitle')
        menuNewsBlogTitle.textContent = news[i].title
        menuNewsBlog.append(menuNewsBlogTitle)

        const menuNewsBlogSubtitle = document.createElement('p')
        menuNewsBlogSubtitle.classList.add('menu-newsBlogSubtitle')
        menuNewsBlogSubtitle.textContent = news[i].subtitle
        menuNewsBlog.append(menuNewsBlogSubtitle)

        const menuNewsBlogButton = document.createElement('button')
        menuNewsBlogButton.classList.add('menu-newsBlogButton')
        menuNewsBlogButton.textContent = news[i].btnText
        menuNewsBlogButton.value = news[i].value
        menuNewsBlogButton.addEventListener('click', () => {
            articlePage(menuNewsBlogButton.value)
        })
        menuNewsBlog.append(menuNewsBlogButton)

        menuNewsContainer.append(menuNewsBlog)
    }
}


/**
 * Renders a news article on selected section.
 * @param {string} value - which article should be rendered
 */
export function renderNewsPage(section, value) {

    const newsPageDiv = document.createElement('div')
    newsPageDiv.classList.add('newsPage-div')
    section.append(newsPageDiv)

    const title = document.createElement('h1')
    title.classList.add('newsPage-title')
    title.textContent = newsPage[value].header
    newsPageDiv.append(title)

    const subtitle = document.createElement('p')
    subtitle.classList.add('newsPage-subtitle')
    subtitle.textContent = newsPage[value].subheader
    newsPageDiv.append(subtitle)

    const publishedDate = document.createElement('h3')
    publishedDate.classList.add('newsPage-publishedDate')
    publishedDate.textContent = newsPage[value].date
    newsPageDiv.append(publishedDate)

    const image1 = document.createElement('img')
    image1.classList.add('newsPage-image1')
    image1.src = newsPage[value].image
    newsPageDiv.append(image1)

    const photoBy = document.createElement('p')
    photoBy.classList.add('newsPage-photoBy')
    photoBy.textContent = newsPage[value].author
    newsPageDiv.append(photoBy)

    const content1 = document.createElement('p')
    content1.classList.add('newsPage-content')
    content1.innerHTML = newsPage[value].content1
    newsPageDiv.append(content1)

    const image2 = document.createElement('img')
    image2.classList.add('newsPage-image2')
    image2.src = newsPage[value].image2
    newsPageDiv.append(image2)

    const photoBy2 = document.createElement('p')
    photoBy2.classList.add('newsPage-photoBy')
    photoBy2.textContent = newsPage[value].author
    newsPageDiv.append(photoBy2)

    const content2 = document.createElement('p')
    content2.classList.add('newsPage-content')
    content2.innerHTML = newsPage[value].content2
    newsPageDiv.append(content2)
}


/**
 * Renders header
 * @param {string} [text=''] - optional subtitle, used only on menu header
 */
export function renderHeader(section, context, text = "") {
    // header

    const header = document.createElement('header')

    const headerDiv = document.createElement('div')
    headerDiv.classList.add('header-div')
    header.append(headerDiv)

    const headerIcon = document.createElement('img')
    headerIcon.classList.add('manageWallet-headerIcon')

    const headerText = document.createElement('h1')
    headerText.classList.add('manageWallet-headerText')

    const headerLine = document.createElement('hr')
    headerLine.classList.add('header-line')

    if (context === 'Add money') {
        header.classList.add('manageWallet-header')
        section.append(header)
        header.append(headerDiv)
        headerDiv.append(headerText)
        headerDiv.append(headerIcon)
        header.append(headerLine)
        headerText.textContent = 'Add money'
        headerIcon.src = 'images/header_icon_add.png'
    } else if (context === 'Transfer money') {
        header.classList.add('manageWallet-header')
        section.append(header)
        header.append(headerDiv)
        headerDiv.append(headerText)
        headerDiv.append(headerIcon)
        header.append(headerLine)
        headerText.textContent = 'Transfer money'
        headerIcon.src = 'images/header_icon_transfer.png'
    } else if (context === 'Withdraw money') {
        header.classList.add('manageWallet-header')
        section.append(header)
        header.append(headerDiv)
        headerDiv.append(headerText)
        headerDiv.append(headerIcon)
        header.append(headerLine)
        headerText.textContent = 'Withdraw money'
        headerIcon.src = 'images/header_icon_withdraw.png'
    } else {
        header.classList.add('menu-header')
        section.append(header)

        // logo
        const menuHeaderLogo = document.createElement('img')
        menuHeaderLogo.classList.add('menu-headerLogo')
        menuHeaderLogo.src = 'images/logo.png'
        menuHeaderLogo.alt = 'menu logo'
        header.append(menuHeaderLogo)

        // title "hello, {name}"
        const menuHeaderTitle = document.createElement('h1')
        menuHeaderTitle.classList.add('menu-headerTitle')
        menuHeaderTitle.innerHTML = `Hello, <span style="color: #0c6fff;"> ${user.userName}</span>`
        header.append(menuHeaderTitle)
        
        // subtitle
        const menuHeaderSubtitle = document.createElement('h2')
        menuHeaderSubtitle.classList.add('menu-headerSubtitle')
        menuHeaderSubtitle.textContent = text
        header.append(menuHeaderSubtitle)

        // line
        header.append(headerLine)
    }
}


/**
 * Renders wallet selection and amount input for money operations
 * @param {HTMLElement} section - container on which we want to render wallet selection etc.
 * @param {string} context - operation type ('Add money' | 'Transfer money' | 'Withdraw money')
 */
export function renderChooseWallet(section, context) {
    // variables
    let inputPressed = false
    let selectedCard = user.userCards[0]

    const addMoneyMainContainer = document.createElement('section')
    addMoneyMainContainer.classList.add('addMoney-mainSection')
    section.append(addMoneyMainContainer)

    // text label
    const addMoneyChooseWalletText = document.createElement('h1')
    addMoneyChooseWalletText.classList.add('addMoney-chooseWalletText')
    addMoneyChooseWalletText.textContent = 'Choose wallet'
    addMoneyMainContainer.append(addMoneyChooseWalletText)

    // main div container with wallets + input
    const addMoneyMainDiv = document.createElement('div')
    addMoneyMainDiv.classList.add('addMoney-mainDiv')
    addMoneyMainContainer.append(addMoneyMainDiv)

    // input -> container
    const addMoneyInputContainer = document.createElement('div')
    addMoneyInputContainer.classList.add('addMoney-inputContainer')
    addMoneyMainDiv.append(addMoneyInputContainer)

    // input -> div 
    const addMoneyInputDiv = document.createElement('div')
    addMoneyInputDiv.classList.add('addMoney-inputDiv')
    addMoneyInputContainer.append(addMoneyInputDiv)

    // creating container for wallets
    const addMoneyWallets = document.createElement('div')
    addMoneyWallets.classList.add('addMoney-wallets')
    addMoneyMainDiv.append(addMoneyWallets)

    // creating wallets
    for (let i = 0; i < user.userCards.length; i++) {
        const card = user.userCards[i]

        const addMoneyWallet = document.createElement('button')
        addMoneyWallet.classList.add('addMoney-wallet')
        
        const addMoneyWalletBalance = document.createElement('h2')
        addMoneyWalletBalance.classList.add('addMoney-walletBalance')
        addMoneyWalletBalance.innerHTML = `<span class="addMoney-walletCurrency"> ${user.userCards[i].cardCurrency}</span>${user.userCards[i].cardBalance.toFixed(2)}`
        
        addMoneyWallet.append(addMoneyWalletBalance)

        const addMoneyWalletNumber = document.createElement('p')
        addMoneyWalletNumber.classList.add('addMoney-walletNumber')
        addMoneyWalletNumber.textContent = maskCardNumber(user.userCards[i].cardNumber)

        addMoneyWallet.append(addMoneyWalletNumber)

        addMoneyWallet.addEventListener('click', function () {
            // find all wallets in DOM
            const allMoneyWallets = document.querySelectorAll('.addMoney-wallet')
    
            // Make all buttons default state
            allMoneyWallets.forEach(button => button.classList.remove('addMoney-wallet--active', button.style.backgroundColor = "#f8f8f8"))
            
            // Color the clicked button
            this.classList.add('addMoney-wallet--active')
            this.style.backgroundColor = "#0c6fff"
            
            selectedCard = card
        })
        addMoneyWallets.append(addMoneyWallet)
    }

    // input -> text
    const addMoneyInputContainerText = document.createElement('h3')
    addMoneyInputContainerText.classList.add('addMoney-inputContainerText')
    addMoneyInputContainerText.textContent = contexts[context].container
    addMoneyInputDiv.append(addMoneyInputContainerText)

    // input -> input field
    const addMoneyInput = document.createElement('input')
    addMoneyInput.classList.add('addMoney-input')
    addMoneyInput.type = 'text'
    addMoneyInput.inputMode = 'numeric'
    addMoneyInput.autocomplete = 'off'
    addMoneyInput.placeholder = `${selectedCard.cardCurrency}0.00`

    // input field -> validation
    let centsValue = 0
    addMoneyInput.addEventListener('input', (element) => {
        inputPressed = true

        let digits = element.target.value.replace(/\D/g, "");
        if (digits === '') {
            digits = "0"
        }
        const cents = parseInt(digits, 10);
        centsValue = cents
        const formatted = (cents / 100).toFixed(2);
        element.target.value = `${selectedCard.cardCurrency}` + formatted;
    })
    addMoneyInputDiv.append(addMoneyInput)

    // submit button
    const addMoneyInputSubmit = document.createElement('button')
    addMoneyInputSubmit.classList.add('addMoney-inputSubmit')
    addMoneyInputSubmit.textContent = contexts[context].button
    addMoneyInputSubmit.addEventListener('click', () => {
        changeRecipientValues(recipientparam1, recipientparam2, recipientparam3)
        let amountOfMoney = centsValue / 100
        const clean = selectedCard.cardNumber.replace(/\s/g, "")
        const lastFourDigits = clean.slice(-4)
        const source = `${selectedCard.cardType}  •• ${lastFourDigits}`
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

        if (inputPressed && amountOfMoney !== 0) {
            if (context === 'Add money') {
                selectedCard.addBalance(amountOfMoney)
                const action = new Action('images/actions_add.png', 'Added money', `${selectedCard.cardCurrency}${amountOfMoney}`, dateTime, "Add", source)
                user.userActions.push(action)
                renderSuccessPage('Add money', `${selectedCard.cardCurrency}${amountOfMoney}`, '', source)
                amountOfMoney = 0
            } else if (context === 'Transfer money') {
                const success = amountOfMoney < selectedCard.cardBalance && recipientname !== "" && recipientemail !== ""
                if (success) {
                    selectedCard.transferMoney(recipientname, recipientemail, recipienttext, user.userName, amountOfMoney, selectedCard.cardCurrency, user.userEmail)
                    const action = new Action('images/actions_transfer.png', 'Sent money to', `${recipientname} ${selectedCard.cardCurrency}${amountOfMoney}`, dateTime, "Transfer", source)
                    user.userActions.push(action)
                    recipientparam1 = ""
                    recipientparam2 = ""
                    recipientparam3 = ""
                    renderSuccessPage('Transfer money', `${selectedCard.cardCurrency}${amountOfMoney}`, recipientname, source)
                    changeRecipientValues(recipientparam1, recipientparam2, recipientparam3)
                } else {
                    if (recipientname === "" || recipientemail === "") {
                        renderFailPage('Transfer money', 'send', source)
                    } else if (amountOfMoney > selectedCard.cardBalance) {
                        renderFailPage('Transfer money', 'send', source)
                    }
                    const action = new Action('images/actions_failed.png', 'Failed to', `send money`, dateTime, "Transfer", source)
                    user.userActions.push(action)
                }
                amountOfMoney = 0
            } else if (context === 'Withdraw money') {
                const success = amountOfMoney < selectedCard.cardBalance
                if (success) {
                    selectedCard.withdrawMoney(amountOfMoney)
                    const action = new Action('images/actions_withdraw.png', 'Withdrawn money', `${selectedCard.cardCurrency}${amountOfMoney}`, dateTime, "Withdraw", source)
                    user.userActions.push(action)
                    renderSuccessPage('Withdraw money', `${selectedCard.cardCurrency}${amountOfMoney}`, '', source)
                } else {
                    renderFailPage('Withdraw money', 'withdraw', source)
                    const action = new Action('images/actions_failed.png', 'Failed to', `withdraw money`, dateTime, "Withdraw", source)
                    user.userActions.push(action)
                }
                amountOfMoney = 0
            }
        } else if (!inputPressed) {
            console.error('Input not pressed.')
        } else if (amountOfMoney === 0) {
            errorMessage(addMoneyInputDiv, "Value must be above 0€.", true)
            console.error("an error occured while trying to send 0€.")
        } else {
            console.error("Something went wrong.")
        }
    })
    addMoneyInputContainer.append(addMoneyInputSubmit)
}


/**
 * Renders personal details about user ( name, surname | email | reg. date ).
 */
export function renderPersonalDetails(section) {
    const userDetails = [
        {
            text1: "name",
            text2: `${user.userName}, ${user.userSurname}`
        },
        {
            text1: "e-Mail",
            text2: `${user.userEmail}`
        },
        {
            text1: "reg. date",
            text2: `${user.loginDate}`
        }
    ]

    const personalSection = document.createElement("section")
    personalSection.classList.add("profile-personalSection")

    section.append(personalSection)

    const personalText = document.createElement("h1")
    personalText.classList.add("profile-personalText")
    personalText.textContent = "Personal details"
    personalSection.append(personalText)

    const personalContainer = document.createElement("div")
    personalContainer.classList.add("profile-personalContainer")
    personalSection.append(personalContainer)

    for (let i = 0; i < userDetails.length; i++) {
        const personalDiv = document.createElement("div")
        personalDiv.classList.add("profile-personalDiv")

        const personalText1 = document.createElement("p")
        personalText1.classList.add("profile-personalText1")
        personalText1.textContent = userDetails[i].text1

        const personalText2 = document.createElement("p")
        personalText2.classList.add("profile-personalText2")
        personalText2.textContent = userDetails[i].text2

        personalDiv.append(personalText1)
        personalDiv.append(personalText2)

        personalContainer.append(personalDiv)
    }
}


/**
 * Renders details about user's card/s with a button "Add card"
 */
export function renderWalletsDetails(section) { 
    
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

    const walletsDetailsSection = document.createElement("section")
    walletsDetailsSection.classList.add("profile-walletsDetailsSection")
    section.append(walletsDetailsSection)

    const walletsDetailsText = document.createElement("h1")
    walletsDetailsText.classList.add("profile-walletsDetailsText")
    if (user.userCards.length > 1) {
        walletsDetailsText.textContent = "Your cards"
    } else {
        walletsDetailsText.textContent = "Your card"
    }
    walletsDetailsSection.append(walletsDetailsText)

    const walletsContainer = document.createElement("div")
    walletsContainer.classList.add("profile-walletsContainer")
    walletsDetailsSection.append(walletsContainer)

    const wallets = document.createElement('div')
    wallets.classList.add('profile-wallets')
    walletsContainer.append(wallets)

    for (let i = 0; i < user.userCards.length; i++) {
        const walletDetailsDiv = document.createElement("div")
        walletDetailsDiv.classList.add("profile-walletDetailsDiv")
        
        // div
        const cardBalanceLabelDiv = document.createElement("div")
        cardBalanceLabelDiv.classList.add("profile-cardBalanceDiv")
        
        // "card balance text"
        const cardBalanceText = document.createElement("p")
        cardBalanceText.classList.add("profile-cardBalanceText")
        cardBalanceText.textContent = "Card balance"

        // card type text
        const cardTypeText = document.createElement('p')
        cardTypeText.classList.add('profile-cardTypeText')
        cardTypeText.textContent = user.userCards[i].cardType
        if (user.userCards[i].cardType === 'CREDIT') {
            cardTypeText.style.backgroundColor = '#50c8785a'
        } if (user.userCards[i].cardType === 'DEBIT') {
            cardTypeText.style.backgroundColor = '#f0a4005e'
        } if (user.userCards[i].cardType === 'VIRTUAL') {
            cardTypeText.style.backgroundColor = '#4a8fd94e'
        } if (user.userCards[i].cardType === 'PREPAID') {
            cardTypeText.style.backgroundColor = '#7c68ee52'
        }

        // delete card button
        const deleteCardButton = document.createElement("button")
        deleteCardButton.classList.add("profile-deleteCardButton")
        deleteCardButton.textContent = "delete"

        const deleteCardButtonIcon = document.createElement("img")
        deleteCardButtonIcon.classList.add("profile-deleteCardButtonIcon")
        deleteCardButtonIcon.src = "images/delete.png"
        deleteCardButton.append(deleteCardButtonIcon)
        deleteCardButton.addEventListener("click", () => {
            renderPopup(
                document.body, 
                'You sure you want to delete this card?', 
                (confirmed) => {
                    if (confirmed) {
                        walletDetailsDiv.remove()
                        const clean = user.userCards[i].cardNumber.replace(/\s/g, "")
                        const lastFourDigits = clean.slice(-4)
                        const source = `${user.userCards[i].cardType}  •• ${lastFourDigits}`
                        const action = new Action('images/actions_delete.png', 'Deleted card', ``, dateTime, "Delete", source)
                        user.userActions.push(action)
                        user.deleteCard(user.userCards[i])
                    } else {
                        console.log('not deleted')
                    }
                },
                'deleting card'
            )
        })

        cardBalanceLabelDiv.append(cardBalanceText)
        cardBalanceLabelDiv.append(cardTypeText)
        cardBalanceLabelDiv.append(deleteCardButton)
        walletDetailsDiv.append(cardBalanceLabelDiv)
        
        // balance
        const cardBalance = document.createElement("h1")
        cardBalance.classList.add("profile-cardBalance")
        cardBalance.innerHTML = `<span style="color: #0c6fff;"> ${user.userCards[i].cardCurrency}</span>${user.userCards[i].cardBalance.toFixed(2)}`
        walletDetailsDiv.append(cardBalance)

        // card holder
        const cardHolderDiv = document.createElement("div")
        cardHolderDiv.classList.add("profile-cardHolderDiv")
        walletDetailsDiv.append(cardHolderDiv)

        const cardHolderText = document.createElement("p")
        cardHolderText.classList.add("profile-cardHolderText")
        cardHolderText.textContent = "Card holder"
        cardHolderDiv.append(cardHolderText)

        const cardHolderText2 = document.createElement("p")
        cardHolderText2.classList.add("profile-cardHolderText2")
        cardHolderText2.textContent = `${user.userCards[i].cardHolder.toUpperCase()}`
        cardHolderDiv.append(cardHolderText2)

        // line
        const cardWalletLine = document.createElement("hr")
        cardWalletLine.classList.add("profile-cardWalletLine")
        walletDetailsDiv.append(cardWalletLine)
        
        // other card infos
        const otherCardInfosDiv = document.createElement("div")
        otherCardInfosDiv.classList.add("profile-otherCardInfosDiv")
        walletDetailsDiv.append(otherCardInfosDiv)

        // card number
        const cardNumberDiv = document.createElement("div")
        cardNumberDiv.classList.add("profile-cardNumberDiv")
        otherCardInfosDiv.append(cardNumberDiv)

        const cardNumberText = document.createElement("p")
        cardNumberText.classList.add("profile-cardNumberText")
        cardNumberText.textContent = "Card no."
        cardNumberDiv.append(cardNumberText)

        const cardNumberText2 = document.createElement("p")
        cardNumberText2.classList.add("profile-cardNumberText2")
        cardNumberText2.textContent = `${user.userCards[i].cardNumber}`
        cardNumberDiv.append(cardNumberText2)

        // card expdate
        const cardExpdateDiv = document.createElement("div")
        cardExpdateDiv.classList.add("profile-cardExpdateDiv")
        otherCardInfosDiv.append(cardExpdateDiv)

        const cardExpdateText = document.createElement("p")
        cardExpdateText.classList.add("profile-cardExpdateText")
        cardExpdateText.textContent = "Exp. date"
        cardExpdateDiv.append(cardExpdateText)

        const cardExpdateText2 = document.createElement("p")
        cardExpdateText2.classList.add("profile-cardExpdateText2")
        cardExpdateText2.textContent = `${user.userCards[i].cardExpDate}`
        cardExpdateDiv.append(cardExpdateText2)

        // card cvc
        const cardCvcDiv = document.createElement("div")
        cardCvcDiv.classList.add("profile-cardCvcDiv")
        otherCardInfosDiv.append(cardCvcDiv)

        const cardCvcText = document.createElement("p")
        cardCvcText.classList.add("profile-cardCvcText")
        cardCvcText.textContent = "CVC"
        cardCvcDiv.append(cardCvcText)

        const cardCvcText2 = document.createElement("p")
        cardCvcText2.classList.add("profile-cardCvcText2")
        cardCvcText2.textContent = `${user.userCards[i].cardCvc}`
        cardCvcDiv.append(cardCvcText2)

        wallets.append(walletDetailsDiv)
    }

    // add card button
    const addWalletDiv = document.createElement("div")
    addWalletDiv.classList.add("profile-addWalletDiv")
    walletsContainer.append(addWalletDiv)

    const addWalletButton = document.createElement('button')
    addWalletButton.classList.add('profile-addCard')
    addWalletButton.textContent = 'Add card'
    const addWalletButtonIconDiv = document.createElement('div')
    addWalletButtonIconDiv.classList.add('menu-manageWalletAddIconDiv')
    const addWalletButtonIcon = document.createElement('img')
    addWalletButtonIcon.classList.add('menu-manageWalletAddIcon')
    addWalletButtonIcon.src = 'images/add.png'
    addWalletButtonIconDiv.append(addWalletButtonIcon)
    addWalletButton.append(addWalletButtonIconDiv)
    addWalletButton.addEventListener('mouseenter', () => {
        addWalletButton.style.backgroundColor = '#ffffff'
        addWalletButtonIconDiv.style.backgroundColor = '#d8d8d8'
    })
    addWalletButton.addEventListener('mouseleave', () => {
        addWalletButton.style.backgroundColor = '#f8f8f8'
        addWalletButtonIconDiv.style.backgroundColor = '#0c6fff'
    })
    addWalletButton.addEventListener('click', () => {
        if (user.userCards.length === 3) {
            renderPopup(
                document.body, 
                `You can only add 3 cards.`, 
                (confirmed) => {
                    if (confirmed) {
                        profile()
                    } else {
                        menu()
                    }
                },
                'adding card'
            )
        } else {
            addCard()
        }
    })
    addWalletDiv.append(addWalletButton)
} 


/**
 * Renders container in the menu with a text label in it when 
 * user doesn't have any cards
 */
export function renderEmptyWallet(section) {
    const container = document.createElement("section")
    container.classList.add('menu-noWalletsContainer')
    section.append(container)

    const noWalletsText = document.createElement('h1')
    noWalletsText.classList.add('menu-noWalletsText')
    noWalletsText.textContent = `You don't have any cards yet.`
    container.append(noWalletsText)

    // add card button
    const addWalletButton = document.createElement('button')
    addWalletButton.classList.add('profile-addCard')
    addWalletButton.textContent = 'Add card'
    const addWalletButtonIconDiv = document.createElement('div')
    addWalletButtonIconDiv.classList.add('menu-manageWalletAddIconDiv')
    const addWalletButtonIcon = document.createElement('img')
    addWalletButtonIcon.classList.add('menu-manageWalletAddIcon')
    addWalletButtonIcon.src = 'images/add.png'
    addWalletButtonIconDiv.append(addWalletButtonIcon)
    addWalletButton.append(addWalletButtonIconDiv)
    addWalletButton.addEventListener('mouseenter', () => {
        addWalletButton.style.backgroundColor = '#ffffff'
        addWalletButtonIconDiv.style.backgroundColor = '#d8d8d8'
    })
    addWalletButton.addEventListener('mouseleave', () => {
        addWalletButton.style.backgroundColor = '#f8f8f8'
        addWalletButtonIconDiv.style.backgroundColor = '#0c6fff'
    })
    addWalletButton.addEventListener('click', () => {
        addCard()
    })
    container.append(addWalletButton)
}


/**
 * Renders inputs for the beneficiary on the "Transfer money" page
 */
export function renderRecipientInfo(section) {
    // variables

    // container
    const recipientInfoContainer = document.createElement('div')
    recipientInfoContainer.classList.add('recipientInfo-container')
    section.append(recipientInfoContainer)

    // text title
    const recipientInfoText = document.createElement('h1')
    recipientInfoText.classList.add('recipientInfo-text')
    recipientInfoText.textContent = 'Transfer to whom?'
    recipientInfoContainer.append(recipientInfoText)

    // div for inputs
    const recipientInfoDiv = document.createElement('div')
    recipientInfoDiv.classList.add('recipientInfo-div')
    recipientInfoContainer.append(recipientInfoDiv)

    // recipient name
    const recipientNameDiv = document.createElement('div')
    recipientNameDiv.classList.add('recipientName-div')
    recipientInfoDiv.append(recipientNameDiv)

    const recipientNameInput = document.createElement('input')
    recipientNameInput.classList.add('recipientName-input')
    recipientNameInput.placeholder = 'beneficiary name'
    recipientNameInput.type = 'text'
    if (recipientparam1 !== "") {
        recipientNameInput.value = recipientparam1
    }
    recipientNameDiv.append(recipientNameInput)
    validateInput(recipientNameInput, recipientNameDiv, 'name', value => recipientparam1 = value)
    
    // recipient email
    const recipientEmailDiv = document.createElement('div')
    recipientEmailDiv.classList.add('recipientEmail-div')
    recipientInfoDiv.append(recipientEmailDiv)

    const recipientEmailInput = document.createElement('input')
    recipientEmailInput.classList.add('recipientEmail-input')
    recipientEmailInput.placeholder = 'beneficiary email'
    recipientEmailInput.type = 'text'
    if (recipientparam2 !== "") {
        recipientEmailInput.value = recipientparam2
    }
    recipientEmailDiv.append(recipientEmailInput)
    validateInput(recipientEmailInput, recipientEmailDiv, 'email', value => recipientparam2 = value)

    // recipient optional
    const recipientOptionalDiv = document.createElement('div')
    recipientOptionalDiv.classList.add('recipientOptional-div')
    recipientInfoDiv.append(recipientOptionalDiv)

    const recipientOptionalInput = document.createElement('textarea')
    recipientOptionalInput.classList.add('recipientOptional-input')
    recipientOptionalInput.placeholder = 'text (optional)'
    // recipientOptionalInput.type = 'text'
    recipientOptionalDiv.append(recipientOptionalInput)
    if (recipientparam3 !== "") {
        recipientOptionalInput.value = recipientparam3
    }
    recipientOptionalInput.addEventListener('input', () => {
        recipientparam3 = recipientOptionalInput.value
    })

    changeRecipientValues(recipientparam1, recipientparam2, recipientparam3)
}


/**
 * Renders footer section
 */
export function renderFooter(section) {
    const footer = document.createElement('footer')
    footer.classList.add('footer')
    section.append(footer)

    // logo
    const footerLogoText = document.createElement('h1')
    footerLogoText.classList.add('footer-logoText')
    footerLogoText.textContent = 'PiggyBank.com'
    footer.append(footerLogoText)

    const footerLogo = document.createElement('img')
    footerLogo.classList.add('footer-logo')
    footerLogo.src = 'images/logo.png'
    footerLogo.alt = 'logo'
    footer.append(footerLogo)

    const footerSubtitle = document.createElement('p')
    footerSubtitle.classList.add('footer-subtitle')
    footerSubtitle.textContent = 'a simple digital bank that lets users send, top up, and withdraw money. It’s designed to be easy to use and beginner-friendly.'
    footer.append(footerSubtitle)
}


/**
 * Renders an error message.
 * @param {HTMLDivElement} area - area where we want to put this message
 * @param {HTMLParagraphElement} message - the error text
 * @param {boolean} visible - make this error message visible or not
 */
export function errorMessage(area, message, visible = true) {

    let errorMessage = area.querySelector('.error-message');
    if (!errorMessage) {
        errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        area.append(errorMessage);
    }
    errorMessage.textContent = message;
    errorMessage.style.display = visible ? 'block' : 'none';
}