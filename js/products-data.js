/**
 * Kanha Global Exports - Products Database
 * Complete catalog with images, categories, origins, packaging and specifications
 */

(function() {
  // Category default high-resolution curated image fallbacks
  const CATEGORY_DEFAULT_IMAGES = {
    'spices': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80',
    'basmati-rice': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
    'non-basmati-rice': 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&auto=format&fit=crop&q=80',
    'pulses': 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=600&auto=format&fit=crop&q=80',
    'seafood': 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&auto=format&fit=crop&q=80',
    'fresh-fruits': 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&auto=format&fit=crop&q=80',
    'fresh-vegetables': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80',
    'fruits-vegetables': 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&auto=format&fit=crop&q=80',
    'dehydrated': 'https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=600&auto=format&fit=crop&q=80',
    'oil-seeds': 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&auto=format&fit=crop&q=80',
    'groundnuts-cashews': 'https://images.unsplash.com/photo-1569466896818-335b1bedfcce?w=600&auto=format&fit=crop&q=80',
    'cereals-millets': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&auto=format&fit=crop&q=80',
    'flours-grains': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80',
    'tea-coffee': 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80',
    'honey-agro': 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=80',
    'processed-foods': 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=600&auto=format&fit=crop&q=80',
    'marine': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80',
    'poultry': 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&auto=format&fit=crop&q=80',
    'livestock': 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&auto=format&fit=crop&q=80'
  };

  const tradeProducts = [
    // 1. Spices
    {
      id: 'spices-turmeric',
      slug: 'turmeric-finger-powder',
      name: 'Turmeric (Finger & Powder)',
      category: 'spices',
      categoryName: 'Spices',
      image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=700&auto=format&fit=crop&q=80',
      origin: 'Salem / Nizamabad, India',
      packaging: '25kg / 50kg PP / Jute Bags',
      specs: 'Curcumin 2.5% to 5.0%, Moisture < 10%, Machine Cleaned & Polished',
      description: 'Golden yellow export-grade Indian turmeric fingers and ultra-fine powder with high natural curcumin content.'
    },
    {
      id: 'spices-red-chilli',
      slug: 'red-chilli-sannam-teja',
      name: 'Red Chilli (S4 / S17 / Teja / Stemless)',
      category: 'spices',
      categoryName: 'Spices',
      image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=700&auto=format&fit=crop&q=80',
      origin: 'Guntur / Byadgi, India',
      packaging: '10kg / 25kg / 50kg Jute / PP Bags',
      specs: 'SHU 20,000 - 75,000, ASTA Color 40-120, Moisture < 11%',
      description: 'Pungent, vibrant red Indian dry chillies sourced directly from Guntur and Byadgi, available with or without stem.'
    },
    {
      id: 'spices-cumin-seeds',
      slug: 'cumin-seeds-jeera',
      name: 'Cumin Seeds (Jeera)',
      category: 'spices',
      categoryName: 'Spices',
      image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=700&auto=format&fit=crop&q=80',
      origin: 'Gujarat / Rajasthan, India',
      packaging: '25kg / 50kg PP / Paper Bags',
      specs: 'Purity 99% / 99.5% Sortex Clean, Singapore/Europe Quality, Volatile Oil > 2.5%',
      description: 'Aromatic Gujarat cumin seeds, machine and sortex cleaned with intense flavor profile for culinary and extraction use.'
    },
    {
      id: 'spices-coriander-seeds',
      slug: 'coriander-seeds-dhaniya',
      name: 'Coriander Seeds (Dhaniya)',
      category: 'spices',
      categoryName: 'Spices',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=700&auto=format&fit=crop&q=80',
      origin: 'Rajasthan / MP, India',
      packaging: '25kg / 40kg Jute / PP Bags',
      specs: 'Eagle / Single Parrot / Double Parrot Quality, Greenish Whole, Moisture < 9%',
      description: 'Selected whole green coriander seeds with distinctive citrusy fragrance and rich essential oil content.'
    },
    {
      id: 'spices-black-pepper',
      slug: 'black-pepper-garbled',
      name: 'Black Pepper (500GL - 550GL)',
      category: 'spices',
      categoryName: 'Spices',
      image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=700&auto=format&fit=crop&q=80',
      origin: 'Kerala / Karnataka, India',
      packaging: '25kg / 50kg Paper / Jute Bags',
      specs: 'Garbled / Ungarbled, Density 500-570 g/l, Piperine > 4%, Moisture < 12%',
      description: 'The King of Spices: authentic Malabar black peppercorns offering robust heat and strong pungency.'
    },
    {
      id: 'spices-cardamom',
      slug: 'green-cardamom-elaichi',
      name: 'Green Cardamom (6mm - 8mm+)',
      category: 'spices',
      categoryName: 'Spices',
      image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=700&auto=format&fit=crop&q=80',
      origin: 'Idukki, Kerala, India',
      packaging: '5kg / 10kg Master Cartons with vacuum liner',
      specs: 'Sizes: 6mm, 7mm, 8mm, 8.5mm Bold Green, Moisture < 10%',
      description: 'Premium grade large green cardamom pods with high volatile oil aroma and intact seeds.'
    },
    {
      id: 'spices-cloves',
      slug: 'cloves-whole-laung',
      name: 'Cloves (Laung)',
      category: 'spices',
      categoryName: 'Spices',
      image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=700&auto=format&fit=crop&q=80',
      origin: 'India / Origin Certified',
      packaging: '10kg / 25kg PP & Jute Bags',
      specs: 'Hand-picked Whole, Head intact > 90%, Eugenol > 15%',
      description: 'Intensely fragrant whole cloves, naturally sun-dried with rich spicy warmth and essential eugenol.'
    },
    {
      id: 'spices-fenugreek',
      slug: 'fenugreek-seeds-methi',
      name: 'Fenugreek Seeds (Methi)',
      category: 'spices',
      categoryName: 'Spices',
      image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600&auto=format&fit=crop&q=80',
      origin: 'Rajasthan / Gujarat, India',
      packaging: '25kg / 50kg Bags',
      specs: 'Machine Cleaned 99% / Sortex 99.5% Purity, Yellowish Golden',
      description: 'High grade golden fenugreek seeds ideal for culinary seasoning and pharmaceutical nutraceutical applications.'
    },
    {
      id: 'spices-mustard',
      slug: 'mustard-seeds-rai',
      name: 'Mustard Seeds (Black / Yellow)',
      category: 'spices',
      categoryName: 'Spices',
      image: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat / Rajasthan, India',
      packaging: '25kg / 50kg PP Bags',
      specs: 'Purity 99.5%, Oil Content 38-42%, Moisture < 8%',
      description: 'High-oil content black and yellow mustard seeds, triple cleaned for spice blends and condiment processing.'
    },

    // 2. Basmati Rice
    {
      id: 'basmati-1121',
      slug: '1121-basmati-rice-steam-sella',
      name: '1121 Basmati Rice (Steam / Sella / Golden)',
      category: 'basmati-rice',
      categoryName: 'Basmati Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
      origin: 'Punjab / Haryana, India',
      packaging: '1kg / 5kg / 10kg / 25kg / 50kg Non-Woven & BOPP Bags',
      specs: 'Grain Length: 8.35mm - 8.40mm, Elongation: 2.5x, Moisture < 12.5%',
      description: 'World renowned extra long grain 1121 Basmati rice with exquisite aroma and non-sticky fluffy texture upon cooking.'
    },
    {
      id: 'basmati-1509',
      slug: '1509-basmati-rice',
      name: '1509 Basmati Rice (Raw / Steam / Sella)',
      category: 'basmati-rice',
      categoryName: 'Basmati Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
      origin: 'Punjab / Haryana / UP, India',
      packaging: '5kg / 25kg / 50kg Export Bags',
      specs: 'Grain Length: 8.30mm+, Moisture < 12.5%, Sortex Clean 100%',
      description: 'Economical yet ultra-long grain basmati offering outstanding cooking elongation and subtle sweet taste.'
    },
    {
      id: 'basmati-1401',
      slug: '1401-basmati-rice',
      name: '1401 Basmati Rice (Steam & Sella)',
      category: 'basmati-rice',
      categoryName: 'Basmati Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
      origin: 'Haryana / Punjab, India',
      packaging: '25kg / 50kg PP / Jute Bags',
      specs: 'Average Grain Length: 7.70mm+, Moisture < 12.5%, Broken < 1%',
      description: 'Hybrid variety noted for exceptional cooking volume, delightful aroma, and excellent grain integrity.'
    },
    {
      id: 'basmati-traditional',
      slug: 'traditional-authentic-basmati-rice',
      name: 'Traditional Authentic Basmati Rice',
      category: 'basmati-rice',
      categoryName: 'Basmati Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
      origin: 'Himalayan Foothills, India',
      packaging: '5kg / 10kg / 25kg Master Bags',
      specs: 'Aged 1-2 Years, Grain Length 7.3mm, Unmatched Natural Fragrance',
      description: 'Naturally aged classic authentic Basmati rice harvested from the Himalayan foothills, the pinnacle of gourmet dining.'
    },
    {
      id: 'basmati-sugandha',
      slug: 'sugandha-basmati-rice',
      name: 'Sugandha Basmati Rice',
      category: 'basmati-rice',
      categoryName: 'Basmati Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
      origin: 'North India',
      packaging: '25kg / 50kg Bags',
      specs: 'Grain Length: 7.80mm+, 100% Sortex Clean, Moisture < 13%',
      description: 'Fragrant and slender medium-long grain rice widely preferred across catering and Middle Eastern cuisines.'
    },
    {
      id: 'basmati-pusa',
      slug: 'pusa-basmati-rice',
      name: 'Pusa Basmati Rice',
      category: 'basmati-rice',
      categoryName: 'Basmati Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
      origin: 'Punjab, India',
      packaging: '25kg / 50kg Bags',
      specs: 'Grain Length: 7.40mm+, Silky Raw / Steam, Moisture < 12.5%',
      description: 'Classic hybrid offering rich aromatic compounds and elegant slender shape after preparation.'
    },
    {
      id: 'basmati-sharbati',
      slug: 'sharbati-rice',
      name: 'Sharbati Rice (Steam / Sella)',
      category: 'basmati-rice',
      categoryName: 'Basmati Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
      origin: 'Uttar Pradesh / Punjab, India',
      packaging: '25kg / 50kg PP Bags',
      specs: 'Grain Length: 7.10mm, Broken < 1%, Moisture < 13%',
      description: 'Highly cost-effective aromatic long grain rice suitable for large-scale institutional and restaurant supply.'
    },

    // 3. Non-Basmati Rice
    {
      id: 'non-basmati-ir64',
      slug: 'ir-64-parboiled-raw-rice',
      name: 'IR-64 Long Grain Rice (Parboiled / Raw 5% - 25% Broken)',
      category: 'non-basmati-rice',
      categoryName: 'Non-Basmati Rice',
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&auto=format&fit=crop&q=80',
      origin: 'Andhra Pradesh / Maharashtra, India',
      packaging: '25kg / 50kg PP Bags / Bulk Containers',
      specs: 'Grain Length: 6.0mm+, Broken: 5% / 25% / 100%, Moisture < 14%',
      description: 'India’s most exported staple non-basmati rice variety, ideal for global food security tenders and retail.'
    },
    {
      id: 'non-basmati-sona-masoori',
      slug: 'sona-masoori-raw-steam-rice',
      name: 'Sona Masoori Rice (Raw & Steam)',
      category: 'non-basmati-rice',
      categoryName: 'Non-Basmati Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
      origin: 'Karnataka / Andhra Pradesh, India',
      packaging: '5kg / 10kg / 20kg / 25kg Poly Woven Bags',
      specs: 'Medium Grain, Lightweight, Low Starch, Aged Quality, Moisture < 13%',
      description: 'Delicate medium-grain aromatic table rice, highly valued for its light texture and easy digestibility.'
    },
    {
      id: 'non-basmati-swarna',
      slug: 'swarna-rice-parboiled',
      name: 'Swarna Rice (Parboiled / Raw)',
      category: 'non-basmati-rice',
      categoryName: 'Non-Basmati Rice',
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&auto=format&fit=crop&q=80',
      origin: 'West Bengal / Odisha, India',
      packaging: '50kg PP Bags',
      specs: 'Short-Medium Grain, Sortex Cleaned, Broken < 5%, Moisture < 14%',
      description: 'Economical high-energy short grain parboiled rice widely exported to African and Asian markets.'
    },
    {
      id: 'non-basmati-jeera-samba',
      slug: 'jeerakasala-seeraga-samba-rice',
      name: 'Jeerakasala / Seeraga Samba Rice',
      category: 'non-basmati-rice',
      categoryName: 'Non-Basmati Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
      origin: 'Tamil Nadu / Kerala, India',
      packaging: '10kg / 25kg Bags',
      specs: 'Tiny Oval Grain, Intensely Fragrant, Moisture < 12%',
      description: 'South India’s prized biryani rice variety with signature small oval grains and rich distinct scent.'
    },
    {
      id: 'non-basmati-broken',
      slug: '100-percent-broken-raw-parboiled-rice',
      name: '100% Broken Rice (Raw / Parboiled)',
      category: 'non-basmati-rice',
      categoryName: 'Non-Basmati Rice',
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&auto=format&fit=crop&q=80',
      origin: 'India',
      packaging: '50kg PP Bags / Jumbo Bags',
      specs: 'Broken 100%, Double Polished, Cleaned, Moisture < 14%',
      description: 'Ideal for brewing, flour milling, noodles, animal feed, and processed food formulations.'
    },

    // 4. Pulses & Lentils
    {
      id: 'pulses-chickpeas',
      slug: 'chickpeas-kabuli-chana',
      name: 'Kabuli Chickpeas / Garbanzo (40-42 to 75-80 count)',
      category: 'pulses',
      categoryName: 'Pulses',
      image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=600&auto=format&fit=crop&q=80',
      origin: 'Madhya Pradesh / Maharashtra, India',
      packaging: '25kg / 50kg PP Bags',
      specs: 'Counts: 42-44, 44-46, 58-60, 75-80; Machine Cleaned / Sortex 99.5%',
      description: 'Large, plump, cream-colored Kabuli chickpeas sorted for uniform count, ideal for canning and culinary dishes.'
    },
    {
      id: 'pulses-red-lentils',
      slug: 'red-lentils-masoor-dal',
      name: 'Red Lentils (Masoor Dal / Football / Split)',
      category: 'pulses',
      categoryName: 'Pulses',
      image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=600&auto=format&fit=crop&q=80',
      origin: 'Central India',
      packaging: '25kg / 50kg Export Bags',
      specs: 'Purity 99.5%, Sortex Cleaned, Polished / Unpolished, Moisture < 11%',
      description: 'Bright orange-red split and whole lentils with high vegetable protein and rapid cooking properties.'
    },
    {
      id: 'pulses-toor-dal',
      slug: 'toor-dal-pigeon-peas',
      name: 'Toor Dal / Pigeon Peas (Yellow Split)',
      category: 'pulses',
      categoryName: 'Pulses',
      image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat / Maharashtra, India',
      packaging: '25kg / 50kg Bags',
      specs: 'Sortex Cleaned, Oiled / Non-Oiled, Moisture < 12%',
      description: 'Dehulled and split yellow pigeon peas, the premier staple pulse across Indian and South Asian cuisine.'
    },
    {
      id: 'pulses-moong-beans',
      slug: 'green-moong-beans-split',
      name: 'Green Mung Beans (Whole & Split)',
      category: 'pulses',
      categoryName: 'Pulses',
      image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=600&auto=format&fit=crop&q=80',
      origin: 'Rajasthan / MP, India',
      packaging: '25kg / 50kg PP Bags',
      specs: 'Size: 3.5mm - 4.0mm+, Machine Cleaned, Germination > 90% (Sprouting Grade)',
      description: 'Nutrient-rich shiny green mung beans suitable for direct cooking, dal making, and fresh sprouting.'
    },
    {
      id: 'pulses-urad-dal',
      slug: 'black-matpe-urad-dal',
      name: 'Black Matpe / Urad Dal (Whole & Dehusked)',
      category: 'pulses',
      categoryName: 'Pulses',
      image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=600&auto=format&fit=crop&q=80',
      origin: 'India',
      packaging: '25kg / 50kg PP Bags',
      specs: 'Machine Cleaned / Sortex 99.5%, Moisture < 12%',
      description: 'High-protein black and white dehulled urad lentils used in papads, batters, and traditional savory dishes.'
    },

    // 5. Seafood (Frozen)
    {
      id: 'seafood-vannamei-shrimp',
      slug: 'frozen-vannamei-white-shrimp',
      name: 'Frozen Vannamei White Shrimp (HOSO / HLSO / PD / PUD)',
      category: 'seafood',
      categoryName: 'Seafood (Frozen)',
      image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&auto=format&fit=crop&q=80',
      origin: 'Coastal Andhra / Gujarat, India',
      packaging: 'Block Frozen (6x1.8kg / 6x2kg) & IQF (10x1kg bags)',
      specs: 'Counts: 16/20, 21/25, 26/30, 31/40, 41/50, EU & USFDA Approved Plants',
      description: 'Farm-fresh premium white leg shrimp processed under rigorous HACCP and BRC certified freezing facilities.'
    },
    {
      id: 'seafood-black-tiger',
      slug: 'frozen-black-tiger-shrimp',
      name: 'Frozen Black Tiger Shrimp',
      category: 'seafood',
      categoryName: 'Seafood (Frozen)',
      image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&auto=format&fit=crop&q=80',
      origin: 'West Bengal / Odisha, India',
      packaging: 'IQF / Block Frozen in master cartons',
      specs: 'Counts: 8/12, 13/15, 16/20, 21/25, Chemical Free / Treated',
      description: 'Jumbo succulent black tiger shrimp with firm texture and distinct sweet ocean flavor.'
    },
    {
      id: 'seafood-ribbon-fish',
      slug: 'frozen-ribbon-fish-whole',
      name: 'Frozen Ribbon Fish (Trichiurus lepturus)',
      category: 'seafood',
      categoryName: 'Seafood (Frozen)',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat / Maharashtra Coast, India',
      packaging: '10kg / 20kg Master Carton (Block Frozen)',
      specs: 'Sizes: 100/200g, 200/300g, 300/400g, 400/700g, 700g+',
      description: 'Whole round sea-frozen ribbon fish with shimmering silver skin, heavily exported to East Asia.'
    },
    {
      id: 'seafood-cuttlefish-squid',
      slug: 'frozen-squid-and-cuttlefish',
      name: 'Frozen Squid & Cuttlefish (Whole / Rings / Tubes)',
      category: 'seafood',
      categoryName: 'Seafood (Frozen)',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80',
      origin: 'Veraval / Kochi, India',
      packaging: 'IQF / Block 10kg Master Cartons',
      specs: 'Whole Cleaned, Rings, Tubes, U5, U10, 10/20, 20/40 count',
      description: 'Tender ocean-caught squid and cuttlefish processed with pristine hygiene standards.'
    },
    {
      id: 'seafood-yellowfin-tuna',
      slug: 'frozen-yellowfin-tuna',
      name: 'Frozen Yellowfin Tuna (Loins / Steaks / Whole)',
      category: 'seafood',
      categoryName: 'Seafood (Frozen)',
      image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&auto=format&fit=crop&q=80',
      origin: 'Indian Ocean / Arabian Sea',
      packaging: 'Vacuum Packed IQF Loins / SASHIMI & CO-Treated',
      specs: 'Grade A / AA, Deep Red Meat, Histamine < 30ppm',
      description: 'Super-frozen yellowfin tuna loins and steaks suited for premium dining and foodservice distributors.'
    },

    // 6. Fresh Fruits
    {
      id: 'fruits-alphonso-mango',
      slug: 'fresh-alphonso-kesar-mangoes',
      name: 'Fresh Mangoes (Alphonso / Kesar / Banganapalli)',
      category: 'fresh-fruits',
      categoryName: 'Fresh Fruits',
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&auto=format&fit=crop&q=80',
      origin: 'Ratnagiri / Gir Gujarat, India',
      packaging: '3kg / 4.5kg Corrugated Export Boxes (Hot Water / Irradiation Treated)',
      specs: 'Export Grade, Size 200g-320g, Brix 18-22%, APEDA Approved Packhouses',
      description: 'World-famous king of mangoes known for its heavenly scent, rich saffron pulp, and velvety sweetness.'
    },
    {
      id: 'fruits-pomegranate',
      slug: 'fresh-bhagwa-pomegranate',
      name: 'Fresh Pomegranate (Bhagwa Variety)',
      category: 'fresh-fruits',
      categoryName: 'Fresh Fruits',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80',
      origin: 'Maharashtra / Gujarat, India',
      packaging: '3.5kg / 4.0kg / 5.0kg Export Cartons',
      specs: 'Counts: 9, 10, 12, 14, 15 (200g to 400g+ per piece), Deep Red Arils, Sweet',
      description: 'Glossy red Bhagwa pomegranates with ruby-red soft seeds, rich in antioxidants and shipped via Reefer air/sea cargo.'
    },
    {
      id: 'fruits-grapes',
      slug: 'fresh-indian-grapes-thompson-black',
      name: 'Fresh Table Grapes (Thompson Seedless / Sonaka / Sharad / Crimson)',
      category: 'fresh-fruits',
      categoryName: 'Fresh Fruits',
      image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=600&auto=format&fit=crop&q=80',
      origin: 'Nashik / Sangli, Maharashtra, India',
      packaging: '4.5kg / 5.0kg / 9.0kg Punnets & Pouch Master Boxes',
      specs: 'Berry Size 16mm-20mm+, Brix > 16%, GlobalGAP Certified',
      description: 'Crisp, sweet, and uniform Indian table grapes exported globally with complete residue monitoring (GrapeNet).'
    },
    {
      id: 'fruits-banana',
      slug: 'fresh-cavendish-banana-g9',
      name: 'Fresh Cavendish Bananas (Grand Naine - G9)',
      category: 'fresh-fruits',
      categoryName: 'Fresh Fruits',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat / Maharashtra / Tamil Nadu, India',
      packaging: '7kg / 13kg / 18.14kg Vacuum Packed Export Cartons',
      specs: 'Length 18cm-22cm+, Caliber 39-47mm, Fresh Green Harvest',
      description: 'Firm green Cavendish bananas carefully packed in modified atmosphere bags for optimal ripening upon destination arrival.'
    },
    {
      id: 'fruits-guava-papaya',
      slug: 'fresh-taiwan-pink-guava-red-lady-papaya',
      name: 'Fresh Guava (Taiwan Pink) & Papaya (Red Lady)',
      category: 'fresh-fruits',
      categoryName: 'Fresh Fruits',
      image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat / Andhra Pradesh, India',
      packaging: '5kg / 6kg / 10kg CFB Boxes with foam netting',
      specs: 'Uniform weight, Crisp Flesh, Free from blemishes',
      description: 'Tropical fresh Indian pink guavas and sweet Red Lady papayas packed with vitamin C and vital nutrients.'
    },

    // 7. Fresh Vegetables
    {
      id: 'veg-red-onion',
      slug: 'fresh-red-onions-nashik-gujarat',
      name: 'Fresh Red Onions (Nashik / Mahuva)',
      category: 'fresh-vegetables',
      categoryName: 'Fresh Vegetables',
      image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&auto=format&fit=crop&q=80',
      origin: 'Nashik / Gujarat, India',
      packaging: '5kg / 10kg / 25kg / 50kg Red Mesh / Leno Bags',
      specs: 'Sizes: 25-35mm (Gulf), 45-55mm, 55mm+ (Europe/Asia), Well Cured',
      description: 'Pungent, globe-shaped red onions with tight skins, cured naturally for superior shelf-life during ocean transit.'
    },
    {
      id: 'veg-fresh-ginger',
      slug: 'fresh-green-ginger',
      name: 'Fresh Ginger (Cleaned / Unwashed)',
      category: 'fresh-vegetables',
      categoryName: 'Fresh Vegetables',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80',
      origin: 'Assam / Kerala / Karnataka, India',
      packaging: '10kg / 20kg Mesh Bags / Plastic Crates',
      specs: 'Fat fingers 100g-250g+, Cleaned, Low Fiber, High Aroma',
      description: 'Spicy, plump fresh ginger rhizomes harvested from prime growing belts with high essential gingerol content.'
    },
    {
      id: 'veg-fresh-garlic',
      slug: 'fresh-garlic-bulbs-desi-ooty',
      name: 'Fresh Garlic Bulbs (White / Desi / Ooty)',
      category: 'fresh-vegetables',
      categoryName: 'Fresh Vegetables',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80',
      origin: 'Madhya Pradesh / Gujarat, India',
      packaging: '10kg / 20kg / 25kg Mesh Bags & Cartons',
      specs: 'Sizes: 30mm, 40mm, 50mm+, Pure White / Purple Streaked, Strong Pungency',
      description: 'Aromatic garlic bulbs with firm cloves, long-lasting pungency, and medicinal organosulfur qualities.'
    },
    {
      id: 'veg-green-chilli',
      slug: 'fresh-green-chillies-g4-jwalan',
      name: 'Fresh Green Chillies (G4 / Jwala / Bullet)',
      category: 'fresh-vegetables',
      categoryName: 'Fresh Vegetables',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat / Maharashtra, India',
      packaging: '3.5kg / 4kg / 5kg Air-vented Cartons via Air Cargo',
      specs: 'Length: 7-12cm, Fresh Dark Green, Crisp Stem Intact',
      description: 'Air-freighted hot green chillies harvested and graded same-day to maintain maximum freshness and heat.'
    },
    {
      id: 'veg-potatoes-lemon',
      slug: 'fresh-potatoes-and-seedless-lemons',
      name: 'Fresh Potatoes (Lady Rosetta / Chipsona) & Lemons',
      category: 'fresh-vegetables',
      categoryName: 'Fresh Vegetables',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat / Punjab, India',
      packaging: '10kg / 25kg / 50kg Bags & Cartons',
      specs: 'High dry matter for processing / table use, sorted & graded',
      description: 'Standardized table and processing potatoes plus juicy yellow Indian lemons packed for global delivery.'
    },

    // 8. Dehydrated Products
    {
      id: 'dehydrated-onion',
      slug: 'dehydrated-onion-flakes-minced-powder',
      name: 'Dehydrated Onion (Flakes / Minced / Chopped / Powder)',
      category: 'dehydrated',
      categoryName: 'Dehydrated Products',
      image: 'https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=600&auto=format&fit=crop&q=80',
      origin: 'Mahuva, Gujarat, India',
      packaging: '14kg / 20kg / 25kg Poly-lined Cartons & Paper Sacks',
      specs: 'White / Red / Pink Onion, Moisture < 5%, SO2 < 50ppm / Nil, Micro-tested',
      description: 'World capital of dehydrated onions Mahuva provides premium flakes, granules, minced, and powder for seasonings.'
    },
    {
      id: 'dehydrated-garlic',
      slug: 'dehydrated-garlic-flakes-powder-granules',
      name: 'Dehydrated Garlic (Flakes / Granules / Powder)',
      category: 'dehydrated',
      categoryName: 'Dehydrated Products',
      image: 'https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat, India',
      packaging: '20kg / 25kg Poly-lined Master Cartons',
      specs: 'Allin > 0.45%, Moisture < 6%, Mesh: 40-60, 80-100, Flakes, Export Grade',
      description: 'Pure dehydrated Indian garlic free from adulterants, maintaining the authentic taste and sharp aroma of fresh garlic.'
    },
    {
      id: 'dehydrated-vegetables',
      slug: 'dehydrated-ginger-green-chilli-tomato-powder',
      name: 'Dehydrated Ginger, Green Chilli & Tomato Powder',
      category: 'dehydrated',
      categoryName: 'Dehydrated Products',
      image: 'https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat, India',
      packaging: '10kg / 20kg Corrugated Boxes with LDPE Liner',
      specs: '100% Pure Spray-Dried / Air-Dried, Instant Soluble / Rehydratable',
      description: 'Versatile dried vegetable powders and flakes used in instant soups, marinades, snack seasonings, and ready meals.'
    },

    // 9. Oil Seeds
    {
      id: 'oilseeds-sesame-natural',
      slug: 'natural-white-sesame-seeds',
      name: 'Natural White Sesame Seeds (99/1 / 99.9% Sortex)',
      category: 'oil-seeds',
      categoryName: 'Oil Seeds',
      image: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat, India',
      packaging: '25kg / 50kg PP / Paper Bags / Big Bags',
      specs: 'Purity: 99%, 99.9%, 99.95%, Oil Content > 48%, Moisture < 5%',
      description: 'Cleaned Gujarat natural sesame seeds with high oil content and nutty aroma, perfect for oil crushing and bakery.'
    },
    {
      id: 'oilseeds-sesame-hulled',
      slug: 'hulled-sesame-seeds-auto-dry',
      name: 'Hulled Sesame Seeds (Auto-Dried / Sun-Dried 99.99%)',
      category: 'oil-seeds',
      categoryName: 'Oil Seeds',
      image: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat, India',
      packaging: '25kg / 50kg Multiwall Paper Bags with PE Liner',
      specs: 'Purity: 99.95% / 99.99% Mechanically Hulled & Auto Dried, Pure White',
      description: 'Pristine white hulled sesame seeds processed mechanically without chemicals for premium confectioneries and tahini.'
    },
    {
      id: 'oilseeds-black-sesame',
      slug: 'black-sesame-seeds',
      name: 'Black Sesame Seeds (Natural / Sortex Cleaned)',
      category: 'oil-seeds',
      categoryName: 'Oil Seeds',
      image: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat / Rajasthan, India',
      packaging: '25kg / 50kg Bags',
      specs: 'Purity 99% / 99.5%, Oil > 45%, Deep Jet Black',
      description: 'Rich dark black sesame seeds prized in gourmet culinary toppings, sushi, and health oil extracts.'
    },
    {
      id: 'oilseeds-flaxseeds',
      slug: 'brown-flax-seeds-linseed',
      name: 'Flax Seeds / Linseed (Brown / Golden)',
      category: 'oil-seeds',
      categoryName: 'Oil Seeds',
      image: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&auto=format&fit=crop&q=80',
      origin: 'Madhya Pradesh, India',
      packaging: '25kg / 50kg PP Bags',
      specs: 'Sortex Clean 99.9%, Omega-3 Rich, Moisture < 7%',
      description: 'Superfood linseed rich in ALA Omega-3 fatty acids and dietary lignans, sortex cleaned for health food blends.'
    },
    {
      id: 'oilseeds-castor-seeds',
      slug: 'castor-seeds-and-castor-oil',
      name: 'Castor Seeds & Industrial Castor Oil (FSG / Commercial)',
      category: 'oil-seeds',
      categoryName: 'Oil Seeds',
      image: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat, India (Global Castor Hub)',
      packaging: 'Flexibags / 200kg Steel Drums / IBC Totes',
      specs: 'First Special Grade (FSG), Pale Yellow, Ricinoleic Acid > 85%',
      description: 'High grade Indian castor seeds and derivatives exported globally for pharmaceuticals, lubricants, and polymers.'
    },

    // 10. Groundnuts & Cashews
    {
      id: 'nuts-peanuts-bold',
      slug: 'raw-peanuts-bold-variety',
      name: 'Raw Groundnuts / Peanuts (Bold Type 38/42 to 70/80)',
      category: 'groundnuts-cashews',
      categoryName: 'Groundnuts & Cashews',
      image: 'https://images.unsplash.com/photo-1569466896818-335b1bedfcce?w=600&auto=format&fit=crop&q=80',
      origin: 'Saurashtra, Gujarat, India',
      packaging: '25kg / 50kg Jute / Vacuum Bags',
      specs: 'Counts: 38/42, 40/50, 50/60, 60/70; Moisture < 7%, Aflatoxin < 4ppb / 10ppb',
      description: 'Saurashtra bold peanuts, machine sorted and tested with strict European Aflatoxin compliance.'
    },
    {
      id: 'nuts-peanuts-java',
      slug: 'raw-peanuts-java-type',
      name: 'Raw Groundnuts (Java Type 50/60 to 80/90)',
      category: 'groundnuts-cashews',
      categoryName: 'Groundnuts & Cashews',
      image: 'https://images.unsplash.com/photo-1569466896818-335b1bedfcce?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat, India',
      packaging: '25kg / 50kg Jute & PP Bags',
      specs: 'Round pink kernel, High sweet oil taste, Moisture < 7%',
      description: 'Sweet round Java peanut kernels widely utilized for peanut butter manufacturing and confectionery snacking.'
    },
    {
      id: 'nuts-blanched-peanuts',
      slug: 'blanched-peanut-kernels',
      name: 'Blanched Peanuts (Whole & Splits)',
      category: 'groundnuts-cashews',
      categoryName: 'Groundnuts & Cashews',
      image: 'https://images.unsplash.com/photo-1569466896818-335b1bedfcce?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat, India',
      packaging: '10kg / 25kg Vacuum Packs with Carton',
      specs: 'Blanched Whole 40/50, 50/60 & Splits, Skin Retained < 1%',
      description: 'Skinless creamy blanched peanut kernels roasted or ready-to-use for gourmet baking and candy bars.'
    },
    {
      id: 'nuts-cashews',
      slug: 'cashew-nuts-w180-w240-w320',
      name: 'Indian Cashew Kernels (W180, W210, W240, W320, Splits)',
      category: 'groundnuts-cashews',
      categoryName: 'Groundnuts & Cashews',
      image: 'https://images.unsplash.com/photo-1569466896818-335b1bedfcce?w=600&auto=format&fit=crop&q=80',
      origin: 'Goa / Kerala / Maharashtra, India',
      packaging: '10kg / 11.34kg (25 lbs) / 22.68kg (50 lbs) Tins & Vacuum Packs',
      specs: 'White Wholes (W180 King Size, W240 Jumbo, W320 Standard), Moisture < 5%',
      description: 'Buttery, crunchy Indian cashew nuts carefully graded and vacuum-sealed under inert gas for maximum freshness.'
    },

    // 11. Cereals & Millets
    {
      id: 'cereals-wheat',
      slug: 'milling-wheat-sharbati-durum',
      name: 'Milling Wheat (Milling Quality / Sharbati / Durum Wheat)',
      category: 'cereals-millets',
      categoryName: 'Cereals & Millets',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&auto=format&fit=crop&q=80',
      origin: 'Madhya Pradesh / Gujarat, India',
      packaging: '50kg PP Bags / Bulk In Container',
      specs: 'Protein 11.5% - 13.5%+, Gluten > 26%, Moisture < 12%, Foreign Matter < 1%',
      description: 'Hard and semi-hard Indian milling wheat and golden Durum with high falling number and baking strength.'
    },
    {
      id: 'cereals-yellow-maize',
      slug: 'yellow-corn-maize-feed-food-grade',
      name: 'Yellow Corn / Maize (Animal Feed & Food Grade)',
      category: 'cereals-millets',
      categoryName: 'Cereals & Millets',
      image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&auto=format&fit=crop&q=80',
      origin: 'Bihar / Maharashtra / Andhra, India',
      packaging: '50kg PP Bags / Bulk Breakbulk',
      specs: 'Moisture < 14%, Protein > 8.5%, Aflatoxin < 20ppb, Machine Cleaned',
      description: 'High-energy golden yellow corn kernels suitable for poultry feed, starch extraction, and food processing.'
    },
    {
      id: 'cereals-millet-bajra',
      slug: 'pearl-millet-green-bajra',
      name: 'Pearl Millet (Green Bajra)',
      category: 'cereals-millets',
      categoryName: 'Cereals & Millets',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&auto=format&fit=crop&q=80',
      origin: 'Rajasthan / Gujarat, India',
      packaging: '25kg / 50kg PP Bags',
      specs: 'Purity 99% Sortex, Greenish Bold Grains, Machine Cleaned',
      description: 'Climate-resilient green pearl millet rich in iron, zinc, and dietary fiber for human foods and birdfeed.'
    },
    {
      id: 'cereals-sorghum-jowar',
      slug: 'sorghum-white-jowar',
      name: 'Sorghum (White Jowar / Yellow Sorghum)',
      category: 'cereals-millets',
      categoryName: 'Cereals & Millets',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&auto=format&fit=crop&q=80',
      origin: 'Maharashtra / Karnataka, India',
      packaging: '50kg Bags',
      specs: 'Gluten-Free, Machine Cleaned, Moisture < 12%',
      description: 'Nutritious gluten-free ancient grain sorghum widely used for health flour blends and livestock formulations.'
    },
    {
      id: 'cereals-barley',
      slug: 'barley-grain-feed-malting',
      name: 'Barley Grain (Feed & Malting Grade)',
      category: 'cereals-millets',
      categoryName: 'Cereals & Millets',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&auto=format&fit=crop&q=80',
      origin: 'Rajasthan / Haryana, India',
      packaging: '50kg Bags',
      specs: 'Test Weight > 62 kg/hl, Moisture < 12%, Sortex Clean',
      description: 'Wholesome whole barley grains for animal feed rations, malt houses, and health cereal formulations.'
    },

    // 12. Flours & Grains
    {
      id: 'flour-wheat-atta',
      slug: 'whole-wheat-flour-chakki-atta',
      name: 'Whole Wheat Flour (Chakki Fresh Atta & Maida)',
      category: 'flours-grains',
      categoryName: 'Flours & Grains',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80',
      origin: 'India',
      packaging: '5kg / 10kg / 25kg / 50kg Bags',
      specs: '100% Whole Wheat, No Additives, Gluten > 9.5%, Moisture < 12%',
      description: 'Traditional stone-ground fresh wheat atta retaining natural bran and germ for soft rotis and breads.'
    },
    {
      id: 'flour-besan',
      slug: 'gram-flour-besan',
      name: 'Gram Flour (Besan / Chickpea Flour)',
      category: 'flours-grains',
      categoryName: 'Flours & Grains',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80',
      origin: 'India',
      packaging: '1kg / 5kg / 25kg Bags',
      specs: '100% Pure Chana Dal Ground, Ultra-Fine, Gluten-Free',
      description: 'Pure yellow chickpea flour essential for snacks, confectioneries, batters, and vegan baking.'
    },
    {
      id: 'flour-rice-flour',
      slug: 'pure-rice-flour-sooji-semolina',
      name: 'Rice Flour, Semolina (Rava / Sooji)',
      category: 'flours-grains',
      categoryName: 'Flours & Grains',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80',
      origin: 'India',
      packaging: '25kg / 50kg Poly Bags',
      specs: 'Silky White, Moisture < 11%, Free from lumps',
      description: 'High-purity milled rice flour and durum semolina suited for pasta, extrusion foods, and bakery items.'
    },

    // 13. Tea & Coffee
    {
      id: 'tea-assam-ctc',
      slug: 'assam-ctc-black-tea-bop-bp-of',
      name: 'Assam CTC Black Tea (BOP, BP, OF, Dust Grades)',
      category: 'tea-coffee',
      categoryName: 'Tea & Coffee',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80',
      origin: 'Assam, India',
      packaging: '25kg / 35kg Paper Sacks with Aluminum Foil Liner',
      specs: 'Grades: BP, BOP, OF, PD, Dust; Strong Liquor, Rich Malty Flavor',
      description: 'Robust, full-bodied Assam black tea granules giving rich red liquor and distinct malt notes.'
    },
    {
      id: 'tea-darjeeling-orthodox',
      slug: 'darjeeling-orthodox-leaf-tea',
      name: 'Darjeeling Orthodox Whole Leaf Tea (First & Second Flush)',
      category: 'tea-coffee',
      categoryName: 'Tea & Coffee',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
      origin: 'Darjeeling, West Bengal, India',
      packaging: '10kg / 20kg Master Chests & Vacuum Foils',
      specs: 'FTGFOP1, TGFOP Grades, Champagne of Teas, Muscatel Notes',
      description: 'Prestigious Darjeeling orthodox whole leaf tea celebrated worldwide for delicate floral and muscatel bouquet.'
    },
    {
      id: 'coffee-robusta-arabica',
      slug: 'indian-green-coffee-beans-plantation-a-robusta-cherry',
      name: 'Green Coffee Beans (Arabica Plantation A & Robusta Cherry AB)',
      category: 'tea-coffee',
      categoryName: 'Tea & Coffee',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
      origin: 'Chikmagalur / Coorg, Karnataka, India',
      packaging: '60kg Jute Bags with GrainPro Liner',
      specs: 'Arabica Plantation A (Screen 17), Robusta Cherry AB (Screen 15+), Moisture < 12%',
      description: 'Shade-grown Indian specialty coffee green beans with balanced acidity, mild body, and spicy sweet undertones.'
    },

    // 14. Honey & Agro Products
    {
      id: 'honey-pure-natural',
      slug: 'pure-natural-raw-honey-multiflora-mustard',
      name: '100% Pure Natural Honey (Multiflora / Mustard / Eucalyptus / Wild Forest)',
      category: 'honey-agro',
      categoryName: 'Honey & Agro Products',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=80',
      origin: 'Punjab / Himachal / Gujarat, India',
      packaging: '300kg Epoxy Lined Steel Drums / 25kg Buckets',
      specs: 'NMR Tested, C3/C4 Sugar Negative, Moisture < 18%, F/G Ratio > 1.0',
      description: 'Pure raw and filtered Indian honey harvested by trained beekeepers, certified free from antibiotics and adulterants.'
    },
    {
      id: 'agro-psyllium-husk',
      slug: 'psyllium-husk-isabgol-powder',
      name: 'Psyllium Husk & Powder (Isabgol 85% to 99% Purity)',
      category: 'honey-agro',
      categoryName: 'Honey & Agro Products',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=80',
      origin: 'Sidhpur, Gujarat, India',
      packaging: '25kg Paper Bags / Fiber Drums',
      specs: 'Purity: 85%, 95%, 98%, 99% USP/EP Grade, Swell Volume > 40-50 ml/g',
      description: 'Soluble dietary fiber psyllium husk from Gujarat, global pharmaceutical gold standard for digestive health.'
    },
    {
      id: 'agro-guar-gum',
      slug: 'guar-gum-powder-food-industrial-grade',
      name: 'Guar Gum Powder (Food, Pharma & Industrial Grade)',
      category: 'honey-agro',
      categoryName: 'Honey & Agro Products',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat / Rajasthan, India',
      packaging: '25kg Paper Bags with PE Liner / 1 MT Jumbo Bags',
      specs: 'Viscosity 3000 - 8000 cps, Mesh 100/200, Food Grade E412',
      description: 'Natural high-viscosity hydrocolloid stabilizer used in bakery, sauces, ice creams, and oilfield drilling.'
    },

    // 15. Processed Foods
    {
      id: 'processed-mango-pulp',
      slug: 'totapuri-alphonso-mango-pulp-aseptic',
      name: 'Aseptic Mango Pulp (Alphonso & Totapuri Pulp/Puree)',
      category: 'processed-foods',
      categoryName: 'Processed Foods',
      image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=600&auto=format&fit=crop&q=80',
      origin: 'Andhra Pradesh / Maharashtra, India',
      packaging: '215kg Aseptic Bag-in-Drum / 3.1kg OTS Cans (6/carton)',
      specs: 'Totapuri Brix 14° min, Alphonso Brix 16° min, Acidity 0.45-0.75%, Commercial Sterile',
      description: 'Rich, smooth tropical mango puree processed under aseptic technology for juice, beverage, and dairy manufacturing.'
    },
    {
      id: 'processed-guava-papaya-puree',
      slug: 'aseptic-white-pink-guava-pulp-tomato-paste',
      name: 'Guava Pulp, Papaya Puree & Tomato Paste',
      category: 'processed-foods',
      categoryName: 'Processed Foods',
      image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=600&auto=format&fit=crop&q=80',
      origin: 'India',
      packaging: '215kg Aseptic Drums / 5kg Bag in Box',
      specs: 'Brix 8-10° (Guava), Tomato Paste 28-30% / 36-38% Hot Break & Cold Break',
      description: 'Concentrated fruit and vegetable purees manufactured without preservatives for international food industries.'
    },
    {
      id: 'processed-papads-pickles',
      slug: 'indian-pickles-chutneys-crispy-papads',
      name: 'Indian Traditional Pickles, Chutneys & Lentil Papads',
      category: 'processed-foods',
      categoryName: 'Processed Foods',
      image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat / India',
      packaging: 'Glass Jars 300g-1kg / Foodservice Buckets 5kg-20kg',
      specs: 'Mango, Lime, Mixed Pickles, Handcrafted Moong/Urad Papads, USFDA Registered',
      description: 'Authentic Indian condiments, savory spicy pickles, and sun-dried papads crafted using heritage recipes.'
    },

    // 16. Marine Products
    {
      id: 'marine-fish-meal',
      slug: 'marine-steam-sterilized-fish-meal',
      name: 'Steam Sterilized Fish Meal (60% - 68% Protein)',
      category: 'marine',
      categoryName: 'Marine Products',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80',
      origin: 'Gujarat / Kerala Coast, India',
      packaging: '50kg PP Bags / 1 MT Jumbo Bags',
      specs: 'Crude Protein: 60% - 65% - 68%, Fat < 10%, Moisture < 10%, Sand/Silica < 2%',
      description: 'Premium steam-dried marine fish meal with optimal amino acid balance for aquafeed and livestock feeds.'
    },
    {
      id: 'marine-fish-oil',
      slug: 'crude-and-refined-fish-oil',
      name: 'Crude & Refined Marine Fish Oil (Feed & Industrial Grade)',
      category: 'marine',
      categoryName: 'Marine Products',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80',
      origin: 'West Coast India',
      packaging: '200kg Steel / HDPE Drums & Flexibags',
      specs: 'EPA + DHA > 15-20%, FFA < 5%, Moisture < 1%',
      description: 'Natural marine oil extracted from fresh pelagic catch, rich in essential Omega-3 fatty acids.'
    }
  ];

  const poultryProducts = [
    {
      id: 'poultry-halquinol-60',
      slug: 'halquinol-60-feed-grade',
      name: 'Halquinol 60% (Feed Grade)',
      category: 'poultry',
      categoryName: 'Poultry Division',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&auto=format&fit=crop&q=80',
      origin: 'India',
      packaging: '25kg Fiber Drums with inner PE liner',
      specs: 'Active Content: 57.0% - 63.0%, Non-antibiotic gut health stabilizer',
      description: 'High-performance non-antibiotic antimicrobial growth promoter to prevent wet droppings and optimize feed efficiency.'
    },
    {
      id: 'poultry-halquinol-pure',
      slug: 'halquinol-pure-98-substance',
      name: 'Halquinol Pure 98% (Technical Substance)',
      category: 'poultry',
      categoryName: 'Poultry Division',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&auto=format&fit=crop&q=80',
      origin: 'India',
      packaging: '25kg Fiber Drums',
      specs: 'Assay: 95.0% - 105.0%, Loss on drying < 0.5%',
      description: 'Pure technical grade Halquinol for veterinary pharmaceutical formulation and custom premix production.'
    },
    {
      id: 'poultry-toxin-binder',
      slug: 'broad-spectrum-toxin-binder',
      name: 'Broad Spectrum Mycofix Toxin Binder (HSCAS + MOS + Activated Charcoal)',
      category: 'poultry',
      categoryName: 'Poultry Division',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&auto=format&fit=crop&q=80',
      origin: 'India',
      packaging: '25kg Moisture-proof Bags',
      specs: 'Adsorption capacity > 90% against Aflatoxin B1, Ochratoxin, T2',
      description: 'Advanced multi-action mycotoxin deactivator preserving gut integrity and liver health in broilers and layers.'
    },
    {
      id: 'poultry-acidifier',
      slug: 'buffered-organic-acidifier',
      name: 'Buffered Gut Acidifier (Formic + Propionic + Citric Acid Complex)',
      category: 'poultry',
      categoryName: 'Poultry Division',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&auto=format&fit=crop&q=80',
      origin: 'India',
      packaging: '25kg Bags / 20L Jerry Cans',
      specs: 'Total Organic Acids > 65%, Slow-release enteric protected',
      description: 'Lowers crop and intestinal pH to eliminate Salmonella and E. coli while enhancing digestive enzyme secretion.'
    },
    {
      id: 'poultry-choline-chloride',
      slug: 'choline-chloride-60-corn-cob',
      name: 'Choline Chloride 60% (Corn Cob Base)',
      category: 'poultry',
      categoryName: 'Poultry Division',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&auto=format&fit=crop&q=80',
      origin: 'India',
      packaging: '25kg Kraft Paper Bags with PE Liner',
      specs: 'Choline Content > 60%, Free flowing powder, Heavy Metals < 10ppm',
      description: 'Crucial B-complex vitamin additive preventing perosis and fatty liver syndrome while boosting growth rate.'
    },
    {
      id: 'poultry-amino-acids',
      slug: 'feed-grade-dl-methionine-l-lysine',
      name: 'DL-Methionine 99% & L-Lysine HCL 98.5% (Feed Grade)',
      category: 'poultry',
      categoryName: 'Poultry Division',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&auto=format&fit=crop&q=80',
      origin: 'India',
      packaging: '25kg PP Bags',
      specs: 'Purity > 99%, High bioavailability essential amino acids',
      description: 'Limiting amino acids for lean muscle synthesis, rapid FCR optimization, and balanced poultry feed rations.'
    }
  ];

  const livestockProducts = [
    {
      id: 'livestock-bypass-fat',
      slug: 'calcium-salts-bypass-fat-energy',
      name: 'Rumen Bypass Fat (Calcium Salts of Palm Fatty Acids - 84% Fat)',
      category: 'livestock',
      categoryName: 'Livestock Products',
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&auto=format&fit=crop&q=80',
      origin: 'India',
      packaging: '25kg Multi-wall Paper Bags',
      specs: 'Total Fat > 84%, Calcium 8-10%, Free flowing granular form',
      description: 'High-density energy supplement bypassing rumen fermentation to elevate milk yield and fat percentage in dairy cattle.'
    },
    {
      id: 'livestock-mineral-mixture',
      slug: 'chelated-mineral-mixture-cattle',
      name: 'Chelated Cattle Mineral Mixture (Enriched with Vitamins & Probiotics)',
      category: 'livestock',
      categoryName: 'Livestock Products',
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&auto=format&fit=crop&q=80',
      origin: 'India',
      packaging: '1kg / 5kg / 25kg Moisture Barrier Bags',
      specs: 'Chelated Zinc, Copper, Manganese, Cobalt, Iodine, Vitamin A, D3, E',
      description: 'Prevents nutritional deficiencies, boosts reproductive conception rates, and enhances overall herd vitality.'
    },
    {
      id: 'livestock-calcium-gel',
      slug: 'ionic-calcium-gel-drench',
      name: 'High Potency Ionic Calcium Gel (Milk Fever Prevention)',
      category: 'livestock',
      categoryName: 'Livestock Products',
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&auto=format&fit=crop&q=80',
      origin: 'India',
      packaging: '300g / 500g Drench Bottles',
      specs: 'Bio-available Ionic Calcium 43.5g per dose + Vitamin D3 & B12',
      description: 'Rapid oral drench formulation to combat postpartum hypocalcemia (milk fever) in high-yielding dairy cows and buffaloes.'
    },
    {
      id: 'livestock-yeast-culture',
      slug: 'live-yeast-culture-rumen-buffer',
      name: 'Live Yeast Culture & Rumen Buffer Complex',
      category: 'livestock',
      categoryName: 'Livestock Products',
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&auto=format&fit=crop&q=80',
      origin: 'India',
      packaging: '25kg Bags',
      specs: 'Saccharomyces cerevisiae CFU > 2 x 10^10 / g + Buffering Salts',
      description: 'Stabilizes rumen pH, suppresses acidosis, and optimizes fiber digestion in intensive dairy feeding systems.'
    }
  ];

  // Helper search lookup
  function findBySlug(slug) {
    if (!slug) return null;
    const cleanSlug = String(slug).toLowerCase().trim();
    const all = [...tradeProducts, ...poultryProducts, ...livestockProducts];
    return all.find(p => p.slug.toLowerCase() === cleanSlug || p.id.toLowerCase() === cleanSlug) ||
           all.find(p => p.name.toLowerCase().includes(cleanSlug) || cleanSlug.includes(p.slug.toLowerCase())) || null;
  }

  // Export on global window
  window.CATEGORY_DEFAULT_IMAGES = CATEGORY_DEFAULT_IMAGES;
  window.TRADE_PRODUCTS = tradeProducts;
  window.POULTRY_PRODUCTS = poultryProducts;
  window.LIVESTOCK_PRODUCTS = livestockProducts;
  window.KGE_PRODUCTS = {
    trade: tradeProducts,
    poultry: poultryProducts,
    livestock: livestockProducts,
    all: [...tradeProducts, ...poultryProducts, ...livestockProducts],
    findBySlug: findBySlug
  };
})();
