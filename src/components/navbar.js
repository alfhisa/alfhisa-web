/**
 * Navbar Component
 */

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/research', label: 'Research' },
  { path: '/projects', label: 'Projects' },
  { path: '/teaching', label: 'Teaching' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

export function renderNavbar() {
  return `
    <nav class="navbar" id="main-navbar">
      <div class="navbar__inner">
        <a href="#/" class="navbar__brand">
          <div class="navbar__brand-icon">
            <img src="/avatar.png" alt="MA" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit;">
          </div>
          <span>alfhisa</span>
        </a>

        <div class="navbar__links">
          ${navLinks.map(link => `
            <a href="#${link.path}" class="navbar__link" data-route="${link.path}">
              ${link.label}
            </a>
          `).join('')}
        </div>

        <button class="navbar__hamburger" id="nav-hamburger" aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <div class="navbar__mobile-menu" id="mobile-menu">
      ${navLinks.map(link => `
        <a href="#${link.path}" class="navbar__mobile-link" data-route="${link.path}">
          ${link.label}
        </a>
      `).join('')}
    </div>
  `;
}

export function initNavbar() {
  const navbar = document.getElementById('main-navbar');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('.navbar__mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}
