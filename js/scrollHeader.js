function scrollHeader() {
  const nav = document.getElementById("header");
  const scrollY = window.pageYOffset;
  // console.log(scrollY);

  if (scrollY >= 20) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);
