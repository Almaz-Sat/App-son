const buttonMY = document.querySelector(".button-month-year");
const premiunPrice = document.querySelector("#premium-price");
const standartPrice = document.querySelector("#standart-price");
const buttonScrollUp = document.querySelector(".button-scroll-up");
const buttonScrollDown = document.querySelector(".button-scroll-down");
let buttonFlag = false;

const onClickMY = (event) => {
  event.preventDefault();
  if (buttonFlag) {
    buttonMY.style.background =
      "url(/img/pricing_plan/button_month_year_2.svg)";
    premiunPrice.innerHTML = `${588 / 12}.00`;
    standartPrice.innerHTML = `${228 / 12}.00`;
    buttonFlag = false;
  } else {
    buttonMY.style.background = "url(/img/pricing_plan/button_month_year.svg)";
    premiunPrice.innerHTML = `${49 * 12}.00`;
    standartPrice.innerHTML = `${19 * 12}.00`;
    buttonFlag = true;
  }
};
const mouseOnMY = (event) => {
  if (buttonFlag)
    event.target.style.background =
      "url(/img/pricing_plan/button_month_year_4.svg)";
  else {
    event.target.style.background =
      "url(/img/pricing_plan/button_month_year_3.svg)";
  }
};
const mouseOutMY = (event) => {
  if (buttonFlag)
    event.target.style.background =
      "url(/img/pricing_plan/button_month_year_2.svg)";
  else {
    event.target.style.background =
      "url(/img/pricing_plan/button_month_year.svg)";
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

buttonMY.addEventListener("click", onClickMY);
buttonMY.addEventListener("mouseover", mouseOnMY);
buttonMY.addEventListener("mouseout", mouseOutMY);
buttonScrollUp.addEventListener("click", scrollUp);
buttonScrollDown.addEventListener("click", scrollDown);
