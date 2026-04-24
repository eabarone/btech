/* BTech — Animation Engine */

/* ════════════════════════════════
   SCROLL REVEAL — IntersectionObserver
   ════════════════════════════════ */
export function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ════════════════════════════════
   ANIMATED COUNTER
   ════════════════════════════════ */
export function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target  = parseFloat(el.dataset.count);
    const suffix  = el.dataset.suffix || '';
    const duration = 1200;
    const start    = performance.now();

    const tick = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value    = Math.round(eased * target);

      el.textContent = value + suffix;
      el.classList.add('counting');
      setTimeout(() => el.classList.remove('counting'), 150);

      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    };

    // Only start when visible
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.5 });

    obs.observe(el);
  });
}

/* ════════════════════════════════
   TYPING EFFECT
   ════════════════════════════════ */
export function initTypingEffect(selector, phrases, speed = 80, pause = 2000) {
  const el = document.querySelector(selector);
  if (!el) return;

  el.classList.add('typing-cursor');
  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;

  const tick = () => {
    const phrase = phrases[phraseIdx];

    if (!deleting) {
      el.textContent = phrase.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === phrase.length) {
        deleting = true;
        setTimeout(tick, pause);
        return;
      }
    } else {
      el.textContent = phrase.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting  = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }

    setTimeout(tick, deleting ? speed / 2 : speed);
  };

  tick();
}

/* ════════════════════════════════
   CARD 3D TILT
   ════════════════════════════════ */
export function initCardTilt() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect   = card.getBoundingClientRect();
      const cx     = rect.left + rect.width  / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) / (rect.width  / 2);
      const dy     = (e.clientY - cy) / (rect.height / 2);
      const tiltX  = dy * -6;
      const tiltY  = dx *  6;

      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
      card.style.transition = 'transform 0.1s ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.4s ease, box-shadow 0.2s ease';
    });
  });
}

/* ════════════════════════════════
   STEP PROGRESS LINE
   ════════════════════════════════ */
export function initStepProgress() {
  const stepsList = document.querySelector('.steps-list');
  if (!stepsList) return;

  // Inject progress bar element
  const bar = document.createElement('div');
  bar.className = 'steps-list__progress';
  stepsList.appendChild(bar);

  const steps = stepsList.querySelectorAll('.step');
  if (!steps.length) return;

  const updateProgress = () => {
    const listRect  = stepsList.getBoundingClientRect();
    const viewH     = window.innerHeight;
    let maxVisible  = 0;

    steps.forEach((step, i) => {
      const rect = step.getBoundingClientRect();
      if (rect.top < viewH * 0.85) maxVisible = i + 1;
    });

    const pct = steps.length > 1 ? (maxVisible / steps.length) * 100 : 0;
    bar.style.height = pct + '%';

    // Highlight visible step numbers
    steps.forEach((step, i) => {
      const num = step.querySelector('.step__number');
      if (!num) return;
      if (i < maxVisible) {
        num.style.background = 'var(--color-green)';
        num.style.transform  = 'scale(1)';
      } else {
        num.style.background = '';
        num.style.transform  = '';
      }
    });
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

/* ════════════════════════════════
   ADD REVEAL CLASSES TO SECTIONS
   Called after each page render
   ════════════════════════════════ */
export function applyRevealClasses() {
  // Section headers
  document.querySelectorAll('.section-header').forEach(el => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
    }
  });

  // Value cards
  document.querySelectorAll('.value-card').forEach((el, i) => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal', 'reveal--scale');
      el.style.transitionDelay = `${0.05 + i * 0.07}s`;
    }
  });

  // Steps
  document.querySelectorAll('.step').forEach((el, i) => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal', 'reveal--left');
      el.style.transitionDelay = `${i * 0.08}s`;
    }
  });

  // Tool hero
  const toolHero = document.querySelector('.tool-hero__inner');
  if (toolHero && !toolHero.classList.contains('reveal')) {
    toolHero.classList.add('reveal');
  }

  // About mission grid
  document.querySelectorAll('.about-hero + .section .container > div > div:last-child > div').forEach((el, i) => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal', 'reveal--scale');
      el.style.transitionDelay = `${i * 0.08}s`;
    }
  });

  // Re-init observer for new elements
  initScrollReveal();
}

/* ════════════════════════════════
   MASTER INIT — call after every route render
   ════════════════════════════════ */
export function initAnimations() {
  // Activate Lucide icons first so elements exist before animating
  if (typeof lucide !== 'undefined') lucide.createIcons();

  applyRevealClasses();
  animateCounters();
  initCardTilt();
  initStepProgress();
}
