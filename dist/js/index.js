const inputYear = document.querySelector(".plans-tumbler-container");
const prices = Array.from(document.querySelectorAll(".card-price"));

inputYear.addEventListener("click", (event) => {
  let counter = 0;
  const pricesMont = ["$19", "$54", "$89"];
  const pricesYear = ["$12", "$36", "$56"];
  switch (event.target.value) {
    case "month":
      prices.forEach((price) => {
        price.textContent = pricesMont[counter++];
      });
      break;

    default:
      prices.forEach((price) => {
        price.textContent = pricesYear[counter++];
      });
      break;
  }
});
