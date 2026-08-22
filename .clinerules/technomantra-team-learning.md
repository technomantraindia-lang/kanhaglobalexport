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

## Pattern 2: Styling / layout system · style.css
- Category: ui.styling
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
/* ============================================
   MADHAV POLYMERS - Main Stylesheet
   Colors: Orange #FF6B00, Purple #3D1F8C
   ============================================ */

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --orange: #FF6B00;
  --purple: #3D1F8C;
  --purple-light: #5a35c4;
  --dark: #1a1a2e;
  --text: #2d2d2d;
  --text-light: #666;
  --bg-light: #f8f7ff;
  --white: #ffffff;
  --font: 'Inter', sans-serif;
  --header-height: 110px;
}

html {
  scroll-behavior: smooth;
  max-width: 100% !important;
  overflow-x: hidden !important;
}

body {
  font-family: var(--font);
  color: var(--text);
  line-height: 1.6;
  max-width: 100% !important;
  overflow-x: hidden !important;
  background: var(--white);
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
}

img { max-width: 100%; height: auto; display: block; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }

/* ---- Utilities ---- */
.orange { color: var(--orange); }
.purple { color: var(--purple); }
.section-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--orange);
  text-transform: uppercase;
  margin-bottom: 10px;
}
.section-label.center { text-align: center; }
.view-all {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text);
  font-weight: 600;
  font-size: 14px;
  margin-top: 18px;
  transition: color 0.2s;
}
.view-all:hover { color: var(--orange); }

/* ============================================
   HEADER / NAVBAR
   ============================================ */
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: var(--white);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  height: var(--header-height);
}
.header.header-scrolled {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
}
.header .nav-container {
  max-width: 1440px;
  padding: 0 48px;
}
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  gap: 32px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  line-height: 0;
}
.logo-img {
  height: 72px;
  width: auto;
  max-width: 240px;
  object-fit: contain;
  display: block;
}

/* Nav */
.nav-menu { flex: 1; display: flex; justify-content: center; }
.nav-list {
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
}
.nav-list li { position: relative; }
.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 10px 14px 12px;
  font-size: 15px;
  font-weight: 500;
  color: #333333;
  border-bottom: 3px solid transparent;
  transition: color 0.2s, border-color 0.2s;
  white-space: nowrap;
}
.nav-link:hover { color: var(--orange); }
.nav-link.active {
  color: var(--orange);
  font-weight: 600;
  border-bottom-color: var(--orange);
}
.arrow {
  font-size: 11px;
  color: #555;
  margin-left: 2px;
  line-height: 1;
}

