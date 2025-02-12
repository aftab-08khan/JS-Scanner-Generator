const Input = document.querySelector(".inpt");
const qrBox = document.querySelector(".qr-box");
const genBtn = document.querySelector(".gen-btn");
const downBtn = document.querySelector(".down-btn");
const sizes = document.querySelector("#sizes");
const qrImg = document.querySelector("img");
genBtn.addEventListener("click", (e) => {
  e.preventDefault();
  generateqrcode();
});
function generateqrcode() {
  let size = sizes.value;
  qrImg.src =
    " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    Input.value;
}
