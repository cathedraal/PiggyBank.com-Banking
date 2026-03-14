import { wrapper } from "../logics/globals.js"
import { renderHeader, renderBackButton, renderRecipientInfo, renderChooseWallet, renderFooter } from "../logics/rendering.js"

// page where user can fill the form to transfer money
export function transferMoney() {
    wrapper.innerHTML = ''
    
    // header
    renderHeader(wrapper, 'Transfer money')

    const transferMoneyMainContainer = document.createElement('main')
    transferMoneyMainContainer.classList.add('transferMoney-mainContainer')
    wrapper.append(transferMoneyMainContainer)

    //render back button
    renderBackButton(transferMoneyMainContainer)

    renderRecipientInfo(transferMoneyMainContainer)

    // renders choose wallet container
    renderChooseWallet(transferMoneyMainContainer, 'Transfer money')

    // footer
    renderFooter(wrapper)

    // scroll when rendered
    wrapper.scrollTo({ top: 0, behavior: 'smooth' })
}