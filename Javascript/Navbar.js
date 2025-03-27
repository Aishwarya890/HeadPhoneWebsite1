document.addEventListener("DOMContentLoaded", () => {
    
    const navbarContainer = document.querySelector(".navbar-container");
    setTimeout(() => {
      navbarContainer.style.opacity = 1;
    }, 500); 
  
    
    const follower = document.querySelector(".follower");
    let isActive = false;
  
    
    const triggers = document.querySelectorAll(".follower-trigger");
  
    triggers.forEach(trigger => {
      trigger.addEventListener("mouseenter", (e) => {
        isActive = true;
        
        const bgColor = trigger.getAttribute("data-bgcolor") || "white";
        follower.style.backgroundColor = bgColor;
        follower.style.opacity = 1;
      });
      trigger.addEventListener("mousemove", (e) => {
        if (isActive) {
          
          follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1.2)`;
        }
      });
      trigger.addEventListener("mouseleave", () => {
        isActive = false;
        follower.style.opacity = 0;
        follower.style.transform = `translate(0, 0) scale(1)`;
      });
    });
  });
  