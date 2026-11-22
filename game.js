/**
 * PERFUME KOMPANY - 3D LUXURY HAUTE PARFUMERIE BOUTIQUE
 * 
 * High-End Professional Architecture:
 * 1. Minimalist entrance with 3D gold logo & refined "ENTER THE STORE" CTA.
 * 2. Mobile-first responsive 3D showroom with dynamic FOV calibration, bottom-sheet drawer,
 *    and touch swipe carousel navigation.
 * 3. Dedicated Back Button navigation (UI Back to Entrance, UI Back to Salon, and native browser/phone history popstate).
 * 4. High-Fidelity 3D Luxury Crystal Flacons with floating golden bokeh stardust & museum spotlights.
 * 5. Bespoke Shopping Bag & Cart Drawer with 50ml/100ml flacon size selection, live calculations,
 *    checkout modal, and 1-click WhatsApp order dispatch.
 */

// Global Game & Store State
const GAME = {
    mode: 'TITLE', // 'TITLE', 'STORE', 'INSPECT', 'DIALOGUE'
    soundEnabled: true,
    activePerfumeIndex: 0,
    selectedSize: 100, // 50 or 100 ML
    inspectQty: 1,
    turntableActive: false,
    ambienceMode: 0, // 0: Midnight Gold, 1: Noir Gala, 2: Emerald Royale
    cart: [],
    lastOrder: null
};

// 5 Real Extraits from Perfume Kompany (with 50ml and 100ml pricing)
const PERFUMES = [
    {
        id: 1,
        name: "ONE BILLION",
        subtitle: "The Signature Scent of Pure Wealth & Dominance",
        tag: "SLOT 01 // 35% EXTRAIT",
        prices: { 50: 125, 100: 165 },
        imageKey: 'one_billion',
        liquidColor: 0xd97706, // Rich Warm Amber Gold
        notes: {
            top: "Blood Mandarin, Frosted Grapefruit, Spiced Mint",
            heart: "Blonde Tuscan Leather, Cinnamon Bark, Rose Absolute",
            base: "Amber Ketals, White Woods, Indonesian Patchouli"
        },
        stats: { longevity: "16+ Hours (Eternal)", sillage: "Room-Filling (10/10)", danger: "35% Pure" },
        quote: "Heavy knurled gold cap, rich amber liquid. Blood mandarin over warm leather—one spray and you own the room."
    },
    {
        id: 2,
        name: "BLEU MIST",
        subtitle: "Aquatic Shockwave & High-Speed Midnight Cruising",
        tag: "SLOT 02 // 35% EXTRAIT",
        prices: { 50: 115, 100: 145 },
        imageKey: 'bleu_mist',
        liquidColor: 0x0084d1, // Vibrant Sapphire Blue
        notes: {
            top: "Sparkling Calabrian Bergamot, Marine Ozone, Sea Salt",
            heart: "Blue Cedar, French Lavender, Crushed Mint, Pink Pepper",
            base: "Pure Ambroxan, Mineral Moss, Smoked Ambergris"
        },
        stats: { longevity: "14+ Hours (Beast Fresh)", sillage: "Clean Shockwave (10/10)", danger: "35% Pure" },
        quote: "Electrifying sapphire blue flacon. Fresh, cold, unstoppable projection that cuts through the heat."
    },
    {
        id: 3,
        name: "PARADOXE",
        subtitle: "Luminous Emerald Extrait & Hypnotic Seduction",
        tag: "SLOT 03 // 35% EXTRAIT",
        prices: { 50: 135, 100: 175 },
        imageKey: 'paradoxe',
        liquidColor: 0x84cc16, // Radiant Emerald / Chartreuse Green
        notes: {
            top: "Neroli Bud Essence, Tangerine Zest, Crisp Pear",
            heart: "Bio-fermented Amber, White Jasmine Petals, Moss",
            base: "Bourbon Vanilla Infusion, Clean White Musk, Serenolide"
        },
        stats: { longevity: "15+ Hours (Hypnotic)", sillage: "Magnetic Aura (10/10)", danger: "35% Pure" },
        quote: "Vibrant chartreuse green flacon. An intoxicating floral-amber paradox that turns every head."
    },
    {
        id: 4,
        name: "10000 WISHES",
        subtitle: "Starry Night Glamour & Warm Seductive Euphoria",
        tag: "SLOT 04 // 35% EXTRAIT",
        prices: { 50: 120, 100: 155 },
        imageKey: 'wishes',
        liquidColor: 0xf59e0b, // Golden Honey Amber Glow
        notes: {
            top: "Sparkling Champagne, Starfruit, Pink Peony",
            heart: "Star Jasmine, Sugared Sandalwood, Night Amber",
            base: "Madagascar Vanilla Bean, Warm Tonka, Golden Musk"
        },
        stats: { longevity: "14+ Hours (Beast)", sillage: "Gourmand Cloud (9.9/10)", danger: "35% Pure" },
        quote: "Resting on black gold marble. A dazzling, euphoric night scent with warm vanilla and sparkling champagne."
    },
    {
        id: 5,
        name: "ETERNA FLORA",
        subtitle: "Timeless Haute Floral & Aristocratic Presence",
        tag: "SLOT 05 // 35% EXTRAIT",
        prices: { 50: 115, 100: 150 },
        imageKey: 'eterna_flora',
        liquidColor: 0xe2e8f0, // Diamond Crystal Platinum Champagne
        notes: {
            top: "White Peach, Italian Iris, Pink Peppercorn",
            heart: "May Rose de Grasse, Damask Rose, Royal Jasmine",
            base: "Smoked Vetiver, Grey Ambergris, Pure Cedar"
        },
        stats: { longevity: "16+ Hours (Imperial)", sillage: "Aristocratic Scent Trail (10/10)", danger: "35% Pure" },
        quote: "Crystal clear luxury flacon. Pure elegance engineered for gala nights and VIP lounges."
    }
];

// Audio Synthesizer Engine
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function playSfx(type) {
    if (!GAME.soundEnabled) return;
    initAudio();
    const now = audioCtx.currentTime;

    if (type === 'click') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(820, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.04);
        gain.gain.setValueAtTime(0.16, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
    } 
    else if (type === 'enter') {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.07);
            gain.gain.setValueAtTime(0.18, now + idx * 0.07);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.55);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now + idx * 0.07);
            osc.stop(now + idx * 0.07 + 0.55);
        });
    }
    else if (type === 'cart') {
        const chord = [659.25, 880.00, 1046.50];
        chord.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.06);
            gain.gain.setValueAtTime(0.15, now + idx * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.45);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now + idx * 0.06);
            osc.stop(now + idx * 0.06 + 0.45);
        });
    }
    else if (type === 'celebration') {
        const notes = [
            { f: 261.63, start: 0, dur: 0.2 },
            { f: 329.63, start: 0.2, dur: 0.2 },
            { f: 392.00, start: 0.4, dur: 0.24 },
            { f: 523.25, start: 0.65, dur: 0.9 }
        ];
        notes.forEach(n => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(n.f, now + n.start);
            gain.gain.setValueAtTime(0.22, now + n.start);
            gain.gain.exponentialRampToValueAtTime(0.01, now + n.start + n.dur);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now + n.start);
            osc.stop(now + n.start + n.dur);
        });
    }
}

function toggleSound() {
    GAME.soundEnabled = !GAME.soundEnabled;
    const titleIcon = document.getElementById("sound-icon-title");
    const storeIcon = document.getElementById("sound-icon-store");
    const iconName = GAME.soundEnabled ? "volume-2" : "volume-x";
    if (titleIcon) titleIcon.setAttribute("data-lucide", iconName);
    if (storeIcon) storeIcon.setAttribute("data-lucide", iconName);
    lucide.createIcons();
    showToast(GAME.soundEnabled ? "Audio Enabled" : "Audio Muted", GAME.soundEnabled ? "volume-2" : "volume-x");
}

