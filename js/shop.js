/**
 * Kanha Global Exports - Shop / Export Products Page Script
 */

(function() {
  function initShop() {
    const categoryFilterEl = document.getElementById('categoryFilter');
    const productGridEl = document.getElementById('productGrid');
    const activeCountEl = document.getElementById('activeCount');
    const totalProductCountEl = document.getElementById('totalProductCount');

    // Safety check if elements exist
    if (!productGridEl) return;

    // Retrieve global products
    function getProducts() {
      if (window.TRADE_PRODUCTS && window.TRADE_PRODUCTS.length) {
        return window.TRADE_PRODUCTS;
      }
      if (window.KGE_PRODUCTS && window.KGE_PRODUCTS.trade && window.KGE_PRODUCTS.trade.length) {
        return window.KGE_PRODUCTS.trade;
      }
      return [];
    }

  // Category definitions mapping
  const categoryList = [
    { slug: 'all', name: 'All Products' },
    { slug: 'spices', name: 'Spices' },
    { slug: 'basmati-rice', name: 'Basmati Rice' },
    { slug: 'non-basmati-rice', name: 'Non-Basmati Rice' },
    { slug: 'pulses', name: 'Pulses' },
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

  // Read URL query parameter for category
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get('category') || 'all';

  // Normalize initial active category if invalid
  if (!categoryList.some(c => c.slug === activeCategory)) {
    activeCategory = 'all';
  }

  // Specific curated images for products
  const productSpecificImages = {
    'turmeric-finger-powder': 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    'red-chilli': 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80',
    'cumin-seeds-jeera': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    'coriander-seeds-dhaniya': 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
    'black-pepper': 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
    'green-cardamom': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    'fennel-seeds-saunf': 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
    'fenugreek-seeds-methi': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    'mustard-seeds-rai': 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
    'cloves-laung': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    'cinnamon-sticks-powder': 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
    'nutmeg-mace': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    'star-anise': 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
    'dry-ginger-sonth': 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    'garlic-powder-flakes': 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80',
    'onion-powder-flakes': 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80',
    'tamarind': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    'curry-powder-blends': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    'garam-masala-blend': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80'
  };

  const categoryFallbacks = {
    'spices': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80',
    'basmati-rice': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=80',
    'non-basmati-rice': 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&auto=format&fit=crop&q=80',
    'pulses': 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=800&auto=format&fit=crop&q=80',
    'seafood': 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800&auto=format&fit=crop&q=80',
    'fresh-fruits': 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&auto=format&fit=crop&q=80',
    'fresh-vegetables': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
    'dehydrated': 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&auto=format&fit=crop&q=80',
    'oil-seeds': 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=800&auto=format&fit=crop&q=80',
    'groundnuts-cashews': 'https://images.unsplash.com/photo-1568651310167-279c6d3bc852?w=800&auto=format&fit=crop&q=80',
    'cereals-millets': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop&q=80',
    'flours-grains': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80',
    'tea-coffee': 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80',
    'honey-agro': 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80',
    'processed-foods': 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800&auto=format&fit=crop&q=80',
    'marine': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80'
  };

  function getProductImage(item) {
    if (item.slug && productSpecificImages[item.slug]) {
      return productSpecificImages[item.slug];
    }
    // Check if item image is valid and not generic mismatch
    if (item.image && item.image.startsWith('http') && !item.image.includes('photo-1542838132')) {
      return item.image;
    }
    if (categoryFallbacks[item.category]) {
      return categoryFallbacks[item.category];
    }
    return 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80';
  }

  // Render Filter Buttons
  function renderFilters() {
    if (!categoryFilterEl) return;
    
    categoryFilterEl.innerHTML = categoryList.map(cat => {
      const isActive = cat.slug === activeCategory ? 'active' : '';
      return `<button type="button" class="filter-chip ${isActive}" data-category="${cat.slug}">${cat.name}</button>`;
    }).join('');

    // Attach click events
    categoryFilterEl.querySelectorAll('.filter-chip').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const cat = this.getAttribute('data-category');
        setCategory(cat);
      });
    });
  }

  function setCategory(catSlug) {
    activeCategory = catSlug;
    
    // Update active class on filter buttons
    if (categoryFilterEl) {
      categoryFilterEl.querySelectorAll('.filter-chip').forEach(btn => {
        if (btn.getAttribute('data-category') === catSlug) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }

    // Update URL without full page reload
    const newUrl = catSlug === 'all' 
      ? window.location.pathname 
      : window.location.pathname + '?category=' + encodeURIComponent(catSlug);
    window.history.replaceState({ category: catSlug }, '', newUrl);

    renderProducts();
  }

  // Render Product Cards
  function renderProducts() {
    const allProducts = getProducts();
    const filtered = activeCategory === 'all'
      ? allProducts
      : allProducts.filter(p => p.category === activeCategory);

    if (totalProductCountEl) {
      totalProductCountEl.textContent = allProducts.length;
    }

    if (activeCountEl) {
      activeCountEl.textContent = `${filtered.length} products available`;
    }

    if (filtered.length === 0) {
      productGridEl.innerHTML = `
        <div class="product-empty-state" style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1rem;">
          <div style="font-size: 2.5rem; margin-bottom: 0.8rem; color: var(--gold, #B8924A);">📦</div>
          <h3 style="font-size: 1.25rem; font-family: var(--font-heading); margin-bottom: 0.5rem; color: #111;">No products found</h3>
          <p style="color: #666; font-size: 0.95rem; margin-bottom: 1.5rem;">Explore our other agricultural and export divisions.</p>
          <button class="btn btn-outline-dark btn-sm" onclick="window.KGE_SET_CAT && window.KGE_SET_CAT('all')">View All Products</button>
        </div>
      `;
      return;
    }

    productGridEl.innerHTML = filtered.map(item => {
      const imgSrc = getProductImage(item);
      const detailUrl = `product-detail.html?product=${encodeURIComponent(item.slug || item.id)}`;
      const rfqUrl = `contact-us.html?product=${encodeURIComponent(item.name)}#quote`;
      const catLabel = item.categoryName || item.category || 'Export Quality';

      return `
        <article class="product-card" data-category="${item.category}">
          <div class="product-card-media">
            <a href="${detailUrl}" class="product-media-link" aria-label="${item.name}">
              <img src="${imgSrc}" alt="${item.name}" class="product-img" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80';">
            </a>
            <span class="product-badge">${catLabel}</span>
          </div>
          
          <div class="product-card-body">
            <h3 class="product-card-title">
              <a href="${detailUrl}">${item.name}</a>
            </h3>
            <p class="product-card-desc">${item.description || 'Export grade agricultural commodity meeting international quality and phytosanitary benchmarks.'}</p>
            
            <div class="product-card-specs">
              ${item.origin ? `<div class="spec-pill"><span class="pill-label">Origin:</span> <span class="pill-val">${item.origin}</span></div>` : ''}
              ${item.packaging ? `<div class="spec-pill"><span class="pill-label">Pack:</span> <span class="pill-val">${item.packaging}</span></div>` : ''}
            </div>

            <div class="product-card-footer">
              <a href="${detailUrl}" class="btn-view-detail">
                <span>View Details</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
              <a href="${rfqUrl}" class="btn-get-quote">Get Quote</a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Expose category setter
  window.KGE_SET_CAT = setCategory;

  // Initialize
  renderFilters();
  renderProducts();

  // Expose rerender if data loaded later
  window.refreshShopProducts = function() {
    renderFilters();
    renderProducts();
  };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShop);
  } else {
    initShop();
  }
})();
