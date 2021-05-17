[].forEach.call(document.querySelectorAll("select"), function (currentSelect) {
  // Trigger placeholder method for the first time
  updatePlaceholder(currentSelect);

  // Bind change event to every select that is found on the page.
  currentSelect.addEventListener("change", function () {
    updatePlaceholder(this);
  });
});

function updatePlaceholder(select) {
  select.classList.toggle("unselected", !select[select.selectedIndex].value);
}
