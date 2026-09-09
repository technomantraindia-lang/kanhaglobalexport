/**
 * Kanha Global Exports — Approved Export Categories (8 Canonical Sectors)
 * Sourced directly according to client portfolio requirements.
 */
const KGE_CATEGORIES = [
  { id: 1, name: "Basmati & Non-Basmati Rice", slug: "rice", desc: "1121, 1718, 1509, Traditional & IR64", image: "assets/images/rice-1121-steam-hd.jpg" },
  { id: 2, name: "Whole & Ground Spices", slug: "spices", desc: "Cumin, Coriander, Turmeric, Cardamom & Chilli", image: "assets/images/spices.jpg" },
  { id: 3, name: "Pulses & Lentils", slug: "pulses", desc: "Toor, Chana, Moong, Masoor, Urad & Kabuli Chana", image: "assets/images/toor-dal.jpg" },
  { id: 4, name: "Dehydrated Products", slug: "dehydrated", desc: "Dehydrated Onion, Garlic, Ginger & Vegetables", image: "assets/images/onion-flakes.jpg" },
  { id: 5, name: "Fresh Fruits & Vegetables", slug: "fresh-fruits", desc: "Alphonso/Kesar Mango, Red Onion, Potato & Produce", image: "assets/images/fresh-fruits.jpg" },
  { id: 6, name: "Frozen Seafood", slug: "seafood", desc: "Vannamei Shrimp, Black Tiger Prawns & Marine Fish", image: "assets/images/seafood-export.jpg" },
  { id: 7, name: "Herbs & Medicinal Plants", slug: "herbs", desc: "Moringa, Tulsi, Ashwagandha, Neem, Amla, Curry Leaves, Kasuri Methi & Brahmi", image: "assets/images/products/tulsi-holy-basil.jpg" },
  { id: 8, name: "Nuts, Dried Fruits & Specialty", slug: "more-products", desc: "Makhana (Fox Nuts), Almonds, Cashews, Walnuts, Pistachios, Raisins, Dates & Dried Figs", image: "assets/images/makhana-fox-nuts.jpg" }
];

if (typeof window !== 'undefined') {
  window.KGE_CATEGORIES = KGE_CATEGORIES;
}
