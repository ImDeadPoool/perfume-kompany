/**
 * Perfume Kompany - Interactive Web Application
 * GTA V Inspired Luxury E-Commerce Engine
 */

// Fragrance Arsenal Data
const FRAGRANCES = [
    {
        id: 1,
        code: "SLOT 01 // HIGH SPEED",
        name: "VELOCE NOIR",
        subtitle: "\"The Lamborghini Night Run\"",
        category: "Night Out / High Roller",
        price: 145,
        rating: 4.9,
        badge: "BESTSELLER",
        accentColor: "#d4af37",
        bottleSvg: `
            <svg viewBox="0 0 200 300" class="w-full h-full filter drop-shadow-[0_10px_25px_rgba(212,175,55,0.4)] floating-bottle">
                <defs>
                    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#1c1d22" />
                        <stop offset="50%" stop-color="#0a0a0c" />
                        <stop offset="100%" stop-color="#181a1f" />
                    </linearGradient>
                    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#AA8012" />
                        <stop offset="50%" stop-color="#F5D061" />
                        <stop offset="100%" stop-color="#D4AF37" />
                    </linearGradient>
                </defs>
                <!-- Cap -->
                <rect x="75" y="20" width="50" height="40" rx="3" fill="url(#gold-grad)" />
                <rect x="70" y="55" width="60" height="8" rx="2" fill="#554005" />
                <!-- Shoulder -->
                <path d="M50 80 Q100 70 150 80 L160 270 Q100 280 40 270 Z" fill="url(#g1)" stroke="#d4af37" stroke-width="2" />
                <!-- Metallic Plate -->
                <rect x="60" y="120" width="80" height="90" rx="4" fill="#08080a" stroke="url(#gold-grad)" stroke-width="1.5" />
                <text x="100" y="145" font-family="'Cinzel', serif" font-weight="900" font-size="11" fill="#F5D061" text-anchor="middle" letter-spacing="2">PERFUME</text>
                <text x="100" y="160" font-family="'Cinzel', serif" font-weight="900" font-size="9" fill="#FFFFFF" text-anchor="middle" letter-spacing="3">KOMPANY</text>
                <line x1="75" y1="170" x2="125" y2="170" stroke="#d4af37" stroke-width="0.8" />
                <text x="100" y="188" font-family="'Montserrat', sans-serif" font-weight="800" font-size="10" fill="#F5D061" text-anchor="middle">VELOCE NOIR</text>
                <text x="100" y="200" font-family="'Montserrat', sans-serif" font-size="6" fill="#888888" text-anchor="middle">EXTRAIT DE PARFUM</text>
                <!-- Liquid level reflection -->
                <path d="M50 100 Q80 90 150 100" stroke="rgba(255,255,255,0.2)" stroke-width="2" fill="none" />
                <line x1="48" y1="90" x2="45" y2="260" stroke="rgba(255,255,255,0.15)" stroke-width="2" />
            </svg>
        `,
        notes: {
            top: "Italian Calabrian Bergamot, Crushed Pink Peppercorn, Smoked Mandarin",
            heart: "Black Tuscan Leather, Burnt Amber, Dark Birch Tar",
            base: "Smoked Cedarwood, Raw Patchouli, Bourbon Vanilla"
        },
        stats: {
            longevity: "14+ Hours (Beast)",
            longevityPct: 96,
            sillage: "Room Filling (10/10)",
            sillagePct: 92,
            compliments: "99.8%",
            complimentsPct: 99
        }
    },
    {
        id: 2,
        code: "SLOT 02 // BLACK TIE HEIST",
        name: "HEIST ROYALE",
        subtitle: "\"Boardroom to Penthouse Suite\"",
        category: "Executive / Formal",
        price: 160,
        rating: 5.0,
        badge: "EXCLUSIVE",
        accentColor: "#f3c623",
        bottleSvg: `
            <svg viewBox="0 0 200 300" class="w-full h-full filter drop-shadow-[0_10px_25px_rgba(243,198,35,0.4)] floating-bottle">
                <defs>
                    <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#2a1805" />
                        <stop offset="60%" stop-color="#120b02" />
                        <stop offset="100%" stop-color="#3d2104" />
                    </linearGradient>
                    <linearGradient id="gold-amber" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#c48e1a" />
                        <stop offset="50%" stop-color="#ffd56b" />
                        <stop offset="100%" stop-color="#996303" />
                    </linearGradient>
                </defs>
                <!-- Cap -->
                <rect x="75" y="15" width="50" height="45" rx="4" fill="url(#gold-amber)" />
                <rect x="70" y="55" width="60" height="8" rx="2" fill="#3a2503" />
                <!-- Heavy Glass Bottle -->
                <rect x="45" y="70" width="110" height="200" rx="10" fill="url(#g2)" stroke="#ffd56b" stroke-width="2" />
                <!-- Gold Label -->
                <rect x="58" y="115" width="84" height="95" rx="4" fill="#0c0905" stroke="url(#gold-amber)" stroke-width="1.5" />
                <text x="100" y="142" font-family="'Cinzel', serif" font-weight="900" font-size="11" fill="#ffd56b" text-anchor="middle" letter-spacing="2">PERFUME</text>
                <text x="100" y="157" font-family="'Cinzel', serif" font-weight="900" font-size="9" fill="#FFFFFF" text-anchor="middle" letter-spacing="3">KOMPANY</text>
                <line x1="75" y1="168" x2="125" y2="168" stroke="#ffd56b" stroke-width="0.8" />
                <text x="100" y="186" font-family="'Montserrat', sans-serif" font-weight="800" font-size="10" fill="#ffd56b" text-anchor="middle">HEIST ROYALE</text>
                <text x="100" y="198" font-family="'Montserrat', sans-serif" font-size="6" fill="#aaa" text-anchor="middle">50ML // COGNAC & OUD</text>
                <!-- Glass shine -->
                <line x1="55" y1="85" x2="55" y2="255" stroke="rgba(255,255,255,0.2)" stroke-width="3" />
            </svg>
        `,
        notes: {
            top: "Aged French Cognac, Spiced Cardamom, Nutmeg, Blood Peach",
            heart: "Royal Damask Rose, Cinnamon Bark, Bitter Almond",
            base: "Madagascar Tonka Bean, Sandalwood, Rare Frankincense"
        },
        stats: {
            longevity: "16+ Hours (Eternal)",
            longevityPct: 98,
            sillage: "Imperial Scent Cloud",
            sillagePct: 94,
            compliments: "99.5%",
            complimentsPct: 99
        }
    },
    {
        id: 3,
        code: "SLOT 03 // THE GODFATHER",
        name: "SYNDICATE OUD",
        subtitle: "\"Uncompromising Dominance\"",
        category: "Heavy Luxury / Evening",
        price: 185,
        rating: 5.0,
        badge: "PURE EXTRAIT",
        accentColor: "#8a2be2",
        bottleSvg: `
            <svg viewBox="0 0 200 300" class="w-full h-full filter drop-shadow-[0_10px_25px_rgba(138,43,226,0.4)] floating-bottle">
                <defs>
                    <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#12041c" />
                        <stop offset="60%" stop-color="#05010a" />
                        <stop offset="100%" stop-color="#230a38" />
                    </linearGradient>
                    <linearGradient id="purple-gold" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#a855f7" />
                        <stop offset="50%" stop-color="#e9d5ff" />
                        <stop offset="100%" stop-color="#7e22ce" />
                    </linearGradient>
                </defs>
                <!-- Cap -->
                <rect x="75" y="15" width="50" height="45" rx="2" fill="url(#purple-gold)" />
                <rect x="70" y="55" width="60" height="8" rx="2" fill="#2e1065" />
                <!-- Heavy Octagonal Bottle -->
                <path d="M60 70 L140 70 L160 100 L160 240 L140 270 L60 270 L40 240 L40 100 Z" fill="url(#g3)" stroke="#a855f7" stroke-width="2" />
                <!-- Label -->
                <rect x="58" y="120" width="84" height="95" rx="4" fill="#08020e" stroke="url(#purple-gold)" stroke-width="1.5" />
                <text x="100" y="145" font-family="'Cinzel', serif" font-weight="900" font-size="11" fill="#e9d5ff" text-anchor="middle" letter-spacing="2">PERFUME</text>
                <text x="100" y="160" font-family="'Cinzel', serif" font-weight="900" font-size="9" fill="#FFFFFF" text-anchor="middle" letter-spacing="3">KOMPANY</text>
                <line x1="75" y1="170" x2="125" y2="170" stroke="#a855f7" stroke-width="0.8" />
                <text x="100" y="188" font-family="'Montserrat', sans-serif" font-weight="800" font-size="9" fill="#e9d5ff" text-anchor="middle">SYNDICATE OUD</text>
                <text x="100" y="200" font-family="'Montserrat', sans-serif" font-size="6" fill="#c084fc" text-anchor="middle">PURE AGARWOOD 35%</text>
                <!-- Purple Glow Line -->
                <line x1="50" y1="95" x2="50" y2="245" stroke="rgba(168,85,247,0.4)" stroke-width="2" />
            </svg>
        `,
        notes: {
            top: "Smoked Mandarin, Red Saffron, Crushed Nutmeg, Thyme",
            heart: "Cambodian Agarwood (Oud), Black Violet, Cypriol",
            base: "Pure Grey Ambergris, Smoked Leather, White Musk"
        },
        stats: {
            longevity: "18+ Hours (Maximum)",
            longevityPct: 100,
            sillage: "Hypnotic Vortex (10/10)",
            sillagePct: 98,
            compliments: "99.9%",
            complimentsPct: 100
        }
    },
    {
        id: 4,
        code: "SLOT 04 // OCEAN DRIVE",
        name: "VICE CITY BLOOM",
        subtitle: "\"Fresh Daytime Heat & Supercar Cruising\"",
        category: "Fresh / All-Day",
        price: 135,
        rating: 4.8,
        badge: "FRESH HEAT",
        accentColor: "#06b6d4",
        bottleSvg: `
            <svg viewBox="0 0 200 300" class="w-full h-full filter drop-shadow-[0_10px_25px_rgba(6,182,212,0.4)] floating-bottle">
                <defs>
                    <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#082f49" />
                        <stop offset="60%" stop-color="#0c4a6e" />
                        <stop offset="100%" stop-color="#021a29" />
                    </linearGradient>
                    <linearGradient id="cyan-silver" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#0891b2" />
                        <stop offset="50%" stop-color="#67e8f9" />
                        <stop offset="100%" stop-color="#0e7490" />
                    </linearGradient>
                </defs>
                <!-- Cap -->
                <rect x="75" y="15" width="50" height="45" rx="3" fill="url(#cyan-silver)" />
                <rect x="70" y="55" width="60" height="8" rx="2" fill="#155e75" />
                <!-- Sleek Curved Bottle -->
                <rect x="50" y="70" width="100" height="200" rx="16" fill="url(#g4)" stroke="#22d3ee" stroke-width="2" />
                <!-- Label -->
                <rect x="60" y="120" width="80" height="95" rx="4" fill="#041f2d" stroke="url(#cyan-silver)" stroke-width="1.5" />
                <text x="100" y="145" font-family="'Cinzel', serif" font-weight="900" font-size="11" fill="#67e8f9" text-anchor="middle" letter-spacing="2">PERFUME</text>
                <text x="100" y="160" font-family="'Cinzel', serif" font-weight="900" font-size="9" fill="#FFFFFF" text-anchor="middle" letter-spacing="3">KOMPANY</text>
                <line x1="75" y1="170" x2="125" y2="170" stroke="#06b6d4" stroke-width="0.8" />
                <text x="100" y="188" font-family="'Montserrat', sans-serif" font-weight="800" font-size="9" fill="#67e8f9" text-anchor="middle">VICE CITY BLOOM</text>
                <text x="100" y="200" font-family="'Montserrat', sans-serif" font-size="6" fill="#38bdf8" text-anchor="middle">CRISP CITRUS & NEROLI</text>
                <!-- Shine -->
                <line x1="60" y1="85" x2="60" y2="255" stroke="rgba(255,255,255,0.25)" stroke-width="2" />
            </svg>
        `,
        notes: {
            top: "Crisp Blood Orange, Sparkling Sea Salt, Sicilian Lemon",
            heart: "French Neroli Blossom, Cypress, Green Mint Leaf",
            base: "Sun-drenched Driftwood, White Cedar, Ambergris"
        },
        stats: {
            longevity: "12+ Hours (High Fresh)",
            longevityPct: 88,
            sillage: "Crisp Clean Trail (9/10)",
            sillagePct: 86,
            compliments: "99.1%",
            complimentsPct: 98
        }
    }
];