/* Dropdown */
.dropdown {
  display: none;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background: var(--white);
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  min-width: 
```

## Pattern 3: Styling / layout system · styles.css
- Category: ui.styling
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
:root {
  --bg: #f0f4f9;
  --bg-accent: #e4ecf5;
  --surface: #ffffff;
  --surface-soft: #f8fafc;
  --surface-raised: #ffffff;
  --line: #e2e8f0;
  --line-strong: #cbd5e1;
  --text: #0f172a;
  --muted: #64748b;
  --primary: #0f2744;
  --primary-hover: #163a66;
  --primary-2: #0a1c30;
  --accent: #0d9488;
  --accent-soft: #ccfbf1;
  --accent-glow: rgba(13, 148, 136, 0.15);
  --danger: #dc2626;
  --danger-soft: #fee2e2;
  --warn: #d97706;
  --warn-soft: #fef3c7;
  --ok: #059669;
  --shadow-sm: 0 1px 3px rgba(15, 39, 68, 0.06);
  --shadow: 0 8px 30px rgba(15, 39, 68, 0.08);
  --shadow-lg: 0 20px 50px rgba(15, 39, 68, 0.12);
  --radius: 12px;
  --radius-sm: 8px;
  --transition: 0.18s ease;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: var(--bg);
  background-image:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(13, 148, 136, 0.08), transparent),
    radial-gradient(ellipse 60% 40% at 100% 0%, rgba(15, 39, 68, 0.05), transparent);
  color: var(--text);
  font-family: "Plus Jakarta Sans", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  border: 0;
}

a {
  color: inherit;
}

/* ── Login ── */

.login-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(380px, 46%) minmax(420px, 1fr);
}

.login-brand {
  background: linear-gradient(165deg, #0f2744 0%, #0a1c30 42%, #064e3b 100%);
  color: #fff;
  padding: 52px 56px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.login-brand::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 85%, rgba(13, 148, 136, 0.32), transparent 45%),
    radial-gradient(circle at 85% 15%, rgba(255, 255, 255, 0.07), transparent 38%);
  pointer-events: none;
}

.login-brand::after {
  content: "";
  position: absolute;
  right: -120px;
  bottom: -120px;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  pointer-events: none;
}

.login-brand > * {
  position: relative;
  z-index: 1;
}

.login-brand-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
}

.login-brand-badge {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.88);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.brand-mark {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, #fff 0%, #e2e8f0 100%);
  color: var(--primary);
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 26px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
  flex-shrink: 0;
}

.login-brand h1 {
  font-size: 38px;
  line-height: 1.1;
  margin: 0 0 14px;
  font-weight: 800;
  letter-spacing: -0.03em;
  max-width: 420px;
}

.login-brand-top p {
  color: rgba(255, 255, 255, 0.72);
  lin
```

## Pattern 4: Styling / layout system · styles.css
- Category: ui.styling
- Quality: 95 · Status: approved
Project-scoped learning extracted through the unified quality gate. Current project and explicit developer instructions always win.
```
:root {
  color-scheme: light;
  --bg: #f4f7f0;
  --panel: #ffffff;
  --panel-soft: #f9fbf7;
  --line: #d8e3d1;
  --text: #17311b;
  --muted: #5d715f;
  --accent: #245c2b;
  --accent-strong: #17311b;
  --accent-soft: #e9f5e8;
  --warning-soft: #fdf7e8;
  --warning-text: #8a6116;
  --danger: #b42318;
  --danger-soft: #fff1ef;
  --shadow: 0 24px 60px rgba(23, 49, 27, 0.08);
  --radius-lg: 28px;
  --radius-md: 18px;
  --radius-sm: 12px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Segoe UI", Arial, sans-serif;
  background:
    radial-gradient(circle at top left, rgba(102, 187, 106, 0.18), transparent 28%),
    linear-gradient(180deg, #f9fbf7 0%, var(--bg) 100%);
  color: var(--text);
}

button,
input,
textarea,
select {
  font: inherit;
}

code {
  padding: 2px 6px;
  border-radius: 999px;
  background: #eff5ec;
  font-size: 0.9em;
}

.hidden {
  display: none !important;
}

.admin-app {
  display: grid;
  grid-template-columns: minmax(280px, 340px) 1fr;
  min-height: 100vh;
}

.admin-sidebar {
  padding: 42px 30px;
  background:
    linear-gradient(160deg, rgba(36, 92, 43, 0.98), rgba(19, 49, 27, 0.96)),
    #17311b;
  color: #f7fff8;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.sidebar-top {
  display: grid;
  gap: 16px;
}

.eyebrow {
  margin: 0;
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.76);
}

.eyebrow.dark {
  color: var(--accent);
}

.admin-sidebar h1,
.admin-main h2 {
  margin: 0;
  font-size: clamp(1.9rem, 3vw, 3rem);
  line-height: 1.02;
}

.sidebar-copy {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
}

.admin-nav {
  display: grid;
  gap: 10px;
}

.nav-link,
.primary-btn,
.ghost-btn,
.filter-btn,
.delete-btn {
  border: none;
  border-radius: 999px;
  padding: 12px 18px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.nav-link {
  text-align: left;
  background: rgba(255, 255, 255, 0.08);
  color: #eff9f1;
}

.nav-link.active {
  background: #f1f9f1;
  color: var(--accent-strong);
}

.primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--accent), #31763b);
  color: #fff;
  box-shadow: 0 12px 30px rgba(36, 92, 43, 0.2);
}

.primary-btn:disabled,
.primary-btn.is-loading {
  cursor: wait;
  opacity: 0.78;
  transform: none;
}

.primary-btn.is-loading::before {
  content: "";
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}

.ghost-btn,
.filter-btn {
  background: #eff5ec;
  color: var(--accent);
}

.delete-btn {
  background: var(--danger-soft);
  color: var(--danger);
}

.nav-link:hover,
.primary-btn:hover,
.ghost-btn:hover,
.filter-btn:hover,
.delete-btn:hover {
  transform: translateY(-1px);
}

.primary-btn:disabled:hover,
.primary-btn.is-loading:hover {
  transform: none;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.sidebar-note {
  margin-top: auto;
  padding: 18px
```