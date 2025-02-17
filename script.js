const Input = document.querySelector(".inpt");
const qrBox = document.querySelector(".qr-box");
const genBtn = document.querySelector(".gen-btn");
const downBtn = document.querySelector(".down-btn");
const sizes = document.querySelector("#sizes");
const qrImg = document.querySelector("img");

// Generate QR Code
genBtn.addEventListener("click", (e) => {
  e.preventDefault();
  generateQRCode();
});

// Download QR Code
downBtn.addEventListener("click", (e) => {
  e.preventDefault();
  downloadQRCode();
});

function generateQRCode() {
  if (Input.value.trim() === "") {
    alert("Please enter some text or URL to generate a QR code.");
    return;
  }

  let size = sizes.value;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${encodeURIComponent(
    Input.value
  )}`;
  qrImg.alt = `QR Code for ${Input.value}`;

  // Show the QR box once the image is loaded
  qrImg.onload = () => {
    qrBox.style.display = "block";
  };
}

function downloadQRCode() {
  if (!qrImg.src) {
    alert("No QR code generated yet. Please generate a QR code first.");
    return;
  }

  // Create a temporary anchor element to trigger the download
  const link = document.createElement("a");
  link.href = qrImg.src;
  link.download = `QRCode_${Input.value || "default"}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