// Three.js Scene Variables
let scene, camera, renderer, orbitControls;
let boutiqueGroup, bottleMeshes = [], bottleHolders = [], haloLights = [];
let coveLights = [], ceilingSpots = [], mainDirectionalLight, hemisphereLight;
let ambientStardust = null;
let clock = new THREE.Clock();
const textureLoader = new THREE.TextureLoader();

// Target Camera Positions for Smooth Gliding
const targetCamPos = new THREE.Vector3(0, 2.7, 9.8);
const targetLookAt = new THREE.Vector3(0, 1.8, 0);
let isTransitioningCam = false;

// Soft Golden Stardust / Amber Bokeh Particle Texture
function createBokehStardustTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255, 240, 180, 0.95)');
    grad.addColorStop(0.25, 'rgba(245, 208, 97, 0.70)');
    grad.addColorStop(0.55, 'rgba(212, 175, 55, 0.25)');
    grad.addColorStop(0.85, 'rgba(212, 175, 55, 0.05)');
    grad.addColorStop(1, 'rgba(212, 175, 55, 0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(canvas);
}

// Procedural Diamond Knurl Texture for the Gold Cap
function createDiamondKnurlTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 128, 128);

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.5;
    for (let i = -128; i < 256; i += 8) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + 128, 128);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(i, 128);
        ctx.lineTo(i + 128, 0);
        ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(12, 6);
    return texture;
}

// Procedural Bespoke Luxury Perfume Label Plaque (Front or Back)
function createProceduralBottleLabel(perfume, isBack = false) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 768;
    const ctx = canvas.getContext('2d');

    // Rich matte black leather/enamel background
    ctx.fillStyle = '#090a0d';
    ctx.fillRect(0, 0, 512, 768);

    // Fine leather/matte texture
    for (let i = 0; i < 6000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 768;
        const s = Math.random() > 0.5 ? 24 : 14;
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
        // Gold Bottle Icon Outline (Official PK Monogram Emblem)
        ctx.strokeStyle = '#f5d061';
        ctx.lineWidth = 3.5;
        ctx.strokeRect(238, 85, 36, 22);
        ctx.strokeRect(208, 112, 96, 110);

        // "PK" Monogram inside bottle
        ctx.font = 'bold 52px "Cinzel", "Times New Roman", serif';
        ctx.fillStyle = '#f5d061';
        ctx.textAlign = 'center';
        ctx.fillText('PK', 256, 192);

        // "PERFUME"
        ctx.font = '700 24px "Cinzel", "Times New Roman", serif';
        ctx.letterSpacing = '7px';
        ctx.fillStyle = '#f5d061';
        ctx.fillText('PERFUME', 256, 275);

        // "KOMPANY"
        ctx.font = '700 16px "Montserrat", sans-serif';
        ctx.letterSpacing = '8px';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('KOMPANY', 256, 305);

        // Gold Divider Line
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(170, 335);
        ctx.lineTo(342, 335);
        ctx.stroke();

        // Perfume Name (Bold Embossed Gold)
        ctx.font = '900 42px "Cinzel", "Impact", serif';
        ctx.fillStyle = '#f5d061';
        ctx.letterSpacing = '3px';
        ctx.fillText(perfume.name, 256, 435);

        // "Extrait De Parfum"
        ctx.font = 'italic 24px "Cinzel", "Georgia", serif';
        ctx.fillStyle = '#e2e8f0';
        ctx.fillText('Extrait De Parfum', 256, 500);

        // "35% PURE EXTRAIT"
        ctx.font = '700 20px "Montserrat", sans-serif';
        ctx.fillStyle = '#f5d061';
        ctx.letterSpacing = '5px';
        ctx.fillText('35% EXTRAIT', 256, 560);
    } else {
        // BACK FACE: COLLECTOR'S BATCH CERTIFICATE & GOLD BARCODE
        ctx.textAlign = 'center';

        // PK Monogram Seal
        ctx.font = 'bold 44px "Cinzel", serif';
        ctx.fillStyle = '#f5d061';
        ctx.fillText('PK', 256, 115);

        ctx.font = '700 18px "Montserrat", sans-serif';
        ctx.letterSpacing = '6px';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('PERFUME KOMPANY', 256, 155);

        // Divider
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(140, 180);
        ctx.lineTo(372, 180);
        ctx.stroke();

        // Certificate Details
        ctx.font = '600 17px "Montserrat", sans-serif';
        ctx.fillStyle = '#f5d061';
        ctx.letterSpacing = '3px';
        ctx.fillText('AUTHENTIC EXTRAIT', 256, 230);

        ctx.font = '400 15px "Montserrat", sans-serif';
        ctx.fillStyle = '#cbd5e1';
        ctx.letterSpacing = '1px';
        ctx.fillText('HAND-POURED IN SMALL BATCHES', 256, 268);
        ctx.fillText('35% ESSENTIAL OIL CONCENTRATION', 256, 298);
        ctx.fillText('NATURAL AGED EXTRACTS', 256, 328);

        ctx.font = '600 14px "Orbitron", monospace';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(`BATCH REF: PK-2026-0${perfume.id}`, 256, 388);
        ctx.fillText('FORMULATION: PRIVATE RESERVE', 256, 418);

        // Gold Barcode Graphics
        ctx.fillStyle = '#f5d061';
        const barXStart = 106;
        const barWidth = 300;
        const barHeights = [
            4, 2, 6, 2, 4, 8, 2, 4, 2, 6, 4, 2, 8, 4, 2, 6, 2, 4, 6, 2, 8, 4, 2, 4, 6, 2, 4, 8, 2, 4, 6, 2
        ];
        let currentX = barXStart;
        for (let i = 0; i < barHeights.length; i++) {
            const w = barHeights[i];
            ctx.fillRect(currentX, 475, w, 75);
            currentX += w + (i % 3 === 0 ? 6 : 3);
            if (currentX > barXStart + barWidth) break;
        }

        ctx.font = '600 13px "Orbitron", monospace';
        ctx.fillStyle = '#d4af37';
        ctx.letterSpacing = '4px';
        ctx.fillText(`7 93573 00${perfume.id}8 2`, 256, 580);

        ctx.font = 'italic 14px "Georgia", serif';
        ctx.fillStyle = '#64748b';
        ctx.letterSpacing = '1px';
        ctx.fillText('Private Boutique Collector Edition', 256, 645);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
}

// Studio Lighting Environment Map (PBR Reflections)
function setupStudioEnvironment() {
    try {
        const pmremGen = new THREE.PMREMGenerator(renderer);
        pmremGen.compileEquirectangularShader();

        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');

        const grad = ctx.createLinearGradient(0, 0, 0, 512);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.2, '#e2e8f0');
        grad.addColorStop(0.45, '#475569');
        grad.addColorStop(0.65, '#1e293b');
        grad.addColorStop(1, '#050507');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 1024, 512);

        // Softbox Key Light
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.ellipse(320, 150, 160, 80, 0, 0, Math.PI * 2);
        ctx.fill();

        // Warm Champagne Rim Light
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.ellipse(760, 170, 170, 90, 0, 0, Math.PI * 2);
        ctx.fill();

        // Overhead Strip Softbox
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(60, 35, 904, 45);

        const envTex = new THREE.CanvasTexture(canvas);
        envTex.mapping = THREE.EquirectangularReflectionMapping;
        const envMap = pmremGen.fromEquirectangular(envTex).texture;
        scene.environment = envMap;
        pmremGen.dispose();
    } catch (e) {
        console.warn("Studio PMREM fallback", e);
    }
}

