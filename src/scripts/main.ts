// =========================================================================
// ANIMATION ENGINE — Horizontal "sideways" experience + sketch background
// smooth scroll · pinned horizontal track · container reveals · HUD · cursor
// =========================================================================
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

// always open on the front page after a refresh (don't restore scroll position)
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = window.matchMedia('(pointer: fine)').matches;

let lenis: Lenis | null = null;

function initLenis() {
  if (reduce) return;
  lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis!.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function initAnchors() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector<HTMLElement>(id);
      if (!el) return;
      e.preventDefault();
      document.documentElement.classList.remove('menu-open');
      lenis?.start();
      if (lenis) lenis.scrollTo(el, { offset: -70, duration: 1.2 });
      else el.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function initMagnetic() {
  if (!fine || reduce) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const s = 0.3;
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' });
    el.addEventListener('mousemove', (e) => { const r = el.getBoundingClientRect(); xTo((e.clientX - (r.left + r.width / 2)) * s); yTo((e.clientY - (r.top + r.height / 2)) * s); });
    el.addEventListener('mouseleave', () => { xTo(0); yTo(0); });
  });
}

function initClock() {
  const el = document.querySelector<HTMLElement>('[data-clock]');
  if (!el) return;
  const hourH = document.querySelector<SVGLineElement>('[data-hand-hour]');
  const minH = document.querySelector<SVGLineElement>('[data-hand-min]');
  const secH = document.querySelector<SVGLineElement>('[data-hand-sec]');
  const spin = (hand: SVGLineElement | null, deg: number) => hand && hand.setAttribute('transform', `rotate(${deg} 20 20)`);
  const pad = (n: number) => String(n).padStart(2, '0');
  const upd = () => {
    const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).formatToParts(new Date());
    const get = (t: string) => Number(parts.find((p) => p.type === t)?.value || 0);
    const h = get('hour'), m = get('minute'), s = get('second');
    el.textContent = `Mumbai, ${pad(h)}:${pad(m)}:${pad(s)}`;
    spin(secH, s * 6);
    spin(minH, m * 6 + s * 0.1);
    spin(hourH, (h % 12) * 30 + m * 0.5);
  };
  upd(); setInterval(upd, 1000);
}

function initWords() {
  const box = document.querySelector<HTMLElement>('[data-words]');
  if (!box) return;
  const words = Array.from(box.children) as HTMLElement[];
  if (words.length < 2) return;
  let i = 0;
  setInterval(() => { words[i].classList.remove('is-on'); i = (i + 1) % words.length; words[i].classList.add('is-on'); }, 2200);
}

function initMarquee() {
  document.querySelectorAll<HTMLElement>('[data-marquee]').forEach((m) => {
    const row = m.querySelector<HTMLElement>('.marquee__row');
    if (!row || row.dataset.mq === 'done') return;
    row.dataset.mq = 'done';
    row.innerHTML += row.innerHTML;
    const half = row.scrollWidth / 2;
    if (!half || reduce) return;
    const speed = parseFloat(m.getAttribute('data-speed') || '70');
    gsap.fromTo(row, { x: 0 }, { x: -half, duration: half / speed, ease: 'none', repeat: -1 });
  });
}

function splitLines(el: HTMLElement) {
  if (el.dataset.split === 'done') return Array.from(el.querySelectorAll<HTMLElement>('.line'));
  const split = new SplitType(el, { types: 'lines' });
  (split.lines || []).forEach((line) => {
    const wrap = document.createElement('span');
    wrap.className = 'line-mask';
    line.parentNode?.insertBefore(wrap, line);
    wrap.appendChild(line);
  });
  el.dataset.split = 'done';
  return split.lines || [];
}

/* reveals — work in both vertical (container=null) and horizontal (container=tween) */
function setupReveals(container: gsap.core.Tween | null) {
  const s = (h: string, v: string) => (container ? h : v);

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    if (reduce) { gsap.set(el, { opacity: 1, y: 0 }); return; }
    gsap.set(el, { opacity: 0, y: 32 });
    ScrollTrigger.create({ trigger: el, containerAnimation: container || undefined, start: s('left 90%', 'top 88%'),
      onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }) });
  });

  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    const lines = splitLines(el);
    if (reduce) return;
    gsap.set(lines, { yPercent: 110 });
    ScrollTrigger.create({ trigger: el, containerAnimation: container || undefined, start: s('left 92%', 'top 88%'),
      onEnter: () => gsap.to(lines, { yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: 0.09 }) });
  });

  document.querySelectorAll<HTMLElement>('[data-img]').forEach((box) => {
    if (reduce) return;
    gsap.set(box, { clipPath: 'inset(0% 100% 0% 0%)' });
    gsap.to(box, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none',
      scrollTrigger: { trigger: box, containerAnimation: container || undefined, start: s('left 92%', 'top 90%'), end: s('left 48%', 'top 45%'), scrub: true } });
  });

  document.querySelectorAll<HTMLElement>('[data-art]').forEach((art) => {
    const paths = art.querySelectorAll<SVGGeometryElement>('.draw');
    if (reduce) { paths.forEach((p) => (p.style.strokeDashoffset = '0')); return; }
    ScrollTrigger.create({ trigger: art, containerAnimation: container || undefined, start: s('left 82%', 'top 82%'),
      onEnter: () => gsap.to(paths, { strokeDashoffset: 0, duration: 1.4, ease: 'power2.out', stagger: 0.1 }) });
  });

  document.querySelectorAll<HTMLElement>('.doodle').forEach((d) => {
    const paths = d.querySelectorAll<SVGGeometryElement>('.draw');
    if (!paths.length) return;
    if (reduce) { paths.forEach((p) => (p.style.strokeDashoffset = '0')); return; }
    ScrollTrigger.create({ trigger: d, containerAnimation: container || undefined, start: s('left 98%', 'top 96%'),
      onEnter: () => gsap.to(paths, { strokeDashoffset: 0, duration: 1.2, ease: 'power2.out' }) });
  });
}

