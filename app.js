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
    activeStudioPerfumeIndex: 0,
    activeStudioSize: 100, // 25, 50, or 100 ML
    studioQty: 1,
    studioAutoSpin: true,
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
// 3D WEBGL FLACON STUDIO (THREE.JS)
// ==========================================
let studioScene, studioCamera, studioRenderer, studioControls;
let studioFlaconGroup = null;
let studioLiquidMesh = null;
let studioFrontLabelMesh = null;
let studioBackLabelMesh = null;
let studioUnderlight = null;
let studioClock = new THREE.Clock();

// Direct Flacon Touch & Drag Physics State
let isDraggingFlacon = false;
let flaconRotY = 0;
let flaconRotX = 0;
let flaconVelY = 0;
let flaconVelX = 0;
let lastPointerX = 0;
let lastPointerY = 0;
let targetFlaconScale = new THREE.Vector3(1.0, 1.0, 1.0);
let currentFlaconScale = new THREE.Vector3(1.0, 1.0, 1.0);

function init3DStudio() {
    const container = document.getElementById("studio-canvas-container");
    const canvas = document.getElementById("studio-webgl-canvas");
    if (!container || !canvas) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    // 1. Scene
    studioScene = new THREE.Scene();
    studioScene.fog = new THREE.FogExp2(0x07080b, 0.04);

    // 2. Camera
    studioCamera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    studioCamera.position.set(0, 0.35, 4.4);
    studioCamera.lookAt(0, 0.05, 0);

    // 3. Renderer
    studioRenderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
    });
    studioRenderer.setSize(width, height);
    studioRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    studioRenderer.shadowMap.enabled = true;
    studioRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 4. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfff6ea, 1.4);
    studioScene.add(ambientLight);

    const keySpot = new THREE.SpotLight(0xfffbeb, 2.6, 20, Math.PI / 5, 0.4);
    keySpot.position.set(2.5, 5.5, 4.0);
    keySpot.castShadow = true;
    keySpot.shadow.mapSize.width = 1024;
    keySpot.shadow.mapSize.height = 1024;
    studioScene.add(keySpot);

    const rimLight = new THREE.DirectionalLight(0xffeedd, 1.5);
    rimLight.position.set(-3.5, 4.0, -3.0);
    studioScene.add(rimLight);

    // Color-matched Under-glow Light for Flacon
    const activePerfume = PERFUMES[APP.activeStudioPerfumeIndex];
    studioUnderlight = new THREE.PointLight(activePerfume.liquidColor, 2.5, 6.0);
    studioUnderlight.position.set(0, -0.75, 0.3);
    studioScene.add(studioUnderlight);

    // 5. Polished Obsidian Mirror Pedestal Floor
    const floorGeo = new THREE.CylinderGeometry(1.4, 1.45, 0.15, 64);
    const floorMat = new THREE.MeshStandardMaterial({
        color: 0x0a0c10,
        roughness: 0.12,
        metalness: 0.85
    });
    const pedestal = new THREE.Mesh(floorGeo, floorMat);
    pedestal.position.y = -0.92;
    pedestal.receiveShadow = true;
    studioScene.add(pedestal);

    // 24K Gold Trim Ring around Pedestal
    const ringGeo = new THREE.TorusGeometry(1.4, 0.018, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0xf5d061, metalness: 0.95, roughness: 0.15 });
    const goldRing = new THREE.Mesh(ringGeo, ringMat);
    goldRing.rotation.x = Math.PI / 2;
    goldRing.position.y = -0.84;
    studioScene.add(goldRing);

    // 6. Build the 3D Flacon
    buildStudioFlacon();

    // 7. Setup Direct Pointer Events on 3D Container
    setupStudioInput(container);

    // 8. Responsive Resize
    window.addEventListener("resize", onStudioResize);

    // 9. Start Animation Loop
    animateStudio();
}

function onStudioResize() {
    const container = document.getElementById("studio-canvas-container");
    if (!container || !studioRenderer || !studioCamera) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    studioCamera.aspect = width / height;
    if (width < 640) {
        studioCamera.fov = 46;
        studioCamera.position.z = 4.8;
    } else {
        studioCamera.fov = 40;
        studioCamera.position.z = 4.4;
    }
    studioCamera.updateProjectionMatrix();
    studioRenderer.setSize(width, height);
}

