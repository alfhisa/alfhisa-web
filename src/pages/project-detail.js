import { getProjectBySlug } from '../utils/content.js';

export function renderProjectDetail(slug) {
    const project = getProjectBySlug(slug);

    if (!project) {
        return `
      <div class="page-content" style="text-align: center; padding-top: var(--space-24);">
        <h1>Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
        <a href="#/projects" class="btn btn--primary" style="margin-top: var(--space-6);">Back to Projects</a>
      </div>
    `;
    }

    const tagsHtml = (project.tags || []).map(t => `<span class="badge">${t}</span>`).join('');
    const demoBtn = project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" class="btn btn--primary">Live Demo</a>` : '';
    const githubBtn = project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="btn btn--secondary">View Code</a>` : '';

    return `
    <div class="project-detail page-content">
      <article class="section">
        <div class="container container--sm">
          <a href="#/projects" class="back-link animate-on-scroll" style="display: inline-flex; align-items: center; gap: var(--space-2); color: var(--color-text-secondary); text-decoration: none; margin-bottom: var(--space-8); font-size: var(--text-sm);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
            Back to projects
          </a>

          <header class="project-detail__header animate-on-scroll">
            <h1 class="project-detail__title" style="font-size: var(--text-4xl); margin-bottom: var(--space-2); color: var(--color-text-primary); line-height: 1.2;">${project.title}</h1>
            <p style="font-size: var(--text-xl); color: var(--color-accent); margin-bottom: var(--space-6); font-weight: 500;">${project.tagline}</p>
            
            <p class="project-detail__desc" style="font-size: var(--text-lg); color: var(--color-text-secondary); margin-bottom: var(--space-8); line-height: 1.6;">
              ${project.description}
            </p>

            <div class="project-featured__story" style="margin-bottom: var(--space-8);">
              <div class="project-featured__story-item" style="margin-bottom: var(--space-4);">
                <strong>Problem:</strong> ${project.problem}
              </div>
              <div class="project-featured__story-item">
                <strong>Approach:</strong> ${project.approach}
              </div>
            </div>

            <div class="tags" style="margin-bottom: var(--space-8);">
              ${tagsHtml}
            </div>
            
            <div class="project-detail__actions" style="display: flex; gap: var(--space-4); margin-bottom: var(--space-12);">
              ${demoBtn}
              ${githubBtn}
            </div>
          </header>

          ${project.htmlContent ? `
            <div class="project-detail__body markdown-body animate-on-scroll stagger" style="margin-top: var(--space-12); padding-top: var(--space-12); border-top: 1px solid var(--color-border);">
              <h2 style="margin-bottom: var(--space-6);">Case Study</h2>
              ${project.htmlContent}
            </div>
          ` : ''}
        </div>
      </article>
    </div>
  `;
}
