/* BTech — Tour Guiado de Charla (overlay sobre la app) */

const TOUR_STEPS = [
  {
    id: 1,
    title: 'El problema no es solo tecnológico',
    context: 'Muchas personas quieren usar herramientas digitales pero no saben cómo. El reto no es solo técnico: depende también de cómo se diseña, cómo funciona y cómo se explica.',
    anchor: '.hero',
    duration: '5 min',
    navigate: '/'
  },
  {
    id: 2,
    title: 'Presentación del caso BTech',
    context: 'BTech es la solución: una plataforma web educativa para adultos mayores, emprendedores y usuarios con baja alfabetización digital. Organizada como piensa el usuario, no como piensa el sistema.',
    anchor: '.hero__text',
    duration: '6 min',
    navigate: '/'
  },
  {
    id: 3,
    title: '¿Qué debe ver y entender primero el usuario?',
    context: 'La primera pantalla debe responder tres preguntas inmediatas: ¿Qué es esto? ¿Para qué me sirve? ¿Por dónde empiezo? Diseño limpio, categorías visibles y lenguaje claro.',
    anchor: '#categories-grid',
    duration: '7 min',
    navigate: '/'
  },
  {
    id: 4,
    title: '¿Cómo se guía al usuario paso a paso?',
    context: 'Un buen tutorial tiene secuencia: qué vas a aprender, pasos numerados, barra de avance y lenguaje sencillo. No "ingrese sus credenciales", sino "escribe tu correo y contraseña".',
    anchor: '.steps-list',
    duration: '8 min',
    navigate: '/herramienta/whatsapp'
  },
  {
    id: 5,
    title: '¿Cómo se construye confianza y seguridad?',
    context: 'La plataforma usa enlaces seguros, mensajes de confirmación y alertas visibles. Los errores hablan en humano: no "Error 404", sino "No encontramos esta página. Puedes volver al inicio".',
    anchor: '#tour-alert-banner',
    duration: '7 min',
    navigate: '/herramienta/whatsapp',
    onEnter: injectAlertBanner,
    onLeave: removeAlertBanner
  },
  {
    id: 6,
    title: '¿Qué aporta cada curso al técnico profesional?',
    context: 'Interfaz diseña caminos. Programación construye la solución. Comunicación le habla al usuario. Un técnico en Programación Web no solo hace páginas: diseña experiencias digitales para personas.',
    anchor: '.values-grid',
    duration: '7 min',
    navigate: '/'
  }
];

let tourActive = false;
let currentStep = 0;

