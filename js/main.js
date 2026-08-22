(function () {
  'use strict';

  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMain = document.querySelector('.nav-main');
  const dropdownTriggers = document.querySelectorAll('.has-dropdown > .nav-link');

  /* Header scroll state */
  function onScroll() {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Highlight current page nav link */
  function highlightActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-main a.nav-link, .nav-main .has-dropdown > .nav-link');
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  highlightActiveNav();

  /* Mobile navigation */
  if (navToggle && navMain) {
    navToggle.addEventListener('click', () => {
      const open = navMain.classList.toggle('mobile-open');
      navToggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    navMain.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMain.classList.remove('mobile-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* Mobile dropdown toggle */
  dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        const parent = trigger.parentElement;
        parent.classList.toggle('open');
      }
    });
  });

  /* Build mega menu from categories data */
  function buildMegaMenu() {
    const megaGrid = document.querySelector('.mega-grid');
    if (!megaGrid || typeof KGE_CATEGORIES === 'undefined') return;

    megaGrid.innerHTML = KGE_CATEGORIES.map((cat) =>
      `<a href="shop.html#${cat.slug}">${cat.name}</a>`
    ).join('');

    const poultryLink = document.querySelector('.mega-poultry-link');
    if (poultryLink && typeof KGE_POULTRY_DIVISION !== 'undefined') {
      poultryLink.href = 'poultry-farm-products.html';
    }
  }
  buildMegaMenu();

  /* Scroll reveal */
  const revealEls = document.querySelectorAll('.reveal');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function revealElement(el) {
    el.classList.add('visible');
  }

  function checkRevealInView() {
    revealEls.forEach((el) => {
      if (el.classList.contains('visible')) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) revealElement(el);
    });
  }

  if (revealEls.length && !reducedMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
    checkRevealInView();
    window.addEventListener('scroll', checkRevealInView, { passive: true });
  } else {
    revealEls.forEach(revealElement);
  }

  /* Lazy load images */
  const lazyImages = document.querySelectorAll('img[data-src]');

  function loadLazyImage(img) {
    if (!img.dataset.src) return;
    img.src = img.dataset.src;
    if (img.dataset.srcset) img.srcset = img.dataset.srcset;
    img.removeAttribute('data-src');
    img.classList.add('loaded');
  }

  function checkLazyInView() {
    lazyImages.forEach((img) => {
      if (!img.dataset.src) return;
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) loadLazyImage(img);
    });
  }

  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadLazyImage(entry.target);
          imgObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '100px' });
    lazyImages.forEach((img) => imgObserver.observe(img));
    checkLazyInView();
    window.addEventListener('scroll', checkLazyInView, { passive: true });
  } else {
    lazyImages.forEach(loadLazyImage);
  }

  /* About Us Clean Premium Process Flow Interactivity */
  const cleanStepBullets = document.querySelectorAll('.proc-step-bullet');
  const cleanProcCards = document.querySelectorAll('.proc-clean-card');
  const cleanProgressBar = document.getElementById('cleanProcessProgress');

  if (cleanProcCards.length) {
    let currentCleanStep = 0;
    let cleanTimer = null;
    const totalSteps = cleanProcCards.length;

    function setCleanStep(index) {
      currentCleanStep = index;
      const progressPct = ((index + 1) / totalSteps) * 100;
      if (cleanProgressBar) {
        cleanProgressBar.style.width = `${progressPct}%`;
      }

      cleanStepBullets.forEach((bullet, idx) => {
        if (idx === index) {
          bullet.classList.add('active');
        } else {
          bullet.classList.remove('active');
        }
      });

      cleanProcCards.forEach((card, idx) => {
        if (idx === index) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    }

    function startCleanAutoCycle() {
      stopCleanAutoCycle();
      cleanTimer = setInterval(() => {
        setCleanStep((currentCleanStep + 1) % totalSteps);
      }, 5000);
    }

    function stopCleanAutoCycle() {
      if (cleanTimer) {
        clearInterval(cleanTimer);
        cleanTimer = null;
      }
    }

    cleanStepBullets.forEach((bullet) => {
      bullet.addEventListener('click', () => {
        const stepIdx = parseInt(bullet.getAttribute('data-step') || '0', 10);
        setCleanStep(stepIdx);
        startCleanAutoCycle();
      });
    });

    cleanProcCards.forEach((card) => {
      card.addEventListener('click', () => {
        const stepIdx = parseInt(card.getAttribute('data-step') || '0', 10);
        setCleanStep(stepIdx);
        startCleanAutoCycle();
      });
      card.addEventListener('mouseenter', stopCleanAutoCycle);
      card.addEventListener('mouseleave', startCleanAutoCycle);
    });

    setCleanStep(0);
    startCleanAutoCycle();
  }
})();
