'use strict';
{
  const targets = document.querySelectorAll('img');

  function callback(entries, obs) {
    console.log(entries);

    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }
    
    // if(entries[0].isIntersecting) {
    //   entries[0].target.classList.add('appear');
    // } else {
    //   entries[0].target.classList.remove('appear');
    // }


  const options = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px',
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });

}