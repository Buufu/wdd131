// Shared JS for Swimming World

// Tip object and display function
const swimmingTip = {
    title: "Swimming Tip",
    text: "Practice breathing techniques regularly to improve endurance and relaxation in the water."
};
function displayTip() {
    const tipEl = document.querySelector('#tip');
    if (tipEl) tipEl.textContent = swimmingTip.text;
}

// Strokes array and populate function for techniques
const strokes = [
    "Freestyle",
    "Breaststroke",
    "Backstroke",
    "Butterfly"
];
const strokeImages = {
    Freestyle: "images/freestyle.jpg",
    Breaststroke: "images/breaststroke.webp",
    Backstroke: "images/backstroke.jpg",
    Butterfly: "images/butterfly.jpg"
};
function populateStrokes() {
    const container = document.querySelector('#strokes') || document.querySelector('#featured-list');
    if (!container) return;
    strokes.forEach(stroke => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <h3>${stroke}</h3>
            <p>Learn more about ${stroke} with tips on technique and practice.</p>
            <img src="${strokeImages[stroke]}" alt="${stroke} swimmer" loading="lazy">
        `;
        container.appendChild(card);
    });
}

// Equipment recommendation
function recommendEquipment(level) {
    if (level === 'beginner') return 'Goggles and Swim Cap — start with basics.';
    if (level === 'intermediate') return 'Kickboard and Training Fins for technique.';
    return 'Training fins and advanced gear to refine technique.';
}

// Contact form handler (stores visitor name)
function initContactForm() {
    const form = document.querySelector('#contactForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        localStorage.setItem('visitorName', name);
        document.querySelector('#savedMsg').textContent = 'Thanks! Your name has been saved locally.';
        form.reset();
    });
}

// Equipment event wiring
function initEquipment() {
    const btn = document.querySelector('#getRec');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const level = document.querySelector('#level').value;
        document.querySelector('#recResult').textContent = recommendEquipment(level);
    });
}

// Welcome back
function showWelcome() {
    const savedName = localStorage.getItem('visitorName');
    const welcomeEl = document.querySelector('#welcome');
    if (savedName && welcomeEl) {
        welcomeEl.textContent = `Welcome back, ${savedName}!`;
    }
}

// Tip button
function initTipButton() {
    const btn = document.querySelector('#newTip');
    if (btn) btn.addEventListener('click', displayTip);
}

// Lazy-load fallback: ensure images below hero use loading attribute (done in markup)

// Initialize on DOM ready
window.addEventListener('DOMContentLoaded', () => {
    displayTip();
    populateStrokes();
    initContactForm();
    initEquipment();
    initTipButton();
    showWelcome();
});
