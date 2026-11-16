// Header-Hintergrund beim Scrollen (Unterseiten mit data-solid: immer mit Hintergrund)
const header = document.querySelector('header');
const onScroll = () => header.classList.toggle('scrolled', header.hasAttribute('data-solid') || scrollY > 30);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobiles Menü
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger && menu) {
  const close = () => {
    menu.classList.remove('open');
    burger.classList.remove('x');
    burger.setAttribute('aria-expanded', false);
  };
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.classList.toggle('x', open);
    burger.setAttribute('aria-expanded', open);
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

// Sanftes Einblenden beim Scrollen
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Workshop-Filter
const filterButtons = document.querySelectorAll('.ws-filter button');
filterButtons.forEach(b => b.addEventListener('click', () => {
  filterButtons.forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  const f = b.dataset.f;
  document.querySelectorAll('.ws').forEach(w =>
    w.classList.toggle('hide', f !== 'all' && !w.dataset.c.split(' ').includes(f)));
}));

// Kontaktformular → öffnet E-Mail-Programm
// (Platzhalter, bis ein Formular-Dienst wie Web3Forms angebunden ist)
const form = document.getElementById('cform');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const v = id => document.getElementById(id).value;
    const body = `Name: ${v('n')}\nTelefon: ${v('t')}\nE-Mail: ${v('e')}\nInteresse: ${v('i')}\n\n${v('m')}`;
    location.href = `mailto:tamegger.wellnesshome@aon.at?subject=${encodeURIComponent('Anfrage: ' + v('i'))}&body=${encodeURIComponent(body)}`;
  });
}

// Jahreszahl im Footer
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();
