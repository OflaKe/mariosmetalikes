// Marios Metalikes — interacțiuni de bază (fără dependințe externe)

document.addEventListener('DOMContentLoaded', () => {
  // An curent în footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Meniu mobil
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // închide meniul la click pe un link (utile pe mobil)
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reveal la scroll (progressive enhancement — conținutul e vizibil fără JS).
  // Plasă de siguranță: dacă un element nu a intrat niciodată în viewport
  // (captură de ecran full-page, crawler, print), îl arătăm oricum după o
  // scurtă pauză, ca să nu rămână text/grafică invizibilă din greșeală.
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    // Abia acum activăm starea "ascuns până la scroll" — până aici elementele
    // au fost vizibile tot timpul, ca să nu depindă corectitudinea paginii de JS.
    document.body.classList.add('js-reveal-ready');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => observer.observe(el));

    // Plasă de siguranță: dacă un element nu a intrat niciodată în viewport
    // (captură de ecran full-page, crawler, print), îl arătăm oricum.
    window.setTimeout(() => {
      revealEls.forEach((el) => el.classList.add('is-visible'));
      observer.disconnect();
    }, 1500);
  }
});
