/**
 * Projects Page
 */

import { allProjects } from '../utils/content.js';

export function renderProjects() {
  const projects = allProjects;

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  function renderTags(tags) {
    return tags.map(function (t) {
      return '<span class="badge">' + t + '</span>';
    }).join('');
  }

  function renderFeatured(p) {
    if (!p) return '';
    var demoBtn = p.links.demo ? '<a href="' + p.links.demo + '" class="btn btn--primary">Live Demo</a>' : '';
    var githubBtn = p.links.github ? '<a href="' + p.links.github + '" class="btn btn--secondary">View Code</a>' : '';

    return '<div class="project-featured card card--highlight animate-on-scroll">' +
      '<div class="project-featured__badge">' +
      '<span class="badge badge--accent">★ Featured Project</span>' +
      '</div>' +
      '<div class="project-featured__content">' +
      '<h2 class="project-featured__title"><a href="#/projects/' + p.slug + '" style="color: inherit; text-decoration: none;">' + p.title + '</a></h2>' +
      '<p class="project-featured__tagline">' + p.tagline + '</p>' +
      '<p class="project-featured__desc">' + p.description + '</p>' +
      '<div class="project-featured__story">' +
      '<div class="project-featured__story-item"><strong>Problem:</strong> ' + p.problem + '</div>' +
      '<div class="project-featured__story-item"><strong>Approach:</strong> ' + p.approach + '</div>' +
      '</div>' +
      '<div class="tags" style="margin-top: var(--space-4);">' + renderTags(p.tags) + '</div>' +
      '<div class="project-featured__actions" style="margin-top: var(--space-6);">' + demoBtn + githubBtn + '</div>' +
      '</div>' +
      '</div>';
  }

  function renderProjectCard(project) {
    var demoLink = project.links.demo
      ? '<a href="' + project.links.demo + '" class="btn btn--ghost" style="font-size: var(--text-xs);">Demo <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>'
      : '';
    var codeLink = project.links.github
      ? '<a href="' + project.links.github + '" class="btn btn--ghost" style="font-size: var(--text-xs);">Code <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></a>'
      : '';

    return '<div class="card card--interactive animate-on-scroll">' +
      '<h3 class="card__title"><a href="#/projects/' + project.slug + '" style="color: inherit; text-decoration: none;">' + project.title + '</a></h3>' +
      '<p style="font-size: var(--text-sm); color: var(--color-accent); margin-bottom: var(--space-3); font-weight: 500;">' + project.tagline + '</p>' +
      '<p class="card__description">' + project.description + '</p>' +
      '<div class="tags" style="margin-top: var(--space-4);">' + renderTags(project.tags) + '</div>' +
      '<div style="display: flex; gap: var(--space-3); margin-top: var(--space-4);">' + demoLink + codeLink + '</div>' +
      '</div>';
  }

  const featuredHtml = renderFeatured(featuredProject);
  const projectsHtml = otherProjects.map(renderProjectCard).join('');

  return `
    <div class="projects page-content">
      <section class="section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <div class="section-label">Projects</div>
            <h1 class="section-title">Things I've Built</h1>
            <p class="section-subtitle">
              Real systems solving real problems. Each project is an exploration — a chance to learn, experiment, and create something useful.
            </p>
          </div>

          <!-- Featured Project -->
          ${featuredHtml}

          <!-- Other Projects Grid -->
          <div class="grid grid--3 stagger" style="margin-top: var(--space-12);">
            ${projectsHtml}
          </div>
        </div>
      </section>
    </div>
  `;
}
