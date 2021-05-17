const searchInput = document.querySelector(".search");
const searchDelete = document.querySelector(".search-delete");

searchDelete.addEventListener("click", function () {
  searchInput.value = "";
  searchInput.focus();
});
