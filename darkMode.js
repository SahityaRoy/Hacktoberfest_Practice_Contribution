// Elements To Be Toggled
const themeButton = document.getElementById("theme-toggler");
const themeButtonIcon = document.getElementById("toggler-icon");
const cards = document.querySelectorAll(".card");
const body = document.body;
const nameHeadlines = document.querySelectorAll(".nameHeadline");
const designationHeadlines = document.querySelectorAll(".designationHeadline");
const socialLinks = document.querySelectorAll(".socialLink");

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkScheme.matches) {
  themeButtonIcon.classList.toggle("fa-sun-o");
} else {
  themeButtonIcon.classList.toggle("fa-moon-o");
}
prefersDarkScheme.addEventListener("change", (e) => {
  themeButtonIcon.classList.toggle("fa-moon-o");
  themeButtonIcon.classList.toggle("fa-sun-o");
});
themeButton.addEventListener("click", function () {
  // If the OS is set to dark mode...
  if (prefersDarkScheme.matches) {
    // ...then apply the .light-theme class to override those styles
    themeButtonIcon.classList.toggle("fa-moon-o");
    themeButtonIcon.classList.toggle("fa-sun-o");
    themeButton.classList.toggle("light-neuromorphism");
    body.classList.toggle("light-bg");
    cards.forEach((card) => {
      card.classList.toggle("light-neuromorphism");
    });
    nameHeadlines.forEach((name) => {
      name.classList.toggle("light-headline-text");
    });
    designationHeadlines.forEach((designation) => {
      designation.classList.toggle("light-description-text");
    });
    socialLinks.forEach((link) => {
      link.classList.toggle("light-link");
    });
    // Otherwise...
  } else {
    // ...apply the .dark-theme class to override the default light styles
    themeButtonIcon.classList.toggle("fa-moon-o");
    themeButtonIcon.classList.toggle("fa-sun-o");
    themeButton.classList.toggle("dark-neuromorphism");
    body.classList.toggle("dark-bg");
    cards.forEach((card) => {
      card.classList.toggle("dark-neuromorphism");
    });
    nameHeadlines.forEach((name) => {
      name.classList.toggle("dark-headline-text");
    });
    designationHeadlines.forEach((designation) => {
      designation.classList.toggle("dark-description-text");
    });
    socialLinks.forEach((link) => {
      link.classList.toggle("dark-link");
    });
  }
});
