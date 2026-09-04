# Marios Metalikes — site de prezentare

Landing page pentru o firmă de construcții și confecții metalice (hale industriale, strungărie, confecții metalice, porți/garduri/balustrade, reparații și sudură utilaje grele). Construit ca HTML/CSS/JS static, fără framework sau build step — se poate deschide direct sau publica pe orice hosting static (Netlify, Vercel, GitHub Pages, cPanel etc.).

## Structură

```
.
├── index.html          # toată pagina (header, hero, servicii, proiecte, despre, CTA, footer)
├── styles.css           # tot stilul, variabile de culoare în :root
├── script.js            # meniu mobil, an curent în footer, animații la scroll
├── robots.txt
├── sitemap.xml
└── assets/
    └── favicon.svg       # monogramă "M" pe fundal navy
```

## Ce are deja

- Design complet responsive, fără dependințe externe în afară de Google Fonts.
- Secțiuni: hero, puncte forte (5+ ani experiență / execuție proprie / lucrări durabile), servicii (5 categorii, numerotate 01–05), proiecte realizate (3 exemple), despre, banner CTA cu telefon, footer.
- Ilustrațiile din hero, proiecte și secțiunea despre sunt desene tehnice (SVG, stil "blueprint") create special pentru acest site — nu fotografii reale — păstrate intenționat ca placeholder de design până când sunt disponibile fotografii proprii de pe șantiere.
- **SEO / AEO pregătit din start**: meta tags Open Graph + Twitter Card, `<link rel="canonical">`, JSON-LD `HomeAndConstructionBusiness` (cu `areaServed`: Timișoara), `robots.txt` + `sitemap.xml`.
- Accesibilitate de bază: skip-link, `alt`/`aria-hidden` pe grafice, `aria-*` pe navigație și meniul mobil, `prefers-reduced-motion`-friendly (conținutul e vizibil fără JS).

## Ce lipsește intenționat (necesită date reale, nu am inventat nimic în plus față de machetă)

Vezi și comentariul din capul fișierului `index.html` — pe scurt:

1. **Domeniul final** — momentan e placeholder `https://mariosmetalikes.ro/` în canonical, Open Graph, `robots.txt` și `sitemap.xml`. De înlocuit peste tot înainte de lansare.
2. **Fotografii reale** — ilustrațiile SVG (hală, poartă, utilaj, atelier) sunt un placeholder de design; de înlocuit cu fotografii reale de pe proiecte finalizate.
3. **Pagină de Politică de confidențialitate** — link-ul din footer e deocamdată text, nu link activ.
4. **Google Business Profile** — de creat ca *service area business* pentru zona Timișoara, dacă nu există deja.

Telefonul, e-mailul și zona de operare (Timișoara) afișate în site sunt cele din machetă — de confirmat/actualizat înainte de lansare dacă s-au schimbat.

## Preview local

Nu are nevoie de build. Deschizi `index.html` direct în browser, sau pentru un mediu mai aproape de producție:

```bash
python3 -m http.server 8000
# apoi deschide http://localhost:8000
```
