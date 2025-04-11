const topHalf = document.getElementById('topHalf');
const bottomHalf = document.getElementById('bottomHalf');

let isPageAVisible = true;

// Event auf beide Hälften – du kannst auch nur ein Container-Element nehmen
document.querySelector('.homepage').addEventListener('click', () => {
  if (isPageAVisible) {
    topHalf.classList.add('slide-top-out');
    bottomHalf.classList.add('slide-bottom-out');

    setTimeout(() => {
        document.getElementById('homepage').classList.add('hidden');
      }, 700); // exakt wie deine Transition-Dauer

      
    isPageAVisible = false;
  } else {
    topHalf.classList.remove('slide-top-out');
    bottomHalf.classList.remove('slide-bottom-out');
    document.getElementById('homepage').classList.remove('hidden');
    isPageAVisible = true;
  }
});