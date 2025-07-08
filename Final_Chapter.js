function closePopup() {
  const overlay = document.getElementById("overlay");
  overlay.classList.add("fade-out");

  setTimeout(() => {
    overlay.style.display = "none";
  }, 500); }