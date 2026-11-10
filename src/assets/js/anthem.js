/* Anthem Epoxy Flooring — interactions */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.remove('no-js');
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var q = function (s, c) { return (c || document).querySelector(s); };
  var qa = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* Header: overlay → solid */
  var hdr = q('[data-hdr]');
  var solid = function () { if (hdr) hdr.classList.toggle('is-solid', window.scrollY > 40 || !hdr.classList.contains('hdr--overlay')); };
  window.addEventListener('scroll', solid, { passive: true }); solid();

  /* Services dropdown */
  qa('[data-dd]').forEach(function (btn) {
    var li = btn.parentElement;
    var set = function (v) { li.classList.toggle('is-open', v); btn.setAttribute('aria-expanded', String(v)); };
    btn.addEventListener('click', function (e) { e.stopPropagation(); set(!li.classList.contains('is-open')); });
    li.addEventListener('mouseenter', function () { if (matchMedia('(hover:hover)').matches) set(true); });
    li.addEventListener('mouseleave', function () { if (matchMedia('(hover:hover)').matches) set(false); });
    document.addEventListener('click', function (e) { if (!li.contains(e.target)) set(false); });
    li.addEventListener('keydown', function (e) { if (e.key === 'Escape') { set(false); btn.focus(); } });
  });

  /* Mobile menu */
  var menu = q('[data-menu]'), mnav = q('[data-mnav]');
  if (menu && mnav) menu.addEventListener('click', function () {
    var open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open)); mnav.hidden = !open;
    if (hdr) hdr.classList.toggle('is-solid', open || window.scrollY > 40 || !hdr.classList.contains('hdr--overlay'));
  });

  /* Quote drawer (header form) */
  var drawer = q('[data-drawer]'), lastFocus = null;
  var focusables = function () { return qa('a[href], button:not([disabled]), input:not([tabindex="-1"]), select, textarea', drawer).filter(function (el) { return el.offsetParent !== null; }); };
  var trap = function (e) {
    if (e.key === 'Escape') return closeDrawer();
    if (e.key !== 'Tab') return;
    var f = focusables(); if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  };
  function openDrawer(trigger) {
    if (!drawer) return;
    lastFocus = trigger || document.activeElement;
    if (mnav && !mnav.hidden) { mnav.hidden = true; menu.setAttribute('aria-expanded', 'false'); }
    drawer.hidden = false; document.body.classList.add('is-locked');
    requestAnimationFrame(function () { drawer.classList.add('is-open'); });
    qa('[data-drawer-open]').forEach(function (b) { b.setAttribute('aria-expanded', 'true'); });
    setTimeout(function () { var i = q('input', drawer); i && i.focus(); }, 300);
    document.addEventListener('keydown', trap);
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open'); document.body.classList.remove('is-locked');
    qa('[data-drawer-open]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    document.removeEventListener('keydown', trap);
    setTimeout(function () { drawer.hidden = true; if (lastFocus) lastFocus.focus(); }, calm ? 0 : 420);
  }
  qa('[data-drawer-open]').forEach(function (b) { b.addEventListener('click', function () { openDrawer(b); }); });
  qa('[data-drawer-close]').forEach(function (b) { b.addEventListener('click', closeDrawer); });

  /* Forms */
  var rules = {
    name: function (v) { return v.trim().length < 2 ? 'Please add your name.' : ''; },
    phone: function (v) { return v.replace(/\D/g, '').length < 10 ? 'A 10-digit phone number, please.' : ''; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'That email doesn’t look quite right.'; },
    project: function (v) { return v ? '' : 'Pick the closest project type.'; }
  };
  var check = function (el) {
    var r = rules[el.name]; if (!r) return true;
    var m = r(el.value || ''), box = el.closest('.lf__f'), out = box && q('.lf__e', box);
    if (box) box.classList.toggle('is-bad', !!m);
    if (out) out.textContent = m;
    if (m) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
    return !m;
  };
  qa('[data-lead-form]').forEach(function (f) {
    var out = q('.lf__out', f);
    qa('input,select', f).forEach(function (el) {
      ['input', 'change'].forEach(function (ev) { el.addEventListener(ev, function () { if (el.closest('.is-bad')) check(el); }); });
      el.addEventListener('blur', function () { if (el.value) check(el); });
    });
    var ph = q('input[type=tel]', f);
    ph && ph.addEventListener('input', function () {
      var d = ph.value.replace(/\D/g, ''); if (d.length === 11 && d[0] === '1') d = d.slice(1); d = d.slice(0, 10);
      if (d.length >= 7) ph.value = '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6);
    });
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = qa('input[name],select[name]', f).filter(function (el) { return !check(el); });
      if (bad.length) { out.className = 'lf__out bad'; out.textContent = 'Please check the highlighted fields.'; bad[0].focus(); return; }
      var data = {}; new FormData(f).forEach(function (v, k) { data[k] = v; }); data.page = location.pathname;
      f.classList.add('is-busy'); out.className = 'lf__out'; out.textContent = 'Sending…';
      fetch(f.getAttribute('action'), { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { return r.json().then(function (j) { return { ok: r.ok && j.ok, j: j }; }, function () { return { ok: false, j: {} }; }); })
        .then(function (res) {
          f.classList.remove('is-busy');
          if (res.ok) { f.classList.add('is-done'); out.className = 'lf__out ok'; out.textContent = 'Got it, ' + data.name.split(' ')[0] + ' — thanks! We’ll be in touch within one business day.'; }
          else { out.className = 'lf__out bad'; out.textContent = res.j.error || 'Something went wrong. Please try again or call us.'; }
        })
        .catch(function () { f.classList.remove('is-busy'); out.className = 'lf__out bad'; out.textContent = 'Network hiccup — please try again or give us a call.'; });
    });
  });

  /* Services list → sticky image swap */
  var target = q('[data-swap-target]');
  if (target) {
    var fig = target.closest('figure'), t;
    qa('[data-swap]').forEach(function (a) {
      var go = function () {
        qa('[data-swap]').forEach(function (x) { x.classList.toggle('is-on', x === a); });
        if (target.getAttribute('srcset') === a.dataset.swap) return;
        clearTimeout(t); fig.classList.add('is-swapping');
        t = setTimeout(function () { target.setAttribute('srcset', a.dataset.swap); target.setAttribute('src', a.dataset.swap.split(',').pop().trim().split(' ')[0]); fig.classList.remove('is-swapping'); }, calm ? 0 : 220);
      };
      a.addEventListener('mouseenter', go); a.addEventListener('focus', go);
    });
  }

  /* Gallery filters */
  var gal = q('[data-gal]');
  qa('[data-filter]').forEach(function (b) {
    b.addEventListener('click', function () {
      qa('[data-filter]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      var c = b.dataset.filter;
      qa('.gal__item', gal).forEach(function (it) { it.classList.toggle('is-hidden', c !== 'all' && it.dataset.cat !== c); });
    });
  });

  /* Reveals */
  var els = qa('.rise, .img-in');
  if (calm || !('IntersectionObserver' in window)) els.forEach(function (e) { e.classList.add('in'); });
  else {
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (e) {
      var sib = e.parentElement ? qa(':scope > .rise', e.parentElement) : [], i = sib.indexOf(e);
      if (i > 0) e.style.setProperty('--dl', Math.min(i * 0.08, 0.4) + 's');
      io.observe(e);
    });
  }

  /* Hero entrance + parallax */
  var hero = q('.hero');
  if (hero) requestAnimationFrame(function () { hero.classList.add('is-ready'); });
  var px = qa('.hero, .fullcta');
  if (!calm && px.length) {
    var busy = false;
    var run = function () {
      px.forEach(function (el) {
        var r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
        if (el.classList.contains('hero')) el.style.setProperty('--hy', (window.scrollY * 0.25).toFixed(1) + 'px');
        else el.style.setProperty('--py', ((r.top + r.height / 2 - innerHeight / 2) * -0.14).toFixed(1) + 'px');
      });
      busy = false;
    };
    window.addEventListener('scroll', function () { if (!busy) { busy = true; requestAnimationFrame(run); } }, { passive: true }); run();
  }

  /* Counters */
  if (!calm && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (en) {
      en.forEach(function (x) {
        if (!x.isIntersecting) return; co.unobserve(x.target);
        var el = x.target, end = +el.dataset.count, s0 = null; if (!end) return;
        var step = function (ts) { s0 = s0 || ts; var k = Math.min((ts - s0) / 1300, 1); el.textContent = Math.max(1, Math.round(end * (1 - Math.pow(1 - k, 3)))); if (k < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    qa('[data-count]').forEach(function (c) { co.observe(c); });
  }
})();