// App State
let activeIndex = 0;
let cart = [];
let isSoundEnabled = true;
let isHudVisible = true;
let audioCtx = null;

// Audio Synthesizer (Zero External Dependencies)
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSound(type) {
    if (!isSoundEnabled) return;
    try {
        initAudio();
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const now = audioCtx.currentTime;

        if (type === 'click') {
            // Crisp GTA UI Click
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.05);
        } 
        else if (type === 'equip') {
            // Weapon / Bottle Equip Tone
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.exponentialRampToValueAtTime(660, now + 0.12);
            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.15);
        }
        else if (type === 'cash') {
            // GTA Cash Register / Bag Ding
            const freqs = [987.77, 1318.51];
            freqs.forEach((f, i) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(f, now + (i * 0.08));
                gain.gain.setValueAtTime(0.3, now + (i * 0.08));
                gain.gain.exponentialRampToValueAtTime(0.001, now + (i * 0.08) + 0.3);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start(now + (i * 0.08));
                osc.stop(now + (i * 0.08) + 0.3);
            });
        }
        else if (type === 'missionPassed') {
            // Iconic GTA Triumphant Horn / Brass Melody
            const notes = [
                { f: 261.63, start: 0, dur: 0.18 },    // C4
                { f: 329.63, start: 0.18, dur: 0.18 }, // E4
                { f: 392.00, start: 0.36, dur: 0.22 }, // G4
                { f: 523.25, start: 0.58, dur: 0.60 }  // C5 (Hold triumph)
            ];
            notes.forEach(n => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(n.f, now + n.start);
                gain.gain.setValueAtTime(0.35, now + n.start);
                gain.gain.exponentialRampToValueAtTime(0.01, now + n.start + n.dur);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start(now + n.start);
                osc.stop(now + n.start + n.dur);
            });
        }
    } catch (e) {
        console.warn("Audio Context error:", e);
    }
}

