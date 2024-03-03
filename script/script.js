const buttonMonth = document.querySelector(".button-month");
const buttonYear = document.querySelector(".button-year");
const premiunPrice = document.querySelector("#premium-price");
const standartPrice = document.querySelector("#standart-price");
const buttonScrollUp = document.querySelector(".button-scroll-up");
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
  if (buttonFlag) {
    event.target.classList.add("button-hover");
  } else {
    event.target.classList.add("button-hover");
  }
};
const outButtonHover = (event) => {
  if (buttonFlag) {
    event.target.classList.remove("button-hover");
  } else {
    event.target.classList.remove("button-hover");
  }
};
const scrollUp = (event) => {
  event.preventDefault();
  buttonScrollDown.scrollIntoView(false);
};
const scrollDown = (event) => {
  event.preventDefault();
  buttonScrollUp.scrollIntoView(false);
};

buttonMonth.addEventListener("click", onClickPricingPlan);
buttonYear.addEventListener("click", onClickPricingPlan);

buttonMonth.addEventListener("mouseover", onButtonHover);
buttonMonth.addEventListener("mouseout", outButtonHover);

buttonYear.addEventListener("mouseover", onButtonHover);
buttonYear.addEventListener("mouseout", outButtonHover);

buttonScrollUp.addEventListener("click", scrollUp);
buttonScrollDown.addEventListener("click", scrollDown);
