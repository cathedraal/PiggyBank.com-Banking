/**
 * @overview Page where user sees the documented manipulations with his card/s
 * @author Roman Mallindine
 */

import { wrapper } from "../logics/globals.js"
import { renderHeader, renderFooter, renderBackButton, renderAllActions } from "../logics/rendering.js"


export function actions() {
    wrapper.innerHTML = ""

    renderHeader(wrapper, "actions", "here are your logs.")

    const actionsMainContainer = document.createElement("section")
    actionsMainContainer.classList.add("action-mainContainer")
    wrapper.append(actionsMainContainer)

    // back button
    renderBackButton(actionsMainContainer)

    // actions container
    renderAllActions(actionsMainContainer)

    // footer
    renderFooter(wrapper)

    // scroll when rendered
    wrapper.scrollTo({ top: 0, behavior: 'smooth' })
}