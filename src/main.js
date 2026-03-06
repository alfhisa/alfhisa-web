/**
 * Main Entry Point
 * Personal Website — Muhammad Alfhi Saputra
 */

// Styles
import './styles/variables.css';
import './styles/reset.css';
import './styles/global.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/markdown.css';

// Components
import { renderNavbar, initNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';

// Router
import { initRouter } from './router.js';

// Initialize app
function init() {
  // Render navbar
  document.getElementById('navbar').innerHTML = renderNavbar();
  initNavbar();

  // Render footer
  document.getElementById('footer').innerHTML = renderFooter();

  // Start router
  initRouter();

  // Add main padding for fixed navbar
  document.getElementById('app').style.paddingTop = 'var(--navbar-height)';
}

// Wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
