/* BTech — Charla Guiada: Interfaz, Programación y Comunicación */

const MOMENTS = [
  {
    id: 1,
    eyebrow: 'Momento 1 · 5 minutos',
    title: 'El problema no es solo tecnológico',
    intent: 'Abrir con una situación cotidiana y ubicar el sentido social del caso.',
    color: 'accent',
    icon: 'users',
    speakers: [
      {
        name: 'Katherine Seña',
        area: 'Comunicación',
        icon: 'message-circle',
        color: 'green',
        text: 'Una persona quiere vender en línea, recuperar una contraseña o identificar si un mensaje es una estafa, pero no sabe cómo hacerlo. El problema no es solo tecnológico; también depende de cómo se diseña, cómo funciona y cómo se explica.'
      },
      {
        name: 'Iván Mejía',
        area: 'Interfaz',
        icon: 'monitor',
        color: 'accent',
        text: 'Cuando esa persona entra a una página, lo primero que encuentra no es el contenido… es una experiencia. Ve colores, menús, botones, íconos… pero, sobre todo, intenta entender por dónde empezar. Y ahí es donde ocurre algo clave: si esa primera pantalla es confusa, el usuario no falla… el diseño falla. Porque antes de aprender, el usuario necesita orientarse. Y si no entiende qué hacer en los primeros segundos, simplemente se pierde.'
      },
      {
        name: 'Eduar Barón',
        area: 'Programación',
        icon: 'code',
        color: 'primary',
        text: 'Además de verse clara, la plataforma debe responder: cargar contenidos, abrir tutoriales, mostrar videos, organizar categorías y permitir interacción. Sin estructura técnica, la solución se queda en idea.'
      }
    ],
    closing: '"Hoy no venimos a hablar de tres cursos aislados; venimos a mostrar cómo una solución digital necesita diseño, código y lenguaje claro para ayudar a personas reales."',
    closingLabel: 'Los tres docentes'
  },
  {
    id: 2,
    eyebrow: 'Momento 2 · 6 minutos',
    title: 'Presentación del caso BTech',
    intent: 'Explicar el caso de estudio y por qué requiere trabajo conjunto.',
    color: 'primary',
    icon: 'monitor',
    speakers: [
      {
        name: 'Eduar Barón',
        area: 'Programación',
        icon: 'code',
        color: 'primary',
        text: 'BTech es una solución web educativa para apoyar el uso de herramientas digitales como YouTube, Instagram, Mercado Libre, Word, Excel o correo electrónico. La plataforma consume APIs externas como Clearbit para logos, YouTube para videos y Wikipedia para definiciones, todo integrado en una arquitectura SPA.'
      },
      {
        name: 'Katherine Seña',
        area: 'Comunicación',
        icon: 'message-circle',
        color: 'green',
        text: 'Para llegar a adultos mayores, pequeños emprendedores, usuarios principiantes y personas con baja alfabetización digital, el reto es hablarle a usuarios que pueden sentir miedo, frustración o desconfianza.'
      },
      {
        name: 'Iván Mejía',
        area: 'Interfaz',
        icon: 'monitor',
        color: 'accent',
        text: 'Esta plataforma no puede organizarse como normalmente lo hacen los sistemas. No puede hablar en términos técnicos. Tiene que organizarse como piensa el usuario: crear una cuenta, recuperar una contraseña, comprar de forma segura, vender en línea, proteger su información. Porque cuando el diseño habla el idioma del usuario, el usuario deja de sentir que la tecnología es difícil.'
      },
      {
        name: 'Eduar Barón',
        area: 'Programación',
        icon: 'code',
        color: 'primary',
        text: 'Esa organización se convierte en una arquitectura funcional: secciones, rutas, botones, recursos multimedia, preguntas frecuentes y simulaciones prácticas. La plataforma está implementada con simplicidad e intuición para comunicarse de forma sencilla con sus usuarios.'
      }
    ]
  },
  {
    id: 3,
    eyebrow: 'Momento 3 · 7 minutos',
    title: '¿Qué debe ver y entender primero el usuario?',
    intent: 'Mostrar cómo la primera experiencia depende de decisiones visuales, técnicas y comunicativas.',
    color: 'green',
    icon: 'eye',
    speakers: [
      {
        name: 'Iván Mejía',
        area: 'Interfaz',
        icon: 'layout',
        color: 'accent',
        text: 'Desde la interfaz, lo primero que buscamos es algo muy simple… pero muy poderoso: que el usuario no tenga que pensar demasiado. Desde la primera pantalla, BTech debe responder tres preguntas inmediatas: ¿Qué es esto? ¿Para qué me sirve? ¿Por dónde empiezo? Por eso proponemos una pantalla limpia, sin saturación, con categorías visibles y botones claros. Una interfaz que no abrume… sino que acompañe.'
      },
      {
        name: 'Katherine Seña',
        area: 'Comunicación',
        icon: 'message-circle',
        color: 'green',
        text: 'El mensaje inicial debe ser simple y tranquilizador. Ejemplo: "Aprende a usar herramientas digitales paso a paso, de forma sencilla y segura". Evitar frases largas o institucionales.'
      },
      {
        name: 'Eduar Barón',
        area: 'Programación',
        icon: 'code',
        color: 'primary',
        text: 'Esa pantalla requiere una estructura responsive, menús funcionales y enlaces correctos. Logramos conectar la parte visual y comunicativa con funciones JavaScript, animaciones y estilos minimalistas que ayudan al usuario a tener una navegación armoniosa.'
      },
      {
        name: 'Iván Mejía',
        area: 'Interfaz',
        icon: 'monitor',
        color: 'accent',
        text: 'El diseño se vuelve estratégico: no es solo que se vea bonito, es que se entienda rápido. Por eso es fundamental trabajar con jerarquías visuales claras, tipografía legible e íconos acompañados de texto. Para esto nos guía el manual de estilos.'
      }
    ]
  },
  {
    id: 4,
    eyebrow: 'Momento 4 · 8 minutos',
    title: '¿Cómo se guía al usuario paso a paso?',
    intent: 'Explicar que un tutorial digital necesita secuencia, interacción y lenguaje claro.',
    color: 'accent',
    icon: 'list',
    speakers: [
      {
        name: 'Katherine Seña',
        area: 'Comunicación',
        icon: 'message-circle',
        color: 'green',
        text: 'Una buena secuencia tiene una estructura clara de tutorial: qué vas a aprender, qué necesitas antes de empezar, paso a paso, consejo de seguridad, qué hacer si algo sale mal, y cierre motivador.'
      },
      {
        name: 'Iván Mejía',
        area: 'Interfaz',
        icon: 'monitor',
        color: 'accent',
        text: 'Guiar al usuario no es solo decirle qué hacer, es mostrarle el camino. Desde la interfaz se traduce en: tarjetas que organizan la información, pasos numerados, barras de avance, botones de "siguiente" e imágenes de apoyo.'
      },
      {
        name: 'Eduar Barón',
        area: 'Programación',
        icon: 'code',
        color: 'primary',
        text: 'Técnicamente se despliegan los pasos, se reproducen videos, se abren ejemplos, se permite volver al paso anterior y se organizan contenidos por plataforma. Nos apoyamos en contenedores genéricos y una buena maquetación del CSS con Flexbox y Grid.'
      },
      {
        name: 'Katherine Seña',
        area: 'Comunicación',
        icon: 'message-circle',
        color: 'green',
        text: 'El lenguaje claro mejora la usabilidad. No decir "ingrese sus credenciales", sino "escribe tu correo y contraseña". No decir "autenticación en dos factores", sino "activa una segunda protección para tu cuenta".'
      }
    ]
  },
  {
    id: 5,
    eyebrow: 'Momento 5 · 7 minutos',
    title: '¿Cómo se construye confianza y seguridad?',
    intent: 'Mostrar que la plataforma también debe prevenir errores, fraudes y abandono.',
    color: 'primary',
    icon: 'shield-check',
    speakers: [
      {
        name: 'Eduar Barón',
        area: 'Programación',
        icon: 'code',
        color: 'primary',
        text: 'Una plataforma confiable tiene enlaces seguros, formularios claros, mensajes de confirmación, validaciones y buen funcionamiento en distintos dispositivos. Hacemos uso del concepto de SPA donde todo el contenido está dividido en secciones con enlaces seguros, incluyendo conexiones a Wikipedia.'
      },
      {
        name: 'Iván Mejía',
        area: 'Interfaz',
        icon: 'monitor',
        color: 'accent',
        text: 'La seguridad también se diseña. No basta con que el sistema sea seguro, el usuario debe sentir que está seguro. Lo logramos con alertas visibles, íconos de advertencia, botones bien diferenciados y diseños que no obliguen a hacer clic sin entender. Muchas veces el error no es del usuario, es de una interfaz que no explica.'
      },
      {
        name: 'Katherine Seña',
        area: 'Comunicación',
        icon: 'message-circle',
        color: 'green',
        text: 'Las advertencias deben ser directas y no alarmistas. Ejemplo: "Nunca compartas códigos que lleguen a tu celular" o "Antes de comprar, revisa la reputación del vendedor".'
      },
      {
        name: 'Eduar Barón',
        area: 'Programación',
        icon: 'code',
        color: 'primary',
        text: 'Los mensajes de error también deben ser humanos: en vez de "Error 404", decir "No encontramos esta página. Puedes volver al inicio o revisar el enlace". El manejo de errores desde JavaScript es clave cuando una API externa no está funcionando o no encuentra un recurso.'
      }
    ]
  },
  {
    id: 6,
    eyebrow: 'Momento 6 · 7 minutos',
    title: '¿Qué aporta cada curso al perfil del técnico profesional?',
    intent: 'Conectar el caso con la formación de los estudiantes.',
    color: 'green',
    icon: 'graduation-cap',
    speakers: [
      {
        name: 'Iván Mejía',
        area: 'Interfaz',
        icon: 'monitor',
        color: 'accent',
        text: 'Desde la Interfaz, nuestro aporte es claro: pensar cómo el usuario ve, cómo recorre, cómo entiende una plataforma. Un técnico no solo organiza elementos en pantalla… diseña caminos. Caminos que permiten que una persona que no sabe, pueda aprender.'
      },
      {
        name: 'Eduar Barón',
        area: 'Programación',
        icon: 'code',
        color: 'primary',
        text: 'La Programación aporta la capacidad de convertir una idea en una solución funcional. El técnico estructura, organiza y activa el producto digital. Es importante pensar y estar en los pies del usuario final, no solo pensar como técnico programador.'
      },
      {
        name: 'Katherine Seña',
        area: 'Comunicación',
        icon: 'message-circle',
        color: 'green',
        text: 'La Comunicación aporta la capacidad de pensar en el usuario, en el tono, en la claridad del mensaje y en la utilidad social de lo que se construye.'
      }
    ],
    closing: '"Un técnico profesional en Programación Web no solo hace páginas; diseña soluciones digitales que deben verse claras, funcionar bien y comunicarse mejor."',
    closingLabel: 'Idea fuerza'
  }
];