// Procedural 24K Gold Embossed Plaque Texture
function generateProceduralPlaque(perfume, size, isBack = false) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 768;
    const ctx = canvas.getContext('2d');

    // Rich matte black leather background
    ctx.fillStyle = '#08090d';
    ctx.fillRect(0, 0, 512, 768);

    // Fine grain texture
    for (let i = 0; i < 7000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 768;
        const s = Math.random() > 0.5 ? 26 : 14;
        ctx.fillStyle = `rgb(${s},${s},${s})`;
        ctx.fillRect(x, y, 1.5, 1.5);
    }

    // Outer Gold Foil Border
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 6;
    ctx.strokeRect(24, 24, 464, 720);

    // Inner Thin Gold Line
    ctx.strokeStyle = '#f5d061';
    ctx.lineWidth = 2;
    ctx.strokeRect(32, 32, 448, 704);

    if (!isBack) {
        // FRONT FACE: EMBOSSED GOLD MONOGRAM & TITLE
        ctx.strokeStyle = '#f5d061';
        ctx.lineWidth = 3.5;
        ctx.strokeRect(238, 85, 36, 22);
        ctx.strokeRect(208, 112, 96, 110);

        // "PK" Monogram
        ctx.font = 'bold 52px "Cinzel", Georgia, serif';
        ctx.fillStyle = '#f5d061';
        ctx.textAlign = 'center';
        ctx.fillText('PK', 256, 192);

        // "PERFUME KOMPANY"
        ctx.font = '700 24px "Cinzel", Georgia, serif';
        ctx.fillStyle = '#f5d061';
        ctx.fillText('PERFUME', 256, 275);

        ctx.font = '700 16px "Montserrat", sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('KOMPANY', 256, 305);

        // Divider Line
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(160, 335);
        ctx.lineTo(352, 335);
        ctx.stroke();

        // Fragrance Name
        ctx.font = '900 40px "Cinzel", serif';
        ctx.fillStyle = '#f5d061';
        ctx.fillText(perfume.name, 256, 435);

        // Subtitle
        ctx.font = 'italic 24px "Cinzel", serif';
        ctx.fillStyle = '#e2e8f0';
        ctx.fillText('Extrait De Parfum', 256, 500);

        // Volume specification (25 ML / 50 ML / 100 ML)
        ctx.font = '800 22px "Montserrat", sans-serif';
        ctx.fillStyle = '#f5d061';
        ctx.fillText(`${size} ML • 35% EXTRAIT`, 256, 565);
    } else {
        // BACK FACE: AUTHENTIC BATCH CERTIFICATE & GOLD BARCODE
        ctx.textAlign = 'center';

        ctx.font = 'bold 44px "Cinzel", serif';
        ctx.fillStyle = '#f5d061';
        ctx.fillText('PK', 256, 120);

        ctx.font = '700 18px "Montserrat", sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('PERFUME KOMPANY', 256, 160);

        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(140, 185);
        ctx.lineTo(372, 185);
        ctx.stroke();

        ctx.font = '600 17px "Montserrat", sans-serif';
        ctx.fillStyle = '#f5d061';
        ctx.fillText('AUTHENTIC EXTRAIT DE PARFUM', 256, 235);

        ctx.font = '400 15px "Montserrat", sans-serif';
        ctx.fillStyle = '#cbd5e1';
        ctx.fillText('HAND-POURED IN MICRO-BATCHES', 256, 275);
        ctx.fillText('35% ESSENTIAL OIL CONCENTRATION', 256, 305);
        ctx.fillText('NATURAL MATURED EXTRACTS', 256, 335);

        ctx.font = '700 14px "Space Grotesk", monospace';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(`BATCH REF: PK-2026-0${perfume.id}`, 256, 395);
        ctx.fillText(`VOLUME: ${size} ML FLACON`, 256, 425);

        // Gold Barcode
        ctx.fillStyle = '#f5d061';
        const barWidths = [4, 2, 6, 2, 4, 8, 2, 4, 2, 6, 4, 2, 8, 4, 2, 6, 2, 4, 6, 2, 8, 4, 2, 4, 6, 2];
        let currentX = 110;
        for (let i = 0; i < barWidths.length; i++) {
            const w = barWidths[i];
            ctx.fillRect(currentX, 480, w, 70);
            currentX += w + (i % 3 === 0 ? 6 : 3);
        }

        ctx.font = '600 13px "Space Grotesk", monospace';
        ctx.fillStyle = '#d4af37';
        ctx.fillText(`7 93573 00${perfume.id}${size} 2`, 256, 585);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
}

