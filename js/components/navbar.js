/* BTech — Navbar Component */
import { navigate } from '../router.js';
import { initThemeToggle } from '../theme.js';

export function renderNavbar() {
  const navbar = document.getElementById('navbar');
  navbar.innerHTML = `
    <nav class="navbar">
      <a class="navbar__logo" href="#/" data-link>
        <div>
          <span class="navbar__logo-text">B<span>Tech</span></span>
          <span class="navbar__tagline">Aprender, conectar y trasformar</span>
        </div>
      </a>

      <ul class="navbar__links" id="nav-links">
        <li><a href="#/" data-link>Inicio</a></li>
        <li><a href="#/catalogo" data-link>Herramientas</a></li>
        <li><a href="#/buscar" data-link>Buscar</a></li>
        <li><a href="#/nosotros" data-link>Nosotros</a></li>
      </ul>

      <div class="navbar__search">
        <input type="text" id="nav-search-input" placeholder="Buscar herramienta..." />
        <button id="nav-search-btn" aria-label="Buscar">
          <i data-lucide="search" style="width:16px;height:16px;"></i>
        </button>
      </div>

      <button class="navbar__theme-toggle" id="theme-toggle" aria-label="Cambiar tema">
        <i data-lucide="moon" style="width:18px;height:18px;" id="theme-icon"></i>
      </button>

      <button class="navbar__hamburger" id="nav-hamburger" aria-label="Menú">
          <i data-lucide="menu" style="width:24px;height:24px;"></i>
      </button>
    </nav>
  `;

  setupNavbarEvents();
}

function setupNavbarEvents() {
  const searchInput = document.getElementById('nav-search-input');
  const searchBtn   = document.getElementById('nav-search-btn');
  const hamburger   = document.getElementById('nav-hamburger');
  const navLinks    = document.getElementById('nav-links');

  const doSearch = () => {
    const q = searchInput.value.trim();
    if (q) {
      navigate(`/buscar?q=${encodeURIComponent(q)}`);
      searchInput.value = '';
    }
  };

  searchBtn.addEventListener('click', doSearch);
  searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  initThemeToggle();

  document.querySelectorAll('[data-link]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const hash = a.getAttribute('href');
      window.location.hash = hash;
      navLinks.classList.remove('open');
    });
  });
}

export function setActiveNavLink(path) {
  document.querySelectorAll('.navbar__links a').forEach(a => {
    const href = a.getAttribute('href')?.replace('#', '') || '/';
    const isHome = href === '/' && path === '/';
    const isMatch = href !== '/' && path.startsWith(href);
    a.classList.toggle('active', isHome || isMatch);
  });
}
