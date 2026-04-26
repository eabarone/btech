/* BTech — Home Page */
import { CATEGORIES, TOOLS } from '../data/tools.js';
import { navigate } from '../router.js';
import { logoImg } from '../api/logos.js';
import { assetUrl } from '../utils/paths.js';

export function renderHome() {
  const view = document.getElementById('view');

  view.innerHTML = `
    <!-- Hero -->
    <section class="hero">
      <div class="hero__orb hero__orb--1"></div>
      <div class="hero__orb hero__orb--2"></div>
      <div class="hero__orb hero__orb--3"></div>
      <div class="hero__content anim-fade-up">
        <div class="hero__text">
          <p class="hero__eyebrow">Plataforma de apoyo digital</p>
          <h1 class="hero__title">
            Aprende, conecta y<br><span class="highlight-word">trasforma</span> <span id="hero-typing"></span>
          </h1>
          <p class="hero__desc">
            BTech es tu guía para dominar las herramientas digitales más importantes:
            redes sociales, comercio electrónico y ofimática, paso a paso y sin complicaciones.
          </p>
          <div class="hero__actions">
            <button class="btn btn--primary btn--lg" id="hero-cta"><i data-lucide="compass" style="width:18px;height:18px;"></i> Explorar herramientas</button>
            <button class="btn btn--ghost btn--lg" id="hero-secondary"><i data-lucide="info" style="width:18px;height:18px;"></i> ¿Qué es BTech?</button>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero__logo-big">
            <img src="${assetUrl('img/logo.png')}" alt="BTech" class="hero__logo-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <div class="container">
      <div class="stats-bar anim-fade-up" style="animation-delay:.2s">
        <div class="stat">
          <div class="stat__number" data-count="${TOOLS.length}" data-suffix="">0</div>
          <div class="stat__label">Herramientas</div>
        </div>
        <div class="stat">
          <div class="stat__number" data-count="3" data-suffix="">0</div>
          <div class="stat__label">Categorías</div>
        </div>
        <div class="stat">
          <div class="stat__number" data-count="100" data-suffix="%">0%</div>
          <div class="stat__label">Gratuito</div>
        </div>
      </div>
    </div>

    <!-- Categories -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <p class="section-header__eyebrow">¿Qué quieres aprender?</p>
          <h2>Explora por categoría</h2>
          <p>Selecciona el área que más te interese y empieza tu aprendizaje digital hoy.</p>
        </div>
        <div class="grid grid--3 anim-stagger" id="categories-grid"></div>
      </div>
    </section>

    <!-- Featured Tools -->
    <section class="section section--gray">
      <div class="container">
        <div class="section-header">
          <p class="section-header__eyebrow">Más populares</p>
          <h2>Herramientas destacadas</h2>
          <p>Las herramientas más buscadas y usadas por nuestros usuarios.</p>
        </div>
        <div class="grid grid--4 anim-stagger" id="featured-tools"></div>
      </div>
    </section>

    <!-- Values -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <p class="section-header__eyebrow">Nuestra filosofía</p>
          <h2>Nuestros valores</h2>
          <p>Los principios que guían cada tutorial, guía y recurso que creamos.</p>
        </div>
        <div class="values-grid">
          <div class="value-card anim-fade-up" style="animation-delay:.05s">
            <span class="value-card__icon"><i data-lucide="handshake" style="width:2.5rem;height:2.5rem;color:var(--color-accent);"></i></span>
            <div class="value-card__title">Inclusión</div>
            <p class="value-card__desc">Diseñamos para todos, sin importar nivel de experiencia tecnológica.</p>
          </div>
          <div class="value-card anim-fade-up" style="animation-delay:.10s">
            <span class="value-card__icon"><i data-lucide="shield-check" style="width:2.5rem;height:2.5rem;color:var(--color-green);"></i></span>
            <div class="value-card__title">Confianza</div>
            <p class="value-card__desc">Información verificada y actualizada para que aprendas con seguridad.</p>
          </div>
          <div class="value-card anim-fade-up" style="animation-delay:.15s">
            <span class="value-card__icon"><i data-lucide="eye" style="width:2.5rem;height:2.5rem;color:var(--color-accent);"></i></span>
            <div class="value-card__title">Claridad</div>
            <p class="value-card__desc">Explicaciones simples, visuales y directas. Sin tecnicismos innecesarios.</p>
          </div>
          <div class="value-card anim-fade-up" style="animation-delay:.20s">
            <span class="value-card__icon"><i data-lucide="brain" style="width:2.5rem;height:2.5rem;color:var(--color-green);"></i></span>
            <div class="value-card__title">Aprendizaje</div>
            <p class="value-card__desc">Tutoriales progresivos que te llevan de principiante a usuario avanzado.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="section section--dark">
      <div class="container" style="text-align:center;">
        <h2 style="font-size:var(--font-size-title);font-weight:var(--font-weight-bold);color:var(--color-white);margin-bottom:var(--space-md);">
          ¿Listo para empezar?
        </h2>
        <p style="font-size:var(--font-size-sub);color:rgba(255,255,255,0.8);margin-bottom:var(--space-xl);max-width:520px;margin-left:auto;margin-right:auto;line-height:1.65;">
          Explora todas las herramientas disponibles y comienza tu camino hacia la inclusión digital.
        </p>
        <button class="btn btn--primary btn--lg" id="cta-catalogo">Ver todas las herramientas</button>
      </div>
    </section>
  `;

  renderCategories();
  renderFeaturedTools();
  setupHomeEvents();
}

