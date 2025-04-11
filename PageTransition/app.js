const topHalf = document.getElementById('topHalf');
const bottomHalf = document.getElementById('bottomHalf');
const homepage = document.getElementById('homepage');
const backbutton = document.getElementById('backbutton');

let isPageAVisible = true;

// Klick auf Seite A
homepage.addEventListener('click', () => {
  if (isPageAVisible) {
    topHalf.classList.add('slide-top-out');
    bottomHalf.classList.add('slide-bottom-out');

    setTimeout(() => {
      homepage.classList.add('hidden');
    }, 700);

    isPageAVisible = false;
  }
});

// Klick auf "Zurück"-Button in Seite B
backbutton.addEventListener('click', () => {
  homepage.classList.remove('hidden'); // sofort sichtbar + wieder über Seite B

  // minimaler Timeout, damit browser die Klasse neu ausliest
  setTimeout(() => {
    topHalf.classList.remove('slide-top-out');
    bottomHalf.classList.remove('slide-bottom-out');
  }, 10); // sehr klein reicht

  isPageAVisible = true;
});
