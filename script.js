/* ------------------------------ */
/* SPLASH SCREEN CLICK TO START */
/* ------------------------------ */
const splash = document.getElementById("splash-screen");
const main = document.getElementById("main-content");
const audio = document.getElementById("bg-audio");

splash.addEventListener("click", () => {
    splash.style.display = "none";  // hide splash
    main.classList.remove("hidden"); // show main content
    audio.volume = 0.5;
    audio.play().catch(err => console.log("Audio blocked:", err));
});

/* ------------------------------ */
/* CURSOR FOLLOW SYSTEM */
/* ------------------------------ */
const ring = document.getElementById("cursor-ring");
const dot = document.getElementById("cursor-dot");

window.addEventListener("mousemove", (e) => {
    ring.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
    dot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
});

/* ------------------------------ */
/* BUTTON HOVER COLOR CHANGE */
/* ------------------------------ */
document.querySelectorAll("button, a").forEach((el) => {
    el.addEventListener("mouseenter", () => {
        ring.style.borderColor = "#f6019d";
    });
    el.addEventListener("mouseleave", () => {
        ring.style.borderColor = "#2de2e6";
    });
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
/* AUDIO TOGGLE BUTTON */
/* ------------------------------ */
const soundBtn = document.getElementById("toggle-sound");
soundBtn.addEventListener("click", () => {
    if (audio.muted) {
        audio.muted = false;
        soundBtn.textContent = "MUTE";
        audio.play();
    } else {
        audio.muted = true;
        soundBtn.textContent = "UNMUTE";
    }
});
