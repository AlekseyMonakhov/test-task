const inputYear = document.querySelector("#Yearly");
const inputMonth = document.querySelector("#Monthly");

const yearContainer = document.querySelector(".cards-container.year");
const monthContainer = document.querySelector(".cards-container.month");

inputMonth.addEventListener("click", () => {
  monthContainer.classList.remove("hide");
  yearContainer.classList.add("hide");
});
inputYear.addEventListener("click", () => {
  yearContainer.classList.remove("hide");
  monthContainer.classList.add(`hide`);
});
