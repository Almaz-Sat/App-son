const buttonMY = document.querySelector(".button-month-year");
const premiunPrice = document.querySelector("#premium-price");
const standartPrice = document.querySelector("#standart-price");
let buttonFlag = false;

const onClick = (event) => {
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

const mouseOn = (event) => {
  if (buttonFlag)
    event.target.style.background =
      "url(/img/pricing_plan/button_month_year_4.svg)";
  else {
    event.target.style.background =
      "url(/img/pricing_plan/button_month_year_3.svg)";
  }
};

const mouseOut = (event) => {
  if (buttonFlag)
    event.target.style.background =
      "url(/img/pricing_plan/button_month_year_2.svg)";
  else {
    event.target.style.background =
      "url(/img/pricing_plan/button_month_year.svg)";
  }
};

buttonMY.addEventListener("click", onClick);
buttonMY.addEventListener("mouseover", mouseOn);
buttonMY.addEventListener("mouseout", mouseOut);
