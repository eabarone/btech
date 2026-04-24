/* BTech — Logo API Helper */

/**
 * Returns the Clearbit logo URL for a given domain.
 * Clearbit is free, no key needed, high quality PNG.
 * Falls back to Google Favicon (sz=128) if Clearbit fails.
 */
export function getLogoUrl(domain) {
  return `https://logo.clearbit.com/${domain}?size=128`;
}

export function getFaviconUrl(domain) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

/**
 * Builds an <img> tag with Clearbit logo, Google favicon as fallback,
 * and Lucide icon as final fallback if both images fail.
 */
export function logoImg(domain, icon, color, size = '3rem') {
  if (!domain) {
    return `<i data-lucide="${icon}" style="width:${size};height:${size};color:${color};"></i>`;
  }

  return `
    <img
      src="${getLogoUrl(domain)}"
      alt="logo"
      style="width:${size};height:${size};object-fit:contain;border-radius:8px;image-rendering:-webkit-optimize-contrast;image-rendering:crisp-edges;"
      onerror="this.onerror=null;
               this.src='${getFaviconUrl(domain)}';
               this.onerror=function(){
                 this.style.display='none';
                 this.insertAdjacentHTML('afterend',
                   '<i data-lucide=\\'${icon}\\' style=\\'width:${size};height:${size};color:${color};\\' ></i>'
                 );
                 if(typeof lucide!=='undefined') lucide.createIcons();
               };"
    />
  `;
}