const COLOR_MAP = {
  accent:  { bg: 'rgba(82,139,201,0.12)',  border: 'var(--color-accent)',   text: 'var(--color-accent)'  },
  primary: { bg: 'rgba(38,67,98,0.1)',     border: 'var(--color-primary)',  text: 'var(--color-primary)' },
  green:   { bg: 'rgba(135,191,88,0.12)', border: 'var(--color-green)',   text: 'var(--color-green)'   }
};

function speakerBubble(speaker) {
  const c = COLOR_MAP[speaker.color] || COLOR_MAP.accent;
  return `
    <div class="charla-bubble" style="border-left-color:${c.border};">
      <div class="charla-bubble__header">
        <span class="charla-bubble__icon" style="background:${c.bg};color:${c.text};">
          <i data-lucide="${speaker.icon}" style="width:16px;height:16px;"></i>
        </span>
        <span class="charla-bubble__name" style="color:${c.text};">${speaker.name}</span>
        <span class="charla-bubble__area">${speaker.area}</span>
      </div>
      <p class="charla-bubble__text">${speaker.text}</p>
    </div>
  `;
}

function momentCard(moment, index, total) {
  const c = COLOR_MAP[moment.color] || COLOR_MAP.accent;
  const speakersHTML = moment.speakers.map(speakerBubble).join('');
  const closingHTML = moment.closing
    ? '<div class="charla-closing">'
      + '<i data-lucide="message-square" style="width:20px;height:20px;color:var(--color-green);flex-shrink:0;margin-top:2px;"></i>'
      + '<div>'
      + '<p class="charla-closing__text">' + moment.closing + '</p>'
      + '<span class="charla-closing__label">' + moment.closingLabel + '</span>'
      + '</div></div>'
    : '';

  const isFirst = index === 0;
  const isLast  = index === total - 1;

  const prevBtn = isFirst
    ? '<span></span>'
    : '<button class="btn btn--outline charla-nav-btn" data-direction="prev"><i data-lucide="arrow-left" style="width:16px;height:16px;"></i> Momento anterior</button>';

  const nextBtn = isLast
    ? '<button class="btn btn--primary charla-nav-btn" data-direction="restart"><i data-lucide="rotate-ccw" style="width:16px;height:16px;"></i> Volver al inicio</button>'
    : '<button class="btn btn--primary charla-nav-btn" data-direction="next">Siguiente momento <i data-lucide="arrow-right" style="width:16px;height:16px;"></i></button>';

  return `
    <div class="charla-moment" id="charla-moment-${moment.id}" style="display:${isFirst ? 'block' : 'none'};">
      <div class="charla-moment__header" style="border-color:${c.border};">
        <div class="charla-moment__eyebrow" style="color:${c.text};">
          <i data-lucide="${moment.icon}" style="width:14px;height:14px;"></i>
          ${moment.eyebrow}
        </div>
        <h2 class="charla-moment__title">${moment.title}</h2>
        <p class="charla-moment__intent">${moment.intent}</p>
      </div>
      <div class="charla-moment__body">
        ${speakersHTML}
        ${closingHTML}
      </div>
      <div class="charla-moment__nav">
        ${prevBtn}
        ${nextBtn}
      </div>
    </div>
  `;
}

