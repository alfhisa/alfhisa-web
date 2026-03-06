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
                My approach is simple: explore widely, learn deeply, build something real, and share what I discover. I believe the best way to understand something is to create with it. I am currently pursuing my Doctorate in Computer Science at BINUS University (expected 2027).
              </p>
              
              <div style="margin-top: var(--space-8);">
                <h3 style="margin-bottom: var(--space-4); font-size: var(--text-lg); color: var(--color-text-primary);">Education</h3>
                <ul style="list-style: none; padding: 0;">
                  <li style="margin-bottom: var(--space-3); display: flex; gap: var(--space-3);">
                    <span style="color: var(--color-accent);">•</span>
                    <span><strong>Dr. in Doctor of Computer Science</strong>, BINUS University, 2027 (expected)</span>
                  </li>
                  <li style="margin-bottom: var(--space-3); display: flex; gap: var(--space-3);">
                    <span style="color: var(--color-accent);">•</span>
                    <span><strong>M.Kom. in Faculty of Computer Science</strong>, University of Indonesia, 2024</span>
                  </li>
                  <li style="margin-bottom: var(--space-3); display: flex; gap: var(--space-3);">
                    <span style="color: var(--color-accent);">•</span>
                    <span><strong>S.Kom. in School of Computing</strong>, Telkom University, 2021</span>
                  </li>
                </ul>
              </div>
            </div>
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
            <div class="timeline__item">
              <div class="timeline__year">2026 - Present</div>
              <div class="timeline__title">Research Officer</div>
              <div class="timeline__subtitle" style="color: var(--color-accent); font-weight: 500; margin-bottom: var(--space-2);">School of Computer Science, BINUS University</div>
              <div class="timeline__desc">Coordinating research programs and community development activities.</div>
            </div>
            <div class="timeline__item">
              <div class="timeline__year">2025 - Present</div>
              <div class="timeline__title">Full-time Lecturer</div>
              <div class="timeline__subtitle" style="color: var(--color-accent); font-weight: 500; margin-bottom: var(--space-2);">School of Computer Science, BINUS University</div>
              <div class="timeline__desc">Teaching, conducting research, contributing to academic service, and engaging in community development.</div>
            </div>
            <div class="timeline__item">
              <div class="timeline__year">2024 - 2025</div>
              <div class="timeline__title">Associate Lecturer Specialist S2</div>
              <div class="timeline__subtitle" style="color: var(--color-accent); font-weight: 500; margin-bottom: var(--space-2);">School of Computer Science, BINUS University</div>
              <div class="timeline__desc">Lecturing and conducting research.</div>
            </div>
            <div class="timeline__item">
              <div class="timeline__year">2022 - 2023</div>
              <div class="timeline__title">Research Assistant</div>
              <div class="timeline__subtitle" style="color: var(--color-accent); font-weight: 500; margin-bottom: var(--space-2);">University of Indonesia</div>
              <div class="timeline__desc">Machine Learning and Computer Vision Laboratory. Research in sign language recognition using object detection.</div>
            </div>
            <div class="timeline__item">
              <div class="timeline__year">2019 - 2023</div>
              <div class="timeline__title">Co-founder and Vice Director</div>
              <div class="timeline__subtitle" style="color: var(--color-accent); font-weight: 500; margin-bottom: var(--space-2);">Big Edu Indonesia</div>
              <div class="timeline__desc">
                An edutech startup specializing in school consulting and research services. Served over 3000 mentoring clients and led website development.
              </div>
            </div>
            <div class="timeline__item">
              <div class="timeline__year">2021 - 2022</div>
              <div class="timeline__title">Tutor</div>
              <div class="timeline__subtitle" style="color: var(--color-accent); font-weight: 500; margin-bottom: var(--space-2);">Telkom University</div>
              <div class="timeline__desc">Tutoring Mathematical Logic for PJJ Informatika.</div>
            </div>
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
            <h3 class="card__title">Coordinator @ Kuala Inspirasi</h3>
            <p class="card__description">
              Leading a non-profit organization focused on social impact and education. 
              Find us at <a href="https://kualainspirasi.com/" target="_blank" style="color: var(--color-accent);">kualainspirasi.com</a> 
              or on Instagram <a href="https://www.instagram.com/kualainspirasi/" target="_blank" style="color: var(--color-accent);">@kualainspirasi</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  `;
}
