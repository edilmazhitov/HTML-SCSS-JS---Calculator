const popup = document.getElementById("popup");
const popupOverlay = document.getElementById("popup-overlay");

const openPopup = document.getElementById("open-popup");
const closePopup = document.getElementById("close-popup");

openPopup.addEventListener("click", () => {
  popup.classList.add("open");
  popupOverlay.classList.add("open")
})

closePopup.addEventListener("click", () => {
  popup.classList.remove("open");
  popupOverlay.classList.remove("open")
})