// Render Weapon Slots
function renderWeaponSlots() {
    const container = document.getElementById("weapon-slots-container");
    if (!container) return;

    container.innerHTML = FRAGRANCES.map((item, index) => `
        <div onclick="selectWeapon(${index})" class="weapon-slot ${index === activeIndex ? 'active' : ''} bg-black/60 hover:bg-black/80 border border-white/10 p-4 rounded-xl cursor-pointer transition flex items-center justify-between group">
            <div class="flex items-center space-x-4">
                <span class="slot-number font-['Orbitron'] font-black text-sm text-gray-500 group-hover:text-gold-400 transition">
                    0${item.id}
                </span>
                <div>
                    <h4 class="font-['Cinzel'] font-bold text-white text-base group-hover:text-gold-400 transition">${item.name}</h4>
                    <span class="text-xs text-gray-400 font-mono">${item.category}</span>
                </div>
            </div>
            <div class="text-right">
                <span class="font-['Orbitron'] font-black text-gold-400 text-sm">$${item.price}</span>
                <span class="block text-[10px] text-gray-500 uppercase">50ML EXTRAIT</span>
            </div>
        </div>
    `).join("");
}

// Select a Weapon / Perfume
function selectWeapon(index) {
    activeIndex = index;
    const item = FRAGRANCES[index];
    playSound('equip');

    // Update slots highlight
    renderWeaponSlots();

    // Update Equipped Card
    const card = document.getElementById("equipped-card");
    card.classList.add("scale-[0.98]");
    setTimeout(() => card.classList.remove("scale-[0.98]"), 150);

    document.getElementById("equipped-code").innerText = item.code;
    document.getElementById("equipped-name").innerText = item.name;
    document.getElementById("equipped-subtitle").innerText = item.subtitle;
    document.getElementById("equipped-top").innerText = item.notes.top;
    document.getElementById("equipped-heart").innerText = item.notes.heart;
    document.getElementById("equipped-base").innerText = item.notes.base;

    document.getElementById("stat-longevity-val").innerText = item.stats.longevity;
    document.getElementById("stat-longevity-bar").style.width = item.stats.longevityPct + "%";

    document.getElementById("stat-sillage-val").innerText = item.stats.sillage;
    document.getElementById("stat-sillage-bar").style.width = item.stats.sillagePct + "%";

    document.getElementById("stat-compliment-val").innerText = item.stats.compliments;
    document.getElementById("stat-compliment-bar").style.width = item.stats.complimentsPct + "%";

    document.getElementById("equipped-price").innerText = "$" + item.price;
    document.getElementById("bottle-display-graphic").innerHTML = item.bottleSvg;

    // Update HUD Objective
    updateMission(`Inspecting ${item.name}. Add to arsenal or proceed to checkout.`);
}

