function orderPackage(packageName) {
  const phoneNumber = "6281297447680";
  const message = `Saya ingin dibuatkan website dengan paket harga ${packageName}`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL, "_blank");
}

// Burger Menu Toggle
const burgerMenu = document.getElementById("burgerMenu");
const navMenu = document.getElementById("navMenu");

burgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});

// Close menu when clicking nav item
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("active");
    burgerMenu.classList.remove("active");
  });
});
