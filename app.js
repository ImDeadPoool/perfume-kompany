/**
 * ==========================================================================
 * PERFUME KOMPANY - STATE-OF-THE-ART LUXURY E-COMMERCE ENGINE
 * 3D WebGL Flacon Studio • 25ml/50ml/100ml Dynamic Sizing • Cart & Payments
 * ==========================================================================
 */

// 5 Signature Extraits Dataset (with 25ml, 50ml, and 100ml specifications & ₹500 - ₹1200 pricing)
const PERFUMES = [
    {
        id: 1,
        slug: "one-billion",
        name: "ONE BILLION",
        badge: "BESTSELLER",
        subtitle: "The Signature Scent of Pure Wealth & Dominance",
        tagline: "Blood Mandarin, Blonde Leather & Amber",
        tag: "EXTRAIT DE PARFUM // 35% PURE OIL",
        image: "images/one-billion.jpg",
        liquidColor: 0xd97706, // Rich Warm Amber Gold
        auraGradient: "from-amber-600/30 via-transparent to-transparent",
        prices: {
            25: 599,   // 25 ML Pocket Extrait
            50: 899,   // 50 ML Signature Flacon
            100: 1199  // 100 ML Grand Collector Flacon
        },
        sizes: {
            25: { label: "25 ML", title: "Pocket Extrait", desc: "Slender travel-luxury flacon with solid gold cap" },
            50: { label: "50 ML", title: "Signature Flacon", desc: "Classic architectural flacon with gold emblem" },
            100: { label: "100 ML", title: "Grand Collector", desc: "Heavy crystal flacon with knurled gold crown" }
        },
        notes: {
            top: "Blood Mandarin, Frosted Grapefruit, Spiced Mint",
            heart: "Blonde Tuscan Leather, Cinnamon Bark, Rose Absolute",
            base: "Amber Ketals, White Woods, Indonesian Patchouli"
        },
        stats: { longevity: "16+ Hours (Eternal)", sillage: "Room-Filling (10/10)", concentration: "35% Pure Extrait" },
        mood: "Boardroom Dominance • High-Roller Evenings",
        category: "amber",
        isBestseller: true,
        quote: "Heavy knurled gold cap, warm amber liquid. One spray and you own the room."
    },
    {
        id: 2,
        slug: "bleu-mist",
        name: "BLEU MIST",
        badge: "HOT SELLER",
        subtitle: "Aquatic Shockwave & High-Speed Midnight Cruising",
        tagline: "Calabrian Bergamot & Marine Ambroxan",
        tag: "EXTRAIT DE PARFUM // 35% PURE OIL",
        image: "images/bleu-mist.jpg",
        liquidColor: 0x0084d1, // Vibrant Sapphire Blue
        auraGradient: "from-sky-600/30 via-transparent to-transparent",
        prices: {
            25: 549,
            50: 849,
            100: 1149
        },
        sizes: {
            25: { label: "25 ML", title: "Pocket Extrait", desc: "Sleek pocket sprayer with icy sapphire core" },
            50: { label: "50 ML", title: "Signature Flacon", desc: "Mid-size blue crystal with brushed gold trim" },
            100: { label: "100 ML", title: "Grand Collector", desc: "Oversized crystal flacon with deep sapphire liquid" }
        },
        notes: {
            top: "Sparkling Calabrian Bergamot, Marine Ozone, Sea Salt",
            heart: "Blue Cedar, French Lavender, Crushed Mint, Pink Pepper",
            base: "Pure Ambroxan, Mineral Moss, Smoked Ambergris"
        },
        stats: { longevity: "14+ Hours (Beast Fresh)", sillage: "Clean Shockwave (10/10)", concentration: "35% Pure Extrait" },
        mood: "Summer Coastal Drives • Night Club Energy",
        category: "aquatic",
        isBestseller: true,
        quote: "Electrifying sapphire blue flacon. Fresh, cold, unstoppable projection that cuts through the heat."
    },
    {
        id: 3,
        slug: "paradoxe",
        name: "PARADOXE",
        badge: "LIMITED RESERVE",
        subtitle: "Luminous Emerald Extrait & Hypnotic Seduction",
        tagline: "Neroli Bud, Amber & Bourbon Vanilla",
        tag: "EXTRAIT DE PARFUM // 35% PURE OIL",
        image: "images/paradoxe.jpg",
        liquidColor: 0x84cc16, // Radiant Emerald / Chartreuse Green
        auraGradient: "from-lime-600/30 via-transparent to-transparent",
        prices: {
            25: 599,
            50: 899,
            100: 1199
        },
        sizes: {
            25: { label: "25 ML", title: "Pocket Extrait", desc: "Slender travel flacon with chartreuse liquid" },
            50: { label: "50 ML", title: "Signature Flacon", desc: "Architectural emerald flacon with gold collar" },
            100: { label: "100 ML", title: "Grand Collector", desc: "Masterwork crystal flacon with hypnotic emerald glow" }
        },
        notes: {
            top: "Neroli Bud Essence, Tangerine Zest, Crisp Pear",
            heart: "Bio-fermented Amber, White Jasmine Petals, Moss",
            base: "Bourbon Vanilla Infusion, Clean White Musk, Serenolide"
        },
        stats: { longevity: "15+ Hours (Hypnotic)", sillage: "Magnetic Aura (10/10)", concentration: "35% Pure Extrait" },
        mood: "Intimate Evenings • VIP Encounters • Magnetic Attraction",
        category: "amber",
        isBestseller: false,
        quote: "Vibrant chartreuse green flacon. An intoxicating floral-amber paradox that turns every head."
    },
    {
        id: 4,
        slug: "10000-wishes",
        name: "10000 WISHES",
        badge: "SIGNATURE",
        subtitle: "Starry Night Glamour & Warm Seductive Euphoria",
        tagline: "Champagne, Starfruit & Madagascar Vanilla",
        tag: "EXTRAIT DE PARFUM // 35% PURE OIL",
        image: "images/10000-wishes.jpg",
        liquidColor: 0xf59e0b, // Golden Honey Amber Glow
        auraGradient: "from-amber-500/30 via-transparent to-transparent",
        prices: {
            25: 549,
            50: 799,
            100: 1099
        },
        sizes: {
            25: { label: "25 ML", title: "Pocket Extrait", desc: "Pocket-sized golden nectar flacon" },
            50: { label: "50 ML", title: "Signature Flacon", desc: "Golden honey amber bottle with 24K emblem" },
            100: { label: "100 ML", title: "Grand Collector", desc: "Grand golden flacon with thick crystal base" }
        },
        notes: {
            top: "Sparkling Champagne, Starfruit, Pink Peony",
            heart: "Star Jasmine, Sugared Sandalwood, Night Amber",
            base: "Madagascar Vanilla Bean, Warm Tonka, Golden Musk"
        },
        stats: { longevity: "14+ Hours (Beast)", sillage: "Gourmand Cloud (9.9/10)", concentration: "35% Pure Extrait" },
        mood: "Celebration • Date Night Glamour • Warm Euphoria",
        category: "amber",
        isBestseller: false,
        quote: "A dazzling, euphoric night scent with warm vanilla, sparkling champagne, and golden starfruit."
    },
    {
        id: 5,
        slug: "eterna-flora",
        name: "ETERNA FLORA",
        badge: "NEW ARRIVAL",
        subtitle: "Timeless Haute Floral & Aristocratic Presence",
        tagline: "White Peach, Damask Rose & Smoked Vetiver",
        tag: "EXTRAIT DE PARFUM // 35% PURE OIL",
        image: "images/eterna-flora.jpg",
        liquidColor: 0xe2e8f0, // Diamond Crystal Platinum Champagne
        auraGradient: "from-slate-400/25 via-transparent to-transparent",
        prices: {
            25: 549,
            50: 799,
            100: 1099
        },
        sizes: {
            25: { label: "25 ML", title: "Pocket Extrait", desc: "Slender platinum floral spray" },
            50: { label: "50 ML", title: "Signature Flacon", desc: "Pure crystal flacon with platinum champagne extrait" },
            100: { label: "100 ML", title: "Grand Collector", desc: "Majestic crystal bottle with royal May Rose heart" }
        },
        notes: {
            top: "White Peach, Italian Iris, Pink Peppercorn",
            heart: "May Rose de Grasse, Damask Rose, Royal Jasmine",
            base: "Smoked Vetiver, Grey Ambergris, Pure Cedar"
        },
        stats: { longevity: "15+ Hours", sillage: "Aristocratic Sillage (9.8/10)", concentration: "35% Pure Extrait" },
        mood: "Daytime Elegance • Royal Occasions • Sophisticated Luxury",
        category: "floral",
        isBestseller: false,
        quote: "Pure crystal clarity with aristocratic presence. A masterwork of rare May Rose and Italian Iris."
    }
];

// Application State
const APP = {
    giftBox: {
        slots: [PERFUMES[0], PERFUMES[1], null], // Pre-populate Slot 1 & 2 so user immediately sees how gorgeous it is!
        size: 25, // 25, 50, or 100 ML
        boxFinish: 'obsidian', // 'obsidian', 'emerald', 'alabaster'
        ribbon: 'gold', // 'gold', 'noir', 'ruby'
        recipient: '',
        sender: '',
        message: ''
    },
    cardSelectedSizes: { 0: 50, 1: 50, 2: 50, 3: 50, 4: 50 },
    activePyramidIndex: 0,
    soundEnabled: true,
    promoApplied: false,
    promoDiscountRate: 0.10, // 10%
    cart: [],
    lastOrder: null
};

