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
    "image": "assets/images/products/1121-basmati-rice.jpeg",
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
    "image": "assets/images/products/1718-basmati-rice.jpeg",
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
    "image": "assets/images/products/1509-basmati-rice.jpeg",
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
    "image": "assets/images/products/1401-basmati-rice.jpeg",
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
    "image": "assets/images/products/sona-masoori-rice.jpeg",
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
    "name": "Cumin Seeds (Jeera Whole)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/cumin-seeds.jpg",
    "origin": "Gujarat / Rajasthan, India",
    "packaging": "10 / 20 / 25 / 50 kg; customized retail packs",
    "specs": "Purity Min. 99%, Moisture Max. 10%, Foreign Matter Max. 1%, Absent Infestation",
    "description": "Authentic Indian Cumin Seeds (Whole Jeera), machine cleaned and Sortex sorted under rigorous export quality standards with minimum 99% purity and characteristic natural aroma.",
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
          { "param": "Form", "spec": "Whole Seeds" }
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
    "image": "assets/images/products/cumin-powder.jpg",
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
    "name": "Coriander Seeds & Ground Powder (Dhaniya)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/coriander-powder.jpg",
    "origin": "Rajasthan / Madhya Pradesh / Gujarat, India",
    "packaging": "25kg / 40kg Jute / PP Bags",
    "specs": "Eagle / Single Parrot / Double Parrot Quality, Greenish Whole & Fine Ground Powder",
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
    "name": "Turmeric Finger (Salem & Nizamabad Polished Haldi)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/turmeric-finger.jpg",
    "origin": "Salem / Nizamabad / Sangli, India",
    "packaging": "25kg / 50kg PP / Jute Bags",
    "specs": "Curcumin 2.5% to 5.0%, Moisture < 10%, Machine Cleaned & Polished",
    "description": "Golden yellow export-grade Indian turmeric fingers with high natural curcumin content, meticulously dried, machine cleaned, and polished."
  },
  {
    "id": "spices-turmeric-powder",
    "slug": "turmeric-powder",
    "name": "Turmeric Powder (Pure Golden Haldi Powder)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/turmeric-powder.jpg",
    "origin": "Salem / Nizamabad / Sangli, India",
    "packaging": "1kg / 5kg / 25kg / 50kg Food-Grade Foil & Bags",
    "specs": "Curcumin 3.0% to 5.0%, 80-100 Mesh, Moisture < 9%, Zero Added Color",
    "description": "Finely pulverized 100% pure Indian turmeric powder with rich golden-yellow hue, intense aroma, and high active curcumin for culinary and wellness formulations."
  },
  {
    "id": "spices-black-pepper",
    "slug": "black-pepper-garbled",
    "name": "Black Pepper (500GL - 570GL Malabar Garbled Whole & Cracked)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/black-pepper.jpg",
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
    "image": "assets/images/products/green-cardamom.jpg",
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
    "image": "assets/images/products/cloves.jpg",
    "origin": "Tamil Nadu / Kerala, India",
    "packaging": "10kg / 25kg PP & Jute Bags",
    "specs": "Hand-picked Whole, Head intact > 90%, Eugenol > 15%, Moisture < 12%",
    "description": "Intensely fragrant whole cloves, naturally sun-dried with rich spicy warmth and concentrated therapeutic eugenol."
  },
  {
    "id": "spices-cinnamon-cassia",
    "slug": "cinnamon-sticks-cassia",
    "name": "Cinnamon Sticks & Cassia (Dalchini Round Cut Sticks & Quills)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/cinnamon-sticks.jpg",
    "origin": "Kerala / South India",
    "packaging": "10kg / 25kg Master Cartons",
    "specs": "Clean Cut Sticks & Split Quills, Volatile Oil > 1.5%, Moisture < 12%",
    "description": "Sweet, woody aromatic cinnamon sticks and cassia bark widely utilized in baking, confectionery, and spice blends."
  },
  {
    "id": "spices-cinnamon-powder",
    "slug": "cinnamon-powder",
    "name": "Cinnamon Powder (Pure Ground Dalchini Powder)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/cinnamon-powder.jpg",
    "origin": "Kerala / South India",
    "packaging": "10kg / 25kg Food-Grade Cartons & Pouches",
    "specs": "Fine Ground 80-100 Mesh, Pure Dalchini / Cassia, Moisture < 10%",
    "description": "Finely milled pure aromatic cinnamon powder with rich fragrance and sweet spicy warmth for bakeries, seasonings, and beverages."
  },
  {
    "id": "spices-nutmeg-mace",
    "slug": "nutmeg-and-mace-whole",
    "name": "Nutmeg & Mace (Jaiphal Whole Kernels & Powder)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/nutmeg.jpg",
    "origin": "Kerala / Karnataka, India",
    "packaging": "10kg / 25kg Cartons & Jute Bags",
    "specs": "With Shell / Without Shell Nutmeg & Freshly Grated Kernel Powder, Moisture < 10%",
    "description": "Intensely warm nutmeg kernels and fine jaiphal powder with complex sweet floral notes for high-end culinary flavoring."
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
    "name": "Chilli Powder (Export-Grade Red Chilli / Lal Mirch Powder)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/chilli-powder.jpg",
    "origin": "Guntur, Andhra Pradesh / Byadgi, Karnataka, India",
    "packaging": "10kg / 25kg / 50kg Jute / PP Bags",
    "specs": "SHU 20,000 - 75,000 (Teja/S4), ASTA Color 40-120 (Byadgi), Moisture < 11%",
    "description": "Pungent, vibrant red Indian dry chilli powder sourced directly from Guntur and Byadgi, perfectly ground for intense color and balanced heat."
  },
  {
    "id": "spices-chilli-seeds",
    "slug": "chilli-seeds-whole",
    "name": "Dried Red Chilli & Chilli Seeds (Teja / S4 Whole & Pure Seeds)",
    "category": "spices",
    "categoryName": "Spices & Seasonings",
    "image": "assets/images/products/chilli-seeds.jpg",
    "origin": "Guntur, Andhra Pradesh / Byadgi, Karnataka, India",
    "packaging": "10kg / 25kg / 50kg Bags",
    "specs": "Whole Stemless Dried Chillies & High-Purity Separated Seeds, Moisture < 10%",
    "description": "Premium export-grade whole dried red chillies and pure separated hot chilli seeds sourced from Guntur, ideal for direct grinding, spice processing, and oleoresin extraction."
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
    "name": "Toor Dal / Pigeon Peas",
    "subtitle": "Yellow Split Dehusked — Oil Polished & Non-Oiled",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/products/toor-dal.jpeg",
    "origin": "India",
    "packaging": "25 kg / 50 kg food-grade bags or customized as per buyer requirement",
    "specs": "Moisture Max. 12%, Foreign Matter Max. 0.5%, Yellow Split Dehusked (Non-Oiled & Oil Polished)",
    "description": "Clean, uniform yellow split cotyledons of Cajanus cajan (Pigeon Peas, Toor Dal, Arhar Dal, Red Gram). Available in Yellow Split Dehusked Non-Oiled, Oil Polished, and Unpolished / Natural forms. Hygienically processed through destoning, grading, optical sorting, and export packaging.",
    "specTabs": [
      {
        "tabName": "Physical Specifications",
        "id": "toor-dal-physical",
        "parameters": [
          { "param": "Product Name", "spec": "Toor Dal / Pigeon Peas" },
          { "param": "Varieties / Grades", "spec": "Yellow Split Dehusked — Oil Polished & Non-Oiled" },
          { "param": "Botanical Name", "spec": "Cajanus cajan" },
          { "param": "Common Names", "spec": "Pigeon Peas, Toor Dal, Arhar Dal, Red Gram" },
          { "param": "Product Type", "spec": "Pulses & Lentils" },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Forms", "spec": "Yellow Split Dehusked – Non-Oiled, Oil Polished & Unpolished / Natural (custom specs available)" },
          { "param": "Appearance", "spec": "Clean, uniform yellow split cotyledons" },
          { "param": "Colour", "spec": "Natural yellow to golden yellow" },
          { "param": "Taste", "spec": "Characteristic, clean and typical of pigeon peas" },
          { "param": "Aroma", "spec": "Characteristic, free from off-odour" },
          { "param": "Moisture", "spec": "Max. 12% — typical commercial target; final buyer specification/COA governs" },
          { "param": "Foreign Matter", "spec": "Max. 0.5% or as mutually agreed" },
          { "param": "Other Food Grains", "spec": "As per mutually agreed specification" },
          { "param": "Damaged / Discoloured Grains", "spec": "As per buyer specification" },
          { "param": "Weevilled / Insect-Damaged Grains", "spec": "As per buyer specification" },
          { "param": "Broken / Powder", "spec": "As per agreed grade specification" },
          { "param": "Size / Uniformity", "spec": "Uniform and suitable for export-grade processing" },
          { "param": "Packaging", "spec": "25 kg / 50 kg food-grade bags or customized packaging" }
        ]
      },
      {
        "tabName": "Processing & Quality Compliance",
        "id": "toor-dal-processing-quality",
        "parameters": [
          { "param": "Processing Stages", "spec": "Cleaning → Destoning → Grading → Dehusking → Splitting → Sorting → Polishing (for oil-polished grade) → Optical Sorting → Final Quality Inspection → Hygienic Packing" },
          { "param": "Oil-Polished Grade Note", "spec": "Smooth, bright appearance; polishing material declared & agreed with buyer, complying with destination food regulations" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable destination-country MRLs" },
          { "param": "Heavy Metals", "spec": "Tested as applicable" },
          { "param": "Mycotoxins / Aflatoxins", "spec": "Tested as applicable to the product and destination" },
          { "param": "Salmonella", "spec": "Must meet applicable microbiological specification (Absent in test portion)" },
          { "param": "E. coli", "spec": "Must meet applicable microbiological specification" },
          { "param": "Additives & Contaminants", "spec": "No unauthorized additives or contaminants" },
          { "param": "Batch-wise COA", "spec": "Available upon request with every consignment" },
          { "param": "Loading Ports", "spec": "Mundra, Pipavav, Nhava Sheva (JNPT) & Hazira Ports" },
          { "param": "Certifications Available", "spec": "Phytosanitary Certificate, Certificate of Origin, FSSAI / Health, SGS Inspection" }
        ]
      }
    ]
  },
  {
    "id": "pulses-chana-dal",
    "slug": "chana-dal-split-bengal-gram",
    "name": "Chana Dal / Split Bengal Gram",
    "subtitle": "Polished & Unpolished",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/products/chana-dal.jpeg",
    "origin": "India",
    "packaging": "1kg / 2kg / 5kg Retail, 10kg / 20kg / 25kg Wholesale, 50kg Bulk in PP/BOPP Bags",
    "specs": "Moisture Max. 12%, Foreign Matter Max. 0.5%, Polished & Unpolished Options, Sortex Cleaned",
    "description": "Clean, uniform split chickpea cotyledons of Cicer arietinum (Bengal Gram Dal, Split Chickpeas, Desi Chana Dal). Offered in Polished and Unpolished / Natural forms with Sortex optical sorting, moisture max 12%, and compliance with destination-market MRL standards.",
    "specTabs": [
      {
        "tabName": "Physical Specifications",
        "id": "chana-dal-physical",
        "parameters": [
          { "param": "Product Name", "spec": "Chana Dal / Split Bengal Gram" },
          { "param": "Grades / Finish", "spec": "Polished & Unpolished" },
          { "param": "Botanical Name", "spec": "Cicer arietinum" },
          { "param": "Common Names", "spec": "Bengal Gram Dal, Split Chickpeas, Desi Chana Dal" },
          { "param": "Product Type", "spec": "Pulses & Lentils" },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Forms", "spec": "Polished Chana Dal, Unpolished / Natural Chana Dal, Machine-cleaned & Graded, Sortex / Optical-sorted (custom sizes available)" },
          { "param": "Appearance", "spec": "Clean, uniform split chickpea cotyledons" },
          { "param": "Colour", "spec": "Natural yellow to golden yellow" },
          { "param": "Aroma", "spec": "Characteristic, clean and free from off-odour" },
          { "param": "Taste", "spec": "Typical of Bengal gram" },
          { "param": "Moisture", "spec": "Max. 12% — typical commercial target; final COA/buyer specification governs" },
          { "param": "Foreign Matter", "spec": "Max. 0.5% or as mutually agreed" },
          { "param": "Other Grains", "spec": "As per agreed specification" },
          { "param": "Damaged / Discoloured Grains", "spec": "As per buyer specification" },
          { "param": "Insect-Damaged / Weevilled", "spec": "As per buyer specification" },
          { "param": "Broken / Powder", "spec": "As per agreed grade" },
          { "param": "Uniformity", "spec": "Uniformly split and properly dehusked" },
          { "param": "Packaging", "spec": "1 kg / 2 kg / 5 kg (Retail), 10 kg / 20 kg / 25 kg (Wholesale), 50 kg (Bulk); PP woven & BOPP laminated bags" },
          { "param": "Shelf Life", "spec": "12–24 months, subject to packaging and storage conditions" },
          { "param": "Storage", "spec": "Cool, dry, clean and well-ventilated warehouse, protected from moisture, sunlight, insects and strong odours" },
          { "param": "Applications", "spec": "Dal & traditional Indian cuisine, restaurants & foodservice, ready-to-cook products, canned & processed foods, snack manufacturing, pulse flour and food manufacturing" }
        ]
      },
      {
        "tabName": "Processing & Export Compliance",
        "id": "chana-dal-export-compliance",
        "parameters": [
          { "param": "Processing Stages", "spec": "Cleaning → Destoning → Grading → Dehusking → Splitting → Sorting → Optional Oil Polishing → Optical Sorting → Final Inspection → Hygienic Packing" },
          { "param": "Polished Option", "spec": "Smooth, bright appearance with a commercially polished finish (polishing material declared and compliant with food regulations)" },
          { "param": "Unpolished Option", "spec": "Natural appearance with minimal processing and without polishing" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable destination-country MRLs (tested per destination commodity frameworks, e.g., US FDA/EPA, EU MRL Reg. 396/2005)" },
          { "param": "Heavy Metals", "spec": "Tested as applicable" },
          { "param": "Aflatoxins / Mycotoxins", "spec": "Tested as applicable" },
          { "param": "Microbiological Safety", "spec": "Salmonella (absent in specified test portion), E. coli meets destination specifications" },
          { "param": "Infestation & Purity", "spec": "Free from live insects, infestation, abnormal odour, adulteration and unauthorized additives" },
          { "param": "Batch-wise COA", "spec": "Available with each shipment" },
          { "param": "APEDA Pulse Classification", "spec": "Identified under dried chickpeas; Pigeon Peas and Gram Dal listed separately within India's export classifications" },
          { "param": "Export Documentation", "spec": "Commercial Invoice, Packing List, Certificate of Origin, COA, Pesticide Residue Report, Microbiological Test Report, Heavy Metal Report, Phytosanitary & Fumigation Certificates" }
        ]
      }
    ]
  },
  {
    "id": "pulses-moong-dal",
    "slug": "yellow-moong-dal-split-dehusked",
    "name": "Moong Dal / Green Gram",
    "subtitle": "Yellow Split Dehusked Moong & Whole Green Mung",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/products/moong-beans.jpeg",
    "origin": "India",
    "packaging": "1kg / 2kg / 5kg Retail, 10kg / 20kg / 25kg Wholesale, 50kg Bulk in Food-Grade PP/BOPP Bags",
    "specs": "Moisture Max. 12%, Foreign Matter Max. 0.5%, Yellow Split Dehusked & Whole Green Forms",
    "description": "Premium export-grade Indian Moong Dal and Whole Green Mung (Vigna radiata). Available in Yellow Split Dehusked and Whole Green forms, machine cleaned and sortex optical graded with Max 12% moisture. Fully compliant with US FDA tolerances and EU Regulation (EC) No. 396/2005 MRLs.",
    "specTabs": [
      {
        "tabName": "Yellow Split Dehusked Moong",
        "id": "moong-yellow-split",
        "parameters": [
          { "param": "Product Name", "spec": "Moong Dal (Yellow Split Dehusked)" },
          { "param": "Botanical Name", "spec": "Vigna radiata" },
          { "param": "Common Names", "spec": "Moong Dal, Split Mung Bean, Yellow Lentils" },
          { "param": "Product Type", "spec": "Pulses & Lentils" },
          { "param": "Origin", "spec": "India" },
          { "param": "Appearance", "spec": "Uniform yellow split cotyledons" },
          { "param": "Colour", "spec": "Bright yellow to golden yellow" },
          { "param": "Aroma", "spec": "Clean, characteristic" },
          { "param": "Taste", "spec": "Characteristic of moong dal" },
          { "param": "Moisture", "spec": "Max. 12% — typical commercial target" },
          { "param": "Foreign Matter", "spec": "Max. 0.5% or buyer-agreed specification" },
          { "param": "Broken / Powder", "spec": "As per agreed grade" },
          { "param": "Damaged / Discoloured Grains", "spec": "As per buyer specification" },
          { "param": "Insect-Damaged Grains", "spec": "As per buyer specification" },
          { "param": "Finish Options", "spec": "Polished & unpolished options, machine-cleaned & optical-sorted" },
          { "param": "Processing Workflow", "spec": "Cleaning → Destoning → Grading → Dehusking → Splitting → Sorting → Optical Sorting → Final Inspection → Packing" },
          { "param": "Packaging", "spec": "1 kg / 2 kg / 5 kg (Retail), 10 kg / 20 kg / 25 kg (Wholesale), 50 kg (Bulk); Food-grade PP & BOPP bags" },
          { "param": "Shelf Life & Storage", "spec": "12–24 months; store in cool, dry, clean and well-ventilated place, protected from moisture, sunlight, insects & strong odours" },
          { "param": "Applications", "spec": "Dal and traditional Indian cuisine, restaurants & foodservice, ready-to-cook foods, soups, snacks, and food manufacturing" }
        ]
      },
      {
        "tabName": "Whole Green Mung",
        "id": "moong-whole-green",
        "parameters": [
          { "param": "Product Name", "spec": "Whole Green Mung / Green Gram" },
          { "param": "Botanical Name", "spec": "Vigna radiata" },
          { "param": "Common Names", "spec": "Mung Bean, Whole Green Gram, Sabut Moong" },
          { "param": "Product Type", "spec": "Pulses & Lentils" },
          { "param": "Origin", "spec": "India" },
          { "param": "Appearance", "spec": "Clean, whole, uniform green beans" },
          { "param": "Colour", "spec": "Natural green to dark green" },
          { "param": "Aroma", "spec": "Clean and characteristic" },
          { "param": "Taste", "spec": "Characteristic of whole green mung" },
          { "param": "Moisture", "spec": "Max. 12% — typical commercial target" },
          { "param": "Foreign Matter", "spec": "Max. 0.5% or buyer-agreed specification" },
          { "param": "Broken / Split Grains", "spec": "As per agreed grade" },
          { "param": "Damaged / Discoloured Grains", "spec": "As per buyer specification" },
          { "param": "Insect-Damaged Grains", "spec": "As per buyer specification" },
          { "param": "Processing Workflow", "spec": "Cleaning → Destoning → Grading → Sorting → Optical Sorting → Final Inspection → Packing" },
          { "param": "Packaging", "spec": "1 kg / 2 kg / 5 kg (Retail), 10 kg / 20 kg / 25 kg (Wholesale), 50 kg (Bulk); Food-grade PP & BOPP bags" },
          { "param": "Shelf Life & Storage", "spec": "12–24 months; protect from moisture, heat, insects and direct sunlight" },
          { "param": "Applications", "spec": "Sprouting and healthy-food products, culinary preparations, soups, pulse-based snacks, retail & private-label brands" }
        ]
      },
      {
        "tabName": "Quality & Export Compliance",
        "id": "moong-quality-export",
        "parameters": [
          { "param": "Pesticide Residues", "spec": "Compliant with applicable US/EU destination requirements" },
          { "param": "US FDA Regulatory Standard", "spec": "Imported foods must meet applicable FDA requirements, including safety, sanitary production and truthful labeling; pesticide residues must comply with applicable tolerances" },
          { "param": "EU MRL Regulatory Standard", "spec": "Pesticide MRLs are commodity- and pesticide-specific under Regulation (EC) No. 396/2005, including for imported foods" },
          { "param": "Heavy Metals", "spec": "Tested as applicable" },
          { "param": "Aflatoxins / Mycotoxins", "spec": "Tested as applicable" },
          { "param": "Salmonella", "spec": "Must meet applicable microbiological specification (Absent in test portion)" },
          { "param": "E. coli", "spec": "Must meet applicable microbiological specification" },
          { "param": "Purity & Infestation", "spec": "Free from live insects, infestation, abnormal odour and visible contamination" },
          { "param": "Batch-wise COA", "spec": "Available with each shipment" },
          { "param": "Export Documentation", "spec": "Commercial Invoice, Packing List, Certificate of Origin, COA, Pesticide Residue Report, Microbiological Test Report, Heavy Metal Report, Phytosanitary & Fumigation Certificates" }
        ]
      }
    ]
  },
  {
    "id": "pulses-red-lentils",
    "slug": "red-lentils-masoor-dal",
    "name": "Masoor Dal / Red Lentils",
    "subtitle": "Whole Football & Split Orange",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/products/red-lentils.jpeg",
    "origin": "India",
    "packaging": "1kg / 2kg / 5kg Retail, 10kg / 20kg / 25kg Wholesale, 50kg Bulk in Food-Grade PP/BOPP Bags",
    "specs": "Moisture Max. 12%, Foreign Matter Max. 0.5%, Whole Football & Split Orange Grades, Sortex Cleaned",
    "description": "Premium export-grade Indian Masoor Dal and Red Lentils (Lens culinaris). Available in Whole Football and Split Orange dehulled forms, sortex optical cleaned with Max 12% moisture. Fully compliant with US FDA/EPA tolerances and EU Regulation (EC) No. 396/2005 destination MRLs.",
    "specTabs": [
      {
        "tabName": "Whole Football Masoor",
        "id": "masoor-whole-football",
        "parameters": [
          { "param": "Product Name", "spec": "Whole Masoor / Football Lentils" },
          { "param": "Botanical Name", "spec": "Lens culinaris" },
          { "param": "Common Names", "spec": "Whole Red Lentils, Football Lentils, Sabut Masoor" },
          { "param": "Product Type", "spec": "Pulses & Lentils" },
          { "param": "Origin", "spec": "India" },
          { "param": "Appearance", "spec": "Clean, whole, flat, lens-shaped seeds" },
          { "param": "Colour", "spec": "Brown, reddish-brown to greenish-brown outer seed coat" },
          { "param": "Aroma", "spec": "Clean and characteristic" },
          { "param": "Taste", "spec": "Characteristic of lentils" },
          { "param": "Moisture", "spec": "Max. 12% — typical commercial target" },
          { "param": "Foreign Matter", "spec": "Max. 0.5% or buyer-agreed specification" },
          { "param": "Broken / Split Seeds", "spec": "As per agreed grade" },
          { "param": "Damaged / Discoloured Seeds", "spec": "As per buyer specification" },
          { "param": "Insect-Damaged Seeds", "spec": "As per buyer specification" },
          { "param": "Processing Workflow", "spec": "Cleaning → Destoning → Grading → Sorting → Optical Sorting → Final Inspection → Packing" },
          { "param": "Packaging", "spec": "1 kg / 2 kg / 5 kg (Retail), 10 kg / 20 kg / 25 kg (Wholesale), 50 kg (Bulk); Food-grade PP & BOPP bags" },
          { "param": "Shelf Life & Storage", "spec": "12–24 months; store in cool, dry, clean and well-ventilated place, protected from moisture, sunlight, insects & strong odours" },
          { "param": "Applications", "spec": "Dal and traditional Indian cuisine, soups, ready-to-cook meals, canned/processed foods, and food manufacturing" }
        ]
      },
      {
        "tabName": "Split Orange Red Lentils",
        "id": "masoor-split-orange",
        "parameters": [
          { "param": "Product Name", "spec": "Split Red Lentils / Orange Masoor Dal" },
          { "param": "Botanical Name", "spec": "Lens culinaris" },
          { "param": "Common Names", "spec": "Split Red Lentils, Orange Lentils, Dhuli Masoor" },
          { "param": "Product Type", "spec": "Pulses & Lentils" },
          { "param": "Origin", "spec": "India" },
          { "param": "Appearance", "spec": "Clean, uniform split/dehulled lentil cotyledons" },
          { "param": "Colour", "spec": "Orange to salmon-red" },
          { "param": "Aroma", "spec": "Clean and characteristic" },
          { "param": "Taste", "spec": "Characteristic of red lentils" },
          { "param": "Moisture", "spec": "Max. 12% — typical commercial target" },
          { "param": "Foreign Matter", "spec": "Max. 0.5% or buyer-agreed specification" },
          { "param": "Broken / Powder", "spec": "As per agreed grade" },
          { "param": "Damaged / Discoloured Lentils", "spec": "As per buyer specification" },
          { "param": "Uniformity", "spec": "Uniformly processed and graded" },
          { "param": "Processing Workflow", "spec": "Cleaning → Destoning → Grading → Dehusking → Splitting → Sorting → Optical Sorting → Final Inspection → Packing" },
          { "param": "Packaging", "spec": "1 kg / 2 kg / 5 kg (Retail), 10 kg / 20 kg / 25 kg (Wholesale), 50 kg (Bulk); Food-grade PP & BOPP bags" },
          { "param": "Shelf Life & Storage", "spec": "12–24 months under recommended storage" },
          { "param": "Applications", "spec": "Dal and traditional Indian cuisine, soups & lentil formulations, restaurants/foodservice, ready-to-cook meals, plant-based foods, retail & private-label brands" }
        ]
      },
      {
        "tabName": "Quality & Export Compliance",
        "id": "masoor-quality-export",
        "parameters": [
          { "param": "Pesticide Residues", "spec": "Compliant with applicable destination-country requirements" },
          { "param": "U.S. FDA & EPA Tolerance Standard", "spec": "Imported food must meet applicable FDA requirements (safety, sanitary production and truthful labeling); pesticide tolerances are established by EPA and enforced by FDA" },
          { "param": "EU MRL Regulatory Framework", "spec": "Pesticide MRLs are commodity- and pesticide-specific under Regulation (EC) No. 396/2005; applicable limits are confirmed for specific lentil/pesticide combination" },
          { "param": "Heavy Metals", "spec": "Tested as applicable" },
          { "param": "Aflatoxins / Mycotoxins", "spec": "Tested as applicable" },
          { "param": "Salmonella", "spec": "Must meet applicable microbiological specification (Absent in specified test portion)" },
          { "param": "E. coli", "spec": "Must meet applicable microbiological specification" },
          { "param": "Purity & Infestation", "spec": "Free from live insects, infestation, abnormal odour and visible contamination; no unauthorized additives" },
          { "param": "Batch-wise COA", "spec": "Available upon request with every export consignment" },
          { "param": "Export Documentation", "spec": "Commercial Invoice, Packing List, Certificate of Origin, COA, Pesticide Residue Report, Microbiological Test Report, Heavy Metal Report, Phytosanitary & Fumigation Certificates" }
        ]
      }
    ]
  },
  {
    "id": "pulses-urad-dal",
    "slug": "black-matpe-urad-dal",
    "name": "Urad Dal / Black Matpe",
    "subtitle": "Whole Black, Split & White Gota",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/products/urad-dal.jpeg",
    "origin": "India",
    "packaging": "1kg / 2kg / 5kg Retail, 10kg / 20kg / 25kg Wholesale, 50kg Bulk in Food-Grade PP/BOPP Bags",
    "specs": "Moisture Max. 12%, Foreign Matter Max. 0.5%, Whole Black, Split & White Gota Forms, Sortex Cleaned",
    "description": "Premium export-grade Indian Urad Dal / Black Matpe (Vigna mungo). Available in Whole Black Gram, Split Urad, and Whole Dehulled White Gota forms. Optical sortex cleaned, moisture max 12%, compliant with US FDA sanitary requirements and EU Regulation (EC) No. 396/2005 destination MRLs.",
    "specTabs": [
      {
        "tabName": "Whole Black Urad / Matpe",
        "id": "urad-whole-black",
        "parameters": [
          { "param": "Product Name", "spec": "Whole Black Urad / Black Matpe" },
          { "param": "Botanical Name", "spec": "Vigna mungo" },
          { "param": "Common Names", "spec": "Black Gram, Sabut Urad, Black Matpe" },
          { "param": "Product Type", "spec": "Pulses & Lentils" },
          { "param": "Origin", "spec": "India" },
          { "param": "Appearance", "spec": "Clean, whole, uniform black gram with black seed coat" },
          { "param": "Colour", "spec": "Black to dark black" },
          { "param": "Aroma", "spec": "Clean and characteristic" },
          { "param": "Taste", "spec": "Characteristic of black gram" },
          { "param": "Moisture", "spec": "Max. 12% — typical commercial target" },
          { "param": "Foreign Matter", "spec": "Max. 0.5% or buyer-agreed specification" },
          { "param": "Broken / Damaged Grains", "spec": "As per agreed grade" },
          { "param": "Insect-Damaged Grains", "spec": "As per buyer specification" },
          { "param": "Processing Workflow", "spec": "Cleaning → Destoning → Grading → Sorting → Optical Sorting → Final Inspection → Packing" },
          { "param": "Packaging", "spec": "1 kg / 2 kg / 5 kg (Retail), 10 kg / 20 kg / 25 kg (Wholesale), 50 kg (Bulk); Food-grade PP & BOPP bags" },
          { "param": "Shelf Life & Storage", "spec": "12–24 months; store in cool, dry, clean and well-ventilated place, protected from moisture, sunlight, insects & strong odours" },
          { "param": "Applications", "spec": "Traditional dal makhani, stewed lentil dishes, pulse flour, food processing and foodservice" }
        ]
      },
      {
        "tabName": "Split Urad Dal",
        "id": "urad-split",
        "parameters": [
          { "param": "Product Name", "spec": "Split Urad Dal (Chilka)" },
          { "param": "Botanical Name", "spec": "Vigna mungo" },
          { "param": "Common Names", "spec": "Split Black Gram, Urad Chilka" },
          { "param": "Product Type", "spec": "Pulses & Lentils" },
          { "param": "Origin", "spec": "India" },
          { "param": "Appearance", "spec": "Clean, uniformly split grains with black skin" },
          { "param": "Colour", "spec": "Cream/white cotyledon with black skin" },
          { "param": "Moisture", "spec": "Max. 12%" },
          { "param": "Foreign Matter", "spec": "Max. 0.5% or buyer-agreed specification" },
          { "param": "Broken / Powder", "spec": "As per agreed grade" },
          { "param": "Uniformity", "spec": "As per buyer specification" },
          { "param": "Processing Workflow", "spec": "Cleaning → Destoning → Grading → Dehusking/Splitting as applicable → Sorting → Optical Sorting → Final Inspection → Packing" },
          { "param": "Packaging", "spec": "1 kg / 2 kg / 5 kg (Retail), 10 kg / 20 kg / 25 kg (Wholesale), 50 kg (Bulk); Food-grade PP & BOPP bags" },
          { "param": "Shelf Life & Storage", "spec": "12–24 months under recommended storage" },
          { "param": "Applications", "spec": "Dal curries, fermented batters, savory snacks, ready-to-cook products, retail & private-label brands" }
        ]
      },
      {
        "tabName": "White Gota / Whole Dehulled",
        "id": "urad-white-gota",
        "parameters": [
          { "param": "Product Name", "spec": "White Gota / Whole White Urad (Dehulled)" },
          { "param": "Botanical Name", "spec": "Vigna mungo" },
          { "param": "Common Names", "spec": "Urad Gota, Dehulled White Gram, Whole Skinned Urad" },
          { "param": "Product Type", "spec": "Pulses & Lentils" },
          { "param": "Origin", "spec": "India" },
          { "param": "Appearance", "spec": "Clean, whole, dehulled urad" },
          { "param": "Colour", "spec": "Creamy white to ivory" },
          { "param": "Moisture", "spec": "Max. 12%" },
          { "param": "Foreign Matter", "spec": "Max. 0.5% or buyer-agreed specification" },
          { "param": "Damaged / Discoloured Grains", "spec": "As per agreed grade" },
          { "param": "Uniformity", "spec": "Uniform, well-cleaned and graded" },
          { "param": "Processing Workflow", "spec": "Cleaning → Destoning → Grading → Dehusking → Polishing/Finishing where applicable → Sorting → Optical Sorting → Final Inspection → Packing" },
          { "param": "Packaging", "spec": "1 kg / 2 kg / 5 kg (Retail), 10 kg / 20 kg / 25 kg (Wholesale), 50 kg (Bulk); Food-grade PP & BOPP bags" },
          { "param": "Shelf Life & Storage", "spec": "12–24 months under recommended storage" },
          { "param": "Applications", "spec": "Idli & dosa batter manufacturing, papad production, medu vada, snack products, restaurants & foodservice" }
        ]
      },
      {
        "tabName": "Quality & Export Compliance",
        "id": "urad-quality-export",
        "parameters": [
          { "param": "Pesticide Residues", "spec": "Compliant with applicable destination-country requirements" },
          { "param": "U.S. Export Requirement", "spec": "Imported food must be safe, sanitary and truthfully labeled and must meet applicable FDA requirements" },
          { "param": "EU Export Requirement", "spec": "Pesticide residues must comply with applicable commodity- and pesticide-specific MRLs under Regulation (EC) No. 396/2005" },
          { "param": "Heavy Metals", "spec": "Tested as applicable" },
          { "param": "Aflatoxins / Mycotoxins", "spec": "Tested as applicable" },
          { "param": "Salmonella", "spec": "Must meet applicable microbiological specification (Absent in specified test portion)" },
          { "param": "E. coli", "spec": "Must meet applicable microbiological specification" },
          { "param": "Purity & Infestation", "spec": "Free from live insects, infestation, abnormal odour and visible contamination; no unauthorized additives" },
          { "param": "Batch-wise COA", "spec": "Available upon request with every export consignment" },
          { "param": "Export Documentation", "spec": "Commercial Invoice, Packing List, Certificate of Origin, COA, Pesticide Residue Report, Microbiological Test Report, Heavy Metal Report, Phytosanitary & Fumigation Certificates" }
        ]
      }
    ]
  },
  {
    "id": "pulses-chickpeas",
    "slug": "chickpeas-kabuli-chana",
    "name": "Chickpeas / Kabuli Chana",
    "subtitle": "Garbanzo — 42–44 to 75–80 Count",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/products/kabuli-chana.jpeg",
    "origin": "India",
    "packaging": "1kg / 2kg / 5kg Retail, 10kg / 20kg / 25kg Wholesale, 50kg Bulk in Food-Grade PP/BOPP Bags (Vacuum Packing Available)",
    "specs": "Moisture Max. 12%, Foreign Matter Max. 0.5%, Counts 42–44 to 75–80 per 100g, Optical Sortex Cleaned",
    "description": "Premium export-grade Indian Kabuli Chickpeas / Garbanzo Beans (Cicer arietinum). Clean, whole, plump cotyledons sized from Extra Large 42–44 to 75–80 count per 100g. Machine cleaned, size graded, and optical sortex processed, compliant with US FDA and EU Regulation (EC) No. 396/2005 food safety requirements.",
    "specTabs": [
      {
        "tabName": "Grades & Physical Specs",
        "id": "kabuli-physical-grades",
        "parameters": [
          { "param": "Product Name", "spec": "Chickpeas / Kabuli Chana" },
          { "param": "Available Count Grades", "spec": "42–44 (Extra Large), 44–46, 46–48, 50–52, 52–54, 58–60, 60–62, 70–75, 75–80 Count" },
          { "param": "Count Standard", "spec": "Approximate number of chickpeas per 100 g confirmed according to agreed commercial specification" },
          { "param": "Botanical Name", "spec": "Cicer arietinum" },
          { "param": "Common Names", "spec": "Kabuli Chickpeas, Garbanzo Beans, Ceci" },
          { "param": "Product Type", "spec": "Pulses & Legumes" },
          { "param": "Origin", "spec": "India" },
          { "param": "Appearance", "spec": "Clean, whole, plump and uniform Kabuli chickpeas" },
          { "param": "Colour", "spec": "Creamy white to pale beige" },
          { "param": "Shape", "spec": "Round to slightly angular, characteristic Kabuli type" },
          { "param": "Aroma", "spec": "Clean and characteristic, free from off-odour" },
          { "param": "Taste", "spec": "Characteristic of chickpeas" },
          { "param": "Moisture", "spec": "Max. 12% — typical commercial target" },
          { "param": "Foreign Matter", "spec": "Max. 0.5% or buyer-agreed specification" },
          { "param": "Broken / Split Chickpeas", "spec": "As per agreed grade" },
          { "param": "Damaged / Discoloured Chickpeas", "spec": "As per buyer specification" },
          { "param": "Insect-Damaged / Weevilled", "spec": "As per buyer specification" },
          { "param": "Uniformity", "spec": "High uniformity within selected count grade" },
          { "param": "Packaging", "spec": "1 kg / 2 kg / 5 kg (Retail), 10 kg / 20 kg / 25 kg (Wholesale), 50 kg (Bulk); Food-grade PP woven with liner, BOPP laminated & vacuum bags" },
          { "param": "Shelf Life & Storage", "spec": "12–24 months; store in cool, dry, clean and well-ventilated warehouse, protected from moisture, sunlight, insects & strong odours" },
          { "param": "Applications", "spec": "Hummus production, falafel, canned chickpeas, roasted chickpea snacks, salads, restaurants & foodservice, retail & private-label brands" }
        ]
      },
      {
        "tabName": "Processing & Export Compliance",
        "id": "kabuli-quality-export",
        "parameters": [
          { "param": "Processing Workflow", "spec": "Cleaning → Destoning → Pre-Grading → Size Grading → Sorting → Optical Sorting → Quality Inspection → Hygienic Packing" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable destination-country MRLs" },
          { "param": "U.S. Export Requirement", "spec": "Imported foods must meet applicable FDA requirements for safety, sanitation and truthful labeling" },
          { "param": "EU Export Requirement", "spec": "Pesticide residues must comply with applicable commodity- and pesticide-specific MRLs under Regulation (EC) No. 396/2005" },
          { "param": "Heavy Metals", "spec": "Tested as applicable" },
          { "param": "Aflatoxins / Mycotoxins", "spec": "Tested as applicable" },
          { "param": "Salmonella", "spec": "Must meet applicable microbiological specification (Absent in specified test portion)" },
          { "param": "E. coli", "spec": "Must meet applicable microbiological specification" },
          { "param": "Purity & Infestation", "spec": "Free from live insects, infestation, abnormal odour and visible contamination" },
          { "param": "Batch-wise COA", "spec": "Available with each shipment" },
          { "param": "Export Documentation", "spec": "Commercial Invoice, Packing List, Certificate of Origin, COA, Pesticide Residue Report, Microbiological Test Report, Heavy Metal Report, Phytosanitary & Fumigation Certificates" }
        ]
      }
    ]
  },
  {
    "id": "pulses-kidney-beans",
    "slug": "rajma-red-kidney-beans-chitra",
    "name": "Kidney Beans / Rajma",
    "subtitle": "Speckled Chitra & Dark Red",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/products/rajma-beans.jpeg",
    "origin": "India",
    "packaging": "Bulk: 25kg / 50kg PP Woven Bags, Retail: 500g / 1kg / 2kg / 5kg, BOPP Laminated & Jumbo FIBC Bags",
    "specs": "Purity ≥ 99%, Moisture ≤ 14%, Foreign Matter ≤ 0.5–1.0%, Optical Sortex Cleaned",
    "description": "Premium export-grade Indian Kidney Beans / Rajma (Phaseolus vulgaris). Available in Speckled Chitra (cream with reddish-brown speckles) and Dark Red varieties. Machine cleaned, gravity separated, and optical sortex processed with ≥ 99% purity. Fully compliant with US FDA/EPA tolerances and international food safety standards.",
    "specTabs": [
      {
        "tabName": "Physical Specs & Varieties",
        "id": "rajma-physical-varieties",
        "parameters": [
          { "param": "Product Name", "spec": "Kidney Beans / Rajma" },
          { "param": "Available Varieties", "spec": "Speckled Chitra / Chitra Rajma & Dark Red Kidney Beans (other red/speckled grades on request)" },
          { "param": "Botanical Name", "spec": "Phaseolus vulgaris" },
          { "param": "Common Names", "spec": "Rajma, Kidney Beans, Red Kidney Beans, Chitra Rajma" },
          { "param": "Product Type", "spec": "Whole Dried Pulses / Beans" },
          { "param": "Origin", "spec": "India" },
          { "param": "Appearance", "spec": "Clean, whole, sound and uniform kidney-shaped beans" },
          { "param": "Chitra Colour", "spec": "Cream/beige with natural reddish-brown speckles" },
          { "param": "Dark Red Colour", "spec": "Uniform deep red to dark red" },
          { "param": "Purity", "spec": "≥ 99% typical export grade" },
          { "param": "Moisture", "spec": "≤ 14% typical commercial specification" },
          { "param": "Foreign Matter", "spec": "≤ 0.5–1.0%, as per agreed contract" },
          { "param": "Broken / Split Beans", "spec": "≤ 2%, buyer-agreed" },
          { "param": "Damaged / Discoloured Beans", "spec": "≤ 2–3%, buyer-agreed" },
          { "param": "Insect / Weevil Damage", "spec": "Free from live infestation; limits as agreed" },
          { "param": "Admixture / Other Varieties", "spec": "As per agreed specification" },
          { "param": "Odour", "spec": "Characteristic; free from abnormal/off odour" },
          { "param": "Fungus / Mould", "spec": "Free from visible mould/fungal infestation" },
          { "param": "Size Grading", "spec": "Typically graded by bean count/size according to variety and buyer requirement" },
          { "param": "Packaging Options", "spec": "25 kg / 50 kg PP woven bags (Bulk), 500 g / 1 kg / 2 kg / 5 kg (Retail), BOPP laminated bags & Jumbo FIBCs" },
          { "param": "Shelf Life & Storage", "spec": "Up to 24 months (typical 12–24 months); store in cool, dry, clean and well-ventilated warehouse protected from moisture, sunlight, insects & strong odours" },
          { "param": "Applications", "spec": "Rajma curry & Indian cuisine, canned beans, soups & stews, ready-to-cook foods, foodservice/catering, retail packs and food manufacturing" }
        ]
      },
      {
        "tabName": "Processing & Export Compliance",
        "id": "rajma-quality-compliance",
        "parameters": [
          { "param": "Processing Workflow", "spec": "Cleaning → Destoning → Pre-Grading → Size Grading → Gravity Separation → Optical / Sortex Sorting → Quality Inspection → Metal Detection → Packing" },
          { "param": "Supply Grades", "spec": "Machine-cleaned, Sortex-cleaned and export graded according to buyer requirements" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable destination-country MRLs" },
          { "param": "U.S. Shipments Standard", "spec": "Pesticide residues must comply with applicable EPA tolerances and imported food must meet FDA requirements" },
          { "param": "Heavy Metals", "spec": "Compliant with applicable requirements" },
          { "param": "Aflatoxins / Mycotoxins", "spec": "Tested as applicable to destination and buyer specification" },
          { "param": "Microbiological Parameters", "spec": "Tested according to buyer / destination-country requirements" },
          { "param": "Purity & Additives", "spec": "Free from live insects and visible fungal contamination; no artificial colouring or unauthorized additives" },
          { "param": "Batch-wise COA", "spec": "Available with every shipment" },
          { "param": "Trading Parameters Note", "spec": "Official Indian commodity parameters list Rajma moisture ranges up to 14%, while commercial export specifications commonly target higher purity (≥99%) and lower foreign matter (≤0.5%)" },
          { "param": "Export Documentation", "spec": "Commercial Invoice, Packing List, Certificate of Origin, COA, Phytosanitary Certificate, Fumigation Certificate, Health/Food Safety documents, Pesticide / Heavy Metal / Mycotoxin / Microbiology reports" }
        ]
      }
    ]
  },
  {
    "id": "pulses-cowpeas",
    "slug": "cowpeas-black-eyed-peas-lobia",
    "name": "Black-Eyed Peas / Cowpeas",
    "subtitle": "Lobia / White Chawli",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/products/black-eyed-peas.jpeg",
    "origin": "India",
    "packaging": "Bulk: 25kg / 50kg PP Woven Bags, Retail: 500g / 1kg / 2kg / 5kg, BOPP Laminated, Vacuum Packs & Jumbo FIBCs",
    "specs": "Purity ≥ 99%, Moisture ≤ 12%, Foreign Matter ≤ 0.5–1.0%, Optical Sortex Cleaned, HS Code: 0713.35",
    "description": "Premium export-grade Indian Black-Eyed Peas / Cowpeas (Vigna unguiculata — Lobia / White Chawli). Clean, sound, mature, creamy white to light beige beans with distinct black eyes. Processed through gravity separation and optical sortex cleaning with ≥ 99% purity and ≤ 12% moisture. HS Code: 0713.35.",
    "specTabs": [
      {
        "tabName": "Physical Specifications",
        "id": "lobia-physical-specs",
        "parameters": [
          { "param": "Product Name", "spec": "Black-Eyed Peas / Cowpeas" },
          { "param": "Varieties / Names", "spec": "Lobia, Chawli, Black-Eyed Beans, White Lobia" },
          { "param": "Botanical Name", "spec": "Vigna unguiculata" },
          { "param": "HS Code", "spec": "0713.35 (Cowpeas, dried, shelled)" },
          { "param": "Product Type", "spec": "Whole Dried Pulses / Cowpeas" },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Form", "spec": "Whole dried cowpeas" },
          { "param": "Appearance", "spec": "Clean, sound, mature, wholesome and reasonably uniform beans" },
          { "param": "Colour", "spec": "Creamy white to light beige with characteristic black eye" },
          { "param": "Shape", "spec": "Oval / kidney-shaped, uniform according to grade" },
          { "param": "Purity", "spec": "≥ 99% typical premium export grade" },
          { "param": "Moisture", "spec": "≤ 12% typical export specification (commercial target governed by batch COA)" },
          { "param": "Foreign Matter", "spec": "≤ 0.5–1.0%, buyer-agreed" },
          { "param": "Admixture / Other Edible Grains", "spec": "As per agreed specification" },
          { "param": "Broken Beans", "spec": "≤ 2% typical, buyer-agreed" },
          { "param": "Damaged / Immature / Shriveled", "spec": "As per agreed specification" },
          { "param": "Weevilled Beans", "spec": "Free from live infestation; tolerance as agreed" },
          { "param": "Discoloured Beans", "spec": "Controlled according to buyer specification" },
          { "param": "Insect Damage & Mould", "spec": "Free from live insects, visible mould and fungal infestation" },
          { "param": "Odour & Taste", "spec": "Clean, characteristic of cowpeas; free from abnormal/off odour and taste" },
          { "param": "Packaging Options", "spec": "25 kg / 50 kg PP woven bags (Bulk), 500 g / 1 kg / 2 kg / 5 kg (Retail), BOPP laminated, vacuum packs & Jumbo FIBCs" },
          { "param": "Shelf Life & Storage", "spec": "12–24 months under recommended conditions; store in cool, dry, clean, well-ventilated warehouse protected from moisture, sunlight, insects & strong odours" },
          { "param": "Applications", "spec": "Indian curries & dishes, soups, stews, salads, African & Middle Eastern cuisine, ready-to-cook foods, catering, retail packs and food manufacturing" }
        ]
      },
      {
        "tabName": "Processing & Export Compliance",
        "id": "lobia-quality-compliance",
        "parameters": [
          { "param": "Processing Workflow", "spec": "Raw Material Selection → Cleaning → Destoning → Pre-Grading → Size Grading → Gravity Separation → Sortex / Optical Sorting → Metal Detection → Quality Inspection → Packing" },
          { "param": "Supply Grades", "spec": "Supplied machine cleaned, Sortex cleaned and export graded according to buyer requirements" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable destination-country MRLs" },
          { "param": "Heavy Metals", "spec": "Compliant with applicable destination requirements" },
          { "param": "Aflatoxins / Mycotoxins", "spec": "Tested as required by destination and buyer specification" },
          { "param": "Microbiological Parameters", "spec": "Tested according to buyer/destination requirements" },
          { "param": "Purity & Additives", "spec": "Free from live insects, visible mould, abnormal odour; no unauthorized colouring or additives" },
          { "param": "Batch-wise COA", "spec": "Available with every export shipment" },
          { "param": "Indian Grading Standards Note", "spec": "Indian grading standards recognize Special, Standard and General grades for Lobia, with moisture criteria ranging from 11% to 16%; ≤12% moisture is targeted for premium export" },
          { "param": "Export Documentation", "spec": "Commercial Invoice, Packing List, Certificate of Origin, COA, Phytosanitary Certificate, Fumigation Certificate, Pesticide Residue / Heavy Metal / Mycotoxin / Microbiology Reports" }
        ]
      }
    ]
  },
  {
    "id": "pulses-other-varieties",
    "slug": "desi-chana-brown-chickpeas",
    "name": "Other Indian Pulses (Desi Kala Chana, Dry Vatana Peas & Moth Beans)",
    "category": "pulses",
    "categoryName": "Pulses & Lentils",
    "image": "assets/images/products/other-indian-pulses.jpeg",
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
    "slug": "dehydrated-onion-white-red-pink",
    "name": "Dehydrated Onion — White, Red & Pink",
    "category": "dehydrated",
    "categoryName": "Dehydrated Foods",
    "image": "assets/images/products/dehydrated-onion-flakes.jpeg",
    "origin": "India",
    "packaging": "5 kg / 10 kg / 20 kg / 25 kg food-grade packaging or customized",
    "specs": "Moisture Typically ≤ 8%, Flakes, Kibbled, Minced, Chopped, Granules & Powder",
    "description": "Cleaned, sorted, sliced/chopped and hygienically dehydrated Indian white, red and pink onions with characteristic mildly sweet and pungent flavour. Ideal for seasonings, soups, sauces, instant foods, snack foods, spice blends, meat preparations and food manufacturing.",
    "specTabs": [
      {
        "tabName": "Product Specifications",
        "id": "onion-specs",
        "parameters": [
          { "param": "Product Name", "spec": "Dehydrated Onion" },
          { "param": "Varieties", "spec": "White Onion, Red Onion & Pink Onion" },
          { "param": "Botanical Name", "spec": "Allium cepa" },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Type", "spec": "Dehydrated Vegetable Ingredient" },
          { "param": "Available Forms", "spec": "Flakes, Kibbled, Minced, Chopped, Granules & Powder" },
          { "param": "Colour", "spec": "Natural white, off-white, pink or light purple depending on variety" },
          { "param": "Aroma", "spec": "Characteristic onion aroma" },
          { "param": "Taste", "spec": "Characteristic, mildly sweet and pungent" },
          { "param": "Moisture", "spec": "Typically ≤ 8%" },
          { "param": "Foreign Matter", "spec": "As per agreed buyer specification" },
          { "param": "Particle Size", "spec": "Customized according to buyer requirement" },
          { "param": "Additives", "spec": "No additives unless specifically agreed" },
          { "param": "Processing", "spec": "Cleaned, sorted, sliced/chopped and hygienically dehydrated" },
          { "param": "Microbiological Quality", "spec": "Tested as per applicable destination-market and buyer requirements" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable US/EU requirements" },
          { "param": "Heavy Metals", "spec": "Tested as applicable" },
          { "param": "Aflatoxins / Mycotoxins", "spec": "Tested where applicable" },
          { "param": "Salmonella", "spec": "Absent in specified test portion" },
          { "param": "E. coli", "spec": "As per agreed specification" },
          { "param": "Packaging", "spec": "5 kg / 10 kg / 20 kg / 25 kg food-grade packaging or customized" },
          { "param": "Shelf Life", "spec": "Typically 18–24 months under recommended storage conditions" },
          { "param": "Storage", "spec": "Cool, dry and hygienic conditions; protect from moisture, heat and direct sunlight" },
          { "param": "Applications", "spec": "Seasonings, soups, sauces, instant foods, snack foods, spice blends, meat preparations and food manufacturing." }
        ]
      }
    ]
  },
  {
    "id": "dehydrated-garlic",
    "slug": "dehydrated-garlic-flakes-powder-granules",
    "name": "Dehydrated Garlic",
    "category": "dehydrated",
    "categoryName": "Dehydrated Foods",
    "image": "assets/images/products/dehydrated-garlic.jpeg",
    "origin": "India",
    "packaging": "5 kg / 10 kg / 20 kg / 25 kg food-grade bags or customized packaging",
    "specs": "Moisture Typically ≤ 6–8%, Flakes, Minced, Chopped, Granules & Fine Garlic Powder",
    "description": "Carefully cleaned, peeled, sliced/minced and dehydrated under hygienic conditions from authentic Indian Allium sativum with fresh pungent aroma. Ideal for seasonings, sauces, soups, instant foods, spice blends, snacks, marinades and food processing.",
    "specTabs": [
      {
        "tabName": "Product Specifications",
        "id": "garlic-specs",
        "parameters": [
          { "param": "Product Name", "spec": "Dehydrated Garlic" },
          { "param": "Botanical Name", "spec": "Allium sativum" },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Type", "spec": "Dehydrated Vegetable / Culinary Ingredient" },
          { "param": "Available Forms", "spec": "Flakes, Minced, Chopped, Granules & Fine Garlic Powder" },
          { "param": "Colour", "spec": "Natural cream to light ivory" },
          { "param": "Aroma", "spec": "Characteristic fresh garlic aroma" },
          { "param": "Taste", "spec": "Characteristic pungent garlic flavour" },
          { "param": "Moisture", "spec": "Typically ≤ 6–8%" },
          { "param": "Foreign Matter", "spec": "As per agreed buyer specification" },
          { "param": "Particle Size", "spec": "Customized" },
          { "param": "Additives", "spec": "No additives unless specifically agreed" },
          { "param": "Processing", "spec": "Carefully cleaned, peeled, sliced/minced and dehydrated under hygienic conditions" },
          { "param": "Microbiological Quality", "spec": "Tested according to applicable destination-market requirements" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable US/EU requirements" },
          { "param": "Heavy Metals", "spec": "Tested as applicable" },
          { "param": "Aflatoxins / Mycotoxins", "spec": "Tested where applicable" },
          { "param": "Salmonella", "spec": "Absent in specified test portion" },
          { "param": "E. coli", "spec": "As per agreed specification" },
          { "param": "Packaging", "spec": "5 kg / 10 kg / 20 kg / 25 kg food-grade bags or customized packaging" },
          { "param": "Shelf Life", "spec": "Typically 18–24 months" },
          { "param": "Storage", "spec": "Cool, dry and moisture-controlled conditions" },
          { "param": "Applications", "spec": "Seasonings, sauces, soups, instant foods, spice blends, snacks, marinades and food-processing applications." }
        ]
      }
    ]
  },
  {
    "id": "dehydrated-ginger",
    "slug": "dry-ginger-sonth-whole-powder",
    "name": "Dehydrated Ginger",
    "category": "dehydrated",
    "categoryName": "Dehydrated Foods",
    "image": "assets/images/products/dehydrated-ginger.jpeg",
    "origin": "India",
    "packaging": "5 kg / 10 kg / 20 kg / 25 kg food-grade packaging or customized",
    "specs": "Moisture Typically ≤ 8%, Flakes, Slices, Bits, Chopped Pieces, Granules & Fine Powder",
    "description": "Washed, cleaned, sliced/cut and hygienically dehydrated from Indian Zingiber officinale with characteristic warm and spicy ginger aroma. Ideal for seasonings, beverages, bakery products, sauces, soups, instant foods, spice blends and food manufacturing.",
    "specTabs": [
      {
        "tabName": "Product Specifications",
        "id": "ginger-specs",
        "parameters": [
          { "param": "Product Name", "spec": "Dehydrated Ginger" },
          { "param": "Botanical Name", "spec": "Zingiber officinale" },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Type", "spec": "Dehydrated Spice / Vegetable Ingredient" },
          { "param": "Available Forms", "spec": "Flakes, Slices, Bits, Chopped Pieces, Granules & Fine Ginger Powder" },
          { "param": "Colour", "spec": "Natural cream to light beige" },
          { "param": "Aroma", "spec": "Characteristic warm and spicy ginger aroma" },
          { "param": "Taste", "spec": "Characteristic pungent, warm and spicy flavour" },
          { "param": "Moisture", "spec": "Typically ≤ 8%" },
          { "param": "Foreign Matter", "spec": "As per agreed buyer specification" },
          { "param": "Particle Size", "spec": "Customized according to application" },
          { "param": "Additives", "spec": "No additives unless specifically agreed" },
          { "param": "Processing", "spec": "Washed, cleaned, sliced/cut and hygienically dehydrated" },
          { "param": "Microbiological Quality", "spec": "Tested according to applicable destination-market requirements" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable US/EU requirements" },
          { "param": "Heavy Metals", "spec": "Tested as applicable" },
          { "param": "Aflatoxins / Mycotoxins", "spec": "Tested where applicable" },
          { "param": "Salmonella", "spec": "Absent in specified test portion" },
          { "param": "E. coli", "spec": "As per agreed specification" },
          { "param": "Packaging", "spec": "5 kg / 10 kg / 20 kg / 25 kg food-grade packaging or customized" },
          { "param": "Shelf Life", "spec": "Typically 18–24 months" },
          { "param": "Storage", "spec": "Cool, dry and protected from moisture and direct sunlight" },
          { "param": "Applications", "spec": "Seasonings, beverages, bakery products, sauces, soups, instant foods, spice blends and food manufacturing." }
        ]
      }
    ]
  },
  {
    "id": "dehydrated-vegetables",
    "slug": "dehydrated-ginger-green-chilli-tomato-powder",
    "name": "Dehydrated Vegetables — Green Chilli, Tomato Powder & Mixed Vegetables",
    "category": "dehydrated",
    "categoryName": "Dehydrated Foods",
    "image": "assets/images/products/dehydrated-vegetables.jpeg",
    "origin": "India",
    "packaging": "5 kg / 10 kg / 20 kg / 25 kg or customized food-grade packaging",
    "specs": "Moisture Typically ≤ 5–10%, Green Chilli, Tomato Powder & Mixed Veggies",
    "description": "Premium dehydrated Indian vegetables including Green Chilli (Capsicum spp.), Tomato Powder (Solanum lycopersicum), and custom Mixed Vegetables (Carrot, Green Peas, Cabbage, Beans, Onion, Capsicum). Sourced, sorted, and dehydrated for instant foods, noodles, soups, seasoning blends and food manufacturing.",
    "specTabs": [
      {
        "tabName": "1) Mixed Vegetables",
        "id": "mixed-veg",
        "parameters": [
          { "param": "Product Name", "spec": "Mixed Dehydrated Vegetables" },
          { "param": "Available Ingredients", "spec": "Carrot, Green Peas, Cabbage, Beans, Onion, Capsicum & custom formulations" },
          { "param": "Forms", "spec": "Flakes, Dice, Chopped Pieces, Granules & Custom Cuts" },
          { "param": "Origin", "spec": "India" },
          { "param": "Colour", "spec": "Natural colour characteristic of each vegetable" },
          { "param": "Moisture", "spec": "Typically ≤ 8–10%, depending on vegetable" },
          { "param": "Particle Size", "spec": "Customized" },
          { "param": "Processing", "spec": "Carefully cleaned, cut, sorted and dehydrated" },
          { "param": "Packaging", "spec": "5 kg / 10 kg / 20 kg / 25 kg or customized food-grade packaging" },
          { "param": "Shelf Life", "spec": "Typically 12–24 months depending on product" },
          { "param": "Storage", "spec": "Cool, dry and moisture-controlled conditions" },
          { "param": "Applications", "spec": "Instant foods, soups, noodles, ready-to-cook meals, seasoning mixes and food manufacturing." }
        ]
      },
      {
        "tabName": "2) Green Chilli",
        "id": "green-chilli",
        "parameters": [
          { "param": "Product Name", "spec": "Dehydrated Green Chilli" },
          { "param": "Botanical Group", "spec": "Capsicum spp." },
          { "param": "Origin", "spec": "India" },
          { "param": "Available Forms", "spec": "Flakes, Slices, Chopped Pieces, Granules & Powder" },
          { "param": "Colour", "spec": "Natural green to dark green" },
          { "param": "Aroma", "spec": "Characteristic chilli aroma" },
          { "param": "Taste", "spec": "Characteristic pungent flavour" },
          { "param": "Moisture", "spec": "Typically ≤ 8–10%" },
          { "param": "Particle Size", "spec": "Customized" },
          { "param": "Packaging", "spec": "5 kg / 10 kg / 20 kg / 25 kg food-grade packaging" },
          { "param": "Applications", "spec": "Seasonings, sauces, instant foods, spice blends and food manufacturing." }
        ]
      },
      {
        "tabName": "3) Tomato Powder",
        "id": "tomato-powder",
        "parameters": [
          { "param": "Product Name", "spec": "Dehydrated Tomato Powder" },
          { "param": "Botanical Name", "spec": "Solanum lycopersicum" },
          { "param": "Origin", "spec": "India" },
          { "param": "Colour", "spec": "Natural red to deep red" },
          { "param": "Aroma", "spec": "Characteristic tomato aroma" },
          { "param": "Taste", "spec": "Characteristic tomato flavour" },
          { "param": "Moisture", "spec": "Typically ≤ 5–7%" },
          { "param": "Particle Size", "spec": "Customized" },
          { "param": "Packaging", "spec": "5 kg / 10 kg / 20 kg / 25 kg food-grade packaging" },
          { "param": "Applications", "spec": "Soups, sauces, seasoning blends, instant foods, snacks and food formulations." }
        ]
      }
    ]
  },
  {
    "id": "dehydrated-mint",
    "slug": "dehydrated-mint-leaves-powder",
    "name": "Dehydrated Mint",
    "category": "dehydrated",
    "categoryName": "Dehydrated Foods",
    "image": "assets/images/products/dehydrated-mint.jpeg",
    "origin": "India",
    "packaging": "5 kg / 10 kg / 20 kg / 25 kg or customized",
    "specs": "Moisture Typically ≤ 8–10%, Whole Leaves, Flakes, Crushed Leaves & Powder",
    "description": "Cleaned, sorted and hygienically dehydrated Indian mint leaves (Mentha spp.) with cool, refreshing aroma and flavour. Ideal for seasonings, sauces, soups, tea blends, spice mixes, chutneys and food formulations.",
    "specTabs": [
      {
        "tabName": "Product Specifications",
        "id": "mint-specs",
        "parameters": [
          { "param": "Product Name", "spec": "Dehydrated Mint" },
          { "param": "Botanical Name", "spec": "Mentha spp." },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Type", "spec": "Dehydrated Culinary Herb" },
          { "param": "Available Forms", "spec": "Whole Leaves, Flakes, Crushed Leaves & Powder" },
          { "param": "Colour", "spec": "Natural green to olive green" },
          { "param": "Aroma", "spec": "Characteristic fresh mint aroma" },
          { "param": "Taste", "spec": "Cool, refreshing and characteristic mint flavour" },
          { "param": "Moisture", "spec": "Typically ≤ 8–10%" },
          { "param": "Foreign Matter", "spec": "As per agreed buyer specification" },
          { "param": "Particle Size", "spec": "Customized" },
          { "param": "Processing", "spec": "Cleaned, sorted and hygienically dehydrated" },
          { "param": "Microbiological Quality", "spec": "Tested according to applicable destination-market requirements" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable US/EU requirements" },
          { "param": "Heavy Metals", "spec": "Tested as applicable" },
          { "param": "Salmonella", "spec": "Absent in specified test portion" },
          { "param": "E. coli", "spec": "As per agreed specification" },
          { "param": "Packaging", "spec": "5 kg / 10 kg / 20 kg / 25 kg or customized" },
          { "param": "Shelf Life", "spec": "Typically 18–24 months" },
          { "param": "Applications", "spec": "Seasonings, sauces, soups, tea blends, spice mixes, chutneys and food formulations." }
        ]
      }
    ]
  },
  {
    "id": "dehydrated-coriander",
    "slug": "dehydrated-coriander-leaves-powder",
    "name": "Dehydrated Coriander Leaves",
    "category": "dehydrated",
    "categoryName": "Dehydrated Foods",
    "image": "assets/images/products/dehydrated-coriander.jpeg",
    "origin": "India",
    "packaging": "5 kg / 10 kg / 20 kg / 25 kg or customized",
    "specs": "Moisture Typically ≤ 8–10%, Whole Leaves, Flakes, Crushed Leaves & Powder",
    "description": "Cleaned, sorted, cut and hygienically dehydrated Indian coriander leaves (Coriandrum sativum) with characteristic fresh coriander flavour and aroma. Ideal for seasonings, spice blends, sauces, soups, ready-to-cook foods and food manufacturing.",
    "specTabs": [
      {
        "tabName": "Product Specifications",
        "id": "coriander-specs",
        "parameters": [
          { "param": "Product Name", "spec": "Dehydrated Coriander Leaves" },
          { "param": "Botanical Name", "spec": "Coriandrum sativum" },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Type", "spec": "Dehydrated Culinary Herb" },
          { "param": "Available Forms", "spec": "Whole Leaves, Flakes, Crushed Leaves & Powder" },
          { "param": "Colour", "spec": "Natural green to olive green" },
          { "param": "Aroma", "spec": "Characteristic coriander aroma" },
          { "param": "Taste", "spec": "Characteristic fresh coriander flavour" },
          { "param": "Moisture", "spec": "Typically ≤ 8–10%" },
          { "param": "Foreign Matter", "spec": "As per agreed specification" },
          { "param": "Particle Size", "spec": "Customized" },
          { "param": "Processing", "spec": "Cleaned, sorted, cut and hygienically dehydrated" },
          { "param": "Microbiological Quality", "spec": "Tested according to applicable destination requirements" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable US/EU requirements" },
          { "param": "Heavy Metals", "spec": "Tested as applicable" },
          { "param": "Salmonella", "spec": "Absent in specified test portion" },
          { "param": "E. coli", "spec": "As per agreed specification" },
          { "param": "Packaging", "spec": "5 kg / 10 kg / 20 kg / 25 kg or customized" },
          { "param": "Shelf Life", "spec": "Typically 18–24 months" },
          { "param": "Storage", "spec": "Cool, dry and moisture-controlled conditions" },
          { "param": "Applications", "spec": "Seasonings, spice blends, sauces, soups, ready-to-cook foods and food manufacturing." }
        ]
      }
    ]
  },
  {
    "id": "dehydrated-other-products",
    "slug": "other-dehydrated-herbs-and-vegetables",
    "name": "Other Dehydrated Herbs & Vegetables",
    "category": "dehydrated",
    "categoryName": "Dehydrated Foods",
    "image": "assets/images/products/other-dehydrated-herbs-vegetables.jpeg",
    "origin": "India",
    "packaging": "5 kg / 10 kg / 20 kg / 25 kg or customized food-grade packaging",
    "specs": "Moisture Typically ≤ 8–10%, Parsley, Basil, Oregano, Thyme, Carrot, Cabbage, Peas & custom items",
    "description": "Comprehensive portfolio of custom dehydrated culinary herbs and vegetables including Parsley, Basil, Oregano, Thyme, Curry Leaves, Fenugreek, Carrot, Capsicum, Cabbage, Green Peas, and Zucchini for international B2B food processing, seasonings, and private label manufacturing.",
    "specTabs": [
      {
        "tabName": "Product Specifications",
        "id": "other-dehydrated-specs",
        "parameters": [
          { "param": "Product Name", "spec": "Other Dehydrated Herbs & Vegetables" },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Type", "spec": "Dehydrated Food Ingredients" },
          { "param": "Available Products", "spec": "Parsley, Basil, Oregano, Thyme, Curry Leaves, Fenugreek Leaves, Carrot, Capsicum, Cabbage, Green Peas, Zucchini, Tomato, Onion, Garlic & custom items" },
          { "param": "Available Forms", "spec": "Whole, Flakes, Slices, Chopped, Minced, Dice, Granules & Powder" },
          { "param": "Colour", "spec": "Natural colour characteristic of the respective herb or vegetable" },
          { "param": "Aroma", "spec": "Characteristic of the respective product" },
          { "param": "Moisture", "spec": "Product-specific, typically ≤ 8–10% for dried vegetables/herbs" },
          { "param": "Foreign Matter", "spec": "As per agreed buyer specification" },
          { "param": "Particle Size", "spec": "Customized" },
          { "param": "Processing", "spec": "Cleaning, sorting, cutting and controlled dehydration" },
          { "param": "Microbiological Quality", "spec": "Tested according to applicable destination-market requirements" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable US/EU requirements" },
          { "param": "Heavy Metals", "spec": "Tested as applicable" },
          { "param": "Aflatoxins / Mycotoxins", "spec": "Tested where applicable" },
          { "param": "Salmonella", "spec": "Absent in specified test portion" },
          { "param": "E. coli", "spec": "As per agreed specification" },
          { "param": "Packaging", "spec": "5 kg / 10 kg / 20 kg / 25 kg or customized food-grade packaging" },
          { "param": "Shelf Life", "spec": "Typically 12–24 months depending on product" },
          { "param": "Storage", "spec": "Cool, dry and moisture-controlled conditions" },
          { "param": "Applications", "spec": "Food processing, seasoning blends, soups, sauces, instant foods, ready-to-cook products, snacks and private-label food manufacturing." }
        ]
      }
    ]
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
    "image": "assets/images/products/vannamei-white-shrimp.jpeg",
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
    "image": "assets/images/products/black-tiger-shrimp.jpeg",
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
    "image": "assets/images/products/frozen-marine-fish.jpeg",
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
    "image": "assets/images/products/squid-cuttlefish.jpeg",
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
    "name": "Moringa (Moringa oleifera) Dried Leaves & Fine Leaf Powder",
    "category": "herbs",
    "categoryName": "Herbs & Botanical",
    "image": "assets/images/products/moringa-leaves.jpeg",
    "origin": "India",
    "packaging": "10 kg / 20 kg / 25 kg food-grade bags or customized private-label packaging",
    "specs": "Moisture Max. 8–10%, Foreign Matter Max. 1.0%, Whole / Crushed / Fine Powder",
    "description": "Carefully cleaned, dried and processed under controlled hygienic conditions from Indian Moringa oleifera leaves. Suitable for food ingredients, herbal blends, tea blends, seasoning blends and botanical formulations, subject to applicable regulations.",
    "specTabs": [
      {
        "tabName": "Product Specifications",
        "id": "moringa-specs",
        "parameters": [
          { "param": "Product Name", "spec": "Moringa Dried Leaves & Fine Leaf Powder" },
          { "param": "Botanical Name", "spec": "Moringa oleifera" },
          { "param": "Part Used", "spec": "Leaves" },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Type", "spec": "Dried Botanical / Herbal Ingredient" },
          { "param": "Available Forms", "spec": "Whole Dried Leaves, Crushed Leaves, Fine Powder" },
          { "param": "Colour", "spec": "Natural green to olive green" },
          { "param": "Aroma", "spec": "Characteristic, fresh herbal aroma" },
          { "param": "Taste", "spec": "Characteristic, mildly earthy and herbal" },
          { "param": "Moisture", "spec": "Max. 8–10%" },
          { "param": "Foreign Matter", "spec": "Max. 1.0%" },
          { "param": "Particle Size", "spec": "Customized as per buyer requirement" },
          { "param": "Microbiological Quality", "spec": "Tested as per applicable destination-market requirements" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable US/EU maximum residue requirements" },
          { "param": "Heavy Metals", "spec": "Compliant with applicable destination-market limits" },
          { "param": "Aflatoxins", "spec": "Tested as applicable to product and destination requirements" },
          { "param": "Salmonella", "spec": "Absent in specified test portion" },
          { "param": "E. coli", "spec": "As per applicable specification" },
          { "param": "Processing", "spec": "Carefully cleaned, dried and processed under controlled hygienic conditions" },
          { "param": "Packaging", "spec": "10 kg / 20 kg / 25 kg food-grade bags or customized private-label packaging" },
          { "param": "Shelf Life", "spec": "Typically 18–24 months when stored under recommended conditions" },
          { "param": "Storage", "spec": "Store in a cool, dry place away from direct sunlight, moisture and strong odours" },
          { "param": "Applications", "spec": "Food ingredients, herbal blends, tea blends, seasoning blends and botanical formulations, subject to applicable regulations." }
        ]
      }
    ]
  },
  {
    "id": "herbs-tulsi",
    "slug": "tulsi-holy-basil-leaves-powder",
    "name": "Tulsi (Holy Basil / Ocimum sanctum) Dried Leaves & Powder",
    "category": "herbs",
    "categoryName": "Herbs & Botanical",
    "image": "assets/images/products/tulsi-holy-basil.jpeg",
    "origin": "India",
    "packaging": "10 kg / 20 kg / 25 kg food-grade packaging or customized",
    "specs": "Moisture Max. 8–10%, Foreign Matter Max. 1.0%, Whole / Cut / Fine Powder",
    "description": "Cleaned, hygienically dried and processed Indian Holy Basil leaves with characteristic aromatic basil fragrance. For herbal teas, botanical blends, food ingredients and wellness-oriented formulations, subject to applicable market regulations.",
    "specTabs": [
      {
        "tabName": "Product Specifications",
        "id": "tulsi-specs",
        "parameters": [
          { "param": "Product Name", "spec": "Tulsi Dried Leaves & Powder" },
          { "param": "Botanical Name", "spec": "Ocimum sanctum / Ocimum tenuiflorum" },
          { "param": "Common Name", "spec": "Holy Basil / Tulsi" },
          { "param": "Part Used", "spec": "Leaves" },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Type", "spec": "Dried Botanical / Herbal Ingredient" },
          { "param": "Available Forms", "spec": "Whole Dried Leaves, Cut Leaves, Fine Powder" },
          { "param": "Colour", "spec": "Green to olive green" },
          { "param": "Aroma", "spec": "Characteristic aromatic basil fragrance" },
          { "param": "Taste", "spec": "Characteristic herbal and slightly spicy" },
          { "param": "Moisture", "spec": "Max. 8–10%" },
          { "param": "Foreign Matter", "spec": "Max. 1.0%" },
          { "param": "Particle Size", "spec": "Customized according to buyer requirement" },
          { "param": "Microbiological Quality", "spec": "Tested according to applicable destination requirements" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable US/EU requirements" },
          { "param": "Heavy Metals", "spec": "Compliant with applicable destination-market limits" },
          { "param": "Aflatoxins", "spec": "Tested where applicable" },
          { "param": "Salmonella", "spec": "Absent in specified test portion" },
          { "param": "E. coli", "spec": "As per applicable specification" },
          { "param": "Processing", "spec": "Cleaned, hygienically dried and processed" },
          { "param": "Packaging", "spec": "10 kg / 20 kg / 25 kg food-grade packaging or customized" },
          { "param": "Shelf Life", "spec": "Typically 18–24 months" },
          { "param": "Storage", "spec": "Cool, dry and hygienic conditions" },
          { "param": "Applications", "spec": "Herbal teas, botanical blends, food ingredients and wellness-oriented formulations, subject to applicable market regulations." }
        ]
      }
    ]
  },
  {
    "id": "herbs-ashwagandha",
    "slug": "ashwagandha-root-extract-powder",
    "name": "Ashwagandha (Withania somnifera) Root & Fine Powder",
    "category": "herbs",
    "categoryName": "Herbs & Botanical",
    "image": "assets/images/products/ashwagandha-root.jpeg",
    "origin": "India",
    "packaging": "10 kg / 20 kg / 25 kg food-grade bags, fiber drums or customized packaging",
    "specs": "Moisture Max. 8–10%, Foreign Matter Max. 1.0%, Whole / Cut / Granules / Fine Powder",
    "description": "Cleaned, dried, sorted and milled under controlled hygienic conditions from authentic Indian Withania somnifera roots. For botanical preparations, herbal formulations and ingredient applications, subject to destination-market regulatory requirements.",
    "regulatoryNote": "Avoid structure/function claims (such as \"treats stress\", \"cures anxiety\") without required destination-market substantiation. Supplied as export-grade botanical / food ingredient.",
    "specTabs": [
      {
        "tabName": "Product Specifications",
        "id": "ashwagandha-specs",
        "parameters": [
          { "param": "Product Name", "spec": "Ashwagandha Root & Fine Powder" },
          { "param": "Botanical Name", "spec": "Withania somnifera" },
          { "param": "Common Name", "spec": "Indian Ginseng / Ashwagandha" },
          { "param": "Part Used", "spec": "Root" },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Type", "spec": "Dried Botanical / Herbal Ingredient" },
          { "param": "Available Forms", "spec": "Whole Root, Cut Root, Granules, Fine Powder" },
          { "param": "Colour", "spec": "Cream to light beige / brown" },
          { "param": "Aroma", "spec": "Characteristic earthy herbal aroma" },
          { "param": "Taste", "spec": "Characteristic earthy and slightly bitter" },
          { "param": "Moisture", "spec": "Max. 8–10%" },
          { "param": "Foreign Matter", "spec": "Max. 1.0%" },
          { "param": "Particle Size", "spec": "Customized" },
          { "param": "Microbiological Quality", "spec": "Tested as per applicable destination-market requirements" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable US/EU limits" },
          { "param": "Heavy Metals", "spec": "Compliant with applicable destination-market limits" },
          { "param": "Aflatoxins", "spec": "Tested as applicable" },
          { "param": "Salmonella", "spec": "Absent in specified test portion" },
          { "param": "E. coli", "spec": "As per applicable specification" },
          { "param": "Processing", "spec": "Cleaned, dried, sorted and milled under controlled hygienic conditions" },
          { "param": "Packaging", "spec": "10 kg / 20 kg / 25 kg food-grade bags, fiber drums or customized packaging" },
          { "param": "Shelf Life", "spec": "Typically 18–24 months" },
          { "param": "Storage", "spec": "Store cool and dry, protected from moisture and direct sunlight" },
          { "param": "Applications", "spec": "Botanical preparations, herbal formulations and ingredient applications, subject to destination-market regulatory requirements." }
        ]
      }
    ]
  },
  {
    "id": "herbs-neem",
    "slug": "neem-leaves-botanical-powder",
    "name": "Neem Dried Leaves & Botanical Powder",
    "category": "herbs",
    "categoryName": "Herbs & Botanical",
    "image": "assets/images/products/neem-leaves.jpeg",
    "origin": "India",
    "packaging": "10 kg / 20 kg / 25 kg food-grade packaging or customized",
    "specs": "Moisture Max. 8–10%, Foreign Matter Max. 1.0%, Whole / Crushed / Fine Powder",
    "description": "Cleaned, sorted, hygienically dried and milled Indian Azadirachta indica leaves with characteristic herbal aroma and bitter taste. For botanical ingredients, herbal preparations and permitted food/non-food applications according to destination regulations.",
    "specTabs": [
      {
        "tabName": "Product Specifications",
        "id": "neem-specs",
        "parameters": [
          { "param": "Product Name", "spec": "Neem Dried Leaves & Botanical Powder" },
          { "param": "Botanical Name", "spec": "Azadirachta indica" },
          { "param": "Common Name", "spec": "Neem" },
          { "param": "Part Used", "spec": "Leaves" },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Type", "spec": "Dried Botanical Ingredient" },
          { "param": "Available Forms", "spec": "Whole Dried Leaves, Crushed Leaves, Fine Powder" },
          { "param": "Colour", "spec": "Natural green to olive green" },
          { "param": "Aroma", "spec": "Characteristic herbal aroma" },
          { "param": "Taste", "spec": "Characteristic bitter herbal taste" },
          { "param": "Moisture", "spec": "Max. 8–10%" },
          { "param": "Foreign Matter", "spec": "Max. 1.0%" },
          { "param": "Particle Size", "spec": "Customized" },
          { "param": "Microbiological Quality", "spec": "Tested according to applicable destination requirements" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable US/EU requirements" },
          { "param": "Heavy Metals", "spec": "Compliant with applicable destination-market limits" },
          { "param": "Aflatoxins", "spec": "Tested as applicable" },
          { "param": "Salmonella", "spec": "Absent in specified test portion" },
          { "param": "E. coli", "spec": "As per applicable specification" },
          { "param": "Processing", "spec": "Cleaned, sorted, hygienically dried and milled" },
          { "param": "Packaging", "spec": "10 kg / 20 kg / 25 kg food-grade packaging or customized" },
          { "param": "Shelf Life", "spec": "Typically 18–24 months" },
          { "param": "Storage", "spec": "Cool, dry and moisture-free conditions" },
          { "param": "Applications", "spec": "Botanical ingredients, herbal preparations and permitted food/non-food applications according to destination regulations." }
        ]
      }
    ]
  },
  {
    "id": "herbs-amla",
    "slug": "amla-indian-gooseberry-dried-powder",
    "name": "Amla (Indian Gooseberry) Dried Segments & Powder",
    "category": "herbs",
    "categoryName": "Herbs & Botanical",
    "image": "assets/images/products/amla-gooseberry.jpeg",
    "origin": "India",
    "packaging": "10 kg / 20 kg / 25 kg food-grade bags or customized packaging",
    "specs": "Moisture Max. 10%, Foreign Matter Max. 1.0%, Segments / Slices / Pieces / Fine Powder",
    "description": "Cleaned, sorted, hygienically dried and processed Indian Gooseberry (Phyllanthus emblica / Emblica officinalis) with characteristic sour, astringent and fruity taste. For food ingredients, beverage blends, herbal preparations and botanical formulations, subject to applicable regulations.",
    "specTabs": [
      {
        "tabName": "Product Specifications",
        "id": "amla-specs",
        "parameters": [
          { "param": "Product Name", "spec": "Amla Dried Segments & Powder" },
          { "param": "Botanical Name", "spec": "Phyllanthus emblica / Emblica officinalis" },
          { "param": "Common Name", "spec": "Indian Gooseberry / Amla" },
          { "param": "Part Used", "spec": "Fruit" },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Type", "spec": "Dried Fruit Ingredient / Botanical Ingredient" },
          { "param": "Available Forms", "spec": "Dried Segments, Slices, Pieces, Fine Powder" },
          { "param": "Colour", "spec": "Light green to yellowish-brown, depending on processing" },
          { "param": "Aroma", "spec": "Characteristic fruity and mildly acidic aroma" },
          { "param": "Taste", "spec": "Characteristic sour, astringent and fruity" },
          { "param": "Moisture", "spec": "Max. 10%" },
          { "param": "Foreign Matter", "spec": "Max. 1.0%" },
          { "param": "Particle Size", "spec": "Customized" },
          { "param": "Microbiological Quality", "spec": "Tested according to applicable destination requirements" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable US/EU requirements" },
          { "param": "Heavy Metals", "spec": "Compliant with applicable destination-market limits" },
          { "param": "Aflatoxins", "spec": "Tested as applicable" },
          { "param": "Salmonella", "spec": "Absent in specified test portion" },
          { "param": "E. coli", "spec": "As per applicable specification" },
          { "param": "Processing", "spec": "Cleaned, sorted, hygienically dried and processed" },
          { "param": "Packaging", "spec": "10 kg / 20 kg / 25 kg food-grade bags or customized packaging" },
          { "param": "Shelf Life", "spec": "Typically 18–24 months" },
          { "param": "Storage", "spec": "Cool, dry conditions away from sunlight and moisture" },
          { "param": "Applications", "spec": "Food ingredients, beverage blends, herbal preparations and botanical formulations, subject to applicable regulations." }
        ]
      }
    ]
  },
  {
    "id": "herbs-curry-leaves",
    "slug": "curry-leaves-fresh-dried",
    "name": "Curry Leaves (Sweet Neem Leaves) — Fresh & Sun-Dried",
    "category": "herbs",
    "categoryName": "Herbs & Botanical",
    "image": "assets/images/products/curry-leaves.jpeg",
    "origin": "India",
    "packaging": "Fresh: food-grade cartons; Dried: 5 kg / 10 kg / 20 kg / 25 kg or customized",
    "specs": "Fresh: according to buyer spec; Dried: Max. 8–10% Moisture, Foreign Matter Max. 1.0%",
    "description": "Fresh leaves carefully sorted; dried leaves cleaned and hygienically dried with strong characteristic curry-leaf aroma. For culinary preparations, spice blends, seasoning blends, ready-to-cook foods and food ingredients.",
    "specTabs": [
      {
        "tabName": "Product Specifications",
        "id": "curry-leaves-specs",
        "parameters": [
          { "param": "Product Name", "spec": "Curry Leaves – Fresh & Dried" },
          { "param": "Botanical Name", "spec": "Murraya koenigii" },
          { "param": "Common Name", "spec": "Curry Leaves / Sweet Neem Leaves" },
          { "param": "Part Used", "spec": "Leaves" },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Type", "spec": "Fresh / Dried Culinary Herb" },
          { "param": "Available Forms", "spec": "Fresh Leaves, Whole Dried Leaves, Crushed Leaves, Powder" },
          { "param": "Colour", "spec": "Fresh green / natural green to olive green when dried" },
          { "param": "Aroma", "spec": "Strong characteristic curry-leaf aroma" },
          { "param": "Taste", "spec": "Characteristic aromatic, slightly citrusy and herbal" },
          { "param": "Moisture", "spec": "Fresh — according to buyer specification; Dried — typically max. 8–10%" },
          { "param": "Foreign Matter", "spec": "Max. 1.0%" },
          { "param": "Particle Size", "spec": "Customized" },
          { "param": "Microbiological Quality", "spec": "Tested according to applicable destination requirements" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable US/EU MRL requirements" },
          { "param": "Heavy Metals", "spec": "Compliant with applicable requirements" },
          { "param": "Salmonella", "spec": "Absent in specified test portion" },
          { "param": "E. coli", "spec": "As per applicable specification" },
          { "param": "Processing", "spec": "Fresh leaves carefully sorted; dried leaves cleaned and hygienically dried" },
          { "param": "Packaging", "spec": "Fresh — food-grade cartons; Dried — 5 kg / 10 kg / 20 kg / 25 kg or customized" },
          { "param": "Shelf Life", "spec": "Fresh — buyer/import specification; Dried — typically 18–24 months" },
          { "param": "Storage", "spec": "Fresh — temperature-controlled; Dried — cool, dry and moisture-free" },
          { "param": "Applications", "spec": "Culinary preparations, spice blends, seasoning blends, ready-to-cook foods and food ingredients." }
        ]
      }
    ]
  },
  {
    "id": "herbs-kasuri-methi",
    "slug": "fenugreek-leaves-kasuri-methi",
    "name": "Fenugreek Leaves (Kasuri Methi) — Shade-Dried Leaves",
    "category": "herbs",
    "categoryName": "Herbs & Botanical",
    "image": "assets/images/products/kasuri-methi.jpeg",
    "origin": "India",
    "packaging": "5 kg / 10 kg / 20 kg / 25 kg food-grade packaging or customized",
    "specs": "Moisture Max. 8–10%, Foreign Matter Max. 1.0%, Whole / Crushed / Flakes / Powder",
    "description": "Carefully cleaned, sorted and shade-dried under hygienic conditions from authentic Indian Trigonella foenum-graecum. For Indian cuisine, seasoning blends, spice mixes, sauces, ready-to-cook foods and food ingredient applications.",
    "specTabs": [
      {
        "tabName": "Product Specifications",
        "id": "kasuri-methi-specs",
        "parameters": [
          { "param": "Product Name", "spec": "Fenugreek Leaves / Kasuri Methi" },
          { "param": "Botanical Name", "spec": "Trigonella foenum-graecum" },
          { "param": "Common Name", "spec": "Kasuri Methi / Dried Fenugreek Leaves" },
          { "param": "Part Used", "spec": "Leaves" },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Type", "spec": "Dried Culinary Herb" },
          { "param": "Available Forms", "spec": "Whole Leaves, Crushed Leaves, Flakes, Powder" },
          { "param": "Colour", "spec": "Natural green to olive green" },
          { "param": "Aroma", "spec": "Characteristic aromatic fenugreek fragrance" },
          { "param": "Taste", "spec": "Characteristic herbal, slightly bitter and aromatic" },
          { "param": "Moisture", "spec": "Max. 8–10%" },
          { "param": "Foreign Matter", "spec": "Max. 1.0%" },
          { "param": "Particle Size", "spec": "Customized" },
          { "param": "Microbiological Quality", "spec": "Tested according to applicable destination requirements" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable US/EU MRL requirements" },
          { "param": "Heavy Metals", "spec": "Compliant with applicable requirements" },
          { "param": "Aflatoxins", "spec": "Tested as applicable" },
          { "param": "Salmonella", "spec": "Absent in specified test portion" },
          { "param": "E. coli", "spec": "As per applicable specification" },
          { "param": "Processing", "spec": "Carefully cleaned, sorted and shade-dried under hygienic conditions" },
          { "param": "Packaging", "spec": "5 kg / 10 kg / 20 kg / 25 kg food-grade packaging or customized" },
          { "param": "Shelf Life", "spec": "Typically 18–24 months" },
          { "param": "Storage", "spec": "Cool, dry and protected from moisture and direct sunlight" },
          { "param": "Applications", "spec": "Indian cuisine, seasoning blends, spice mixes, sauces, ready-to-cook foods and food ingredient applications." }
        ]
      }
    ]
  },
  {
    "id": "herbs-brahmi",
    "slug": "brahmi-bacopa-monnieri-powder",
    "name": "Brahmi (Bacopa monnieri) Whole Leaves & Powder",
    "category": "herbs",
    "categoryName": "Herbs & Botanical",
    "image": "assets/images/products/brahmi-herb.jpeg",
    "origin": "India",
    "packaging": "10 kg / 20 kg / 25 kg food-grade bags or customized packaging",
    "specs": "Moisture Max. 8–10%, Foreign Matter Max. 1.0%, Whole Herb / Leaves / Cut / Fine Powder",
    "description": "Cleaned, sorted, dried and processed under controlled hygienic conditions from authentic Indian Bacopa monnieri. For botanical preparations, herbal blends, tea ingredients and permitted food/supplement applications, subject to destination-market regulations.",
    "specTabs": [
      {
        "tabName": "Product Specifications",
        "id": "brahmi-specs",
        "parameters": [
          { "param": "Product Name", "spec": "Brahmi Whole Leaves & Powder" },
          { "param": "Botanical Name", "spec": "Bacopa monnieri" },
          { "param": "Common Name", "spec": "Brahmi / Water Hyssop" },
          { "param": "Part Used", "spec": "Whole herb / Leaves" },
          { "param": "Origin", "spec": "India" },
          { "param": "Product Type", "spec": "Dried Botanical / Herbal Ingredient" },
          { "param": "Available Forms", "spec": "Whole Dried Herb, Dried Leaves, Cut Herb, Fine Powder" },
          { "param": "Colour", "spec": "Natural green to olive green" },
          { "param": "Aroma", "spec": "Characteristic herbal aroma" },
          { "param": "Taste", "spec": "Characteristic bitter herbal taste" },
          { "param": "Moisture", "spec": "Max. 8–10%" },
          { "param": "Foreign Matter", "spec": "Max. 1.0%" },
          { "param": "Particle Size", "spec": "Customized according to buyer requirements" },
          { "param": "Microbiological Quality", "spec": "Tested according to applicable destination-market requirements" },
          { "param": "Pesticide Residues", "spec": "Compliant with applicable US/EU requirements" },
          { "param": "Heavy Metals", "spec": "Compliant with applicable destination-market limits" },
          { "param": "Aflatoxins", "spec": "Tested as applicable" },
          { "param": "Salmonella", "spec": "Absent in specified test portion" },
          { "param": "E. coli", "spec": "As per applicable specification" },
          { "param": "Processing", "spec": "Cleaned, sorted, dried and processed under controlled hygienic conditions" },
          { "param": "Packaging", "spec": "10 kg / 20 kg / 25 kg food-grade bags or customized packaging" },
          { "param": "Shelf Life", "spec": "Typically 18–24 months" },
          { "param": "Storage", "spec": "Cool, dry and protected from moisture, heat and direct sunlight" },
          { "param": "Applications", "spec": "Botanical preparations, herbal blends, tea ingredients and permitted food/supplement applications, subject to destination-market regulations." }
        ]
      }
    ]
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
