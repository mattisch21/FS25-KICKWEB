const homepage = document.getElementById('homepage');
const backbutton = document.getElementById('backbutton');

let isPageAVisible = true;

function getResponsiveHalves() {
  const isMobile = window.innerWidth <= 1180;

  if (isMobile) {
    return {
      firstHalf: document.getElementById('leftHalf'),
      secondHalf: document.getElementById('rightHalf'),
      firstSlideOut: 'slide-left-out',
      secondSlideOut: 'slide-right-out',
      firstSlideIn: 'slide-left-in',
      secondSlideIn: 'slide-right-in',
    };
  } else {
    return {
      firstHalf: document.getElementById('topHalf'),
      secondHalf: document.getElementById('bottomHalf'),
      firstSlideOut: 'slide-top-out',
      secondSlideOut: 'slide-bottom-out',
      firstSlideIn: 'slide-top-in',
      secondSlideIn: 'slide-bottom-in',
    };
  }
}

// ➡️ Klick auf Seite A – Slide-Out
homepage.addEventListener('click', () => {
  if (!isPageAVisible) return;

  const { firstHalf, secondHalf, firstSlideOut, secondSlideOut, firstSlideIn, secondSlideIn } = getResponsiveHalves();

  // Vorherige In-Klassen entfernen, falls vorhanden
  firstHalf.classList.remove(firstSlideIn);
  secondHalf.classList.remove(secondSlideIn);

  firstHalf.classList.add(firstSlideOut);
  secondHalf.classList.add(secondSlideOut);

  setTimeout(() => {
    homepage.classList.add('hidden');
  }, 700);

  isPageAVisible = false;
});

// ⬅️ Zurück-Button – Slide-In
backbutton.addEventListener('click', () => {
  const { firstHalf, secondHalf, firstSlideOut, secondSlideOut, firstSlideIn, secondSlideIn } = getResponsiveHalves();

  homepage.classList.remove('hidden');

  // Entferne vorherige Out-Animationen
  firstHalf.classList.remove(firstSlideOut);
  secondHalf.classList.remove(secondSlideOut);

  // Trigger In-Animationen
  setTimeout(() => {
    firstHalf.classList.add(firstSlideIn);
    secondHalf.classList.add(secondSlideIn);
  }, 10); // kleine Verzögerung, damit Browser es erkennt

  isPageAVisible = true;
});
