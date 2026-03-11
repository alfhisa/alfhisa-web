import { getResearchBySlug } from '../utils/content.js';

export function renderResearchDetail(slug) {
    const research = getResearchBySlug(slug);

    if (!research) {
        return `
      <div class="page-content" style="text-align: center; padding-top: var(--space-24);">
        <h1>Publication Not Found</h1>
        <p>The research item you're looking for doesn't exist.</p>
        <a href="#/research" class="btn btn--primary" style="margin-top: var(--space-6);">Back to Research</a>
      </div>
    `;
    }

    const tagsHtml = (research.keywords || []).map(t => `<span class="badge">${t}</span>`).join('');
    const linkBtn = research.linkUrl ? `<a href="${research.linkUrl}" target="_blank" class="btn btn--primary">View Publication</a>` : '';
    const pdfBtn = research.pdfUrl ? `<a href="${research.pdfUrl}" target="_blank" class="btn btn--secondary">Download PDF</a>` : '';

    return `
    <div class="research-detail page-content">
      <article class="section">
        <div class="container container--sm">
          <a href="#/research" class="back-link animate-on-scroll" style="display: inline-flex; align-items: center; gap: var(--space-2); color: var(--color-text-secondary); text-decoration: none; margin-bottom: var(--space-8); font-size: var(--text-sm);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
            Back to research
          </a>

          <header class="research-detail__header animate-on-scroll">
            <div class="research-detail__meta" style="display: flex; flex-wrap: wrap; gap: var(--space-4); margin-bottom: var(--space-4);">
              <span class="badge badge--accent">${research.type}</span>
              <span class="badge">${research.status}</span>
              <span style="color: var(--color-text-tertiary);">${research.year}</span>
            </div>
            
            <h1 class="research-detail__title" style="font-size: var(--text-3xl); margin-bottom: var(--space-4); color: var(--color-text-primary); line-height: 1.3;">${research.title}</h1>
            
            <p class="research-detail__authors" style="font-size: var(--text-md); color: var(--color-text-secondary); margin-bottom: var(--space-2);">
              <strong>Authors:</strong> ${research.authors}
            </p>
            
            <p class="research-detail__venue" style="font-style: italic; color: var(--color-text-tertiary); margin-bottom: var(--space-6);">
              Published in: ${research.venue}
            </p>

            <div class="tags" style="margin-bottom: var(--space-8);">
              ${tagsHtml}
            </div>
            
            <div class="research-detail__actions" style="display: flex; gap: var(--space-4); margin-bottom: var(--space-12);">
              ${linkBtn}
              ${pdfBtn}
            </div>
          </header>

          <div class="research-detail__abstract animate-on-scroll card card--highlight" style="margin-bottom: var(--space-12);">
            <h3 style="margin-bottom: var(--space-4); color: var(--color-accent);">Abstract</h3>
            <p style="line-height: 1.6; color: var(--color-text-secondary);">${research.excerpt}</p>
          </div>

          <div class="research-detail__body markdown-body animate-on-scroll" style="margin-top: var(--space-8); padding-top: var(--space-8); border-top: 1px solid var(--color-border);">
            <h2 style="margin-bottom: var(--space-6);">Additional Notes & Findings</h2>
            ${research.htmlContent || ''}
          </div>
        </div>
      </article>
    </div>
  `;
}
