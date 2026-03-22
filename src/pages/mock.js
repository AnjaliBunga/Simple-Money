const metals = [
  { id: 1, name: "Gold", symbol: "XAU", color: "#FFD700", purity: "24K", price: 7200, open: 7100, close: 7150, high: 7250, low: 7050, currency: "INR", unit: "per 10g", category: "Precious" },
  { id: 2, name: "Silver", symbol: "XAG", color: "#C0C0C0", price: 90, open: 88, close: 89, high: 92, low: 87, currency: "INR", unit: "per 10g", category: "Precious" },
  { id: 3, name: "Platinum", symbol: "XPT", color: "#E5E4E2", price: 78850, open: 78020, close: 78435, high: 79680, low: 77190, currency: "INR", unit: "per oz", category: "Precious" },
  { id: 4, name: "Palladium", symbol: "XPD", color: "#CED0DD", price: 99600, open: 97940, close: 98870, high: 101260, low: 97110, currency: "INR", unit: "per oz", category: "Precious" },
  { id: 5, name: "Copper", symbol: "XCU", color: "#B87333", price: 705.5, open: 688.9, close: 697.2, high: 713.8, low: 680.6, currency: "INR", unit: "per lb", category: "Industrial" },
  { id: 6, name: "Nickel", symbol: "XNI", color: "#AFAFAF", price: 1743, open: 1701.5, close: 1726.4, high: 1767.9, low: 1676.6, currency: "INR", unit: "per kg", category: "Industrial" },
  { id: 7, name: "Zinc", symbol: "XZN", color: "#7F7F7F", price: 265.6, open: 257.3, close: 261.45, high: 273.9, low: 252.65, currency: "INR", unit: "per lb", category: "Industrial" },
  { id: 8, name: "Lead", symbol: "XPB", color: "#4F4F4F", price: 174.3, open: 166, close: 170.15, high: 182.6, low: 161.85, currency: "INR", unit: "per lb", category: "Industrial" },
  { id: 9, name: "Aluminum", symbol: "XAL", color: "#D9D9D9", price: 207.5, open: 199.2, close: 203.35, high: 211.65, low: 194.95, currency: "INR", unit: "per lb", category: "Industrial" },
  { id: 10, name: "Tin", symbol: "XSN", color: "#B0B0B0", price: 2241, open: 2194.5, close: 2222.4, high: 2282.5, low: 2174.6, currency: "INR", unit: "per kg", category: "Industrial" },
  { id: 11, name: "Rhodium", symbol: "XRH", color: "#E2E7E1", price: 373500, open: 365200, close: 369350, high: 381800, low: 356900, currency: "INR", unit: "per oz", category: "Rare" },
  { id: 12, name: "Iridium", symbol: "XIR", color: "#CFCFCF", price: 415000, open: 406700, close: 410850, high: 423300, low: 398400, currency: "INR", unit: "per oz", category: "Rare" },
  { id: 13, name: "Osmium", symbol: "XOS", color: "#6E7F80", price: 107900, open: 106240, close: 107070, high: 109560, low: 103750, currency: "INR", unit: "per oz", category: "Rare" },
  { id: 14, name: "Ruthenium", symbol: "XRU", color: "#8A8A8A", price: 24900, open: 24070, close: 24485, high: 25730, low: 23655, currency: "INR", unit: "per oz", category: "Rare" },
  { id: 15, name: "Cobalt", symbol: "XCO", color: "#0047AB", price: 2905, open: 2812, close: 2863.5, high: 2988, low: 2739, currency: "INR", unit: "per kg", category: "Industrial" },
  { id: 16, name: "Lithium", symbol: "XLI", color: "#B0C4DE", price: 5810, open: 5644, close: 5727, high: 5976, low: 5478, currency: "INR", unit: "per kg", category: "Industrial" },
  { id: 17, name: "Magnesium", symbol: "XMG", color: "#C0C0C0", price: 232.4, open: 223.9, close: 228.25, high: 240.7, low: 215.8, currency: "INR", unit: "per kg", category: "Industrial" },
  { id: 18, name: "Titanium", symbol: "XTI", color: "#BFC1C2", price: 498, open: 481.4, close: 489.7, high: 514.6, low: 473.1, currency: "INR", unit: "per kg", category: "Industrial" },
  { id: 19, name: "Uranium", symbol: "XUR", color: "#4CAF50", price: 5395, open: 5229, close: 5312, high: 5561, low: 5106, currency: "INR", unit: "per lb", category: "Industrial" },
  { id: 20, name: "Manganese", symbol: "XMN", color: "#808080", price: 190.9, open: 182.6, close: 186.75, high: 199.2, low: 174.3, currency: "INR", unit: "per kg", category: "Industrial" },
  { id: 21, name: "Iron", symbol: "XFE", color: "#B7410E", price: 9960, open: 9794, close: 9877, high: 10126, low: 9545, currency: "INR", unit: "per ton", category: "Industrial" },
  { id: 22, name: "Steel", symbol: "XST", color: "#71797E", price: 66400, open: 64740, close: 65470, high: 68060, low: 63910, currency: "INR", unit: "per ton", category: "Industrial" },
  { id: 23, name: "Chromium", symbol: "XCR", color: "#DCDCDC", price: 830, open: 811.4, close: 821.7, high: 846.6, low: 788.5, currency: "INR", unit: "per kg", category: "Industrial" },
  { id: 24, name: "Vanadium", symbol: "XV", color: "#A9A9A9", price: 2490, open: 2407, close: 2448.5, high: 2573, low: 2324, currency: "INR", unit: "per kg", category: "Industrial" },
  { id: 25, name: "Molybdenum", symbol: "XMO", color: "#C0C0C0", price: 3735, open: 3652, close: 3683.5, high: 3901, low: 3569, currency: "INR", unit: "per kg", category: "Industrial" },
  { id: 26, name: "Tungsten", symbol: "XW", color: "#555555", price: 2905, open: 2822, close: 2863.5, high: 2988, low: 2739, currency: "INR", unit: "per kg", category: "Industrial" },
  { id: 27, name: "Bismuth", symbol: "XBI", color: "#9FA3A6", price: 996, open: 954.5, close: 980.4, high: 1037.5, low: 913, currency: "INR", unit: "per kg", category: "Industrial" },
  { id: 28, name: "Antimony", symbol: "XSB", color: "#8B8B83", price: 1162, open: 1120.5, close: 1145.4, high: 1203.5, low: 1079, currency: "INR", unit: "per kg", category: "Industrial" },
  { id: 29, name: "Cadmium", symbol: "XCD", color: "#D3D3D3", price: 415, open: 398.4, close: 406.7, high: 431.6, low: 381.8, currency: "INR", unit: "per kg", category: "Industrial" },
  { id: 30, name: "Gallium", symbol: "XGA", color: "#C0C0C0", price: 26560, open: 25730, close: 26145, high: 27390, low: 24900, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 31, name: "Indium", symbol: "XIN", color: "#A9A9A9", price: 20750, open: 20335, close: 20584, high: 21165, low: 19920, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 32, name: "Tellurium", symbol: "XTE", color: "#708090", price: 7470, open: 7304, close: 7387, high: 7636, low: 7055, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 33, name: "Selenium", symbol: "XSE", color: "#FF4500", price: 3320, open: 3227, close: 3278.5, high: 3486, low: 3164, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 34, name: "Scandium", symbol: "XSC", color: "#E6E6FA", price: 332000, open: 323700, close: 327850, high: 340300, low: 315400, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 35, name: "Yttrium", symbol: "XY", color: "#C8C8C8", price: 4980, open: 4814, close: 4907, high: 5146, low: 4731, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 36, name: "Lanthanum", symbol: "XLA", color: "#DCDCDC", price: 1245, open: 1203.5, close: 1230.4, high: 1286.5, low: 1162, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 37, name: "Cerium", symbol: "XCE", color: "#E0E0E0", price: 830, open: 788.5, close: 811.4, high: 871.5, low: 747, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 38, name: "Neodymium", symbol: "XND", color: "#9370DB", price: 9130, open: 8964, close: 9047, high: 9545, low: 8715, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 39, name: "Praseodymium", symbol: "XPR", color: "#7B68EE", price: 7885, open: 7616, close: 7699, high: 8134, low: 7470, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 40, name: "Samarium", symbol: "XSM", color: "#DAA520", price: 1494, open: 1452.5, close: 1477.4, high: 1577, low: 1411, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 41, name: "Europium", symbol: "XEU", color: "#FF8C00", price: 2490, open: 2407, close: 2448.5, high: 2573, low: 2324, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 42, name: "Gadolinium", symbol: "XGD", color: "#B0E0E6", price: 2324, open: 2241, close: 2282.5, high: 2407, low: 2158, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 43, name: "Terbium", symbol: "XTB", color: "#00FF7F", price: 124500, open: 120350, close: 122010, high: 128650, low: 116200, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 44, name: "Dysprosium", symbol: "XDY", color: "#20B2AA", price: 29050, open: 28220, close: 28635, high: 29880, low: 27390, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 45, name: "Holmium", symbol: "XHO", color: "#3CB371", price: 16600, open: 16185, close: 16434, high: 17430, low: 15770, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 46, name: "Erbium", symbol: "XER", color: "#8FBC8F", price: 3735, open: 3652, close: 3683.5, high: 3901, low: 3569, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 47, name: "Thulium", symbol: "XTM", color: "#2E8B57", price: 74700, open: 73040, close: 73870, high: 76360, low: 71380, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 48, name: "Ytterbium", symbol: "XYB", color: "#66CDAA", price: 2490, open: 2407, close: 2448.5, high: 2573, low: 2324, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 49, name: "Lutetium", symbol: "XLU", color: "#228B22", price: 415000, open: 406700, close: 410850, high: 423300, low: 398400, currency: "INR", unit: "per kg", category: "Rare" },
  { id: 50, name: "Zirconium", symbol: "XZR", color: "#BEBEBE", price: 2075, open: 1992, close: 2028.5, high: 2158, low: 1909, currency: "INR", unit: "per kg", category: "Industrial" }
];


const getallmetals = () =>{
    return metals;
}

const getmetalbyid = (id) =>{
    return metals.find(metal => metal.id === id);
}

export {getallmetals, getmetalbyid}