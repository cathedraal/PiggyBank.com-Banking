import { renderHeader, renderFooter, renderNewsPage, renderBackButton } from "../logics/rendering.js";
import { wrapper } from "../logics/globals.js";


export function articlePage(value) {
    wrapper.innerHTML = ''
    renderHeader(wrapper, "article", "Enjoying this article?")

    const newsPageContainer = document.createElement('section')
    newsPageContainer.classList.add('newsPage-container')
    wrapper.append(newsPageContainer)

    renderBackButton(newsPageContainer)

    renderNewsPage(newsPageContainer, value)

    renderFooter(wrapper)

    // scroll when rendered
    wrapper.scrollTo({ top: 0, behavior: 'smooth' })
}