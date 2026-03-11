/**
 * Router — Lightweight hash-based SPA router
 */

import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderResearch } from './pages/research.js';
import { renderResearchDetail } from './pages/research-detail.js';
import { renderProjects } from './pages/projects.js';
import { renderProjectDetail } from './pages/project-detail.js';
import { renderTeaching } from './pages/teaching.js';
import { renderTeachingDetail } from './pages/teaching-detail.js';
import { renderBlog } from './pages/blog.js';
import { renderBlogDetail } from './pages/blog-detail.js';
import { renderContact } from './pages/contact.js';

const routes = {
  '/': renderHome,
  '/about': renderAbout,
  '/research': renderResearch,
  '/projects': renderProjects,
  '/teaching': renderTeaching,
  '/blog': renderBlog,
  '/contact': renderContact,
};

let currentPath = null;

function getPath() {
  const hash = window.location.hash.slice(1) || '/';
  return hash;
}

function updateActiveLink(path) {
  document.querySelectorAll('.navbar__link, .navbar__mobile-link').forEach(link => {
    const href = link.getAttribute('data-route');
    if (href === path) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

export function navigate(path) {
  window.location.hash = path;
}

function render() {
  const hashStr = getPath();
  if (hashStr === currentPath) return;
  currentPath = hashStr;

  // Setup basic path extraction
  const pathParts = hashStr.split('/').filter(Boolean);
  const rootPath = pathParts.length > 0 ? '/' + pathParts[0] : '/';
  const slug = pathParts.length > 1 ? pathParts[1] : null;

  const app = document.getElementById('app');
  let renderFn = routes[rootPath] || routes['/'];

  // Handle dynamic routing overrides
  if (rootPath === '/blog' && slug) renderFn = () => renderBlogDetail(slug);
  else if (rootPath === '/projects' && slug) renderFn = () => renderProjectDetail(slug);
  else if (rootPath === '/research' && slug) renderFn = () => renderResearchDetail(slug);
  else if (rootPath === '/teaching' && slug) renderFn = () => renderTeachingDetail(slug);

  // Page transition
  app.classList.remove('page-transition');
  void app.offsetWidth; // Force reflow
  app.classList.add('page-transition');

  app.innerHTML = renderFn();

  // Update nav - match root path
  updateActiveLink(rootPath);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-init scroll animations
  initScrollAnimations();

  // Close mobile menu if open
  const mobileMenu = document.querySelector('.navbar__mobile-menu');
  const hamburger = document.querySelector('.navbar__hamburger');
  if (mobileMenu) mobileMenu.classList.remove('open');
  if (hamburger) hamburger.classList.remove('open');
}

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.01, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

export function initRouter() {
  window.addEventListener('hashchange', render);
  render();
}
