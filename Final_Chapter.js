function showSecondCard() {
  const content = document.getElementById('popupContent');
  content.innerHTML = `
    <img src="diva.png" alt="flower" />
    <p>For the last chapter, I just want you to know how much you’ve meant to me.</p>
    <button onclick="closePopup()">Selesai</button>
  `;
}
function openPopup(){
  document.body.classList.add('no-scroll');
}
function closePopup() {
  const overlay = document.getElementById('overlay');
  overlay.classList.add('fadeout');
  document.body.classList.remove('no-scroll');
  setTimeout(() => {
    overlay.style.display = 'none';
    const fadeItems=
document.querySelectorAll('.fade');
fadeItems.forEach(item => {
  item.classList.add('visible');
});
}, 500);

}

const audio = document.getElementById('myAudio');

function playAudio() {
  if (audio.paused){
    audio.play();
  } else{
    audio.paused();
  }
}