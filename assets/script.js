const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".profile-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Hapus aktif semua tab
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // Hapus aktif semua konten
    contents.forEach((content) => {
      content.classList.remove("active");
    });

    // Aktifkan target
    const target = document.getElementById(tab.dataset.target);
    target.classList.add("active");
  });
});

const reveals = document.querySelectorAll(".reveal-left, .reveal-right");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

reveals.forEach((el) => observer.observe(el));
