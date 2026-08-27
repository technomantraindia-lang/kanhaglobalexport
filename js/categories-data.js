/**
 * Kanha Global Exports — 17 approved export categories
 * Poultry & Animal Business Unit is a separate division (36 products)
 */
const KGE_CATEGORIES = [
  { id: 1, name: "Spices & Seeds", slug: "spices", desc: "Turmeric, Cumin, Chilli, Cardamom", image: "assets/images/spices.jpg" },
  { id: 2, name: "Basmati Rice", slug: "basmati-rice", desc: "1121 Steam, 1509 & Sella", image: "assets/images/products/1121-basmati-rice.png" },
  { id: 3, name: "Non-Basmati Rice", slug: "non-basmati-rice", desc: "IR-64, Sona Masoori, Swarna", image: "assets/images/products/ir64-long-grain-rice.png" },
  { id: 4, name: "Pulses & Lentils", slug: "pulses", desc: "Kabuli Chana, Toor & Moong", image: "assets/images/toor-dal.jpg" },
  { id: 5, name: "Frozen Seafood", slug: "seafood-frozen", desc: "Vannamei, Black Tiger & Squid", image: "assets/images/seafood-export.jpg" },
  { id: 6, name: "Fresh Fruits", slug: "fresh-fruits", desc: "Alphonso, Kesar & Grapes", image: "assets/images/fresh-fruits.jpg" },
  { id: 7, name: "Fresh Vegetables", slug: "fresh-vegetables", desc: "Nashik Onions, Ginger, Garlic", image: "assets/images/fresh-vegetables.jpg" },
  { id: 8, name: "Dehydrated Products", slug: "dehydrated-products", desc: "Onion Flakes, Garlic & Powders", image: "assets/images/onion-flakes.jpg" },
  { id: 9, name: "Oil Seeds", slug: "oil-seeds", desc: "Natural Sesame, Mustard & Flax", image: "assets/images/white-sesame.jpg" },
  { id: 10, name: "Groundnuts & Cashews", slug: "groundnuts-cashews", desc: "Bold Peanuts, Java & W320", image: "assets/images/cashew-nuts.jpg" },
  { id: 11, name: "Cereals & Millets", slug: "cereals-millets", desc: "Wheat, Maize, Bajra, Sorghum", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&auto=format&fit=crop&q=80" },
  { id: 12, name: "Flours & Grains", slug: "flours-grains", desc: "Chakki Atta, Besan, Rice Flour", image: "assets/images/products/whole-wheat-flour.png" },
  { id: 13, name: "Tea & Coffee", slug: "tea-coffee", desc: "Assam CTC, Darjeeling, Coffee", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&auto=format&fit=crop&q=80" },
  { id: 14, name: "Honey & Agro Care", slug: "honey-agro", desc: "100% Raw Honey, Psyllium", image: "assets/images/products/pure-natural-honey.png" },
  { id: 15, name: "Processed Foods", slug: "processed-foods", desc: "Mango Pulp, Pickles & Papads", image: "assets/images/products/aseptic-mango-pulp.png" },
  { id: 16, name: "Marine Products", slug: "marine-products", desc: "Steam Fish Meal & Fish Oil", image: "assets/images/products/marine-fish-oil.png" }
];

const KGE_POULTRY_DIVISION = {
  name: "Poultry & Animal Business Unit",
  slug: "poultry-animal",
  productCount: 36,
  categories: [
    { name: "Halquinol Pure", slug: "halquinol", desc: "Pure Antibacterial Feed Additive", image: "halquinol-pure-375769115-j86ad-2.jpg", link: "poultry-farm-products.html#halquinol" },
    { name: "Poultry Farm Products", slug: "poultry-farm-products", desc: "Nutritional Premixes & Supplements", image: "poultryfarm1.jpg", link: "poultry-farm-products.html" },
    { name: "Livestock Care", slug: "live-stock-products", desc: "Dairy, Cattle & Swine Formulations", image: "cropped-shot-of-a-herd-of-cows-feeding-on-a-dairy-farm.jpg", link: "live-stock-products.html" }
  ]
};
