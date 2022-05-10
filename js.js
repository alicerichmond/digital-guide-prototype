const audio = document.querySelector('audio');
const fulltranscript =document.querySelector('fulltranscript');
const fulltranscript1 =document.querySelector('fulltranscript1');

document.onclick = (e) => {
  if (e.target.id === '1x') {
    audio.playbackRate = 1;
  }
  if (e.target.id === '15x') {
  audio.playbackRate = 1.5;
  }
  if (e.target.id === '2x') {
    audio.playbackRate = 2;
  }
  if (e.target.id === 'transcript') {
  document.getElementById("fulltranscript").classList.remove("hidden");
  }
  if (e.target.id === 'closetranscript') {
  document.getElementById("fulltranscript").classList.add("hidden");
  }
  if (e.target.id === 'transcript1') {
  document.getElementById("fulltranscript1").classList.remove("hidden");
  }
  if (e.target.id === 'closetranscript1') {
  document.getElementById("fulltranscript1").classList.add("hidden");
  }
}