function progressDots(total) {
  return Array.from({ length: total }, (_, i) => `
    <button class="charla-dot ${i === 0 ? 'charla-dot--active' : ''}" data-step="${i}" aria-label="Momento ${i + 1}">
      <span>${i + 1}</span>
    </button>
  `).join('');
}

export function renderCharla() {
  const view = document.getElementById('view');
  const total = MOMENTS.length;

  view.innerHTML = `
    <!-- Hero -->
    <section class="charla-hero">
      <div class="container">
        <p class="section-header__eyebrow" style="margin-bottom:var(--space-sm);">BTech · Caso de estudio</p>
        <h1 class="charla-hero__title">Interfaz, Programación y Comunicación</h1>
        <p class="charla-hero__sub">Tres lenguajes para resolver problemas reales</p>
        <div class="charla-hero__authors">
          <span class="charla-author charla-author--green">
            <i data-lucide="message-circle" style="width:14px;height:14px;"></i> Katherine Seña · Comunicación
          </span>
          <span class="charla-author charla-author--accent">
            <i data-lucide="monitor" style="width:14px;height:14px;"></i> Iván Mejía · Interfaz
          </span>
          <span class="charla-author charla-author--primary">
            <i data-lucide="code" style="width:14px;height:14px;"></i> Eduar Barón · Programación
          </span>
        </div>
      </div>
    </section>

    <!-- Stepper -->
    <section class="section">
      <div class="container charla-container">

        <!-- Progress bar -->
        <div class="charla-progress">
          <div class="charla-progress__track">
            <div class="charla-progress__fill" id="charla-fill" style="width:${(1 / total) * 100}%;"></div>
          </div>
          <div class="charla-progress__dots" id="charla-dots">
            ${progressDots(total)}
          </div>
        </div>

        <!-- Moments -->
        <div class="charla-moments" id="charla-moments">
          ${MOMENTS.map((m, i) => momentCard(m, i, total)).join('')}
        </div>

      </div>
    </section>

    <!-- Idea fuerza -->
    <section class="section section--dark">
      <div class="container" style="text-align:center;max-width:700px;">
        <p class="section-header__eyebrow" style="color:var(--color-green);margin-bottom:var(--space-md);">Idea fuerza</p>
        <h2 style="font-size:var(--font-size-title);font-weight:var(--font-weight-bold);color:var(--color-white);line-height:1.3;">
          No construimos solo páginas web;<br>construimos experiencias digitales para personas.
        </h2>
      </div>
    </section>
  `;

  initCharlaLogic(total);

  if (window.lucide) lucide.createIcons();
}

