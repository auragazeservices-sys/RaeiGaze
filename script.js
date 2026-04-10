// ----------------------------
// Mobile Menu Toggle
// ----------------------------
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// ----------------------------
// Fade-in on Scroll
// ----------------------------
const faders = document.querySelectorAll(".fade-in");

const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// ----------------------------
// Cursor Glow Follow Effect
// ----------------------------
const cursorGlow = document.getElementById("cursorGlow");

if (cursorGlow) {
  window.addEventListener("mousemove", (e) => {
    cursorGlow.style.top = e.clientY + "px";
    cursorGlow.style.left = e.clientX + "px";
  });

  window.addEventListener("mouseleave", () => {
    cursorGlow.style.opacity = "0";
  });

  window.addEventListener("mouseenter", () => {
    cursorGlow.style.opacity = "0.9";
  });
}

// ----------------------------
// Tilt Card Effect (3D Hover)
// ----------------------------
const tiltCards = document.querySelectorAll(".tilt-card");

tiltCards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * 6;
    const rotateY = ((x - midX) / midX) * 6;

    card.style.transform = `perspective(900px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;

    // For spotlight gradient
    card.style.setProperty("--x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--y", `${(y / rect.height) * 100}%`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  });
});

// ----------------------------
// Magnetic Buttons
// ----------------------------
const magneticButtons = document.querySelectorAll(".magnetic");

magneticButtons.forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0px, 0px)";
  });
});
