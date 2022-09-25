const inputYear = document.querySelector(".plans-tumbler-container");
const prices = Array.from(document.querySelectorAll(".card-price"));
const animation = {
  duration: 250,
  fill: "forwards",
  easing: "ease",
};
inputYear.addEventListener("click", (event) => {
  let counter = 0;
  const pricesMont = ["$19", "$54", "$89"];
  const pricesYear = ["$12", "$36", "$56"];

  if (event.target.value === "month") {
    prices.forEach((price) => {
      price.textContent = pricesMont[counter++];
      price.animate([{ opacity: 0 }, { opacity: 1 }], animation);
    });
  }
  if (event.target.value === "year") {
    prices.forEach((price) => {
      price.textContent = pricesYear[counter++];
      price.animate([{ opacity: 0 }, { opacity: 1 }], animation);
    });
  }
});