function renderCategories() {
  const grid = document.getElementById('categories-grid');
  grid.innerHTML = Object.values(CATEGORIES).map(cat => {
    const count = TOOLS.filter(t => t.category === cat.id).length;
    return `
      <div class="category-card category-card--${cat.color}" data-cat="${cat.id}" role="button" tabindex="0">
        <span class="category-card__count">${count} herramientas</span>
        <i data-lucide="${cat.icon}" style="width:3rem;height:3rem;"></i>
        <div class="category-card__title">${cat.label}</div>
        <p class="category-card__desc">${cat.desc}</p>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => navigate(`/catalogo?cat=${card.dataset.cat}`));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') navigate(`/catalogo?cat=${card.dataset.cat}`); });
  });
}

function renderFeaturedTools() {
  const featured = ['whatsapp', 'gmail', 'mercadolibre', 'google-docs'];
  const tools = TOOLS.filter(t => featured.includes(t.id));
  const grid = document.getElementById('featured-tools');

  grid.innerHTML = tools.map(tool => buildToolCard(tool)).join('');

  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => navigate(`/herramienta/${card.dataset.id}`));
  });
}

export function buildToolCard(tool) {
  const catLabel = { social: 'Redes Sociales', ecommerce: 'Comercio Electrónico', office: 'Ofimática' };
  return `
    <div class="card" data-id="${tool.id}" role="button" tabindex="0">
      <div class="card__icon" style="background:${tool.color}18;">
        ${logoImg(tool.domain, tool.icon, tool.color)}
      </div>
      <div class="card__body">
        <p class="card__category">${catLabel[tool.category]}</p>
        <h3 class="card__title">${tool.name}</h3>
        <p class="card__desc">${tool.desc}</p>
      </div>
      <div class="card__footer">
        <span class="card__tag">${tool.steps.length} pasos</span>
        <i data-lucide="arrow-right" style="width:16px;height:16px;color:var(--color-accent);"></i>
      </div>
    </div>
  `;
}

function setupHomeEvents() {
  document.getElementById('hero-cta')?.addEventListener('click', () => navigate('/catalogo'));
  document.getElementById('hero-secondary')?.addEventListener('click', () => navigate('/nosotros'));
  document.getElementById('cta-catalogo')?.addEventListener('click', () => navigate('/catalogo'));
}
