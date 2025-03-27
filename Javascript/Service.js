document.addEventListener("DOMContentLoaded", () => {
   
    const faders = document.querySelectorAll('.fade-up');
    
    const appearOptions = {
      threshold: 0.2
    };
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  
    
    const follower = document.querySelector('.followers');
    const triggers = document.querySelectorAll('.follower-trigger');
  
    triggers.forEach(trigger => {
      trigger.addEventListener('mouseenter', (e) => {
        
        const iconUrl = trigger.getAttribute('data-icon');
        follower.style.backgroundImage = `url(${iconUrl})`;
        follower.style.opacity = 1;
        
        follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1.2) rotate(720deg)`;
      });
  
      trigger.addEventListener('mousemove', (e) => {
        
        follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1.2) rotate(720deg)`;
      });
  
      trigger.addEventListener('mouseleave', () => {
        follower.style.opacity = 0;
        follower.style.transform = `translate(0, 0) scale(1) rotate(0deg)`;
      });
    });
  });
  