// Build 3D Flacon Mesh Structure
function buildStudioFlacon() {
    if (studioFlaconGroup) {
        studioScene.remove(studioFlaconGroup);
    }

    const perfume = PERFUMES[APP.activeStudioPerfumeIndex];
    const size = APP.activeStudioSize;

    studioFlaconGroup = new THREE.Group();
    studioFlaconGroup.position.set(0, 0.05, 0);

    // 1. Crystal Glass Outer Flacon
    const outerGlassMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.28,
        roughness: 0.02,
        metalness: 0.05,
        transmission: 0.90,
        ior: 1.52,
        reflectivity: 0.95,
        clearcoat: 1.0,
        clearcoatRoughness: 0.02,
        depthWrite: false
    });
    const outerGlass = new THREE.Mesh(new THREE.BoxGeometry(0.96, 1.35, 0.48), outerGlassMat);
    studioFlaconGroup.add(outerGlass);

    // 2. Solid Crystal Glass Base
    const baseGlass = new THREE.Mesh(
        new THREE.BoxGeometry(0.95, 0.25, 0.47),
        new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.55,
            roughness: 0.02,
            clearcoat: 1.0,
            depthWrite: false
        })
    );
    baseGlass.position.y = -0.55;
    studioFlaconGroup.add(baseGlass);

    // 3. Glowing Inner Liquid Core
    const liquidMat = new THREE.MeshPhysicalMaterial({
        color: perfume.liquidColor,
        transparent: true,
        opacity: 0.92,
        roughness: 0.06,
        metalness: 0.15,
        clearcoat: 1.0,
        depthWrite: true
    });
    studioLiquidMesh = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.96, 0.36), liquidMat);
    studioLiquidMesh.position.y = 0.08;
    studioFlaconGroup.add(studioLiquidMesh);

    // 4. White Dip Tube & Pump
    const tubeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 });
    const dipTube = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.98, 16), tubeMat);
    dipTube.position.set(0, 0.06, 0);
    studioFlaconGroup.add(dipTube);

    const pumpMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 0.16, 16),
        new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.95, roughness: 0.15 })
    );
    pumpMesh.position.y = 0.58;
    studioFlaconGroup.add(pumpMesh);

    // 5. Front 24K Gold Plaque (+Z)
    const frontTex = generateProceduralPlaque(perfume, size, false);
    const frontMat = new THREE.MeshStandardMaterial({ map: frontTex, roughness: 0.35, metalness: 0.75 });
    const goldBezelMat = new THREE.MeshStandardMaterial({ color: 0xf5d061, metalness: 0.98, roughness: 0.15 });

    const frontBezel = new THREE.Mesh(new THREE.BoxGeometry(0.68, 1.00, 0.012), goldBezelMat);
    frontBezel.position.set(0, 0.06, 0.235);
    studioFlaconGroup.add(frontBezel);

    studioFrontLabelMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.66, 0.98), frontMat);
    studioFrontLabelMesh.position.set(0, 0.06, 0.242);
    studioFlaconGroup.add(studioFrontLabelMesh);

    // 6. Back Collector Certificate Plaque (-Z)
    const backTex = generateProceduralPlaque(perfume, size, true);
    const backMat = new THREE.MeshStandardMaterial({ map: backTex, roughness: 0.35, metalness: 0.75 });

    const backBezel = new THREE.Mesh(new THREE.BoxGeometry(0.68, 1.00, 0.012), goldBezelMat);
    backBezel.position.set(0, 0.06, -0.235);
    studioFlaconGroup.add(backBezel);

    studioBackLabelMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.66, 0.98), backMat);
    studioBackLabelMesh.rotation.y = Math.PI;
    studioBackLabelMesh.position.set(0, 0.06, -0.242);
    studioFlaconGroup.add(studioBackLabelMesh);

    // 7. Polished Gold Collar
    const collar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.22, 0.25, 0.14, 32),
        new THREE.MeshPhysicalMaterial({ color: 0xf5d061, metalness: 0.98, roughness: 0.10, clearcoat: 1.0 })
    );
    collar.position.y = 0.74;
    studioFlaconGroup.add(collar);

    // 8. Diamond-Knurled 24K Gold Cap
    const capGroup = new THREE.Group();
    capGroup.position.set(0, 0.74, 0);

    const capBody = new THREE.Mesh(
        new THREE.CylinderGeometry(0.24, 0.24, 0.36, 32),
        new THREE.MeshStandardMaterial({ color: 0xf5d061, metalness: 0.98, roughness: 0.22 })
    );
    capBody.position.y = 0.24;
    capGroup.add(capBody);

    const topCover = new THREE.Mesh(
        new THREE.CylinderGeometry(0.24, 0.24, 0.015, 32),
        goldBezelMat
    );
    topCover.position.y = 0.42;
    capGroup.add(topCover);

    studioFlaconGroup.add(capGroup);

    // Apply active volume scale
    applyFlaconSizeScaling(size, false);

    studioScene.add(studioFlaconGroup);
}