// ==========================================
// TACTILE WEB AUDIO SYNTHESIZER
// ==========================================
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
            audioCtx = new AudioContext();
        }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function playSfx(type) {
    if (!APP.soundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;

    if (type === 'click') {
        // High-end subtle tactile glass click
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.04);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.045);
    } 
    else if (type === 'add-to-bag') {
        // Luxury crystal chime arpeggio
        const notes = [587.33, 739.99, 880.00, 1174.66]; // D5, F#5, A5, D6
        notes.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.05);
            gain.gain.setValueAtTime(0.12, now + idx * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.35);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now + idx * 0.05);
            osc.stop(now + idx * 0.05 + 0.4);
        });
    }
    else if (type === 'size-switch') {
        // Soft metallic morphing tone
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.08);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.085);
    }
}

function toggleSound() {
    APP.soundEnabled = !APP.soundEnabled;
    const btn = document.getElementById("sound-btn");
    const icon = document.getElementById("sound-icon");
    if (APP.soundEnabled) {
        if (icon) icon.setAttribute("data-lucide", "volume-2");
        showToast("Tactile Audio Enabled", "volume-2");
    } else {
        if (icon) icon.setAttribute("data-lucide", "volume-x");
        showToast("Audio Muted", "volume-x");
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ==========================================
// BESPOKE 3-FLACON LUXURY GIFT VAULT STUDIO
// ==========================================

// ==========================================
// BESPOKE 3-FLACON LUXURY GIFT VAULT STUDIO
// ==========================================

const GIFT_BOX_PRICING = {
    25: { price: 1499, label: "3 × 25 ML Pocket Trio" },
    50: { price: 2299, label: "3 × 50 ML Signature Set" },
    100: { price: 3199, label: "3 × 100 ML Grand Imperial Set" }
};

let draggedPerfumeIndex = null;
let activeTouchPerfumeIndex = null;

function initGiftBoxStudio() {
    renderGiftBox();
    renderScentPaletteTray();
    updateGiftCardPreview();
}

function getGiftBoxPrice(size) {
    return GIFT_BOX_PRICING[size] ? GIFT_BOX_PRICING[size].price : 1499;
}

// Dynamically compute exact mathematical totals from the actual flacons in slots
function calculateGiftBoxTotals() {
    const size = APP.giftBox.size;
    const tierPrice = GIFT_BOX_PRICING[size] ? GIFT_BOX_PRICING[size].price : 1499;
    
    let filledCount = 0;
    let actualSum = 0;
    const parts = [];

    APP.giftBox.slots.forEach(p => {
        if (p) {
            filledCount++;
            const price = p.prices[size];
            actualSum += price;
            parts.push(`₹${price}`);
        }
    });

    let displayTotal = tierPrice;
    let regularSum = actualSum;
    let savings = 0;
    let formulaText = "";

    if (filledCount === 3) {
        regularSum = actualSum;
        displayTotal = tierPrice;
        savings = Math.max(0, regularSum - displayTotal);
        formulaText = `3 Flacons: ${parts.join(' + ')} = ₹${regularSum.toLocaleString('en-IN')}`;
    } else if (filledCount > 0) {
        regularSum = actualSum;
        displayTotal = actualSum;
        savings = 0;
        formulaText = `${filledCount} of 3 Selected (${parts.join(' + ')}) • Add ${3 - filledCount} more for Trio Offer`;
    } else {
        regularSum = 0;
        displayTotal = tierPrice;
        savings = 0;
        formulaText = `Select 3 flacons to curate your bespoke coffret`;
    }

    const savingsPercent = regularSum > 0 && savings > 0 ? Math.round((savings / regularSum) * 100) : 0;

    return {
        size,
        filledCount,
        actualSum,
        regularSum,
        displayTotal,
        savings,
        savingsPercent,
        formulaText
    };
}

function renderGiftBox() {
    const size = APP.giftBox.size;
    const pricing = GIFT_BOX_PRICING[size];
    const calc = calculateGiftBoxTotals();

    // 1. Update Box Header & Size Title
    const sizeTitleEl = document.getElementById("gift-box-size-title");
    if (sizeTitleEl) {
        sizeTitleEl.innerText = `HAND-CRAFTED ${pricing.label.toUpperCase()}`;
    }

    const boxVolumeSummary = document.getElementById("box-volume-summary");
    if (boxVolumeSummary) {
        boxVolumeSummary.innerText = `${pricing.label}`;
    }

    // 2. Update Slots Counter
    const filledCount = calc.filledCount;
    const counterBadge = document.getElementById("slot-counter-badge");
    if (counterBadge) {
        if (filledCount === 3) {
            counterBadge.className = "px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40";
            counterBadge.innerText = "✓ 3 / 3 VAULT COMPLETE";
        } else {
            counterBadge.className = "px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-gold-500/20 text-gold-300 border border-gold-500/40";
            counterBadge.innerText = `${filledCount} / 3 SLOTS FILLED`;
        }
    }

    // 3. Render 3 Slots
    for (let slotIdx = 0; slotIdx < 3; slotIdx++) {
        const slotEl = document.getElementById(`coffret-slot-${slotIdx}`);
        if (!slotEl) continue;

        const perfume = APP.giftBox.slots[slotIdx];

        if (!perfume) {
            // EMPTY SLOT
            slotEl.className = "coffret-slot slot-empty rounded-2xl p-2 sm:p-3.5 flex flex-col items-center justify-between transition-all duration-300 cursor-pointer min-h-[220px] sm:min-h-[290px] relative group";
            slotEl.onclick = () => handleSlotTap(slotIdx);
            slotEl.innerHTML = `
                <div class="w-full flex items-center justify-between text-[8px] sm:text-[10px] font-mono text-gold-400/80 pointer-events-none">
                    <span class="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 uppercase">SLOT 0${slotIdx + 1}</span>
                    <span class="text-gray-400">OPEN</span>
                </div>
                
                <div class="my-auto flex flex-col items-center justify-center space-y-1.5 sm:space-y-2 py-2 sm:py-4 pointer-events-none">
                    <div class="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-gold-400 transition duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                        <i data-lucide="plus" class="w-5 h-5 sm:w-6 sm:h-6 text-gold-400 stroke-[2] animate-pulse"></i>
                    </div>
                    <div class="text-center px-1">
                        <span class="text-[10px] sm:text-xs font-bold text-gray-200 block uppercase font-cinzel">Choose Scent</span>
                        <span class="text-[8px] sm:text-[9px] text-gold-400/90 block mt-0.5">Tap bottle below</span>
                    </div>
                </div>

                <div class="w-full py-0.5 sm:py-1 rounded bg-white/5 border border-white/5 text-[8px] sm:text-[9px] font-mono text-center text-gray-400 group-hover:text-gold-300 group-hover:border-gold-500/30 transition pointer-events-none">
                    + SELECT
                </div>
            `;
        } else {
            // FILLED SLOT WITH REAL BOTTLE PHOTOGRAPHY & DYNAMIC PRICE
            const slotPrice = perfume.prices[size];
            slotEl.className = "coffret-slot slot-filled rounded-2xl p-2 sm:p-3.5 flex flex-col items-center justify-between transition-all duration-300 relative group cursor-pointer";
            slotEl.onclick = () => handleSlotTap(slotIdx);
            slotEl.innerHTML = `
                <!-- Slot Header & Remove Button -->
                <div class="w-full flex items-center justify-between text-[8px] sm:text-[10px] font-mono relative z-10">
                    <span class="px-1.5 py-0.5 rounded bg-gold-500/25 text-gold-300 border border-gold-500/40 uppercase font-bold text-[8px] sm:text-[9px]">
                        0${slotIdx + 1}
                    </span>
                    <button onclick="event.stopPropagation(); removePerfumeFromSlot(${slotIdx})" class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black/85 hover:bg-red-950 text-gray-400 hover:text-red-400 border border-white/20 hover:border-red-500 flex items-center justify-center transition shadow-lg" title="Remove or swap this flacon">
                        <i data-lucide="x" class="w-3 h-3 sm:w-3.5 sm:h-3.5"></i>
                    </button>
                </div>

                <!-- Bottle Visual with Velvet Recess Ambient Glow & Translucent Flacon Glass -->
                <div class="relative my-auto flex flex-col items-center justify-center h-28 sm:h-44 w-full py-1 pointer-events-none">
                    <div class="absolute inset-0 bg-radial ${perfume.auraGradient} opacity-75 mix-blend-screen pointer-events-none"></div>
                    <img src="${perfume.image}" alt="${perfume.name}" class="slot-flacon-mask box-flacon-translucent h-full w-auto max-h-[110px] sm:max-h-[165px] object-contain transform group-hover:scale-105 transition-all duration-300 pointer-events-none" loading="lazy">
                    <div class="flacon-pedestal-disc mt-1 pointer-events-none"></div>
                </div>

                <!-- Polished Brass Gold Plaque Nameplate with Exact Bottle Price -->
                <div class="w-full brass-plaque rounded-lg px-1.5 py-1 sm:py-1.5 text-center relative z-10 pointer-events-none">
                    <h4 class="font-cinzel text-[10px] sm:text-xs font-black text-gold-200 uppercase tracking-wider truncate">
                        ${perfume.name}
                    </h4>
                    <div class="flex items-center justify-center space-x-1 mt-0.5 text-[7px] sm:text-[8px] font-mono font-bold">
                        <span class="text-gray-300">${size}ML</span>
                        <span>•</span>
                        <span class="text-gold-300 font-extrabold">₹${slotPrice}</span>
                        <span>•</span>
                        <span class="text-emerald-400">EXTRAIT</span>
                    </div>
                </div>
            `;
        }
    }

    // 4. Update Box Stage Exterior Finish
    const boxStage = document.getElementById("gift-box-stage");
    if (boxStage) {
        boxStage.className = `relative rounded-3xl p-4 sm:p-7 shadow-[0_30px_90px_rgba(0,0,0,0.98)] transition-all duration-500 box-theme-${APP.giftBox.boxFinish}`;
    }

    // 5. Update Ribbon Sash Badge
    const ribbonSash = document.getElementById("ribbon-sash-badge");
    if (ribbonSash) {
        ribbonSash.className = `ribbon-sash ribbon-sash-${APP.giftBox.ribbon}`;
        ribbonSash.innerText = APP.giftBox.ribbon === 'gold' ? '24K • GOLD' : (APP.giftBox.ribbon === 'noir' ? 'NOIR • SATIN' : 'ROYAL • RUBY');
    }

    // 6. Update Packaging Label
    const packagingLabel = document.getElementById("gift-box-packaging-label");
    if (packagingLabel) {
        const finishName = APP.giftBox.boxFinish === 'obsidian' ? 'OBSIDIAN NOIR' : (APP.giftBox.boxFinish === 'emerald' ? 'EMERALD GOLD' : 'DIAMOND PEARL');
        const ribbonName = APP.giftBox.ribbon === 'gold' ? '24K GOLD SILK' : (APP.giftBox.ribbon === 'noir' ? 'MIDNIGHT SATIN' : 'ROYAL RUBY');
        packagingLabel.innerText = `WRAP: ${finishName} + ${ribbonName}`;
    }

    // 7. Update Pricing and Savings with 100% Dynamic Math
    const totalEl = document.getElementById("box-total-price");
    if (totalEl) totalEl.innerText = `₹${calc.displayTotal.toLocaleString('en-IN')}`;

    const regEl = document.getElementById("box-regular-price");
    if (regEl) {
        if (calc.savings > 0) {
            regEl.style.display = "inline";
            regEl.innerText = `₹${calc.regularSum.toLocaleString('en-IN')}`;
        } else {
            regEl.style.display = "none";
        }
    }

    const savingsBadge = document.getElementById("box-savings-badge");
    if (savingsBadge) {
        if (calc.savings > 0) {
            savingsBadge.className = "px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30";
            savingsBadge.innerText = `SAVE ₹${calc.savings.toLocaleString('en-IN')}`;
        } else if (calc.filledCount === 3) {
            savingsBadge.className = "px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-gold-500/20 text-gold-300 border border-gold-500/30";
            savingsBadge.innerText = "VAULT READY";
        } else {
            savingsBadge.className = "px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white/10 text-gray-300 border border-white/20";
            savingsBadge.innerText = `${calc.filledCount}/3 SELECTED`;
        }
    }

    const btnPriceTag = document.getElementById("btn-gift-price-tag");
    if (btnPriceTag) btnPriceTag.innerText = `• ₹${calc.displayTotal.toLocaleString('en-IN')}`;

    // Update all matching elements across mobile & desktop
    document.querySelectorAll(".box-total-price-val").forEach(el => {
        el.innerText = `₹${calc.displayTotal.toLocaleString('en-IN')}`;
    });
    document.querySelectorAll(".box-regular-price-val").forEach(el => {
        if (calc.savings > 0) {
            el.style.display = "inline";
            el.innerText = `₹${calc.regularSum.toLocaleString('en-IN')}`;
        } else {
            el.style.display = "none";
        }
    });
    document.querySelectorAll(".box-savings-badge-val").forEach(el => {
        if (calc.savings > 0) {
            el.className = "px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 box-savings-badge-val";
            el.innerText = `SAVE ₹${calc.savings.toLocaleString('en-IN')}`;
        } else if (calc.filledCount === 3) {
            el.className = "px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-bold bg-gold-500/20 text-gold-300 border border-gold-500/30 box-savings-badge-val";
            el.innerText = "VAULT READY";
        } else {
            el.className = "px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-bold bg-white/10 text-gray-300 border border-white/20 box-savings-badge-val";
            el.innerText = `${calc.filledCount}/3 SELECTED`;
        }
    });
    document.querySelectorAll(".btn-gift-price-tag-val").forEach(el => {
        el.innerText = `• ₹${calc.displayTotal.toLocaleString('en-IN')}`;
    });

    // Update Live Math Breakdown Formula
    document.querySelectorAll(".box-math-breakdown-val").forEach(el => {
        el.innerText = calc.formulaText;
    });

    // 8. Refresh Lucide Icons
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderScentPaletteTray() {
    const tray = document.getElementById("scent-palette-tray");
    if (!tray) return;

    const size = APP.giftBox.size;

    // Render Quick Jump Fragrance Selector Tabs
    const quickTabs = document.getElementById("scent-quick-tabs");
    if (quickTabs) {
        quickTabs.innerHTML = PERFUMES.map((perfume, idx) => {
            const inBoxCount = APP.giftBox.slots.filter(s => s && s.id === perfume.id).length;
            const price = perfume.prices[size];
            return `
                <button onclick="jumpToFragrance(${idx})" class="scent-tab-pill px-2.5 py-1 rounded-full border ${inBoxCount > 0 ? 'bg-gold-500/20 border-gold-500/50 text-gold-300' : 'bg-white/5 border-white/10 text-gray-300'} hover:border-gold-400 text-[9px] font-mono flex items-center space-x-1.5 cursor-pointer flex-shrink-0 active:scale-95 transition">
                    <span class="font-bold text-gold-400">0${idx + 1}</span>
                    <span class="truncate max-w-[80px]">${perfume.name.split(' ')[0]}</span>
                    <span class="font-bold text-gold-300">₹${price}</span>
                    ${inBoxCount > 0 ? `<span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>` : ''}
                </button>
            `;
        }).join("");
    }

    tray.innerHTML = PERFUMES.map((perfume, idx) => {
        const timesInBox = APP.giftBox.slots.filter(s => s && s.id === perfume.id).length;
        const isInBox = timesInBox > 0;
        const price = perfume.prices[size];

        return `
            <div class="scent-palette-card glass-panel rounded-2xl p-2 sm:p-2.5 flex flex-col items-center justify-between text-center border ${isInBox ? 'card-in-box-translucent border-gold-400/70 shadow-[0_0_18px_rgba(212,175,55,0.2)]' : 'border-white/10 hover:border-gold-400/60'} transition-all duration-300 cursor-grab active:cursor-grabbing group relative select-none w-[138px] sm:w-auto flex-shrink-0 snap-center"
                 draggable="true"
                 ondragstart="handleDragStart(event, ${idx})"
                 ondrag="handleCardDrag(event)"
                 ondragend="handleCardDragEnd()"
                 onclick="handlePalettePerfumeClick(${idx})"
                 ontouchstart="handleTouchStart(event, ${idx})"
                 ontouchmove="handleTouchMove(event)"
                 ontouchend="handleTouchEnd(event, ${idx})"
                 ontouchcancel="handleTouchEnd(event, ${idx})">
                
                <!-- Dedicated Top Status Header: Slot Index & In-Box Badge -->
                <div class="w-full flex items-center justify-between min-h-[20px] px-0.5 relative z-20 mb-1 pointer-events-none">
                    <span class="text-[8px] font-mono font-bold ${isInBox ? 'text-gold-300' : 'text-gray-400/80'} uppercase">0${idx + 1}</span>
                    ${isInBox ? `
                        <span class="px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-gold-400 text-black shadow-md flex items-center space-x-0.5 tracking-tight">
                            <span class="text-[9px] leading-none font-black">✓</span>
                            <span>IN BOX${timesInBox > 1 ? ` (${timesInBox})` : ''}</span>
                        </span>
                    ` : `
                        <span class="text-[7px] font-mono text-gray-500 uppercase tracking-wider">READY</span>
                    `}
                </div>

                <!-- Bottle Thumbnail with Radial Feathering & Safe Height -->
                <div class="h-20 sm:h-24 w-full flex items-center justify-center py-0.5 relative z-10 overflow-hidden">
                    <img src="${perfume.image}" alt="${perfume.name}" class="flacon-cropped-view h-full w-auto max-h-[80px] sm:max-h-[96px] object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-300 pointer-events-none" loading="lazy">
                </div>

                <!-- Perfume Info with Explicit Bottle Price -->
                <div class="w-full mt-1">
                    <span class="font-cinzel text-[11px] sm:text-xs font-black text-white uppercase block truncate">${perfume.name}</span>
                    <div class="flex items-center justify-between text-[9px] font-mono mt-0.5 px-0.5">
                        <span class="text-gray-400 truncate max-w-[75px]">${perfume.tagline.split('&')[0]}</span>
                        <span class="font-extrabold text-gold-300">₹${price}</span>
                    </div>
                </div>

                <!-- Add Button / Drag Hint -->
                <button type="button" onclick="event.stopPropagation(); handlePalettePerfumeClick(${idx});" class="w-full mt-2 py-1.5 px-1.5 rounded-lg ${isInBox ? 'bg-gold-500/25 text-gold-300 border border-gold-500/40' : 'bg-gold-500/15 hover:bg-gold-500 hover:text-black text-gold-300'} border border-gold-500/40 text-[9px] font-bold uppercase transition pointer-events-auto min-h-[34px] flex items-center justify-center space-x-1">
                    <span>${isInBox ? '✓ In Vault' : '+ Place in Box'}</span>
                    <span class="text-[8px] font-mono font-normal opacity-80">(₹${price})</span>
                </button>
            </div>
        `;
    }).join("");

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Carousel Controls for Scent Palette Tray
function scrollScentTray(direction) {
    const tray = document.getElementById("scent-palette-tray");
    if (!tray) return;
    const cardWidth = 150;
    tray.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    playSfx('click');
}

function jumpToFragrance(idx) {
    const tray = document.getElementById("scent-palette-tray");
    if (!tray) return;
    const cards = tray.querySelectorAll(".scent-palette-card");
    if (cards && cards[idx]) {
        cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        cards[idx].classList.add("ring-2", "ring-gold-400");
        setTimeout(() => cards[idx].classList.remove("ring-2", "ring-gold-400"), 900);
        playSfx('click');
    }
}

// ==========================================
// TACTILE DRAG & DROP ENGINE (Touch + Mouse with Real Floating Flacon)
// ==========================================
let activeDragPerfumeIndex = null;
let isTouchDragging = false;
let touchStartX = 0;
let touchStartY = 0;
let touchStartTime = 0;
let currentHoveredSlot = null;
let activeTargetSlot = null;
let lastPaletteActionTime = 0;

function showDragAvatar(perfumeIndex, x, y, isTouch = false) {
    const avatar = document.getElementById("dragged-bottle-avatar");
    const img = document.getElementById("dragged-bottle-img");
    const nameEl = document.getElementById("dragged-bottle-name");
    const perfume = PERFUMES[perfumeIndex];
    if (!avatar || !img || !perfume) return;

    img.src = perfume.image;
    if (nameEl) nameEl.innerText = perfume.name;
    
    avatar.classList.remove("hidden");
    avatar.style.display = "block";
    updateDragAvatarPos(x, y, isTouch);
}

function updateDragAvatarPos(x, y, isTouch = false) {
    const avatar = document.getElementById("dragged-bottle-avatar");
    if (!avatar) return;
    // On mobile, float the bottle ~75px above touch coordinates so the finger never blocks the view of the bottle or slot
    const offsetY = isTouch ? -75 : -40;
    avatar.style.transform = `translate3d(${x}px, ${y + offsetY}px, 0) translate(-50%, -50%)`;
}

function hideDragAvatar() {
    const avatar = document.getElementById("dragged-bottle-avatar");
    if (!avatar) return;
    avatar.classList.add("hidden");
    avatar.style.display = "none";
    avatar.style.transform = `translate3d(-9999px, -9999px, 0)`;
}

// Robust multi-point proximity hit-testing using bounding boxes with generous mobile touch margins
function getSlotUnderPoint(x, y, isTouch = false) {
    let closestSlot = null;
    let minDistance = Infinity;

    // Test both the floating bottle position and the finger position for effortless targeting
    const testPoints = isTouch
        ? [{ x, y: y - 75 }, { x, y: y - 38 }, { x, y }]
        : [{ x, y }];

    // 40px generous padding on mobile touchscreen
    const padX = isTouch ? 40 : 15;
    const padY = isTouch ? 45 : 15;

    for (let i = 0; i < 3; i++) {
        const slot = document.getElementById(`coffret-slot-${i}`);
        if (!slot) continue;
        const rect = slot.getBoundingClientRect();

        const slotMinX = rect.left - padX;
        const slotMaxX = rect.right + padX;
        const slotMinY = rect.top - padY;
        const slotMaxY = rect.bottom + padY;

        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        for (const pt of testPoints) {
            if (
                pt.x >= slotMinX &&
                pt.x <= slotMaxX &&
                pt.y >= slotMinY &&
                pt.y <= slotMaxY
            ) {
                const dist = Math.hypot(pt.x - cx, pt.y - cy);
                if (dist < minDistance) {
                    minDistance = dist;
                    closestSlot = i;
                }
            }
        }
    }
    return closestSlot;
}

function setHoveredSlot(slotIdx) {
    if (currentHoveredSlot === slotIdx) return;
    
    // Clear previous
    if (currentHoveredSlot !== null) {
        const prevSlot = document.getElementById(`coffret-slot-${currentHoveredSlot}`);
        if (prevSlot) prevSlot.classList.remove("slot-drag-over");
    }

    currentHoveredSlot = slotIdx;

    if (slotIdx !== null) {
        const nextSlot = document.getElementById(`coffret-slot-${slotIdx}`);
        if (nextSlot) {
            nextSlot.classList.add("slot-drag-over");
            playSfx('click');
            if (navigator.vibrate) {
                try { navigator.vibrate(15); } catch (_) {}
            }
        }
    }
}

// Touch Event Handlers (Mobile-First Touchscreen Engine)
function handleTouchStart(e, perfumeIndex) {
    if (e.touches.length > 1) return;
    activeDragPerfumeIndex = perfumeIndex;
    isTouchDragging = false;
    touchStartTime = Date.now();
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
}

function handleTouchMove(e) {
    if (activeDragPerfumeIndex === null) return;
    const touch = e.touches[0];
    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;

    // Detect upward motion towards the coffret box
    // dy < -14 means user has moved finger upwards by 14px (handles both vertical and diagonal drags)
    if (!isTouchDragging && dy < -14) {
        isTouchDragging = true;
        playSfx('click');
        if (navigator.vibrate) {
            try { navigator.vibrate(25); } catch (_) {}
        }
        // Illuminate all 3 slots with drop guides
        document.querySelectorAll(".coffret-slot").forEach(s => s.classList.add("slot-drop-guide"));
        showDragAvatar(activeDragPerfumeIndex, touch.clientX, touch.clientY, true);
    }

    if (isTouchDragging) {
        // Prevent default screen scrolling during bottle drag so page doesn't jerk
        if (e.cancelable) e.preventDefault();
        
        // Float avatar ~75px above thumb so user can clearly see where to drop
        updateDragAvatarPos(touch.clientX, touch.clientY, true);
        
        const slotIdx = getSlotUnderPoint(touch.clientX, touch.clientY, true);
        setHoveredSlot(slotIdx);
    }
}

function handleTouchEnd(e, perfumeIndex) {
    // Clear drop guides
    document.querySelectorAll(".coffret-slot").forEach(s => s.classList.remove("slot-drop-guide"));

    if (isTouchDragging && activeDragPerfumeIndex !== null) {
        if (e.cancelable) e.preventDefault();
        const touch = e.changedTouches[0];
        const slotIdx = getSlotUnderPoint(touch.clientX, touch.clientY, true);
        
        hideDragAvatar();
        setHoveredSlot(null);

        if (slotIdx !== null) {
            // Dropped onto slot!
            assignPerfumeToSlot(activeDragPerfumeIndex, slotIdx);
            animateSlotDrop(slotIdx);
        }

        isTouchDragging = false;
        activeDragPerfumeIndex = null;
        return;
    }

    // Clean tap detection on mobile: if finger moved < 14px and touched for < 380ms
    const touch = e.changedTouches[0];
    const moveDist = Math.hypot(touch.clientX - touchStartX, touch.clientY - touchStartY);
    const duration = Date.now() - touchStartTime;

    hideDragAvatar();
    setHoveredSlot(null);
    isTouchDragging = false;
    activeDragPerfumeIndex = null;

    if (moveDist < 14 && duration < 380) {
        // Critical: suppress synthetic mouse/click event in mobile browsers to prevent double-tap
        if (e.cancelable) {
            e.preventDefault();
        }
        handlePalettePerfumeClick(perfumeIndex);
    }
}

// Desktop HTML5 Drag Handlers
function handleDragStart(e, perfumeIndex) {
    activeDragPerfumeIndex = perfumeIndex;
    if (e.dataTransfer) {
        e.dataTransfer.setData("text/plain", perfumeIndex.toString());
        e.dataTransfer.effectAllowed = "copyMove";
        showDragAvatar(perfumeIndex, e.clientX, e.clientY);
    }
    playSfx('click');
}

function handleCardDrag(e) {
    if (e.clientX === 0 && e.clientY === 0) return;
    updateDragAvatarPos(e.clientX, e.clientY);
    const slotIdx = getSlotUnderPoint(e.clientX, e.clientY, false);
    setHoveredSlot(slotIdx);
}

function handleCardDragEnd() {
    hideDragAvatar();
    setHoveredSlot(null);
    activeDragPerfumeIndex = null;
}

function handleSlotDragOver(e, slotIndex) {
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.dropEffect = "copy";
    setHoveredSlot(slotIndex);
}

function handleSlotDragLeave(e, slotIndex) {
    if (currentHoveredSlot === slotIndex) {
        setHoveredSlot(null);
    }
}

function handleSlotDrop(e, slotIndex) {
    e.preventDefault();
    hideDragAvatar();
    setHoveredSlot(null);

    let perfIdx = activeDragPerfumeIndex;
    if (e.dataTransfer) {
        const data = e.dataTransfer.getData("text/plain");
        if (data !== "") perfIdx = parseInt(data);
    }

    if (perfIdx !== null && PERFUMES[perfIdx]) {
        assignPerfumeToSlot(perfIdx, slotIndex);
        animateSlotDrop(slotIndex);
    }
    activeDragPerfumeIndex = null;
}

function animateSlotDrop(slotIndex) {
    const slotEl = document.getElementById(`coffret-slot-${slotIndex}`);
    if (slotEl) {
        slotEl.classList.remove("flacon-drop-snap");
        void slotEl.offsetWidth; // Force reflow
        slotEl.classList.add("flacon-drop-snap");
        setTimeout(() => slotEl.classList.remove("flacon-drop-snap"), 500);
    }
}

// 1-Tap Quick Action (Instant Touch Friendly & Seamless Mobile Targeting)
function handlePalettePerfumeClick(perfumeIndex) {
    const now = Date.now();
    // Strict debounce: ignore any duplicate call within 450ms (prevents double-tap on mobile touch + synthetic click)
    if (now - lastPaletteActionTime < 450) {
        return;
    }
    lastPaletteActionTime = now;

    // If a slot was tapped and targeted, place into that slot
    let targetSlot = activeTargetSlot !== null ? activeTargetSlot : APP.giftBox.slots.findIndex(s => s === null);
    if (targetSlot === -1 || targetSlot === null) {
        // If all slots are full, swap into slot 0 or cycle
        targetSlot = 0;
    }
    assignPerfumeToSlot(perfumeIndex, targetSlot);
    animateSlotDrop(targetSlot);
    
    // Auto-advance targetSlot to next empty slot
    activeTargetSlot = APP.giftBox.slots.findIndex(s => s === null);
    if (activeTargetSlot === -1) activeTargetSlot = null;
}

function handleSlotTap(slotIndex) {
    playSfx('click');
    activeTargetSlot = slotIndex;
    
    // Highlight the active target slot
    document.querySelectorAll(".coffret-slot").forEach((el, idx) => {
        if (idx === slotIndex) {
            el.classList.add("slot-target-active");
        } else {
            el.classList.remove("slot-target-active");
        }
    });

    const slotPerfume = APP.giftBox.slots[slotIndex];
    if (slotPerfume) {
        showToast(`Slot 0${slotIndex + 1} (${slotPerfume.name}) selected • Tap any scent below to swap`, "arrow-down-circle");
    } else {
        showToast(`Slot 0${slotIndex + 1} Active • Tap any scent below to place`, "sparkles");
    }

    // On mobile, smoothly ensure scent tray is in view
    const tray = document.getElementById("scent-palette-tray");
    if (tray && window.innerWidth < 768) {
        tray.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function assignPerfumeToSlot(perfumeIndex, slotIndex) {
    const perfume = PERFUMES[perfumeIndex];
    if (!perfume) return;

    APP.giftBox.slots[slotIndex] = perfume;
    playSfx('add-to-bag');
    renderGiftBox();
    renderScentPaletteTray();
    showToast(`Placed ${perfume.name} into Slot ${slotIndex + 1}`, "sparkles");
}

function removePerfumeFromSlot(slotIndex) {
    playSfx('click');
    const removed = APP.giftBox.slots[slotIndex];
    APP.giftBox.slots[slotIndex] = null;
    renderGiftBox();
    renderScentPaletteTray();
    if (removed) {
        showToast(`Removed ${removed.name} from Slot ${slotIndex + 1}`, "trash-2");
    }
}

function clearGiftBoxSlots() {
    playSfx('click');
    APP.giftBox.slots = [null, null, null];
    renderGiftBox();
    renderScentPaletteTray();
    showToast("Cleared all 3 slots in Gift Box", "rotate-ccw");
}

// External Add to Gift Box (from Collection Cards or Quiz)
function addPerfumeToGiftBox(perfumeId) {
    const perfume = PERFUMES.find(p => p.id === perfumeId);
    if (!perfume) return;
    const pIdx = PERFUMES.findIndex(p => p.id === perfumeId);

    // Find next empty slot
    let slotIdx = APP.giftBox.slots.findIndex(s => s === null);
    if (slotIdx === -1) slotIdx = 2; // replace last slot if all full

    assignPerfumeToSlot(pIdx, slotIdx);

    // Smooth scroll up to Gift Box section
    const giftBoxSection = document.getElementById("giftbox-section");
    if (giftBoxSection) {
        giftBoxSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function addQuizResultToGiftBox() {
    addPerfumeToGiftBox(PERFUMES[quizMatchPerfumeIndex].id);
}

// Customizer Controls
function selectGiftBoxSize(size) {
    APP.giftBox.size = size;
    playSfx('size-switch');

    [25, 50, 100].forEach(s => {
        const btns = document.querySelectorAll(`[id^="box-size-btn-${s}"]`);
        btns.forEach(btn => {
            if (s === size) btn.classList.add("active");
            else btn.classList.remove("active");
        });
    });

    renderGiftBox();
    renderScentPaletteTray();
    showToast(`Selected ${size} ML Coffret Set`, "check");
}

function selectBoxFinish(finish) {
    APP.giftBox.boxFinish = finish;
    playSfx('click');

    ['obsidian', 'emerald', 'alabaster'].forEach(f => {
        const btns = document.querySelectorAll(`[id^="box-finish-${f}"]`);
        btns.forEach(btn => {
            if (f === finish) btn.classList.add("active");
            else btn.classList.remove("active");
        });
    });

    renderGiftBox();
}

function selectRibbonStyle(ribbon) {
    APP.giftBox.ribbon = ribbon;
    playSfx('click');

    ['gold', 'noir', 'ruby'].forEach(r => {
        const btns = document.querySelectorAll(`[id^="ribbon-style-${r}"]`);
        btns.forEach(btn => {
            if (r === ribbon) btn.classList.add("active");
            else btn.classList.remove("active");
        });
    });

    renderGiftBox();
}

function updateGiftCardPreview() {
    const recInput = document.getElementById("gift-card-recipient");
    const sndInput = document.getElementById("gift-card-sender");
    const msgInput = document.getElementById("gift-card-message");

    const recVal = recInput && recInput.value.trim() ? recInput.value.trim() : "To: Someone Extraordinary";
    const sndVal = sndInput && sndInput.value.trim() ? `- ${sndInput.value.trim()}` : "- With Love";
    const msgVal = msgInput && msgInput.value.trim() ? `"${msgInput.value.trim()}"` : '"May your aura command every room you enter."';

    const prevRec = document.getElementById("preview-recipient");
    if (prevRec) prevRec.innerText = recVal.startsWith("To:") ? recVal : `To: ${recVal}`;

    const prevMsg = document.getElementById("preview-message");
    if (prevMsg) prevMsg.innerText = msgVal;

    const prevSnd = document.getElementById("preview-sender");
    if (prevSnd) prevSnd.innerText = sndVal;
}

// Add Gift Box to Bag
function addGiftBoxToCart() {
    // Check if slots are filled
    const emptySlotCount = APP.giftBox.slots.filter(s => s === null).length;
    if (emptySlotCount > 0) {
        // Auto-fill empty slots with bestselling extraits
        PERFUMES.forEach(p => {
            if (APP.giftBox.slots.includes(null)) {
                const emptyIdx = APP.giftBox.slots.indexOf(null);
                APP.giftBox.slots[emptyIdx] = p;
            }
        });
        renderGiftBox();
        renderScentPaletteTray();
        showToast("Auto-filled remaining slots with bestsellers!", "sparkles");
    }

    const size = APP.giftBox.size;
    const calc = calculateGiftBoxTotals();
    const recName = document.getElementById("gift-card-recipient")?.value.trim() || '';
    const sndName = document.getElementById("gift-card-sender")?.value.trim() || '';
    const msgText = document.getElementById("gift-card-message")?.value.trim() || '';

    const giftBoxItem = {
        id: `giftbox-${Date.now()}`,
        isGiftBox: true,
        name: `Bespoke 3-Flacon Discovery Coffret`,
        subtitle: `Curated trio: ${APP.giftBox.slots.map(s => `${s.name} (₹${s.prices[size]})`).join(', ')}`,
        perfumes: APP.giftBox.slots.map(s => `${s.name} (₹${s.prices[size]})`),
        perfumeImages: APP.giftBox.slots.map(s => s.image),
        size: size,
        sizeLabel: `3 × ${size}ML`,
        boxFinish: APP.giftBox.boxFinish,
        ribbon: APP.giftBox.ribbon,
        giftNote: {
            recipient: recName,
            sender: sndName,
            message: msgText
        },
        price: calc.displayTotal,
        regularPrice: calc.regularSum,
        savings: calc.savings,
        qty: 1,
        image: APP.giftBox.slots[0].image
    };

    APP.cart.push(giftBoxItem);
    saveCartToStorage();
    playSfx('add-to-bag');
    renderCartUI();
    openCartDrawer();
    showToast("Added Bespoke Gift Vault to Bag!", "gift");
}

function quickOrderGiftBoxWhatsApp() {
    // Ensure slots are filled
    if (APP.giftBox.slots.includes(null)) {
        PERFUMES.forEach(p => {
            if (APP.giftBox.slots.includes(null)) {
                const emptyIdx = APP.giftBox.slots.indexOf(null);
                APP.giftBox.slots[emptyIdx] = p;
            }
        });
        renderGiftBox();
        renderScentPaletteTray();
    }

    const size = APP.giftBox.size;
    const calc = calculateGiftBoxTotals();
    const pricing = GIFT_BOX_PRICING[size];
    const finishName = APP.giftBox.boxFinish === 'obsidian' ? 'Obsidian Noir' : (APP.giftBox.boxFinish === 'emerald' ? 'Emerald Gold' : 'Diamond Pearl');
    const ribbonName = APP.giftBox.ribbon === 'gold' ? '24K Liquid Gold Silk' : (APP.giftBox.ribbon === 'noir' ? 'Midnight Satin' : 'Royal Ruby');
    const recName = document.getElementById("gift-card-recipient")?.value.trim() || 'Someone Extraordinary';
    const msgText = document.getElementById("gift-card-message")?.value.trim() || 'May your aura command every room.';

    const perfumesList = APP.giftBox.slots.map((p, idx) => `   ${idx + 1}. ${p.name} (${size}ml - ₹${p.prices[size]})`).join('\n');

    let message = `*NEW ORDER - PERFUME KOMPANY BESPOKE GIFT VAULT*\n` +
        `----------------------------------------\n` +
        `✦ Item: Bespoke 3-Flacon Discovery Coffret\n` +
        `✦ Volume: 3 × ${size} ML (${pricing.label})\n` +
        `✦ Selected Extraits (35% Pure Oil):\n` +
        `${perfumesList}\n` +
        `✦ Flacons Value: ₹${calc.regularSum.toLocaleString('en-IN')}\n` +
        `✦ Coffret Special Price: *₹${calc.displayTotal.toLocaleString('en-IN')}*${calc.savings > 0 ? ` (Saved ₹${calc.savings.toLocaleString('en-IN')})` : ''}\n` +
        `✦ Packaging Finish: ${finishName} Box (Complimentary)\n` +
        `✦ Silk Ribbon Wrap: ${ribbonName} (Complimentary)\n` +
        `✦ Engraved Card: To "${recName}" - "${msgText}"\n` +
        `✦ Delivery: Free Express VIP Courier\n` +
        `----------------------------------------\n` +
        `Please confirm my custom gift vault order and share payment link / delivery details. Thank you!`;

    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
}

// ==========================================
// COLLECTION GRID RENDERING & CARD ACTIONS
// ==========================================
function renderCollectionGrid(filter = 'all') {
    const grid = document.getElementById("perfumes-grid");
    if (!grid) return;

    let filtered = PERFUMES;
    if (filter === 'bestseller') {
        filtered = PERFUMES.filter(p => p.isBestseller);
    } else if (filter !== 'all') {
        filtered = PERFUMES.filter(p => p.category === filter);
    }

    grid.innerHTML = filtered.map((perfume) => {
        const originalIndex = PERFUMES.findIndex(p => p.id === perfume.id);
        const selectedSize = APP.cardSelectedSizes[originalIndex] || 50;
        const currentPrice = perfume.prices[selectedSize];

        return `
            <div class="glass-panel-deep rounded-3xl border border-gold-500/20 overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-gold-500/50 hover:shadow-[0_10px_35px_rgba(212,175,55,0.15)] group">
                
                <!-- Card Image & Badge Overlay -->
                <div class="relative w-full h-64 sm:h-72 overflow-hidden bg-black flex items-center justify-center p-3 border-b border-white/10">
                    <img src="${perfume.image}" alt="${perfume.name}" class="flacon-cropped-view h-full w-auto object-contain filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)] transform group-hover:scale-105 transition-transform duration-500" loading="lazy">
                    
                    <span class="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono text-gold-400 font-bold border border-gold-500/30 uppercase tracking-widest">
                        ${perfume.badge}
                    </span>
                    <span class="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded-full text-[9px] font-mono text-emerald-400 font-bold border border-emerald-500/30 uppercase">
                        35% EXTRAIT
                    </span>

                    <button onclick="addPerfumeToGiftBox(${perfume.id})" class="absolute bottom-3 right-3 glass-panel hover:bg-gold-500 hover:text-black text-gold-300 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1.5 transition shadow-lg" title="Add this flacon to your 3-perfume Gift Box">
                        <i data-lucide="gift" class="w-3.5 h-3.5 text-gold-400"></i>
                        <span>+ Gift Box</span>
                    </button>
                </div>

                <!-- Card Body -->
                <div class="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div class="space-y-1.5">
                        <span class="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest block">${perfume.tagline}</span>
                        <h3 class="font-cinzel text-xl sm:text-2xl font-black text-white uppercase tracking-wide group-hover:text-gold-300 transition">${perfume.name}</h3>
                        <p class="text-xs text-gray-300 font-light line-clamp-2">${perfume.subtitle}</p>
                    </div>

                    <!-- Botanical Notes Chips -->
                    <div class="flex flex-wrap gap-1.5 py-1">
                        <span class="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] text-gray-300">Top: ${perfume.notes.top.split(',')[0]}</span>
                        <span class="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] text-gray-300">Heart: ${perfume.notes.heart.split(',')[0]}</span>
                        <span class="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] text-gray-300">Base: ${perfume.notes.base.split(',')[0]}</span>
                    </div>

                    <!-- 3-Tier Volume Selector per Card -->
                    <div class="space-y-1.5 pt-2 border-t border-white/10">
                        <div class="flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                            <span>SELECT VOLUME:</span>
                            <span id="card-size-label-${originalIndex}" class="text-gold-400 font-mono">${selectedSize} ML</span>
                        </div>
                        <div class="grid grid-cols-3 gap-1.5">
                            <button onclick="selectCardSize(${originalIndex}, 25)" class="size-pill ${selectedSize === 25 ? 'active' : ''} py-1.5 rounded-xl text-center text-xs font-bold transition flex flex-col items-center">
                                <span>25 ML</span>
                                <span class="text-[9px] font-mono text-gold-400">₹${perfume.prices[25]}</span>
                            </button>
                            <button onclick="selectCardSize(${originalIndex}, 50)" class="size-pill ${selectedSize === 50 ? 'active' : ''} py-1.5 rounded-xl text-center text-xs font-bold transition flex flex-col items-center">
                                <span>50 ML</span>
                                <span class="text-[9px] font-mono text-gold-400">₹${perfume.prices[50]}</span>
                            </button>
                            <button onclick="selectCardSize(${originalIndex}, 100)" class="size-pill ${selectedSize === 100 ? 'active' : ''} py-1.5 rounded-xl text-center text-xs font-bold transition flex flex-col items-center">
                                <span>100 ML</span>
                                <span class="text-[9px] font-mono text-gold-400">₹${perfume.prices[100]}</span>
                            </button>
                        </div>
                    </div>

                    <!-- Price & Add to Bag Button -->
                    <div class="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                        <div>
                            <span class="text-[9px] text-gray-400 uppercase tracking-wider block">Price</span>
                            <span id="card-price-${originalIndex}" class="font-mono text-xl font-black text-gold-400">₹${currentPrice}</span>
                        </div>
                        <button onclick="addCardFlaconToCart(${originalIndex})" class="gold-btn px-4 py-2.5 rounded-xl text-black font-extrabold text-xs uppercase tracking-wider flex items-center space-x-1.5 flex-1 justify-center active:scale-95 shadow-md">
                            <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
                            <span>ADD TO BAG</span>
                        </button>
                    </div>

                </div>

            </div>
        `;
    }).join("");

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function selectCardSize(perfumeIndex, size) {
    APP.cardSelectedSizes[perfumeIndex] = size;
    playSfx('size-switch');
    renderCollectionGrid();
}

function addCardFlaconToCart(perfumeIndex) {
    const perfume = PERFUMES[perfumeIndex];
    const selectedSize = APP.cardSelectedSizes[perfumeIndex] || 50;
    addToCart(perfume.id, selectedSize, 1);
    playSfx('add-to-bag');
    openCartDrawer();
}

function filterCollection(filter) {
    playSfx('click');
    const buttons = document.querySelectorAll("#collection-filters .filter-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    if (event && event.target) event.target.classList.add("active");
    renderCollectionGrid(filter);
}

function inspectInStudio(perfumeIndex) {
    addPerfumeToGiftBox(PERFUMES[perfumeIndex].id);
}

// ==========================================
// OLFACTORY PYRAMID EXPLORER
// ==========================================
function renderPyramidPills() {
    const container = document.getElementById("pyramid-fragrance-pills");
    if (!container) return;

    container.innerHTML = PERFUMES.map((perfume, idx) => `
        <button onclick="switchPyramidScent(${idx})" class="filter-btn ${idx === APP.activePyramidIndex ? 'active' : ''} px-3 py-1.5 rounded-full text-xs font-bold uppercase transition">
            ${perfume.name}
        </button>
    `).join("");
}

function switchPyramidScent(index) {
    APP.activePyramidIndex = index;
    playSfx('click');
    const perfume = PERFUMES[index];

    renderPyramidPills();

    document.getElementById("pyramid-title").innerText = perfume.name;
    document.getElementById("pyramid-subtitle").innerText = `"${perfume.subtitle}"`;
    document.getElementById("pyramid-longevity").innerText = perfume.stats.longevity;
    document.getElementById("pyramid-top-notes").innerText = perfume.notes.top;
    document.getElementById("pyramid-heart-notes").innerText = perfume.notes.heart;
    document.getElementById("pyramid-base-notes").innerText = perfume.notes.base;
    document.getElementById("pyramid-stat-longevity").innerText = perfume.stats.longevity;
    document.getElementById("pyramid-stat-sillage").innerText = perfume.stats.sillage;
    document.getElementById("pyramid-stat-mood").innerText = perfume.mood;
}

// ==========================================
// "FIND YOUR SCENT" QUIZ
// ==========================================
let quizMatchPerfumeIndex = 0;

function selectQuizAnswer(step, choice) {
    playSfx('click');

    if (choice === 'wealth') quizMatchPerfumeIndex = 0; // One Billion
    else if (choice === 'fresh') quizMatchPerfumeIndex = 1; // Bleu Mist
    else if (choice === 'seductive') quizMatchPerfumeIndex = 2; // Paradoxe
    else if (choice === 'aristocratic') quizMatchPerfumeIndex = 4; // Eterna Flora
    else quizMatchPerfumeIndex = 3; // 10000 Wishes

    const perfume = PERFUMES[quizMatchPerfumeIndex];

    const resultBox = document.getElementById("quiz-result");
    if (resultBox) {
        resultBox.classList.remove("hidden");
        document.getElementById("quiz-result-title").innerText = perfume.name;
        document.getElementById("quiz-result-quote").innerText = `"${perfume.quote}"`;
    }
}

function loadQuizResultInStudio() {
    inspectInStudio(quizMatchPerfumeIndex);
}

function addQuizResultToCart() {
    const perfume = PERFUMES[quizMatchPerfumeIndex];
    addToCart(perfume.id, 50, 1);
    playSfx('add-to-bag');
    openCartDrawer();
}

// ==========================================
// LUXURY SHOPPING BAG & CART STATE
// ==========================================
function loadCartFromStorage() {
    try {
        const saved = localStorage.getItem("pk_cart");
        if (saved) {
            APP.cart = JSON.parse(saved);
        }
    } catch (e) {
        APP.cart = [];
    }
}

function saveCartToStorage() {
    try {
        localStorage.setItem("pk_cart", JSON.stringify(APP.cart));
    } catch (e) {}
}

function addToCart(perfumeId, size, qty = 1) {
    const perfume = PERFUMES.find(p => p.id === perfumeId);
    if (!perfume) return;

    const existingIndex = APP.cart.findIndex(item => item.id === perfumeId && item.size === size);
    if (existingIndex > -1) {
        APP.cart[existingIndex].qty += qty;
    } else {
        APP.cart.push({
            id: perfume.id,
            name: perfume.name,
            subtitle: perfume.subtitle,
            image: perfume.image,
            size: size,
            price: perfume.prices[size],
            sizeLabel: perfume.sizes[size].title,
            qty: qty
        });
    }

    saveCartToStorage();
    renderCartUI();
    showToast(`Added ${perfume.name} (${size}ML) to Bag`, "shopping-bag");
}

function updateCartQty(cartIndex, delta) {
    if (!APP.cart[cartIndex]) return;
    playSfx('click');
    APP.cart[cartIndex].qty += delta;
    if (APP.cart[cartIndex].qty <= 0) {
        APP.cart.splice(cartIndex, 1);
    }
    saveCartToStorage();
    renderCartUI();
}

function removeCartItem(cartIndex) {
    if (!APP.cart[cartIndex]) return;
    playSfx('click');
    APP.cart.splice(cartIndex, 1);
    saveCartToStorage();
    renderCartUI();
    showToast("Item removed from bag", "trash-2");
}

function applyPromoCode() {
    const input = document.getElementById("promo-code-input");
    if (!input) return;
    const code = input.value.trim().toUpperCase();

    if (code === 'PK10' || code === 'FIRST10' || code === 'VIP10') {
        APP.promoApplied = true;
        playSfx('add-to-bag');
        showToast("10% VIP Vault Discount Applied!", "check");
        renderCartUI();
    } else if (code === '') {
        showToast("Please enter a promo code", "alert-circle");
    } else {
        showToast("Invalid code. Try 'PK10'", "alert-circle");
    }
}

function renderCartUI() {
    const totalCount = APP.cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = APP.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discount = APP.promoApplied ? Math.round(subtotal * APP.promoDiscountRate) : 0;
    const grandTotal = Math.max(0, subtotal - discount);

    // Update Nav Count
    const navCount = document.getElementById("cart-nav-count");
    if (navCount) navCount.innerText = `BAG (${totalCount})`;

    const navBadge = document.getElementById("cart-nav-count-badge");
    if (navBadge) navBadge.innerText = totalCount;

    const drawerCount = document.getElementById("cart-drawer-count-badge");
    if (drawerCount) drawerCount.innerText = totalCount;

    // Free Shipping Progress (Free on all orders!)
    const progressText = document.getElementById("shipping-progress-text");
    const progressBar = document.getElementById("shipping-progress-bar");
    if (progressBar && progressText) {
        progressBar.style.width = '100%';
        progressText.innerText = "FREE EXPRESS VIP COURIER APPLIED";
    }

    // Render Items
    const container = document.getElementById("cart-items-container");
    if (container) {
        if (APP.cart.length === 0) {
            container.innerHTML = `
                <div class="text-center py-16 space-y-3">
                    <i data-lucide="shopping-bag" class="w-12 h-12 text-gold-500/40 mx-auto"></i>
                    <p class="font-cinzel text-base text-gray-300 uppercase">Your Bag is Empty</p>
                    <p class="text-xs text-gray-500 max-w-xs mx-auto">Explore our 5 signature extraits or curate your bespoke 3-perfume gift coffret.</p>
                </div>
            `;
        } else {
            container.innerHTML = APP.cart.map((item, idx) => {
                if (item.isGiftBox) {
                    return `
                        <div class="flex items-start space-x-3.5 pt-3.5 first:pt-0">
                            <!-- 3 Mini Flacons in Vault Graphic -->
                            <div class="w-16 h-20 rounded-xl bg-gradient-to-b from-stone-900 to-black border border-gold-500/40 p-1 flex items-center justify-center flex-shrink-0 relative overflow-hidden shadow-lg">
                                <div class="flex items-center -space-x-3 scale-95">
                                    ${item.perfumeImages.map(img => `<img src="${img}" class="w-6 h-12 object-contain filter drop-shadow">`).join('')}
                                </div>
                                <span class="absolute bottom-0 inset-x-0 bg-gold-500 text-black text-[7px] font-black text-center font-mono uppercase">VAULT</span>
                            </div>
                            
                            <div class="flex-1 min-w-0">
                                <div class="flex items-start justify-between gap-1">
                                    <div>
                                        <h4 class="font-cinzel text-xs sm:text-sm font-bold text-white uppercase truncate">${item.name}</h4>
                                        <span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-gold-500/20 text-gold-300 border border-gold-500/30 uppercase mt-0.5 inline-block">
                                            ${item.sizeLabel} • ${item.boxFinish.toUpperCase()} BOX
                                        </span>
                                        <p class="text-[10px] text-gray-300 mt-1 line-clamp-1 font-mono">
                                            ✦ ${item.perfumes.join(' • ')}
                                        </p>
                                        ${item.giftNote && item.giftNote.message ? `<p class="text-[9px] text-gold-400 italic mt-0.5 font-serif-editorial">"Note: ${item.giftNote.message}"</p>` : ''}
                                    </div>
                                    <button onclick="removeCartItem(${idx})" class="text-gray-500 hover:text-red-400 transition p-1" title="Remove">
                                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                                    </button>
                                </div>
                                <div class="flex items-center justify-between mt-2">
                                    <span class="font-mono text-xs font-bold text-gold-400">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
                                    <div class="flex items-center space-x-1.5 bg-black/60 border border-white/10 rounded-lg p-0.5">
                                        <button onclick="updateCartQty(${idx}, -1)" class="w-5 h-5 flex items-center justify-center text-xs text-gray-300 hover:text-white">-</button>
                                        <span class="font-mono text-[11px] w-4 text-center font-bold text-white">${item.qty}</span>
                                        <button onclick="updateCartQty(${idx}, 1)" class="w-5 h-5 flex items-center justify-center text-xs text-gray-300 hover:text-white">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }

                return `
                    <div class="flex items-center space-x-3.5 pt-3.5 first:pt-0">
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-20 object-contain rounded-xl bg-black border border-white/10 p-1 flex-shrink-0">
                        <div class="flex-1 min-w-0">
                            <div class="flex items-start justify-between gap-1">
                                <div>
                                    <h4 class="font-cinzel text-xs sm:text-sm font-bold text-white uppercase truncate">${item.name}</h4>
                                    <span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-gold-500/20 text-gold-300 border border-gold-500/30 uppercase mt-0.5 inline-block">
                                        ${item.size} ML ${item.sizeLabel}
                                    </span>
                                </div>
                                <button onclick="removeCartItem(${idx})" class="text-gray-500 hover:text-red-400 transition p-1" title="Remove">
                                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>
                            <div class="flex items-center justify-between mt-2">
                                <span class="font-mono text-xs font-bold text-gold-400">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
                                <div class="flex items-center space-x-1.5 bg-black/60 border border-white/10 rounded-lg p-0.5">
                                    <button onclick="updateCartQty(${idx}, -1)" class="w-5 h-5 flex items-center justify-center text-xs text-gray-300 hover:text-white">-</button>
                                    <span class="font-mono text-[11px] w-4 text-center font-bold text-white">${item.qty}</span>
                                    <button onclick="updateCartQty(${idx}, 1)" class="w-5 h-5 flex items-center justify-center text-xs text-gray-300 hover:text-white">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join("");
        }
    }

    // Update Totals
    const subtotalEl = document.getElementById("cart-subtotal");
    if (subtotalEl) subtotalEl.innerText = `₹${subtotal.toLocaleString('en-IN')}`;

    const discountRow = document.getElementById("cart-discount-row");
    const discountEl = document.getElementById("cart-discount");
    if (discountRow && discountEl) {
        if (APP.promoApplied) {
            discountRow.classList.remove("hidden");
            discountEl.innerText = `-₹${discount.toLocaleString('en-IN')}`;
        } else {
            discountRow.classList.add("hidden");
        }
    }

    const grandTotalEl = document.getElementById("cart-grand-total");
    if (grandTotalEl) grandTotalEl.innerText = `₹${grandTotal.toLocaleString('en-IN')}`;

    const modalTotalEl = document.getElementById("checkout-modal-total");
    if (modalTotalEl) modalTotalEl.innerText = `₹${grandTotal.toLocaleString('en-IN')}`;

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function openCartDrawer() {
    playSfx('click');
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-drawer-overlay");
    if (drawer && overlay) {
        drawer.classList.remove("cart-closed");
        drawer.classList.add("cart-open");
        overlay.classList.remove("hidden");
        setTimeout(() => overlay.classList.remove("opacity-0"), 10);
    }
}

function closeCartDrawer() {
    playSfx('click');
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-drawer-overlay");
    if (drawer && overlay) {
        drawer.classList.remove("cart-open");
        drawer.classList.add("cart-closed");
        overlay.classList.add("opacity-0");
        setTimeout(() => overlay.classList.add("hidden"), 300);
    }
}

// ==========================================
// PAYMENT GATEWAY & CHECKOUT MODAL
// ==========================================
function openCheckoutModal() {
    if (APP.cart.length === 0) {
        showToast("Your bag is empty! Add a flacon first.", "alert-circle");
        return;
    }
    playSfx('click');
    closeCartDrawer();
    const modal = document.getElementById("checkout-modal");
    if (modal) modal.classList.remove("hidden");
}

function closeCheckoutModal() {
    playSfx('click');
    const modal = document.getElementById("checkout-modal");
    if (modal) modal.classList.add("hidden");
}

function processOrder(e) {
    e.preventDefault();
    playSfx('click');

    const name = document.getElementById("cust-name").value.trim();
    const phone = document.getElementById("cust-phone").value.trim();
    const address = document.getElementById("cust-address").value.trim();
    const city = document.getElementById("cust-city").value.trim();
    const pincode = document.getElementById("cust-pincode").value.trim();
    const paymentMethodEl = document.querySelector('input[name="payment-method"]:checked');
    const paymentMethod = paymentMethodEl ? paymentMethodEl.value.toUpperCase() : 'UPI';

    const orderRef = `PK-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const subtotal = APP.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discount = APP.promoApplied ? Math.round(subtotal * APP.promoDiscountRate) : 0;
    const grandTotal = Math.max(0, subtotal - discount);

    APP.lastOrder = {
        ref: orderRef,
        customer: { name, phone, address, city, pincode },
        paymentMethod: paymentMethod,
        items: [...APP.cart],
        grandTotal: grandTotal,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    // Clear Cart
    APP.cart = [];
    saveCartToStorage();
    renderCartUI();
    closeCheckoutModal();

    // Show Success Modal
    const successModal = document.getElementById("order-success-modal");
    const refEl = document.getElementById("success-order-id");
    if (refEl) refEl.innerText = `ORDER REF: ${orderRef}`;
    if (successModal) successModal.classList.remove("hidden");
    playSfx('add-to-bag');
}

function closeSuccessModal() {
    playSfx('click');
    const modal = document.getElementById("order-success-modal");
    if (modal) modal.classList.add("hidden");
}

// 1-Click WhatsApp Order Dispatch
function orderViaWhatsApp() {
    if (APP.cart.length === 0) {
        showToast("Your bag is empty! Add a flacon or gift vault first.", "alert-circle");
        return;
    }

    const subtotal = APP.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discount = APP.promoApplied ? Math.round(subtotal * APP.promoDiscountRate) : 0;
    const grandTotal = Math.max(0, subtotal - discount);

    let message = `*NEW ORDER - PERFUME KOMPANY OFFICIAL*\n`;
    message += `----------------------------------------\n`;
    APP.cart.forEach((item, i) => {
        if (item.isGiftBox) {
            message += `${i + 1}. *${item.name}* (${item.sizeLabel})\n`;
            message += `   Flacons: ${item.perfumes.join(', ')}\n`;
            message += `   Packaging: ${item.boxFinish} Vault with ${item.ribbon} Ribbon\n`;
            if (item.giftNote && (item.giftNote.recipient || item.giftNote.message)) {
                message += `   Gift Note: To "${item.giftNote.recipient}" - "${item.giftNote.message}" (From: ${item.giftNote.sender})\n`;
            }
            message += `   Qty: ${item.qty} × ₹${item.price} = ₹${(item.qty * item.price).toLocaleString('en-IN')}\n`;
        } else {
            message += `${i + 1}. *${item.name}* (${item.size}ML ${item.sizeLabel})\n`;
            message += `   Qty: ${item.qty} × ₹${item.price} = ₹${(item.qty * item.price).toLocaleString('en-IN')}\n`;
        }
    });
    message += `----------------------------------------\n`;
    message += `✦ Total Amount: *₹${grandTotal.toLocaleString('en-IN')}*\n`;
    message += `✦ VIP Vault Delivery: *FREE EXPRESS COURIER*\n`;
    message += `✦ Packaging: *Luxury Hand-Poured Gift Box*\n`;
    message += `----------------------------------------\n`;
    message += `Please confirm my order and share the payment link / delivery details. Thank you!`;

    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
}

function sendOrderReceiptWhatsApp() {
    if (!APP.lastOrder) return;
    const order = APP.lastOrder;

    let message = `*ORDER RECEIPT - PERFUME KOMPANY*\n`;
    message += `Order Reference: *${order.ref}*\n`;
    message += `Customer: ${order.customer.name} (${order.customer.phone})\n`;
    message += `Address: ${order.customer.address}, ${order.customer.city} - ${order.customer.pincode}\n`;
    message += `Payment Method: ${order.paymentMethod}\n`;
    message += `----------------------------------------\n`;
    order.items.forEach(item => {
        if (item.isGiftBox) {
            message += `• ${item.name} (${item.sizeLabel}) [${item.perfumes.join(', ')}] × ${item.qty} = ₹${(item.price * item.qty).toLocaleString('en-IN')}\n`;
        } else {
            message += `• ${item.name} (${item.size}ML) × ${item.qty} = ₹${(item.price * item.qty).toLocaleString('en-IN')}\n`;
        }
    });
    message += `----------------------------------------\n`;
    message += `Grand Total: *₹${order.grandTotal.toLocaleString('en-IN')}*\n`;
    message += `Thank you for choosing Perfume Kompany!`;

    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
}

// Mobile Navigation Toggle
function toggleMobileNav() {
    playSfx('click');
    const nav = document.getElementById("mobile-nav");
    if (nav) nav.classList.toggle("hidden");
}

// Global Luxury Toast Notification
function showToast(message, icon = "check") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast-animate glass-panel-deep px-4 py-2.5 rounded-2xl text-xs font-bold text-white border border-gold-500/50 flex items-center space-x-2 shadow-2xl pointer-events-auto";
    toast.innerHTML = `
        <i data-lucide="${icon}" class="w-4 h-4 text-gold-400"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    if (typeof lucide !== 'undefined') lucide.createIcons();

    setTimeout(() => {
        toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        toast.style.opacity = "0";
        toast.style.transform = "translate(-50%, -20px)";
        setTimeout(() => toast.remove(), 400);
    }, 2800);
}

// ==========================================
// LIVE SOCIAL PROOF PURCHASE NOTIFICATIONS
// Compact, mobile-first, South India & Kerala centric
// ==========================================
const SOCIAL_PROOF_ORDERS = [
    { name: "Rahul M.", city: "Kochi, Kerala", product: "One Billion (50ml Extrait)", img: "images/one-billion.jpg", time: "Just now" },
    { name: "Ananya S.", city: "Trivandrum, Kerala", product: "Bespoke 3-Perfume Gift Box", img: "images/eterna-flora.jpg", time: "2m ago" },
    { name: "Fahad K.", city: "Calicut (Kozhikode), Kerala", product: "Bleu Mist (100ml Grand)", img: "images/bleu-mist.jpg", time: "4m ago" },
    { name: "Devika N.", city: "Thrissur, Kerala", product: "Eterna Flora (50ml Extrait)", img: "images/eterna-flora.jpg", time: "6m ago" },
    { name: "Ashwin P.", city: "Ernakulam, Kerala", product: "10000 Wishes (100ml Grand)", img: "images/10000-wishes.jpg", time: "8m ago" },
    { name: "Sneha V.", city: "Kottayam, Kerala", product: "Paradoxe (25ml Pocket)", img: "images/paradoxe.jpg", time: "11m ago" },
    { name: "Gautham R.", city: "Kannur, Kerala", product: "Bespoke 3-Perfume Coffret Set", img: "images/one-billion.jpg", time: "13m ago" },
    { name: "Nikhil T.", city: "Palakkad, Kerala", product: "One Billion (100ml Extrait)", img: "images/one-billion.jpg", time: "17m ago" },
    { name: "Meera J.", city: "Alappuzha, Kerala", product: "Eterna Flora (25ml Pocket)", img: "images/eterna-flora.jpg", time: "20m ago" },
    { name: "Arjun K.", city: "Kollam, Kerala", product: "Bleu Mist (50ml Extrait)", img: "images/bleu-mist.jpg", time: "24m ago" },
    { name: "Rhea Menon", city: "Malappuram, Kerala", product: "10000 Wishes (50ml Extrait)", img: "images/10000-wishes.jpg", time: "28m ago" },
    { name: "Siddharth B.", city: "Bangalore, Karnataka", product: "Bespoke 3-Perfume Gift Box", img: "images/bleu-mist.jpg", time: "32m ago" },
    { name: "Kavya Nair", city: "Coimbatore, Tamil Nadu", product: "Paradoxe (50ml Extrait)", img: "images/paradoxe.jpg", time: "36m ago" }
];

let socialProofIndex = 0;
let socialProofTimer = null;
let socialProofDismissed = false;

function initSocialProof() {
    const container = document.getElementById("social-proof-toast");
    if (!container) return;

    // First popup appears after 4 seconds
    setTimeout(() => {
        showNextSocialProof();
    }, 4000);
}

function showNextSocialProof() {
    if (socialProofDismissed) return;
    const container = document.getElementById("social-proof-toast");
    if (!container) return;

    const order = SOCIAL_PROOF_ORDERS[socialProofIndex % SOCIAL_PROOF_ORDERS.length];
    socialProofIndex++;

    container.innerHTML = `
        <div class="social-proof-card rounded-2xl p-2.5 sm:p-3 flex items-center space-x-2.5 relative select-none">
            <!-- Mini Bottle Preview with Mask Vignette -->
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black/70 border border-gold-500/30 flex-shrink-0 flex items-center justify-center p-0.5 overflow-hidden">
                <img src="${order.img}" alt="${order.product}" class="flacon-cropped-view h-full w-auto object-contain">
            </div>

            <!-- Buyer Details & Location -->
            <div class="flex-1 min-w-0 pr-4">
                <div class="flex items-center space-x-1.5 leading-tight">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse"></span>
                    <span class="text-[11px] font-bold text-white truncate">${order.name}</span>
                    <span class="text-[9px] text-gray-400">in</span>
                    <span class="text-[10px] font-semibold text-gold-300 truncate">${order.city}</span>
                </div>
                <div class="text-[10px] text-gray-300 truncate font-cinzel mt-0.5">
                    Purchased <span class="text-white font-bold">${order.product}</span>
                </div>
                <div class="text-[8px] font-mono text-emerald-400/90 mt-0.5 flex items-center space-x-1">
                    <span>✓ Verified Buyer</span>
                    <span>•</span>
                    <span>${order.time}</span>
                </div>
            </div>

            <!-- Quick Close Button -->
            <button onclick="dismissSocialProof(event)" class="absolute top-1.5 right-1.5 text-gray-400 hover:text-white p-1 transition" title="Dismiss">
                <i data-lucide="x" class="w-3 h-3"></i>
            </button>
        </div>
    `;

    if (typeof lucide !== 'undefined') lucide.createIcons();

    // Show popup
    container.classList.remove("toast-hidden");
    container.classList.add("toast-visible");

    // Auto-dismiss after 4.8 seconds
    clearTimeout(socialProofTimer);
    socialProofTimer = setTimeout(() => {
        container.classList.remove("toast-visible");
        container.classList.add("toast-hidden");

        // Schedule next popup after 12-16 seconds
        const nextDelay = 12000 + Math.random() * 4000;
        setTimeout(() => {
            showNextSocialProof();
        }, nextDelay);
    }, 4800);
}

function dismissSocialProof(e) {
    if (e) e.stopPropagation();
    socialProofDismissed = true;
    const container = document.getElementById("social-proof-toast");
    if (container) {
        container.classList.remove("toast-visible");
        container.classList.add("toast-hidden");
    }
    clearTimeout(socialProofTimer);
}

// ==========================================
// APPLICATION INITIALIZATION
// ==========================================
window.addEventListener("DOMContentLoaded", () => {
    loadCartFromStorage();
    initGiftBoxStudio();
    renderCollectionGrid('all');
    renderPyramidPills();
    switchPyramidScent(0);
    renderCartUI();
    initSocialProof();

    // Trigger Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
