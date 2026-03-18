/**
 * @overview Page where user can read an article.
 * @author Roman Mallindine
 */

import {
  renderHeader,
  renderFooter,
  renderNewsPage,
  renderBackButton,
} from '../logics/rendering.js';
import { wrapper } from '../logics/globals.js';

/**
 * Renders page on which user can read an article
 */
export function articlePage(value) {
  wrapper.innerHTML = '';

  // header
  renderHeader(wrapper, 'article', 'Enjoying this article?');

  const newsPageContainer = document.createElement('section');
  newsPageContainer.classList.add('newsPage-container');
  wrapper.append(newsPageContainer);

  // back button
  renderBackButton(newsPageContainer);

  // article
  renderNewsPage(newsPageContainer, value);

  // footer
  renderFooter(wrapper);

  // scroll up when rendered
  wrapper.scrollTo({ top: 0, behavior: 'smooth' });
}
