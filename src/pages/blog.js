/**
 * Blog Page
 */

import { allPosts } from '../utils/content.js';

export function renderBlog() {
  const posts = allPosts;

  const categories = ['All', ...new Set(posts.map(p => p.category).filter(Boolean))];

  function renderCategoryBtn(cat, i) {
    const activeClass = i === 0 ? ' active' : '';
    return '<button class="blog__category-btn' + activeClass + '" data-category="' + cat + '">' + cat + '</button>';
  }

  function renderPost(post) {
    const tagsHtml = post.tags.map(function (t) {
      return '<span class="badge">' + t + '</span>';
    }).join('');

    return '<a href="#/blog/' + post.slug + '" style="text-decoration: none; color: inherit; display: block;">' +
      '<article class="blog-card animate-on-scroll" data-category="' + post.category + '">' +
      '<div class="blog-card__content">' +
      '<div class="blog-card__meta">' +
      '<span class="badge badge--accent">' + post.category + '</span>' +
      '<span>' + post.date + '</span>' +
      '<span>·</span>' +
      '<span>' + post.readTime + '</span>' +
      '</div>' +
      '<h2 class="blog-card__title">' + post.title + '</h2>' +
      '<p class="blog-card__excerpt">' + post.excerpt + '</p>' +
      '<div class="tags" style="margin-top: var(--space-3);">' + tagsHtml + '</div>' +
      '</div>' +
      '<div class="blog-card__arrow">' +
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>' +
      '</div>' +
      '</article>' +
      '</a>';
  }

  const categoriesHtml = categories.map(renderCategoryBtn).join('');
  const postsHtml = posts.map(renderPost).join('');

  return `
    <div class="blog page-content">
      <section class="section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <div class="section-label">Blog</div>
            <h1 class="section-title">Exploration Notes</h1>
            <p class="section-subtitle">
              Articles and notes covering topics in computer science, technology, and related areas of interest.
            </p>
          </div>

          <!-- Search & Filters -->
          <div class="blog__filters animate-on-scroll">
            <div class="blog__search">
              <svg class="blog__search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" class="form-input blog__search-input" placeholder="Search posts..." id="blog-search" />
            </div>
            <div class="blog__categories">
              ${categoriesHtml}
            </div>
          </div>

          <!-- Blog Posts -->
          <div class="blog__posts stagger" id="blog-posts">
            ${postsHtml}
          </div>
        </div>
      </section>
    </div>
  `;
}
