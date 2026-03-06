/**
 * Footer Component
 */

export function renderFooter() {
    const currentYear = new Date().getFullYear();

    return `
    <footer class="footer">
      <div class="container">
        <div class="footer__inner">
          <div class="footer__brand">
            <div class="footer__brand-name">Muhammad Alfhi Saputra</div>
            <p class="footer__brand-tagline">
              Lecturer, researcher, and builder — exploring Computer Science and sharing knowledge through teaching, research, and real-world projects.
            </p>
            <div class="footer__socials" style="margin-top: var(--space-4);">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="GitHub" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="LinkedIn" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Google Scholar" title="Google Scholar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path d="M12 14l-6.16-3.422a2 2 0 01.282-3.632l5.25-2.187a2 2 0 011.256 0l5.25 2.187a2 2 0 01.282 3.632L12 14z"/></svg>
              </a>
              <a href="mailto:alfhi@example.com" class="footer__social-link" aria-label="Email" title="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>
              </a>
            </div>
          </div>

          <div class="footer__links-group">
            <div class="footer__links-title">Navigate</div>
            <a href="#/" class="footer__link">Home</a>
            <a href="#/about" class="footer__link">About</a>
            <a href="#/research" class="footer__link">Research</a>
            <a href="#/projects" class="footer__link">Projects</a>
          </div>

          <div class="footer__links-group">
            <div class="footer__links-title">More</div>
            <a href="#/teaching" class="footer__link">Teaching</a>
            <a href="#/blog" class="footer__link">Blog</a>
            <a href="#/contact" class="footer__link">Contact</a>
          </div>
        </div>

        <div class="footer__bottom">
          <span>© ${currentYear} Muhammad Alfhi Saputra. All rights reserved.</span>
          <span>Built with curiosity and code.</span>
        </div>
      </div>
    </footer>
  `;
}
