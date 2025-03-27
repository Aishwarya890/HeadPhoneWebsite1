document.addEventListener("DOMContentLoaded", () => {
  
    const faders = document.querySelectorAll('.fade');
    const options = {
      threshold: 0.2
    };
  
    
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Apply delay from the element's data attribute (if any)
          const delay = entry.target.getAttribute('data-delay') || 0;
          entry.target.style.transitionDelay = delay + "s";
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });
  