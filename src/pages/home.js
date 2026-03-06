/**
 * Home Page
 */

export function renderHome() {
  return `
    <div class="home">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero__content">
            <div class="hero__label animate-on-scroll">
              <span class="hero__label-dot"></span>
              Open to collaboration & new ideas
            </div>
            <h1 class="hero__title animate-on-scroll">
              <span class="hero__greeting">Hi, I'm</span>
              <span class="hero__name">Muhammad Alfhi<br/>Saputra</span>
            </h1>
            <p class="hero__subtitle animate-on-scroll">
              Lecturer, researcher, and builder working at the intersection of
              <span class="hero__highlight">Computer Science</span> and real-world digital innovation.
            </p>
            <p class="hero__philosophy animate-on-scroll">
              I explore, learn fast, and turn ideas into real things — then share what I've learned so others can build on it too.
            </p>
            <div class="hero__actions animate-on-scroll">
              <a href="#/projects" class="btn btn--primary btn--lg">
                View Projects
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="#/blog" class="btn btn--secondary btn--lg">
                Read Blog
              </a>
            </div>
          </div>

          <div class="hero__visual">
            <div class="hero__orb hero__orb--1"></div>
            <div class="hero__orb hero__orb--2"></div>
            <div class="hero__orb hero__orb--3"></div>
            <div class="hero__code-block animate-on-scroll">
              <div class="hero__code-header">
                <span class="hero__code-dot" style="background: #ef4444;"></span>
                <span class="hero__code-dot" style="background: #f59e0b;"></span>
                <span class="hero__code-dot" style="background: #10b981;"></span>
                <span class="hero__code-title">explorer.js</span>
              </div>
              <pre class="hero__code-content"><code><span class="code-keyword">const</span> <span class="code-var">alfhi</span> = {
  <span class="code-key">role</span>: <span class="code-string">"Lecturer & Researcher"</span>,
  <span class="code-key">passion</span>: <span class="code-string">"Building & Exploring"</span>,
  <span class="code-key">field</span>: <span class="code-string">"Computer Science"</span>,
  <span class="code-key">motto</span>: <span class="code-string">"Learn → Build → Share"</span>,
};</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Pillars Section -->
      <section class="section pillars">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <div class="section-label">What I Do</div>
            <h2 class="section-title">Teaching. Research. Building.</h2>
            <p class="section-subtitle">Three pillars that drive everything I do — each reinforcing the others.</p>
          </div>

          <div class="grid grid--3 stagger">
            <a href="#/research" class="card card--interactive animate-on-scroll">
              <div class="card__icon">🔬</div>
              <h3 class="card__title">Research</h3>
              <p class="card__description">
                Exploring ideas at the edges of Computer Science — from theory to experimentation, always seeking what's next.
              </p>
              <span class="card__link">
                Explore research
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </a>

            <a href="#/projects" class="card card--interactive animate-on-scroll">
              <div class="card__icon">⚡</div>
              <h3 class="card__title">Projects</h3>
              <p class="card__description">
                Turning concepts into working software. Real systems, real users, real impact — learning by building.
              </p>
              <span class="card__link">
                See projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </a>

            <a href="#/blog" class="card card--interactive animate-on-scroll">
              <div class="card__icon">✍️</div>
              <h3 class="card__title">Blog</h3>
              <p class="card__description">
                Field notes from the journey — tutorials, insights, and distilled knowledge made practical and shareable.
              </p>
              <span class="card__link">
                Read posts
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      <!-- Highlights Section -->
      <section class="section highlights">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <div class="section-label">Latest</div>
            <h2 class="section-title">Recent Highlights</h2>
          </div>

          <div class="grid grid--2 stagger">
            <a href="#/research/2025-adaptive-learning" style="text-decoration: none; color: inherit; display: block;">
              <div class="card animate-on-scroll">
                <div class="card__meta">
                  <span class="badge badge--accent">Publication</span>
                  <span>2025</span>
                </div>
                <h3 class="card__title" style="margin-top: var(--space-3);">Exploring Adaptive Learning Systems in Higher Education</h3>
                <p class="card__description">
                  A study on how adaptive algorithms can personalize the learning experience for CS students.
                </p>
                <span class="card__link">
                  Read more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </a>

            <a href="#/projects/edutrack" style="text-decoration: none; color: inherit; display: block;">
              <div class="card animate-on-scroll">
                <div class="card__meta">
                  <span class="badge badge--accent">Project</span>
                  <span>2025</span>
                </div>
                <h3 class="card__title" style="margin-top: var(--space-3);">EduTrack — Student Progress Dashboard</h3>
                <p class="card__description">
                  A full-stack application for tracking and visualizing student learning progress across courses.
                </p>
                <span class="card__link">
                  View project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </a>

            <a href="#/blog/2025-02-15-why-cs-students-should-build" style="text-decoration: none; color: inherit; display: block;">
              <div class="card animate-on-scroll">
                <div class="card__meta">
                  <span class="badge badge--accent">Blog</span>
                  <span>Feb 2025</span>
                </div>
                <h3 class="card__title" style="margin-top: var(--space-3);">Why Every CS Student Should Build Something Before Graduating</h3>
                <p class="card__description">
                  Reflections on the gap between theory and practice, and why hands-on building is essential.
                </p>
                <span class="card__link">
                  Read post
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </a>

            <a href="#/teaching/web-dev-fundamentals" style="text-decoration: none; color: inherit; display: block;">
              <div class="card animate-on-scroll">
                <div class="card__meta">
                  <span class="badge badge--accent">Teaching</span>
                  <span>Semester 2025</span>
                </div>
                <h3 class="card__title" style="margin-top: var(--space-3);">Web Development Fundamentals — New Course Materials</h3>
                <p class="card__description">
                  Updated course modules covering modern web technologies with hands-on lab exercises.
                </p>
                <span class="card__link">
                  View materials
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="section cta-section">
        <div class="container">
          <div class="cta-card animate-on-scroll">
            <h2 class="cta-card__title">Let's Connect</h2>
            <p class="cta-card__text">
              Whether it's a research collaboration, a project idea, or just a conversation about tech — I'd love to hear from you.
            </p>
            <a href="#/contact" class="btn btn--primary btn--lg">
              Get in Touch
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}
