/* BTech — Footer Component */

export function renderFooter() {
  const footer = document.getElementById('footer');
  footer.innerHTML = `
    <footer class="footer">
      <div class="footer__grid">
        <div class="footer__col">
          <div class="footer__brand-name">B<span>Tech</span></div>
          <p class="footer__tagline">
            Una plataforma educativa diseñada para reducir la brecha digital,
            ayudando a personas a aprender herramientas digitales de forma sencilla y accesible.
          </p>
        </div>
        <div class="footer__col">
          <h4>Categorías</h4>
          <ul>
            <li><a href="#/catalogo?cat=social">Redes Sociales</a></li>
            <li><a href="#/catalogo?cat=ecommerce">Comercio Electrónico</a></li>
            <li><a href="#/catalogo?cat=office">Ofimática</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>BTech</h4>
          <ul>
            <li><a href="#/nosotros">Sobre Nosotros</a></li>
            <li><a href="#/buscar">Buscar</a></li>
            <li><a href="#/">Inicio</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© ${new Date().getFullYear()} BTech — Aprender, conectar y trasformar</span>
        <span>Versión 1.0</span>
      </div>
    </footer>
  `;
}