// Dynamic Morphing & Proportion Scaling for 25ml, 50ml, and 100ml
function applyFlaconSizeScaling(size, animated = true) {
    if (!studioFlaconGroup) return;

    if (size === 25) {
        // Slender, pocket-sized proportions
        targetFlaconScale.set(0.74, 0.85, 0.74);
    } else if (size === 50) {
        // Classic mid-size proportions
        targetFlaconScale.set(0.88, 0.94, 0.88);
    } else {
        // Grand 100ml collector flacon
        targetFlaconScale.set(1.05, 1.05, 1.05);
    }

    if (!animated) {
        currentFlaconScale.copy(targetFlaconScale);
        studioFlaconGroup.scale.copy(targetFlaconScale);
    }
}

// Direct Touch / Pointer Controls for 360° Flacon Rotation
function setupStudioInput(container) {
    container.addEventListener("pointerdown", (event) => {
        isDraggingFlacon = true;
        lastPointerX = event.clientX;
        lastPointerY = event.clientY;
        flaconVelY = 0;
        flaconVelX = 0;
        APP.studioAutoSpin = false;
        updateStudioSpinButtonUI();
    });

    window.addEventListener("pointermove", (event) => {
        if (!isDraggingFlacon) return;

        const dx = event.clientX - lastPointerX;
        const dy = event.clientY - lastPointerY;
        lastPointerX = event.clientX;
        lastPointerY = event.clientY;

        // Direct 1:1 spin
        flaconRotY += dx * 0.009;
        flaconRotX += dy * 0.005;
        flaconRotX = THREE.MathUtils.clamp(flaconRotX, -0.30, 0.38);

        flaconVelY = dx * 0.009;
        flaconVelX = dy * 0.005;
    });

    window.addEventListener("pointerup", () => {
        if (isDraggingFlacon) {
            isDraggingFlacon = false;
        }
    });
}

function animateStudio() {
    requestAnimationFrame(animateStudio);

    if (studioFlaconGroup) {
        // Inertia Momentum Physics or Auto-Spin
        if (APP.studioAutoSpin && !isDraggingFlacon) {
            flaconRotY += 0.008;
            flaconRotX = THREE.MathUtils.lerp(flaconRotX, 0, 0.04);
        } else if (!isDraggingFlacon) {
            // Apply friction damping
            flaconVelY *= 0.92;
            flaconVelX *= 0.92;
            flaconRotY += flaconVelY;
            flaconRotX += flaconVelX;
            flaconRotX = THREE.MathUtils.clamp(flaconRotX, -0.30, 0.38);

            if (Math.abs(flaconVelX) < 0.001) {
                flaconRotX = THREE.MathUtils.lerp(flaconRotX, 0, 0.03);
            }
        }

        studioFlaconGroup.rotation.y = flaconRotY;
        studioFlaconGroup.rotation.x = flaconRotX;

        // Smooth Size Morphing Lerp
        currentFlaconScale.lerp(targetFlaconScale, 0.12);
        studioFlaconGroup.scale.copy(currentFlaconScale);
    }

    if (studioRenderer && studioScene && studioCamera) {
        studioRenderer.render(studioScene, studioCamera);
    }
}

