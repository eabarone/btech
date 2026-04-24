/* BTech — Main App Entry Point */
import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { addRoute, initRouter } from './router.js';
import { renderHome } from './pages/home.js';
import { renderCatalog } from './pages/catalog.js';
import { renderTool } from './pages/tool.js';
import { renderSearch } from './pages/search.js';
import { renderAbout } from './pages/about.js';
import { initAnimations, initTypingEffect } from './animations.js';

function init() {
  renderNavbar();
  renderFooter();

  // Navbar scroll glass effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.classList.toggle('navbar--scrolled', window.scrollY > 40);
  });

  addRoute('/', () => { renderHome(); initAnimations(); initTypingEffect('#hero-typing', ['tu mundo digital', 'las redes sociales', 'el comercio electrónico', 'la ofimática']); });
  addRoute('/catalogo', (params) => { renderCatalog(params); initAnimations(); });
  addRoute('/herramienta/:id', async (params) => { await renderTool(params); initAnimations(); });
  addRoute('/buscar', (params) => { renderSearch(params); initAnimations(); });
  addRoute('/nosotros', () => { renderAbout(); initAnimations(); });
  addRoute('*', () => render404());

  initRouter();
}

function render404() {
  document.getElementById('view').innerHTML = `
    <div class="empty-state" style="padding: var(--space-3xl) var(--space-xl); min-height: 60vh; display:flex; flex-direction:column; align-items:center; justify-content:center;">
      <div class="empty-state__icon">🔍</div>
      <h3 style="font-size:1.5rem;">Página no encontrada</h3>
      <p>La página que buscas no existe.</p>
      <button class="btn btn--primary" style="margin-top: var(--space-lg);" onclick="window.location.hash='#/'">
        Volver al inicio
      </button>
    </div>
  `;
}

init();
