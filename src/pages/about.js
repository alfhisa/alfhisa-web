/**
 * About Page
 */

import { aboutPage } from '../utils/content.js';
import { marked } from 'marked';

export function renderAbout() {
  const p = aboutPage;

  // Parse markdown fields
  const leadHtml = marked.parseInline(p.lead || '');
  const educationHtml = (p.education || []).map(item => `
    <li style="margin-bottom: var(--space-3); display: flex; gap: var(--space-3);">
      <span style="color: var(--color-accent);">•</span>
      <span><strong>${item.degree}</strong>, ${item.institution}, ${item.year}</span>
    </li>
  `).join('');

  const philosophyHtml = (p.philosophy || []).map(item => `
    <div class="card animate-on-scroll">
      <div class="card__icon">${item.icon}</div>
      <h3 class="card__title">${item.title}</h3>
      <p class="card__description">${item.description}</p>
    </div>
  `).join('');

  const interestsHtml = (p.interests || []).map(tag => `
    <span class="badge">${tag}</span>
  `).join('');

  const journeyHtml = (p.journey || []).map(item => `
    <div class="timeline__item">
      <div class="timeline__year">${item.year}</div>
      <div class="timeline__title">${item.title}</div>
      <div class="timeline__subtitle" style="color: var(--color-accent); font-weight: 500; margin-bottom: var(--space-2);">${item.subtitle}</div>
      <div class="timeline__desc">${item.description}</div>
    </div>
  `).join('');

  const communityLinksHtml = (p.community.links || []).map(link => `
    <a href="${link.url}" target="_blank" style="color: var(--color-accent);">${link.text}</a>
  `).join(' or ');

  return `
    <div class="about page-content">
      <!-- About Hero -->
      <section class="section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <div class="section-label">About Me</div>
            <h1 class="section-title">${p.title}</h1>
          </div>

          <div class="about__intro animate-on-scroll">
            <div class="about__avatar">
              <div class="about__avatar-placeholder">MA</div>
            </div>
            <div class="about__bio">
              <p class="about__bio-lead">
                ${leadHtml}
              </p>
              <div class="about__bio-body">
                ${p.htmlContent}
              </div>
              
              <div style="margin-top: var(--space-8);">
                <h3 style="margin-bottom: var(--space-4); font-size: var(--text-lg); color: var(--color-text-primary);">Education</h3>
                <ul style="list-style: none; padding: 0;">
                  ${educationHtml}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Philosophy -->
      <section class="section section--sm">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <div class="section-label">Philosophy</div>
            <h2 class="section-title">How I Work</h2>
          </div>

          <div class="grid grid--3 stagger">
            ${philosophyHtml}
          </div>
        </div>
      </section>

      <!-- Skills / Interests -->
      <section class="section section--sm">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <div class="section-label">Interests</div>
            <h2 class="section-title">What Excites Me</h2>
            <p class="section-subtitle">Areas I'm currently exploring and building in — these evolve as my curiosity leads me.</p>
          </div>

          <div class="tags about__tags animate-on-scroll" style="justify-content: center; max-width: 700px; margin: 0 auto;">
            ${interestsHtml}
          </div>
        </div>
      </section>

      <!-- Work Experience -->
      <section class="section section--sm">
        <div class="container container--narrow">
          <div class="section-header animate-on-scroll">
            <div class="section-label">Experience</div>
            <h2 class="section-title">Work History</h2>
          </div>

          <div class="timeline animate-on-scroll">
            ${journeyHtml}
          </div>
        </div>
      </section>

      <!-- Service & Leadership -->
      <section class="section section--sm">
        <div class="container container--narrow">
          <div class="section-header animate-on-scroll">
            <div class="section-label">Community</div>
            <h2 class="section-title">Service & Leadership</h2>
          </div>
          
          <div class="card animate-on-scroll">
            <div class="card__icon" style="font-size: var(--text-2xl);">🤝</div>
            <h3 class="card__title">${p.community.title}</h3>
            <p class="card__description">
              ${p.community.description}
              Find us at ${communityLinksHtml}.
            </p>
          </div>
        </div>
      </section>
    </div>
  `;
}