// Floating Golden Stardust / Amber Bokeh Particle Engine
function buildAmbientStardust() {
    const particleCount = 280;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 22;     // X spread
        positions[i * 3 + 1] = 0.5 + Math.random() * 6.5; // Y height
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z depth

        velocities.push({
            vx: (Math.random() - 0.5) * 0.003,
            vy: 0.002 + Math.random() * 0.004,
            vz: (Math.random() - 0.5) * 0.003,
            phase: Math.random() * Math.PI * 2
        });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const texture = createBokehStardustTexture();
    const material = new THREE.PointsMaterial({
        map: texture,
        color: 0xfef08a,
        size: 0.32,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    ambientStardust = new THREE.Points(geometry, material);
    ambientStardust.velocities = velocities;
    scene.add(ambientStardust);
}

function init3D() {
    const container = document.getElementById("canvas-container");
    const width = window.innerWidth;
    const height = window.innerHeight;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050507);

    // Responsive FOV: 48° on mobile portrait, 38° on landscape/desktop
    const initialFov = width < height ? 48 : 38;
    camera = new THREE.PerspectiveCamera(initialFov, width / height, 0.1, 100);

    const isMobile = width < 640;
    if (isMobile) {
        targetCamPos.set(0, 3.2, 11.5);
    } else {
        targetCamPos.set(0, 2.7, 9.8);
    }
    camera.position.copy(targetCamPos);

    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    container.appendChild(renderer.domElement);

    // Interactive 360° OrbitControls
    if (typeof THREE.OrbitControls !== 'undefined') {
        orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
        orbitControls.enableDamping = true;
        orbitControls.dampingFactor = 0.08;
        orbitControls.enablePan = false;
        orbitControls.minDistance = 2.0;
        orbitControls.maxDistance = 16.0;
        orbitControls.minPolarAngle = Math.PI * 0.35;
        orbitControls.maxPolarAngle = Math.PI * 0.54;
        orbitControls.target.copy(targetLookAt);
        orbitControls.enabled = true;
    }

    // Museum Lighting
    hemisphereLight = new THREE.HemisphereLight(0xffedd5, 0x09090e, 1.25);
    scene.add(hemisphereLight);

    mainDirectionalLight = new THREE.DirectionalLight(0xfffbeb, 1.8);
    mainDirectionalLight.position.set(0, 12, 8);
    mainDirectionalLight.castShadow = true;
    mainDirectionalLight.shadow.mapSize.width = 2048;
    mainDirectionalLight.shadow.mapSize.height = 2048;
    scene.add(mainDirectionalLight);

    setupStudioEnvironment();
    buildFlagshipBoutique();
    buildAmbientStardust();

    window.addEventListener("resize", onWindowResize);
    window.addEventListener("orientationchange", () => setTimeout(onWindowResize, 150));
    setupInputListeners();
    setupHistoryNavigation();
    renderCartUI();
    animate();
}

// Build Flagship "PERFUME KOMPANY" Luxury Salon Architecture
function buildFlagshipBoutique() {
    boutiqueGroup = new THREE.Group();
    boutiqueGroup.position.set(0, 0, 0);

    // 1. Seamless Mirror-Polished Dark Obsidian Floor
    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(36, 26),
        new THREE.MeshStandardMaterial({
            color: 0x07080b,
            roughness: 0.14,
            metalness: 0.35
        })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0, 0);
    floor.receiveShadow = true;
    boutiqueGroup.add(floor);

    // 2. Architectural Luxury Arched Salon Wall
    const wallZ = -5.5;

    // Deep Smoked Charcoal Base Wall
    const backPanel = new THREE.Mesh(
        new THREE.PlaneGeometry(36, 12),
        new THREE.MeshStandardMaterial({ color: 0x08090d, roughness: 0.75 })
    );
    backPanel.position.set(0, 5, wallZ);
    boutiqueGroup.add(backPanel);

    // Architectural Arched Niches behind the pedestals
    const nicheXPositions = [-4.8, -2.4, 0.0, 2.4, 4.8];
    coveLights = [];
    nicheXPositions.forEach((nx) => {
        // Recessed Arch Panel
        const arch = new THREE.Mesh(
            new THREE.PlaneGeometry(2.1, 7.5),
            new THREE.MeshStandardMaterial({ color: 0x0e1017, roughness: 0.45 })
        );
        arch.position.set(nx, 4.2, wallZ + 0.05);
        boutiqueGroup.add(arch);

        // Thin Brushed Brass Molding Frame
        const frame = new THREE.Mesh(
            new THREE.BoxGeometry(2.15, 7.55, 0.04),
            new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.95, roughness: 0.25 })
        );
        frame.position.set(nx, 4.2, wallZ + 0.04);
        boutiqueGroup.add(frame);

        // Warm Golden Cove Wash Light
        const coveLight = new THREE.PointLight(0xfef08a, 1.4, 6);
        coveLight.position.set(nx, 7.5, wallZ + 0.3);
        boutiqueGroup.add(coveLight);
        coveLights.push(coveLight);
    });

    // Central Feature Emblem: Official 3D Gold Logo
    if (typeof PK_IMAGES !== 'undefined' && PK_IMAGES.pk_logo) {
        const logoTexture = textureLoader.load(PK_IMAGES.pk_logo);
        const backLogoMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(4.8, 4.8),
            new THREE.MeshBasicMaterial({ map: logoTexture })
        );
        backLogoMesh.position.set(0, 5.0, wallZ + 0.15);
        boutiqueGroup.add(backLogoMesh);
    }

    // 3. Side Walls with Subtle Warm Bronze Sconces
    [-18, 18].forEach(sideX => {
        const sideWall = new THREE.Mesh(
            new THREE.PlaneGeometry(26, 12),
            new THREE.MeshStandardMaterial({ color: 0x07080a, roughness: 0.85 })
        );
        sideWall.position.set(sideX, 5, 0);
        sideWall.rotation.y = sideX > 0 ? -Math.PI / 2 : Math.PI / 2;
        boutiqueGroup.add(sideWall);
    });

    // 4. Slender Architectural Satin Obsidian Pedestals & Real 3D Perfume Bottles
    const pedestalPositions = [
        { x: -4.8, z: -0.5 }, // 0: ONE BILLION
        { x: -2.4, z: 0.4 },  // 1: BLEU MIST
        { x: 0.0,  z: 0.8 },  // 2: PARADOXE (Centerpiece)
        { x: 2.4,  z: 0.4 },  // 3: 10000 WISHES
        { x: 4.8,  z: -0.5 }  // 4: ETERNA FLORA
    ];

    const plinthMat = new THREE.MeshStandardMaterial({
        color: 0x111216,
        roughness: 0.32,
        metalness: 0.22
    });

    const topGlassDiscMat = new THREE.MeshPhysicalMaterial({
        color: 0x0a0b0e,
        roughness: 0.04,
        metalness: 0.3,
        reflectivity: 0.95,
        clearcoat: 1.0
    });

    const goldBezelMat = new THREE.MeshStandardMaterial({
        color: 0xf5d061,
        metalness: 0.98,
        roughness: 0.15
    });

    ceilingSpots = [];
    haloLights = [];

    PERFUMES.forEach((perfume, i) => {
        const pos = pedestalPositions[i];
        const pedGroup = new THREE.Group();
        pedGroup.position.set(pos.x, 0, pos.z);

        // Slender Architectural Column Plinth (Radius: 0.72, Height: 1.5)
        const plinth = new THREE.Mesh(
            new THREE.CylinderGeometry(0.72, 0.78, 1.5, 64),
            plinthMat
        );
        plinth.position.y = 0.75;
        plinth.castShadow = true;
        pedGroup.add(plinth);

        // Polished Mirror Black Glass Top Plate
        const topDisc = new THREE.Mesh(
            new THREE.CylinderGeometry(0.70, 0.70, 0.035, 64),
            topGlassDiscMat
        );
        topDisc.position.y = 1.515;
        pedGroup.add(topDisc);

        // Razor-Thin Brushed 24K Gold Rim at Top
        const topRing = new THREE.Mesh(
            new THREE.TorusGeometry(0.72, 0.014, 16, 64),
            goldBezelMat
        );
        topRing.rotation.x = Math.PI / 2;
        topRing.position.y = 1.52;
        pedGroup.add(topRing);

        // Subtle Gold Trim Ring at Base
        const baseRing = new THREE.Mesh(
            new THREE.TorusGeometry(0.78, 0.014, 16, 64),
            goldBezelMat
        );
        baseRing.rotation.x = Math.PI / 2;
        baseRing.position.y = 0.04;
        pedGroup.add(baseRing);

        // Soft Color-Matched Under-Glow Halo Light
        const pedLight = new THREE.PointLight(perfume.liquidColor, 1.8, 4);
        pedLight.position.y = 1.62;
        pedGroup.add(pedLight);
        haloLights.push(pedLight);

        // Dedicated Museum Ceiling Spotlight onto each bottle
        const ceilingSpot = new THREE.SpotLight(0xffffff, 2.5, 14, Math.PI / 6, 0.35);
        ceilingSpot.position.set(pos.x, 8.5, pos.z + 1.6);
        ceilingSpot.target.position.set(pos.x, 2.1, pos.z);
        boutiqueGroup.add(ceilingSpot);
        boutiqueGroup.add(ceilingSpot.target);
        ceilingSpots.push(ceilingSpot);

        // True 3D Perfume Bottle Object
        const bottle = createReal3DPerfumeObject(perfume);
        bottle.position.y = 2.08;
        bottle.rotation.y = 0;
        pedGroup.add(bottle);

        bottleMeshes.push(bottle);
        bottleHolders.push(pedGroup);

        boutiqueGroup.add(pedGroup);
    });

    scene.add(boutiqueGroup);
}

