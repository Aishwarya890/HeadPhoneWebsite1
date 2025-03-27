document.addEventListener("DOMContentLoaded", () => {
    const follower = document.querySelector('.follower-blog');
    const triggers = document.querySelectorAll('.follower-trigger');
  
    triggers.forEach(trigger => {
      trigger.addEventListener('mouseenter', (e) => {
        
        const text = trigger.getAttribute('data-text') || "";
        const bgColor = trigger.getAttribute('data-bgcolor') || "black";
        const scale = trigger.getAttribute('data-scale') || "1";
  
        
        follower.textContent = text;
        follower.style.backgroundColor = bgColor;
        follower.style.opacity = 1;
        follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${scale})`;
      });
  
      trigger.addEventListener('mousemove', (e) => {
        const scale = trigger.getAttribute('data-scale') || "1";
        follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${scale})`;
      });
  
      trigger.addEventListener('mouseleave', () => {
        follower.style.opacity = 0;
        follower.textContent = "";
        follower.style.transform = `translate(-50%, -50%) scale(1)`;
      });
    });
  });
  