export function initTour() {
  if (document.getElementById('tour-overlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'tour-overlay';
  overlay.innerHTML = `
    <div id="tour-backdrop"></div>
    <div id="tour-panel">
      <div id="tour-panel__top">
        <div id="tour-counter"></div>
        <button id="tour-close" aria-label="Cerrar tour">
          <i data-lucide="x" style="width:18px;height:18px;"></i>
        </button>
      </div>
      <div id="tour-progress-track"><div id="tour-progress-fill"></div></div>
      <div id="tour-step-num"></div>
      <h3 id="tour-title"></h3>
      <p id="tour-context"></p>
      <div id="tour-panel__footer">
        <button id="tour-prev" class="btn btn--outline">
          <i data-lucide="arrow-left" style="width:14px;height:14px;"></i> Anterior
        </button>
        <div id="tour-dots"></div>
        <button id="tour-next" class="btn btn--primary">
          Siguiente <i data-lucide="arrow-right" style="width:14px;height:14px;"></i>
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  document.getElementById('tour-close').addEventListener('click', closeTour);
  document.getElementById('tour-backdrop').addEventListener('click', closeTour);
  document.getElementById('tour-next').addEventListener('click', () => goToStep(currentStep + 1));
  document.getElementById('tour-prev').addEventListener('click', () => goToStep(currentStep - 1));

  if (window.lucide) lucide.createIcons();
}

export function startTour() {
  if (!document.getElementById('tour-overlay')) initTour();
  tourActive = true;
  currentStep = 0;
  document.getElementById('tour-overlay').classList.add('tour--active');
  document.body.classList.add('tour-open');
  renderStep(0);
}

function closeTour() {
  tourActive = false;
  // Limpiar onLeave del paso actual
  const leaving = TOUR_STEPS[currentStep];
  if (leaving?.onLeave) leaving.onLeave();
  document.getElementById('tour-overlay').classList.remove('tour--active');
  document.body.classList.remove('tour-open');
}

async function goToStep(index) {
  if (index < 0) return;
  // Ejecutar onLeave del paso actual antes de cambiar
  const leaving = TOUR_STEPS[currentStep];
  if (leaving?.onLeave) leaving.onLeave();
  if (index >= TOUR_STEPS.length) {
    closeTour();
    return;
  }
  currentStep = index;
  await renderStep(index);
}

async function renderStep(index) {
  const step = TOUR_STEPS[index];
  const total = TOUR_STEPS.length;

  // Navegar si es necesario
  const currentHash = window.location.hash.replace('#', '') || '/';
  if (step.navigate && currentHash !== step.navigate) {
    window.location.hash = '#' + step.navigate;
    await waitForRender(500);
  }

  // Actualizar contenido del panel
  document.getElementById('tour-counter').textContent = step.duration;
  document.getElementById('tour-step-num').textContent = 'Momento ' + step.id;
  document.getElementById('tour-title').textContent = step.title;
  document.getElementById('tour-context').textContent = step.context;
  document.getElementById('tour-progress-fill').style.width = ((index + 1) / total * 100) + '%';

  // Botones prev/next
  const prevBtn = document.getElementById('tour-prev');
  const nextBtn = document.getElementById('tour-next');
  prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
  if (index === total - 1) {
    nextBtn.textContent = 'Finalizar';
  } else {
    nextBtn.textContent = 'Siguiente ›';
  }

  // Dots
  document.getElementById('tour-dots').innerHTML = TOUR_STEPS.map((_, i) =>
    '<span class="tour-dot' + (i === index ? ' tour-dot--active' : (i < index ? ' tour-dot--done' : '')) + '"></span>'
  ).join('');

  // Ejecutar onEnter del paso
  if (step.onEnter) step.onEnter();

  // Scroll al anchor correspondiente
  await waitForRender(50);
  const target = document.querySelector(step.anchor);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}


function injectAlertBanner() {
  if (document.getElementById('tour-alert-banner')) return;
  const banner = document.createElement('div');
  banner.id = 'tour-alert-banner';
  banner.innerHTML = `
    <div id="sim-error-bar">
      <div id="sim-error-left">
        <div id="sim-error-icon">!</div>
        <div id="sim-error-text">
          <strong>No pudimos cargar algunos contenidos</strong>
          <span>El servicio de recursos externos no está respondiendo en este momento.</span>
        </div>
      </div>
      <div id="sim-error-right">
        <button id="sim-error-retry">Reintentar</button>
        <button id="sim-error-close">×</button>
      </div>
    </div>
    <div id="sim-error-detail">
      <div id="sim-error-code">Código de error: <code>ERR_SERVICE_UNAVAILABLE</code> &mdash; Identificador: <code>req_8f3kw19x</code></div>
      <p id="sim-error-msg">Estamos trabajando para resolverlo. Puedes intentar de nuevo en unos minutos o <a href="#" onclick="return false;">contactar soporte</a>.</p>
    </div>
  `;
  const view = document.getElementById('view');
  if (view) view.insertAdjacentElement('afterbegin', banner);

  document.getElementById('sim-error-retry')?.addEventListener('click', () => {
    const btn = document.getElementById('sim-error-retry');
    btn.textContent = 'Cargando...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Reintentar';
      btn.disabled = false;
    }, 2000);
  });

  document.getElementById('sim-error-close')?.addEventListener('click', () => {
    document.getElementById('tour-alert-banner')?.remove();
  });
}

function removeAlertBanner() {
  document.getElementById('tour-alert-banner')?.remove();
}

function waitForRender(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
