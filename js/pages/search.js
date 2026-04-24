/* BTech — Search Page */
import { TOOLS, CATEGORIES } from '../data/tools.js';
import { navigate } from '../router.js';
import { logoImg } from '../api/logos.js';

export function renderSearch(params = {}) {
  const view = document.getElementById('view');
  const initialQuery = params.q || '';

  view.innerHTML = `
    <section class="search-hero">
      <div class="container">
        <h1>Buscar herramientas</h1>
        <div class="search-box">
          <input type="text" id="search-input" placeholder="Ej: WhatsApp, Gmail, Mercado Libre..." value="${initialQuery}" />
          <button id="search-btn">Buscar</button>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="tag-filter" id="search-cat-filter">
          <button class="tag-filter__btn active" data-cat="all">Todas las categorías</button>
          ${Object.values(CATEGORIES).map(c => `
            <button class="tag-filter__btn" data-cat="${c.id}">${c.icon} ${c.label}</button>
          `).join('')}
        </div>
        <div id="search-results"></div>
      </div>
    </section>
  `;

  let currentCat = 'all';

  const doSearch = () => {
    const q = document.getElementById('search-input').value.trim().toLowerCase();
    runSearch(q, currentCat);
  };

  document.getElementById('search-btn').addEventListener('click', doSearch);
  document.getElementById('search-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });

  document.getElementById('search-cat-filter').addEventListener('click', e => {
    const btn = e.target.closest('.tag-filter__btn');
    if (!btn) return;
    document.querySelectorAll('#search-cat-filter .tag-filter__btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;
    doSearch();
  });

  if (initialQuery) {
    runSearch(initialQuery, currentCat);
  } else {
    showAllTools();
  }
}

function runSearch(query, cat) {
  const results = document.getElementById('search-results');
  let tools = cat === 'all' ? TOOLS : TOOLS.filter(t => t.category === cat);

  if (query) {
    tools = tools.filter(t =>
      t.name.toLowerCase().includes(query) ||
      t.desc.toLowerCase().includes(query) ||
      t.steps.some(s => s.title.toLowerCase().includes(query) || s.body.toLowerCase().includes(query))
    );
  }

  if (tools.length === 0) {
    results.innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon">🔍</div>
        <h3>Sin resultados</h3>
        <p>No encontramos herramientas que coincidan con "${query}".</p>
      </div>
    `;
    return;
  }

  results.innerHTML = `
    <p style="font-size:var(--font-size-body);color:var(--color-text);opacity:.7;margin-bottom:var(--space-lg);">
      ${tools.length} resultado${tools.length !== 1 ? 's' : ''} encontrado${tools.length !== 1 ? 's' : ''}
      ${query ? ` para "<strong>${query}</strong>"` : ''}
    </p>
    <div class="grid grid--3">
      ${tools.map(t => buildSearchCard(t, query)).join('')}
    </div>
  `;

  results.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => navigate(`/herramienta/${card.dataset.id}`));
  });
}

function showAllTools() {
  const results = document.getElementById('search-results');
  results.innerHTML = `
    <p style="font-size:var(--font-size-body);color:var(--color-text);opacity:.7;margin-bottom:var(--space-lg);">
      Todas las herramientas disponibles — ${TOOLS.length} en total
    </p>
    <div class="grid grid--3">
      ${TOOLS.map(t => buildSearchCard(t, '')).join('')}
    </div>
  `;
  results.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => navigate(`/herramienta/${card.dataset.id}`));
  });
}

function buildSearchCard(tool, query) {
  const catLabel = { social: 'Redes Sociales', ecommerce: 'Comercio Electrónico', office: 'Ofimática' };
  const highlight = (text) => {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark style="background:rgba(135,191,88,0.3);border-radius:2px;">$1</mark>');
  };
  return `
    <div class="card" data-id="${tool.id}" role="button" tabindex="0" style="cursor:pointer;">
      <div class="card__icon" style="background:${tool.color}18;">
        ${logoImg(tool.domain, tool.icon, tool.color)}
      </div>
      <div class="card__body">
        <p class="card__category">${catLabel[tool.category]}</p>
        <h3 class="card__title">${highlight(tool.name)}</h3>
        <p class="card__desc">${highlight(tool.desc)}</p>
      </div>
      <div class="card__footer">
        <span class="card__tag">${tool.steps.length} pasos</span>
        <i data-lucide="arrow-right" style="width:16px;height:16px;color:var(--color-accent);"></i>
      </div>
    </div>
  `;
}
