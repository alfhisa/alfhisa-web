/**
 * About Page
 */

export function renderAbout() {
    return `
    <div class="about page-content">
      <!-- About Hero -->
      <section class="section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <div class="section-label">About Me</div>
            <h1 class="section-title">The Explorer Behind the Work</h1>
          </div>

          <div class="about__intro animate-on-scroll">
            <div class="about__avatar">
              <div class="about__avatar-placeholder">MA</div>
            </div>
            <div class="about__bio">
              <p class="about__bio-lead">
                I'm <strong>Muhammad Alfhi Saputra</strong> — a lecturer and researcher in Computer Science who can't stop building things.
              </p>
              <p>
                My approach is simple: explore widely, learn deeply, build something real, and share what I discover. Whether it's a new programming paradigm, a research question, or a tool that solves a real problem — I believe the best way to understand something is to create with it.
              </p>
              <p>
                I teach at the university level, where I try to bridge the gap between academic theory and industry practice. My courses are designed not just to transfer knowledge, but to ignite curiosity and equip students with the skills to build.
              </p>
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
            <div class="card animate-on-scroll">
              <div class="card__icon">🔍</div>
              <h3 class="card__title">Explore</h3>
              <p class="card__description">
                I stay curious. I dive into new technologies, read papers, attend talks, and experiment with ideas that interest me — even outside my comfort zone.
              </p>
            </div>

            <div class="card animate-on-scroll">
              <div class="card__icon">🛠️</div>
              <h3 class="card__title">Build</h3>
              <p class="card__description">
                Theory without practice is incomplete. I build real systems — prototypes, tools, applications — to test ideas and create tangible impact.
              </p>
            </div>

            <div class="card animate-on-scroll">
              <div class="card__icon">📤</div>
              <h3 class="card__title">Share</h3>
              <p class="card__description">
                Knowledge grows when shared. I teach, write, and open-source my work so others can learn from — and build upon — what I've done.
              </p>
            </div>
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
            <span class="badge">Software Engineering</span>
            <span class="badge">Web Technologies</span>
            <span class="badge">Artificial Intelligence</span>
            <span class="badge">Machine Learning</span>
            <span class="badge">Educational Technology</span>
            <span class="badge">Systems Design</span>
            <span class="badge">Open Source</span>
            <span class="badge">Developer Tools</span>
            <span class="badge">Data Science</span>
            <span class="badge">Cloud Computing</span>
            <span class="badge">Human-Computer Interaction</span>
            <span class="badge">Research Methods</span>
          </div>
        </div>
      </section>

      <!-- Timeline -->
      <section class="section section--sm">
        <div class="container container--narrow">
          <div class="section-header animate-on-scroll">
            <div class="section-label">Journey</div>
            <h2 class="section-title">Milestones</h2>
          </div>

          <div class="timeline animate-on-scroll">
            <div class="timeline__item">
              <div class="timeline__year">Present</div>
              <div class="timeline__title">Lecturer & Researcher</div>
              <div class="timeline__desc">Teaching Computer Science courses and conducting research on digital innovation and learning systems.</div>
            </div>
            <div class="timeline__item">
              <div class="timeline__year">2023</div>
              <div class="timeline__title">Started Building in Public</div>
              <div class="timeline__desc">Began sharing projects, writing technical articles, and contributing to open-source communities.</div>
            </div>
            <div class="timeline__item">
              <div class="timeline__year">2022</div>
              <div class="timeline__title">Master's in Computer Science</div>
              <div class="timeline__desc">Completed graduate studies with a focus on applied computing and educational technology.</div>
            </div>
            <div class="timeline__item">
              <div class="timeline__year">2019</div>
              <div class="timeline__title">First Teaching Role</div>
              <div class="timeline__desc">Started teaching programming fundamentals, discovering a passion for education and mentorship.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
