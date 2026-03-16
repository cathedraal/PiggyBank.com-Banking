/**
 * @overview Page where user can withdraw from chosen wallet
 * @author Roman Mallindine
 */

import { wrapper } from "../logics/globals.js"
import { renderHeader, renderBackButton, renderChooseWallet, renderFooter } from "../logics/rendering.js"


export function withdrawMoney() {
    wrapper.innerHTML = ''
    
    // header
    renderHeader(wrapper, 'Withdraw money')

    const withdrawMoneyMainContainer = document.createElement('main')
    withdrawMoneyMainContainer.classList.add('withdrawMoney-mainContainer')
    wrapper.append(withdrawMoneyMainContainer)

    // back button
    renderBackButton(withdrawMoneyMainContainer)

    // renders choose wallet container
    renderChooseWallet(withdrawMoneyMainContainer, 'Withdraw money')

    // footer
    renderFooter(wrapper)
    
    // scroll up when rendered
    wrapper.scrollTo({ top: 0, behavior: 'smooth' })
}