function initHeroSplit() {
  const lines = document.querySelectorAll('.hero-title .line');
  if (lines.length && !reduce) gsap.set(lines, { yPercent: 115 });
}

function heroIntro() {
  const tl = gsap.timeline();
  const heroLines = document.querySelectorAll('.hero-title .line');
  if (heroLines.length) tl.to(heroLines, { yPercent: 0, duration: 1.2, ease: 'power4.out', stagger: 0.1 });
  tl.fromTo('[data-hero-fade]', { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.09 }, '-=0.9');
  return tl;
}

/* lqve-style intro: white → outline name → name fills white as a split
   black/red background sweeps in from the edges, then the whole panel lifts */
function runPreloader(then: () => void) {
  const pre = document.querySelector<HTMLElement>('[data-preloader]');
  if (!pre || reduce) {
    if (pre) pre.style.display = 'none';
    document.querySelectorAll('[data-hero-fade]').forEach((e) => ((e as HTMLElement).style.opacity = '1'));
    document.querySelectorAll<HTMLElement>('.hero-title .line').forEach((e) => (e.style.transform = 'none'));
    then(); return;
  }
  const words = pre.querySelectorAll('.intro__w');
  const strokes = pre.querySelectorAll('.intro__stroke');
  const fills = pre.querySelectorAll('.intro__fill');
  const halfK = pre.querySelector('.intro__half--k');
  const halfR = pre.querySelector('.intro__half--r');

  gsap.set([halfK, halfR], { scaleX: 0 });
  gsap.set(fills, { opacity: 0 });
  gsap.set(words, { yPercent: 60, opacity: 0 });

  const tl = gsap.timeline();
  // 1 — outline name rises in on white
  tl.to(words, { yPercent: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.12 }, 0.2);
  // 2 — sideways sweep left→right: black takes 3/4, red completes the right 1/4; name fills white
  tl.addLabel('split', '+=0.4');
  tl.to(halfK, { scaleX: 1, duration: 0.8, ease: 'power4.inOut' }, 'split');
  tl.to(halfR, { scaleX: 1, duration: 0.5, ease: 'power4.inOut' }, 'split+=0.5');
  tl.to(fills, { opacity: 1, duration: 0.45, ease: 'power2.out' }, 'split+=0.3');
  tl.to(strokes, { opacity: 0, duration: 0.45, ease: 'power2.out' }, 'split+=0.3');
  // 3 — hold, then the whole intro lifts to reveal the hero
  tl.to(pre, { yPercent: -100, duration: 0.95, ease: 'power4.inOut' }, '+=0.5');
  tl.set(pre, { display: 'none' });
  tl.add(() => then(), '<0.15');
  tl.add(heroIntro(), '-=0.55');
}

function initNavMenu() {
  document.querySelector('[data-menu-btn]')?.addEventListener('click', () => {
    const open = document.documentElement.classList.toggle('menu-open');
    if (open) lenis?.stop(); else lenis?.start();
  });
}

function initWorkDetails() {
  let current: HTMLElement | null = null;
  const open = (i: string | null) => {
    if (i == null) return;
    const d = document.getElementById('wd-' + i);
    if (!d) return;
    d.hidden = false;
    void d.offsetWidth; // force reflow so the opacity transition runs (rAF is paused in hidden tabs)
    d.classList.add('is-open');
    current = d;
    lenis?.stop();
    document.documentElement.classList.add('detail-open');
  };
  const close = () => {
    if (!current) return;
    const d = current; current = null;
    d.classList.remove('is-open');
    lenis?.start();
    document.documentElement.classList.remove('detail-open');
    const hide = () => { if (!d.classList.contains('is-open')) d.hidden = true; };
    d.addEventListener('transitionend', hide, { once: true });
    setTimeout(hide, 700);
  };
  document.querySelectorAll<HTMLElement>('[data-open]').forEach((el) =>
    el.addEventListener('click', (e) => { e.preventDefault(); open(el.getAttribute('data-open')); }));
  document.querySelectorAll<HTMLElement>('[data-close]').forEach((el) => el.addEventListener('click', close));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

function boot() {
  window.scrollTo(0, 0);
  initLenis();
  initAnchors();
  initNavMenu();
  initMagnetic();
  initClock();
  initWords();
  initMarquee();
  initWorkDetails();
  initHeroSplit();

  setupReveals(null);

  ScrollTrigger.refresh();
}

document.fonts.ready.then(() => { boot(); runPreloader(() => ScrollTrigger.refresh()); });
window.addEventListener('load', () => ScrollTrigger.refresh());