// True 3D Perfume Bottle Object (Crystal Glass, Liquid Core, Cap & Gold Plaque)
function createReal3DPerfumeObject(perfume) {
    const group = new THREE.Group();

    // 1. Crystal Glass Outer Shell
    const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.38,
        roughness: 0.02,
        metalness: 0.05,
        reflectivity: 0.98,
        clearcoat: 1.0,
        clearcoatRoughness: 0.02,
        ior: 1.52,
        depthWrite: false,
        envMapIntensity: 2.2
    });
    const outerGlass = new THREE.Mesh(new THREE.BoxGeometry(0.92, 1.30, 0.44), glassMat);
    group.add(outerGlass);

    // Chamfered crystal edge shell
    const edgeGlassMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.18,
        roughness: 0.01,
        clearcoat: 1.0,
        depthWrite: false
    });
    const beveledRim = new THREE.Mesh(new THREE.BoxGeometry(0.94, 1.32, 0.46), edgeGlassMat);
    group.add(beveledRim);

    // 2. Thick Solid Crystal Glass Base
    const baseGlass = new THREE.Mesh(
        new THREE.BoxGeometry(0.93, 0.24, 0.45),
        new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.55,
            roughness: 0.02,
            reflectivity: 0.95,
            clearcoat: 1.0,
            depthWrite: false
        })
    );
    baseGlass.position.y = -0.53;
    group.add(baseGlass);

    // 3. Glowing Inner Liquid Core
    const liquidMat = new THREE.MeshPhysicalMaterial({
        color: perfume.liquidColor,
        transparent: true,
        opacity: 0.92,
        roughness: 0.06,
        metalness: 0.15,
        clearcoat: 1.0,
        clearcoatRoughness: 0.02,
        depthWrite: true
    });
    const liquid = new THREE.Mesh(new THREE.BoxGeometry(0.80, 0.94, 0.34), liquidMat);
    liquid.position.y = 0.08;
    group.add(liquid);

    // Internal radiance light
    const innerLight = new THREE.PointLight(perfume.liquidColor, 2.2, 3.5);
    innerLight.position.set(0, 0.1, 0);
    group.add(innerLight);

    // 4. White/Clear Dip Tube Inside Liquid
    const tubeMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.1,
        transparent: true,
        opacity: 0.55
    });
    const dipTube = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.96, 16), tubeMat);
    dipTube.position.set(0, 0.06, 0);
    group.add(dipTube);

    // Metallic Atomizer Pump Housing (inside neck)
    const pumpMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 0.16, 16),
        new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.95, roughness: 0.15 })
    );
    pumpMesh.position.y = 0.56;
    group.add(pumpMesh);

    // 5. Inset Black Leather & Gold Embossed Label Plaque (Front Face, facing +Z)
    const labelTex = createProceduralBottleLabel(perfume, false);
    const labelMat = new THREE.MeshStandardMaterial({
        map: labelTex,
        roughness: 0.35,
        metalness: 0.75
    });

    const goldBezelMat = new THREE.MeshStandardMaterial({
        color: 0xf5d061,
        metalness: 0.98,
        roughness: 0.15
    });
    const bezel = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.98, 0.01), goldBezelMat);
    bezel.position.set(0, 0.06, 0.222);
    group.add(bezel);

    const frontLabel = new THREE.Mesh(new THREE.PlaneGeometry(0.64, 0.96), labelMat);
    frontLabel.position.set(0, 0.06, 0.228);
    group.add(frontLabel);

    // Inset Back Collector Certificate Plaque (Back Face, facing -Z)
    const backLabelTex = createProceduralBottleLabel(perfume, true);
    const backLabelMat = new THREE.MeshStandardMaterial({
        map: backLabelTex,
        roughness: 0.35,
        metalness: 0.75
    });

    const backBezel = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.98, 0.01), goldBezelMat);
    backBezel.position.set(0, 0.06, -0.222);
    group.add(backBezel);

    const backLabel = new THREE.Mesh(new THREE.PlaneGeometry(0.64, 0.96), backLabelMat);
    backLabel.rotation.y = Math.PI;
    backLabel.position.set(0, 0.06, -0.228);
    group.add(backLabel);

    // 6. Polished 24K Mirror Gold Collar
    const collar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.22, 0.25, 0.14, 32),
        new THREE.MeshPhysicalMaterial({
            color: 0xf5d061,
            metalness: 0.98,
            roughness: 0.10,
            clearcoat: 1.0
        })
    );
    collar.position.y = 0.72;
    group.add(collar);

    // 7. Diamond-Knurled Gold Cap
    const capGroup = new THREE.Group();
    capGroup.position.set(0, 0.72, 0);

    const knurlTex = createDiamondKnurlTexture();
    const knurledCapMat = new THREE.MeshStandardMaterial({
        color: 0xf5d061,
        metalness: 0.98,
        roughness: 0.20,
        bumpMap: knurlTex,
        bumpScale: 0.05
    });

    const capBody = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.23, 0.32, 32), knurledCapMat);
    capBody.position.y = 0.23;
    capGroup.add(capBody);

    const lowerBand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.24, 0.24, 0.035, 32),
        goldBezelMat
    );
    lowerBand.position.y = 0.09;
    capGroup.add(lowerBand);

    const upperBand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.24, 0.24, 0.035, 32),
        goldBezelMat
    );
    upperBand.position.y = 0.37;
    capGroup.add(upperBand);

    const topCover = new THREE.Mesh(
        new THREE.CylinderGeometry(0.24, 0.24, 0.015, 32),
        goldBezelMat
    );
    topCover.position.y = 0.39;
    capGroup.add(topCover);

    group.add(capGroup);

    return group;
}

