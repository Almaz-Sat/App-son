const buttonMonth = document.querySelector(".button-month");
const buttonYear = document.querySelector(".button-year");
const premiunPrice = document.querySelector("#premium-price");
const standartPrice = document.querySelector("#standart-price");
const buttonScrollUp = document.querySelector(".button-scroll-up");
const nav = document.querySelector(".nav");
const buttonScrollDown = document.querySelector(".button-scroll-down");
let buttonFlag = false;

const onClickPricingPlan = (event) => {
  event.preventDefault();
  if (buttonFlag) {
    buttonFlag = false;
    buttonYear.classList.remove("active-button-pricing-plan");
    buttonMonth.classList.add("active-button-pricing-plan");
    premiunPrice.innerHTML = `${588 / 12}.00`;
    standartPrice.innerHTML = `${228 / 12}.00`;
  } else {
    buttonFlag = true;
    buttonMonth.classList.remove("active-button-pricing-plan");
    buttonYear.classList.add("active-button-pricing-plan");
    premiunPrice.innerHTML = `${49 * 12}.00`;
    standartPrice.innerHTML = `${19 * 12}.00`;
  }
};
const onButtonHover = (event) => {
  console.log(event.target.classList);
  if (event.target.classList.contains("active-button-pricing-plan")) {
    return;
  }
  event.target.classList.toggle("button-hover");
};
const outButtonHover = (event) => {
  event.target.classList.remove("button-hover");
};
const scrollUp = (event) => {
  event.preventDefault();
  nav.scrollIntoView();
};
const scrollDown = (event) => {
  event.preventDefault();
  buttonScrollUp.scrollIntoView();
};

buttonMonth.addEventListener("click", onClickPricingPlan);
buttonYear.addEventListener("click", onClickPricingPlan);

buttonMonth.addEventListener("mouseover", onButtonHover);
buttonMonth.addEventListener("mouseout", outButtonHover);

buttonYear.addEventListener("mouseover", onButtonHover);
buttonYear.addEventListener("mouseout", outButtonHover);

buttonScrollUp.addEventListener("click", scrollUp);
buttonScrollDown.addEventListener("click", scrollDown);