// Toggle Auto 360 Spin
function toggleStudioSpin() {
    APP.studioAutoSpin = !APP.studioAutoSpin;
    playSfx('click');
    updateStudioSpinButtonUI();
    showToast(APP.studioAutoSpin ? "Auto 360° Spin On" : "Auto Spin Paused", "rotate-cw");
}

function updateStudioSpinButtonUI() {
    const btn = document.getElementById("studio-spin-btn");
    const label = document.getElementById("studio-spin-text");
    if (!btn || !label) return;

    if (APP.studioAutoSpin) {
        btn.classList.add("border-gold-400", "bg-gold-500/20", "text-white");
        label.innerText = "Auto Spin: ON";
    } else {
        btn.classList.remove("border-gold-400", "bg-gold-500/20", "text-white");
        label.innerText = "Auto Spin";
    }
}

function resetStudioView() {
    playSfx('click');
    flaconRotY = 0;
    flaconRotX = 0;
    flaconVelY = 0;
    flaconVelX = 0;
    APP.studioAutoSpin = true;
    updateStudioSpinButtonUI();
}

// Switch Fragrance in 3D Studio
function switchStudioScent(index) {
    APP.activeStudioPerfumeIndex = index;
    playSfx('click');

    const perfume = PERFUMES[index];
    const size = APP.activeStudioSize;

    // Update 3D Stage Flacon Plaque & Liquid Color
    buildStudioFlacon();

    // Update Underlight Color
    if (studioUnderlight) {
        studioUnderlight.color.setHex(perfume.liquidColor);
    }

    // Update Studio UI Texts
    document.getElementById("studio-title").innerText = perfume.name;
    document.getElementById("studio-tagline").innerText = `"${perfume.subtitle}"`;
    document.getElementById("studio-badge").innerText = perfume.badge;
    document.getElementById("studio-notes-preview").innerText = `${perfume.notes.top}, ${perfume.notes.heart}, ${perfume.notes.base}.`;
    
    // Select dropdown sync
    const selectEl = document.getElementById("studio-scent-select");
    if (selectEl) selectEl.value = index;

    // Update prices
    updateStudioPriceDisplay();

    // Update Aura Gradient
    const aura = document.getElementById("studio-aura-light");
    if (aura) {
        aura.className = `absolute inset-0 pointer-events-none opacity-40 mix-blend-screen transition-all duration-700 bg-radial ${perfume.auraGradient}`;
    }
}

// Switch Flacon Size (25ml / 50ml / 100ml) in 3D Studio
function selectStudioSize(size) {
    APP.activeStudioSize = size;
    playSfx('size-switch');

    // Update 3D Morphing Scale & Plaque Text
    applyFlaconSizeScaling(size, true);
    buildStudioFlacon(); // Re-renders plaque texture with "25 ML" / "50 ML" / "100 ML"

    // Update size pills UI
    [25, 50, 100].forEach(s => {
        const btn = document.getElementById(`studio-size-btn-${s}`);
        if (btn) {
            if (s === size) btn.classList.add("active");
            else btn.classList.remove("active");
        }
    });

    const perfume = PERFUMES[APP.activeStudioPerfumeIndex];
    document.getElementById("studio-selected-size-desc").innerText = perfume.sizes[size].title;
    document.getElementById("studio-flacon-size-badge").innerText = `${size} ML ${perfume.sizes[size].title.toUpperCase()}`;

    updateStudioPriceDisplay();
    showToast(`Selected ${size} ML ${perfume.sizes[size].title}`, "check");
}

function adjustStudioQty(delta) {
    APP.studioQty = Math.max(1, Math.min(10, APP.studioQty + delta));
    playSfx('click');
    document.getElementById("studio-qty-display").innerText = APP.studioQty;
    updateStudioPriceDisplay();
}

