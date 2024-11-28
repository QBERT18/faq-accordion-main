function toggleAccordion(headerElement) {
  const accordion = headerElement.closest(".accordion__items");
  const item = headerElement.parentElement;
  const isAlreadyOpen = item.classList.contains("open");

  accordion.querySelectorAll(".accordion__item").forEach((item) => {
    item.classList.remove("open");
  });

  if (!isAlreadyOpen) {
    item.classList.add("open");
  }
}
