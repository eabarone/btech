/* BTech — SPA Hash Router */
import { setActiveNavLink } from './components/navbar.js';

const routes = {};

export function addRoute(path, handler) {
  routes[path] = handler;
}

export function navigate(path) {
  window.location.hash = '#' + path;
}

export function getParams() {
  const hash = window.location.hash.slice(1) || '/';
  const [path, qs] = hash.split('?');
  const params = {};
  if (qs) {
    qs.split('&').forEach(pair => {
      const [k, v] = pair.split('=');
      params[decodeURIComponent(k)] = decodeURIComponent(v || '');
    });
  }
  return { path: path || '/', params };
}

async function resolveRoute() {
  const { path, params } = getParams();

  setActiveNavLink(path);

  // Exact match
  if (routes[path]) {
    await routes[path](params);
  } else {
    // Pattern match: /herramienta/:id
    let matched_route = false;
    for (const pattern of Object.keys(routes)) {
      const patternParts = pattern.split('/');
      const pathParts    = path.split('/');
      if (patternParts.length !== pathParts.length) continue;

      const matched = {};
      let ok = true;
      for (let i = 0; i < patternParts.length; i++) {
        if (patternParts[i].startsWith(':')) {
          matched[patternParts[i].slice(1)] = pathParts[i];
        } else if (patternParts[i] !== pathParts[i]) {
          ok = false;
          break;
        }
      }
      if (ok) {
        await routes[pattern]({ ...params, ...matched });
        matched_route = true;
        break;
      }
    }
    // 404 fallback
    if (!matched_route && routes['*']) await routes['*'](params);
  }

}

export function initRouter() {
  window.addEventListener('hashchange', resolveRoute);
  resolveRoute();
}
