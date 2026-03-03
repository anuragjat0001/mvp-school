// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

/* -------------------------
   HERO ANIMATION
--------------------------*/

gsap.from(".hero h1", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".hero p", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.2
});

gsap.from(".btn", {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  delay: 1.2
});

/* -------------------------
   SECTION REVEAL ANIMATION
--------------------------*/

gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
});

/* -------------------------
   NAVBAR SHRINK EFFECT
--------------------------*/

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.padding = "10px 20px";
    navbar.style.backdropFilter = "blur(25px)";
  } else {
    navbar.style.padding = "15px 30px";
    navbar.style.backdropFilter = "blur(15px)";
  }
});

/* -------------------------
   PARALLAX EFFECT
--------------------------*/

gsap.to(".hero", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    scrub: true
  }
});
