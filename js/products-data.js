// Global Trade Products Database for Kanha Global Exports
// Structured according to the 8 Canonical Export Categories approved by client
(function() {
  const products = [
  // ==========================================
  // 1. RICE & GRAINS (rice)
  // ==========================================
  {
    "id": "rice-1121-basmati",
    "slug": "1121-basmati-rice-steam-sella",
    "name": "1121 Basmati Rice (Raw, Steam, Sella & Golden Sella)",
    "category": "rice",
    "categoryName": "Rice & Grains",
    "image": "assets/images/products/1121-basmati-rice.png",
    "origin": "Punjab / Haryana, India",
    "packaging": "1kg / 5kg / 10kg / 25kg / 50kg Non-Woven & BOPP Bags",
    "specs": "Grain Length: 8.35mm - 8.40mm, Elongation: 2.5x, Moisture < 12.5%, Sortex 100%",
    "description": "World-renowned extra long grain 1121 Basmati rice with exquisite aroma and non-sticky fluffy texture upon cooking."
  },
  {
    "id": "rice-1718-basmati",
    "slug": "1718-basmati-rice-steam-sella",
    "name": "1718 Basmati Rice (Raw, Steam & Sella)",
    "category": "rice",
    "categoryName": "Rice & Grains",
    "image": "assets/images/rice-1121-steam-hd.jpg",
    "origin": "Punjab / Haryana / Uttar Pradesh, India",
    "packaging": "10kg / 25kg / 50kg PP / Jute Bags",
    "specs": "Average Grain Length: 8.35mm+, Elongation: 2.4x, Moisture < 12.5%, Broken < 1%",
    "description": "Premium evolutionary variety derived from 1121 with enhanced resistance, superior cooked grain integrity, and deep aromatic profile."
  },
  {
    "id": "rice-1509-basmati",
    "slug": "1509-basmati-rice",
    "name": "1509 Basmati Rice (Raw, Steam & Sella)",
    "category": "rice",
    "categoryName": "Rice & Grains",
    "image": "assets/images/rice-1121-sella.webp",
    "origin": "Punjab / Haryana / UP, India",
    "packaging": "5kg / 25kg / 50kg Export Bags",
    "specs": "Grain Length: 8.30mm+, Moisture < 12.5%, Sortex Clean 100%, Broken < 1%",
    "description": "Economical yet ultra-long grain basmati offering outstanding cooking elongation, fast cooking time, and subtle sweet taste."
  },
  {
    "id": "rice-1401-basmati",
    "slug": "1401-basmati-rice",
    "name": "1401 Basmati Rice (Steam & Sella)",
    "category": "rice",
    "categoryName": "Rice & Grains",
    "image": "assets/images/rice-1121-golden.webp",
    "origin": "Haryana / Punjab, India",
    "packaging": "25kg / 50kg PP / Jute Bags",
    "specs": "Average Grain Length: 7.70mm+, Moisture < 12.5%, Broken < 1%, High Swelling Index",
    "description": "Hybrid variety noted for exceptional cooking volume, delightful aroma, and excellent grain integrity preferred across Middle East & Europe."
  },
  {
    "id": "rice-traditional-basmati",
    "slug": "traditional-authentic-basmati-rice",
    "name": "Traditional Authentic Basmati Rice (Aged Himalayan)",
    "category": "rice",
    "categoryName": "Rice & Grains",
    "image": "assets/images/rice-1121-steam.webp",
    "origin": "Himalayan Foothills, India",
    "packaging": "5kg / 10kg / 25kg Master Bags",
    "specs": "Aged 1-2 Years, Grain Length 7.3mm, Unmatched Natural Fragrance, Sortex 100%",
    "description": "Naturally aged classic authentic Basmati rice harvested from the Himalayan foothills, the pinnacle of royal gourmet dining."
  },
  {
    "id": "rice-ir64-non-basmati",
    "slug": "ir-64-parboiled-raw-rice",
    "name": "IR-64 Long Grain Rice (Parboiled & Raw 5% - 25% Broken)",
    "category": "rice",
    "categoryName": "Rice & Grains",
    "image": "assets/images/products/ir64-long-grain-rice.png",
    "origin": "Andhra Pradesh / Maharashtra / Gujarat, India",
    "packaging": "25kg / 50kg PP Bags / Bulk Containers",
    "specs": "Grain Length: 6.0mm+, Broken: 5% / 25% / 100%, Moisture < 14%, Double Polished",
    "description": "India's most exported staple non-basmati rice variety, ideal for global food security tenders, institutional catering, and retail."
  },
  {
    "id": "rice-sona-masoori",
    "slug": "sona-masoori-raw-steam-rice",
    "name": "Sona Masoori Rice (Raw & Steam Table Rice)",
    "category": "rice",
    "categoryName": "Rice & Grains",
    "image": "assets/images/products/sona-masoori-rice.png",
    "origin": "Karnataka / Andhra Pradesh, India",
    "packaging": "5kg / 10kg / 20kg / 25kg Poly Woven Bags",
    "specs": "Medium Grain, Lightweight, Low Starch, Aged Quality, Moisture < 13%",
    "description": "Delicate medium-grain aromatic table rice, highly valued across international diaspora communities for its light texture and easy digestibility."
  },
  {
    "id": "rice-pr11-pr14",
    "slug": "pr-11-pr-14-non-basmati-rice",
    "name": "PR-11 / PR-14 Long Grain Non-Basmati Rice",
    "category": "rice",
    "categoryName": "Rice & Grains",
    "image": "assets/images/products/ir64-long-grain-rice.png",
    "origin": "Punjab / Haryana, India",
    "packaging": "25kg / 50kg Bags",
    "specs": "Grain Length: 6.8mm+, Raw / Steam / Sella, Moisture < 13%, Broken < 5%",
    "description": "Hard milled long grain non-basmati rice with firm grain texture, bright sheen, and high swelling index."
  },
  {
    "id": "rice-swarna",
    "slug": "swarna-rice-parboiled",
    "name": "Swarna Rice (Parboiled & Raw Medium Grain)",
    "category": "rice",
    "categoryName": "Rice & Grains",
    "image": "assets/images/products/swarna-rice.png",
    "origin": "West Bengal / Odisha / Andhra, India",
    "packaging": "50kg PP Bags",
    "specs": "Short-Medium Grain, Sortex Cleaned, Broken < 5%, Moisture < 14%",
    "description": "Economical high-energy short grain parboiled rice widely exported to African, Asian, and Middle Eastern bulk markets."
  },

  // ==========================================
  // 2. SPICES & SEASONINGS (spices)
  // ==========================================
  {
    "id": "spices-cumin-seeds",
    "slug": "cumin-seeds-jeera",
    "name": "Cumin Seeds & Cumin Powder (Jeera)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "https://shivaspice.com/wp-content/uploads/2021/01/shivaspice_cumin_powder.jpg",
    "origin": "India",
    "packaging": "10 / 20 / 25 / 50 kg; customized retail packs",
    "specs": "Purity Min. 99%, Moisture Max. 10%, Foreign Matter Max. 1%, Absent Infestation",
    "description": "Authentic Indian Cumin Seeds (Whole) and Cumin Powder (Fine Powder), processed under rigorous export quality standards with minimum 99% purity and characteristic natural aroma.",
    "specTabs": [
      {
        "tabName": "1) Cumin Seeds",
        "id": "cumin-seeds",
        "parameters": [
          { "param": "Origin", "spec": "India" },
          { "param": "Product", "spec": "Whole Cumin Seeds" },
          { "param": "Purity", "spec": "Min. 99%" },
          { "param": "Moisture", "spec": "Max. 10%" },
          { "param": "Foreign Matter", "spec": "Max. 1%" },
          { "param": "Admixture", "spec": "Max. 1%" },
          { "param": "Damaged Seeds", "spec": "Max. 2%" },
          { "param": "Insect Infestation", "spec": "Absent" },
          { "param": "Colour", "spec": "Natural greenish-brown" },
          { "param": "Aroma", "spec": "Characteristic cumin aroma" },
          { "param": "Packing", "spec": "10 / 20 / 25 / 50 kg" },
          { "param": "Form", "spec": "Whole / Powder" }
        ]
      },
      {
        "tabName": "Cumin Powder",
        "id": "cumin-powder",
        "parameters": [
          { "param": "Origin", "spec": "India" },
          { "param": "Product", "spec": "Cumin Powder" },
          { "param": "Purity", "spec": "Min. 99%" },
          { "param": "Moisture", "spec": "Max. 10%" },
          { "param": "Foreign Matter", "spec": "Max. 0.5%" },
          { "param": "Admixture", "spec": "Max. 0.5%" },
          { "param": "Particle Size", "spec": "60–100 Mesh" },
          { "param": "Colour", "spec": "Natural greenish-brown to brown" },
          { "param": "Aroma", "spec": "Characteristic cumin aroma" },
          { "param": "Insect Infestation", "spec": "Absent" },
          { "param": "Added Colour", "spec": "None" },
          { "param": "Added Preservatives", "spec": "None" },
          { "param": "Packing", "spec": "10 / 20 / 25 kg bulk; customized retail packs" },
          { "param": "Form", "spec": "Fine Powder" }
        ]
      }
    ]
  },
  {
    "id": "spices-cumin-powder",
    "slug": "cumin-powder",
    "name": "Cumin Powder (Ground Jeera Powder)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "https://shivaspice.com/wp-content/uploads/2021/01/shivaspice_cumin_powder.jpg",
    "origin": "India",
    "packaging": "10 / 20 / 25 kg bulk; customized retail packs",
    "specs": "Purity Min. 99%, Moisture Max. 10%, 60–100 Mesh, Zero Added Colour",
    "description": "Export-grade freshly pulverized Indian cumin powder (60–100 Mesh) with natural greenish-brown to brown hue and distinctive robust aroma. 100% pure without preservatives or added colours.",
    "specTabs": [
      {
        "tabName": "Cumin Powder",
        "id": "cumin-powder",
        "parameters": [
          { "param": "Origin", "spec": "India" },
          { "param": "Product", "spec": "Cumin Powder" },
          { "param": "Purity", "spec": "Min. 99%" },
          { "param": "Moisture", "spec": "Max. 10%" },
          { "param": "Foreign Matter", "spec": "Max. 0.5%" },
          { "param": "Admixture", "spec": "Max. 0.5%" },
          { "param": "Particle Size", "spec": "60–100 Mesh" },
          { "param": "Colour", "spec": "Natural greenish-brown to brown" },
          { "param": "Aroma", "spec": "Characteristic cumin aroma" },
          { "param": "Insect Infestation", "spec": "Absent" },
          { "param": "Added Colour", "spec": "None" },
          { "param": "Added Preservatives", "spec": "None" },
          { "param": "Packing", "spec": "10 / 20 / 25 kg bulk; customized retail packs" },
          { "param": "Form", "spec": "Fine Powder" }
        ]
      },
      {
        "tabName": "1) Cumin Seeds",
        "id": "cumin-seeds",
        "parameters": [
          { "param": "Origin", "spec": "India" },
          { "param": "Product", "spec": "Whole Cumin Seeds" },
          { "param": "Purity", "spec": "Min. 99%" },
          { "param": "Moisture", "spec": "Max. 10%" },
          { "param": "Foreign Matter", "spec": "Max. 1%" },
          { "param": "Admixture", "spec": "Max. 1%" },
          { "param": "Damaged Seeds", "spec": "Max. 2%" },
          { "param": "Insect Infestation", "spec": "Absent" },
          { "param": "Colour", "spec": "Natural greenish-brown" },
          { "param": "Aroma", "spec": "Characteristic cumin aroma" },
          { "param": "Packing", "spec": "10 / 20 / 25 / 50 kg" },
          { "param": "Form", "spec": "Whole / Powder" }
        ]
      }
    ]
  },
  {
    "id": "spices-coriander-seeds",
    "slug": "coriander-seeds-dhaniya",
    "name": "Coriander Seeds (Dhaniya Whole & Ground Powder)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "https://shivaspice.com/wp-content/uploads/2021/01/shivaspice_coriander_powder.jpg",
    "origin": "Rajasthan / Madhya Pradesh / Gujarat, India",
    "packaging": "25kg / 40kg Jute / PP Bags",
    "specs": "Eagle / Single Parrot / Double Parrot Quality, Greenish Whole, Moisture < 9%",
    "description": "Selected whole green coriander seeds and aromatic fine ground powder with distinctive citrusy fragrance and rich essential oil content."
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
    "description": "Sweet, licorice-scented green fennel seeds meticulously cleaned for seasonings, tea blends, mouth fresheners, and confectionery."
  },
  {
    "id": "spices-turmeric",
    "slug": "turmeric-finger-powder",
    "name": "Turmeric (Finger & Ground Powder / Haldi)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "https://shivaspice.com/wp-content/uploads/2021/01/turmeric_finger.jpg",
    "origin": "Salem / Nizamabad / Sangli, India",
    "packaging": "25kg / 50kg PP / Jute Bags",
    "specs": "Curcumin 2.5% to 5.0%, Moisture < 10%, Machine Cleaned & Polished",
    "description": "Golden yellow export-grade Indian turmeric fingers and ultra-fine ground powder with high natural curcumin content."
  },
  {
    "id": "spices-black-pepper",
    "slug": "black-pepper-garbled",
    "name": "Black Pepper (500GL - 570GL Malabar Garbled Whole & Cracked)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "https://shivaspice.com/wp-content/uploads/2021/01/Buy_Black_Pepper_Shivaspice.jpg",
    "origin": "Malabar / Idukki, Kerala, India",
    "packaging": "25kg / 50kg Paper / Jute Bags",
    "specs": "Garbled / Ungarbled, Density 500-570 g/l, Piperine > 4%, Moisture < 12%",
    "description": "The King of Spices: authentic Malabar black peppercorns offering robust heat, sharp bite, and strong essential oil pungency."
  },
  {
    "id": "spices-cardamom",
    "slug": "green-cardamom-elaichi",
    "name": "Cardamom (6mm - 8.5mm+ Bold Green Elaichi)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "https://shivaspice.com/wp-content/uploads/2021/01/Buy_Green_Cardamom_Shivaspice.jpg",
    "origin": "Idukki, Kerala, India",
    "packaging": "5kg / 10kg Master Cartons with vacuum liner",
    "specs": "Sizes: 6mm, 7mm, 8mm, 8.5mm Bold Green, Moisture < 10%",
    "description": "Premium grade large green cardamom pods with high volatile oil aroma and intact aromatic black seeds for gourmet applications."
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
    "specs": "Hand-picked Whole, Head intact > 90%, Eugenol > 15%, Moisture < 12%",
    "description": "Intensely fragrant whole cloves, naturally sun-dried with rich spicy warmth and concentrated therapeutic eugenol."
  },
  {
    "id": "spices-cinnamon-cassia",
    "slug": "cinnamon-sticks-cassia",
    "name": "Cinnamon & Cassia (Dalchini Round Cut Sticks & Powder)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/cinnamon-cassia.jpg",
    "origin": "Kerala / South India",
    "packaging": "10kg / 25kg Master Cartons",
    "specs": "Clean Cut Sticks & Split Quills, Volatile Oil > 1.5%, Moisture < 12%",
    "description": "Sweet, woody aromatic cinnamon sticks and cassia bark widely utilized in baking, confectionery, and spice blends."
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
    "description": "Intensely warm nutmeg kernels and lace-like mace arils with complex sweet floral notes for high-end culinary flavoring."
  },
  {
    "id": "spices-black-cardamom",
    "slug": "black-cardamom-badi-elaichi",
    "name": "Black Cardamom (Badi Elaichi / Bold Smoky Pods)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    "origin": "Sikkim / North-East / West Bengal, India",
    "packaging": "10kg / 25kg PP & Jute Bags",
    "specs": "Size: 20mm - 25mm+ Bold, Camphoraceous & Smoky, Moisture < 11%",
    "description": "Large dark brown pods with deep smoky and camphor aroma, an essential pillar of Indian garam masala and hearty savory dishes."
  },
  {
    "id": "spices-red-chilli",
    "slug": "red-chilli-sannam-teja",
    "name": "Chilli & Chilli Products (Whole Stemless, Crushed & Powder)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "https://shivaspice.com/wp-content/uploads/2021/01/shivaspice_chilli_powder.jpg",
    "origin": "Guntur, Andhra Pradesh / Byadgi, Karnataka, India",
    "packaging": "10kg / 25kg / 50kg Jute / PP Bags",
    "specs": "SHU 20,000 - 75,000 (Teja/S4), ASTA Color 40-120 (Byadgi), Moisture < 11%",
    "description": "Pungent, vibrant red Indian dry chillies sourced directly from Guntur and Byadgi, available whole with stem, stemless, crushed flakes, or ground powder."
  },
  {
    "id": "spices-garam-masala",
    "slug": "garam-masala-blended-curry-powder",
    "name": "Spice Powders & Blended Spices (Garam Masala & Curry Powders)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/garam-masala.jpg",
    "origin": "Gujarat / India",
    "packaging": "1kg / 5kg / 25kg Vacuum Foil & Master Cartons",
    "specs": "Custom formulations, 100% pure whole-ground, zero artificial fillers or MSG",
    "description": "Masterfully roasted and blended authentic Indian spice powders (Garam Masala, Curry Powder, Meat Masala, Sambar Masala) for retail and foodservice."
  },

  // ==========================================
  // 3. PULSES & LENTILS (pulses)
  // ==========================================
  {
    "id": "pulses-toor-dal",
    "slug": "toor-dal-pigeon-peas",
    "name": "Toor Dal / Pigeon Peas (Yellow Split Dehusked, Oiled & Non-Oiled)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/toor-dal.jpg",
    "origin": "Gujarat / Maharashtra / Karnataka, India",
    "packaging": "25kg / 50kg Bags",
    "specs": "Sortex Cleaned 99.5%, Oiled / Non-Oiled, Fatak / Desi Grade, Moisture < 12%",
    "description": "Dehulled and split yellow pigeon peas, the premier staple pulse across Indian and South Asian cuisine, packed with plant protein."
  },
  {
    "id": "pulses-chana-dal",
    "slug": "chana-dal-split-bengal-gram",
    "name": "Chana Dal (Split Bengal Gram Polished / Unpolished)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/chana-dal.jpg",
    "origin": "Madhya Pradesh / Rajasthan, India",
    "packaging": "25kg / 50kg Bags",
    "specs": "Purity 99.5% Sortex Clean, Bold Grain, Moisture < 11%",
    "description": "Sweet and nutty golden split chickpeas without husk, essential for savory snacks, curries, and flour milling."
  },
  {
    "id": "pulses-moong-dal",
    "slug": "yellow-moong-dal-split-dehusked",
    "name": "Moong Dal (Yellow Split Dehusked Mogar & Whole Green Mung)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/moong-beans.jpg",
    "origin": "Gujarat / Rajasthan / MP, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Dehusked Yellow Split & Whole Green 3.5mm-4.0mm, Sortex 99.5%, Moisture < 11%",
    "description": "Nutrient-rich, easy-to-digest yellow split moong and whole green mung beans suitable for culinary cooking, soups, and fresh sprouting."
  },
  {
    "id": "pulses-red-lentils",
    "slug": "red-lentils-masoor-dal",
    "name": "Masoor Dal / Red Lentils (Whole Football & Split Orange)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/red-lentils.jpg",
    "origin": "Madhya Pradesh / Uttar Pradesh, India",
    "packaging": "25kg / 50kg Export Bags",
    "specs": "Purity 99.5%, Sortex Cleaned, Polished / Unpolished, Moisture < 11%",
    "description": "Bright orange-red split and whole football lentils with high vegetable protein and rapid cooking properties for soups and stews."
  },
  {
    "id": "pulses-urad-dal",
    "slug": "black-matpe-urad-dal",
    "name": "Urad Dal / Black Matpe (Whole Black, Split & White Gota)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/urad-dal.jpg",
    "origin": "Andhra Pradesh / Maharashtra / Gujarat, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Machine Cleaned / Sortex 99.5%, Moisture < 12%, Whole, Split & Skinned Gota",
    "description": "High-protein black and white dehulled urad lentils used worldwide in papads, fermented batters, and traditional savory delicacies."
  },
  {
    "id": "pulses-chickpeas",
    "slug": "chickpeas-kabuli-chana",
    "name": "Chickpeas / Kabuli Chana (Garbanzo 42-44 to 75-80 Count)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/kabuli-chana.jpg",
    "origin": "Madhya Pradesh / Maharashtra, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Counts: 42-44, 44-46, 58-60, 75-80; Machine Cleaned / Sortex 99.5%",
    "description": "Large, plump, cream-colored Kabuli chickpeas sorted for uniform count, ideal for canning, hummus, and culinary dishes."
  },
  {
    "id": "pulses-kidney-beans",
    "slug": "rajma-red-kidney-beans-chitra",
    "name": "Kidney Beans / Rajma (Speckled Chitra & Dark Red)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/rajma-beans.jpg",
    "origin": "Jammu / Maharashtra / MP, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Sortex Clean 99%, Moisture < 12%, Uniform Grain Size, High Protein",
    "description": "Creamy-textured speckled Chitra and deep red kidney beans rich in dietary fiber and plant protein, prized in international recipes."
  },
  {
    "id": "pulses-cowpeas",
    "slug": "cowpeas-black-eyed-peas-lobia",
    "name": "Black-Eyed Peas / Cowpeas (Lobia / White Chawli)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/black-eyed-peas.jpg",
    "origin": "Maharashtra / Gujarat, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Machine Cleaned / Sortex 99.5%, Bold White Kernel with Black Eye, Moisture < 11%",
    "description": "Mild, earthy flavored white cowpeas with distinct black eyes, popular across American, European, and African menus."
  },
  {
    "id": "pulses-other-varieties",
    "slug": "desi-chana-brown-chickpeas",
    "name": "Other Indian Pulses (Desi Kala Chana, Dry Vatana Peas & Moth Beans)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/kala-chana.jpg",
    "origin": "Rajasthan / Gujarat / MP, India",
    "packaging": "25kg / 50kg PP Bags",
    "specs": "Sortex Clean 99%, Whole Dry Grains, High Fiber & Minerals",
    "description": "Traditional Indian nutrient-dense pulses including brown Desi chickpeas (Kala Chana), whole green/yellow field peas, and small drought-hardy Moth beans."
  },

  // ==========================================
  // 4. DEHYDRATED FOODS (dehydrated)
  // ==========================================
  {
    "id": "dehydrated-onion-flakes",
    "slug": "dehydrated-onion-flakes-minced-powder",
    "name": "Dehydrated Onion (Mahuva White, Red & Pink - Flakes, Minced & Chopped)",
    "category": "dehydrated",
    "categoryName": "Dehydrated Foods",
    "image": "assets/images/onion-flakes.jpg",
    "origin": "Mahuva, Gujarat, India (Global Dehydration Hub)",
    "packaging": "14kg / 20kg / 25kg Poly-lined Cartons & Paper Sacks",
    "specs": "White / Red / Pink Onion, Moisture < 5%, SO2 < 50ppm / Nil, Micro-tested",
    "description": "World capital of dehydrated onions Mahuva provides premium flakes, chopped, and toasted kibbled onion for seasonings, dressings, and soups."
  },
  {
    "id": "dehydrated-garlic",
    "slug": "dehydrated-garlic-flakes-powder-granules",
    "name": "Dehydrated Garlic (Flakes, Minced, Granules & Pure Powder)",
    "category": "dehydrated",
    "categoryName": "Dehydrated Foods",
    "image": "assets/images/garlic-flakes.jpg",
    "origin": "Gujarat / Madhya Pradesh, India",
    "packaging": "20kg / 25kg Poly-lined Master Cartons",
    "specs": "Alliin > 0.45%, Moisture < 6%, Mesh: 40-60, 80-100, Flakes, Export Grade",
    "description": "Pure dehydrated Indian garlic free from adulterants, maintaining the pungent aroma, sharp flavor, and culinary versatility of fresh garlic."
  },
  {
    "id": "dehydrated-ginger",
    "slug": "dry-ginger-sonth-whole-powder",
    "name": "Dehydrated Ginger (Flakes, Bits & Fine Ginger Powder / Sonth)",
    "category": "dehydrated",
    "categoryName": "Dehydrated Foods",
    "image": "assets/images/products/dry-ginger.jpg",
    "origin": "Kerala / Assam / Gujarat, India",
    "packaging": "20kg / 25kg Poly-lined Cartons",
    "specs": "Gingerol > 1.8%, Moisture < 6%, Sortex Clean, Spray/Air Dried",
    "description": "Intensely pungent dehydrated ginger flakes and ultra-fine powder used widely in bakery, seasoning sachets, herbal teas, and pharma."
  },
  {
    "id": "dehydrated-vegetables",
    "slug": "dehydrated-ginger-green-chilli-tomato-powder",
    "name": "Dehydrated Vegetables (Green Chilli, Tomato Powder & Mixed Veg Flakes)",
    "category": "dehydrated",
    "categoryName": "Dehydrated Foods",
    "image": "assets/images/dehydrated-ginger-chilli-tomato.jpg",
    "origin": "Gujarat, India",
    "packaging": "10kg / 20kg Corrugated Boxes with LDPE Liner",
    "specs": "100% Pure Spray-Dried / Air-Dried, Instant Soluble / Rehydratable, Moisture < 5%",
    "description": "Versatile dried vegetable powders and flakes used in instant soups, noodle seasonings, sauces, snack seasonings, and ready meals."
  },
  {
    "id": "dehydrated-other-products",
    "slug": "dehydrated-kasuri-methi-leaves",
    "name": "Other Dehydrated Products (Dehydrated Mint, Coriander & Lemon Powder)",
    "category": "dehydrated",
    "categoryName": "Dehydrated Foods",
    "image": "assets/images/onion-flakes.jpg",
    "origin": "Gujarat / Rajasthan, India",
    "packaging": "10kg / 20kg Bags & Cartons",
    "specs": "Moisture < 6%, Natural Green / Yellow, Microbiologically Clean",
    "description": "Hygienically air-dried herbal and citrus powders processed to preserve essential flavors, aromas, and natural nutrients."
  },

  // ==========================================
  // 5. FRESH PRODUCE (fresh-fruits)
  // ==========================================
  {
    "id": "fruits-alphonso-mango",
    "slug": "fresh-alphonso-kesar-mangoes",
    "name": "Fresh Mangoes (Alphonso, Kesar & Banganapalli)",
    "category": "fresh-fruits",
    "categoryName": "Fresh Produce",
    "image": "assets/images/fresh-alphonso-kesar-mangoes.jpg",
    "origin": "Ratnagiri / Gir Gujarat / Andhra, India",
    "packaging": "3kg / 4.5kg Corrugated Export Boxes (Hot Water / Irradiation Treated)",
    "specs": "Export Grade, Size 200g-320g, Brix 18-22%, APEDA Approved Packhouses",
    "description": "World-famous King of Mangoes known for its heavenly scent, rich saffron pulp, and velvety sweetness shipped via certified air-cargo routes."
  },
  {
    "id": "veg-red-onion",
    "slug": "fresh-red-onions-nashik-gujarat",
    "name": "Fresh Red Onions (Nashik / Mahuva 45-55mm+)",
    "category": "fresh-fruits",
    "categoryName": "Fresh Produce",
    "image": "assets/images/products/fresh-red-onions.jpg",
    "origin": "Nashik / Gujarat, India",
    "packaging": "5kg / 10kg / 25kg / 50kg Red Mesh / Leno Bags",
    "specs": "Sizes: 25-35mm (Gulf), 45-55mm, 55mm+ (Europe/Asia), Well Cured, Deep Red",
    "description": "Pungent, globe-shaped red onions with tight skins, cured naturally for superior shelf-life during ocean transit in ventilated containers."
  },
  {
    "id": "veg-potatoes",
    "slug": "fresh-potatoes-and-seedless-lemons",
    "name": "Fresh Potatoes (Table Grade & Chipsona Processing Variety)",
    "category": "fresh-fruits",
    "categoryName": "Fresh Produce",
    "image": "assets/images/products/potatoes-and-lemons.jpg",
    "origin": "Gujarat / Punjab, India",
    "packaging": "10kg / 25kg / 50kg Leno Bags & Jute Bags",
    "specs": "High dry matter > 21% for processing, Low sugar, Sorted 45mm+, 55mm+",
    "description": "Standardized table and crisping potatoes (Chipsona / Lady Rosetta / LR) stored in temperature-controlled facilities for international shipments."
  },
  {
    "id": "veg-seasonal-produce",
    "slug": "fresh-green-ginger",
    "name": "Other Seasonal Indian Produce (Fresh Ginger, Garlic Bulbs, Green Chillies & Pomegranates)",
    "category": "fresh-fruits",
    "categoryName": "Fresh Produce",
    "image": "assets/images/fresh-fruits.jpg",
    "origin": "Gujarat / Maharashtra / Karnataka, India",
    "packaging": "Air-Vented Cartons & Cold-Chain Reefer Packaging",
    "specs": "GlobalGAP Certified, Hot water treated, APEDA Packhouse Inspected",
    "description": "Full assortment of seasonal Indian fresh produce including plump fresh ginger, white garlic bulbs, spicy G4 green chillies, and Bhagwa pomegranates."
  },

  // ==========================================
  // 6. FROZEN SEA FOOD (seafood)
  // ==========================================
  {
    "id": "seafood-vannamei-shrimp",
    "slug": "frozen-vannamei-white-shrimp",
    "name": "Frozen Shrimp / Prawns (Vannamei White Shrimp - HOSO, HLSO, PD, PUD)",
    "category": "seafood",
    "categoryName": "Frozen Sea food",
    "image": "assets/images/products/vannamei-white-shrimp.jpg",
    "origin": "Coastal Andhra Pradesh / Gujarat, India",
    "packaging": "Block Frozen (6x1.8kg / 6x2kg) & IQF (10x1kg bags)",
    "specs": "Counts: 16/20, 21/25, 26/30, 31/40, 41/50; EU & USFDA Approved Plants",
    "description": "Farm-fresh premium white leg shrimp processed under rigorous HACCP and BRC certified freezing facilities for USA, Europe, and Asia."
  },
  {
    "id": "seafood-black-tiger",
    "slug": "frozen-black-tiger-shrimp",
    "name": "Frozen Black Tiger Shrimp (Jumbo IQF & Block Frozen)",
    "category": "seafood",
    "categoryName": "Frozen Sea food",
    "image": "assets/images/products/black-tiger-shrimp.jpg",
    "origin": "West Bengal / Odisha, India",
    "packaging": "IQF / Block Frozen in master export cartons",
    "specs": "Counts: 8/12, 13/15, 16/20, 21/25; Chemical Free / Treated, USFDA Compliant",
    "description": "Jumbo succulent black tiger shrimp with firm texture and distinct sweet ocean flavor, harvested from pristine coastal brackish waters."
  },
  {
    "id": "seafood-marine-fish",
    "slug": "frozen-ribbon-fish-whole",
    "name": "Frozen Marine Fish (Ribbon Fish, Indian Mackerel, Yellowfin Tuna & Silver Croaker)",
    "category": "seafood",
    "categoryName": "Frozen Sea food",
    "image": "assets/images/products/frozen-marine-fish.jpg",
    "origin": "Gujarat / Kerala / Maharashtra Coast, India",
    "packaging": "10kg / 20kg Master Cartons (Block & Blast Frozen)",
    "specs": "Whole Round / Steaks / Fillets, Fresh Sea Frozen, Histamine < 30ppm",
    "description": "Premium ocean-caught commercial and table fish blast-frozen immediately after landing, inspected and certified for global export."
  },
  {
    "id": "seafood-cuttlefish-squid",
    "slug": "frozen-squid-and-cuttlefish",
    "name": "Other Seafood Products (Squid & Cuttlefish Whole, Rings & Tubes)",
    "category": "seafood",
    "categoryName": "Frozen Sea food",
    "image": "assets/images/products/squid-cuttlefish.jpg",
    "origin": "Veraval / Kochi Coast, India",
    "packaging": "IQF / Block 10kg Master Cartons",
    "specs": "Whole Cleaned, Rings, Tubes, U5, U10, 10/20, 20/40 count, EU/USFDA Certified",
    "description": "Tender ocean-caught squid and cuttlefish processed with pristine hygiene standards tailored to specific importer compliance requirements."
  },

  // ==========================================
  // 7. HERBS & BOTANICAL (herbs)
  // ==========================================
  {
    "id": "herbs-moringa",
    "slug": "moringa-leaf-powder-organic",
    "name": "Moringa (Moringa Oleifera Dried Leaves & Leaf Powder)",
    "category": "herbs",
    "categoryName": "Herbs & Botanical",
    "image": "assets/images/products/moringa-leaves.jpg",
    "origin": "Tamil Nadu / Gujarat, India",
    "packaging": "20kg / 25kg Paper Bags with PE Liner / Vacuum Packs",
    "specs": "100% Organic, Green Leaf Mesh 80-100, Moisture < 7%, Protein > 25%",
    "description": "Superfood powerhouse moringa leaves shade-dried and pulverized under controlled temperatures, loaded with antioxidants, iron, and amino acids."
  },
  {
    "id": "herbs-tulsi",
    "slug": "tulsi-holy-basil-leaves-powder",
    "name": "Tulsi (Holy Basil / Ocimum Sanctum Dried Leaves & Powder)",
    "category": "herbs",
    "categoryName": "Herbs & Botanical",
    "image": "assets/images/products/tulsi-holy-basil.jpg",
    "origin": "Uttar Pradesh / Gujarat, India",
    "packaging": "10kg / 20kg Master Cartons with inner poly lining",
    "specs": "Rama & Krishna Tulsi, Eugenol Rich, Moisture < 8%, Microbiologically Tested",
    "description": "Sacred Indian Holy Basil prized worldwide for its adaptogenic, immunity-boosting properties and refreshing herbal tea aroma."
  },
  {
    "id": "herbs-ashwagandha",
    "slug": "ashwagandha-root-extract-powder",
    "name": "Ashwagandha (Indian Ginseng Root & Fine Extract Powder)",
    "category": "herbs",
    "categoryName": "Herbs & Botanical",
    "image": "assets/images/products/ashwagandha-root.jpg",
    "origin": "Madhya Pradesh / Rajasthan, India",
    "packaging": "25kg Fiber Drums / Paper Sacks",
    "specs": "Withanolides 2.5% - 5.0% HPLC, Nagori A-Grade Roots, Moisture < 8%",
    "description": "Premier Ayurvedic adaptogen root and fine powder clinically known to relieve stress, enhance vitality, and strengthen immune health."
  },
  {
    "id": "herbs-neem",
    "slug": "neem-leaves-botanical-powder",
    "name": "Neem (Dried Neem Leaves & Organic Botanical Powder)",
    "category": "herbs",
    "categoryName": "Herbs & Botanical",
    "image": "assets/images/products/neem-leaves.jpg",
    "origin": "Gujarat / Rajasthan, India",
    "packaging": "20kg / 25kg Bags & Drums",
    "specs": "Azadirachtin verified, Shade-Dried Green Leaves, Mesh 80-100, Moisture < 7%",
    "description": "Versatile antibacterial herbal leaves and powder utilized globally in dietary supplements, organic cosmetics, and natural skincare."
  },
  {
    "id": "herbs-amla",
    "slug": "amla-indian-gooseberry-dried-powder",
    "name": "Amla (Indian Gooseberry Dried Segments & Powder)",
    "category": "herbs",
    "categoryName": "Herbs & Botanical",
    "image": "assets/images/products/amla-gooseberry.jpg",
    "origin": "Gujarat / Uttar Pradesh, India",
    "packaging": "25kg Poly-lined Paper Sacks",
    "specs": "Natural Vitamin C > 2000mg/100g, Seedless Dried Segments, Mesh 80, Moisture < 8%",
    "description": "Potent Indian gooseberry rich in natural Vitamin C, bioflavonoids, and polyphenols for nutraceutical and wellness formulations."
  },
  {
    "id": "herbs-curry-leaves",
    "slug": "curry-leaves-fresh-dried",
    "name": "Curry Leaves (Sweet Neem Leaves - Fresh & Sun-Dried)",
    "category": "herbs",
    "categoryName": "Herbs & Botanical",
    "image": "assets/images/products/curry-leaves.jpg",
    "origin": "Tamil Nadu / Andhra Pradesh / Gujarat, India",
    "packaging": "5kg Air-vented Cartons (Fresh) / 10kg Vacuum Bags (Dried)",
    "specs": "Deep Green, High Volatile Aroma, Moisture < 7% (Dried), Zero Pesticide Residue",
    "description": "Distinctly fragrant curry leaves packed with essential aromatic oils, air-freighted fresh or shade-dried for authentic seasonings and tea infusions."
  },
  {
    "id": "herbs-kasuri-methi",
    "slug": "fenugreek-leaves-kasuri-methi",
    "name": "Fenugreek Leaves (Kasuri Methi Shade-Dried Leaves)",
    "category": "herbs",
    "categoryName": "Herbs & Botanical",
    "image": "assets/images/products/kasuri-methi.jpg",
    "origin": "Nagaur, Rajasthan, India",
    "packaging": "1kg / 5kg / 10kg Master Cartons with Foil Liner",
    "specs": "Deep Green Leaves, Moisture < 7%, Intensely Aromatic, Sortex Cleaned",
    "description": "Fragrant shade-dried Kasuri Methi leaves from Nagaur, providing the signature aroma and bitter-sweet touch in high-end culinary curries and breads."
  },
  {
    "id": "herbs-brahmi",
    "slug": "brahmi-bacopa-monnieri-powder",
    "name": "Brahmi (Bacopa Monnieri Whole Leaves & Memory Powder)",
    "category": "herbs",
    "categoryName": "Herbs & Botanical",
    "image": "assets/images/products/brahmi-herb.jpg",
    "origin": "India",
    "packaging": "20kg / 25kg Fiber Drums",
    "specs": "Bacosides > 20% by HPLC, 100% Pure Bacopa Monnieri, Moisture < 8%",
    "description": "Renowned Ayurvedic nootropic herb celebrated for cognitive enhancement, neuro-protection, and nervous system nourishment."
  },

  // ==========================================
  // 8. NUTS & DRY FRUITS (more-products)
  // ==========================================
  {
    "id": "more-phool-makhana",
    "slug": "phool-makhana-fox-nuts-gorgon",
    "name": "Phool Makhana / Fox Nuts (Gorgon Nut 4+, 5+, 6+ Suta Handpicked)",
    "category": "more-products",
    "categoryName": "Nuts & Dry Fruits",
    "image": "assets/images/makhana-fox-nuts.jpg",
    "origin": "Mithila, Bihar, India",
    "packaging": "8kg - 10kg Poly Bags / Custom Nitrogen Flushed Pouches",
    "specs": "Grades: 4 Suta, 5 Suta, 6 Suta Jumbo Bold, Moisture < 9%, Crisp & Clean",
    "description": "GI-tagged organic Indian fox nuts (puffed gorgon seeds), high in plant protein, calcium, magnesium, and low in glycemic index."
  },
  {
    "id": "more-almonds",
    "slug": "california-indian-badam-almonds",
    "name": "Almonds (Badam / બદામ - Extra Bold & Mamra Quality)",
    "category": "more-products",
    "categoryName": "Nuts & Dry Fruits",
    "image": "assets/images/products/almonds-badam.jpg",
    "origin": "Kashmir, India / California Grade",
    "packaging": "10kg / 25kg Vacuum Packs & Master Cartons",
    "specs": "Count 20/22, 23/25, 27/30, Moisture < 6%, Oil Content > 50%",
    "description": "Premium crunchy whole almond kernels, sorted for uniform bold caliber and loaded with natural Vitamin E, healthy fats, and antioxidants."
  },
  {
    "id": "more-cashews",
    "slug": "cashew-nuts-w180-w240-w320",
    "name": "Cashews (Kaju / કાજુ - W180 King, W240 Jumbo, W320 & Splits)",
    "category": "more-products",
    "categoryName": "Nuts & Dry Fruits",
    "image": "assets/images/cashew-nuts.jpg",
    "origin": "Goa / Kerala / Maharashtra, India",
    "packaging": "10kg / 11.34kg (25 lbs) / 22.68kg (50 lbs) Tins & Vacuum Packs",
    "specs": "White Wholes (W180 King Size, W240 Jumbo, W320 Standard), Moisture < 5%",
    "description": "Buttery, crunchy Indian cashew nuts carefully graded and vacuum-sealed under inert gas for maximum international freshness."
  },
  {
    "id": "more-walnuts",
    "slug": "walnuts-akhrot-inshell-kernels",
    "name": "Walnuts (Akhrot / અખરોટ - Inshell & Extra Light Halves Kernels)",
    "category": "more-products",
    "categoryName": "Nuts & Dry Fruits",
    "image": "assets/images/products/walnuts-akhrot.jpg",
    "origin": "Kashmir, India",
    "packaging": "10kg Master Cartons with Vacuum Nitrogen Liner",
    "specs": "Halves > 80%, Extra Light / Light Amber, Moisture < 5%, Rich in Omega-3",
    "description": "Heart-healthy Kashmiri walnuts known for golden amber kernels, delicate buttery crunch, and exceptional ALA Omega-3 concentration."
  },
  {
    "id": "more-pistachios",
    "slug": "pistachios-pista-roasted-salted-green",
    "name": "Pistachios (Pista / પિસ્તા - Roasted Salted & Raw Green Kernels)",
    "category": "more-products",
    "categoryName": "Nuts & Dry Fruits",
    "image": "assets/images/products/pistachios-pista.jpg",
    "origin": "India / Global Sourcing",
    "packaging": "10kg / 25kg Vacuum Cartons",
    "specs": "Inshell Naturally Opened, Size 18/20, 21/25, Moisture < 5%",
    "description": "Delightfully vibrant green pistachios, available lightly roasted with sea salt or raw de-shelled for bakery and confectioneries."
  },
  {
    "id": "more-raisins",
    "slug": "raisins-sultanas-kismis-golden-green",
    "name": "Raisins / Sultanas (Kismis / સૂકી દ્રાક્ષ - Golden, Green & Malayar)",
    "category": "more-products",
    "categoryName": "Nuts & Dry Fruits",
    "image": "assets/images/products/raisins-kismis.jpg",
    "origin": "Sangli / Nashik, Maharashtra, India",
    "packaging": "10kg / 15kg Corrugated Master Cartons",
    "specs": "Golden Long, Green Bold, Brown Malayar, Moisture 14-16%, Seedless",
    "description": "Sun-dried plump Indian seedless raisins bursting with natural fructose sweetness, sorted for uniform berry size and color."
  },
  {
    "id": "more-dates",
    "slug": "premium-dates-khajur-medjool-kimia",
    "name": "Dates (Khajur / ખજૂર - Premium Medjool, Kimia & Wet/Dry Dates)",
    "category": "more-products",
    "categoryName": "Nuts & Dry Fruits",
    "image": "assets/images/products/dates-khajur.jpg",
    "origin": "Gujarat / International Direct Import",
    "packaging": "500g / 1kg / 5kg / 10kg Master Cartons",
    "specs": "Soft, Semi-Dry & Dry, Natural Brix > 65%, Grade A, Moisture 18-22%",
    "description": "Succulent, caramel-rich whole dates naturally cured and hygienically packed for retail gifting, energy snacks, and confectionery."
  },
  {
    "id": "more-figs",
    "slug": "dried-figs-anjeer-garland-round",
    "name": "Dried Figs (Anjeer / અંજીર - Premium Round & Garland Quality)",
    "category": "more-products",
    "categoryName": "Nuts & Dry Fruits",
    "image": "assets/images/products/dried-figs-anjeer.jpg",
    "origin": "Maharashtra / International Direct Sourcing",
    "packaging": "1kg / 5kg / 10kg Garland String & Ring Master Boxes",
    "specs": "Size: 40mm - 55mm+ Jumbo, Moisture < 20%, Tender Chewy Flesh",
    "description": "Naturally flattened round dried figs threaded in traditional garlands, packed with crunchy edible seeds, dietary fiber, and minerals."
  },
  // ==========================================
  // 9. OTHER CATEGORY & CUSTOM SOURCING (other)
  // ==========================================
  {
    "id": "other-custom-merchant-sourcing",
    "slug": "custom-merchant-sourcing-specialty",
    "name": "Custom Merchant Sourcing (Any Indian Agro & Food Commodity On Demand)",
    "category": "other",
    "categoryName": "Other Category",
    "image": "assets/images/export-documentation-desk.jpg",
    "origin": "Pan-India Mandis & Dedicated Processing Hubs",
    "packaging": "Buyer Customized Bags / Consumer Pouches / Bulk Containers / Private Label OEM",
    "specs": "Export Grade 100%, SGS / APEDA / Spices Board Inspected per Specifications",
    "description": "Looking for commodities not listed in our standard catalogue? We procure bespoke Indian agricultural, grain, spice, seed, and food items with end-to-end FOB/CIF export logistics and quality certifications."
  }
];

  window.TRADE_PRODUCTS = products;
  window.KGE_PRODUCTS = window.KGE_PRODUCTS || {};
  window.KGE_PRODUCTS.trade = products;
})();
