/**
 * TRÜMUNG ARCHIVE ATELIER - Dynamic Catalog & Load More Engine
 * 32 Archival Pieces, Category Filtering, Multi-Currency, and Load-More
 */

// Comprehensive 32-Item Archival Product Dataset
const ARCHIVAL_PRODUCTS = [
  // Outerwear (11 Items)
  {
    id: "TRUM-001",
    title: "Piece XVI — Sculpted Trench",
    category: "outerwear",
    priceUSD: 875,
    edition: "Edition of 24",
    desc: "Single-breasted archival trench crafted with double-faced Japanese selvedge twill and horn buttons.",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-002",
    title: "Piece XVII — Virgin Wool Overcoat",
    category: "outerwear",
    priceUSD: 1240,
    edition: "Edition of 18",
    desc: "Heavyweight Biella virgin wool, hand-bound raw lapels, and hidden titanium horn closure.",
    img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-003",
    title: "Piece XVIII — Waxed Calfskin Blouson",
    category: "outerwear",
    priceUSD: 1650,
    edition: "Edition of 12",
    desc: "Aged vegetable-tanned French calfskin treated with beeswax and hand-buffed graphite.",
    img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-004",
    title: "Piece XIX — Heavy Draped Knit",
    category: "outerwear",
    priceUSD: 690,
    edition: "Edition of 30",
    desc: "Chunky 3-gauge Australian merino wool displaying asymmetric raw selvedge hems.",
    img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-005",
    title: "Piece XX — Parachute Technical Parka",
    category: "outerwear",
    priceUSD: 980,
    edition: "Edition of 20",
    desc: "High-density Japanese memory nylon with weatherized taped internal seams.",
    img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-006",
    title: "Piece XXI — Shearling Flight Monolith",
    category: "outerwear",
    priceUSD: 2200,
    edition: "Edition of 10",
    desc: "Dense Spanish shearling pelt with brushed bronze military buckle collar straps.",
    img: "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-007",
    title: "Piece XXII — Selvedge Denim Kimono Coat",
    category: "outerwear",
    priceUSD: 820,
    edition: "Edition of 25",
    desc: "16oz Okayama shuttle-loom denim submerged in fermented natural indigo vats.",
    img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-008",
    title: "Piece XXIII — Solarized Linen Dust Coat",
    category: "outerwear",
    priceUSD: 740,
    edition: "Edition of 22",
    desc: "Sun-bleached Normandy flax linen featuring an unlined fluid drape silhouette.",
    img: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-009",
    title: "Piece XXIV — Cropped Biker Double-Zip",
    category: "outerwear",
    priceUSD: 1480,
    edition: "Edition of 16",
    desc: "Washed horsehide leather with Excella dual-directional matte black hardware.",
    img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-010",
    title: "Piece XXV — Quilted Cashmere Liner",
    category: "outerwear",
    priceUSD: 890,
    edition: "Edition of 28",
    desc: "Diamond-quilted Mongolian cashmere insulated with goose down padding.",
    img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-011",
    title: "Piece XXVI — Deconstructed Mac Coat",
    category: "outerwear",
    priceUSD: 960,
    edition: "Edition of 19",
    desc: "Water-repellent bonded cotton gabardine with raw vented side gussets.",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop"
  },

  // Tailoring (11 Items)
  {
    id: "TRUM-012",
    title: "Piece XXVII — Structured Boxy Blazer",
    category: "tailoring",
    priceUSD: 940,
    edition: "Edition of 24",
    desc: "Drop-shoulder padded silhouette constructed with deadstock Italian virgin wool.",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-013",
    title: "Piece XXVIII — High-Waist Pleated Trouser",
    category: "tailoring",
    priceUSD: 580,
    edition: "Edition of 35",
    desc: "Double forward pleats, tapered hemline, and interior silk waist lining.",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-014",
    title: "Piece XXIX — Asymmetric Vestment",
    category: "tailoring",
    priceUSD: 510,
    edition: "Edition of 30",
    desc: "High-collar layered tailored vest featuring side tie ribbons and horn buttons.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-015",
    title: "Piece XXX — Silk Poplin Grandad Shirt",
    category: "tailoring",
    priceUSD: 430,
    edition: "Edition of 40",
    desc: "100% Mulberry silk woven into featherweight poplin with mother-of-pearl buttons.",
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-016",
    title: "Piece XXXI — Straight Calfskin Trouser",
    category: "tailoring",
    priceUSD: 1150,
    edition: "Edition of 15",
    desc: "Artisanal drum-dyed black calfskin trousers cut with zero side-seam tension.",
    img: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-017",
    title: "Piece XXXII — Double-Breasted Flannel Suit",
    category: "tailoring",
    priceUSD: 1720,
    edition: "Edition of 14",
    desc: "Two-piece suit in charcoal mélange wool flannel tailored with peaked lapels.",
    img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-018",
    title: "Piece XXXIII — Raw Edge Tuxedo Jacket",
    category: "tailoring",
    priceUSD: 1280,
    edition: "Edition of 20",
    desc: "Midnight grosgrain silk facing contrast with purposefully frayed wool edges.",
    img: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-019",
    title: "Piece XXXIV — Wide-Leg Minimalist Slack",
    category: "tailoring",
    priceUSD: 620,
    edition: "Edition of 30",
    desc: "Cascading heavy gabardine silhouette providing effortless architectural stance.",
    img: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-020",
    title: "Piece XXXV — Stand-Collar Nehru Coat",
    category: "tailoring",
    priceUSD: 860,
    edition: "Edition of 18",
    desc: "Structured boiled wool tunic length coat with blind stitched pockets.",
    img: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-021",
    title: "Piece XXXVI — Sculpted Waistcoat",
    category: "tailoring",
    priceUSD: 480,
    edition: "Edition of 32",
    desc: "Fitted cinch-back vest tailored from Scottish herringbone tweed.",
    img: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-022",
    title: "Piece XXXVII — Oversized Mandarin Tunic",
    category: "tailoring",
    priceUSD: 410,
    edition: "Edition of 40",
    desc: "Heavyweight cotton gauze finished with ancient hand-twisted knot buttons.",
    img: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=800&auto=format&fit=crop"
  },

  // Accessories (10 Items)
  {
    id: "TRUM-023",
    title: "Piece XXXVIII — Monolith Leather Harness",
    category: "accessories",
    priceUSD: 420,
    edition: "Edition of 50",
    desc: "Brushed gunmetal hardware buckle on 4mm English bridle hide.",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-024",
    title: "Piece XXXIX — Atelier Signet Ring",
    category: "accessories",
    priceUSD: 310,
    edition: "Edition of 60",
    desc: "Hand-carved .925 sterling silver ring oxidized to matte deep graphite.",
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-025",
    title: "Piece XL — Sculpted Calfskin Weekender",
    category: "accessories",
    priceUSD: 1450,
    edition: "Edition of 15",
    desc: "Minimalist seamless duffel bag featuring interior suede laptop pocket.",
    img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-026",
    title: "Piece XLI — Raw Cashmere Blanket Scarf",
    category: "accessories",
    priceUSD: 380,
    edition: "Edition of 50",
    desc: "2.4-meter brushed cashmere scarf with natural raw selvedge fringes.",
    img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-027",
    title: "Piece XLII — Hand-Forged Silver Cuff",
    category: "accessories",
    priceUSD: 460,
    edition: "Edition of 40",
    desc: "Hammered architectural silver band bearing internal studio coordinates.",
    img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-028",
    title: "Piece XLIII — Lug-Sole Leather Derby",
    category: "accessories",
    priceUSD: 780,
    edition: "Edition of 25",
    desc: "Goodyear-welted waxed calfskin shoes with exaggerated Vibram outsoles.",
    img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-029",
    title: "Piece XLIV — Minimalist Titanium Eyewear",
    category: "accessories",
    priceUSD: 520,
    edition: "Edition of 35",
    desc: "Fukui-manufactured ultra-thin Japanese beta-titanium architectural frames.",
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-030",
    title: "Piece XLV — Structured Leather Tote",
    category: "accessories",
    priceUSD: 890,
    edition: "Edition of 20",
    desc: "Reinforced vegetable-tanned shoulder bag with magnetic invisible closure.",
    img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-031",
    title: "Piece XLVI — Tactile Silver Chain Necklace",
    category: "accessories",
    priceUSD: 390,
    edition: "Edition of 45",
    desc: "Geometric interconnected cuboid links in aged and brushed 925 sterling silver.",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "TRUM-032",
    title: "Piece XLVII — Calfskin Chelsea Boot",
    category: "accessories",
    priceUSD: 850,
    edition: "Edition of 25",
    desc: "Whole-cut Italian calfskin leather chelsea boot resting on stacked leather heels.",
    img: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=800&auto=format&fit=crop"
  }
];