// Mobile Touch & Keyboard Interaction System
function setupInputListeners() {
    window.addEventListener("keydown", (e) => {
        const key = e.key.toLowerCase();
        if (key === 'escape') {
            closeAllDrawersAndModals();
        }
        else if (key === 'arrowright') {
            if (GAME.mode === 'STORE' || GAME.mode === 'INSPECT') nextPerfume();
        }
        else if (key === 'arrowleft') {
            if (GAME.mode === 'STORE' || GAME.mode === 'INSPECT') prevPerfume();
        }
    });

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    window.addEventListener("pointerdown", (event) => {
        touchStartX = event.clientX;
        touchStartY = event.clientY;
        touchStartTime = Date.now();
    }, { passive: true });

    window.addEventListener("pointerup", (event) => {
        if (GAME.mode !== 'STORE' && GAME.mode !== 'INSPECT') return;
        if (event.target.tagName === 'BUTTON' || event.target.closest('#inspect-panel, #cart-drawer, #checkout-modal, #dialogue-modal, #mission-passed-overlay')) return;

        const dx = event.clientX - touchStartX;
        const dy = event.clientY - touchStartY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const dt = Date.now() - touchStartTime;

        // Mobile Horizontal Swipe Gesture Detection
        if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.5 && dt < 450) {
            if (dx < 0) {
                nextPerfume(); // Swipe Left -> Next Flacon
            } else {
                prevPerfume(); // Swipe Right -> Prev Flacon
            }
            return;
        }

        // Tap Detection (< 14px movement and < 350ms duration)
        if (dist < 14 && dt < 350) {
            const rect = renderer.domElement.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(boutiqueGroup.children, true);

            if (intersects.length > 0) {
                for (let hit of intersects) {
                    for (let i = 0; i < bottleHolders.length; i++) {
                        if (hit.object === bottleHolders[i] || bottleHolders[i].getObjectById(hit.object.id)) {
                            inspectPerfume(i);
                            return;
                        }
                    }
                }
            }
        }
    });
}

// Browser History & Phone Hardware Back Button Handler
function setupHistoryNavigation() {
    window.addEventListener("popstate", (e) => {
        if (document.getElementById("checkout-modal") && !document.getElementById("checkout-modal").classList.contains("hidden")) {
            closeCheckoutModal();
            return;
        }
        if (document.getElementById("cart-drawer") && document.getElementById("cart-drawer").classList.contains("cart-open")) {
            closeCartDrawer();
            return;
        }
        if (document.getElementById("dialogue-modal") && !document.getElementById("dialogue-modal").classList.contains("hidden")) {
            closeDialogueModal();
            return;
        }
        if (GAME.mode === 'INSPECT') {
            closeInspectPanel();
            return;
        }
        if (GAME.mode === 'STORE') {
            returnToEntrance();
            return;
        }
    });
}

function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const time = clock.getElapsedTime();

    // Turntable Auto-Rotation or Idle Shimmer
    if (GAME.turntableActive && GAME.mode === 'INSPECT') {
        const currentBottle = bottleMeshes[GAME.activePerfumeIndex];
        if (currentBottle) {
            currentBottle.rotation.y += 0.012;
        }
    } else if (GAME.mode === 'INSPECT') {
        const currentBottle = bottleMeshes[GAME.activePerfumeIndex];
        if (currentBottle) {
            currentBottle.rotation.y += 0.002;
        }
    } else if (GAME.mode === 'STORE') {
        bottleMeshes.forEach((b, i) => {
            b.rotation.y += 0.006;
            b.position.y = 2.08 + Math.sin(time * 2 + i) * 0.02;
        });
    }

    // Drifting Golden Amber Stardust Animation
    if (ambientStardust) {
        const posArray = ambientStardust.geometry.attributes.position.array;
        const vels = ambientStardust.velocities;
        for (let i = 0; i < vels.length; i++) {
            posArray[i * 3 + 1] += vels[i].vy;
            posArray[i * 3] += Math.sin(time * 0.5 + vels[i].phase) * 0.003;

            // Loop back to floor when drifting too high
            if (posArray[i * 3 + 1] > 7.5) {
                posArray[i * 3 + 1] = 0.5;
            }
        }
        ambientStardust.geometry.attributes.position.needsUpdate = true;
    }

    // Smooth camera glide
    if (isTransitioningCam) {
        camera.position.lerp(targetCamPos, 0.08);
        if (camera.position.distanceTo(targetCamPos) < 0.03) {
            camera.position.copy(targetCamPos);
            isTransitioningCam = false;
            if (orbitControls) {
                orbitControls.target.copy(targetLookAt);
                orbitControls.enabled = true;
                orbitControls.update();
            }
        }
    }

    if (orbitControls && orbitControls.enabled) {
        orbitControls.update();
    }

    renderer.render(scene, camera);
}

// Enter the Flagship Store of Perfume Kompany
function enterStore() {
    initAudio();
    playSfx('enter');

    // Push history state so back button works!
    try {
        window.history.pushState({ view: 'store' }, '');
    } catch (e) {}

    const fader = document.getElementById("screen-fader");
    fader.classList.remove("opacity-0", "pointer-events-none");
    fader.classList.add("opacity-100");

    setTimeout(() => {
        const titleScreen = document.getElementById("title-screen");
        titleScreen.classList.add("hidden");

        const storeHud = document.getElementById("store-hud");
        storeHud.classList.remove("hidden");

        GAME.mode = 'STORE';

        const isMobile = window.innerWidth < 640;
        targetCamPos.set(0, isMobile ? 3.2 : 2.7, isMobile ? 12.5 : 9.8);
        targetLookAt.set(0, 1.8, 0);
        camera.position.copy(targetCamPos);
        if (orbitControls) {
            orbitControls.target.copy(targetLookAt);
            orbitControls.minDistance = 2.2;
            orbitControls.maxDistance = 16.0;
            orbitControls.enabled = true;
        }

        fader.classList.remove("opacity-100");
        fader.classList.add("opacity-0", "pointer-events-none");
    }, 600);
}

// Return to Entrance Landing Screen (Back Button Handler)
function returnToEntrance() {
    playSfx('click');
    closeAllDrawersAndModals();

    const fader = document.getElementById("screen-fader");
    fader.classList.remove("opacity-0", "pointer-events-none");
    fader.classList.add("opacity-100");

    setTimeout(() => {
        const storeHud = document.getElementById("store-hud");
        storeHud.classList.add("hidden");

        const titleScreen = document.getElementById("title-screen");
        titleScreen.classList.remove("hidden");

        GAME.mode = 'TITLE';

        // Reset camera
        targetCamPos.set(0, 2.7, 9.8);
        targetLookAt.set(0, 1.8, 0);
        camera.position.copy(targetCamPos);

        fader.classList.remove("opacity-100");
        fader.classList.add("opacity-0", "pointer-events-none");
    }, 500);
}

// Reset to Overview Grand Salon View
function resetToOverviewCamera() {
    playSfx('click');
    closeInspectPanel();
    closeCartDrawer();
    const isMobile = window.innerWidth < 640;
    targetCamPos.set(0, isMobile ? 3.2 : 2.7, isMobile ? 12.5 : 9.8);
    targetLookAt.set(0, 1.8, 0);
    isTransitioningCam = true;

    bottleMeshes.forEach(b => {
        b.rotation.y = 0;
    });

    if (orbitControls) {
        orbitControls.enabled = false;
        orbitControls.minDistance = 2.2;
        orbitControls.maxDistance = 16.0;
    }
}

// Toggle Turntable Continuous Auto-Rotation
function toggleTurntable() {
    GAME.turntableActive = !GAME.turntableActive;
    playSfx('click');
    const btn = document.getElementById("turntable-btn");
    if (btn) {
        if (GAME.turntableActive) {
            btn.classList.add("border-gold-500", "text-gold-400");
            showToast("Auto 360° Turntable Active", "rotate-cw");
        } else {
            btn.classList.remove("border-gold-500", "text-gold-400");
            showToast("Turntable Paused", "pause");
        }
    }
}

// Next / Previous Flacon Carousel Navigation
function nextPerfume() {
    const nextIdx = (GAME.activePerfumeIndex + 1) % PERFUMES.length;
    inspectPerfume(nextIdx);
}

function prevPerfume() {
    const prevIdx = (GAME.activePerfumeIndex - 1 + PERFUMES.length) % PERFUMES.length;
    inspectPerfume(prevIdx);
}

