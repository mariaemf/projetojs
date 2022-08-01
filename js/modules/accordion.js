export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

const accordionList = document.querySelectorAll("js-accordion dt");

function activeAccordion() {
  this.classList.toggle("ativo");
  this.nextElementSibling.classList.add("ativo");
}

accordionList.forEach((item) => {
  item.addEventListener("click", activeAccordion);
});
