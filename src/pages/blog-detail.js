import { getPostBySlug } from '../utils/content.js';

export function renderBlogDetail(slug) {
    const post = getPostBySlug(slug);

    if (!post) {
        return `
      <div class="page-content" style="text-align: center; padding-top: var(--space-24);">
        <h1>Post Not Found</h1>
        <p>The post you're looking for doesn't exist.</p>
        <a href="#/blog" class="btn btn--primary" style="margin-top: var(--space-6);">Back to Blog</a>
      </div>
    `;
    }

    const tagsHtml = (post.tags || []).map(t => `<span class="badge">${t}</span>`).join('');
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    return `
    <div class="blog-detail page-content">
      <article class="section">
        <div class="container container--sm">
          <a href="#/blog" class="back-link animate-on-scroll" style="display: inline-flex; align-items: center; gap: var(--space-2); color: var(--color-text-secondary); text-decoration: none; margin-bottom: var(--space-8); font-size: var(--text-sm);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
            Back to posts
          </a>

          <header class="blog-detail__header animate-on-scroll">
            <div class="blog-detail__meta" style="display: flex; gap: var(--space-4); color: var(--color-text-tertiary); font-size: var(--text-sm); margin-bottom: var(--space-4);">
              <span class="badge badge--accent">${post.category || 'Uncategorized'}</span>
              <span>${formattedDate}</span>
              <span>·</span>
              <span>${post.readTime || '5 min read'}</span>
            </div>
            <h1 class="blog-detail__title" style="font-size: var(--text-4xl); margin-bottom: var(--space-6); color: var(--color-text-primary); line-height: 1.2;">${post.title}</h1>
            <div class="tags" style="margin-bottom: var(--space-12);">
              ${tagsHtml}
            </div>
          </header>

          <div class="reading-container">
            <div class="blog-detail__body markdown-body animate-on-scroll" style="margin-top: 0;">
              ${post.htmlContent || ''}
            </div>
          </div>
        </div>
      </article>
    </div>
  `;
}
