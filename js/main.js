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
    const aboutPages = [
      'about-us.html',
      'what-we-supply.html',
      'sourcing-approach.html',
      'our-strengths.html',
      'mission-vision.html',
      'leadership.html'
    ];

    const navLinks = document.querySelectorAll('.nav-main a.nav-link, .nav-main .has-dropdown > a.nav-link, .nav-main .has-dropdown > .nav-link');
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
        link.classList.add('active');
      } else if (link.classList.contains('dropdown-toggle') && aboutPages.includes(currentPath)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Also highlight active item in dropdown sub-menu
    const subLinks = document.querySelectorAll('.nav-sub-menu a');
    subLinks.forEach((sub) => {
      const href = sub.getAttribute('href');
      if (href && (href === currentPath || (currentPath === '' && href === 'about-us.html' && sub.getAttribute('href') === 'about-us.html'))) {
        sub.classList.add('active');
      } else {
        sub.classList.remove('active');
      }
    });
  }
  highlightActiveNav();

  /* Build clean, attractive mega menu with product images */
  function buildMegaMenu() {
    const megaPanels = document.querySelectorAll('.dropdown-panel.mega-menu');
    if (!megaPanels.length || typeof KGE_CATEGORIES === 'undefined') return;

    megaPanels.forEach(panel => {
      panel.innerHTML = `
        <div class="mega-clean-wrapper">
          <!-- Top Header -->
          <div class="mega-header-bar">
            <div class="mega-header-title">
              <span class="mega-live-dot"></span>
              <strong>EXPORT COMMODITIES DIRECTORY</strong>
              <span class="mega-header-sub">8 Core Sectors</span>
            </div>
            <a href="shop.html" class="mega-quick-all-link" data-cat="all">Browse Full Catalog →</a>
          </div>

          <!-- Categories Grid with Product Images -->
          <div class="mega-categories-grid">
            ${KGE_CATEGORIES.map(cat => `
              <a href="shop.html?category=${cat.slug}" class="mega-cat-card" data-cat="${cat.slug}">
                <div class="mega-cat-thumb">
                  <img src="${cat.image}" alt="${cat.name}" loading="lazy" onerror="this.onerror=null; this.src='assets/images/spices.jpg';">
                </div>
                <div class="mega-cat-info">
                  <span class="mega-cat-name">${cat.name}</span>
                  <span class="mega-cat-desc">${cat.desc || 'Export Quality'}</span>
                </div>
                <svg class="mega-cat-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            `).join('')}
          </div>

          <!-- Clean Footer -->
          <div class="mega-footer-v2">
            <div class="mega-footer-meta">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Mundra &amp; JNPT Port Stuffing · SGS/APEDA Inspected</span>
            </div>
            <div class="mega-footer-actions">
              <a href="contact-us.html#quote" class="btn-mega-rfq">Request FOB/CIF Quote →</a>
            </div>
          </div>
        </div>
      `;
    });
  }
  buildMegaMenu();

  /* Helper to close mobile menu */
  function closeMobileNav() {
    if (navMain) navMain.classList.remove('mobile-open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    document.querySelectorAll('.has-dropdown.open').forEach((other) => {
      other.classList.remove('open');
      const otherTrigger = other.querySelector('.nav-link');
      if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
    });
  }

  /* Mobile navigation */
  if (navToggle && navMain) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = navMain.classList.toggle('mobile-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  /* Event delegation for all links in navigation */
  if (navMain) {
    navMain.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      // In mobile view, if this link is an accordion toggle itself (e.g. About Us dropdown toggle)
      if (window.innerWidth <= 1024 && link.classList.contains('dropdown-toggle')) {
        return;
      }

      // Check current page
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      const isShopPage = currentPath === 'shop.html' || currentPath === 'shop' || document.body.classList.contains('product-page-body');
      const href = link.getAttribute('href') || '';
      const catSlug = link.dataset.cat || (href.includes('#') ? href.split('#')[1].split('?')[0] : (href.includes('category=') ? (href.match(/category=([^&]+)/) || [])[1] : ''));

      // If user is already on shop.html and clicks a category or shop link
      if (isShopPage && (href.startsWith('shop.html') || href.startsWith('#') || link.classList.contains('mega-cat-card') || link.classList.contains('mega-quick-all-link') || link.classList.contains('mega-poultry-link'))) {
        const targetSlug = catSlug || 'all';

        // Close mobile nav immediately and unfreeze body
        closeMobileNav();

        if (typeof window.setShopCategory === 'function') {
          e.preventDefault();
          window.setShopCategory(targetSlug);

          setTimeout(() => {
            const target = document.getElementById('shopResultsArea') || document.getElementById('productGrid');
            if (target) {
              const headerOffset = 90;
              const elementPosition = target.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({
                top: Math.max(0, offsetPosition),
                behavior: 'smooth'
              });
            }
          }, 80);
        }
        return;
      }

      // For all other normal links in mobile view, close mobile navigation and restore body scroll
      if (window.innerWidth <= 1024) {
        closeMobileNav();
      }
    });
  }

  /* Close mobile menu on outside tap */
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024 && navMain && navMain.classList.contains('mobile-open')) {
      if (!navMain.contains(e.target) && !navToggle.contains(e.target)) {
        closeMobileNav();
      }
    }
  });

  /* Dropdown toggle for both mobile accordion & desktop click */
  dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      const parent = trigger.parentElement;
      const isOpen = parent.classList.contains('open');
      e.preventDefault();

      // Close other open dropdowns for clean UX
      document.querySelectorAll('.has-dropdown.open').forEach((other) => {
        if (other !== parent) {
          other.classList.remove('open');
          const otherTrigger = other.querySelector('.nav-link');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isOpen) {
        parent.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      } else {
        parent.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* Close dropdowns when clicking outside */
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-dropdown')) {
      document.querySelectorAll('.has-dropdown.open').forEach((dropdown) => {
        dropdown.classList.remove('open');
        const trigger = dropdown.querySelector('.nav-link');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    }
  });

  /* Scroll reveal */
  const revealEls = document.querySelectorAll('.reveal');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Hero Product Marquee Slider - Seamless infinite loop ticker */
  function setupProductMarquees() {
    if (reducedMotion) return;
    document.querySelectorAll('[data-rotate-products]').forEach((row) => {
      if (row.querySelector('.trade-products-track')) return;

      const products = Array.from(row.children);
      if (products.length < 2) return;

      const track = document.createElement('div');
      track.className = 'trade-products-track';
      if (row.classList.contains('trade-products-reverse') || row.dataset.direction === 'reverse') {
        track.classList.add('reverse');
      }

      // Move existing children into track
      products.forEach((product) => track.appendChild(product));

      // Ensure at least 8 items per half so infinite marquee loop has zero gaps on all screen sizes
      const repeatCount = products.length <= 4 ? 3 : 1;
      for (let r = 0; r < repeatCount; r++) {
        products.forEach((product) => {
          const duplicate = product.cloneNode(true);
          duplicate.setAttribute('aria-hidden', 'true');
          if (duplicate.matches('a')) duplicate.setAttribute('tabindex', '-1');
          duplicate.querySelectorAll('a').forEach((link) => link.setAttribute('tabindex', '-1'));
          track.appendChild(duplicate);
        });
      }

      row.appendChild(track);
    });
  }
  setupProductMarquees();

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

  /* ==========================================================================
     Interactive Who We Serve Sector Studio (Zero-Box Hub)
     ========================================================================== */
  function setupSectorHub() {
    const streamItems = document.querySelectorAll('.sector-stream-item');
    const stageImg = document.getElementById('stage-img');
    const stageBadge = document.getElementById('stage-badge');
    const stageTitle = document.getElementById('stage-title');
    const stageDesc = document.getElementById('stage-desc');
    const stageFeatures = document.getElementById('stage-features');

    if (!streamItems.length || !stageTitle) return;

    function activateSector(btn) {
      streamItems.forEach((item) => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const title = btn.getAttribute('data-title');
      const badge = btn.getAttribute('data-badge');
      const img = btn.getAttribute('data-img');
      const desc = btn.getAttribute('data-desc');
      const f1 = btn.getAttribute('data-f1');
      const f2 = btn.getAttribute('data-f2');
      const f3 = btn.getAttribute('data-f3');

      if (stageBadge) stageBadge.textContent = badge;
      if (stageTitle) stageTitle.textContent = title;
      if (stageDesc) stageDesc.textContent = desc;

      if (stageImg && img) {
        stageImg.style.opacity = '0.3';
        setTimeout(() => {
          stageImg.src = img;
          stageImg.alt = title;
          stageImg.style.opacity = '1';
        }, 150);
      }

      if (stageFeatures && f1 && f2 && f3) {
        stageFeatures.innerHTML = `
          <li><i class="fas fa-check-circle"></i> <span>${f1}</span></li>
          <li><i class="fas fa-check-circle"></i> <span>${f2}</span></li>
          <li><i class="fas fa-check-circle"></i> <span>${f3}</span></li>
        `;
      }
    }

    streamItems.forEach((btn) => {
      btn.addEventListener('click', () => activateSector(btn));
      btn.addEventListener('mouseenter', () => activateSector(btn));
    });
  }
  setupSectorHub();

  /* Mount Global Floating Contact Shortcuts (Bottom-Left Call & Bottom-Right WhatsApp) */
  function mountFloatingActionButtons() {
    if (document.getElementById('kgeFloatingActions')) return;

    const wrapper = document.createElement('div');
    wrapper.id = 'kgeFloatingActions';
    wrapper.className = 'kge-floating-actions';
    wrapper.setAttribute('role', 'region');
    wrapper.setAttribute('aria-label', 'Quick Contact Floating Actions');

    wrapper.innerHTML = `
      <!-- Bottom Left Call Button -->
      <a href="tel:+919726396898" class="kge-floating-btn kge-floating-call" aria-label="Call Kanha Global Exports at +91 97263 96898">
        <span class="kge-float-pulse"></span>
        <span class="kge-float-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z"/>
          </svg>
        </span>
        <span class="kge-float-tooltip">Call +91 97263 96898</span>
      </a>

      <!-- Bottom Right WhatsApp Button -->
      <a href="https://wa.me/919726396898?text=Hello%20Kanha%20Global%20Exports%20Team%2C%20I%20am%20interested%20in%20sourcing%20Indian%20agro%20and%20food%20commodities.%20Please%20share%20details." target="_blank" rel="noopener noreferrer" class="kge-floating-btn kge-floating-whatsapp" aria-label="Chat with Kanha Global Exports on WhatsApp">
        <span class="kge-float-pulse"></span>
        <span class="kge-float-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
          </svg>
        </span>
        <span class="kge-float-tooltip">Chat on WhatsApp</span>
      </a>
    `;

    document.body.appendChild(wrapper);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountFloatingActionButtons);
  } else {
    mountFloatingActionButtons();
  }
})();
