/**
 * Research Page
 */
import { allResearch } from '../utils/content.js';

export function renderResearch() {
  return `
    <div class="research page-content">
      <!-- Research Header -->
      <section class="section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <div class="section-label">Research</div>
            <h1 class="section-title">Exploring What's Next</h1>
            <p class="section-subtitle">
              My work broadly lies within Computer Science, with a particular focus on Artificial Intelligence and its applications in solving real-world problems.
            </p>
          </div>
        </div>
      </section>

      <!-- Research Interests -->
      <section class="section section--sm">
        <div class="container">
          <h2 class="h3-title animate-on-scroll" style="font-size: var(--text-2xl); font-weight: 600; margin-bottom: var(--space-8);">Current Interests</h2>
          <div class="grid grid--2 stagger">
            <div class="card animate-on-scroll">
              <div class="card__icon">🧠</div>
              <h3 class="card__title">Adaptive Learning Systems</h3>
              <p class="card__description">
                How can we use computational methods to personalize education? I study algorithms and systems that adapt to individual learning patterns.
              </p>
              <div class="tags" style="margin-top: var(--space-4);">
                <span class="badge">EdTech</span>
                <span class="badge">Personalization</span>
                <span class="badge">ML</span>
              </div>
            </div>

            <div class="card animate-on-scroll">
              <div class="card__icon">🌐</div>
              <h3 class="card__title">Software Engineering Practices</h3>
              <p class="card__description">
                Investigating modern development workflows, tooling, and methodologies that improve software quality and developer productivity.
              </p>
              <div class="tags" style="margin-top: var(--space-4);">
                <span class="badge">DevOps</span>
                <span class="badge">Architecture</span>
                <span class="badge">Tooling</span>
              </div>
            </div>

            <div class="card animate-on-scroll">
              <div class="card__icon">📊</div>
              <h3 class="card__title">Data-Driven Decision Making</h3>
              <p class="card__description">
                Exploring how data analytics and visualization can support better decision-making in educational and organizational contexts.
              </p>
              <div class="tags" style="margin-top: var(--space-4);">
                <span class="badge">Analytics</span>
                <span class="badge">Visualization</span>
                <span class="badge">Data</span>
              </div>
            </div>

            <div class="card animate-on-scroll">
              <div class="card__icon">🤖</div>
              <h3 class="card__title">Applied AI/ML</h3>
              <p class="card__description">
                Practical applications of artificial intelligence and machine learning — from NLP to computer vision — in real-world systems.
              </p>
              <div class="tags" style="margin-top: var(--space-4);">
                <span class="badge">NLP</span>
                <span class="badge">Computer Vision</span>
                <span class="badge">Deep Learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Publications -->
      <section class="section section--sm">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <div class="section-label">Publications</div>
            <h2 class="section-title">Published Work</h2>
          </div>

          <div class="publications stagger">
            ${allResearch.map(pub => `
              <div class="publication-card animate-on-scroll">
                <div class="publication-card__year">${pub.year}</div>
                <div class="publication-card__content">
                  <h3 class="publication-card__title">
                    <a href="#/research/${pub.slug}" style="color: inherit; text-decoration: none;">${pub.title}</a>
                  </h3>
                  <p class="publication-card__venue">${pub.venue}</p>
                  <p class="publication-card__authors">${pub.authors}</p>
                  <div class="publication-card__links">
                    <a href="#/research/${pub.slug}" class="btn btn--ghost">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                      Read Abstract
                    </a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
