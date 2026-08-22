document.addEventListener('DOMContentLoaded', () => {
  const livestockGrid = document.getElementById('livestockGrid');
  if (!livestockGrid) return;

  const allProducts = (window.KGE_PRODUCTS && window.KGE_PRODUCTS.poultry) ? window.KGE_PRODUCTS.poultry : [];
  const livestockProducts = allProducts.filter(p => p.category === 'live-stock-products');

  function getFallbackImage(catSlug) {
    if (window.CATEGORY_DEFAULT_IMAGES && window.CATEGORY_DEFAULT_IMAGES[catSlug]) {
      return window.CATEGORY_DEFAULT_IMAGES[catSlug];
    }
    return 'assets/images/cropped-shot-of-a-herd-of-cows-feeding-on-a-dairy-farm.jpg';
  }

  function renderLivestockProducts() {
    const listToRender = livestockProducts.length > 0 ? livestockProducts : allProducts.slice(0, 8);

    livestockGrid.innerHTML = listToRender.map(prod => {
      const imgSrc = prod.image || getFallbackImage(prod.category);
      const detailUrl = `product-detail.html?slug=${encodeURIComponent(prod.slug)}`;

      return `
        <article class="product-card livestock-card" data-slug="${prod.slug}">
          <div class="product-card-media">
            <a href="${detailUrl}" class="product-media-link" title="${prod.name}">
              <img src="${imgSrc}" alt="${prod.name}" class="product-img" loading="lazy" />
            </a>
            <span class="product-badge">Livestock Division</span>
          </div>
          <div class="product-card-body">
            <span class="product-category-label">Animal Nutrition & Supplements</span>
            <h3 class="product-card-title">
              <a href="${detailUrl}">${prod.name}</a>
            </h3>
            <p class="product-card-desc">${prod.description || 'High bio-availability livestock mineral and health supplement formulated for superior yield.'}</p>
            <div class="product-card-specs">
              <span class="spec-pill"><span class="pill-label">Grade:</span> <span class="pill-val">Export Top Grade</span></span>
              <span class="spec-pill"><span class="pill-label">Origin:</span> <span class="pill-val">${prod.origin || 'India'}</span></span>
            </div>
            <div class="product-card-footer">
              <a href="${detailUrl}" class="btn-view-detail">
                <span>View Details</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="contact-us.html?product=${encodeURIComponent(prod.name)}#quote" class="btn-get-quote" title="Request Quote">Get Quote</a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  renderLivestockProducts();
});
