/* BTech — Tool Detail Page */
import { TOOLS, CATEGORIES } from '../data/tools.js';
import { logoImg } from '../api/logos.js';
import { navigate } from '../router.js';
import { getWikiSummary } from '../api/wikipedia.js';
import { searchYouTubeVideos, getYouTubeSearchUrl } from '../api/youtube.js';
import { getConfig } from '../config.js';

export async function renderTool(params = {}) {
  const tool = TOOLS.find(t => t.id === params.id);
  const view = document.getElementById('view');

  if (!tool) {
    view.innerHTML = `
      <div class="empty-state" style="padding:var(--space-3xl);">
        <div class="empty-state__icon">🔍</div>
        <h3>Herramienta no encontrada</h3>
        <p>La herramienta que buscas no existe.</p>
        <button class="btn btn--primary" style="margin-top:var(--space-lg);" id="back-catalog">Ver catálogo</button>
      </div>
    `;
    document.getElementById('back-catalog')?.addEventListener('click', () => navigate('/catalogo'));
    return;
  }

  const cat = CATEGORIES[tool.category];

  view.innerHTML = `
    <!-- Tool Hero -->
    <section class="tool-hero">
      <div class="tool-hero__inner anim-fade-up">
        <div class="tool-hero__icon-box">${logoImg(tool.domain, tool.icon, '#ffffff', '3.5rem')}</div>
        <div>
          <p class="tool-hero__breadcrumb">
            <a href="#/catalogo" data-link>Herramientas</a> › 
            <a href="#/catalogo?cat=${tool.category}" data-link>${cat.label}</a> › 
            ${tool.name}
          </p>
          <h1 class="tool-hero__title">${tool.name}</h1>
          <p class="tool-hero__desc">${tool.desc}</p>
        </div>
      </div>
    </section>

    <!-- Tabs -->
    <section class="section">
      <div class="container">
        <div class="tabs" id="tool-tabs">
          <button class="tab-btn active" data-tab="steps"><i data-lucide="list-checks" style="width:15px;height:15px;"></i> Pasos</button>
          <button class="tab-btn" data-tab="info"><i data-lucide="book-open" style="width:15px;height:15px;"></i> ¿Qué es?</button>
          <button class="tab-btn" data-tab="videos"><i data-lucide="play-circle" style="width:15px;height:15px;"></i> Videos</button>
        </div>

        <!-- Steps Tab -->
        <div id="tab-steps" class="tab-content">
          <div class="steps-list anim-stagger">
            ${tool.steps.map((step, i) => `
              <div class="step">
                <div class="step__number">${i + 1}</div>
                <div class="step__content">
                  <h4>${step.title}</h4>
                  <p>${step.body}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Info Tab (Wikipedia) -->
        <div id="tab-info" class="tab-content" style="display:none;">
          <div class="loader" id="wiki-loader">
            <div class="loader__spinner"></div>
            <span>Cargando información...</span>
          </div>
          <div id="wiki-content" style="display:none;"></div>
        </div>

        <!-- Videos Tab (YouTube) -->
        <div id="tab-videos" class="tab-content" style="display:none;">
          <div class="loader" id="yt-loader">
            <div class="loader__spinner"></div>
            <span>Cargando videos...</span>
          </div>
          <div id="yt-content" style="display:none;"></div>
        </div>
      </div>
    </section>

    <!-- Related tools -->
    <section class="section section--gray">
      <div class="container">
        <div class="section-header">
          <p class="section-header__eyebrow">Sigue aprendiendo</p>
          <h2>Más herramientas de ${cat.label}</h2>
        </div>
        <div class="grid grid--3" id="related-grid"></div>
      </div>
    </section>
  `;

  setupTabs(tool);
  renderRelated(tool);
}

function setupTabs(tool) {
  const tabs = document.querySelectorAll('.tab-btn');
  let wikiLoaded  = false;
  let videosLoaded = false;

  tabs.forEach(btn => {
    btn.addEventListener('click', async () => {
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');
      document.getElementById(`tab-${btn.dataset.tab}`).style.display = 'block';

      if (btn.dataset.tab === 'info' && !wikiLoaded) {
        wikiLoaded = true;
        await loadWikipedia(tool);
      }

      if (btn.dataset.tab === 'videos' && !videosLoaded) {
        videosLoaded = true;
        await loadVideos(tool);
      }
    });
  });
}

async function loadWikipedia(tool) {
  const loader  = document.getElementById('wiki-loader');
  const content = document.getElementById('wiki-content');

  const data = await getWikiSummary(tool.wikipediaQuery);

  loader.style.display = 'none';
  content.style.display = 'block';

  if (!data.extract) {
    content.innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon">📖</div>
        <h3>Información no disponible</h3>
        <p>No se pudo cargar la descripción de Wikipedia en este momento.</p>
      </div>
    `;
    return;
  }

  content.innerHTML = `
    <div style="display:grid;grid-template-columns:${data.imageUrl ? '1fr 300px' : '1fr'};gap:var(--space-xl);align-items:start;">
      <div>
        <h2 style="font-size:var(--font-size-sub);font-weight:var(--font-weight-bold);color:var(--color-primary);margin-bottom:var(--space-md);">${data.title}</h2>
        <p style="font-size:1rem;line-height:1.75;color:var(--color-text);">${data.extract}</p>
        ${data.pageUrl ? `
          <a href="${data.pageUrl}" target="_blank" rel="noopener" class="btn btn--outline" style="margin-top:var(--space-lg);">
            Leer más en Wikipedia →
          </a>
        ` : ''}
      </div>
      ${data.imageUrl ? `
        <div>
          <img src="${data.imageUrl}" alt="${data.title}" style="border-radius:var(--radius-md);box-shadow:var(--shadow-md);width:100%;" />
        </div>
      ` : ''}
    </div>
  `;
}