// Multi-Currency Converter Config
const EXCHANGE_RATES = {
  USD: { rate: 1.0, symbol: "$" },
  EUR: { rate: 0.92, symbol: "€" },
  GBP: { rate: 0.79, symbol: "£" },
  JPY: { rate: 154.0, symbol: "¥" }
};

// Application State
let currentCurrency = "USD";
let activeCategory = "all";
let displayedItemCount = 8;
const ITEMS_PER_LOAD = 8;
let cart = [];

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  initLiveClocks();
  updateCategoryCounts();
  renderProducts();
  initFilterButtons();
  initLoadMoreButton();
  initCurrencySelector();
  initCartListeners();
  initForms();
});

// Update Badge Counts in Filter Buttons
function updateCategoryCounts() {
  document.getElementById("count-all").innerText = ARCHIVAL_PRODUCTS.length;
  document.getElementById("count-outerwear").innerText = ARCHIVAL_PRODUCTS.filter(p => p.category === "outerwear").length;
  document.getElementById("count-tailoring").innerText = ARCHIVAL_PRODUCTS.filter(p => p.category === "tailoring").length;
  document.getElementById("count-accessories").innerText = ARCHIVAL_PRODUCTS.filter(p => p.category === "accessories").length;
}

// Filtered List Helper
function getFilteredProducts() {
  if (activeCategory === "all") return ARCHIVAL_PRODUCTS;
  return ARCHIVAL_PRODUCTS.filter(p => p.category === activeCategory);
}

