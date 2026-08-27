# Technomantra Team Learning (V4.8.1)

Use these as proven team references, not as instructions to copy blindly. Current user prompt and current-project conventions always win.

## Pattern 1: Responsive carousel / slider · CSST10I15-CSST10I10.html
- Category: ui.carousel
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>DaTo CSST Screw Air Compressor | Datronix Autotech</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="DAS723.css">
</head>
<body>
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="../index.html" aria-label="Datronix Autotech home">
        <img src="../photos/logo.png" alt="Datronix Autotech">
      </a>

      <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="main-navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="main-nav" id="main-navigation" aria-label="Main navigation">
        <a href="../index.html">Home</a>
        <a href="../page/about.html">About Us</a>
        <div class="nav-dropdown">
          <button type="button" class="nav-drop-toggle active" aria-expanded="false" aria-haspopup="true" aria-controls="products-submenu">Products</button>
          <div class="dropdown-menu" id="products-submenu" role="menu">
            <a role="menuitem" href="../page/categori.html">All products</a>
            <a role="menuitem" href="DAS528.html">DAS528 DaTo Diagnostic Car Scanner</a>
            <a role="menuitem" href="DAS722.html">DAS722 Da To Diagnostic Car Scanner</a>
            <a role="menuitem" href="DASXG3.html">DAS X-G3 IMMO Programming</a>
            <a role="menuitem" href="DAS701.html">DaTo DAS701 Super Scanner</a>
            <a role="menuitem" href="DAS723.html">DaTo DAS723 PRO ULTRA</a>
            <a role="menuitem" href="DASG3.html">DaTo DASG3 Key Programmer</a>
            <a role="menuitem" href="DAS1026.html">Bluetooth OBD2 Scanner DAS1026</a>
            <a role="menuitem" href="ADAS-RADAR.html">ADAS RADAR Trio Cipher Calibration</a>
            <a role="menuitem" href="DAS825.html">DAS825 PRO MAX</a>
            <a role="menuitem" href="DAS623.html">EV SCANNER DaTo DAS623</a>
            <a role="menuitem" href="DIDS-101.html">DIDS-101 Diesel Injector Testing</a>
            <a role="menuitem" href="ACMAS301%E2%80%93AC.html">ACMAS301 AC Service Station</a>
            <a role="menuitem" href="ACMAS302.html">ACMAS302 AC Service Station</a>
            <a role="menuitem" href="DIGD603.html">DaTo DIGD603 GDI &amp; Piezo Injector Cleaner</a>
            <a role="menuitem" href="PTIW1001.html">DaTo PTIW1001 Air Impact Wrench</a>
            <a role="menuitem" href="PTIW1011.html">DaTo PTIW1011 1&Prime; Heavy Duty Impact Wrench</a>
            <a role="menuitem" href="CSST10I15-CSST10I10.html">DaTo CSST Screw Air Compressor</a>
            <a role="menuitem" href="DHP2050.html">DaTo DHP 2050 Shop Press &ndash; 50 Ton</a>
          </div>
        </div>
        <a href="../page/service.html">Services</a>
        <a href="../page/contact.html">Contact Us</a>
      </
```

## Pattern 2: Responsive carousel / slider · product-details.html
- Category: ui.carousel
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PVC Compound – Madhav Polymers | Premium Grade Polymer Compounds</title>
  <meta name="description" content="Explore Madhav Polymers' premium PVC Compound — engineered for performance with consistent quality, excellent processability, and wide range of applications." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="animations.css" />
  <link rel="stylesheet" href="product-details.css" />
</head>
<body data-page="product-details">

  <div id="site-header"></div>

  <!-- ========== PRODUCT HERO ========== -->
  <section class="pd-hero" id="pd-hero">
    <div class="pd-hero-wrap">
      <img src="pvc page.png" alt="" class="pd-hero-bg" fetchpriority="high" decoding="async" />
      <div class="pd-hero-overlay"></div>
      <div class="pd-hero-inner">
        <nav class="pd-breadcrumb" aria-label="Breadcrumb">
          <a href="index.html">Home</a>
          <span class="pd-bc-sep">&#8250;</span>
          <a href="products.html">Products</a>
          <span class="pd-bc-sep">&#8250;</span>
          <span>PVC Compound</span>
        </nav>

        <div class="pd-hero-grid">
          <div class="pd-hero-left">
            <span class="pd-grade-badge">PREMIUM GRADE</span>
            <h1 class="pd-hero-title">PVC Compound</h1>
            <p class="pd-hero-desc">
              High-performance PVC compounds engineered for superior strength, flexibility, and finish. Our customizable formulations deliver consistent quality across wire &amp; cable, pipes, profiles, footwear, and industrial applications.
            </p>

            <div class="pd-hero-features">
              <div class="pd-hero-feat">
                <div class="pd-feat-icon">
                  <img src="madhav_product_hero_icons_svg/consistent_quality.svg" alt="" width="28" height="28" />
                </div>
                <span>Consistent<br>Quality</span>
              </div>
              <div class="pd-hero-feat">
                <div class="pd-feat-icon">
                  <img src="madhav_product_hero_icons_svg/advanced_technology.svg" alt="" width="28" height="28" />
                </div>
                <span>Excellent<br>Processability</span>
              </div>
              <div class="pd-hero-feat">
                <div class="pd-feat-icon">
                  <img src="madhav_product_hero_icons_svg/tailored_for_every_need.svg" alt="" width="28" height="28" />
                </div>
                <span>Wide Range of<br>Applications</span>
              </div>
            </div>

            <div class="pd-hero-cta">
              <a href="#pd-inquiry" class="pd-btn-orange">
                Request a Quote
                <span class="pd-btn-arrow" aria-hidden="true">
                  <img src="madhav_polymers_icons_svg_pack/butt
```

