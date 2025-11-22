/* ------------------------------ */
/* SPLASH SCREEN CLICK */
/* ------------------------------ */
const splash = document.getElementById("splash-screen");
const main = document.getElementById("main-content");
const audio = document.getElementById("bg-audio");

splash.addEventListener("click", () => {
    splash.style.display = "none";
    main.classList.remove("hidden");
    audio.volume = 0.5;
    audio.play().catch(err => console.log("Audio blocked:", err));
});

/* ------------------------------ */
/* CURSOR FOLLOW */
/* ------------------------------ */
const ring = document.getElementById("cursor-ring");
const dot = document.getElementById("cursor-dot");

window.addEventListener("mousemove", (e) => {
    ring.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
    dot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
});

/* ------------------------------ */
/* BUTTON HOVER */
/* ------------------------------ */
document.querySelectorAll("button, a").forEach((el) => {
    el.addEventListener("mouseenter", () => ring.style.borderColor = "#f6019d");
    el.addEventListener("mouseleave", () => ring.style.borderColor = "#2de2e6");
});

/* ------------------------------ */
/* SCROLL REVEAL */
/* ------------------------------ */
const revealItems = document.querySelectorAll(".skill-box, .about-card, .hero-title");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    revealItems.forEach((item) => {
        const top = item.getBoundingClientRect().top;
        if (top < trigger) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
});

/* ------------------------------ */
/* AUDIO TOGGLE */
/* ------------------------------ */
const soundBtn = document.getElementById("toggle-sound");

soundBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    soundBtn.textContent = audio.muted ? "UNMUTE" : "MUTE";
});

/* ------------------------------ */
/* ACHIEVEMENT POPUP */
/* ------------------------------ */
const achievementBtn = document.querySelector(".cta-btn");
const achievementPopup = document.getElementById("achievement-popup");
const closeAchievement = document.getElementById("close-achievement");

achievementBtn.addEventListener("click", () => {
    achievementPopup.classList.add("show");
});

closeAchievement.addEventListener("click", () => {
    achievementPopup.classList.remove("show");
});

/* ------------------------------ */
/* CONTACT POPUP (FIXED) */
/* ------------------------------ */
const contactPopup = document.getElementById("contact-popup");
const openContact = document.getElementById("open-contact");
const closeContact = document.getElementById("close-contact");

openContact.addEventListener("click", () => {
    contactPopup.classList.add("show");
});

// Close only when clicking the X or outside content
closeContact.addEventListener("click", () => {
    contactPopup.classList.remove("show");
});

/* ------------------------------ */
/* UNIVERSAL OUTSIDE CLICK HANDLER */
/* Works for BOTH popups safely */
/* ------------------------------ */
window.addEventListener("click", (e) => {
    if (e.target === achievementPopup) achievementPopup.classList.remove("show");
    if (e.target === contactPopup) contactPopup.classList.remove("show");
});
