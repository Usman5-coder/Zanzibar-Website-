const menuIcon = document.querySelector(".menu-icon");
const fullscreenMenu = document.querySelector(".fullscreen-menu");
const menuItems = document.querySelectorAll(".menu-items li");
const navbar = document.querySelector(".navbar");
let isMenuOpen = false;

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Menu toggle animation
menuIcon.addEventListener("click", () => {
  if (!isMenuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
  isMenuOpen = !isMenuOpen;
});

function openMenu() {
  menuIcon.classList.add("active");
  fullscreenMenu.style.visibility = "visible";

  // Menu background animation
  gsap.fromTo(
    fullscreenMenu,
    {
      clipPath: "circle(0% at 95% 5%)",
    },
    {
      clipPath: "circle(150% at 95% 5%)",
      duration: 1,
      ease: "power3.inOut",
    }
  );

  // Menu items animation
  gsap.fromTo(
    menuItems,
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.3,
    }
  );
}

function closeMenu() {
  menuIcon.classList.remove("active");

  // Menu background animation
  gsap.to(fullscreenMenu, {
    clipPath: "circle(0% at 95% 5%)",
    duration: 1,
    ease: "power3.inOut",
    onComplete: () => {
      fullscreenMenu.style.visibility = "hidden";
    },
  });

  // Menu items animation
  gsap.to(menuItems, {
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
    ease: "power3.in",
  });
}


document
  .querySelector("#whatsapp-icon i")
  .addEventListener("click", function () {
    const phoneNumber = "+255748926732"; // Replace with your phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}?`;
    window.open(whatsappUrl, "_blank");
  });