// Inspect Selected Perfume in 360° Real 3D (Calibrated for Mobile & Desktop)
function inspectPerfume(index) {
    GAME.mode = 'INSPECT';
    GAME.activePerfumeIndex = index;
    GAME.inspectQty = 1;
    const perfume = PERFUMES[index];
    playSfx('click');

    // Push history state so back button works!
    try {
        window.history.pushState({ view: 'inspect', index }, '');
    } catch (e) {}

    // Reset rotation of other bottles
    bottleMeshes.forEach((b, idx) => {
        if (idx !== index) b.rotation.y = 0;
    });

    const bottle = bottleMeshes[index];
    if (bottle) {
        const worldPos = new THREE.Vector3();
        bottle.getWorldPosition(worldPos);

        const isMobile = window.innerWidth < 640;
        // On mobile, frame the camera slightly lower in lookAt so the bottle rises into the open top sky above the bottom sheet
        targetCamPos.set(
            isMobile ? worldPos.x : worldPos.x - 0.35, 
            worldPos.y + (isMobile ? -0.35 : 0.12), 
            worldPos.z + (isMobile ? 3.4 : 3.1)
        );
        targetLookAt.set(
            worldPos.x, 
            worldPos.y + (isMobile ? -0.65 : 0.05), 
            worldPos.z
        );
        isTransitioningCam = true;

        if (orbitControls) {
            orbitControls.enabled = false;
            orbitControls.minDistance = 1.8;
            orbitControls.maxDistance = isMobile ? 5.5 : 5.0;
        }

        applyBottleScale(bottle, GAME.selectedSize);
    }

    // Highlight bottom scent selector pill
    for (let i = 0; i < 5; i++) {
        const btn = document.getElementById(`scent-btn-${i}`);
        if (btn) {
            if (i === index) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        }
    }

    // Show floating back button
    const backBtn = document.getElementById("floating-back-btn");
    if (backBtn) backBtn.classList.remove("hidden");

    const panel = document.getElementById("inspect-panel");
    panel.classList.remove("hidden");

    // Populate inspect panel contents
    document.getElementById("inspect-tag").innerText = `SLOT 0${index + 1} // ${GAME.selectedSize} ML EXTRAIT`;
    document.getElementById("inspect-name").innerText = perfume.name;
    document.getElementById("inspect-subtitle").innerText = perfume.subtitle;
    document.getElementById("inspect-top").innerText = perfume.notes.top;
    document.getElementById("inspect-heart").innerText = perfume.notes.heart;
    document.getElementById("inspect-base").innerText = perfume.notes.base;
    document.getElementById("inspect-longevity").innerText = perfume.stats.longevity;
    document.getElementById("inspect-sillage").innerText = perfume.stats.sillage;
    document.getElementById("inspect-danger").innerText = perfume.stats.danger;

    // Prices for 50ml and 100ml
    document.getElementById("size-price-50").innerText = `$${perfume.prices[50]}`;
    document.getElementById("size-price-100").innerText = `$${perfume.prices[100]}`;
    updateInspectPriceDisplay();

    const imgEl = document.getElementById("inspect-bottle-img");
    if (imgEl && typeof PK_IMAGES !== 'undefined') {
        imgEl.src = PK_IMAGES[perfume.imageKey];
        imgEl.alt = perfume.name;
    }
}

function applyBottleScale(bottle, size) {
    if (!bottle) return;
    const targetScale = size === 50 ? 0.88 : 1.0;
    bottle.scale.set(targetScale, targetScale, targetScale);
}

// Select Flacon Volume (50 ML vs 100 ML)
function selectBottleSize(size) {
    GAME.selectedSize = size;
    playSfx('click');

    const btn50 = document.getElementById("size-btn-50");
    const btn100 = document.getElementById("size-btn-100");
    if (size === 50) {
        btn50.classList.add("active");
        btn100.classList.remove("active");
    } else {
        btn100.classList.add("active");
        btn50.classList.remove("active");
    }

    const currentBottle = bottleMeshes[GAME.activePerfumeIndex];
    applyBottleScale(currentBottle, size);

    document.getElementById("inspect-tag").innerText = `SLOT 0${GAME.activePerfumeIndex + 1} // ${size} ML EXTRAIT`;
    updateInspectPriceDisplay();
    showToast(`Selected ${size} ML Flacon`, "check");
}

function adjustInspectQty(delta) {
    GAME.inspectQty = Math.max(1, Math.min(10, GAME.inspectQty + delta));
    playSfx('click');
    document.getElementById("inspect-qty").innerText = GAME.inspectQty;
    updateInspectPriceDisplay();
}

function updateInspectPriceDisplay() {
    const perfume = PERFUMES[GAME.activePerfumeIndex];
    const unitPrice = perfume.prices[GAME.selectedSize];
    const total = unitPrice * GAME.inspectQty;
    document.getElementById("inspect-price").innerText = `$${total}`;
}

function closeInspectPanel() {
    playSfx('click');
    document.getElementById("inspect-panel").classList.add("hidden");
    const backBtn = document.getElementById("floating-back-btn");
    if (backBtn) backBtn.classList.add("hidden");

    GAME.mode = 'STORE';

    for (let i = 0; i < 5; i++) {
        const btn = document.getElementById(`scent-btn-${i}`);
        if (btn) btn.classList.remove("active");
    }

    // Reset camera to wide overview
    const isMobile = window.innerWidth < 640;
    targetCamPos.set(0, isMobile ? 3.2 : 2.7, isMobile ? 12.5 : 9.8);
    targetLookAt.set(0, 1.8, 0);
    isTransitioningCam = true;
    if (orbitControls) {
        orbitControls.enabled = false;
        orbitControls.minDistance = 2.2;
        orbitControls.maxDistance = 16.0;
    }
}

// Ambience Mood Lighting Switcher
function cycleAmbience() {
    GAME.ambienceMode = (GAME.ambienceMode + 1) % 3;
    playSfx('click');
    const label = document.getElementById("ambience-label");

    if (GAME.ambienceMode === 0) {
        if (label) label.innerText = "Midnight Gold";
        coveLights.forEach(l => l.color.setHex(0xfef08a));
        if (mainDirectionalLight) {
            mainDirectionalLight.color.setHex(0xfffbeb);
            mainDirectionalLight.intensity = 1.8;
        }
        showToast("Ambience: Midnight Gold", "sparkles");
    } else if (GAME.ambienceMode === 1) {
        if (label) label.innerText = "Noir Gala";
        coveLights.forEach(l => l.color.setHex(0x94a3b8));
        if (mainDirectionalLight) {
            mainDirectionalLight.color.setHex(0xffffff);
            mainDirectionalLight.intensity = 2.4;
        }
        showToast("Ambience: Noir Gala", "moon");
    } else if (GAME.ambienceMode === 2) {
        if (label) label.innerText = "Emerald Royale";
        coveLights.forEach(l => l.color.setHex(0x86efac));
        if (mainDirectionalLight) {
            mainDirectionalLight.color.setHex(0xfef08a);
            mainDirectionalLight.intensity = 1.7;
        }
        showToast("Ambience: Emerald Royale", "gem");
    }
}

// ==========================================
// SHOPPING BAG / CART MANAGEMENT SYSTEM
// ==========================================
function addCurrentToCart() {
    const perfume = PERFUMES[GAME.activePerfumeIndex];
    const size = GAME.selectedSize;
    const price = perfume.prices[size];
    const qty = GAME.inspectQty;

    const existing = GAME.cart.find(item => item.id === perfume.id && item.size === `${size} ML`);
    if (existing) {
        existing.quantity += qty;
    } else {
        GAME.cart.push({
            id: perfume.id,
            name: perfume.name,
            subtitle: perfume.subtitle,
            size: `${size} ML`,
            price: price,
            quantity: qty,
            imageKey: perfume.imageKey,
            liquidColor: perfume.liquidColor
        });
    }

    playSfx('cart');
    renderCartUI();
    showToast(`Added ${perfume.name} (${size} ML) to Bag!`, "shopping-bag");
}

function buyNowCurrent() {
    addCurrentToCart();
    closeInspectPanel();
    openCheckoutModal();
}

