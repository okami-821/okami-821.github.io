'use strict';
{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const listBox = document.getElementById('slideBox');
  const slides = listBox.children;
  const dots = [];
  let currentIndex = 0;

  function updatebuttons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if(currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if(currentIndex === slides.length -1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    slideBox.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;  
  }

  function setupDots() {
    for(let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updatebuttons();
        moveSlides();
      });
      dots.push(button);
      document.getElementById('buttonBox').appendChild(button);
    }
    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updatebuttons();
  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    updatebuttons();
    updateDots();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updatebuttons();
    updateDots();
    moveSlides();
  });

  window.addEventListener('resize', () => {
    moveSlides();
  });
}