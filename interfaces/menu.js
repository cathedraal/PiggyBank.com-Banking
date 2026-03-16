/**
 * @overview Main menu page. User sees information about his wallet, he can manage his card, 
 * check logs, read articles and benefits of PiggyBank.com
 * @author Roman Mallindine
 */

import { user, currencyChosen, wrapper } from "../logics/globals.js"
import { renderHeader, renderCurrency, renderBenefits, renderNeedHelpButton, renderWallet, renderActions, renderNews, renderLogoutButton, renderFooter, renderEmptyWallet } from "../logics/rendering.js"
import { getRandomInt } from "../logics/logic.js"


// variables
const hours = new Date().getHours()
const phrases = ['what shall we do today?', 'let there be money!', 'here are your wallets!', `what's on your mind today?`, `what's up?`, `it's ${hours} o'clock now.`]


export function menu() {
    wrapper.innerHTML = ''

    console.log(currencyChosen)

    // header section
    renderHeader(wrapper, 'menu', phrases[getRandomInt(0, phrases.length-1)])

    // content container
    const menuMainContainer = document.createElement('main')
    menuMainContainer.classList.add('menu-mainContainer')
    wrapper.append(menuMainContainer)

    if (user.userCards.length === 0) {
        renderEmptyWallet(menuMainContainer)
    } else {
        // currency section
        renderCurrency(menuMainContainer, "Trading in", true, currencyChosen)

        // wallet section
        renderWallet(menuMainContainer)
    }

    // latest actions section
    renderActions(menuMainContainer)

    // news section
    renderNews(menuMainContainer)
    
    // benefits section
    renderBenefits(menuMainContainer)

    const menuLogoutButtonContainer = document.createElement('section')
    menuLogoutButtonContainer.classList.add('menu-logoutButtonContainer')
    menuMainContainer.append(menuLogoutButtonContainer)

    renderNeedHelpButton(menuLogoutButtonContainer)

    // log out button section
    renderLogoutButton(menuLogoutButtonContainer, 'menu-logoutButton')

    // footer section
    renderFooter(wrapper)

    // scroll up when rendered
    wrapper.scrollTo({ top: 0, behavior: 'smooth' })
}