async function loadVideos(tool) {
  const loader  = document.getElementById('yt-loader');
  const content = document.getElementById('yt-content');
  const { youtubeApiKey } = getConfig();

  const videos = await searchYouTubeVideos(tool.youtubeQuery, youtubeApiKey, 4);

  loader.style.display = 'none';
  content.style.display = 'block';

  if (videos.length === 0) {
    content.innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon">▶️</div>
        <h3>Buscar videos en YouTube</h3>
        <p>Configura una API Key de YouTube para ver videos directamente aquí,<br>o busca manualmente en YouTube.</p>
        <a href="${getYouTubeSearchUrl(tool.youtubeQuery)}" target="_blank" rel="noopener" class="btn btn--primary" style="margin-top:var(--space-lg);">
          Buscar en YouTube →
        </a>
        <p style="margin-top:var(--space-md);font-size:.75rem;opacity:.6;">
          <a href="#/nosotros">¿Cómo configuro mi API Key?</a>
        </p>
      </div>
    `;
    return;
  }

  content.innerHTML = `<div class="video-grid">${videos.map(v => buildVideoCard(v)).join('')}</div>`;

  content.querySelectorAll('.video-card__thumb').forEach((thumb, i) => {
    thumb.addEventListener('click', () => openVideoModal(videos[i]));
  });
}

function buildVideoCard(video) {
  return `
    <div class="video-card">
      <div class="video-card__thumb">
        <img src="${video.thumb}" alt="${video.title}" loading="lazy" />
        <div class="video-card__play">▶</div>
      </div>
      <div class="video-card__info">
        <div class="video-card__title">${video.title}</div>
        <div class="video-card__channel">${video.channel}</div>
      </div>
    </div>
  `;
}

function openVideoModal(video) {
  const existing = document.getElementById('video-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'video-modal';
  modal.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:500;
    display:flex;align-items:center;justify-content:center;padding:var(--space-xl);
  `;
  modal.innerHTML = `
    <div style="width:100%;max-width:800px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-md);">
        <p style="color:white;font-weight:500;font-size:.9rem;flex:1;">${video.title}</p>
        <button id="close-modal" style="background:none;border:none;color:white;font-size:1.5rem;cursor:pointer;padding:0 0 0 var(--space-md);">✕</button>
      </div>
      <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:var(--radius-md);">
        <iframe src="${video.embedUrl}?autoplay=1" style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;" allow="autoplay;encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.getElementById('close-modal').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

function renderRelated(currentTool) {
  const grid = document.getElementById('related-grid');
  const related = TOOLS.filter(t => t.category === currentTool.category && t.id !== currentTool.id).slice(0, 3);

  if (related.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;color:var(--color-text);opacity:.6;">No hay más herramientas en esta categoría aún.</p>`;
    return;
  }

  grid.innerHTML = related.map(t => `
    <div class="card" data-id="${t.id}" role="button" tabindex="0" style="cursor:pointer;">
      <div class="card__icon" style="background:${t.color}18;">
        ${logoImg(t.domain, t.icon, t.color)}
      </div>
      <div class="card__body">
        <h3 class="card__title">${t.name}</h3>
        <p class="card__desc">${t.desc}</p>
      </div>
      <div class="card__footer">
        <span class="card__tag">${t.steps.length} pasos</span>
        <i data-lucide="arrow-right" style="width:16px;height:16px;color:var(--color-accent);"></i>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => navigate(`/herramienta/${card.dataset.id}`));
  });
}
