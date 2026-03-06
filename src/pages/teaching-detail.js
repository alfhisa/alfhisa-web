import { getTeachingBySlug } from '../utils/content.js';

export function renderTeachingDetail(slug) {
    const teaching = getTeachingBySlug(slug);

    if (!teaching) {
        return `
      <div class="page-content" style="text-align: center; padding-top: var(--space-24);">
        <h1>Material Not Found</h1>
        <p>The course or resource you're looking for doesn't exist.</p>
        <a href="#/teaching" class="btn btn--primary" style="margin-top: var(--space-6);">Back to Teaching</a>
      </div>
    `;
    }

    const tagsHtml = (teaching.tags || []).map(t => `<span class="badge">${t}</span>`).join('');
    const linkBtn = teaching.linkUrl ? `<a href="${teaching.linkUrl}" target="_blank" class="btn btn--primary">View Material</a>` : '';

    return `
    <div class="teaching-detail page-content">
      <article class="section">
        <div class="container container--sm">
          <a href="#/teaching" class="back-link animate-on-scroll" style="display: inline-flex; align-items: center; gap: var(--space-2); color: var(--color-text-secondary); text-decoration: none; margin-bottom: var(--space-8); font-size: var(--text-sm);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
            Back to teaching
          </a>

          <header class="teaching-detail__header animate-on-scroll">
            <div class="teaching-detail__meta" style="display: flex; gap: var(--space-4); margin-bottom: var(--space-4);">
              <span class="badge badge--accent">${teaching.type || 'Resource'}</span>
              <span style="color: var(--color-text-tertiary);">${teaching.semester || ''}</span>
            </div>
            
            <h1 class="teaching-detail__title" style="font-size: var(--text-4xl); margin-bottom: var(--space-4); color: var(--color-text-primary); line-height: 1.2;">${teaching.title}</h1>
            
            <p class="teaching-detail__desc" style="font-size: var(--text-lg); color: var(--color-text-secondary); margin-bottom: var(--space-8); line-height: 1.6;">
              ${teaching.description}
            </p>

            <div class="tags" style="margin-bottom: var(--space-8);">
              ${tagsHtml}
            </div>
            
            <div class="teaching-detail__actions" style="display: flex; gap: var(--space-4); margin-bottom: var(--space-12);">
              ${linkBtn}
            </div>
          </header>

          ${teaching.htmlContent ? `
            <div class="teaching-detail__body markdown-body animate-on-scroll stagger" style="margin-top: var(--space-8); padding-top: var(--space-8); border-top: 1px solid var(--color-border);">
              ${teaching.htmlContent}
            </div>
          ` : ''}
        </div>
      </article>
    </div>
  `;
}
