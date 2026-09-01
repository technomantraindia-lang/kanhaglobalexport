// Global Trade Products Database for Kanha Global Exports
(function() {
  const products = [
  // ==========================================
  // 1. SPICES & SEASONINGS (spices)
  // ==========================================
  {
    "id": "spices-turmeric",
    "slug": "turmeric-finger-powder",
    "name": "Turmeric (Finger & Powder)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "https://shivaspice.com/wp-content/uploads/2021/01/turmeric_finger.jpg",
    "origin": "Salem / Nizamabad / Sangli, India",
    "packaging": "25kg / 50kg PP / Jute Bags",
    "specs": "Curcumin 2.5% to 5.0%, Moisture < 10%, Machine Cleaned & Polished",
    "description": "Golden yellow export-grade Indian turmeric fingers and ultra-fine ground powder with high natural curcumin content."
  },
  {
    "id": "spices-red-chilli",
    "slug": "red-chilli-sannam-teja",
    "name": "Red Chilli (S4 / S17 / Teja / Stemless & Powder)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "https://shivaspice.com/wp-content/uploads/2021/01/shivaspice_chilli_powder.jpg",
    "origin": "Guntur / Byadgi, India",
    "packaging": "10kg / 25kg / 50kg Jute / PP Bags",
    "specs": "SHU 20,000 - 75,000, ASTA Color 40-120, Moisture < 11%",
    "description": "Pungent, vibrant red Indian dry chillies sourced directly from Guntur and Byadgi, available whole stemless or ground powder."
  },
  {
    "id": "spices-cumin-seeds",
    "slug": "cumin-seeds-jeera",
    "name": "Cumin Seeds (Jeera Whole & Powder)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "https://shivaspice.com/wp-content/uploads/2021/01/shivaspice_cumin_powder.jpg",
    "origin": "Unjha, Gujarat / Rajasthan, India",
    "packaging": "25kg / 50kg PP / Paper Bags",
    "specs": "Purity 99% / 99.5% Sortex Clean, Singapore/Europe Quality, Volatile Oil > 2.5%",
    "description": "Aromatic Gujarat cumin seeds, machine and sortex cleaned with intense flavor profile for culinary and extraction use."
  },
  {
    "id": "spices-coriander-seeds",
    "slug": "coriander-seeds-dhaniya",
    "name": "Coriander Seeds (Dhaniya Whole & Powder)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "https://shivaspice.com/wp-content/uploads/2021/01/shivaspice_coriander_powder.jpg",
    "origin": "Rajasthan / Madhya Pradesh, India",
    "packaging": "25kg / 40kg Jute / PP Bags",
    "specs": "Eagle / Single Parrot / Double Parrot Quality, Greenish Whole, Moisture < 9%",
    "description": "Selected whole green coriander seeds with distinctive citrusy fragrance and rich essential oil content."
  },
  {
    "id": "spices-black-pepper",
    "slug": "black-pepper-garbled",
    "name": "Black Pepper (500GL - 570GL Whole & Cracked)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "https://shivaspice.com/wp-content/uploads/2021/01/Buy_Black_Pepper_Shivaspice.jpg",
    "origin": "Malabar / Idukki, Kerala, India",
    "packaging": "25kg / 50kg Paper / Jute Bags",
    "specs": "Garbled / Ungarbled, Density 500-570 g/l, Piperine > 4%, Moisture < 12%",
    "description": "The King of Spices: authentic Malabar black peppercorns offering robust heat, sharp bite, and strong pungency."
  },
  {
    "id": "spices-cardamom",
    "slug": "green-cardamom-elaichi",
    "name": "Green Cardamom (6mm - 8.5mm+ Bold Elaichi)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "https://shivaspice.com/wp-content/uploads/2021/01/Buy_Green_Cardamom_Shivaspice.jpg",
    "origin": "Idukki, Kerala, India",
    "packaging": "5kg / 10kg Master Cartons with vacuum liner",
    "specs": "Sizes: 6mm, 7mm, 8mm, 8.5mm Bold Green, Moisture < 10%",
    "description": "Premium grade large green cardamom pods with high volatile oil aroma and intact aromatic black seeds."
  },
  {
    "id": "spices-cloves",
    "slug": "cloves-whole-laung",
    "name": "Cloves (Whole Hand-Picked Laung)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "https://shivaspice.com/wp-content/uploads/2021/01/Buy_Cloves_Shivaspice.jpg",
    "origin": "Tamil Nadu / Kerala, India",
    "packaging": "10kg / 25kg PP & Jute Bags",
    "specs": "Hand-picked Whole, Head intact > 90%, Eugenol > 15%",
    "description": "Intensely fragrant whole cloves, naturally sun-dried with rich spicy warmth and essential eugenol."
  },
  {
    "id": "spices-fennel",
    "slug": "fennel-seeds-saunf",
    "name": "Fennel Seeds (Lucknowi Green & Bold Saunf)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/fennel-seeds.jpg",
    "origin": "Gujarat / Rajasthan, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Purity 99% / 99.5% Sortex, Green Bold & Small Lucknowi, Moisture < 9%",
    "description": "Sweet, licorice-scented green fennel seeds meticulously cleaned for seasonings, tea blends, and confectionery."
  },
  {
    "id": "spices-cinnamon-cassia",
    "slug": "cinnamon-sticks-cassia",
    "name": "Cinnamon & Cassia (Round Cut & Flat Dalchini)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/cinnamon-cassia.jpg",
    "origin": "Kerala / South India",
    "packaging": "10kg / 25kg Master Cartons",
    "specs": "Clean Cut Sticks & Split Quills, Volatile Oil > 1.5%, Moisture < 12%",
    "description": "Sweet, woody aromatic cinnamon sticks and cassia bark widely utilized in baking, confectionery, and spice blends."
  },
  {
    "id": "spices-star-anise",
    "slug": "star-anise-chakra-phool",
    "name": "Star Anise (Autumn Crop Whole Chakra Phool)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/star-anise.jpg",
    "origin": "India",
    "packaging": "10kg Master Cartons",
    "specs": "Whole Star > 85%, Diameter 2.5cm+, Moisture < 13.5%",
    "description": "Star-shaped eight-pointed spice offering a deep sweet anise flavor for gourmet broths, marinades, and extracts."
  },
  {
    "id": "spices-nutmeg-mace",
    "slug": "nutmeg-and-mace-whole",
    "name": "Nutmeg & Mace (Jaiphal & Javitri Whole)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/nutmeg-mace.jpg",
    "origin": "Kerala / Karnataka, India",
    "packaging": "10kg / 25kg Cartons & Jute Bags",
    "specs": "With Shell / Without Shell Nutmeg, Golden Orange Mace Blades, Moisture < 10%",
    "description": "Intensely warm nutmeg kernels and lace-like mace arils with complex sweet floral notes for high-end culinary use."
  },
  {
    "id": "spices-dry-ginger",
    "slug": "dry-ginger-sonth-whole-powder",
    "name": "Dry Ginger (Sun-Dried Whole & Powder / Sonth)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/dry-ginger.jpg",
    "origin": "Kerala / Assam / Karnataka, India",
    "packaging": "25kg / 50kg PP / Jute Bags",
    "specs": "Bleached / Unbleached Whole Rhizomes, Gingerol > 1.8%, Moisture < 11%",
    "description": "Pungent sun-dried Indian whole ginger and fine powder with high gingerol content for food preparation and pharma."
  },
  {
    "id": "spices-ajwain",
    "slug": "carom-seeds-ajwain",
    "name": "Carom Seeds (Ajwain / Bishop's Weed)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/carom-seeds-ajwain.jpg",
    "origin": "Gujarat / Rajasthan, India",
    "packaging": "25kg / 50kg Bags",
    "specs": "Purity 99% Sortex Clean, High Thymol Content, Moisture < 9%",
    "description": "Distinctly pungent thyme-flavored carom seeds packed with essential thymol oil for savory doughs and digestion."
  },
  {
    "id": "spices-garam-masala",
    "slug": "garam-masala-blended-curry-powder",
    "name": "Indian Garam Masala & Blended Curry Powders",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/garam-masala.jpg",
    "origin": "Gujarat / India",
    "packaging": "1kg / 5kg / 25kg Vacuum Foil & Master Cartons",
    "specs": "Custom formulations, 100% pure whole-ground, zero artificial fillers or MSG",
    "description": "Masterfully roasted and blended authentic Indian spice powders tailored for international retail and foodservice packaging."
  },

  // ==========================================
  // 2. PULSES & LENTILS (pulses)
  // ==========================================
  {
    "id": "pulses-chickpeas",
    "slug": "chickpeas-kabuli-chana",
    "name": "Kabuli Chickpeas / Garbanzo (40-42 to 75-80 count)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/kabuli-chana.jpg",
    "origin": "Madhya Pradesh / Maharashtra, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Counts: 42-44, 44-46, 58-60, 75-80; Machine Cleaned / Sortex 99.5%",
    "description": "Large, plump, cream-colored Kabuli chickpeas sorted for uniform count, ideal for canning and culinary dishes."
  },
  {
    "id": "pulses-desi-chana",
    "slug": "desi-chana-brown-chickpeas",
    "name": "Desi Brown Chickpeas / Kala Chana (Whole & Split)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/kala-chana.jpg",
    "origin": "Rajasthan / Madhya Pradesh, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Machine Cleaned / Sortex 99%, Moisture < 11%, High Protein > 20%",
    "description": "Dark brown traditional Indian desi chickpeas known for robust nutty flavor, low glycemic index, and firm cooking texture."
  },
  {
    "id": "pulses-toor-dal",
    "slug": "toor-dal-pigeon-peas",
    "name": "Toor Dal / Pigeon Peas (Yellow Split & Whole)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/toor-dal.jpg",
    "origin": "Gujarat / Maharashtra / Karnataka, India",
    "packaging": "25kg / 50kg Bags",
    "specs": "Sortex Cleaned, Oiled / Non-Oiled, Fatak / Desi Grade, Moisture < 12%",
    "description": "Dehulled and split yellow pigeon peas, the premier staple pulse across Indian and South Asian cuisine."
  },
  {
    "id": "pulses-red-lentils",
    "slug": "red-lentils-masoor-dal",
    "name": "Red Lentils / Masoor Dal (Whole Football & Split Orange)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/red-lentils.jpg",
    "origin": "Madhya Pradesh / Uttar Pradesh, India",
    "packaging": "25kg / 50kg Export Bags",
    "specs": "Purity 99.5%, Sortex Cleaned, Polished / Unpolished, Moisture < 11%",
    "description": "Bright orange-red split and whole football lentils with high vegetable protein and rapid cooking properties."
  },
  {
    "id": "pulses-moong-beans",
    "slug": "green-moong-beans-split",
    "name": "Green Mung Beans (Whole Green Mung & Sprouting Grade)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/moong-beans.jpg",
    "origin": "Rajasthan / Gujarat / MP, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Size: 3.5mm - 4.0mm+, Machine Cleaned, Germination > 90% (Sprouting Grade)",
    "description": "Nutrient-rich shiny green mung beans suitable for direct cooking, dal making, and fresh sprouting."
  },
  {
    "id": "pulses-moong-dal",
    "slug": "yellow-moong-dal-split-dehusked",
    "name": "Moong Dal (Yellow Split Dehusked / Mogar)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/toor-dal.jpg",
    "origin": "Gujarat / Rajasthan, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Dehusked Yellow Split, 100% Sortex Cleaned, Moisture < 11%",
    "description": "Easy-to-digest dehusked yellow split moong lentils widely consumed in wellness diets, soups, and traditional sweets."
  },
  {
    "id": "pulses-urad-dal",
    "slug": "black-matpe-urad-dal",
    "name": "Black Matpe / Urad Dal (Whole Black & White Gota/Split)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/urad-dal.jpg",
    "origin": "Andhra Pradesh / Maharashtra, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Machine Cleaned / Sortex 99.5%, Moisture < 12%, Whole & Split",
    "description": "High-protein black and white dehulled urad lentils used in papads, batters, and traditional savory dishes."
  },
  {
    "id": "pulses-chana-dal",
    "slug": "chana-dal-split-bengal-gram",
    "name": "Chana Dal (Split Bengal Gram Polished / Unpolished)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/kabuli-chana.jpg",
    "origin": "Madhya Pradesh / Rajasthan, India",
    "packaging": "25kg / 50kg Bags",
    "specs": "Purity 99.5% Sortex Clean, Bold Grain, Moisture < 11%",
    "description": "Sweet and nutty golden split chickpeas without husk, essential for savory snacks, curries, and flour milling."
  },
  {
    "id": "pulses-kidney-beans",
    "slug": "rajma-red-kidney-beans-chitra",
    "name": "Red Kidney Beans / Rajma (Chitra & Dark Red)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/rajma-beans.jpg",
    "origin": "Jammu / Maharashtra / MP, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Sortex Clean 99%, Moisture < 12%, Uniform Grain Size",
    "description": "Creamy-textured speckled Chitra and dark red kidney beans rich in dietary fiber and plant protein."
  },
  {
    "id": "pulses-cowpeas",
    "slug": "cowpeas-black-eyed-peas-lobia",
    "name": "Black Eyed Peas / Cowpeas (Lobia / White Chawli)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/black-eyed-peas.jpg",
    "origin": "Maharashtra / Gujarat, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Machine Cleaned / Sortex 99.5%, Bold White Kernel with Black Eye",
    "description": "Mild, earthy flavored white cowpeas with distinct black eyes, popular across European, American, and Asian menus."
  },
  {
    "id": "pulses-green-peas",
    "slug": "dry-green-peas-yellow-vatana",
    "name": "Dry Green Peas & Yellow Peas (Whole Vatana)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/beauty-of-bengal-gram.jpg",
    "origin": "Madhya Pradesh / Gujarat, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Uniform Round Size 5.5mm-7.0mm, Machine Sorted, Moisture < 13%",
    "description": "Whole dried green and yellow field peas ideal for street food formulations, canning, and snacking."
  },
  {
    "id": "pulses-moth-beans",
    "slug": "moth-beans-turkish-gram-matki",
    "name": "Moth Beans (Turkish Gram / Matki Whole)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/moth-beans.jpg",
    "origin": "Rajasthan / Gujarat, India",
    "packaging": "25kg / 50kg Bags",
    "specs": "Purity 99% Sortex, Small Brown Bold Grains, Moisture < 11%",
    "description": "Drought-hardy small brown legume packed with concentrated protein, calcium, and minerals for sprouting and fried snacks."
  },

  // ==========================================
  // 3. BASMATI RICE (basmati-rice)
  // ==========================================
  {
    "id": "basmati-1121",
    "slug": "1121-basmati-rice-steam-sella",
    "name": "1121 Basmati Rice (Raw, Steam, Sella & Golden Sella)",
    "category": "basmati-rice",
    "categoryName": "Basmati Rice",
    "image": "assets/images/products/1121-basmati-rice.png",
    "origin": "Punjab / Haryana, India",
    "packaging": "1kg / 5kg / 10kg / 25kg / 50kg Non-Woven & BOPP Bags",
    "specs": "Grain Length: 8.35mm - 8.40mm, Elongation: 2.5x, Moisture < 12.5%",
    "description": "World renowned extra long grain 1121 Basmati rice with exquisite aroma and non-sticky fluffy texture upon cooking."
  },
  {
    "id": "basmati-1509",
    "slug": "1509-basmati-rice",
    "name": "1509 Basmati Rice (Raw, Steam & Sella)",
    "category": "basmati-rice",
    "categoryName": "Basmati Rice",
    "image": "assets/images/rice-1121-sella.webp",
    "origin": "Punjab / Haryana / UP, India",
    "packaging": "5kg / 25kg / 50kg Export Bags",
    "specs": "Grain Length: 8.30mm+, Moisture < 12.5%, Sortex Clean 100%",
    "description": "Economical yet ultra-long grain basmati offering outstanding cooking elongation and subtle sweet taste."
  },
  {
    "id": "basmati-1401",
    "slug": "1401-basmati-rice",
    "name": "1401 Basmati Rice (Steam & Sella)",
    "category": "basmati-rice",
    "categoryName": "Basmati Rice",
    "image": "assets/images/rice-1121-golden.webp",
    "origin": "Haryana / Punjab, India",
    "packaging": "25kg / 50kg PP / Jute Bags",
    "specs": "Average Grain Length: 7.70mm+, Moisture < 12.5%, Broken < 1%",
    "description": "Hybrid variety noted for exceptional cooking volume, delightful aroma, and excellent grain integrity."
  },
  {
    "id": "basmati-traditional",
    "slug": "traditional-authentic-basmati-rice",
    "name": "Traditional Authentic Basmati Rice (Aged Himalayan)",
    "category": "basmati-rice",
    "categoryName": "Basmati Rice",
    "image": "assets/images/rice-1121-steam.webp",
    "origin": "Himalayan Foothills, India",
    "packaging": "5kg / 10kg / 25kg Master Bags",
    "specs": "Aged 1-2 Years, Grain Length 7.3mm, Unmatched Natural Fragrance",
    "description": "Naturally aged classic authentic Basmati rice harvested from the Himalayan foothills, the pinnacle of gourmet dining."
  },
  {
    "id": "basmati-sugandha",
    "slug": "sugandha-basmati-rice",
    "name": "Sugandha Basmati Rice (Steam & Sella)",
    "category": "basmati-rice",
    "categoryName": "Basmati Rice",
    "image": "assets/images/rice-1121-sella.webp",
    "origin": "North India",
    "packaging": "25kg / 50kg Bags",
    "specs": "Grain Length: 7.80mm+, 100% Sortex Clean, Moisture < 13%",
    "description": "Fragrant and slender medium-long grain rice widely preferred across catering and Middle Eastern cuisines."
  },
  {
    "id": "basmati-pusa",
    "slug": "pusa-basmati-rice",
    "name": "Pusa Basmati Rice (Raw & Steam)",
    "category": "basmati-rice",
    "categoryName": "Basmati Rice",
    "image": "assets/images/rice-pusa-steam.webp",
    "origin": "Punjab, India",
    "packaging": "25kg / 50kg Bags",
    "specs": "Grain Length: 7.40mm+, Silky Raw / Steam, Moisture < 12.5%",
    "description": "Classic hybrid offering rich aromatic compounds and elegant slender shape after preparation."
  },
  {
    "id": "basmati-sharbati",
    "slug": "sharbati-rice",
    "name": "Sharbati Basmati Rice (Steam & Sella)",
    "category": "basmati-rice",
    "categoryName": "Basmati Rice",
    "image": "assets/images/rice-1121-golden.webp",
    "origin": "Uttar Pradesh / Punjab, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Grain Length: 7.10mm, Broken < 1%, Moisture < 13%",
    "description": "Highly cost-effective aromatic long grain rice suitable for large-scale institutional and restaurant supply."
  },

  // ==========================================
  // 4. NON-BASMATI RICE (non-basmati-rice)
  // ==========================================
  {
    "id": "non-basmati-ir64",
    "slug": "ir-64-parboiled-raw-rice",
    "name": "IR-64 Long Grain Rice (Parboiled / Raw 5% - 25% Broken)",
    "category": "non-basmati-rice",
    "categoryName": "Non-Basmati Rice",
    "image": "assets/images/products/ir64-long-grain-rice.png",
    "origin": "Andhra Pradesh / Maharashtra, India",
    "packaging": "25kg / 50kg PP Bags / Bulk Containers",
    "specs": "Grain Length: 6.0mm+, Broken: 5% / 25% / 100%, Moisture < 14%",
    "description": "India’s most exported staple non-basmati rice variety, ideal for global food security tenders and retail."
  },
  {
    "id": "non-basmati-sona-masoori",
    "slug": "sona-masoori-raw-steam-rice",
    "name": "Sona Masoori Rice (Raw & Steam Table Rice)",
    "category": "non-basmati-rice",
    "categoryName": "Non-Basmati Rice",
    "image": "assets/images/products/sona-masoori-rice.png",
    "origin": "Karnataka / Andhra Pradesh, India",
    "packaging": "5kg / 10kg / 20kg / 25kg Poly Woven Bags",
    "specs": "Medium Grain, Lightweight, Low Starch, Aged Quality, Moisture < 13%",
    "description": "Delicate medium-grain aromatic table rice, highly valued for its light texture and easy digestibility."
  },
  {
    "id": "non-basmati-swarna",
    "slug": "swarna-rice-parboiled",
    "name": "Swarna Rice (Parboiled & Raw Medium Grain)",
    "category": "non-basmati-rice",
    "categoryName": "Non-Basmati Rice",
    "image": "assets/images/products/swarna-rice.png",
    "origin": "West Bengal / Odisha, India",
    "packaging": "50kg PP Bags",
    "specs": "Short-Medium Grain, Sortex Cleaned, Broken < 5%, Moisture < 14%",
    "description": "Economical high-energy short grain parboiled rice widely exported to African and Asian markets."
  },
  {
    "id": "non-basmati-pr11",
    "slug": "pr-11-pr-14-non-basmati-rice",
    "name": "PR-11 / PR-14 Long Grain Non-Basmati Rice",
    "category": "non-basmati-rice",
    "categoryName": "Non-Basmati Rice",
    "image": "assets/images/products/ir64-long-grain-rice.png",
    "origin": "Punjab / Haryana, India",
    "packaging": "25kg / 50kg Bags",
    "specs": "Grain Length: 6.8mm+, Raw / Steam / Sella, Moisture < 13%",
    "description": "Hard milled long grain non-basmati rice with firm grain texture and good swelling index."
  },
  {
    "id": "non-basmati-jeera-samba",
    "slug": "jeerakasala-seeraga-samba-rice",
    "name": "Jeerakasala / Seeraga Samba Biryani Rice",
    "category": "non-basmati-rice",
    "categoryName": "Non-Basmati Rice",
    "image": "assets/images/non-basmati-seeraga-samba.jpg",
    "origin": "Tamil Nadu / Kerala, India",
    "packaging": "10kg / 25kg Bags",
    "specs": "Tiny Oval Grain, Intensely Fragrant, Moisture < 12%",
    "description": "South India’s prized biryani rice variety with signature small oval grains and rich distinct scent."
  },
  {
    "id": "non-basmati-broken",
    "slug": "100-percent-broken-raw-parboiled-rice",
    "name": "100% Broken Rice (Raw / Parboiled Sortex)",
    "category": "non-basmati-rice",
    "categoryName": "Non-Basmati Rice",
    "image": "assets/images/non-basmati-broken-rice.jpg",
    "origin": "India",
    "packaging": "50kg PP Bags / Jumbo Bags",
    "specs": "Broken 100%, Double Polished, Cleaned, Moisture < 14%",
    "description": "Ideal for brewing, flour milling, noodles, and commercial food processing formulations."
  },

  // ==========================================
  // 5. FRESH FRUITS (fresh-fruits)
  // ==========================================
  {
    "id": "fruits-alphonso-mango",
    "slug": "fresh-alphonso-kesar-mangoes",
    "name": "Fresh Mangoes (Alphonso, Kesar & Banganapalli)",
    "category": "fresh-fruits",
    "categoryName": "Fresh Fruits",
    "image": "assets/images/fresh-alphonso-kesar-mangoes.jpg",
    "origin": "Ratnagiri / Gir Gujarat, India",
    "packaging": "3kg / 4.5kg Corrugated Export Boxes (Hot Water / Irradiation Treated)",
    "specs": "Export Grade, Size 200g-320g, Brix 18-22%, APEDA Approved Packhouses",
    "description": "World-famous king of mangoes known for its heavenly scent, rich saffron pulp, and velvety sweetness."
  },
  {
    "id": "fruits-pomegranate",
    "slug": "fresh-bhagwa-pomegranate",
    "name": "Fresh Bhagwa Pomegranate (Deep Red Arils)",
    "category": "fresh-fruits",
    "categoryName": "Fresh Fruits",
    "image": "assets/images/fresh-bhagwa-pomegranate.jpg",
    "origin": "Maharashtra / Gujarat, India",
    "packaging": "3.5kg / 4.0kg / 5.0kg Export Cartons",
    "specs": "Counts: 9, 10, 12, 14, 15 (200g to 400g+ per piece), Deep Red Arils, Sweet",
    "description": "Glossy red Bhagwa pomegranates with ruby-red soft seeds, rich in antioxidants and shipped via Reefer air/sea cargo."
  },
  {
    "id": "fruits-grapes",
    "slug": "fresh-indian-grapes-thompson-black",
    "name": "Fresh Table Grapes (Thompson Seedless / Sonaka / Sharad / Crimson)",
    "category": "fresh-fruits",
    "categoryName": "Fresh Fruits",
    "image": "assets/images/fresh-indian-grapes-thompson-black.jpg",
    "origin": "Nashik / Sangli, Maharashtra, India",
    "packaging": "4.5kg / 5.0kg / 9.0kg Punnets & Pouch Master Boxes",
    "specs": "Berry Size 16mm-20mm+, Brix > 16%, GlobalGAP Certified",
    "description": "Crisp, sweet, and uniform Indian table grapes exported globally with complete residue monitoring (GrapeNet)."
  },
  {
    "id": "fruits-banana",
    "slug": "fresh-cavendish-banana-g9",
    "name": "Fresh Cavendish Bananas (Grand Naine - G9)",
    "category": "fresh-fruits",
    "categoryName": "Fresh Fruits",
    "image": "assets/images/fresh-cavendish-banana-g9.jpg",
    "origin": "Gujarat / Maharashtra / Tamil Nadu, India",
    "packaging": "7kg / 13kg / 18.14kg Vacuum Packed Export Cartons",
    "specs": "Length 18cm-22cm+, Caliber 39-47mm, Fresh Green Harvest",
    "description": "Firm green Cavendish bananas carefully packed in modified atmosphere bags for optimal ripening upon destination arrival."
  },
  {
    "id": "fruits-guava-papaya",
    "slug": "fresh-taiwan-pink-guava-red-lady-papaya",
    "name": "Fresh Guava (Taiwan Pink) & Papaya (Red Lady)",
    "category": "fresh-fruits",
    "categoryName": "Fresh Fruits",
    "image": "assets/images/fresh-taiwan-pink-guava-red-lady-papaya.jpg",
    "origin": "Gujarat / Andhra Pradesh, India",
    "packaging": "5kg / 6kg / 10kg CFB Boxes with foam netting",
    "specs": "Uniform weight, Crisp Flesh, Free from blemishes",
    "description": "Tropical fresh Indian pink guavas and sweet Red Lady papayas packed with vitamin C and vital nutrients."
  },
  {
    "id": "fruits-citrus",
    "slug": "fresh-indian-kinnow-sweet-oranges",
    "name": "Fresh Indian Kinnow & Sweet Oranges (Mosambi)",
    "category": "fresh-fruits",
    "categoryName": "Fresh Fruits",
    "image": "assets/images/fresh-fruits.jpg",
    "origin": "Punjab / Maharashtra, India",
    "packaging": "10kg / 20kg Corrugated Boxes",
    "specs": "Juicy, Caliber 60mm-85mm, Naturally Waxed & Graded",
    "description": "Juicy, sweet and tangy Indian mandarins and sweet limes sorted for international supermarkets and juice bars."
  },

  // ==========================================
  // 6. FRESH VEGETABLES (fresh-vegetables)
  // ==========================================
  {
    "id": "veg-red-onion",
    "slug": "fresh-red-onions-nashik-gujarat",
    "name": "Fresh Red Onions (Nashik / Mahuva 45-55mm+)",
    "category": "fresh-vegetables",
    "categoryName": "Fresh Vegetables",
    "image": "assets/images/products/fresh-red-onions.jpg",
    "origin": "Nashik / Gujarat, India",
    "packaging": "5kg / 10kg / 25kg / 50kg Red Mesh / Leno Bags",
    "specs": "Sizes: 25-35mm (Gulf), 45-55mm, 55mm+ (Europe/Asia), Well Cured",
    "description": "Pungent, globe-shaped red onions with tight skins, cured naturally for superior shelf-life during ocean transit."
  },
  {
    "id": "veg-fresh-ginger",
    "slug": "fresh-green-ginger",
    "name": "Fresh Green Ginger (Cleaned / Unwashed)",
    "category": "fresh-vegetables",
    "categoryName": "Fresh Vegetables",
    "image": "assets/images/products/fresh-green-ginger.jpg",
    "origin": "Assam / Kerala / Karnataka, India",
    "packaging": "10kg / 20kg Mesh Bags / Plastic Crates",
    "specs": "Fat fingers 100g-250g+, Cleaned, Low Fiber, High Aroma",
    "description": "Spicy, plump fresh ginger rhizomes harvested from prime growing belts with high essential gingerol content."
  },
  {
    "id": "veg-fresh-garlic",
    "slug": "fresh-garlic-bulbs-desi-ooty",
    "name": "Fresh Garlic Bulbs (White / Desi / Ooty)",
    "category": "fresh-vegetables",
    "categoryName": "Fresh Vegetables",
    "image": "assets/images/products/fresh-garlic-bulbs.jpg",
    "origin": "Madhya Pradesh / Gujarat, India",
    "packaging": "10kg / 20kg / 25kg Mesh Bags & Cartons",
    "specs": "Sizes: 30mm, 40mm, 50mm+, Pure White / Purple Streaked, Strong Pungency",
    "description": "Aromatic garlic bulbs with firm cloves, long-lasting pungency, and medicinal organosulfur qualities."
  },
  {
    "id": "veg-green-chilli",
    "slug": "fresh-green-chillies-g4-jwalan",
    "name": "Fresh Green Chillies (G4 / Jwala / Bullet)",
    "category": "fresh-vegetables",
    "categoryName": "Fresh Vegetables",
    "image": "assets/images/products/fresh-green-chillies.jpg",
    "origin": "Gujarat / Maharashtra, India",
    "packaging": "3.5kg / 4kg / 5kg Air-vented Cartons via Air Cargo",
    "specs": "Length: 7-12cm, Fresh Dark Green, Crisp Stem Intact",
    "description": "Air-freighted hot green chillies harvested and graded same-day to maintain maximum freshness and heat."
  },
  {
    "id": "veg-potatoes-lemon",
    "slug": "fresh-potatoes-and-seedless-lemons",
    "name": "Fresh Processing Potatoes (Chipsona) & Seedless Lemons",
    "category": "fresh-vegetables",
    "categoryName": "Fresh Vegetables",
    "image": "assets/images/products/potatoes-and-lemons.jpg",
    "origin": "Gujarat / Punjab, India",
    "packaging": "10kg / 25kg / 50kg Bags & Cartons",
    "specs": "High dry matter for processing / table use, sorted & graded",
    "description": "Standardized table and processing potatoes plus juicy yellow Indian lemons packed for global delivery."
  },
  {
    "id": "veg-okra-drumstick",
    "slug": "fresh-okra-bhindi-and-drumsticks",
    "name": "Fresh Okra (Bhindi) & Drumsticks (Moringa Pods)",
    "category": "fresh-vegetables",
    "categoryName": "Fresh Vegetables",
    "image": "assets/images/products/okra-and-drumsticks.jpg",
    "origin": "Gujarat / Maharashtra, India",
    "packaging": "4kg / 5kg Air Cargo Cartons",
    "specs": "Tender Green Pods, Fiber-Free, Harvested Early Morning",
    "description": "Export-grade tender lady fingers and fresh moringa drumsticks air-freighted for international diaspora markets."
  },

  // ==========================================
  // 7. DEHYDRATED PRODUCTS (dehydrated)
  // ==========================================
  {
    "id": "dehydrated-onion-flakes",
    "slug": "dehydrated-onion-flakes-minced-powder",
    "name": "Dehydrated Onion Flakes (Mahuva White, Red & Pink)",
    "category": "dehydrated",
    "categoryName": "Dehydrated Products",
    "image": "assets/images/onion-flakes.jpg",
    "origin": "Mahuva, Gujarat, India",
    "packaging": "14kg / 20kg / 25kg Poly-lined Cartons & Paper Sacks",
    "specs": "White / Red / Pink Onion, Moisture < 5%, SO2 < 50ppm / Nil, Micro-tested",
    "description": "World capital of dehydrated onions Mahuva provides premium flakes and toasted kibbled onion for seasonings."
  },
  {
    "id": "dehydrated-onion-powder",
    "slug": "dehydrated-onion-powder-chopped-minced",
    "name": "Dehydrated Onion Powder, Minced & Chopped",
    "category": "dehydrated",
    "categoryName": "Dehydrated Products",
    "image": "assets/images/onion-flakes.jpg",
    "origin": "Mahuva, Gujarat, India",
    "packaging": "20kg / 25kg Poly-lined Cartons",
    "specs": "Mesh: 80-100 (Powder), Minced (1-3mm), Chopped (3-5mm), Moisture < 5%",
    "description": "Free-flowing dehydrated onion powder and granules, indispensable in ready-to-eat seasoning sachets and soups."
  },
  {
    "id": "dehydrated-garlic",
    "slug": "dehydrated-garlic-flakes-powder-granules",
    "name": "Dehydrated Garlic (Flakes, Granules & Powder)",
    "category": "dehydrated",
    "categoryName": "Dehydrated Products",
    "image": "assets/images/garlic-flakes.jpg",
    "origin": "Gujarat, India",
    "packaging": "20kg / 25kg Poly-lined Master Cartons",
    "specs": "Alliin > 0.45%, Moisture < 6%, Mesh: 40-60, 80-100, Flakes, Export Grade",
    "description": "Pure dehydrated Indian garlic free from adulterants, maintaining the authentic taste and sharp aroma of fresh garlic."
  },
  {
    "id": "dehydrated-vegetables",
    "slug": "dehydrated-ginger-green-chilli-tomato-powder",
    "name": "Dehydrated Ginger, Green Chilli & Tomato Powder",
    "category": "dehydrated",
    "categoryName": "Dehydrated Products",
    "image": "assets/images/dehydrated-ginger-chilli-tomato.jpg",
    "origin": "Gujarat, India",
    "packaging": "10kg / 20kg Corrugated Boxes with LDPE Liner",
    "specs": "100% Pure Spray-Dried / Air-Dried, Instant Soluble / Rehydratable",
    "description": "Versatile dried vegetable powders and flakes used in instant soups, marinades, snack seasonings, and ready meals."
  },
  {
    "id": "dehydrated-kasuri-methi",
    "slug": "dehydrated-kasuri-methi-leaves",
    "name": "Dehydrated Kasuri Methi (Fenugreek Leaves)",
    "category": "dehydrated",
    "categoryName": "Dehydrated Products",
    "image": "assets/images/products/fenugreek-seeds.png",
    "origin": "Nagaur, Rajasthan, India",
    "packaging": "1kg / 5kg / 10kg Master Cartons with Foil Liner",
    "specs": "Deep Green Leaves, Moisture < 7%, Intensely Aromatic, Sortex Cleaned",
    "description": "Fragrant shade-dried Kasuri Methi leaves from Nagaur, providing the signature aroma in butter curries and breads."
  },

  // ==========================================
  // 8. OIL SEEDS (oil-seeds)
  // ==========================================
  {
    "id": "oilseeds-sesame-natural",
    "slug": "natural-white-sesame-seeds",
    "name": "Natural White Sesame Seeds (99/1 / 99.9% Sortex)",
    "category": "oil-seeds",
    "categoryName": "Oil Seeds",
    "image": "assets/images/white-sesame.jpg",
    "origin": "Gujarat, India",
    "packaging": "25kg / 50kg PP / Paper Bags / Big Bags",
    "specs": "Purity: 99%, 99.9%, 99.95%, Oil Content > 48%, Moisture < 5%",
    "description": "Cleaned Gujarat natural sesame seeds with high oil content and nutty aroma, perfect for oil crushing and bakery."
  },
  {
    "id": "oilseeds-sesame-hulled",
    "slug": "hulled-sesame-seeds-auto-dry",
    "name": "Hulled Sesame Seeds (Auto-Dried / Sun-Dried 99.99%)",
    "category": "oil-seeds",
    "categoryName": "Oil Seeds",
    "image": "assets/images/white-sesame.jpg",
    "origin": "Gujarat, India",
    "packaging": "25kg / 50kg Multiwall Paper Bags with PE Liner",
    "specs": "Purity: 99.95% / 99.99% Mechanically Hulled & Auto Dried, Pure White",
    "description": "Pristine white hulled sesame seeds processed mechanically without chemicals for premium confectioneries and tahini."
  },
  {
    "id": "oilseeds-black-sesame",
    "slug": "black-sesame-seeds",
    "name": "Black Sesame Seeds (Natural / Sortex Cleaned)",
    "category": "oil-seeds",
    "categoryName": "Oil Seeds",
    "image": "assets/images/black-sesame.jpg",
    "origin": "Gujarat / Rajasthan, India",
    "packaging": "25kg / 50kg Bags",
    "specs": "Purity 99% / 99.5%, Oil > 45%, Deep Jet Black",
    "description": "Rich dark black sesame seeds prized in gourmet culinary toppings, sushi, and health oil extracts."
  },
  {
    "id": "oilseeds-mustard",
    "slug": "mustard-seeds-rai-sarson",
    "name": "Mustard Seeds (Small Black & Bold Yellow Rai / Sarson)",
    "category": "oil-seeds",
    "categoryName": "Oil Seeds",
    "image": "assets/images/products/mustard-seeds.png",
    "origin": "Gujarat / Rajasthan, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Purity 99.5%, Oil Content 38-42%, Moisture < 8%",
    "description": "High-oil content black and yellow mustard seeds, triple cleaned for oil extraction, spice blends, and condiments."
  },
  {
    "id": "oilseeds-flaxseeds",
    "slug": "brown-flax-seeds-linseed",
    "name": "Flax Seeds / Linseed (Brown / Golden Omega-3)",
    "category": "oil-seeds",
    "categoryName": "Oil Seeds",
    "image": "assets/images/flax-seeds.jpg",
    "origin": "Madhya Pradesh, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Sortex Clean 99.9%, Omega-3 Rich, Moisture < 7%",
    "description": "Superfood linseed rich in ALA Omega-3 fatty acids and dietary lignans, sortex cleaned for health food blends."
  },
  {
    "id": "oilseeds-sunflower-safflower",
    "slug": "sunflower-safflower-seeds-kardi",
    "name": "Sunflower Seeds & Safflower Seeds (Kardi)",
    "category": "oil-seeds",
    "categoryName": "Oil Seeds",
    "image": "assets/images/white-sesame.jpg",
    "origin": "Maharashtra / Karnataka, India",
    "packaging": "25kg / 50kg Bags",
    "specs": "Purity 99%, High Linoleic / Oleic, Moisture < 8%",
    "description": "Cleaned whole oil seeds harvested from central India for culinary edible oils, birdfeed, and bakery."
  },
  {
    "id": "oilseeds-castor-seeds",
    "slug": "castor-seeds-and-castor-oil",
    "name": "Castor Seeds & Industrial Castor Oil (FSG / Commercial)",
    "category": "oil-seeds",
    "categoryName": "Oil Seeds",
    "image": "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&auto=format&fit=crop&q=80",
    "origin": "Gujarat, India (Global Castor Hub)",
    "packaging": "Flexibags / 200kg Steel Drums / IBC Totes",
    "specs": "First Special Grade (FSG), Pale Yellow, Ricinoleic Acid > 85%",
    "description": "High grade Indian castor seeds and derivatives exported globally for pharmaceuticals, lubricants, and polymers."
  },

  // ==========================================
  // 9. GROUNDNUTS & CASHEWS (groundnuts-cashews)
  // ==========================================
  {
    "id": "nuts-peanuts-bold",
    "slug": "raw-peanuts-bold-variety",
    "name": "Raw Groundnuts / Peanuts (Bold Type 38/42 to 70/80)",
    "category": "groundnuts-cashews",
    "categoryName": "Groundnuts & Cashews",
    "image": "assets/images/raw-peanuts.jpg",
    "origin": "Saurashtra, Gujarat, India",
    "packaging": "25kg / 50kg Jute / Vacuum Bags",
    "specs": "Counts: 38/42, 40/50, 50/60, 60/70; Moisture < 7%, Aflatoxin < 4ppb / 10ppb",
    "description": "Saurashtra bold peanuts, machine sorted and tested with strict European Aflatoxin compliance."
  },
  {
    "id": "nuts-peanuts-java",
    "slug": "raw-peanuts-java-type",
    "name": "Raw Groundnuts (Java Type 50/60 to 80/90)",
    "category": "groundnuts-cashews",
    "categoryName": "Groundnuts & Cashews",
    "image": "assets/images/java-peanuts.jpg",
    "origin": "Gujarat, India",
    "packaging": "25kg / 50kg Jute & PP Bags",
    "specs": "Round pink kernel, High sweet oil taste, Moisture < 7%",
    "description": "Sweet round Java peanut kernels widely utilized for peanut butter manufacturing and confectionery snacking."
  },
  {
    "id": "nuts-blanched-peanuts",
    "slug": "blanched-peanut-kernels",
    "name": "Blanched Peanut Kernels (Whole & Splits)",
    "category": "groundnuts-cashews",
    "categoryName": "Groundnuts & Cashews",
    "image": "assets/images/blanched-peanuts.jpg",
    "origin": "Gujarat, India",
    "packaging": "10kg / 25kg Vacuum Packs with Carton",
    "specs": "Blanched Whole 40/50, 50/60 & Splits, Skin Retained < 1%",
    "description": "Skinless creamy blanched peanut kernels roasted or ready-to-use for gourmet baking and candy bars."
  },
  {
    "id": "nuts-cashews",
    "slug": "cashew-nuts-w180-w240-w320",
    "name": "Indian Cashew Kernels (W180, W210, W240, W320, Splits)",
    "category": "groundnuts-cashews",
    "categoryName": "Groundnuts & Cashews",
    "image": "assets/images/cashew-kernels.jpg",
    "origin": "Goa / Kerala / Maharashtra, India",
    "packaging": "10kg / 11.34kg (25 lbs) / 22.68kg (50 lbs) Tins & Vacuum Packs",
    "specs": "White Wholes (W180 King Size, W240 Jumbo, W320 Standard), Moisture < 5%",
    "description": "Buttery, crunchy Indian cashew nuts carefully graded and vacuum-sealed under inert gas for maximum freshness."
  },
  {
    "id": "nuts-roasted-salted",
    "slug": "roasted-salted-peanuts-cashews",
    "name": "Roasted & Salted Export Peanuts & Cashews",
    "category": "groundnuts-cashews",
    "categoryName": "Groundnuts & Cashews",
    "image": "assets/images/roasted-peanuts-cashews.jpg",
    "origin": "Gujarat, India",
    "packaging": "100g - 1kg Retail Nitrogen Flushed Pouches / 10kg Bulk",
    "specs": "Dry Roasted / Oil Roasted, Sea Salt, Hygienically Sealed",
    "description": "Premium snack-grade roasted cashews and peanuts packed in customized barrier pouches with extended shelf life."
  },

  // ==========================================
  // 10. CEREALS & MILLETS (cereals-millets)
  // ==========================================
  {
    "id": "cereals-wheat",
    "slug": "milling-wheat-sharbati-durum",
    "name": "Milling Wheat (Milling Quality / Sharbati / Durum Wheat)",
    "category": "cereals-millets",
    "categoryName": "Cereals & Millets",
    "image": "assets/images/products/milling-wheat.png",
    "origin": "Madhya Pradesh / Gujarat, India",
    "packaging": "50kg PP Bags / Bulk In Container",
    "specs": "Protein 11.5% - 13.5%+, Gluten > 26%, Moisture < 12%, Foreign Matter < 1%",
    "description": "Hard and semi-hard Indian milling wheat and golden Durum with high falling number and baking strength."
  },
  {
    "id": "cereals-yellow-maize",
    "slug": "yellow-corn-maize-export-grade",
    "name": "Yellow Corn / Maize (Food & Commercial Grade)",
    "category": "cereals-millets",
    "categoryName": "Cereals & Millets",
    "image": "assets/images/products/yellow-corn-maize.png",
    "origin": "Bihar / Maharashtra / Andhra, India",
    "packaging": "50kg PP Bags / Bulk Breakbulk",
    "specs": "Moisture < 14%, Protein > 8.5%, Aflatoxin < 20ppb, Machine Cleaned",
    "description": "High-energy golden yellow corn kernels suitable for starch extraction, flour milling, and food processing."
  },
  {
    "id": "cereals-millet-bajra",
    "slug": "pearl-millet-green-bajra",
    "name": "Pearl Millet (Green Bajra Sortex Clean)",
    "category": "cereals-millets",
    "categoryName": "Cereals & Millets",
    "image": "assets/images/products/pearl-millet-bajra.png",
    "origin": "Rajasthan / Gujarat, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Purity 99% Sortex, Greenish Bold Grains, Machine Cleaned",
    "description": "Climate-resilient green pearl millet rich in iron, zinc, and dietary fiber for culinary and health foods."
  },
  {
    "id": "cereals-sorghum-jowar",
    "slug": "sorghum-white-jowar",
    "name": "Sorghum (White Jowar / Yellow Sorghum)",
    "category": "cereals-millets",
    "categoryName": "Cereals & Millets",
    "image": "assets/images/products/sorghum-jowar.png",
    "origin": "Maharashtra / Karnataka, India",
    "packaging": "50kg Bags",
    "specs": "Gluten-Free, Machine Cleaned, Moisture < 12%",
    "description": "Nutritious gluten-free ancient grain sorghum widely used for health flour blends and cereal products."
  },
  {
    "id": "cereals-barley",
    "slug": "barley-grain-malting-food",
    "name": "Barley Grain (Malting & Food Grade)",
    "category": "cereals-millets",
    "categoryName": "Cereals & Millets",
    "image": "assets/images/products/barley-grain.png",
    "origin": "Rajasthan / Haryana, India",
    "packaging": "50kg Bags",
    "specs": "Test Weight > 62 kg/hl, Moisture < 12%, Sortex Clean",
    "description": "Wholesome whole barley grains for malt houses, food processing, and health cereal formulations."
  },
  {
    "id": "cereals-ragi-foxtail",
    "slug": "finger-millet-ragi-foxtail",
    "name": "Finger Millet (Ragi) & Foxtail Millet",
    "category": "cereals-millets",
    "categoryName": "Cereals & Millets",
    "image": "assets/images/products/finger-millet-ragi.png",
    "origin": "Karnataka / Andhra Pradesh, India",
    "packaging": "25kg / 50kg Bags",
    "specs": "100% Sortex Cleaned, Calcium Rich, Gluten-Free",
    "description": "Super-nutritious ancient Indian millets loaded with calcium, dietary fiber, and essential micronutrients."
  },

  // ==========================================
  // 11. FLOURS & GRAINS (flours-grains)
  // ==========================================
  {
    "id": "flour-wheat-atta",
    "slug": "whole-wheat-flour-chakki-atta",
    "name": "Whole Wheat Flour (Chakki Fresh Atta & Maida)",
    "category": "flours-grains",
    "categoryName": "Flours & Grains",
    "image": "assets/images/products/whole-wheat-flour.png",
    "origin": "India",
    "packaging": "5kg / 10kg / 25kg / 50kg Bags",
    "specs": "100% Whole Wheat, No Additives, Gluten > 9.5%, Moisture < 12%",
    "description": "Traditional stone-ground fresh wheat atta retaining natural bran and germ for soft rotis and breads."
  },
  {
    "id": "flour-besan",
    "slug": "gram-flour-besan",
    "name": "Gram Flour (Besan / Fine Chickpea Flour)",
    "category": "flours-grains",
    "categoryName": "Flours & Grains",
    "image": "assets/images/products/gram-flour-besan.png",
    "origin": "India",
    "packaging": "1kg / 5kg / 25kg Bags",
    "specs": "100% Pure Chana Dal Ground, Ultra-Fine, Gluten-Free",
    "description": "Pure yellow chickpea flour essential for snacks, confectioneries, batters, and vegan baking."
  },
  {
    "id": "flour-rice-flour",
    "slug": "pure-rice-flour-sooji-semolina",
    "name": "Pure Rice Flour & Semolina (Rava / Sooji)",
    "category": "flours-grains",
    "categoryName": "Flours & Grains",
    "image": "assets/images/products/rice-flour-semolina.png",
    "origin": "India",
    "packaging": "25kg / 50kg Poly Bags",
    "specs": "Silky White, Moisture < 11%, Free from lumps",
    "description": "High-purity milled rice flour and durum semolina suited for pasta, extrusion foods, and bakery items."
  },
  {
    "id": "flour-corn-millet",
    "slug": "maize-corn-starch-millet-flour",
    "name": "Maize Flour (Corn Starch) & Millet Flours (Bajra/Jowar)",
    "category": "flours-grains",
    "categoryName": "Flours & Grains",
    "image": "assets/images/products/whole-wheat-flour.png",
    "origin": "India",
    "packaging": "25kg / 50kg Bags",
    "specs": "Fine Mesh 80-100, Pure Starch & Gluten-Free Multi-Millet Flours",
    "description": "Versatile gluten-free grain flours and industrial food-grade corn starch for thickened sauces and health bakery."
  },

  // ==========================================
  // 12. FROZEN SEAFOOD (seafood)
  // ==========================================
  {
    "id": "seafood-vannamei-shrimp",
    "slug": "frozen-vannamei-white-shrimp",
    "name": "Frozen Vannamei White Shrimp (HOSO / HLSO / PD / PUD)",
    "category": "seafood",
    "categoryName": "Frozen Seafood",
    "image": "assets/images/raw-frozen-seafood.jpg",
    "origin": "Coastal Andhra / Gujarat, India",
    "packaging": "Block Frozen (6x1.8kg / 6x2kg) & IQF (10x1kg bags)",
    "specs": "Counts: 16/20, 21/25, 26/30, 31/40, 41/50, EU & USFDA Approved Plants",
    "description": "Farm-fresh premium white leg shrimp processed under rigorous HACCP and BRC certified freezing facilities."
  },
  {
    "id": "seafood-black-tiger",
    "slug": "frozen-black-tiger-shrimp",
    "name": "Frozen Black Tiger Shrimp (Jumbo IQF & Block)",
    "category": "seafood",
    "categoryName": "Frozen Seafood",
    "image": "assets/images/seafood-export.jpg",
    "origin": "West Bengal / Odisha, India",
    "packaging": "IQF / Block Frozen in master cartons",
    "specs": "Counts: 8/12, 13/15, 16/20, 21/25, Chemical Free / Treated",
    "description": "Jumbo succulent black tiger shrimp with firm texture and distinct sweet ocean flavor."
  },
  {
    "id": "seafood-ribbon-fish",
    "slug": "frozen-ribbon-fish-whole",
    "name": "Frozen Ribbon Fish (Trichiurus lepturus Whole Round)",
    "category": "seafood",
    "categoryName": "Frozen Seafood",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop&q=80",
    "origin": "Gujarat / Maharashtra Coast, India",
    "packaging": "10kg / 20kg Master Carton (Block Frozen)",
    "specs": "Sizes: 100/200g, 200/300g, 300/400g, 400/700g, 700g+",
    "description": "Whole round sea-frozen ribbon fish with shimmering silver skin, heavily exported to East Asia."
  },
  {
    "id": "seafood-cuttlefish-squid",
    "slug": "frozen-squid-and-cuttlefish",
    "name": "Frozen Squid & Cuttlefish (Whole / Rings / Tubes)",
    "category": "seafood",
    "categoryName": "Frozen Seafood",
    "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80",
    "origin": "Veraval / Kochi, India",
    "packaging": "IQF / Block 10kg Master Cartons",
    "specs": "Whole Cleaned, Rings, Tubes, U5, U10, 10/20, 20/40 count",
    "description": "Tender ocean-caught squid and cuttlefish processed with pristine hygiene standards."
  },
  {
    "id": "seafood-yellowfin-tuna",
    "slug": "frozen-yellowfin-tuna",
    "name": "Frozen Yellowfin Tuna (Loins / Steaks / Whole)",
    "category": "seafood",
    "categoryName": "Frozen Seafood",
    "image": "https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?w=800&auto=format&fit=crop&q=80",
    "origin": "Indian Ocean / Arabian Sea",
    "packaging": "Vacuum Packed IQF Loins / SASHIMI & CO-Treated",
    "specs": "Grade A / AA, Deep Red Meat, Histamine < 30ppm",
    "description": "Super-frozen yellowfin tuna loins and steaks suited for premium dining and foodservice distributors."
  },
  {
    "id": "seafood-mackerel-croaker",
    "slug": "frozen-indian-mackerel-silver-croaker",
    "name": "Frozen Indian Mackerel & Silver Croaker Fish",
    "category": "seafood",
    "categoryName": "Frozen Seafood",
    "image": "assets/images/seafood-export.jpg",
    "origin": "West Coast India",
    "packaging": "10kg Block Frozen Cartons",
    "specs": "Sizes: 4/6, 6/8, 8/10 pcs/kg, Fresh Sea Frozen",
    "description": "Fatty, flavorful whole Indian mackerel and silver croakers blast-frozen immediately after landing."
  },

  // ==========================================
  // 13. TEA & COFFEE (tea-coffee)
  // ==========================================
  {
    "id": "tea-assam-ctc",
    "slug": "assam-ctc-black-tea-bop-bp-of",
    "name": "Assam CTC Black Tea (BOP, BP, OF, Dust Grades)",
    "category": "tea-coffee",
    "categoryName": "Tea & Coffee",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80",
    "origin": "Assam, India",
    "packaging": "25kg / 35kg Paper Sacks with Aluminum Foil Liner",
    "specs": "Grades: BP, BOP, OF, PD, Dust; Strong Liquor, Rich Malty Flavor",
    "description": "Robust, full-bodied Assam black tea granules giving rich red liquor and distinct malt notes."
  },
  {
    "id": "tea-darjeeling-orthodox",
    "slug": "darjeeling-orthodox-leaf-tea",
    "name": "Darjeeling Orthodox Whole Leaf Tea (First & Second Flush)",
    "category": "tea-coffee",
    "categoryName": "Tea & Coffee",
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80",
    "origin": "Darjeeling, West Bengal, India",
    "packaging": "10kg / 20kg Master Chests & Vacuum Foils",
    "specs": "FTGFOP1, TGFOP Grades, Champagne of Teas, Muscatel Notes",
    "description": "Prestigious Darjeeling orthodox whole leaf tea celebrated worldwide for delicate floral and muscatel bouquet."
  },
  {
    "id": "coffee-robusta-arabica",
    "slug": "indian-green-coffee-beans-plantation-a-robusta-cherry",
    "name": "Green Coffee Beans (Arabica Plantation A & Robusta Cherry AB)",
    "category": "tea-coffee",
    "categoryName": "Tea & Coffee",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80",
    "origin": "Chikmagalur / Coorg, Karnataka, India",
    "packaging": "60kg Jute Bags with GrainPro Liner",
    "specs": "Arabica Plantation A (Screen 17), Robusta Cherry AB (Screen 15+), Moisture < 12%",
    "description": "Shade-grown Indian specialty coffee green beans with balanced acidity, mild body, and spicy sweet undertones."
  },
  {
    "id": "coffee-instant-green-tea",
    "slug": "instant-spray-dried-coffee-and-green-tea",
    "name": "Instant Spray-Dried Coffee Powder & Green Tea",
    "category": "tea-coffee",
    "categoryName": "Tea & Coffee",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80",
    "origin": "South India",
    "packaging": "25kg Bag-in-Box / Bulk Tins",
    "specs": "100% Pure Agglomerated / Spray Dried, High Solubility, Full Aroma",
    "description": "Premium instant coffee powder and whole green tea leaves crafted for rapid reconstitution and beverage manufacturing."
  },

  // ==========================================
  // 14. MAKHANA & AGRO PRODUCTS (honey-agro)
  // ==========================================
  {
    "id": "agro-phool-makhana",
    "slug": "phool-makhana-fox-nuts-gorgon",
    "name": "Phool Makhana / Fox Nuts (Gorgon Nut 4+, 5+, 6+ Suta Handpicked)",
    "category": "honey-agro",
    "categoryName": "Makhana & Agro Products",
    "image": "assets/images/makhana-fox-nuts.jpg",
    "origin": "Mithila, Bihar, India",
    "packaging": "8kg - 10kg Poly Bags / Custom Nitrogen Flushed Pouches",
    "specs": "Grades: 4 Suta, 5 Suta, 6 Suta Jumbo Bold, Moisture < 9%, Crisp & Clean",
    "description": "GI-tagged organic Indian fox nuts (puffed lotus/gorgon seeds), high in plant protein, magnesium, and low in calories."
  },
  {
    "id": "honey-pure-natural",
    "slug": "pure-natural-raw-honey-multiflora-mustard",
    "name": "100% Pure Natural Raw Honey (Multiflora / Mustard / Eucalyptus / Wild Forest)",
    "category": "honey-agro",
    "categoryName": "Makhana & Agro Products",
    "image": "assets/images/products/pure-natural-honey.png",
    "origin": "Punjab / Himachal / Gujarat, India",
    "packaging": "300kg Epoxy Lined Steel Drums / 25kg Buckets",
    "specs": "NMR Tested, C3/C4 Sugar Negative, Moisture < 18%, F/G Ratio > 1.0",
    "description": "Pure raw and filtered Indian honey harvested by trained beekeepers, certified free from antibiotics and adulterants."
  },
  {
    "id": "agro-psyllium-husk",
    "slug": "psyllium-husk-isabgol-powder",
    "name": "Psyllium Husk & Powder (Isabgol 85% to 99% USP/EP Purity)",
    "category": "honey-agro",
    "categoryName": "Makhana & Agro Products",
    "image": "assets/images/products/psyllium-husk-powder.png",
    "origin": "Sidhpur, Gujarat, India",
    "packaging": "25kg Paper Bags / Fiber Drums",
    "specs": "Purity: 85%, 95%, 98%, 99% USP/EP Grade, Swell Volume > 40-50 ml/g",
    "description": "Soluble dietary fiber psyllium husk from Gujarat, global pharmaceutical gold standard for digestive health."
  },
  {
    "id": "agro-guar-gum",
    "slug": "guar-gum-powder-food-industrial-grade",
    "name": "Guar Gum Powder (Food, Pharma & Industrial Grade E412)",
    "category": "honey-agro",
    "categoryName": "Makhana & Agro Products",
    "image": "assets/images/products/guar-gum-powder.png",
    "origin": "Gujarat / Rajasthan, India",
    "packaging": "25kg Paper Bags with PE Liner / 1 MT Jumbo Bags",
    "specs": "Viscosity 3000 - 8000 cps, Mesh 100/200, Food Grade E412",
    "description": "Natural high-viscosity hydrocolloid stabilizer used in bakery, sauces, ice creams, and oilfield drilling."
  },

  // ==========================================
  // 15. PROCESSED FOODS (processed-foods)
  // ==========================================
  {
    "id": "processed-mango-pulp",
    "slug": "totapuri-alphonso-mango-pulp-aseptic",
    "name": "Aseptic Mango Pulp (Alphonso & Totapuri Pulp/Puree)",
    "category": "processed-foods",
    "categoryName": "Processed Foods",
    "image": "assets/images/products/aseptic-mango-pulp.png",
    "origin": "Andhra Pradesh / Maharashtra, India",
    "packaging": "215kg Aseptic Bag-in-Drum / 3.1kg OTS Cans (6/carton)",
    "specs": "Totapuri Brix 14° min, Alphonso Brix 16° min, Acidity 0.45-0.75%, Commercial Sterile",
    "description": "Rich, smooth tropical mango puree processed under aseptic technology for juice, beverage, and dairy manufacturing."
  },
  {
    "id": "processed-guava-papaya-puree",
    "slug": "aseptic-white-pink-guava-pulp-tomato-paste",
    "name": "Guava Pulp, Papaya Puree & Concentrated Tomato Paste",
    "category": "processed-foods",
    "categoryName": "Processed Foods",
    "image": "assets/images/products/guava-papaya-tomato-paste.png",
    "origin": "India",
    "packaging": "215kg Aseptic Drums / 5kg Bag in Box",
    "specs": "Brix 8-10° (Guava), Tomato Paste 28-30% / 36-38% Hot Break & Cold Break",
    "description": "Concentrated fruit and vegetable purees manufactured without preservatives for international food industries."
  },
  {
    "id": "processed-papads-pickles",
    "slug": "indian-pickles-chutneys-crispy-papads",
    "name": "Indian Traditional Pickles, Chutneys & Spiced Lentil Papads",
    "category": "processed-foods",
    "categoryName": "Processed Foods",
    "image": "assets/images/products/pickles-chutneys-papads.png",
    "origin": "Gujarat / India",
    "packaging": "Glass Jars 300g-1kg / Foodservice Buckets 5kg-20kg",
    "specs": "Mango, Lime, Mixed Pickles, Handcrafted Moong/Urad Papads, USFDA Registered",
    "description": "Authentic Indian condiments, savory spicy pickles, and sun-dried papads crafted using heritage recipes."
  },
  {
    "id": "processed-ready-meals",
    "slug": "canned-vegetables-ready-to-eat-curries",
    "name": "Canned Processed Vegetables & Ready-to-Eat Curries",
    "category": "processed-foods",
    "categoryName": "Processed Foods",
    "image": "assets/images/products/pickles-chutneys-papads.png",
    "origin": "India",
    "packaging": "Retort Pouches 300g / 850g Cans",
    "specs": "Commercial Sterility, Ambient Storage (18 Months Shelf Life), No Artificial Preservatives",
    "description": "Shelf-stable authentic Indian ready meals (Dal Makhani, Chana Masala) and canned chickpeas in brine."
  },

  // ==========================================
  // 16. MARINE PRODUCTS (marine)
  // ==========================================
  {
    "id": "marine-fish-meal",
    "slug": "marine-steam-sterilized-fish-meal",
    "name": "Steam Sterilized Fish Meal (60% - 68% Protein)",
    "category": "marine",
    "categoryName": "Marine Products",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop&q=80",
    "origin": "Gujarat / Kerala Coast, India",
    "packaging": "50kg PP Bags / 1 MT Jumbo Bags",
    "specs": "Crude Protein: 60% - 65% - 68%, Fat < 10%, Moisture < 10%, Sand/Silica < 2%",
    "description": "Premium steam-dried marine fish meal with optimal protein and balanced amino acid profile."
  },
  {
    "id": "marine-fish-oil",
    "slug": "crude-and-refined-fish-oil",
    "name": "Crude & Refined Marine Fish Oil (Industrial & Processing Grade)",
    "category": "marine",
    "categoryName": "Marine Products",
    "image": "assets/images/products/marine-fish-oil.png",
    "origin": "West Coast India",
    "packaging": "200kg Steel / HDPE Drums & Flexibags",
    "specs": "EPA + DHA > 15-20%, FFA < 5%, Moisture < 1%",
    "description": "Natural marine oil extracted from fresh pelagic catch, rich in essential Omega-3 fatty acids."
  },
  {
    "id": "marine-crustacean-meal",
    "slug": "crustacean-shell-meal-squilla-powder",
    "name": "Crustacean Shell Meal & Squilla Powder (High Chitin)",
    "category": "marine",
    "categoryName": "Marine Products",
    "image": "assets/images/seafood-export.jpg",
    "origin": "West Coast India",
    "packaging": "50kg PP Bags",
    "specs": "Chitin > 15%, Protein > 30%, Moisture < 10%",
    "description": "Natural marine by-product rich in chitin, protein, and organic minerals for industrial and agricultural enrichment."
  }
];

  window.TRADE_PRODUCTS = products;
  window.KGE_PRODUCTS = window.KGE_PRODUCTS || {};
  window.KGE_PRODUCTS.trade = products;
})();
