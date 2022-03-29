const navSlide = () => {
  const bodyBg = document.querySelector("body");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");

    // body background
    bodyBg.classList.toggle("menu-open");

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    // burger animation
    burger.classList.toggle("toggle");
  });
};

const app = () => {
  navSlide();
}; // 함수가 많을때

app();
