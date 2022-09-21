const inputYear = document.querySelector("#Yearly");
const inputMonth = document.querySelector("#Monthly");
const prices = Array.from(document.querySelectorAll(".card-price"));

inputYear.addEventListener("click", () => {
  let counter = 0;
  const pricesYear = ["$12", "$36", "$56"];
  prices.forEach((price) => {
    price.textContent = pricesYear[counter++];
  });
});
inputMonth.addEventListener("click", () => {
  let counter = 0;
  const pricesMont = ["$19", "$54", "$89"];
  prices.forEach((price) => {
    price.textContent = pricesMont[counter++];
  });
});
