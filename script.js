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
// ACHIEVEMENT MODAL
const achievementBtn = document.querySelector(".cta-btn");
const achievementModal = document.getElementById("achievement-modal");
const closeBtn = document.querySelector(".close-btn");

achievementBtn.addEventListener("click", () => {
    achievementModal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
    achievementModal.classList.add("hidden");
});

// Close modal when clicking outside the content
achievementModal.addEventListener("click", (e) => {
    if (e.target === achievementModal) {
        achievementModal.classList.add("hidden");
    }
});
document.addEventListener("DOMContentLoaded", () => {

    // Elements
    const achievementBtn = document.querySelector(".cta-btn");
    const achievementModal = document.getElementById("achievement-modal");
    const achievementClose = document.querySelector(".close-btn");

    const fullscreenModal = document.getElementById("fullscreen-modal");
    const fsImage = document.getElementById("fs-image");
    const fsClose = document.querySelector(".fs-close");

    // Open achievement modal
    achievementBtn.addEventListener("click", () => {
        achievementModal.classList.remove("hidden");
    });

    // Close achievement modal
    achievementClose.addEventListener("click", () => {
        achievementModal.classList.add("hidden");
    });

    // Close achievement modal on click outside content
    achievementModal.addEventListener("click", (e) => {
        if (e.target === achievementModal) {
            achievementModal.classList.add("hidden");
        }
    });

    // Make achievement images clickable for fullscreen
    document.querySelectorAll(".zoomable").forEach(img => {
        img.addEventListener("click", () => {
            fsImage.src = img.src;
            fullscreenModal.classList.add("show");
        });
    });

    // Close fullscreen modal
    fsClose.addEventListener("click", () => {
        fullscreenModal.classList.remove("show");
    });

    fullscreenModal.addEventListener("click", (e) => {
        if (e.target === fullscreenModal) {
            fullscreenModal.classList.remove("show");
        }
    });

});
// CONTACT MODAL
const contactBtn = document.querySelector(".contact-btn");
const contactModal = document.getElementById("contact-modal");
const contactClose = contactModal.querySelector(".close-btn");

// Open popup
contactBtn.addEventListener("click", () => {
    contactModal.classList.add("show");
});

// Close popup via close button
contactClose.addEventListener("click", () => {
    contactModal.classList.remove("show");
});

// Close popup by clicking outside content
contactModal.addEventListener("click", (e) => {
    if (e.target === contactModal) {
        contactModal.classList.remove("show");
    }
});
// Make modals scrollable on mobile if content is long
document.querySelectorAll(".modal, #fullscreen-modal").forEach(modal => {
    modal.addEventListener("touchstart", e => {
        e.stopPropagation(); // prevent closing accidentally
    });
});
