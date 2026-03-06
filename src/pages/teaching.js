/**
 * Teaching Page
 */

import { allTeaching } from '../utils/content.js';

export function renderTeaching() {
  const courses = allTeaching.filter(t => t.type === 'Course');
  const resources = allTeaching.filter(t => t.type !== 'Course');

  function renderCourse(course) {
    // Priority 1: Explicit 'active' field
    // Priority 2: Fallback to semester check
    const isActive = course.active !== undefined ? course.active : (course.semester && course.semester.includes('2025'));
    const badgeClass = isActive ? 'badge--accent' : '';
    const badgeText = isActive ? 'Active' : 'Past';
    const tagsHtml = (course.tags || []).map(t => '<span class="badge">' + t + '</span>').join('');

    return '<div class="card animate-on-scroll">' +
      '<div class="card__meta" style="margin-bottom: var(--space-3);">' +
      '<span class="badge ' + badgeClass + '">' + badgeText + '</span>' +
      '<span>' + (course.semester || '') + '</span>' +
      '</div>' +
      '<h3 class="card__title"><a href="#/teaching/' + course.slug + '" style="color: inherit; text-decoration: none;">' + course.title + '</a></h3>' +
      '<p class="card__description">' + course.description + '</p>' +
      '<div class="tags" style="margin-top: var(--space-4);">' + tagsHtml + '</div>' +
      '</div>';
  }

  function renderResource(resource) {
    // Basic icon assignment based on title keyword for visual flair
    let icon = '📘';
    if (resource.title.toLowerCase().includes('python')) icon = '📗';
    if (resource.title.toLowerCase().includes('algorithm')) icon = '📙';

    return '<a href="#/teaching/' + resource.slug + '" style="text-decoration: none; color: inherit; display: block;">' +
      '<div class="card card--interactive animate-on-scroll">' +
      '<div class="card__icon">' + icon + '</div>' +
      '<h3 class="card__title">' + resource.title + '</h3>' +
      '<p class="card__description">' + resource.description + '</p>' +
      '<span class="card__link">Read guide <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>' +
      '</div></a>';
  }

  return `
    <div class="teaching page-content">
      <section class="section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <div class="section-label">Teaching</div>
            <h1 class="section-title">Sharing Knowledge</h1>
            <p class="section-subtitle">
              I believe great teaching bridges theory and practice. Here are the courses I teach and resources I've created.
            </p>
          </div>

          <!-- Teaching Philosophy -->
          <div class="card card--highlight animate-on-scroll" style="margin-bottom: var(--space-12);">
            <div style="display: flex; align-items: flex-start; gap: var(--space-6); flex-wrap: wrap;">
              <div class="card__icon" style="font-size: var(--text-3xl); flex-shrink: 0;">🎯</div>
              <div>
                <h3 class="card__title" style="margin-bottom: var(--space-3);">Teaching Philosophy</h3>
                <p class="card__description" style="font-size: var(--text-base); line-height: var(--leading-relaxed);">
                  "I don't just transfer knowledge — I try to ignite curiosity. My goal is to equip students with the skills and mindset to build, not just to pass exams. Every lecture is an invitation to explore."
                </p>
              </div>
            </div>
          </div>

          <!-- Courses -->
          <div class="section-header animate-on-scroll">
            <div class="section-label">Courses</div>
            <h2 class="section-title">Current Courses</h2>
          </div>

          <div class="grid grid--2 stagger">
            ${courses.map(renderCourse).join('')}
          </div>
        </div>
      </section>

      <!-- Learning Notes -->
      <section class="section section--sm">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <div class="section-label">Resources</div>
            <h2 class="section-title">Learning Notes</h2>
            <p class="section-subtitle">
              Curated study materials and notes — originally for my students, now open for everyone.
            </p>
          </div>

          <div class="grid grid--3 stagger">
            ${resources.map(renderResource).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
