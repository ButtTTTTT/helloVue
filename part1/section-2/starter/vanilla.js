const pEle = document.querySelector(".p-text");
const inputEle = document.querySelector(".input-text");

inputEle.addEventListener("input", (event) => {
  pEle.textContent = event.target.value;
});
