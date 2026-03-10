/**
 * Contact Page
 */

export function renderContact() {
    return `
    <div class="contact page-content">
      <section class="section">
        <div class="container container--narrow">
          <div class="section-header animate-on-scroll" style="text-align: center;">
            <div class="section-label" style="justify-content: center;">Contact</div>
            <h1 class="section-title">Let's Talk</h1>
            <p class="section-subtitle" style="margin: 0 auto;">
              Got a question, idea, or just want to say hi? I'm always open to interesting conversations and collaborations.
            </p>
          </div>

          <!-- Contact Cards -->
          <div class="grid grid--3 stagger" style="margin-bottom: var(--space-12);">
            <a href="mailto:muhammad.saputra@binus.edu" class="card card--interactive animate-on-scroll" style="text-align: center;">
              <div class="card__icon" style="margin: 0 auto var(--space-3);">✉️</div>
              <h3 class="card__title" style="font-size: var(--text-base);">Email</h3>
              <p class="card__description">muhammad.saputra@binus.edu</p>
            </a>

            <a href="https://www.linkedin.com/in/alfhisa" target="_blank" rel="noopener noreferrer" class="card card--interactive animate-on-scroll" style="text-align: center;">
              <div class="card__icon" style="margin: 0 auto var(--space-3);">💼</div>
              <h3 class="card__title" style="font-size: var(--text-base);">LinkedIn</h3>
              <p class="card__description">Connect with me</p>
            </a>

            <a href="https://github.com/alfhisa" target="_blank" rel="noopener noreferrer" class="card card--interactive animate-on-scroll" style="text-align: center;">
              <div class="card__icon" style="margin: 0 auto var(--space-3);">🐙</div>
              <h3 class="card__title" style="font-size: var(--text-base);">GitHub</h3>
              <p class="card__description">See my code</p>
            </a>
          </div>

          <!-- Contact Form -->
          <div class="card animate-on-scroll" style="margin-top: var(--space-8);">
            <h2 style="font-size: var(--text-2xl); font-weight: 600; margin-bottom: var(--space-6);">Send a Message</h2>
            <form class="contact-form" id="contact-form" action="https://formspree.io/f/mdaweozaj" method="POST">
              <div class="grid grid--2" style="margin-bottom: var(--space-4);">
                <div class="form-group">
                  <label class="form-label" for="contact-name">Name</label>
                  <input type="text" name="name" class="form-input" id="contact-name" placeholder="Your name" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="contact-email">Email</label>
                  <input type="email" name="_replyto" class="form-input" id="contact-email" placeholder="you@example.com" required />
                </div>
              </div>

              <div class="form-group" style="margin-bottom: var(--space-4);">
                <label class="form-label" for="contact-subject">Subject</label>
                <input type="text" name="subject" class="form-input" id="contact-subject" placeholder="What's this about?" required />
              </div>

              <div class="form-group" style="margin-bottom: var(--space-6);">
                <label class="form-label" for="contact-message">Message</label>
                <textarea name="message" class="form-textarea" id="contact-message" placeholder="Tell me more..." required></textarea>
              </div>

              <button type="submit" class="btn btn--primary btn--lg" style="width: 100%;">
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>
          </div>

          <!-- Availability -->
          <div class="card animate-on-scroll" style="margin-top: var(--space-8); text-align: center;">
            <div class="card__icon" style="margin: 0 auto var(--space-3); background: rgba(16, 185, 129, 0.15); color: var(--color-success);">🟢</div>
            <h3 class="card__title">Currently Available</h3>
            <p class="card__description">
              Open to research collaborations, guest lectures, mentoring, and interesting project discussions.
            </p>
          </div>
        </div>
      </section>
    </div>
  `;
}
