document.addEventListener("DOMContentLoaded", () => {
    
    const animatedElements = document.querySelectorAll('.fade-up, .fade-left');
    const observerOptions = { threshold: 0.2 };
  
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  
    
    const follower = document.querySelector('.follower1');
    const triggers = document.querySelectorAll('.follower-trigger');
  
    triggers.forEach(trigger => {
      trigger.addEventListener('mouseenter', (e) => {
        
        const bgColor = trigger.getAttribute('data-bgcolor') || 'white';
        const scale = trigger.getAttribute('data-scale') || '1';
        const mixMode = trigger.getAttribute('data-mix') || 'normal';
  
        follower.style.backgroundColor = bgColor;
        follower.style.mixBlendMode = mixMode;
        follower.style.opacity = 1;
        
        follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${scale})`;
      });
  
      trigger.addEventListener('mousemove', (e) => {
        const scale = trigger.getAttribute('data-scale') || '1';
        const mixMode = trigger.getAttribute('data-mix') || 'normal';
        follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${scale})`;
        follower.style.mixBlendMode = mixMode;
      });
  
      trigger.addEventListener('mouseleave', () => {
        follower.style.opacity = 0;
        follower.style.transform = 'translate(-50%, -50%) scale(1)';
      });
    });
  });
  