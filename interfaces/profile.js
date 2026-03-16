/**
 * @overview Page where user sees his personal data and the details about his card/s
 * @author Roman Mallindine
 */

import { wrapper } from "../logics/globals.js"
import { renderHeader, renderFooter, renderLogoutButton, renderBackButton, renderPersonalDetails, renderWalletsDetails } from "../logics/rendering.js"


export function profile() {
    wrapper.innerHTML = ""

    // header
    renderHeader(wrapper, "profile", "this is your profile.")

    const profileMainContainer = document.createElement("section")
    profileMainContainer.classList.add("profile-mainContainer")
    wrapper.append(profileMainContainer)

    // button back
    renderBackButton(profileMainContainer)

    // personal details
    renderPersonalDetails(profileMainContainer)

    // card details
    renderWalletsDetails(profileMainContainer)

    const menuLogoutButtonContainer = document.createElement('section')
    menuLogoutButtonContainer.classList.add('menu-logoutButtonContainer')
    profileMainContainer.append(menuLogoutButtonContainer)

    // log out button
    renderLogoutButton(menuLogoutButtonContainer, 'profile-logoutButton')

    // footer
    renderFooter(wrapper)

    // scroll up when rendered
    wrapper.scrollTo({ top: 0, behavior: 'smooth' })
}