## Pattern 3: Responsive carousel / slider · service-detail-plant-care.html
- Category: ui.carousel
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Plant Care Service | Service Details | Baroda Roses Farm & Nursery</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="css/styles.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"><link rel="stylesheet" href="css/service-detail-plant-care.css"><link rel="stylesheet" href="css/mobile.css"></head><body class="service-plant-care-page" data-page="services"><div class="spc-cursor-glow" id="spcCursorGlow" aria-hidden="true"></div><svg xmlns="http://www.w3.org/2000/svg" class="spc-sprite" aria-hidden="true"><symbol id="spc-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="spc-play" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 8l6 4-6 4V8z" fill="currentColor"/></symbol><symbol id="spc-whatsapp" viewBox="0 0 24 24"><path d="M12 3a8 8 0 00-6.9 12L3 21l6.2-2A8 8 0 1012 3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9.5 10.5c.4 1.2 1.6 2.8 3.3 3.5 1 .4 1.8.2 2.4-.4l.6-.6a1 1 0 011.3-.1l1.5 1.1a1 1 0 01.2 1.4l-.8 1.1c-.6.8-1.6 1.2-2.7 1-2.2-.4-4.8-2.5-6.2-5.1-.8-1.5-.9-2.8-.3-3.7l.7-1a1 1 0 011.3-.3l1.5.8a1 1 0 01.4 1.2l-.4.9c-.2.5-.1.9.3 1.2z" fill="currentColor" stroke="none"/></symbol><symbol id="spc-chevron-l" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="spc-chevron-r" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="spc-prune" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="6" cy="6" r="2" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="18" cy="18" r="2" fill="none" stroke="currentColor" stroke-width="1.4"/></symbol><symbol id="spc-fertilize" viewBox="0 0 24 24"><path d="M12 3c-2 4-6 6-6 10a6 6 0 0012 0c0-4-4-6-6-10z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 20h8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol><symbol id="spc-pest" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 5V3M12 21v-2M5 12H3M21 12h-2M7 7l-1.5-1.5M18.5 18.5L17 17M7 17l-1.5 1.5M18.5 5.5L17 7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></symbol><symbol id="spc-soil" viewBox="0 0 24 24"><path d="M4 18h16M6 18c0-4 2.5-7 6-7s6 3 6 7" fill="none" stroke="currentColor" stroke-width="1
```

## Pattern 4: Validation pattern · about.html
- Category: validation
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us | HEPA Filter Manufacturer India | Precise Engineering</title>
    <link rel="icon" href="images/fevicon.png" type="image/png">
    <meta name="description" content="Precise Engineering is a trusted Cleanroom Filter Manufacturer India and OEM HEPA Filter Manufacturer, providing critical Pharmaceutical Air Filtration Solutions.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="assets/css/premium.css">
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-13ZD2ZZTMD"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-13ZD2ZZTMD');
    </script>
</head>
<body class="page-about">

    <!-- Header -->
    <header class="header" id="header">
        <div class="container header-inner">
            <a href="index.html" class="logo">
                <img src="images/logo.png" alt="Precise Engineering">
            </a>
            <nav class="nav" id="navMenu" aria-label="Main navigation">
                <a href="index.html" class="nav-link">Home</a>
                <a href="about.html" class="nav-link active">About Us</a>
                <div class="nav-dropdown">
                    <button type="button" class="nav-link nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true" aria-controls="navProductsMenu">
                        Products
                        <svg class="nav-dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
                    </button>
                    <ul class="nav-dropdown-menu" id="navProductsMenu" role="menu">
                        <li role="none"><a href="products.html" class="nav-dropdown-link" role="menuitem">All Products</a></li>
                        <li role="none" class="nav-dropdown-divider" aria-hidden="true"></li>
                        <li role="none"><a href="product-detail.html?slug=hepa-filters" class="nav-dropdown-link" role="menuitem">HEPA Filters</a></li>
                        <li role="none"><a href="product-detail.html?slug=ulpa-filters" class="nav-dropdown-link" role="menuitem">ULPA Filters</a></li>
                        <li role="none"><a href="product-detail.html?slug=hot-zone-hepa-filters" class="nav-dropdown-link" role="menuitem">Hot Zone HEPA Filters</a></li>
                        <li role="none"><a href="product-detail.html?slug=pre-filters" class="nav-dropdown-link" role="menuitem">Pre-Filters</a></li>
                        <li role="none"><a href="product-detail.html?slug=cartridge-filter
```