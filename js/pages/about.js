/* BTech — About Page */
import { navigate } from '../router.js';

export function renderAbout() {
  const view = document.getElementById('view');

  view.innerHTML = `
    <!-- Hero -->
    <section class="about-hero">
      <div class="container">
        <h1>Sobre BTech</h1>
        <p>Una plataforma diseñada para acercar la tecnología a todas las personas, sin importar su nivel de experiencia.</p>
      </div>
    </section>

    <!-- Mission -->
    <section class="section">
      <div class="container">
        <div class="about-mission-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-2xl);align-items:center;">
          <div>
            <p style="font-size:.8rem;font-weight:500;text-transform:uppercase;letter-spacing:.1em;color:var(--color-green);margin-bottom:var(--space-sm);">Nuestra misión</p>
            <h2 style="font-size:var(--font-size-title);font-weight:var(--font-weight-bold);color:var(--color-primary);margin-bottom:var(--space-lg);line-height:1.2;">
              Un puente entre personas y tecnología
            </h2>
            <p style="font-size:1rem;line-height:1.75;color:var(--color-text);margin-bottom:var(--space-md);">
              BTech nace para resolver un problema real: muchas personas presentan dificultades para utilizar plataformas digitales, lo que genera frustración, errores y desconfianza.
            </p>
            <p style="font-size:1rem;line-height:1.75;color:var(--color-text);">
              Nuestra plataforma ofrece tutoriales paso a paso, guías visuales y acompañamiento en el proceso de aprendizaje, permitiendo aprender de forma progresiva, clara y sin miedo.
            </p>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-md);">
            <div style="background:var(--color-gray-light);border-radius:var(--radius-md);padding:var(--space-xl);text-align:center;">
              <div style="margin-bottom:var(--space-sm);"><i data-lucide="target" style="width:2.5rem;height:2.5rem;color:var(--color-primary);"></i></div>
              <strong style="color:var(--color-primary);">Propósito</strong>
              <p style="font-size:var(--font-size-body);margin-top:var(--space-xs);line-height:1.5;">Facilitar el acceso al conocimiento digital para todos.</p>
            </div>
            <div style="background:var(--color-gray-light);border-radius:var(--radius-md);padding:var(--space-xl);text-align:center;">
              <div style="margin-bottom:var(--space-sm);"><i data-lucide="globe" style="width:2.5rem;height:2.5rem;color:var(--color-primary);"></i></div>
              <strong style="color:var(--color-primary);">Alcance</strong>
              <p style="font-size:var(--font-size-body);margin-top:var(--space-xs);line-height:1.5;">Contenido en español para toda Latinoamérica.</p>
            </div>
            <div style="background:var(--color-gray-light);border-radius:var(--radius-md);padding:var(--space-xl);text-align:center;">
              <div style="margin-bottom:var(--space-sm);"><i data-lucide="smartphone" style="width:2.5rem;height:2.5rem;color:var(--color-primary);"></i></div>
              <strong style="color:var(--color-primary);">Enfoque</strong>
              <p style="font-size:var(--font-size-body);margin-top:var(--space-xs);line-height:1.5;">Herramientas del día a día: redes, compras y trabajo.</p>
            </div>
            <div style="background:var(--color-gray-light);border-radius:var(--radius-md);padding:var(--space-xl);text-align:center;">
              <div style="margin-bottom:var(--space-sm);"><i data-lucide="sparkles" style="width:2.5rem;height:2.5rem;color:var(--color-primary);"></i></div>
              <strong style="color:var(--color-primary);">Método</strong>
              <p style="font-size:var(--font-size-body);margin-top:var(--space-xs);line-height:1.5;">Pasos claros, visuales y progresivos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section section--gray">
      <div class="container">
        <div class="section-header">
          <p class="section-header__eyebrow">Lo que nos mueve</p>
          <h2>Nuestros valores</h2>
        </div>
        <div class="values-grid">
          <div class="value-card">
            <span class="value-card__icon"><i data-lucide="handshake" style="width:2.5rem;height:2.5rem;color:var(--color-accent);"></i></span>
            <div class="value-card__title">Inclusión</div>
            <p class="value-card__desc">Diseñamos para todos, sin importar edad, nivel educativo o experiencia tecnológica.</p>
          </div>
          <div class="value-card">
            <span class="value-card__icon"><i data-lucide="shield-check" style="width:2.5rem;height:2.5rem;color:var(--color-green);"></i></span>
            <div class="value-card__title">Confianza</div>
            <p class="value-card__desc">Información verificada y actualizada constantemente para que aprendas con seguridad.</p>
          </div>
          <div class="value-card">
            <span class="value-card__icon"><i data-lucide="eye" style="width:2.5rem;height:2.5rem;color:var(--color-accent);"></i></span>
            <div class="value-card__title">Claridad</div>
            <p class="value-card__desc">Explicaciones simples, directas y visuales. Sin tecnicismos ni lenguaje complicado.</p>
          </div>
          <div class="value-card">
            <span class="value-card__icon"><i data-lucide="brain" style="width:2.5rem;height:2.5rem;color:var(--color-green);"></i></span>
            <div class="value-card__title">Aprendizaje</div>
            <p class="value-card__desc">Tutoriales progresivos que te llevan paso a paso de principiante a usuario seguro.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section--dark">
      <div class="container" style="text-align:center;">
        <h2 style="font-size:var(--font-size-title);font-weight:var(--font-weight-bold);color:var(--color-white);margin-bottom:var(--space-md);">
          ¡Empieza a aprender!
        </h2>
        <p style="font-size:var(--font-size-sub);color:rgba(255,255,255,.8);margin-bottom:var(--space-xl);max-width:500px;margin-left:auto;margin-right:auto;line-height:1.65;">
          Explora nuestro catálogo de herramientas y da el primer paso hacia la inclusión digital.
        </p>
        <button class="btn btn--primary btn--lg" id="about-cta">Ver herramientas</button>
      </div>
    </section>
  `;

  document.getElementById('about-cta')?.addEventListener('click', () => navigate('/catalogo'));
}
