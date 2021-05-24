const scrollButtonContainer = document.querySelector(
  ".scroll-button-container"
);
const scrollTopButton = document.querySelector(".scroll-button");

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // scrollButtonContainer.style.display = "block";
    scrollButtonContainer.style.transform = "scale(1)";
  } else {
    // scrollButtonContainer.style.display = "none";
    scrollButtonContainer.style.transform = "scale(0)";
  }
});

scrollTopButton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