function updateCartQuantity(cartIndex, delta) {
    playSfx('click');
    if (GAME.cart[cartIndex]) {
        GAME.cart[cartIndex].quantity += delta;
        if (GAME.cart[cartIndex].quantity <= 0) {
            GAME.cart.splice(cartIndex, 1);
        }
        renderCartUI();
    }
}

function removeFromCart(cartIndex) {
    playSfx('click');
    if (GAME.cart[cartIndex]) {
        const removedName = GAME.cart[cartIndex].name;
        GAME.cart.splice(cartIndex, 1);
        renderCartUI();
        showToast(`Removed ${removedName} from Bag`, "trash-2");
    }
}

function getCartItemCount() {
    return GAME.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotal() {
    return GAME.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderCartUI() {
    const count = getCartItemCount();
    const total = getCartTotal();

    const navCountEl = document.getElementById("cart-nav-count");
    if (navCountEl) navCountEl.innerText = `BAG (${count})`;

    const subCountEl = document.getElementById("cart-item-count-sub");
    if (subCountEl) subCountEl.innerText = `${count} ${count === 1 ? 'ITEM' : 'ITEMS'} SELECTED`;

    const subtotalEl = document.getElementById("cart-subtotal");
    if (subtotalEl) subtotalEl.innerText = `$${total}`;

    const totalEl = document.getElementById("cart-total");
    if (totalEl) totalEl.innerText = `$${total}`;

    const checkoutTotalPreview = document.getElementById("checkout-total-preview");
    if (checkoutTotalPreview) checkoutTotalPreview.innerText = `$${total}`;

    const checkoutItemCount = document.getElementById("checkout-item-count");
    if (checkoutItemCount) checkoutItemCount.innerText = count;

    const listEl = document.getElementById("cart-items-list");
    if (!listEl) return;

    if (GAME.cart.length === 0) {
        listEl.innerHTML = `
            <div class="h-56 sm:h-64 flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 text-gray-400">
                <div class="p-4 sm:p-5 rounded-full bg-white/5 border border-white/10 text-gold-400/60">
                    <i data-lucide="shopping-bag" class="w-8 h-8 sm:w-10 sm:h-10"></i>
                </div>
                <div>
                    <h4 class="font-['Cinzel'] text-white text-sm sm:text-base font-bold">Your Bag is Empty</h4>
                    <p class="text-[11px] sm:text-xs text-gray-500 mt-1 max-w-xs">Explore the 3D flacons and select your signature extrait de parfum.</p>
                </div>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    listEl.innerHTML = GAME.cart.map((item, idx) => `
        <div class="bg-black/60 p-3 sm:p-4 rounded-2xl border border-white/10 flex items-center justify-between space-x-3">
            <div class="flex items-center space-x-3">
                <div class="w-14 h-16 sm:w-16 sm:h-20 bg-black/80 rounded-xl border border-gold-500/30 flex items-center justify-center p-1 shrink-0 overflow-hidden">
                    <img src="${PK_IMAGES[item.imageKey]}" alt="${item.name}" class="h-full w-auto object-contain filter drop-shadow">
                </div>
                <div>
                    <h4 class="font-['Cinzel'] text-xs sm:text-sm font-black text-white">${item.name}</h4>
                    <span class="text-[9px] sm:text-[10px] text-gold-400 font-bold block uppercase tracking-wider">${item.size} • 35% Extrait</span>
                    <span class="font-mono text-[11px] sm:text-xs text-gray-300 font-bold mt-0.5 block">$${item.price} each</span>
                </div>
            </div>

            <div class="flex flex-col items-end space-y-1.5 sm:space-y-2">
                <button onclick="removeFromCart(${idx})" class="text-gray-500 hover:text-red-400 transition p-1">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                </button>
                <div class="flex items-center space-x-2 bg-white/5 px-2 py-0.5 sm:py-1 rounded-lg border border-white/10 text-xs">
                    <button onclick="updateCartQuantity(${idx}, -1)" class="text-gray-400 hover:text-white px-1 font-bold">-</button>
                    <span class="font-mono font-bold text-white w-3 text-center text-xs">${item.quantity}</span>
                    <button onclick="updateCartQuantity(${idx}, 1)" class="text-gray-400 hover:text-white px-1 font-bold">+</button>
                </div>
                <span class="font-mono text-xs font-black text-gold-400">$${item.price * item.quantity}</span>
            </div>
        </div>
    `).join("");

    lucide.createIcons();
}

function openCartDrawer() {
    playSfx('click');
    const drawer = document.getElementById("cart-drawer");
    drawer.classList.remove("cart-closed");
    drawer.classList.add("cart-open");
    renderCartUI();

    try {
        window.history.pushState({ view: 'cart' }, '');
    } catch (e) {}
}

function closeCartDrawer() {
    playSfx('click');
    const drawer = document.getElementById("cart-drawer");
    drawer.classList.remove("cart-open");
    drawer.classList.add("cart-closed");
}

function openCheckoutModal() {
    if (GAME.cart.length === 0) {
        showToast("Your bag is empty! Add a flacon first.", "alert-circle");
        return;
    }
    playSfx('click');
    closeCartDrawer();
    document.getElementById("checkout-modal").classList.remove("hidden");
    try {
        window.history.pushState({ view: 'checkout' }, '');
    } catch (e) {}
}

function closeCheckoutModal() {
    playSfx('click');
    document.getElementById("checkout-modal").classList.add("hidden");
}

function handleOrderSubmit(event) {
    if (event) event.preventDefault();
    if (GAME.cart.length === 0) {
        showToast("Your bag is empty!", "alert-circle");
        return;
    }

    const name = document.getElementById("cust-name").value || "Valued Collector";
    const orderId = `PK-${Math.floor(10000 + Math.random() * 90000)}`;
    const total = getCartTotal();

    GAME.lastOrder = {
        orderId,
        name,
        items: [...GAME.cart],
        total
    };

    closeCheckoutModal();
    closeCartDrawer();

    GAME.cart = [];
    renderCartUI();

    playSfx('celebration');
    triggerOrderCelebration(GAME.lastOrder);
}

function orderViaWhatsApp() {
    if (GAME.cart.length === 0) {
        showToast("Your bag is empty! Add a flacon first.", "alert-circle");
        return;
    }

    const name = document.getElementById("cust-name").value || "Valued Collector";
    const phone = document.getElementById("cust-phone").value || "N/A";
    const city = document.getElementById("cust-city").value || "N/A";
    const address = document.getElementById("cust-address").value || "N/A";
    const total = getCartTotal();

    const itemsText = GAME.cart.map((item, idx) => 
        `  ${idx + 1}. *${item.name}* (${item.size}) x${item.quantity} - $${item.price * item.quantity}`
    ).join("\n");

    const message = 
`👑 *PERFUME KOMPANY - BESPOKE ORDER INQUIRY* 👑
---------------------------------------
👤 *Collector:* ${name}
📞 *Contact:* ${phone}
📍 *Delivery Address:* ${address}, ${city}
---------------------------------------
🛍️ *Selected Extraits:*
${itemsText}
---------------------------------------
💎 *Total Value:* $${total}
🚚 *Shipping:* Complimentary VIP Courier
✨ *Quality:* 35% Pure Extrait De Parfum
---------------------------------------
Please confirm order dispatch. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
}

function sendOrderReceiptWhatsApp() {
    if (!GAME.lastOrder) return;
    const order = GAME.lastOrder;
    const itemsText = order.items.map((item, idx) => 
        `  ${idx + 1}. *${item.name}* (${item.size}) x${item.quantity} - $${item.price * item.quantity}`
    ).join("\n");

    const message = 
`👑 *PERFUME KOMPANY - ORDER CONFIRMATION* 👑
---------------------------------------
🔖 *Order Ref:* #${order.orderId}
👤 *Collector:* ${order.name}
---------------------------------------
🛍️ *Dispatched Extraits:*
${itemsText}
---------------------------------------
💎 *Total Paid:* $${order.total}
✨ *Status:* Dispatched via Private Courier
---------------------------------------
Thank you for acquiring Perfume Kompany!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
}

function triggerOrderCelebration(order) {
    const overlay = document.getElementById("mission-passed-overlay");
    const banner = document.getElementById("mission-passed-banner");

    overlay.classList.remove("hidden", "opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-100", "pointer-events-auto");

    banner.classList.remove("scale-75");
    banner.classList.add("scale-100");

    document.getElementById("passed-order-id").innerText = `ORDER REF: #${order.orderId}`;
    document.getElementById("passed-product-name").innerText = `${order.items.length} BESPOKE EXTRAIT(S) SECURED`;

    const victoryImg = document.getElementById("passed-bottle-img");
    if (victoryImg && order.items.length > 0 && typeof PK_IMAGES !== 'undefined') {
        victoryImg.src = PK_IMAGES[order.items[0].imageKey];
    }
}

function closeMissionPassed() {
    playSfx('click');
    const overlay = document.getElementById("mission-passed-overlay");
    overlay.classList.add("opacity-0", "pointer-events-none");
    setTimeout(() => overlay.classList.add("hidden"), 300);
}

function closeAllDrawersAndModals() {
    if (GAME.mode === 'INSPECT') closeInspectPanel();
    closeCartDrawer();
    closeCheckoutModal();
    closeDialogueModal();
}

// Toast Notification System
function showToast(message, icon = 'check-circle') {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast-enter glass-panel border border-gold-500/60 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center space-x-2.5 sm:space-x-3 text-[11px] sm:text-xs font-bold text-white pointer-events-auto";
    toast.innerHTML = `
        <i data-lucide="${icon}" class="w-4 h-4 text-gold-400 shrink-0"></i>
        <span>${message}</span>
    `;
    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
        toast.classList.remove("toast-enter");
        toast.classList.add("toast-exit");
        setTimeout(() => toast.remove(), 320);
    }, 2800);
}

// Theo The Perfumer Scent Recommendation Concierge
function openDialogueModal() {
    GAME.mode = 'DIALOGUE';
    playSfx('click');
    document.getElementById("dialogue-modal").classList.remove("hidden");
    showDialogueStage(1);
}

function showDialogueStage(stage) {
    const speakerEl = document.getElementById("dialogue-speaker");
    const textEl = document.getElementById("dialogue-text");
    const optionsEl = document.getElementById("dialogue-options");

    if (stage === 1) {
        speakerEl.innerText = "THEO (MASTER PERFUMER)";
        textEl.innerText = "Welcome to Perfume Kompany! Every extrait here is hand-poured at 35% concentration. What kind of presence are you aiming to command?";
        optionsEl.innerHTML = `
            <button onclick="showDialogueStage(2)" class="w-full text-left bg-black/60 hover:bg-gold-500 hover:text-black p-2.5 sm:p-3 rounded-xl border border-white/10 transition text-[11px] sm:text-xs font-semibold">
                1. "I need something that screams wealth, success, and pure dominance."
            </button>
            <button onclick="showDialogueStage(3)" class="w-full text-left bg-black/60 hover:bg-gold-500 hover:text-black p-2.5 sm:p-3 rounded-xl border border-white/10 transition text-[11px] sm:text-xs font-semibold">
                2. "Give me your coldest, freshest shockwave for evening outings."
            </button>
            <button onclick="showDialogueStage(4)" class="w-full text-left bg-black/60 hover:bg-gold-500 hover:text-black p-2.5 sm:p-3 rounded-xl border border-white/10 transition text-[11px] sm:text-xs font-semibold">
                3. "Something avant-garde, emerald, and hypnotic that turns every head."
            </button>
            <button onclick="showDialogueStage(5)" class="w-full text-left bg-black/60 hover:bg-gold-500 hover:text-black p-2.5 sm:p-3 rounded-xl border border-white/10 transition text-[11px] sm:text-xs font-semibold">
                4. "Show me the star-dusted glamorous evening scent (10000 Wishes)."
            </button>
            <button onclick="showDialogueStage(6)" class="w-full text-left bg-black/60 hover:bg-gold-500 hover:text-black p-2.5 sm:p-3 rounded-xl border border-white/10 transition text-[11px] sm:text-xs font-semibold">
                5. "An aristocratic, timeless floral extrait for formal gala nights."
            </button>
        `;
    } else if (stage === 2) {
        speakerEl.innerText = "THEO (MASTER PERFUMER)";
        textEl.innerText = "\"Say less, I got you. ONE BILLION. Blood Mandarin over Tuscan Leather and Blonde Woods. They'll smell you before you even enter the door.\"";
        optionsEl.innerHTML = `
            <button onclick="inspectPerfume(0); closeDialogueModal();" class="w-full bg-gold-500 text-black font-extrabold p-3 rounded-xl uppercase text-xs">
                Inspect ONE BILLION Pedestal
            </button>
        `;
    } else if (stage === 3) {
        speakerEl.innerText = "THEO (MASTER PERFUMER)";
        textEl.innerText = "\"Say less, I got you. BLEU MIST. Marine ozone, blue cedar, and ambroxan. 14-hour ice projection that cuts through the night air.\"";
        optionsEl.innerHTML = `
            <button onclick="inspectPerfume(1); closeDialogueModal();" class="w-full bg-blue-600 text-white font-extrabold p-3 rounded-xl uppercase text-xs">
                Inspect BLEU MIST Pedestal
            </button>
        `;
    } else if (stage === 4) {
        speakerEl.innerText = "THEO (MASTER PERFUMER)";
        textEl.innerText = "\"Say less, I got you. PARADOXE. Electric emerald flacon with neroli bud and bio-amber. An irresistible magnetic paradox.\"";
        optionsEl.innerHTML = `
            <button onclick="inspectPerfume(2); closeDialogueModal();" class="w-full bg-lime-500 text-black font-extrabold p-3 rounded-xl uppercase text-xs">
                Inspect PARADOXE Pedestal
            </button>
        `;
    } else if (stage === 5) {
        speakerEl.innerText = "THEO (MASTER PERFUMER)";
        textEl.innerText = "\"Say less, I got you. 10000 WISHES. Sparkling champagne and warm amber woods. Pure euphoria.\"";
        optionsEl.innerHTML = `
            <button onclick="inspectPerfume(3); closeDialogueModal();" class="w-full bg-amber-500 text-black font-extrabold p-3 rounded-xl uppercase text-xs">
                Inspect 10000 WISHES Pedestal
            </button>
        `;
    } else if (stage === 6) {
        speakerEl.innerText = "THEO (MASTER PERFUMER)";
        textEl.innerText = "\"Say less, I got you. ETERNA FLORA. Italian iris, May Rose de Grasse, and grey ambergris. Regal elegance in crystal.\"";
        optionsEl.innerHTML = `
            <button onclick="inspectPerfume(4); closeDialogueModal();" class="w-full bg-slate-300 text-black font-extrabold p-3 rounded-xl uppercase text-xs">
                Inspect ETERNA FLORA Pedestal
            </button>
        `;
    }
}

function closeDialogueModal() {
    playSfx('click');
    document.getElementById("dialogue-modal").classList.add("hidden");
    GAME.mode = 'STORE';
}

function onWindowResize() {
    const container = document.getElementById("canvas-container");
    if (!container || !camera || !renderer) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;

    // Dynamically adjust FOV based on aspect ratio
    if (camera.aspect < 1.0) {
        camera.fov = 52; // Mobile portrait
    } else {
        camera.fov = 38; // Desktop landscape
    }
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (GAME.mode === 'STORE') {
        const isMobile = width < 640;
        targetCamPos.set(0, isMobile ? 3.2 : 2.7, isMobile ? 12.5 : 9.8);
        targetLookAt.set(0, 1.8, 0);
        camera.position.copy(targetCamPos);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    init3D();
});
