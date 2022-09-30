const switchContainer = document.querySelector(".plans-tumbler-container");
const prices = Array.from(document.querySelectorAll(".card-price"));
const animation = {
  duration: 500,
  fill: "forwards",
  easing: "linear",
};
switchContainer.addEventListener("click", (event) => {
  let counter = 0;
  const pricesMont = ["$19", "$54", "$89"];
  const pricesYear = ["$12", "$36", "$56"];
  prices.forEach((price) => {
    price.textContent = (
      event.target.value === "year" ? pricesYear : pricesMont
    )[counter++];
    price.animate([{ opacity: 0 }, { opacity: 1 }], animation);
  });
});
