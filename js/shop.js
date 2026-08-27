/**
 * Kanha Global Exports - Modern Clean Shop / Export Products Page Script
 * Features: Live search, category tabs & sidebar sync, sorting, pagination, and instant RFQ modal.
 */

(function() {
  'use strict';

  function initShopPage() {
    // DOM Elements
    const heroSearchInput = document.getElementById('heroSearchInput');
    const heroSearchClear = document.getElementById('heroSearchClear');
    const topCatSlider = document.getElementById('topCatSlider');
    const sidebarCatList = document.getElementById('sidebarCatList');
    const productGrid = document.getElementById('productGrid');
    const paginationWrapper = document.getElementById('paginationWrapper');
    const activeCategoryTitle = document.getElementById('activeCategoryTitle');
    const activeResultsCount = document.getElementById('activeResultsCount');
    const sortSelect = document.getElementById('shopSortSelect');
    const btnResetFilters = document.getElementById('btnResetFilters');

    // RFQ Modal Elements
    const rfqModal = document.getElementById('rfqModal');
    const rfqModalClose = document.getElementById('rfqModalClose');
    const rfqProductName = document.getElementById('rfqProductName');
    const rfqProductCategory = document.getElementById('rfqProductCategory');
    const rfqForm = document.getElementById('rfqForm');
    const btnRfqWhatsApp = document.getElementById('btnRfqWhatsApp');

    if (!productGrid) return;

    // Categories List (Clean names, no emojis)
    const categoryList = [
      { slug: 'all', name: 'All Products' },
      { slug: 'spices', name: 'Spices & Herbs' },
      { slug: 'basmati-rice', name: 'Basmati Rice' },
      { slug: 'non-basmati-rice', name: 'Non-Basmati Rice' },
      { slug: 'pulses', name: 'Pulses & Grains' },
      { slug: 'seafood', name: 'Seafood (Frozen)' },
      { slug: 'fresh-fruits', name: 'Fresh Fruits' },
      { slug: 'fresh-vegetables', name: 'Fresh Vegetables' },
      { slug: 'dehydrated', name: 'Dehydrated Products' },
      { slug: 'oil-seeds', name: 'Oil Seeds' },
      { slug: 'groundnuts-cashews', name: 'Groundnuts & Cashews' },
      { slug: 'cereals-millets', name: 'Cereals & Millets' },
      { slug: 'flours-grains', name: 'Flours & Grains' },
      { slug: 'tea-coffee', name: 'Tea & Coffee' },
      { slug: 'honey-agro', name: 'Honey & Agro Products' },
      { slug: 'processed-foods', name: 'Processed Foods' },
      { slug: 'marine', name: 'Marine Products' }
    ];

    // Category Alias Map for seamless deep-linking
    const categoryAliases = {
      'rice': 'basmati-rice',
      'basmati': 'basmati-rice',
      'non-basmati': 'non-basmati-rice',
      'spices-herbs': 'spices',
      'spice': 'spices',
      'pulses-grains': 'pulses',
      'grains': 'pulses',
      'seafood-frozen': 'seafood',
      'fruits-vegetables': 'fresh-fruits',
      'fruits': 'fresh-fruits',
      'vegetables': 'fresh-vegetables',
      'dehydrated-products': 'dehydrated',
      'cashew': 'groundnuts-cashews',
      'cashews': 'groundnuts-cashews',
      'groundnuts': 'groundnuts-cashews',
      'raisins': 'fresh-fruits',
      'marine-products': 'marine'
    };

    // State
    const urlParams = new URLSearchParams(window.location.search);
    let rawCategory = urlParams.get('category') || (window.location.hash ? window.location.hash.replace('#', '') : '') || 'all';
    rawCategory = rawCategory.toLowerCase();
    let currentCategory = categoryAliases[rawCategory] || rawCategory;
    let searchQuery = (urlParams.get('search') || '').trim();
    let currentSort = 'default';
    let currentPage = 1;
    const itemsPerPage = 12;

    if (!categoryList.some(c => c.slug === currentCategory)) {
      currentCategory = 'all';
    }

    if (heroSearchInput && searchQuery) {
      heroSearchInput.value = searchQuery;
      if (heroSearchClear) heroSearchClear.style.display = 'block';
    }

    // Get all available products from global dataset
    function getAllProducts() {
      if (window.TRADE_PRODUCTS && window.TRADE_PRODUCTS.length) {
        return window.TRADE_PRODUCTS;
      }
      if (window.KGE_PRODUCTS && window.KGE_PRODUCTS.trade && window.KGE_PRODUCTS.trade.length) {
        return window.KGE_PRODUCTS.trade;
      }
      return [];
    }

    // Specific product images
    const productSpecificImages = {
      'turmeric-finger-powder': 'https://shivaspice.com/wp-content/uploads/2021/01/turmeric_finger.jpg',
      'red-chilli-sannam-teja': 'https://shivaspice.com/wp-content/uploads/2021/01/shivaspice_chilli_powder.jpg',
      'cumin-seeds-jeera': 'https://shivaspice.com/wp-content/uploads/2021/01/shivaspice_cumin_powder.jpg',
      'coriander-seeds-dhaniya': 'https://shivaspice.com/wp-content/uploads/2021/01/shivaspice_coriander_powder.jpg',
      'black-pepper-garbled': 'https://shivaspice.com/wp-content/uploads/2021/01/Buy_Black_Pepper_Shivaspice.jpg',
      'green-cardamom-elaichi': 'https://shivaspice.com/wp-content/uploads/2021/01/Buy_Green_Cardamom_Shivaspice.jpg',
      'fennel-seeds-saunf': 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
      'fenugreek-seeds-methi': 'assets/images/products/fenugreek-seeds.png',
      'mustard-seeds-rai': 'assets/images/products/mustard-seeds.png',
      'cloves-whole-laung': 'https://shivaspice.com/wp-content/uploads/2021/01/Buy_Cloves_Shivaspice.jpg',
      'cinnamon-sticks-powder': 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
      'nutmeg-mace': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
      'star-anise': 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
      'dry-ginger-sonth': 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
      'garlic-powder-flakes': 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80',
      'onion-powder-flakes': 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80',
      'tamarind': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
      'curry-powder-blends': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
      'garam-masala-blend': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
      'seafood-frozen': 'assets/images/seafood-export.jpg',
      'marine-products': 'assets/images/seafood-export.jpg'
    };

    const categoryFallbacks = {
      'spices': 'assets/images/spices.jpg',
      'basmati-rice': 'assets/images/1121-steam-rice-500x500.jpg',
      'non-basmati-rice': 'assets/images/1121-steam-rice-500x500.jpg',
      'pulses': 'assets/images/toor-dal.jpg',
      'seafood': 'assets/images/seafood-export.jpg',
      'fresh-fruits': 'assets/images/fresh-fruits.jpg',
      'fresh-vegetables': 'assets/images/fresh-vegetables.jpg',
      'dehydrated': 'assets/images/onion-flakes.jpg',
      'oil-seeds': 'assets/images/white-sesame.jpg',
      'groundnuts-cashews': 'assets/images/cashew-nuts.jpg',
      'cereals-millets': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop&q=80',
      'flours-grains': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80',
      'tea-coffee': 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80',
      'honey-agro': 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80',
      'processed-foods': 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&auto=format&fit=crop&q=80',
      'marine': 'assets/images/seafood-export.jpg'
    };

    function getProductImage(item) {
      if (item.image) {
        return item.image;
      }
      if (item.slug && productSpecificImages[item.slug]) {
        return productSpecificImages[item.slug];
      }
      if (item.category && categoryFallbacks[item.category]) {
        return categoryFallbacks[item.category];
      }
      return 'assets/images/spices.jpg';
    }

    // Render Top Category Slider & Sidebar List
    function renderCategoryNavs() {
      const allProducts = getAllProducts();

      // Compute counts
      const counts = { all: allProducts.length };
      categoryList.forEach(cat => {
        if (cat.slug !== 'all') {
          counts[cat.slug] = allProducts.filter(p => p.category === cat.slug).length;
        }
      });

      // 1. Top Slider
      if (topCatSlider) {
        topCatSlider.innerHTML = categoryList.map(cat => {
          const isActive = cat.slug === currentCategory ? 'active' : '';
          const count = counts[cat.slug] || 0;
          return `
            <button type="button" class="cat-pill-tab ${isActive}" data-cat="${cat.slug}">
              <span>${cat.name}</span>
              <span class="cat-pill-count">${count}</span>
            </button>
          `;
        }).join('');

        topCatSlider.querySelectorAll('.cat-pill-tab').forEach(btn => {
          btn.addEventListener('click', () => {
            const cat = btn.getAttribute('data-cat');
            setCategory(cat);
          });
        });
      }

      // 2. Sidebar List
      if (sidebarCatList) {
        sidebarCatList.innerHTML = categoryList.map(cat => {
          const isActive = cat.slug === currentCategory ? 'active' : '';
          const count = counts[cat.slug] || 0;
          return `
            <button type="button" class="sidebar-cat-item ${isActive}" data-cat="${cat.slug}">
              <span>${cat.name}</span>
              <span class="sidebar-cat-badge">${count}</span>
            </button>
          `;
        }).join('');

        sidebarCatList.querySelectorAll('.sidebar-cat-item').forEach(btn => {
          btn.addEventListener('click', () => {
            const cat = btn.getAttribute('data-cat');
            setCategory(cat);
          });
        });
      }
    }

    function setCategory(slug) {
      currentCategory = slug;
      currentPage = 1;

      // Update URL
      const params = new URLSearchParams(window.location.search);
      if (slug === 'all') params.delete('category');
      else params.set('category', slug);

      const newUrl = params.toString() ? `${window.location.pathname}?${params.toString()}` : window.location.pathname;
      window.history.replaceState({ category: slug }, '', newUrl);

      // Update Active Classes
      if (topCatSlider) {
        topCatSlider.querySelectorAll('.cat-pill-tab').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-cat') === slug);
        });
      }
      if (sidebarCatList) {
        sidebarCatList.querySelectorAll('.sidebar-cat-item').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-cat') === slug);
        });
      }

      renderProducts();
    }

    // Filter & Sort Products
    function getFilteredProducts() {
      let products = getAllProducts();

      // Category filter
      if (currentCategory !== 'all') {
        products = products.filter(p => p.category === currentCategory);
      }

      // Search filter
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        products = products.filter(p => {
          const name = (p.name || '').toLowerCase();
          const desc = (p.description || '').toLowerCase();
          const cat = (p.categoryName || p.category || '').toLowerCase();
          const origin = (p.origin || '').toLowerCase();
          const specs = (p.specs || '').toLowerCase();
          return name.includes(q) || desc.includes(q) || cat.includes(q) || origin.includes(q) || specs.includes(q);
        });
      }

      // Sorting
      if (currentSort === 'name-asc') {
        products.sort((a, b) => a.name.localeCompare(b.name));
      } else if (currentSort === 'name-desc') {
        products.sort((a, b) => b.name.localeCompare(a.name));
      } else if (currentSort === 'category') {
        products.sort((a, b) => (a.categoryName || a.category || '').localeCompare(b.categoryName || b.category || ''));
      }

      return products;
    }

    // Render Product Cards & Pagination
    function renderProducts() {
      const filtered = getFilteredProducts();
      const currentCatObj = categoryList.find(c => c.slug === currentCategory) || { name: 'All Products' };

      // Update Toolbar Heading
      if (activeCategoryTitle) {
        if (searchQuery) {
          activeCategoryTitle.textContent = `Search results for "${searchQuery}"`;
        } else {
          activeCategoryTitle.textContent = currentCatObj.name;
        }
      }

      if (activeResultsCount) {
        activeResultsCount.textContent = `Showing ${filtered.length} products available for global export`;
      }

      if (btnResetFilters) {
        btnResetFilters.style.display = (currentCategory !== 'all' || searchQuery) ? 'inline-flex' : 'none';
      }

      // Empty State
      if (filtered.length === 0) {
        productGrid.innerHTML = `
          <div class="shop-empty-state-v2">
            <div class="shop-empty-icon">📦</div>
            <h3>No products found</h3>
            <p>No agricultural products match your selected criteria or search term.</p>
            <button class="btn btn-primary" id="btnEmptyReset" style="font-weight: 500;">Reset Filters &amp; View All</button>
          </div>
        `;
        const btnEmptyReset = document.getElementById('btnEmptyReset');
        if (btnEmptyReset) {
          btnEmptyReset.addEventListener('click', () => {
            if (heroSearchInput) heroSearchInput.value = '';
            searchQuery = '';
            if (heroSearchClear) heroSearchClear.style.display = 'none';
            setCategory('all');
          });
        }
        if (paginationWrapper) paginationWrapper.innerHTML = '';
        return;
      }

      // Paginate
      const totalPages = Math.ceil(filtered.length / itemsPerPage);
      if (currentPage > totalPages) currentPage = totalPages;
      const startIndex = (currentPage - 1) * itemsPerPage;
      const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

      // Render Cards
      productGrid.innerHTML = paginatedItems.map(item => {
        const imgSrc = getProductImage(item);
        const detailUrl = `product-detail.html?slug=${encodeURIComponent(item.slug || item.id)}`;
        const catLabel = item.categoryName || item.category || 'Export Grade';

        return `
          <article class="product-card-v2" data-category="${item.category}">
            <div class="card-media-v2">
              <a href="${detailUrl}" aria-label="${item.name}">
                <img src="${imgSrc}" alt="${item.name}" class="card-media-img" loading="lazy" onerror="this.onerror=null; this.src='assets/images/spices.jpg';">
              </a>
              <span class="card-badge-v2">${catLabel}</span>
            </div>

            <div class="card-body-v2">
              <span class="card-category-sub">${catLabel}</span>
              <h3 class="card-title-v2">
                <a href="${detailUrl}">${item.name}</a>
              </h3>
              <p class="card-desc-v2">${item.description || 'Export grade Indian commodity compliant with APEDA and international quality standards.'}</p>

              <div class="card-specs-v2">
                ${item.origin ? `<span class="spec-chip-v2"><span class="spec-chip-label">Origin:</span> ${item.origin.split('/')[0].trim()}</span>` : ''}
                ${item.packaging ? `<span class="spec-chip-v2"><span class="spec-chip-label">Pack:</span> ${item.packaging.split('/')[0].trim()}</span>` : ''}
              </div>

              <div class="card-actions-v2">
                <button type="button" class="btn-card-quote" data-rfq-name="${item.name}" data-rfq-cat="${catLabel}">
                  <span>Get Quote</span>
                </button>
                <a href="${detailUrl}" class="btn-card-specs">
                  <span>View Specs</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </article>
        `;
      }).join('');

      // Attach RFQ button triggers
      productGrid.querySelectorAll('.btn-card-quote').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const pName = btn.getAttribute('data-rfq-name');
          const pCat = btn.getAttribute('data-rfq-cat');
          openRfqModal(pName, pCat);
        });
      });

      // Render Pagination Controls
      renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
      if (!paginationWrapper) return;
      if (totalPages <= 1) {
        paginationWrapper.innerHTML = '';
        return;
      }

      let html = '';

      // Prev Button
      html += `
        <button type="button" class="page-btn page-nav-btn" id="btnPagePrev" ${currentPage === 1 ? 'disabled' : ''}>
          &larr; Prev
        </button>
      `;

      // Page Numbers
      for (let i = 1; i <= totalPages; i++) {
        if (totalPages > 7) {
          if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `<button type="button" class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
          } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<span style="padding: 0 4px; color: #94a3b8; font-size: 0.85rem;">...</span>`;
          }
        } else {
          html += `<button type="button" class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
        }
      }

      // Next Button
      html += `
        <button type="button" class="page-btn page-nav-btn" id="btnPageNext" ${currentPage === totalPages ? 'disabled' : ''}>
          Next &rarr;
        </button>
      `;

      paginationWrapper.innerHTML = html;

      // Attach pagination listeners
      const btnPrev = document.getElementById('btnPagePrev');
      if (btnPrev) {
        btnPrev.addEventListener('click', () => {
          if (currentPage > 1) {
            currentPage--;
            renderProducts();
            scrollToGrid();
          }
        });
      }

      const btnNext = document.getElementById('btnPageNext');
      if (btnNext) {
        btnNext.addEventListener('click', () => {
          if (currentPage < totalPages) {
            currentPage++;
            renderProducts();
            scrollToGrid();
          }
        });
      }

      paginationWrapper.querySelectorAll('.page-btn[data-page]').forEach(btn => {
        btn.addEventListener('click', () => {
          const page = parseInt(btn.getAttribute('data-page'), 10);
          if (page && page !== currentPage) {
            currentPage = page;
            renderProducts();
            scrollToGrid();
          }
        });
      });
    }

    function scrollToGrid() {
      const topBar = document.getElementById('shopResultsArea');
      if (topBar) {
        topBar.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // Live Search Handling
    if (heroSearchInput) {
      heroSearchInput.addEventListener('input', () => {
        searchQuery = heroSearchInput.value.trim();
        currentPage = 1;
        if (heroSearchClear) {
          heroSearchClear.style.display = searchQuery ? 'block' : 'none';
        }
        renderProducts();
      });
    }

    if (heroSearchClear) {
      heroSearchClear.addEventListener('click', () => {
        if (heroSearchInput) heroSearchInput.value = '';
        searchQuery = '';
        heroSearchClear.style.display = 'none';
        currentPage = 1;
        renderProducts();
      });
    }

    // Quick Search Suggestion Tags
    document.querySelectorAll('.quick-tag-pill').forEach(tag => {
      tag.addEventListener('click', (e) => {
        e.preventDefault();
        const term = tag.getAttribute('data-tag') || tag.textContent.trim();
        if (heroSearchInput) {
          heroSearchInput.value = term;
          searchQuery = term;
          if (heroSearchClear) heroSearchClear.style.display = 'block';
        }
        setCategory('all');
        scrollToGrid();
      });
    });

    // Sorting select listener
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        currentPage = 1;
        renderProducts();
      });
    }

    // Reset Filters button
    if (btnResetFilters) {
      btnResetFilters.addEventListener('click', () => {
        if (heroSearchInput) heroSearchInput.value = '';
        searchQuery = '';
        if (heroSearchClear) heroSearchClear.style.display = 'none';
        setCategory('all');
      });
    }

    // RFQ Modal Logic
    function openRfqModal(productName, productCategory) {
      if (!rfqModal) return;
      if (rfqProductName) rfqProductName.value = productName || '';
      if (rfqProductCategory) rfqProductCategory.value = productCategory || '';
      rfqModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeRfqModal() {
      if (!rfqModal) return;
      rfqModal.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (rfqModalClose) {
      rfqModalClose.addEventListener('click', closeRfqModal);
    }

    if (rfqModal) {
      rfqModal.addEventListener('click', (e) => {
        if (e.target === rfqModal) closeRfqModal();
      });
    }

    if (btnRfqWhatsApp) {
      btnRfqWhatsApp.addEventListener('click', (e) => {
        e.preventDefault();
        const prod = (rfqProductName ? rfqProductName.value : '').trim() || 'General Products';
        const qty = (document.getElementById('rfqQuantity') ? document.getElementById('rfqQuantity').value : '').trim() || 'Standard Export Container';
        const port = (document.getElementById('rfqPort') ? document.getElementById('rfqPort').value : '').trim() || 'CIF Destination';
        const name = (document.getElementById('rfqBuyerName') ? document.getElementById('rfqBuyerName').value : '').trim();

        let msg = `Hello Kanha Global Exports,\nI would like to request an official FOB/CIF quotation for:\n• Product: ${prod}\n• Quantity: ${qty}\n• Destination Port: ${port}`;
        if (name) msg += `\n• Importer Name: ${name}`;

        const waUrl = `https://wa.me/919726396898?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, '_blank');
        closeRfqModal();
      });
    }

    if (rfqForm) {
      rfqForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const prod = (rfqProductName ? rfqProductName.value : '').trim();
        const qty = (document.getElementById('rfqQuantity') ? document.getElementById('rfqQuantity').value : '').trim();
        const port = (document.getElementById('rfqPort') ? document.getElementById('rfqPort').value : '').trim();
        const name = (document.getElementById('rfqBuyerName') ? document.getElementById('rfqBuyerName').value : '').trim();

        const subject = encodeURIComponent(`Export Quotation Request: ${prod}`);
        const body = encodeURIComponent(`Dear Kanha Global Exports Team,\n\nI am interested in sourcing the following commodity:\nProduct: ${prod}\nEstimated Quantity: ${qty}\nDestination Port: ${port}\nImporter Name/Company: ${name}\n\nPlease share your FOB/CIF rates, packaging options, and certificate specifications.\n\nThank you.`);
        
        window.location.href = `mailto:info@kanhaglobalexports.com?subject=${subject}&body=${body}`;
        closeRfqModal();
      });
    }

    // Initialize View
    renderCategoryNavs();
    renderProducts();

    // Support External Refresh
    window.refreshShopProducts = function() {
      renderCategoryNavs();
      renderProducts();
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShopPage);
  } else {
    initShopPage();
  }
})();
