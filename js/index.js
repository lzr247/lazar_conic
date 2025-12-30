document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  // Highlight nav based on scroll position
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + entry.target.id) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.5 },
  );

  sections.forEach((section) => observer.observe(section));
});

// Get year
document.getElementById("year").textContent = new Date().getFullYear();

// Cursor spotlight effect
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function updateSpotlight() {
  document.body.style.setProperty("--mouse-x", mouseX + "px");
  document.body.style.setProperty("--mouse-y", mouseY + "px");
  requestAnimationFrame(updateSpotlight);
}

requestAnimationFrame(updateSpotlight);
