/* BTech — Theme Manager (Dark / Light Mode) */

const STORAGE_KEY = 'btech-theme';

export function getTheme() {
  return localStorage.getItem(STORAGE_KEY) ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY, theme);
  updateToggleIcon(theme);
}

function updateToggleIcon(theme) {
  const btn  = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  if (!btn || !icon) return;

  if (theme === 'dark') {
    icon.setAttribute('data-lucide', 'sun');
    btn.setAttribute('aria-label', 'Cambiar a modo claro');
  } else {
    icon.setAttribute('data-lucide', 'moon');
    btn.setAttribute('aria-label', 'Cambiar a modo oscuro');
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

export function toggleTheme() {
  const current = getTheme();
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

export function initThemeToggle() {
  // Apply saved theme immediately
  applyTheme(getTheme());

  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', toggleTheme);
}

// Apply theme as early as possible to avoid flash
applyTheme(getTheme());