// Render Products with Pagination and Progress Bar
function renderProducts() {
  const container = document.getElementById("products-container");
  const filtered = getFilteredProducts();
  const visibleItems = filtered.slice(0, displayedItemCount);

  container.innerHTML = "";

  visibleItems.forEach((p) => {
    const formattedPrice = formatPrice(p.priceUSD);
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-thumb">
        <span class="edition-badge">${p.edition}</span>
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="product-info">
        <div>
          <span class="product-category">${p.category}</span>
          <h3 class="product-title">${p.title}</h3>
          <p class="product-desc">${p.desc}</p>
        </div>
        <div class="product-footer">
          <span class="product-price">${formattedPrice}</span>
          <button class="add-cart-btn" onclick="addToCart('${p.id}')">Add to Bag</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  updateProgressBar(visibleItems.length, filtered.length);
}

// Progress Bar & Load More Button State
function updateProgressBar(currentCount, totalCount) {
  const progressText = document.getElementById("load-progress-text");
  const progressBarFill = document.getElementById("progress-bar-fill");
  const loadMoreBtn = document.getElementById("load-more-btn");

  progressText.innerText = `Showing ${currentCount} of ${totalCount} Archival Items`;
  const percentage = Math.min((currentCount / totalCount) * 100, 100);
  progressBarFill.style.width = `${percentage}%`;

  if (currentCount >= totalCount) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "inline-flex";
  }
}

// Load More Button Action
function initLoadMoreButton() {
  const loadMoreBtn = document.getElementById("load-more-btn");
  loadMoreBtn.addEventListener("click", () => {
    displayedItemCount += ITEMS_PER_LOAD;
    renderProducts();
    showToast(`Loaded additional archival silhouettes.`);
  });
}

// Category Filter Listener
function initFilterButtons() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      activeCategory = btn.dataset.category;
      displayedItemCount = ITEMS_PER_LOAD; // Reset to 8 when category changes
      renderProducts();
    });
  });
}