function initCharlaLogic(total) {
  let current = 0;

  function goTo(index) {
    if (index < 0 || index >= total) return;
    document.getElementById(`charla-moment-${MOMENTS[current].id}`).style.display = 'none';
    current = index;
    const el = document.getElementById(`charla-moment-${MOMENTS[current].id}`);
    el.style.display = 'block';
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Update progress fill
    document.getElementById('charla-fill').style.width = `${((current + 1) / total) * 100}%`;

    // Update dots
    document.querySelectorAll('.charla-dot').forEach((dot, i) => {
      dot.classList.toggle('charla-dot--active', i === current);
      dot.classList.toggle('charla-dot--done', i < current);
    });

    if (window.lucide) lucide.createIcons();
  }

  document.getElementById('charla-moments').addEventListener('click', e => {
    const btn = e.target.closest('.charla-nav-btn');
    if (!btn) return;
    const dir = btn.dataset.direction;
    if (dir === 'next') goTo(current + 1);
    else if (dir === 'prev') goTo(current - 1);
    else if (dir === 'restart') goTo(0);
  });

  document.getElementById('charla-dots').addEventListener('click', e => {
    const dot = e.target.closest('.charla-dot');
    if (!dot) return;
    goTo(parseInt(dot.dataset.step, 10));
  });
}
