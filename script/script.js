const buttonPricingPlan = document.querySelector(".button-pricing-plan");
const buttonScrollUp = document.querySelector(".button-scroll-up");
const buttonScrollDown = document.querySelector(".button-scroll-down");
let buttonFlag = false;

const onClickPricingPlan = () => {
  const premiumPrice = document.querySelector("#premium-price");
  const standardPrice = document.querySelector("#standard-price");
  const buttonMonth = document.querySelector(".button-month");
  const buttonYear = document.querySelector(".button-year");
  if (buttonFlag) {
    buttonFlag = false;
    buttonYear.classList.remove("active-button-pricing-plan");
    buttonMonth.classList.add("active-button-pricing-plan");
    premiumPrice.innerHTML = `${588 / 12}.00`;
    standardPrice.innerHTML = `${228 / 12}.00`;
  } else {
    buttonFlag = true;
    buttonMonth.classList.remove("active-button-pricing-plan");
    buttonYear.classList.add("active-button-pricing-plan");
    premiumPrice.innerHTML = `${49 * 12}.00`;
    standardPrice.innerHTML = `${19 * 12}.00`;
  }
};
const scrollUp = () => {
  const header = document.querySelector(".header");
  header.scrollIntoView();
};
const scrollDown = (event) => {
  event.preventDefault(); // без этого не работает
  const footer = document.querySelector(".footer");
  footer.scrollIntoView(false);
};

buttonPricingPlan.addEventListener("click", onClickPricingPlan);

buttonScrollDown.addEventListener("click", scrollDown);
buttonScrollUp.addEventListener("click", scrollUp);
