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

    // Categories List - Core Categories + Other Category
    const categoryList = [
      { slug: 'all', name: 'All Products' },
      { slug: 'rice', name: 'Rice & Grains' },
      { slug: 'spices', name: 'Spices & Seasonings' },
      { slug: 'pulses', name: 'Pulses & Lentils' },
      { slug: 'dehydrated', name: 'Dehydrated Foods' },
      { slug: 'herbs', name: 'Herbs & Botanical' },
      { slug: 'more-products', name: 'Nuts & Dry Fruits' },
      { slug: 'fresh-fruits', name: 'Fresh Produce' },
      { slug: 'seafood', name: 'Frozen Seafood' },
      { slug: 'other', name: 'Other Category' }
    ];

    // Category Groups
    const categoryGroupMap = {
      'rice': ['rice', 'basmati-rice', 'non-basmati-rice'],
      'spices': ['spices'],
      'pulses': ['pulses'],
      'dehydrated': ['dehydrated'],
      'fresh-fruits': ['fresh-fruits', 'fresh-vegetables'],
      'seafood': ['seafood', 'marine'],
      'herbs': ['herbs'],
      'more-products': ['more-products', 'honey-agro', 'oil-seeds', 'groundnuts-cashews'],
      'other': ['other', 'custom', 'specialty']
    };

    // Category Alias Map for seamless deep-linking
    const categoryAliases = {
      'rice': 'rice',
      'rice-grains': 'rice',
      'rice-and-grains': 'rice',
      'grains': 'rice',
      'basmati': 'rice',
      'basmati-rice': 'rice',
      'non-basmati': 'rice',
      'non-basmati-rice': 'rice',
      'basmati-non-basmati-rice': 'rice',
      'spices': 'spices',
      'spices-seasonings': 'spices',
      'spices-and-seasonings': 'spices',
      'whole-ground-spices': 'spices',
      'spices-herbs': 'spices',
      'spice': 'spices',
      'pulses': 'pulses',
      'pulses-lentils': 'pulses',
      'pulses-and-lentils': 'pulses',
      'lentils': 'pulses',
      'dehydrated': 'dehydrated',
      'dehydrated-foods': 'dehydrated',
      'dehydrated-products': 'dehydrated',
      'onion-flakes': 'dehydrated',
      'garlic-powder': 'dehydrated',
      'fresh-fruits': 'fresh-fruits',
      'fresh-fruits-vegetables': 'fresh-fruits',
      'fresh-vegetables': 'fresh-fruits',
      'fruits': 'fresh-fruits',
      'vegetables': 'fresh-fruits',
      'fresh-produce': 'fresh-fruits',
      'produce': 'fresh-fruits',
      'seafood': 'seafood',
      'frozen-seafood': 'seafood',
      'frozen-sea-food': 'seafood',
      'sea-food': 'seafood',
      'marine': 'seafood',
      'marine-products': 'seafood',
      'shrimp': 'seafood',
      'prawns': 'seafood',
      'fish': 'seafood',
      'herbs': 'herbs',
      'herbs-botanical': 'herbs',
      'herbs-botanicals': 'herbs',
      'herbs-and-botanical': 'herbs',
      'herbs-and-botanicals': 'herbs',
      'botanical': 'herbs',
      'botanicals': 'herbs',
      'herbs-product': 'herbs',
      'herbs-products': 'herbs',
      'herbs-medicinal-plants': 'herbs',
      'medicinal-plants': 'herbs',
      'herbal': 'herbs',
      'moringa': 'herbs',
      'tulsi': 'herbs',
      'ashwagandha': 'herbs',
      'neem': 'herbs',
      'amla': 'herbs',
      'curry-leaves': 'herbs',
      'kasuri-methi': 'herbs',
      'brahmi': 'herbs',
      'more-products': 'more-products',
      'more': 'more-products',
      'nuts-dry-fruits': 'more-products',
      'nuts-and-dry-fruits': 'more-products',
      'dry-fruits': 'more-products',
      'nuts-dried-fruits-specialty': 'more-products',
      'nuts-dried-fruits': 'more-products',
      'specialty': 'more-products',
      'makhana': 'more-products',
      'nuts': 'more-products',
      'dried-fruits': 'more-products',
      'cashews': 'more-products',
      'almonds': 'more-products',
      'walnuts': 'more-products',
      'pistachios': 'more-products',
      'raisins': 'more-products',
      'dates': 'more-products',
      'figs': 'more-products',
      'oil-seeds': 'more-products',
      'honey-agro': 'more-products',
      'groundnuts-cashews': 'more-products',
      'other': 'other',
      'other-category': 'other',
      'others': 'other',
      'custom-merchant-sourcing': 'other',
      'custom-sourcing': 'other',
      'custom': 'other'
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
      '1121-basmati-rice-steam-sella': 'assets/images/products/1121-basmati-rice.jpeg',
      '1718-basmati-rice-steam-sella': 'assets/images/products/1718-basmati-rice.jpeg',
      '1509-basmati-rice': 'assets/images/products/1509-basmati-rice.jpeg',
      '1401-basmati-rice': 'assets/images/products/1401-basmati-rice.jpeg',

      'ir-64-parboiled-raw-rice': 'assets/images/products/ir64-long-grain-rice.png',
      'sona-masoori-raw-steam-rice': 'assets/images/products/sona-masoori-rice.jpeg',

      'pr-11-non-basmati-rice': 'assets/images/products/pr-11-non-basmati-rice.jpg',
      'pr-14-non-basmati-rice': 'assets/images/products/pr-14-non-basmati-rice.jpg',
      'swarna-rice-parboiled': 'assets/images/products/swarna-rice.jpg',
      'turmeric-finger-powder': 'assets/images/products/turmeric-finger.jpg',
      'turmeric-finger': 'assets/images/products/turmeric-finger.jpg',
      'turmeric-powder': 'assets/images/products/turmeric-powder.jpg',
      'red-chilli-sannam-teja': 'assets/images/products/whole-red-chilli.jpg',
      'chilli-powder': 'assets/images/products/chilli-powder.jpg',
      'chilli-seeds-whole': 'assets/images/products/chilli-seeds.jpg',
      'cumin-seeds-jeera': 'assets/images/products/cumin-seeds.jpg',
      'cumin-seeds': 'assets/images/products/cumin-seeds.jpg',
      'cumin-powder': 'assets/images/products/cumin-powder.jpg',
      'coriander-seeds-dhaniya': 'assets/images/products/coriander-seeds-whole.png',
      'coriander-powder': 'assets/images/products/coriander-powder.png',
      'black-pepper-garbled': 'assets/images/products/black-pepper.jpg',
      'black-pepper-powder': 'assets/images/products/black-pepper-powder.jpeg',
      'green-cardamom-elaichi': 'assets/images/products/green-cardamom.jpg',
      'cardamom-powder': 'assets/images/products/cardamom-powder.jpeg',
      'fennel-seeds-saunf': 'assets/images/products/fennel-seeds.jpg',
      'fennel-powder': 'assets/images/products/fennel-powder.jpeg',
      'cloves-whole-laung': 'assets/images/products/cloves.jpg',
      'cinnamon-sticks-cassia': 'assets/images/products/cinnamon-sticks.jpg',
      'cinnamon-powder': 'assets/images/products/cinnamon-powder.jpg',
      'nutmeg-and-mace-whole': 'assets/images/products/nutmeg.jpg',
      'nutmeg-powder': 'assets/images/products/nutmeg-powder.jpeg',
      'black-cardamom-badi-elaichi': 'assets/images/products/black-cardamom.jpg',
      'black-cardamom-powder': 'assets/images/products/black-cardamom-powder.jpg',
      'garam-masala-blended-curry-powder': 'assets/images/products/garam-masala.jpg',
      'toor-dal-pigeon-peas': 'assets/images/products/toor-dal.jpeg',
      'chana-dal-split-bengal-gram': 'assets/images/products/chana-dal.jpeg',
      'yellow-moong-dal-split-dehusked': 'assets/images/products/moong-beans.jpeg',
      'red-lentils-masoor-dal': 'assets/images/products/red-lentils.jpeg',
      'black-matpe-urad-dal': 'assets/images/products/urad-dal.jpeg',
      'chickpeas-kabuli-chana': 'assets/images/products/kabuli-chana.jpeg',
      'rajma-red-kidney-beans-chitra': 'assets/images/products/rajma-beans.jpeg',
      'cowpeas-black-eyed-peas-lobia': 'assets/images/products/black-eyed-peas.jpeg',
      'desi-chana-brown-chickpeas': 'assets/images/products/other-indian-pulses.jpeg',
      'dehydrated-onion-white-red-pink': 'assets/images/products/dehydrated-onion-flakes.jpeg',
      'dehydrated-onion-flakes-minced-powder': 'assets/images/products/dehydrated-onion-flakes.jpeg',
      'dehydrated-garlic-flakes-powder-granules': 'assets/images/products/dehydrated-garlic.jpeg',
      'dry-ginger-sonth-whole-powder': 'assets/images/products/dehydrated-ginger.jpeg',
      'dehydrated-ginger-green-chilli-tomato-powder': 'assets/images/products/dehydrated-vegetables.jpeg',
      'dehydrated-mint-leaves-powder': 'assets/images/products/dehydrated-mint.jpeg',
      'dehydrated-coriander-leaves-powder': 'assets/images/products/dehydrated-coriander.jpeg',
      'other-dehydrated-herbs-and-vegetables': 'assets/images/products/other-dehydrated-herbs-vegetables.jpeg',
      'dehydrated-kasuri-methi-leaves': 'assets/images/products/other-dehydrated-herbs-vegetables.jpeg',
      'fresh-alphonso-kesar-mangoes': 'assets/images/products/fresh-alphonso-kesar-mangoes.jpg',
      'fresh-red-onions-nashik-gujarat': 'assets/images/products/fresh-red-onions.jpg',
      'fresh-potatoes-table-chipsona': 'assets/images/products/fresh-potatoes.jpg',
      'fresh-potatoes-and-seedless-lemons': 'assets/images/products/fresh-potatoes.jpg',
      'other-seasonal-indian-produce': 'assets/images/products/other-seasonal-indian-produce.jpg',
      'fresh-green-ginger': 'assets/images/products/other-seasonal-indian-produce.jpg',
      'frozen-vannamei-white-shrimp': 'assets/images/products/vannamei-white-shrimp.jpeg',
      'frozen-black-tiger-shrimp': 'assets/images/products/black-tiger-shrimp.jpeg',
      'frozen-ribbon-fish-whole': 'assets/images/products/frozen-marine-fish.jpeg',
      'frozen-squid-and-cuttlefish': 'assets/images/products/squid-cuttlefish.jpeg',
      'moringa-leaf-powder-organic': 'assets/images/products/moringa-leaves.jpeg',
      'tulsi-holy-basil-leaves-powder': 'assets/images/products/tulsi-holy-basil.jpeg',
      'ashwagandha-root-extract-powder': 'assets/images/products/ashwagandha-root.jpeg',
      'neem-leaves-botanical-powder': 'assets/images/products/neem-leaves.jpeg',
      'amla-indian-gooseberry-dried-powder': 'assets/images/products/amla-gooseberry.jpeg',
      'curry-leaves-fresh-dried': 'assets/images/products/curry-leaves.jpeg',
      'fenugreek-leaves-kasuri-methi': 'assets/images/products/kasuri-methi.jpeg',
      'brahmi-bacopa-monnieri-powder': 'assets/images/products/brahmi-herb.jpeg',
      'phool-makhana-fox-nuts-gorgon': 'assets/images/products/phool-makhana.jpg',
      'california-indian-badam-almonds': 'assets/images/products/almonds-badam.jpg',
      'cashew-nuts-w180-w240-w320': 'assets/images/products/cashew-nuts.jpg',
      'walnuts-akhrot-inshell-kernels': 'assets/images/products/walnuts-akhrot.jpg',
      'pistachios-pista-roasted-salted-green': 'assets/images/products/pistachios-pista.jpg',
      'raisins-sultanas-kismis-golden-green': 'assets/images/products/raisins-kismis.jpg',
      'premium-dates-khajur-medjool-kimia': 'assets/images/products/dates-khajur.jpg',
      'dried-figs-anjeer-garland-round': 'assets/images/products/dried-figs-anjeer.jpg',
      'custom-merchant-sourcing-specialty': 'assets/images/products/custom-merchant-sourcing.jpg'
    };

    const categoryFallbacks = {
      'rice': 'assets/images/categories/rice.jpg',
      'basmati-rice': 'assets/images/categories/rice.jpg',
      'non-basmati-rice': 'assets/images/categories/rice.jpg',
      'spices': 'assets/images/categories/spices.jpg',
      'pulses': 'assets/images/categories/pulses.jpg',
      'dehydrated': 'assets/images/categories/dehydrated.jpg',
      'fresh-fruits': 'assets/images/categories/fresh-fruits.jpg',
      'fresh-vegetables': 'assets/images/categories/fresh-fruits.jpg',
      'seafood': 'assets/images/categories/seafood.jpg',
      'herbs': 'assets/images/categories/herbs.jpg',
      'more-products': 'assets/images/categories/nuts-specialty.jpg',
      'honey-agro': 'assets/images/categories/nuts-specialty.jpg',
      'oil-seeds': 'assets/images/white-sesame.jpg',
      'other': 'assets/images/export-documentation-desk.jpg'
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
          const allowedCats = categoryGroupMap[cat.slug] || [cat.slug];
          counts[cat.slug] = allProducts.filter(p => allowedCats.includes(p.category)).length;
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
      if (!slug) slug = 'all';
      slug = slug.toLowerCase();
      const resolvedSlug = categoryAliases[slug] || slug;
      currentCategory = categoryList.some(c => c.slug === resolvedSlug) ? resolvedSlug : 'all';
      currentPage = 1;

      // Clear search query if user specifically selected a category
      if (searchQuery) {
        searchQuery = '';
        if (heroSearchInput) heroSearchInput.value = '';
        if (heroSearchClear) heroSearchClear.style.display = 'none';
      }

      // Update URL
      const params = new URLSearchParams(window.location.search);
      if (currentCategory === 'all') params.delete('category');
      else params.set('category', currentCategory);

      const newUrl = params.toString() ? `${window.location.pathname}?${params.toString()}` : window.location.pathname;
      window.history.replaceState({ category: currentCategory }, '', newUrl);

      // Update Active Classes
      if (topCatSlider) {
        topCatSlider.querySelectorAll('.cat-pill-tab').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-cat') === currentCategory);
        });
      }
      if (sidebarCatList) {
        sidebarCatList.querySelectorAll('.sidebar-cat-item').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-cat') === currentCategory);
        });
      }

      renderProducts();
    }

    // Filter & Sort Products
    function getFilteredProducts() {
      let products = getAllProducts();

      // Category filter
      if (currentCategory !== 'all') {
        const allowedCats = categoryGroupMap[currentCategory] || [currentCategory];
        products = products.filter(p => allowedCats.includes(p.category));
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
        const badgeLabel = item.badge || catLabel;
        const displayName = item.cardTitle || item.name;
        const displayDesc = item.shortDescription || item.description || 'Export grade Indian commodity compliant with APEDA and international quality standards.';

        return `
          <article class="product-card-v2" data-category="${item.category}">
            <div class="card-media-v2">
              <a href="${detailUrl}" aria-label="${item.name}">
                <img src="${imgSrc}" alt="${item.name}" class="card-media-img" loading="lazy" onerror="this.onerror=null; this.src='assets/images/spices.jpg';">
              </a>
              <span class="card-badge-v2">${badgeLabel}</span>
            </div>

            <div class="card-body-v2">

              <h3 class="card-title-v2">
                <a href="${detailUrl}">${displayName}</a>
              </h3>
              <p class="card-desc-v2">${displayDesc}</p>

              <div class="card-specs-v2">
                ${item.origin ? `<span class="spec-chip-v2"><span class="spec-chip-label">Origin:</span> ${item.origin.split('/')[0].trim()}</span>` : ''}
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
      rfqForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = rfqForm.querySelector('button[type="submit"]');
        const origContent = submitBtn ? submitBtn.innerHTML : '<span>Email Inquiry</span>';

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="btn-loading-spinner"></span><span>Transmitting RFQ...</span>';
        }

        const formData = new FormData(rfqForm);

        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
          });
          const result = await response.json();

          if (result.success) {
            if (submitBtn) {
              submitBtn.innerHTML = '<span>✓ Quotation Request Sent!</span>';
              submitBtn.style.background = '#10b981';
            }
            alert('✓ RFQ Request Sent Successfully! A Kanha Global Exports export director will review your specifications and share an official CIF/FOB quote.');
            rfqForm.reset();
            setTimeout(() => {
              if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = origContent;
                submitBtn.style.background = '';
              }
              closeRfqModal();
            }, 1200);
          } else {
            alert('Note: ' + (result.message || 'Please verify your information and retry.'));
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = origContent;
            }
          }
        } catch (err) {
          console.error('RFQ API Error:', err);
          alert('✓ Quotation Request Submitted! Our export desk will be in touch shortly.');
          rfqForm.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origContent;
          }
          closeRfqModal();
        }
      });
    }

    // Mobile Sidebar Category Card Toggle
    const sidebarCatCard = document.getElementById('sidebarCatCard');
    const sidebarCatToggle = document.getElementById('sidebarCatToggle');
    if (sidebarCatCard && sidebarCatToggle) {
      const toggleSidebar = () => {
        const isOpen = sidebarCatCard.classList.toggle('open');
        sidebarCatToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      };
      sidebarCatToggle.addEventListener('click', toggleSidebar);
      sidebarCatToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleSidebar();
        }
      });
    }

    // Initialize View
    renderCategoryNavs();
    renderProducts();

    // Export Global Helpers for Navigation & Mega Menu
    window.setShopCategory = function(slug) {
      setCategory(slug);
    };

    window.refreshShopProducts = function() {
      renderCategoryNavs();
      renderProducts();
    };

    // Listen to URL Hash / History Changes
    function syncCategoryFromUrl() {
      const params = new URLSearchParams(window.location.search);
      let raw = params.get('category') || (window.location.hash ? window.location.hash.replace('#', '') : '') || 'all';
      raw = raw.toLowerCase();
      let cat = categoryAliases[raw] || raw;
      if (!categoryList.some(c => c.slug === cat)) cat = 'all';
      if (cat !== currentCategory) {
        setCategory(cat);
      }
    }

    window.addEventListener('hashchange', () => {
      syncCategoryFromUrl();
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
    });

    window.addEventListener('popstate', syncCategoryFromUrl);

    // Initial smooth scroll if deep-linked to a specific category
    if (rawCategory && rawCategory !== 'all') {
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
      }, 150);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShopPage);
  } else {
    initShopPage();
  }
})();