function updateStudioPriceDisplay() {
    const perfume = PERFUMES[APP.activeStudioPerfumeIndex];
    const unitPrice = perfume.prices[APP.activeStudioSize];
    const total = unitPrice * APP.studioQty;

    document.getElementById("studio-total-price").innerText = `₹${total.toLocaleString('en-IN')}`;
    document.getElementById("studio-btn-price-tag").innerText = `• ₹${total.toLocaleString('en-IN')}`;

    // Update individual size pill price tags
    [25, 50, 100].forEach(s => {
        const el = document.getElementById(`studio-size-price-${s}`);
        if (el) el.innerText = `₹${perfume.prices[s].toLocaleString('en-IN')}`;
    });
}

// Add Currently Configured Flacon to Bag
function addStudioFlaconToCart() {
    const perfume = PERFUMES[APP.activeStudioPerfumeIndex];
    addToCart(perfume.id, APP.activeStudioSize, APP.studioQty);
    playSfx('add-to-bag');
    openCartDrawer();
}

function quickOrderStudioWhatsApp() {
    const perfume = PERFUMES[APP.activeStudioPerfumeIndex];
    const size = APP.activeStudioSize;
    const unitPrice = perfume.prices[size];
    const total = unitPrice * APP.studioQty;

    const message = `*NEW ORDER - PERFUME KOMPANY*\n` +
        `----------------------------------------\n` +
        `✦ Item: ${perfume.name} (35% Pure Extrait)\n` +
        `✦ Volume: ${size} ML (${perfume.sizes[size].title})\n` +
        `✦ Quantity: ${APP.studioQty}\n` +
        `✦ Total Price: ₹${total.toLocaleString('en-IN')}\n` +
        `✦ Delivery: Free Express VIP Courier\n` +
        `----------------------------------------\n` +
        `Please confirm my order and share payment link / delivery details. Thank you!`;

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
                    <img src="${perfume.image}" alt="${perfume.name}" class="h-full w-auto object-contain filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)] transform group-hover:scale-105 transition-transform duration-500" loading="lazy">
                    
                    <span class="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono text-gold-400 font-bold border border-gold-500/30 uppercase tracking-widest">
                        ${perfume.badge}
                    </span>
                    <span class="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded-full text-[9px] font-mono text-emerald-400 font-bold border border-emerald-500/30 uppercase">
                        35% EXTRAIT
                    </span>

                    <button onclick="inspectInStudio(${originalIndex})" class="absolute bottom-3 right-3 glass-panel hover:bg-gold-500 hover:text-black text-gold-300 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1 transition shadow-lg" title="Inspect Flacon in 3D">
                        <i data-lucide="box" class="w-3.5 h-3.5"></i>
                        <span>3D View</span>
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
    playSfx('click');
    switchStudioScent(perfumeIndex);
    const studioSection = document.getElementById("studio-section");
    if (studioSection) {
        studioSection.scrollIntoView({ behavior: 'smooth' });
    }
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
                    <p class="text-xs text-gray-500 max-w-xs mx-auto">Explore our 5 signature extraits and acquire your fragrance in 25ml, 50ml, or 100ml.</p>
                </div>
            `;
        } else {
            container.innerHTML = APP.cart.map((item, idx) => `
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
            `).join("");
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
        showToast("Your bag is empty! Add a flacon first.", "alert-circle");
        return;
    }

    const subtotal = APP.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discount = APP.promoApplied ? Math.round(subtotal * APP.promoDiscountRate) : 0;
    const grandTotal = Math.max(0, subtotal - discount);

    let message = `*NEW ORDER - PERFUME KOMPANY OFFICIAL*\n`;
    message += `----------------------------------------\n`;
    APP.cart.forEach((item, i) => {
        message += `${i + 1}. *${item.name}* (${item.size}ML ${item.sizeLabel})\n`;
        message += `   Qty: ${item.qty} × ₹${item.price} = ₹${(item.qty * item.price).toLocaleString('en-IN')}\n`;
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
        message += `• ${item.name} (${item.size}ML) × ${item.qty} = ₹${(item.price * item.qty).toLocaleString('en-IN')}\n`;
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
// APPLICATION INITIALIZATION
// ==========================================
window.addEventListener("DOMContentLoaded", () => {
    loadCartFromStorage();
    init3DStudio();
    renderCollectionGrid('all');
    renderPyramidPills();
    switchPyramidScent(0);
    renderCartUI();

    // Trigger Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
