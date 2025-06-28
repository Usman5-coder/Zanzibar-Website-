gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
  gsap.fromTo(
    ".hero-subtitle",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
  );

  gsap.fromTo(
    ".hero-title",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
  );

  gsap.fromTo(
    ".hero-description",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
  );

  gsap.fromTo(
    ".cta-button",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: "power3.out" }
  );
});

// Initial background parallax setup
gsap.to(".background-image", {
  scale: 1,
  duration: 2,
  ease: "power2.out",
});

// Scroll-based animations
const aboutContent = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-section",
    start: "top center",
    end: "center center",
    toggleActions: "play none none reverse",
  },
});

aboutContent
  .fromTo(
    ".section-title",
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
  )
  .fromTo(
    ".about-heading",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    "-=0.7"
  )
  .fromTo(
    ".about-description",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    "-=0.7"
  )
  .fromTo(
    ".about-link",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    "-=0.7"
  );

// Parallax effect on scroll
gsap.to(".background-image", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  y: "20%",
  ease: "none",
});

var swiper = new Swiper(".mySwiper", {
  speed: 2000,
  parallax: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//project section javascript
gsap.registerPlugin(ScrollTrigger);

gsap.from(".section-subtitle", {
  opacity: 0,
  y: 30,
  duration: 1,
  scrollTrigger: {
    trigger: ".section-header",
    start: "top 80%",
  },
});

gsap.from(".section-title", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".section-header",
    start: "top 80%",
  },
});

gsap.utils.toArray(".project-card").forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: card,
      start: "top 65%",
    },
  });
});
