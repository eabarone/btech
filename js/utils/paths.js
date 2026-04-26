/* BTech — Path Utilities */

/**
 * Returns the base URL of the app, works both locally and on GitHub Pages.
 * e.g. '' in localhost, '/btech' in eabarone.github.io/btech
 */
export const BASE = (() => {
  const path = window.location.pathname;
  const lastSlash = path.lastIndexOf('/');
  const base = path.substring(0, lastSlash);
  return base === '/' ? '' : base;
})();

/**
 * Returns an absolute URL for a local asset path.
 * Usage: assetUrl('img/logo.PNG') => '/btech/img/logo.PNG'
 */
export function assetUrl(path) {
  return `${BASE}/${path}`;
}
