function showSecondCard() {
  const content = document.getElementById('popupContent');
  content.innerHTML = `
    <img src="diva.png" alt="flower" />
    <p>For the last chapter, I just want you to know how much you’ve meant to me.</p>
    <button onclick="closePopup()">Selesai</button>
  `;
}

function closePopup() {
  const overlay = document.getElementById('overlay');
  overlay.classList.add('fadeout');

  setTimeout(() => {
    overlay.style.display = 'none';
  }, 500);
}