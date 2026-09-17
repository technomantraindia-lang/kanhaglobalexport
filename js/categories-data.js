/**
 * Kanha Global Exports — Approved Export Categories (8 Canonical Sectors)
 * Sourced directly according to client portfolio requirements.
 */
const KGE_CATEGORIES = [
  { id: 1, name: "Rice & Grains", slug: "rice", desc: "1121, 1718, 1509, Traditional & IR64", image: "assets/images/categories/rice.jpg" },
  { id: 2, name: "Spices & Seasonings", slug: "spices", desc: "Cumin, Coriander, Turmeric, Cardamom & Chilli", image: "assets/images/categories/spices.jpg" },
  { id: 3, name: "Pulses & Lentils", slug: "pulses", desc: "Toor, Chana, Moong, Masoor, Urad & Kabuli Chana", image: "assets/images/categories/pulses.jpg" },
  { id: 4, name: "Dehydrated Foods", slug: "dehydrated", desc: "Dehydrated Onion, Garlic, Ginger & Vegetables", image: "assets/images/categories/dehydrated.jpg" },
  { id: 5, name: "Herbs & Botanical", slug: "herbs", desc: "Moringa, Tulsi, Ashwagandha, Neem, Amla, Curry Leaves, Kasuri Methi & Brahmi", image: "assets/images/categories/herbs.jpg" },
  { id: 6, name: "Nuts & Dry Fruits", slug: "more-products", desc: "Makhana (Fox Nuts), Almonds, Cashews, Walnuts, Pistachios, Raisins, Dates & Dried Figs", image: "assets/images/categories/nuts-specialty.jpg" },
  { id: 7, name: "Fresh Produce", slug: "fresh-fruits", desc: "Alphonso/Kesar Mango, Red Onion, Potato & Produce", image: "assets/images/categories/fresh-fruits.jpg" },
  { id: 8, name: "Frozen Seafood", slug: "seafood", desc: "Vannamei Shrimp, Black Tiger Prawns & Marine Fish", image: "assets/images/categories/seafood.jpg" },
  { id: 9, name: "Other Category", slug: "other", desc: "Custom Sourcing, Private Label & Specialty Commodities", image: "assets/images/export-documentation-desk.jpg" }
];

if (typeof window !== 'undefined') {
  window.KGE_CATEGORIES = KGE_CATEGORIES;
}