// Render Products Grid in The Vault
function renderProductsGrid() {
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    grid.innerHTML = FRAGRANCES.map(item => `
        <div class="bg-gradient-to-b from-dark-800 to-black rounded-2xl border border-white/10 hover:border-gold-500/50 p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <!-- Badge & Rating -->
            <div>
                <div class="flex items-center justify-between text-xs mb-3">
                    <span class="bg-gold-500/20 text-gold-400 font-bold px-2.5 py-1 rounded border border-gold-500/30 uppercase tracking-widest text-[9px]">${item.badge}</span>
                    <span class="flex items-center space-x-1 text-gold-400 font-bold">
                        <span>★</span>
                        <span>${item.rating}</span>
                    </span>
                </div>

                <!-- Bottle Visual Area (Ready for user's real photography) -->
                <div class="relative w-full h-56 bg-black/60 rounded-xl border border-white/5 flex items-center justify-center p-3 overflow-hidden group-hover:border-gold-500/20 transition">
                    ${item.bottleSvg}
                    
                    <!-- Quick Photo Ready Tag -->
                    <div class="absolute bottom-2 inset-x-2 bg-black/85 backdrop-blur py-1 px-2 rounded text-center opacity-0 group-hover:opacity-100 transition duration-200">
                        <span class="text-[9px] uppercase tracking-wider text-gold-400 font-bold flex items-center justify-center space-x-1">
                            <i data-lucide="camera" class="w-3 h-3"></i>
                            <span>Drop Real Photo Here</span>
                        </span>
                    </div>
                </div>

                <!-- Title & Notes -->
                <div class="mt-4">
                    <span class="text-[10px] uppercase font-mono text-gray-500 tracking-wider">${item.category}</span>
                    <h4 class="font-['Cinzel'] font-black text-xl text-white group-hover:text-gold-400 transition mt-0.5">${item.name}</h4>
                    <p class="text-xs text-gray-400 mt-1 line-clamp-2">${item.subtitle}</p>
                </div>
            </div>

            <!-- Price & Button -->
            <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                    <span class="text-[10px] text-gray-500 block uppercase">Price</span>
                    <span class="text-xl font-['Orbitron'] font-black text-gold-400">$${item.price}</span>
                </div>
                <button onclick="addToCart(${item.id})" class="p-3 bg-white/5 hover:bg-gold-500 hover:text-black text-gold-400 rounded-xl border border-white/10 transition flex items-center justify-center shadow-lg group-hover:scale-105">
                    <i data-lucide="plus" class="w-5 h-5"></i>
                </button>
            </div>
        </div>
    `).join("");

    lucide.createIcons();
}

