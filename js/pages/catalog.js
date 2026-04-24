/* BTech — Catalog Page */
import { CATEGORIES, TOOLS } from '../data/tools.js';
import { navigate } from '../router.js';
import { buildToolCard } from './home.js';

export function renderCatalog(params = {}) {
  const view = document.getElementById('view');
  const activeCat = params.cat || 'all';

  view.innerHTML = `
    <section class="section--dark" style="padding: var(--space-2xl) var(--space-xl); text-align:center;">
      <div class="container">
        <p class="section-header__eyebrow" style="color:var(--color-green);font-size:.8rem;font-weight:500;text-transform:uppercase;letter-spacing:.1em;margin-bottom:var(--space-sm);">Catálogo completo</p>
        <h1 style="font-size:var(--font-size-title);font-weight:var(--font-weight-bold);color:var(--color-white);margin-bottom:var(--space-md);">Herramientas digitales</h1>
        <p style="font-size:var(--font-size-sub);color:rgba(255,255,255,.8);max-width:560px;margin:0 auto;line-height:1.65;">
          Tutoriales paso a paso para dominar las plataformas más usadas en el mundo digital.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Filtros -->
        <div class="tag-filter" id="cat-filter">
          <button class="tag-filter__btn ${activeCat === 'all' ? 'active' : ''}" data-cat="all">Todas</button>
          ${Object.values(CATEGORIES).map(c => `
            <button class="tag-filter__btn ${activeCat === c.id ? 'active' : ''}" data-cat="${c.id}">
              ${c.icon} ${c.label}
            </button>
          `).join('')}
        </div>

        <!-- Contador -->
        <p id="tools-count" style="font-size:var(--font-size-body);color:var(--color-text);opacity:.7;margin-bottom:var(--space-xl);"></p>

        <!-- Grid -->
        <div class="grid grid--3" id="tools-grid"></div>
      </div>
    </section>
  `;

  renderToolsGrid(activeCat);
  setupFilterEvents();
}

function renderToolsGrid(cat) {
  const grid  = document.getElementById('tools-grid');
  const count = document.getElementById('tools-count');
  const tools = cat === 'all' ? TOOLS : TOOLS.filter(t => t.category === cat);

  count.textContent = `Mostrando ${tools.length} herramienta${tools.length !== 1 ? 's' : ''}`;

  if (tools.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1;">
        <div class="empty-state__icon">🔍</div>
        <h3>Sin resultados</h3>
        <p>No hay herramientas en esta categoría aún.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = tools.map(t => buildToolCard(t)).join('');

  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => navigate(`/herramienta/${card.dataset.id}`));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') navigate(`/herramienta/${card.dataset.id}`); });
  });
}

function setupFilterEvents() {
  document.getElementById('cat-filter').addEventListener('click', e => {
    const btn = e.target.closest('.tag-filter__btn');
    if (!btn) return;

    document.querySelectorAll('.tag-filter__btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.dataset.cat;
    window.history.replaceState(null, '', `#/catalogo${cat !== 'all' ? '?cat=' + cat : ''}`);
    renderToolsGrid(cat);
  });
}
