// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// ===== Scroll Reveal Animations =====
const revealElements = document.querySelectorAll("section, .project-card, .exp-card, .skill-card");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===== Profile Picture Pulse Effect (extra touch) =====
const profilePic = document.querySelector(".profile-pic");
if (profilePic) {
  profilePic.addEventListener("mouseenter", () => {
    profilePic.style.filter = "drop-shadow(0 0 15px #58a6ff)";
  });
  profilePic.addEventListener("mouseleave", () => {
    profilePic.style.filter = "none";
  });
}