// Cart Logic
function addToCart(productId) {
    const product = FRAGRANCES.find(p => p.id === productId);
    if (!product) return;

    cart.push(product);
    playSound('cash');
    updateCartUI();
    updateMission(`SECURED: ${product.name} added to cart! Total items: ${cart.length}`);
    openCart();
}

function addEquippedToCart() {
    addToCart(FRAGRANCES[activeIndex].id);
}

function removeFromCart(index) {
    playSound('click');
    cart.splice(index, 1);
    updateCartUI();
    if (cart.length === 0) {
        updateMission("Cart empty. Choose a scent from the Vault.");
    }
}

function updateCartUI() {
    const countBadge = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    countBadge.innerText = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-12 text-gray-500">
                <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto mb-3 opacity-30"></i>
                <p class="text-sm">Your scent vault is empty.</p>
                <p class="text-xs text-gray-600 mt-1">Select an extrait from the arsenal above.</p>
            </div>
        `;
        cartTotal.innerText = "$0";
        lucide.createIcons();
        return;
    }

    let total = 0;
    cartItems.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `
            <div class="bg-black/50 p-3.5 rounded-xl border border-white/5 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-dark-700 rounded-lg p-1 flex items-center justify-center">
                        <div class="scale-50 w-full h-full">${item.bottleSvg}</div>
                    </div>
                    <div>
                        <h5 class="text-white font-bold text-sm font-['Cinzel']">${item.name}</h5>
                        <span class="text-xs text-gold-400 font-['Orbitron']">$${item.price}</span>
                    </div>
                </div>
                <button onclick="removeFromCart(${index})" class="text-gray-500 hover:text-red-400 p-1.5 transition">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            </div>
        `;
    }).join("");

    cartTotal.innerText = "$" + total;
    lucide.createIcons();
}

function openCart() {
    playSound('click');
    const drawer = document.getElementById("cart-drawer");
    const backdrop = document.getElementById("cart-backdrop");
    const panel = document.getElementById("cart-panel");

    drawer.classList.remove("pointer-events-none");
    backdrop.classList.remove("opacity-0", "pointer-events-none");
    backdrop.classList.add("opacity-100", "pointer-events-auto");
    panel.classList.remove("translate-x-full");
}

function closeCart() {
    playSound('click');
    const drawer = document.getElementById("cart-drawer");
    const backdrop = document.getElementById("cart-backdrop");
    const panel = document.getElementById("cart-panel");

    backdrop.classList.add("opacity-0", "pointer-events-none");
    backdrop.classList.remove("opacity-100", "pointer-events-auto");
    panel.classList.add("translate-x-full");
    setTimeout(() => {
        drawer.classList.add("pointer-events-none");
    }, 300);
}

// Checkout & GTA Celebration
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty! Select a fragrance first.");
        return;
    }
    closeCart();
    triggerMissionPassed();
}

function triggerMissionPassed() {
    playSound('missionPassed');
    const overlay = document.getElementById("mission-passed-overlay");
    const card = document.getElementById("mission-passed-card");

    overlay.classList.remove("pointer-events-none", "opacity-0");
    overlay.classList.add("pointer-events-auto", "opacity-100");

    card.classList.remove("scale-90");
    card.classList.add("scale-100", "animate-mission-banner");

    // Update Player Cash & Respect in HUD
    const cashEl = document.getElementById("player-cash");
    let currentCash = parseInt(cashEl.innerText.replace(/[^0-9]/g, '')) || 278350;
    cashEl.innerText = "$" + (currentCash + 150000).toLocaleString();

    updateMission("MISSION ACCOMPLISHED: Respect +100%. Signature bottle dispatched.");
}

function triggerMissionPassedPreview() {
    triggerMissionPassed();
}

function closeMissionPassed() {
    playSound('click');
    const overlay = document.getElementById("mission-passed-overlay");
    const card = document.getElementById("mission-passed-card");

    overlay.classList.add("pointer-events-none", "opacity-0");
    overlay.classList.remove("pointer-events-auto", "opacity-100");
    card.classList.remove("scale-100", "animate-mission-banner");
    card.classList.add("scale-90");
}

// HUD & Mission Updates
function updateMission(text) {
    const missionText = document.getElementById("mission-text");
    if (missionText) {
        missionText.innerText = text;
    }
}

function toggleHud() {
    isHudVisible = !isHudVisible;
    const hud = document.getElementById("gta-hud");
    if (hud) {
        if (isHudVisible) {
            hud.classList.remove("opacity-0", "pointer-events-none");
        } else {
            hud.classList.add("opacity-0", "pointer-events-none");
        }
    }
}

function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    const label = document.getElementById("sound-label");
    if (label) {
        label.innerText = isSoundEnabled ? "SOUND: ON" : "SOUND: OFF";
    }
}

function toggleVideoSound() {
    const video = document.getElementById("hero-promo-video");
    const icon = document.getElementById("video-sound-icon");
    if (!video) return;

    if (video.muted) {
        video.muted = false;
        icon.setAttribute("data-lucide", "volume-2");
    } else {
        video.muted = true;
        icon.setAttribute("data-lucide", "volume-x");
    }
    lucide.createIcons();
}

// Photo Guide Modal
function showPhotoGuideModal() {
    playSound('click');
    const modal = document.getElementById("photo-guide-modal");
    modal.classList.remove("pointer-events-none", "opacity-0");
    modal.classList.add("pointer-events-auto", "opacity-100");
}

function closePhotoGuideModal() {
    playSound('click');
    const modal = document.getElementById("photo-guide-modal");
    modal.classList.add("pointer-events-none", "opacity-0");
    modal.classList.remove("pointer-events-auto", "opacity-100");
}

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
    renderWeaponSlots();
    selectWeapon(0);
    renderProductsGrid();
    updateCartUI();

    // Enable audio on first user click anywhere
    document.body.addEventListener("click", () => {
        initAudio();
    }, { once: true });
});
