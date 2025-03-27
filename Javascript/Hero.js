
const headphoneData = [
    {
      id: 1,
      image: "/Assests/assets/headphone.png",
      title: "Headphones wireless",
      subtitle:
        "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
      price: "$100",
      modal: "Modal Brown",
      bgColor: "#8b5958",
    },
    {
      id: 2,
      image: "/Assests/assets/headphone2.png",
      title: "Headphones wireless",
      subtitle:
        "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
      price: "$100",
      modal: "Modal Brown",
      bgColor: "#638153",
    },
    {
      id: 3,
      image: "/Assests/assets/headphone3.png",
      title: "Headphones wireless",
      subtitle:
        "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
      price: "$100",
      modal: "Modal Brown",
      bgColor: "#5d818c",
    },
  ];
  
  
  let activeData = headphoneData[0];
  
  
  const heroTitle = document.getElementById("hero-title");
  const heroSubtitle = document.getElementById("hero-subtitle");
  const heroButton = document.getElementById("hero-button");
  const heroImage = document.getElementById("hero-image");
  const thumbs = document.querySelectorAll(".thumb");
  
  
  function animateUpdate(element, newContent, delay = 0) {
    element.classList.remove("fade");
    
    void element.offsetWidth;
    setTimeout(() => {
      if (element.tagName === "IMG") {
        element.src = newContent;
      } else {
        element.innerHTML = newContent;
      }
      element.classList.add("fade");
    }, delay);
  }
  
  
  function updateHero(data) {
    activeData = data;
    
    animateUpdate(heroTitle, data.title, 0);
    animateUpdate(heroSubtitle, data.subtitle, 100);
    heroButton.style.backgroundColor = data.bgColor;
    animateUpdate(heroButton, "Buy and Listen", 100);
    animateUpdate(heroImage, data.image, 100);
  }
  
 
  window.addEventListener("DOMContentLoaded", () => {
    
    heroTitle.classList.add("fade");
    heroSubtitle.classList.add("fade");
    heroButton.classList.add("fade");
    heroImage.classList.add("fade");
    
    document.querySelectorAll(".thumb").forEach((thumb, index) => {
      setTimeout(() => {
        thumb.classList.add("fade");
      }, 100 * index);
    });
  });
  
  
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const id = parseInt(thumb.getAttribute("data-id"), 10);
      const data = headphoneData.find((item) => item.id === id);
      if (data && data.id !== activeData.id) {
        updateHero(data);
      }
    });
  });
  