// Currency Conversion
function formatPrice(amountInUSD) {
  const curr = EXCHANGE_RATES[currentCurrency];
  const converted = amountInUSD * curr.rate;
  if (currentCurrency === "JPY") {
    return `${curr.symbol}${Math.round(converted).toLocaleString()}`;
  }
  return `${curr.symbol}${converted.toFixed(2)}`;
}

function initCurrencySelector() {
  const selector = document.getElementById("currency-selector");
  selector.addEventListener("change", (e) => {
    currentCurrency = e.target.value;
    renderProducts();
    updateCartDisplay();
  });
}

// Shopping Bag Management
function initCartListeners() {
  const cartBtn = document.getElementById("cart-btn");
  const closeBtn = document.getElementById("close-cart-btn");
  const backdrop = document.getElementById("cart-backdrop");
  const checkoutBtn = document.getElementById("checkout-btn");

  cartBtn.addEventListener("click", toggleCart);
  closeBtn.addEventListener("click", toggleCart);
  backdrop.addEventListener("click", toggleCart);

  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      showToast("Your shopping bag is empty.");
      return;
    }
    showToast("Connecting to atelier private payment vault...");
  });
}

function toggleCart() {
  document.getElementById("cart-drawer").classList.toggle("active");
  document.getElementById("cart-backdrop").classList.toggle("active");
}

function addToCart(productId) {
  const item = ARCHIVAL_PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  cart.push(item);
  updateCartDisplay();
  showToast(`Added ${item.title} to bag.`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

function updateCartDisplay() {
  const countEl = document.getElementById("cart-count");
  const itemsCountEl = document.getElementById("cart-items-count");
  const listEl = document.getElementById("cart-items-list");
  const subtotalEl = document.getElementById("cart-total-price");

  countEl.innerText = cart.length;
  itemsCountEl.innerText = cart.length;

  if (cart.length === 0) {
    listEl.innerHTML = '<div class="empty-cart-msg">Your shopping bag is currently empty.</div>';
    subtotalEl.innerText = formatPrice(0);
    return;
  }

  let totalUSD = 0;
  listEl.innerHTML = "";

  cart.forEach((item, index) => {
    totalUSD += item.priceUSD;
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="cart-item-img" />
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-price">${formatPrice(item.priceUSD)}</div>
        <span class="remove-item-btn" onclick="removeFromCart(${index})">Remove</span>
      </div>
    `;
    listEl.appendChild(itemEl);
  });

  subtotalEl.innerText = formatPrice(totalUSD);
}

// Live Clocks for Paris, NYC, and LA
function initLiveClocks() {
  function update() {
    const now = new Date();
    const formatTime = (tz) => new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).format(now);

    document.getElementById("paris-time").innerText = formatTime("Europe/Paris");
    document.getElementById("nyc-time").innerText = formatTime("America/New_York");
    document.getElementById("la-time").innerText = formatTime("America/Los_Angeles");
  }
  update();
  setInterval(update, 1000);
}

// Forms Handling (Concierge & Newsletter)
function initForms() {
  const conciergeForm = document.getElementById("concierge-form");
  conciergeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("vip-name").value;
    const loc = document.getElementById("vip-location").value;
    showToast(`Fitting inquiry received for ${name} at ${loc}. Our concierge will telephone you.`);
    conciergeForm.reset();
  });

  const newsletterForm = document.getElementById("newsletter-form");
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("newsletter-email").value;
    showToast(`Access credentials dispatched to: ${email}`);
    newsletterForm.reset();
  });
}

// Toast Feedback System
function showToast(message) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}